/**
 * Offline audio rendering.
 *
 * Renders the enabled tracks of a score into a single AudioBuffer using the *same*
 * event list that drives the animation, so a note cannot be heard at a different
 * time from the moment its orb lands on it.
 */

import type { Track } from '../core/types';
import { midiToFreq, instrumentFor, type InstrumentSpec } from './instruments';
import { defaultDynamic } from '../core/dynamics';
import type { ScoreLayout } from '../core/layout';

export interface RenderOptions {
  sampleRate: number;
  /** Playback rate: 1 = as written. */
  tempoScale: number;
  /** Seconds of tail after the last note. */
  tail: number;
  masterGain: number;
}

export const DEFAULT_RENDER: RenderOptions = {
  sampleRate: 44100,
  tempoScale: 1,
  tail: 1.6,
  // The dry and reverb sends sum on the way out, so the peak lands a little
  // above the master value. 0.62 keeps the loudest chords under full scale
  // rather than clipping them.
  masterGain: 0.62,
};

/**
 * Every note is struck at one fixed velocity, and the notated dynamics are
 * deliberately not read.
 *
 * They used to be, and that is where "sometimes one track goes quiet" came from.
 * `DYNAMIC_VALUE` runs from `pppppp` (0.06) to `fffff` (1.0), so a lane marked
 * `pp` was already half the level of one marked `mp` — before any hairpin. A
 * `<diminuendo>` was worse: the wedge curve bottoms out at its 0.05 clamp and
 * then *holds* there until the next dynamic mark, which can be a whole system
 * away, so a lane could sit an order of magnitude below its neighbours.
 *
 * The orbs still brighten and dim with the marks (`dynamicCurve` in the scene);
 * only the mix is flat.
 */
const STEADY_VELOCITY = defaultDynamic;

const waveCache = new WeakMap<BaseAudioContext, Map<string, PeriodicWave>>();

function getWave(ctx: BaseAudioContext, spec: InstrumentSpec): PeriodicWave {
  let bySpec = waveCache.get(ctx);
  if (!bySpec) {
    bySpec = new Map();
    waveCache.set(ctx, bySpec);
  }
  const key = spec.family;
  const hit = bySpec.get(key);
  if (hit) return hit;
  const real = new Float32Array(spec.harmonics.length);
  const imag = new Float32Array(spec.harmonics.length);
  for (let i = 0; i < spec.harmonics.length; i++) {
    imag[i] = spec.harmonics[i] * Math.sin(2 * Math.PI * spec.phases[i]);
  }
  const wave = ctx.createPeriodicWave(real, imag, { disableNormalization: false });
  bySpec.set(key, wave);
  return wave;
}

let noiseBuffer: AudioBuffer | null = null;
function getNoise(ctx: BaseAudioContext): AudioBuffer {
  if (noiseBuffer && noiseBuffer.sampleRate === ctx.sampleRate) return noiseBuffer;
  const len = Math.floor(ctx.sampleRate * 0.6);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const ch = buf.getChannelData(0);
  let seed = 0x2f6e2b1;
  for (let i = 0; i < len; i++) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    ch[i] = (seed / 0xffffffff) * 2 - 1;
  }
  noiseBuffer = buf;
  return buf;
}

/**
 * Impulse response for the reverb send. Cached per sample rate: every chunk
 * builds a fresh OfflineAudioContext, and regenerating (and re-uploading) a
 * two-second stereo IR for each one is pure waste on a long piece.
 */
const irCache = new Map<number, AudioBuffer>();
function getReverbIR(ctx: BaseAudioContext, seconds = 1.6): AudioBuffer {
  const hit = irCache.get(ctx.sampleRate);
  if (hit) return hit;
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  let seed = 0x9e3779b9;
  for (let c = 0; c < 2; c++) {
    const ch = buf.getChannelData(c);
    for (let i = 0; i < len; i++) {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      const r = (seed / 0xffffffff) * 2 - 1;
      const t = i / len;
      ch[i] = r * Math.pow(1 - t, 2.6) * (i < 200 ? i / 200 : 1);
    }
  }
  irCache.set(ctx.sampleRate, buf);
  return buf;
}

