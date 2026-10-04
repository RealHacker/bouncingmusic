/**
 * MusicXML -> ScoreModel.
 *
 * Handles the parts of the format that actually matter for a time-based animation:
 * per (part, staff, voice) cursors, <backup>/<forward>, chords, ties, grace notes,
 * tuplets, tempo changes, dynamics and hairpins.
 *
 * Durations are normalised to *quarter-note beats* as soon as they are read, so a
 * mid-piece change of <divisions> can never corrupt the timeline.
 */

import {
  DYNAMIC_VALUE,
  STEP_DIA,
  STEP_SEMI,
  isDynamicName,
  type Annotation,
  type Clef,
  type ClefChange,
  type DynamicMark,
  type NoteEvent,
  type Pitch,
  type ScoreModel,
  type Step,
  type TempoPoint,
  type Track,
  type Wedge,
} from './types';
import { attr, deep, kid, kids, localName, numOf, staffNumberOf, textOf } from './ingest';

const BEAT_UNIT_QUARTERS: Record<string, number> = {
  whole: 4, half: 2, quarter: 1, eighth: 0.5,
  '16th': 0.25, '32nd': 0.125, '64th': 0.0625, breve: 8, long: 16,
};

let nextEventId = 1;

interface Lane {
  id: string;
  partId: string;
  partName: string;
  staffNo: number;
  voiceNo: string;
  clef: Clef;
  clefTimeline: ClefChange[];
  keyFifths: number;
  transpose: number;
  midiProgram: number | null;
  /** Cursor in quarter-note beats. */
  cursor: number;
  events: NoteEvent[];
  lastEvent: NoteEvent | null;
  sounding: boolean;
}

const key = (partId: string, staff: number, voice: string) => `${partId}/${staff}/${voice}`;

/**
 * Fallback title for scores with no <work-title>. Library filenames tend to be
 * slug-like ("Fur_Elise_-_Beethoven_-_for_beginner_piano.mxl"), so the
 * separators are turned back into spaces and the extension dropped — much more
 * use than a flat "Untitled".
 */
function titleFromFilename(sourceName: string): string {
  const base = sourceName.split(/[\\/]/).pop() ?? sourceName;
  const stem = base.replace(/\.(mxl|xml|musicxml)$/i, '');
  const cleaned = stem
    .replace(/[_]+/g, ' ')
    .replace(/\s*-\s*/g, ' — ')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned || base || 'Untitled';
}

function readPitch(note: Element): Pitch | null {
  const p = kid(note, 'pitch');
  if (!p) return null;
  const step = textOf(p, 'step', 'C').toUpperCase() as Step;
  const alter = numOf(p, 'alter', 0);
  const octave = numOf(p, 'octave', 4);
  if (!(step in STEP_SEMI)) return null;
  return {
    step,
    alter,
    octave,
    midi: (octave + 1) * 12 + STEP_SEMI[step] + alter,
    dia: STEP_DIA[step] + octave * 7,
  };
}

function hasTie(note: Element, notations: Element | null, type: 'start' | 'stop'): boolean {
  for (const t of kids(note, 'tie')) if (attr(t, 'type') === type) return true;
  for (const n of kids(notations, 'tied')) if (attr(n, 'type') === type) return true;
  return false;
}