/** Short, gentle fade in/out applied to the whole take. */
function addFades(buf: AudioBuffer, fadeIn = 0.012, fadeOut = 0.05) {
  for (let c = 0; c < buf.numberOfChannels; c++) {
    const ch = buf.getChannelData(c);
    const inN = Math.min(ch.length, Math.floor(buf.sampleRate * fadeIn));
    for (let i = 0; i < inN; i++) ch[i] *= i / inN;
    const outN = Math.min(ch.length, Math.floor(buf.sampleRate * fadeOut));
    for (let i = 0; i < outN; i++) {
      const j = ch.length - 1 - i;
      ch[j] *= i / outN;
    }
  }
}

/** Seconds of silence rendered before a chunk so notes can ring in without clicks. */
const CHUNK_PRE = 0.45;
/** How far back a chunk looks for notes that started earlier but are still sounding. */
const CHUNK_LOOKBACK = 4;

export interface RenderProgress {
  (done: number, total: number): void;
}

/**
 * Render the enabled tracks to a single AudioBuffer.
 *
 * Done in short chunks rather than one giant OfflineAudioContext: a four-minute
 * piece is thousands of notes, and building that many nodes in a single graph is
 * slow enough to look like a hang. Chunking also lets the UI report progress, and
 * lets the browser keep painting between chunks.
 */
export async function renderScore(
  layout: ScoreLayout,
  tracks: Track[],
  window_: { startSec: number; endSec: number },
  optsIn: Partial<RenderOptions> = {},
  onProgress?: RenderProgress,
): Promise<AudioBuffer> {
  const opts = { ...DEFAULT_RENDER, ...optsIn };
  const sr = opts.sampleRate;
  const rate = opts.tempoScale;
  const dur = Math.max(0.05, window_.endSec - window_.startSec);
  const total = Math.ceil((dur + opts.tail) * sr);
  const out = new AudioBuffer({ numberOfChannels: 2, length: total, sampleRate: sr });
  const outL = out.getChannelData(0);
  const outR = out.getChannelData(1);

  const laneIndex = new Map<string, number>();
  layout.lanes.forEach((l, i) => laneIndex.set(l.track.id, i));
  const laneCount = Math.max(1, layout.lanes.length);

  // Pre-flatten the note list once so each chunk only scans what it needs.
  // No `vel` field: velocity is fixed for the whole take (see STEADY_VELOCITY),
  // so carrying it per note would only suggest it varies.
  interface Scheduled {
    trackId: string;
    spec: InstrumentSpec;
    pan: number;
    onset: number;
    dur: number;
    midi: number;
    seed: number;
  }
  const plan: Scheduled[] = [];
  for (const track of tracks) {
    const spec = instrumentFor(track);
    const idx = laneIndex.get(track.id) ?? 0;
    const pan = laneCount <= 1 ? 0 : (idx / (laneCount - 1)) * 1.3 - 0.65;
    for (const ev of track.events) {
      if (ev.rest || ev.grace || !ev.pitches.length) continue;
      const onset = (ev.onsetSec - window_.startSec) / rate;
      const d = ev.durSec / rate;
      if (onset + d < -0.05 || onset > dur) continue;
      for (const p of ev.pitches) {
        const midi = p.midi + track.transpose;
        if (midi < 12 || midi > 120) continue;
        // Deterministic per-note seed, so two renders of the same score are identical.
        let h = 2166136261;
        for (const ch of `${track.id}|${ev.onsetSec}|${midi}`) {
          h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
        }
        plan.push({ trackId: track.id, spec, pan, onset, dur: d, midi, seed: h >>> 0 });
      }
    }
  }
  plan.sort((a, b) => a.onset - b.onset);

  const CHUNK = 8;
  const chunks = Math.max(1, Math.ceil(dur / CHUNK));
  // Forward-only scan pointer into the sorted plan: each chunk starts where the
  // previous one stopped, so the whole render is O(notes + chunks).
  let scan = 0;

  for (let c = 0; c < chunks; c++) {
    const chunkStart = c * CHUNK;
    const chunkEnd = Math.min(dur, chunkStart + CHUNK);
    const from = chunkStart - CHUNK_PRE;
    const to = chunkEnd + opts.tail;

    while (scan < plan.length && plan[scan].onset < chunkStart) scan++;
    const ctx = new OfflineAudioContext(2, Math.ceil((to - from) * sr), sr);
    const master = buildMaster(ctx, opts);

    const buses = new Map<string, Bus>();
    for (let i = scan; i < plan.length; i++) {
      const s = plan[i];
      if (s.onset >= chunkEnd) break;
      // Still-sounding notes from before this chunk have to keep ringing.
      if (s.onset + s.dur + CHUNK_LOOKBACK < from) continue;
      let b = buses.get(s.trackId);
      if (!b) {
        b = makeBus(ctx, s.pan, laneCount, s.spec, from, to, master);
        buses.set(s.trackId, b);
      }
      playNote(ctx, b.bus, s.spec, midiToFreq(s.midi), s.onset - from, Math.max(0.03, s.dur), STEADY_VELOCITY, s.seed, b.vibrato);
    }

    const rendered = await ctx.startRendering();

    // Copy past the pre-roll so nothing sounds early.
    const skip = Math.floor(CHUNK_PRE * sr);
    const destStart = Math.floor(chunkStart * sr);
    const n = Math.min(rendered.length - skip, total - destStart);
    for (let ch = 0; ch < 2; ch++) {
      const src = rendered.getChannelData(ch);
      const dst = ch === 0 ? outL : outR;
      for (let i = 0; i < n; i++) dst[destStart + i] = src[skip + i];
    }

    onProgress?.(c + 1, chunks);
    // Give the browser a chance to paint the progress bar.
    if (c < chunks - 1) await new Promise((r) => setTimeout(r, 0));
  }

  addFades(out);
  return out;
}

/** tanh soft clip: keeps the output inside +/-1 no matter how many voices stack. */
function softClipCurve() {
  const n = 2048;
  const curve = new Float32Array(n);
  const k = 1.7;
  const norm = Math.tanh(k);
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * 2 - 1;
    curve[i] = Math.tanh(k * x) / norm;
  }
  return curve;
}

/** Build the master bus and return the input every lane should feed. */
function buildMaster(ctx: OfflineAudioContext, opts: RenderOptions): GainNode {
  const master = ctx.createGain();
  master.gain.value = opts.masterGain;

  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -16;
  comp.knee.value = 22;
  comp.ratio.value = 3.2;
  comp.attack.value = 0.008;
  comp.release.value = 0.22;

  const dry = ctx.createGain();
  dry.gain.value = 0.86;
  const wet = ctx.createGain();
  wet.gain.value = 0.2;
  const conv = ctx.createConvolver();
  conv.buffer = getReverbIR(ctx);

  master.connect(dry);
  master.connect(conv);
  conv.connect(wet);
  dry.connect(comp);
  wet.connect(comp);
  // The compressor shapes, this guarantees the ceiling. Without it, a four-voice
  // piece sums past full scale and the take clips.
  const limiter = ctx.createWaveShaper();
  limiter.curve = softClipCurve();
  comp.connect(limiter);
  limiter.connect(ctx.destination);

  return master;
}