export function parseMusicXML(doc: Document, sourceName: string): ScoreModel {
  const root = doc.documentElement;
  const warnings: string[] = [];

  if (localName(root) !== 'score-partwise') {
    if (localName(root) === 'score-timewise') {
      throw new Error('This is a timewise MusicXML file. Please re-save it as "MusicXML (partwise)".');
    }
    throw new Error(`Expected a <score-partwise> document but found <${localName(root)}>.`);
  }

  // ---------------- part list ----------------
  const partMeta = new Map<string, { name: string; midiProgram: number | null }>();
  for (const sp of kids(kid(root, 'part-list'), 'score-part')) {
    const id = attr(sp, 'id');
    const name =
      deep(sp, 'part-name')?.textContent?.trim() ||
      kid(sp, 'part-name')?.textContent?.trim() ||
      id;
    const prog = numOf(deep(sp, 'midi-instrument'), 'midi-program', -1);
    partMeta.set(id, { name, midiProgram: prog >= 0 ? prog : null });
  }

  // ---------------- shared state ----------------
  const defaultClef: Clef = { sign: 'G', line: 2 };
  let keyFifths = 0;
  let beats = 4;
  let beatType = 4;
  let defaultSecPerBeat = 0.5;

  const tempoMap: TempoPoint[] = [];
  const measureBeats: number[] = [];
  const timeSigs: { measure: number; beats: number; beatType: number }[] = [];
  const dynamics: DynamicMark[] = [];
  const wedges: Wedge[] = [];
  const annotations: Annotation[] = [];
  const lanes = new Map<string, Lane>();
  /** Per-part parse context, kept so clefs can be resolved once the part is done. */
  const partCtxById = new Map<string, PartCtx>();

  let noteCount = 0;
  let graceCount = 0;
  let unknownDynamics = 0;

  function ensureLane(partId: string, staff: number, voice: string, ctx: PartCtx): Lane {
    const k = key(partId, staff, voice);
    let lane = lanes.get(k);
    if (!lane) {
      lane = {
        id: k,
        partId,
        partName: partMeta.get(partId)?.name ?? partId,
        staffNo: staff,
        voiceNo: voice,
        clef: { ...(ctx.clefs.get(staff) ?? defaultClef) },
        clefTimeline: (ctx.clefTimeline.get(staff) ?? []).map((c) => ({
          beat: c.beat,
          clef: { ...c.clef },
        })),
        keyFifths,
        transpose: ctx.transpose,
        midiProgram: partMeta.get(partId)?.midiProgram ?? null,
        cursor: 0,
        events: [],
        lastEvent: null,
        sounding: false,
      };
      lanes.set(k, lane);
    }
    return lane;
  }

  function partCursorPos(partLanes: Lane[], staff: number | null): number {
    const pool = staff === null ? partLanes : partLanes.filter((l) => l.staffNo === staff);
    if (!pool.length) return NaN;
    return pool.reduce((m, l) => Math.min(m, l.cursor), Infinity);
  }

  const parts = kids(root, 'part');

  parts.forEach((partEl, partIndex) => {
    const partId = attr(partEl, 'id', `P${partIndex + 1}`);
    const partLanes = () => [...lanes.values()].filter((l) => l.partId === partId);
    const ctx: PartCtx = {
      clefs: new Map([[1, { ...defaultClef } as Clef]]),
      clefTimeline: new Map([[1, [{ beat: 0, clef: { ...defaultClef } }] as ClefChange[]]]),
      transpose: 0,
    };
    // Clef changes are declared where they happen, which may be after the first
    // note of a staff, so the finished timeline is only trustworthy once the
    // whole part has been read. Keep the context to resolve it at assembly time.
    partCtxById.set(partId, ctx);
    let divisions = 1;
    let sawTimeSig = false;
    /** Staff most recently written to; a bare <backup> rewinds this one. */
    let lastStaff = 1;

    for (const measureEl of kids(partEl, 'measure')) {
      const measureStart = partCursorPos(partLanes(), null);
      if (partIndex === 0) measureBeats.push(Number.isFinite(measureStart) ? measureStart : 0);

      for (const node of Array.from(measureEl.children)) {
        const tag = localName(node);

        switch (tag) {
          case 'attributes': {
            const div = numOf(node, 'divisions', 0);
            if (div > 0) divisions = div;

            const k = kid(node, 'key');
            if (k) {
              keyFifths = numOf(k, 'fifths', keyFifths);
              for (const l of partLanes()) l.keyFifths = keyFifths;
            }

            const time = kid(node, 'time');
            if (time) {
              beats = numOf(time, 'beats', beats) || beats;
              beatType = numOf(time, 'beat-type', beatType) || beatType;
              sawTimeSig = true;
              timeSigs.push({ measure: Math.max(0, measureBeats.length - 1), beats, beatType });
            }

            for (const cl of kids(node, 'clef')) {
              const sign = textOf(cl, 'sign', 'G') as Clef['sign'];
              const line = numOf(cl, 'line', sign === 'F' ? 4 : sign === 'G' ? 2 : 3);
              const staffNo = staffNumberOf(cl, 1);
              const clef: Clef = { sign, line };
              ctx.clefs.set(staffNo, clef);
              // A part may change clef part-way through (a left hand that moves
              // up is normally re-notated in treble). Record where it happens
              // instead of overwriting, or the whole track gets laid out against
              // whichever clef happened to be declared last.
              // The change applies from here on, which is the current position
              // in the part — not the start of the measure. A file may declare
              // several clefs inside one measure, and collapsing them onto the
              // same beat would let the last one swallow the rest.
              // Lanes that have not started yet sit at cursor 0 and would drag
              // this to the beginning of the piece, so ignore them.
              const started = partLanes().filter((l) => l.cursor > 0);
              const atBeat = started.length
                ? started.reduce((m, l) => Math.min(m, l.cursor), Infinity)
                : 0;
              const timeline = ctx.clefTimeline.get(staffNo) ?? [];
              const prev = timeline[timeline.length - 1];
              if (prev && prev.clef.sign === clef.sign && prev.clef.line === clef.line) {
                // Same clef re-declared; nothing to record.
              } else {
                timeline.push({ beat: atBeat, clef });
              }
              ctx.clefTimeline.set(staffNo, timeline);
            }

            for (const tr of kids(node, 'transpose')) {
              ctx.transpose = numOf(tr, 'chromatic', ctx.transpose);
              for (const l of partLanes()) l.transpose = ctx.transpose;
            }
            break;
          }

          case 'note': {
            const isChord = !!kid(node, 'chord');
            const isRest = !!kid(node, 'rest');
            const isGrace = !!kid(node, 'grace');
            const voice = textOf(node, 'voice', '1');
            const staffNo = numOf(node, 'staff', 1) || 1;
            const lane = ensureLane(partId, staffNo, voice, ctx);
            if (!isChord) lastStaff = staffNo;

            // <divisions> counts divisions per quarter note, so this is already
            // in quarter-note beats.
            const durBeat = isGrace ? 0 : numOf(node, 'duration', 0) / divisions;
            const notations = kid(node, 'notations');
            const tm = kid(node, 'time-modification');
            const timeMod = tm
              ? { actual: numOf(tm, 'actual-notes', 1) || 1, normal: numOf(tm, 'normal-notes', 1) || 1 }
              : null;

            if (isChord && lane.lastEvent) {
              const pitch = isRest ? null : readPitch(node);
              if (pitch) lane.lastEvent.pitches.push(pitch);
              break;
            }

            noteCount++;
            if (isGrace) graceCount++;
            const ev: NoteEvent = {
              id: nextEventId++,
              trackId: lane.id,
              onsetBeat: lane.cursor,
              durBeat,
              onsetSec: 0,
              durSec: 0,
              pitches: [],
              rest: isRest,
              tieStart: hasTie(node, notations, 'start'),
              tieStop: hasTie(node, notations, 'stop'),
              grace: isGrace,
              dots: kids(node, 'dot').length,
              timeMod,
              typeName: textOf(node, 'type', isRest ? 'rest' : 'quarter'),
              stems: kid(node, 'stem')?.textContent?.trim() ?? null,
              x: 0, y: 0, lane: 0, staffStep: 0, stemUp: true, clefBottomDia: 0,
            };
            const pitch = isRest ? null : readPitch(node);
            if (pitch) {
              ev.pitches.push(pitch);
              lane.sounding = true;
            }
            lane.events.push(ev);
            lane.lastEvent = ev;
            if (!isGrace) lane.cursor += durBeat;
            break;
          }

          case 'backup':
          case 'forward': {
            const delta = numOf(node, 'duration', 0) / divisions;
            const sign = tag === 'backup' ? -1 : 1;
            // A bare <backup> rewinds only the staff that was last written to.
            // Rewinding every lane would collapse each measure onto the previous
            // one, which is exactly what happens with two-staff piano parts.
            const staffNo = kid(node, 'staff') ? numOf(node, 'staff', 1) : lastStaff;
            const targets = partLanes().filter((l) => l.staffNo === staffNo);
            for (const l of targets) l.cursor = Math.max(0, l.cursor + sign * delta);
            break;
          }

          case 'direction': {
            const staffNo = kid(node, 'staff') ? numOf(node, 'staff', 1) : null;
            let beat = partCursorPos(partLanes(), staffNo);
            if (!Number.isFinite(beat)) beat = Number.isFinite(measureStart) ? measureStart : 0;

            // <direction offset> is in divisions; we deliberately ignore it (rare, and
            // it would need the divisions value that is out of scope here).
            const voice = textOf(node, 'voice', '');
            const trackId = pickTrack(lanes, partId, staffNo ?? 1, voice);

            const sound = kid(node, 'sound');
            const metro = deep(node, 'metronome');
            let secPerBeat: number | null = null;
            if (metro) {
              const raw = textOf(metro, 'beat-unit', 'quarter');
              const dotted = !!kid(metro, 'beat-unit-dot') || raw.endsWith('.');
              const base = BEAT_UNIT_QUARTERS[raw.replace(/\.$/, '')] ?? 1;
              const inQuarters = dotted ? base * 1.5 : base;
              const perMinute = numOf(metro, 'per-minute', 0);
              if (perMinute > 0) secPerBeat = 60 / (perMinute * inQuarters);
            }
            if (secPerBeat === null && sound) {
              const t = Number(sound.getAttribute('tempo'));
              if (Number.isFinite(t) && t > 0) secPerBeat = 60 / t;
            }
            if (secPerBeat !== null) {
              const prev = tempoMap[tempoMap.length - 1];
              if (prev && Math.abs(prev.beat - beat) < 1e-6) prev.secPerBeat = secPerBeat;
              else tempoMap.push({ beat, secPerBeat });
              defaultSecPerBeat = secPerBeat;
            }

            for (const dt of kids(node, 'direction-type')) {
              const dyn = kid(dt, 'dynamics');
              if (dyn) {
                for (const c of Array.from(dyn.children)) {
                  const nm = localName(c);
                  if (isDynamicName(nm)) {
                    dynamics.push({ beat, kind: nm, value: DYNAMIC_VALUE[nm], trackId });
                  } else if (nm !== 'other-dynamics') {
                    unknownDynamics++;
                  }
                }
              }
              for (const w of kids(dt, 'wedge')) {
                const type = attr(w, 'type');
                if (type === 'crescendo') wedges.push({ beat, dir: 1, trackId });
                else if (type === 'diminuendo') wedges.push({ beat, dir: -1, trackId });
              }
              for (const w of kids(dt, 'words')) {
                const text = w.textContent?.trim();
                if (!text) continue;
                annotations.push({
                  beat, text, trackId,
                  above: attr(node, 'placement') === 'above',
                });
                if (/\bcresc|\bcrescendo/i.test(text)) wedges.push({ beat, dir: 1, trackId });
                else if (/\bdim(in)?\b|\bdiminuendo/i.test(text)) wedges.push({ beat, dir: -1, trackId });
              }
            }
            break;
          }
        }
      }

      // Implied rests: a lane that has not reached the end of the measure catches up.
      const end = partLanes().reduce((m, l) => Math.max(m, l.cursor), 0);
      for (const l of partLanes()) if (l.cursor < end - 1e-9) l.cursor = end;
    }

    if (partIndex === 0 && !sawTimeSig) timeSigs.push({ measure: 0, beats, beatType });
  });

  if (!tempoMap.length) tempoMap.push({ beat: 0, secPerBeat: defaultSecPerBeat });
  tempoMap.sort((a, b) => a.beat - b.beat);
  for (let i = tempoMap.length - 1; i > 0; i--) {
    if (Math.abs(tempoMap[i].beat - tempoMap[i - 1].beat) < 1e-6) tempoMap.splice(i - 1, 1);
  }
  const beatToSec = makeBeatToSec(tempoMap);

  // ---------------- assemble tracks ----------------
  const all: Track[] = [];
  for (const l of lanes.values()) {
    if (!l.events.some((e) => e.pitches.length)) continue;
    for (const ev of l.events) {
      ev.onsetSec = beatToSec(ev.onsetBeat);
      ev.durSec = Math.max(0, beatToSec(ev.onsetBeat + ev.durBeat) - ev.onsetSec);
    }
    l.events.sort((a, b) => a.onsetBeat - b.onsetBeat || a.id - b.id);
    mergeUnflaggedChords(l.events);
    const rawTimeline = partCtxById.get(l.partId)?.clefTimeline.get(l.staffNo) ?? l.clefTimeline;
    // Document order should already be musical order, but guard against it:
    // a timeline with out-of-order beats would resolve the wrong clef.
    const staffTimeline = [...rawTimeline]
      .sort((a, b) => a.beat - b.beat)
      .filter((c, i, arr) => i === 0 || c.beat !== arr[i - 1].beat);
    all.push({
      id: l.id,
      partId: l.partId,
      partName: l.partName,
      staffNo: l.staffNo,
      voiceNo: l.voiceNo,
      clef: staffTimeline[0]?.clef ?? l.clef,
      clefTimeline: staffTimeline,
      keyFifths: l.keyFifths,
      transpose: l.transpose,
      midiProgram: l.midiProgram,
      events: l.events,
      sounding: true,
    });
  }

  // Highest voice on top reads like a score.
  all.sort(
    (a, b) =>
      avgPitch(b) - avgPitch(a) ||
      a.partId.localeCompare(b.partId) ||
      a.staffNo - b.staffNo ||
      a.voiceNo.localeCompare(b.voiceNo),
  );

  const perPart = new Map<string, number>();
  for (const t of all) {
    const n = (perPart.get(t.partId) ?? 0) + 1;
    perPart.set(t.partId, n);
    t.partName = n > 1 ? `${t.partName} · ${n}` : t.partName;
  }

  let durationSec = 0;
  for (const t of all) {
    for (const e of t.events) durationSec = Math.max(durationSec, e.onsetSec + e.durSec);
  }

  if (graceCount) {
    warnings.push(`${graceCount} grace note(s) — drawn, but they do not advance the clock.`);
  }
  if (unknownDynamics) {
    warnings.push(`${unknownDynamics} uncommon dynamic marking(s) ignored.`);
  }

  return {
    title: deep(root, 'work-title')?.textContent?.trim() || deep(root, 'movement-title')?.textContent?.trim() || titleFromFilename(sourceName),
    composer: (() => {
      for (const c of kids(kid(root, 'identification'), 'creator')) {
        if (attr(c, 'type') === 'composer') return c.textContent?.trim() || '';
      }
      return '';
    })(),
    sourceName,
    timeSigs: dedupeTimeSigs(timeSigs),
    keyFifths,
    tempoMap,
    measureBeats,
    tracks: all,
    dynamics,
    wedges,
    annotations,
    durationSec,
    noteCount,
    warnings,
  };
}

interface PartCtx {
  clefs: Map<number, Clef>;
  /** Clef changes per staff, ordered by beat. */
  clefTimeline: Map<number, ClefChange[]>;
  transpose: number;
}

function pickTrack(lanes: Map<string, Lane>, partId: string, staff: number, voice: string): string {
  if (voice) {
    const exact = lanes.get(key(partId, staff, voice));
    if (exact) return exact.id;
  }
  const candidates = [...lanes.values()].filter((l) => l.partId === partId && l.staffNo === staff);
  return candidates.length ? candidates[0].id : key(partId, staff, voice || '1');
}

function avgPitch(t: Track): number {
  let sum = 0;
  let n = 0;
  for (const e of t.events) for (const p of e.pitches) { sum += p.midi; n++; }
  return n ? sum / n : -1e9;
}

const EPS = 1e-6;

/**
 * Fold events that sound together into one chord.
 *
 * MusicXML marks the extra notes of a chord with <chord/>, and `parse` already
 * merges those as it reads. Plenty of library files, though, simply write two
 * notes at the same cursor with no <chord/> flag. Left alone that produces two
 * separate events drawn at exactly the same x — two note heads on top of each
 * other instead of side by side, two stems, two note sounds, and an orb whose
 * binary search only ever lands on the last of the pair. It is also why the
 * note count looks wrong.
 *
 * Conservative on purpose: only events that agree on onset AND duration merge,
 * because a chord event carries a single duration. Anything tied, graced or
 * rest-shaped is left alone rather than guessed at.
 */