function makeBus(
  ctx: OfflineAudioContext,
  panValue: number,
  laneCount: number,
  spec: InstrumentSpec,
  from: number,
  to: number,
  master: GainNode,
) {
  const pan = ctx.createStereoPanner();
  pan.pan.value = panValue;
  const bus = ctx.createGain();
  // Normalise per lane so adding voices lowers the sum instead of stacking it.
  bus.gain.value = 0.9 / Math.max(1, Math.sqrt(laneCount) * 1.15);
  bus.connect(pan);
  // Without this the whole lane chain dead-ends and the render is silent.
  pan.connect(master);

  // One shared vibrato LFO per lane rather than a pair for every single note.
  // `from` is negative for the first chunk's pre-roll, and Web Audio refuses a
  // negative start time.
  let vibrato: GainNode | null = null;
  if (spec.vibratoHz > 0 && spec.vibratoCents > 0) {
    const lfo = ctx.createOscillator();
    lfo.frequency.value = spec.vibratoHz;
    const g = ctx.createGain();
    g.gain.value = spec.vibratoCents;
    lfo.connect(g);
    lfo.start(Math.max(0, from));
    lfo.stop(to);
    vibrato = g;
  }

  return { bus: pan, vibrato };
}

interface Bus {
  bus: AudioNode;
  vibrato: GainNode | null;
}

interface Envelope {
  atk: number;
  hold: number;
  rel: number;
  /** Breakpoints in note-local seconds, as [time, gain] pairs. */
  pts: Array<[number, number]>;
}

function buildEnvelope(spec: InstrumentSpec, durSec: number, velocity: number): Envelope {
  const peak = Math.max(0.02, spec.gain * velocity * 0.9);
  const atk = Math.max(0.001, spec.attack);
  const dec = Math.max(0.01, spec.decay);
  const rel = Math.max(0.02, spec.release);
  // Keep the breakpoints monotonic even for very short notes, so the sustain
  // value is not scheduled before the decay has finished.
  const hold = Math.max(atk + dec, Math.max(0.01, durSec - atk * 0.5));
  const sustain = Math.max(0.0002, peak * spec.sustain);
  return {
    atk,
    hold,
    rel,
    pts: [
      [0, 0.0001],
      [atk, peak],
      [atk + dec, sustain],
      [hold, sustain],
      [hold + rel, 0.0001],
    ],
  };
}

/** Envelope value `t` seconds into a note, linearly interpolated. */
function envValue(pts: Array<[number, number]>, t: number): number {
  if (t <= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) {
    if (t <= pts[i][0]) {
      const [t0, v0] = pts[i - 1];
      const [t1, v1] = pts[i];
      const k = t1 === t0 ? 0 : (t - t0) / (t1 - t0);
      return v0 + (v1 - v0) * k;
    }
  }
  return pts[pts.length - 1][1];
}

/**
 * Schedule one note.
 *
 * `when` is the onset in context time and may be *negative*: a note that started
 * before this chunk but is still sounding gets scheduled at the start of the
 * chunk, entering part-way through its envelope rather than re-attacking.
 */