function mergeUnflaggedChords(events: NoteEvent[]): void {
  const merged = new Set<NoteEvent>();
  const sorted = [...events].sort((a, b) => a.onsetBeat - b.onsetBeat || a.id - b.id);
  for (let i = 0; i < sorted.length - 1; i++) {
    const head = sorted[i];
    if (merged.has(head)) continue;
    // Rests stay as merge candidates so a sounding note can displace one, but
    // they never absorb pitches themselves.
    if (head.grace) continue;
    if (head.rest && !head.pitches.length) {
      // fall through: only the rest/note collision below can apply
    } else if (!head.pitches.length) {
      continue;
    }
    let changed = false;
    for (let j = i + 1; j < sorted.length; j++) {
      const next = sorted[j];
      if (Math.abs(next.onsetBeat - head.onsetBeat) > EPS) break;
      if (merged.has(next)) continue;
      // A rest and a sounding note at the same instant in the same voice is a
      // parsing artefact, not music: a rest cannot sound. The note wins.
      if (head.rest !== next.rest) {
        const loser = head.rest ? head : next;
        if (!loser.grace && !loser.tieStart) {
          merged.add(loser);
          changed = true;
        }
        continue;
      }
      if (head.rest || next.grace || next.rest) continue;
      if (next.tieStart) continue;
      if (Math.abs(next.durBeat - head.durBeat) > EPS) continue;
      // Same written pitch twice is a unison doubling, not a chord tone.
      if (next.pitches.some((p) => head.pitches.some((q) => Math.abs(q.dia - p.dia) < EPS))) {
        continue;
      }
      head.pitches.push(...next.pitches);
      merged.add(next);
      changed = true;
    }
    if (changed) {
      head.pitches.sort((a, b) => a.dia - b.dia);
      head.tieStop = head.tieStop || false;
    }
  }
  if (!merged.size) return;
  for (let i = events.length - 1; i >= 0; i--) {
    if (merged.has(events[i])) events.splice(i, 1);
  }
}

function dedupeTimeSigs(list: { measure: number; beats: number; beatType: number }[]) {
  const out: { measure: number; beats: number; beatType: number }[] = [];
  for (const ts of list) {
    const last = out[out.length - 1];
    if (last && last.beats === ts.beats && last.beatType === ts.beatType) continue;
    out.push(ts);
  }
  return out;
}

/** Build a monotonic beat -> seconds function from a tempo map. */export function makeBeatToSec(map: TempoPoint[]): (beat: number) => number {
  const pts = map.length ? [...map].sort((a, b) => a.beat - b.beat) : [{ beat: 0, secPerBeat: 0.5 }];
  const starts: number[] = [0];
  for (let i = 1; i < pts.length; i++) {
    starts[i] = starts[i - 1] + (pts[i].beat - pts[i - 1].beat) * pts[i - 1].secPerBeat;
  }
  return (beat: number): number => {
    if (beat <= pts[0].beat) return starts[0] + (beat - pts[0].beat) * pts[0].secPerBeat;
    let lo = 0;
    let hi = pts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (pts[mid].beat <= beat) lo = mid;
      else hi = mid - 1;
    }
    return starts[lo] + (beat - pts[lo].beat) * pts[lo].secPerBeat;
  };
}