function playNote(
  ctx: OfflineAudioContext,
  dest: AudioNode,
  spec: InstrumentSpec,
  freq: number,
  when: number,
  durSec: number,
  velocity: number,
  seed: number,
  vibrato: GainNode | null,
) {
  const env = buildEnvelope(spec, durSec, velocity);
  const start = Math.max(0, when);
  const elapsed = start - when;
  if (elapsed >= env.hold + env.rel) return; // already finished — nothing to render

  const osc = ctx.createOscillator();
  osc.setPeriodicWave(getWave(ctx, spec));
  osc.frequency.value = freq;
  if (spec.detuneCents) {
    // Seeded rather than Math.random(), so re-rendering a score is bit-identical.
    osc.detune.value = ((seed % 2000) / 1000 - 1) * spec.detuneCents;
  }
  if (vibrato) vibrato.connect(osc.detune);

  const amp = ctx.createGain();
  const g = amp.gain;
  g.setValueAtTime(envValue(env.pts, elapsed), start);
  for (const [lt, v] of env.pts) {
    if (lt <= elapsed + 1e-6) continue;
    g.exponentialRampToValueAtTime(Math.max(0.0002, v), start + (lt - elapsed));
  }
  const end = start + (env.hold + env.rel - elapsed);

  const filt = ctx.createBiquadFilter();
  filt.type = 'lowpass';
  filt.frequency.value = Math.min(16000, freq * (2 + spec.brightness * 8));
  filt.Q.value = 0.6;

  osc.connect(filt);
  filt.connect(amp);
  amp.connect(dest);
  osc.start(start);
  osc.stop(end + 0.05);

  // Attack noise (breath, bow scrape, key noise). Only on notes that are still
  // within their attack, so a mid-sustain entry does not re-attack.
  if (spec.noise > 0 && elapsed < env.atk * 0.5 + 0.02) {
    const nLen = Math.max(0.02, Math.min(0.22, env.atk + 0.12));
    const src = ctx.createBufferSource();
    src.buffer = getNoise(ctx);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1400;
    bp.Q.value = 0.7;
    const ng = ctx.createGain();
    ng.gain.setValueAtTime(0.0001, start);
    ng.gain.exponentialRampToValueAtTime(
      Math.max(0.0002, env.pts[1][1] * spec.noise * 0.55),
      start + Math.max(0.002, env.atk * 0.5),
    );
    ng.gain.exponentialRampToValueAtTime(0.0001, start + nLen);
    src.connect(bp);
    bp.connect(ng);
    ng.connect(dest);
    src.start(start, (seed % 4000) / 10000);
    src.stop(start + nLen + 0.02);
  }
}

/**
 * Copy the `[fromSec, toSec)` score-time window out of `buf`, where `buf` holds
 * the audio starting at score time `offsetSec`.
 *
 * The exporter needs an audio track exactly as long as the video. Without this
 * it would mux whatever the preview happened to render, which is longer by the
 * render's release tail and can be offset entirely if the excerpt moved.
 */
export function sliceWindow(
  buf: AudioBuffer,
  offsetSec: number,
  fromSec: number,
  toSec: number,
): AudioBuffer {
  const sr = buf.sampleRate;
  const a = Math.max(0, Math.min(buf.length, Math.round((fromSec - offsetSec) * sr)));
  const b = Math.max(a, Math.min(buf.length, Math.round((toSec - offsetSec) * sr)));
  const len = Math.max(1, b - a);
  const out = new AudioBuffer({ numberOfChannels: buf.numberOfChannels, length: len, sampleRate: sr });
  for (let c = 0; c < buf.numberOfChannels; c++) {
    out.copyToChannel(buf.getChannelData(c).subarray(a, b), c, 0);
  }
  return out;
}

/** 16-bit PCM WAV, used for the separate audio download. */
export function audioBufferToWav(buf: AudioBuffer): Blob {
  const chans = buf.numberOfChannels;
  const len = buf.length;
  const bytes = 44 + len * chans * 2;
  const view = new DataView(new ArrayBuffer(bytes));
  const str = (off: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i));
  };
  str(0, 'RIFF');
  view.setUint32(4, bytes - 8, true);
  str(8, 'WAVE');
  str(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, chans, true);
  view.setUint32(24, buf.sampleRate, true);
  view.setUint32(28, buf.sampleRate * chans * 2, true);
  view.setUint16(32, chans * 2, true);
  view.setUint16(34, 16, true);
  str(36, 'data');
  view.setUint32(40, len * chans * 2, true);

  const data: Float32Array[] = [];
  for (let c = 0; c < chans; c++) data.push(buf.getChannelData(c));
  let off = 44;
  for (let i = 0; i < len; i++) {
    for (let c = 0; c < chans; c++) {
      const s = Math.max(-1, Math.min(1, data[c][i]));
      view.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7fff, true);
      off += 2;
    }
  }
  return new Blob([view], { type: 'audio/wav' });
}
