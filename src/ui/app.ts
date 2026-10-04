/**
 * Application shell: source loading, track selection, excerpt control, transport,
 * and the video export button.
 */

import { IngestError, loadFromFile, loadFromUrl, parseXml } from '../core/ingest';
import { parseMusicXML } from '../core/parse';
import { layoutScore, type LayoutOptions, type ScoreLayout } from '../core/layout';
import { midiName, type ScoreModel, type Track } from '../core/types';
import { World } from '../scene/world';
import { Player } from '../audio/player';
import { audioBufferToWav, renderScore, sliceWindow } from '../audio/render';
import { downloadBlob, exportVideo, ExportError } from '../export/video';
import { EXTRA_SAMPLES, SAMPLES, type Sample } from '../samples';

const $ = <T extends HTMLElement = HTMLElement>(id: string): T => {
  const e = document.getElementById(id);
  if (!e) throw new Error(`Missing element #${id}`);
  return e as T;
};

const LONG_PIECE = 5 * 60;
const MAX_TRACKS_WITHOUT_ASKING = 4;
const DEFAULT_EXCERPT = 60;

function fmt(sec: number): string {
  const s = Math.max(0, Math.round(sec));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export class App {
  private world: World;
  private model: ScoreModel | null = null;
  private layout: ScoreLayout | null = null;
  private player: Player | null = null;
  private buffer: AudioBuffer | null = null;
  private bufferWindow: { start: number; end: number } | null = null;
  private visible = new Set<string>();
  private excerpt = { start: 0, end: 0 };
  private tempoScale = 1;
  private idleTime = 0;
  private busy = false;
  private exporting = false;
  private cancelExport = false;
  private raf = 0;
  private audioToken = 0;
  private layoutOpts: Partial<LayoutOptions> = {};

  constructor() {
    const canvas = $<HTMLCanvasElement>('view');
    this.world = new World(canvas);
    this.world.attachControls(canvas, () => !this.exporting);
    window.addEventListener('resize', () => {
      if (!this.exporting) this.fitStage();
    });
    this.fitStage();

    this.buildSamples();
    this.wireSource();
    this.wireTransport();
    this.wireLook();
    this.wireExport();
    this.loop();
  }

  // ------------------------------------------------------------- source

  private fitStage() {
    const stage = $('stage');
    this.world.resize(stage.clientWidth || 1280, stage.clientHeight || 720);
  }

  private buildSamples() {
    const box = $('samples');
    const all = [...SAMPLES, ...EXTRA_SAMPLES];
    for (const s of all) {
      const b = document.createElement('button');
      b.className = 'chip';
      b.innerHTML = `<b>${s.title}</b><span>${s.subtitle}</span>`;
      b.addEventListener('click', () => void this.loadUrl(s.url, s.title));
      box.appendChild(b);
    }
  }

  private wireSource() {
    $('btn-load-url').addEventListener('click', () => {
      void this.loadUrl(($('url') as HTMLInputElement).value);
    });
    $('url').addEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter') {
        void this.loadUrl(($('url') as HTMLInputElement).value);
      }
    });

    const file = $<HTMLInputElement>('file');
    const zone = $('dropzone');
    zone.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).tagName !== 'INPUT') file.click();
    });
    file.addEventListener('change', () => {
      const f = file.files?.[0];
      if (f) void this.loadFile(f);
      file.value = '';
    });

    let depth = 0;
    const stop = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };
    document.addEventListener('dragenter', (e) => {
      stop(e);
      depth++;
      document.body.classList.add('dragging');
    });
    document.addEventListener('dragover', stop);
    document.addEventListener('dragleave', (e) => {
      stop(e);
      if (--depth <= 0) document.body.classList.remove('dragging');
    });
    document.addEventListener('drop', (e) => {
      stop(e);
      depth = 0;
      document.body.classList.remove('dragging');
      const f = (e as DragEvent).dataTransfer?.files?.[0];
      if (f) void this.loadFile(f);
    });
  }

  private progress(text: string, show = true) {
    $('progress-overlay').hidden = !show;
    $('progress-text').textContent = text;
  }

  private async loadUrl(url: string, label?: string) {
    const u = url.trim();
    if (!u) return;
    this.progress(label ? `Fetching ${label}…` : 'Fetching score…');
    try {
      const { name, xml } = await loadFromUrl(u);
      this.ingest(name, xml);
    } catch (e) {
      this.fail(e);
    }
  }

  private async loadFile(file: File) {
    this.progress(`Reading ${file.name}…`);
    try {
      const { name, xml } = await loadFromFile(file);
      this.ingest(name, xml);
    } catch (e) {
      this.fail(e);
    }
  }

  private fail(e: unknown) {
    this.busy = false;
    this.progress('', false);
    const msg = e instanceof IngestError || e instanceof Error ? e.message : String(e);
    $('np-title').textContent = 'Could not load that score';
    $('np-sub').textContent = msg;
    console.error(e);
  }

  private ingest(name: string, xml: string) {
    try {
      const doc = parseXml(xml);
      const model = parseMusicXML(doc, name);
      if (!model.tracks.length) throw new Error('No playable voices were found in this file.');
      this.model = model;
      this.chooseInitialTracks();
      this.setupExcerptDefaults();
      // A new score must not inherit the previous one's transport. Until the
      // new audio finishes rendering, `buffer` still holds the old piece and the
      // old player is still running, so the loop would drive the *new* layout
      // from the *old* song's clock — the sheet lands somewhere arbitrary in
      // the new score while the old music keeps playing. Park the transport on
      // the new excerpt's start instead.
      this.player?.stop();
      this.buffer = null;
      this.bufferWindow = null;
      this.idleTime = this.excerpt.start;
      this.rebuildLayout();
      this.renderReport();
      this.renderTrackPicker();
      // Every downstream control is useless until there is a score, so all five
      // cards reveal together here. They stay collapsed by default so the panel
      // keeps fitting on one screen; Tracks is the one you usually want open.
      for (const id of ['card-report', 'card-tracks', 'card-excerpt', 'card-export', 'card-look']) {
        $(id).hidden = false;
      }
      $<HTMLDetailsElement>('card-tracks').open = true;
      // The sample list is the tallest thing in the panel and you do not need it
      // once a score is playing; collapsing it keeps Export above the fold.
      $<HTMLDetailsElement>('card-source').open = false;
      this.syncExcerptUI();
      this.busy = true;
      void this.refreshAudio();
    } catch (e) {
      this.fail(e);
    }
  }

  private chooseInitialTracks() {
    const m = this.model!;
    this.visible.clear();
    if (m.tracks.length <= MAX_TRACKS_WITHOUT_ASKING) {
      for (const t of m.tracks) this.visible.add(t.id);
      return;
    }
    // Busy parts first: they carry the piece, and four ribbons stay readable.
    const ranked = [...m.tracks]
      .map((t) => ({ t, n: t.events.filter((e) => !e.rest).length }))
      .sort((a, b) => b.n - a.n)
      .slice(0, MAX_TRACKS_WITHOUT_ASKING);
    for (const { t } of ranked) this.visible.add(t.id);
  }

  private setupExcerptDefaults() {
    const m = this.model!;
    this.excerpt = {
      start: 0,
      end: m.durationSec < LONG_PIECE ? m.durationSec : Math.min(m.durationSec, DEFAULT_EXCERPT),
    };
    const first = m.tempoMap[0]?.secPerBeat ?? 0.5;
    const bpm = Math.round(60 / first);
    const slider = $<HTMLInputElement>('ex-tempo');
    slider.value = String(bpm);
    this.tempoScale = 1;
  }

  private activeTracks(): Track[] {
    const m = this.model;
    if (!m) return [];
    return m.tracks.filter((t) => this.visible.has(t.id));
  }

  private rebuildLayout() {
    const m = this.model;
    if (!m) return;
    this.layout = layoutScore(m, this.layoutOpts, this.visible);
    this.world.setScore(m, this.layout);
  }

  // ------------------------------------------------------------- report

  private renderReport() {
    const m = this.model;
    if (!m) return;
    const card = $('card-report');
    card.hidden = false;
    const box = $('report');
    const lanes = this.layout?.lanes ?? [];

    // Count note heads actually on the sheet, not <note> elements in the file.
    // Simultaneous notes are folded into chords, so the two differ on many
    // library scores and only the engraved count is worth showing.
    let heads = 0;
    for (const lane of lanes) {
      for (const e of lane.notes) {
        if (!e.rest && e.pitches.length) heads += e.pitches.length;
      }
    }

    const rows: [string, string][] = [
      ['Title', m.title],
      ['Composer', m.composer || '—'],
      ['File', m.sourceName],
      ['Voices found', `${m.tracks.length}`],
      ['Notes on the sheet', `${heads.toLocaleString()}`],
      ['Measures', `${m.measureBeats.length}`],
      ['Length', `${fmt(m.durationSec)}  (${m.tempoMap[0] ? Math.round(60 / m.tempoMap[0].secPerBeat) : '?'} bpm)`],
      ['Time signature', m.timeSigs[0] ? `${m.timeSigs[0].beats}/${m.timeSigs[0].beatType}` : '—'],
      ['Key', keyName(m.keyFifths)],
      ['Systems engraved', `${this.layout?.systems.length ?? 0}`],
      ['Visible ribbons', `${lanes.length}`],
    ];

    box.innerHTML =
      rows.map(([k, v]) => `<div class="row-kv"><span>${k}</span><b>${escapeHtml(v)}</b></div>`).join('') +
      (m.warnings.length
        ? `<div class="warn">${m.warnings.map(escapeHtml).join('<br>')}</div>`
        : '');

    $('np-title').textContent = m.title;
    $('np-sub').textContent = [m.composer, m.sourceName].filter(Boolean).join(' · ');
  }

  private renderTrackPicker() {
    const m = this.model;
    if (!m) return;
    const card = $('card-tracks');
    const hint = $('tracks-hint');
    const box = $('tracks');
    card.hidden = false;
    box.innerHTML = '';

    const many = m.tracks.length > MAX_TRACKS_WITHOUT_ASKING;
    hint.textContent = many
      ? `${m.tracks.length} voices — showing ${this.visible.size}. Pick the ones you want.`
      : `${m.tracks.length} voice${m.tracks.length === 1 ? '' : 's'}`;
    card.classList.toggle('attention', many);

    for (const t of m.tracks) {
      const row = document.createElement('label');
      row.className = 'track';
      const pitches = t.events.flatMap((e) => e.pitches.map((p) => p.midi));
      const lo = pitches.length ? midiName(Math.min(...pitches)) : '—';
      const hi = pitches.length ? midiName(Math.max(...pitches)) : '—';
      row.innerHTML = `<input type="checkbox" ${this.visible.has(t.id) ? 'checked' : ''} />
        <span class="swatch"></span>
        <span class="tname">${escapeHtml(t.partName)}</span>
        <span class="trange">${lo}–${hi}</span>`;
      (row.querySelector('input') as HTMLInputElement).addEventListener('change', (e) => {
        const on = (e.target as HTMLInputElement).checked;
        if (on) this.visible.add(t.id);
        else this.visible.delete(t.id);
        this.onTracksChanged();
      });
      box.appendChild(row);
    }
  }

  private onTracksChanged() {
    if (!this.model) return;
    if (!this.visible.size) {
      // Never allow an empty stage.
      this.visible = new Set([this.model.tracks[0].id]);
      this.renderTrackPicker();
    }
    this.rebuildLayout();
    this.renderReport();
    this.renderTrackPicker();
    this.busy = true;
    void this.refreshAudio();
  }

  // ------------------------------------------------------------- audio

  private async refreshAudio() {
    const m = this.model;
    if (!m) return;
    const token = ++this.audioToken;
    this.progress('Rendering audio…');
    // A long piece can spend most of a minute in here. Disable Play straight
    // away instead of only when it finishes, otherwise pressing it mid-render
    // looks like a dead button while the scene sits parked at the start.
    this.updatePlayButton();
    const tracks = this.activeTracks();
    const start = this.excerpt.start;
    const end = this.excerpt.end;
    try {
      const buf = await renderScore(
        m,
        this.layout!,
        tracks,
        { startSec: start, endSec: end },
        { tempoScale: this.tempoScale },
        (done, total) => this.progress(`Rendering audio… ${done} / ${total}`),
      );
      if (token !== this.audioToken) return;

      this.buffer = buf;
      this.bufferWindow = { start, end };
      if (!this.player) this.player = new Player(start);
      this.player.loop = ($('chk-loop') as HTMLInputElement).checked;
      this.player.setBuffer(buf);
      this.idleTime = start;
      this.busy = false;
      this.progress('', false);
      $('scrubwrap').hidden = false;
      $('transport').hidden = false;
      this.syncExcerptUI();
      this.updatePlayButton();
    } catch (e) {
      this.fail(e);
    }
  }

  private syncExcerptUI() {
    const m = this.model;
    if (!m) return;
    const s = $<HTMLInputElement>('ex-start');
    const l = $<HTMLInputElement>('ex-len');
    s.max = String(Math.max(1, Math.round(m.durationSec)));
    s.value = String(Math.round(this.excerpt.start));
    l.value = String(Math.max(5, Math.round(this.excerpt.end - this.excerpt.start)));
    $('ex-start-o').textContent = fmt(this.excerpt.start);
    $('ex-len-o').textContent = fmt(this.excerpt.end - this.excerpt.start);
    const bpm = Math.round((m.tempoMap[0] ? 60 / m.tempoMap[0].secPerBeat : 100) * this.tempoScale);
    $('ex-tempo-o').textContent = `${bpm} bpm`;
    $('t-end').textContent = fmt(this.excerpt.end);
  }

  // ------------------------------------------------------------- transport

  private wireTransport() {
    $('btn-play').addEventListener('click', () => this.toggle());
    $('btn-stop').addEventListener('click', () => {
      this.player?.pause();
      this.idleTime = this.excerpt.start;
      this.updatePlayButton();
    });
    $('chk-loop').addEventListener('change', (e) => {
      if (this.player) this.player.loop = (e.target as HTMLInputElement).checked;
    });
    $('scrub').addEventListener('input', (e) => {
      const v = Number((e.target as HTMLInputElement).value) / 1000;
      const t = this.excerpt.start + v * (this.excerpt.end - this.excerpt.start);
      if (this.player && this.buffer) this.player.seek(t);
      else this.idleTime = t;
    });

    $('ex-start').addEventListener('change', (e) => {
      this.excerpt.start = Number((e.target as HTMLInputElement).value);
      this.excerpt.end = Math.max(
        this.excerpt.start + 5,
        Math.min(this.excerpt.end, this.model?.durationSec ?? this.excerpt.end),
      );
      this.syncExcerptUI();
      this.busy = true;
      void this.refreshAudio();
    });
    $('ex-len').addEventListener('change', (e) => {
      this.excerpt.end = Math.min(
        this.model?.durationSec ?? Infinity,
        this.excerpt.start + Number((e.target as HTMLInputElement).value),
      );
      this.syncExcerptUI();
      this.busy = true;
      void this.refreshAudio();
    });
    $('ex-tempo').addEventListener('change', (e) => {
      const target = Number((e.target as HTMLInputElement).value);
      const base = this.model?.tempoMap[0] ? 60 / this.model.tempoMap[0].secPerBeat : 100;
      this.tempoScale = target / base;
      this.syncExcerptUI();
      this.busy = true;
      void this.refreshAudio();
    });

    window.addEventListener('keydown', (e) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      if (e.code === 'Space') {
        e.preventDefault();
        this.toggle();
      }
    });
  }

  private toggle() {
    if (!this.player || !this.buffer) return;
    if (this.player.playing) {
      this.player.pause();
    } else {
      const t = this.player.time;
      void this.player.play(t >= this.excerpt.end - 0.05 ? this.excerpt.start : t);
    }
    this.updatePlayButton();
  }

  private updatePlayButton() {
    const b = $<HTMLButtonElement>('btn-play');
    const playing = !!this.player?.playing;
    b.textContent = playing ? '❙❙ Pause' : '▶ Play';
    b.disabled = this.busy || !this.buffer;
  }

  // ------------------------------------------------------------- look

  private wireLook() {
    const bind = (id: string, fn: (v: number) => void, fmtFn: (v: number) => string) => {
      const input = $<HTMLInputElement>(id);
      const out = $(`${id}-o`);
      const apply = () => {
        const v = Number(input.value);
        fn(v);
        out.textContent = fmtFn(v);
      };
      input.addEventListener('input', apply);
      apply();
    };

    bind('lk-bloom', (v) => this.world.setLook({ bloom: v / 100 }), (v) => `${v}%`);
    bind('lk-orb', (v) => this.world.setLook({ orbScale: v / 100 }), (v) => `${v}%`);
    bind('lk-trail', (v) => this.world.setLook({ trailLength: v }), (v) => `${v} orbs`);
    bind(
      'lk-lanes',
      (v) => {
        this.layoutOpts = { ...this.layoutOpts, laneGap: 0.95 * (v / 100) };
        if (!this.model) return;
        this.rebuildLayout();
        this.renderReport();
      },
      (v) => `${v}%`,
    );
    bind('lk-cam', (v) => { this.world.orbit.az = (v - 45) * 0.012; }, (v) => `${v}`);
  }

  // ------------------------------------------------------------- export

  private wireExport() {
    $('btn-export').addEventListener('click', () => void this.runExport());
    $('btn-wav').addEventListener('click', () => {
      if (!this.buffer) return;
      downloadBlob(audioBufferToWav(this.buffer), 'bouncingmusic.wav');
    });
  }

  private async runExport() {
    if (this.exporting || !this.model || !this.layout) return;
    const btn = $<HTMLButtonElement>('btn-export');
    const bar = $('ex-bar');
    const fill = $('ex-fill');
    const text = $('ex-text');
    const [w, h] = ($('ex-res') as HTMLSelectElement).value.split('x').map(Number);
    const fps = Number(($('ex-fps') as HTMLSelectElement).value);
    const full = ($('ex-range') as HTMLSelectElement).value === 'full';
    const start = full ? 0 : this.excerpt.start;
    const end = full ? this.model.durationSec : this.excerpt.end;

    this.exporting = true;
    this.cancelExport = false;
    btn.disabled = true;
    btn.textContent = 'Exporting…';
    bar.hidden = false;
    this.player?.pause();
    this.updatePlayButton();

    try {
      let audio = this.buffer;
      let audioFrom = this.bufferWindow?.start ?? 0;
      const covers =
        this.bufferWindow &&
        this.bufferWindow.start <= start + 0.01 &&
        this.bufferWindow.end >= end - 0.01;
      if (!covers) {
        fill.style.width = '2%';
        text.textContent = 'Rendering audio…';
        audio = await renderScore(
          this.model,
          this.layout,
          this.activeTracks(),
          { startSec: start, endSec: end },
          { tempoScale: this.tempoScale },
        );
        audioFrom = start;
      }
      // Hand the exporter exactly the video's own time span: the preview buffer
      // is longer by the render tail, and the two lengths must match.
      const track = audio ? sliceWindow(audio, audioFrom, start, end) : null;

      const result = await exportVideo({
        world: this.world,
        startSec: start,
        endSec: end,
        width: w,
        height: h,
        fps,
        audio: track,
        shouldCancel: () => this.cancelExport,
        onProgress: (done, total) => {
          const pct = 2 + (done / total) * 98;
          fill.style.width = `${pct}%`;
          text.textContent = `${done} / ${total} frames · ${Math.round(pct)}%`;
        },
      });
      downloadBlob(result.blob, result.filename);
      text.textContent = `Done — ${result.frames} frames in ${(result.elapsedMs / 1000).toFixed(1)}s`;
    } catch (e) {
      text.textContent =
        e instanceof ExportError || e instanceof Error ? e.message : String(e);
      console.error(e);
    } finally {
      this.exporting = false;
      btn.disabled = false;
      btn.textContent = 'Export MP4';
    }
  }

  // ------------------------------------------------------------- loop

  private loop() {
    const step = () => {
      if (!this.exporting) {
        const t = this.player && this.buffer ? this.player.time : this.idleTime;
        this.world.renderFrame(t);
        const span = Math.max(0.001, this.excerpt.end - this.excerpt.start);
        const p = Math.max(0, Math.min(1, (t - this.excerpt.start) / span));
        const scrub = $<HTMLInputElement>('scrub');
        if (document.activeElement !== scrub) scrub.value = String(Math.round(p * 1000));
        $('t-now').textContent = fmt(t);
      }
      this.raf = requestAnimationFrame(step);
    };
    this.raf = requestAnimationFrame(step);
  }

  dispose() {
    cancelAnimationFrame(this.raf);
    this.player?.dispose();
    this.world.dispose();
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
}

const SHARP_KEYS = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
const FLAT_KEYS = ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'];

function keyName(fifths: number): string {
  if (!fifths) return 'C major / a minor';
  return fifths > 0
    ? `${SHARP_KEYS[Math.min(7, fifths)]} major (${fifths} sharp${fifths > 1 ? 's' : ''})`
    : `${FLAT_KEYS[Math.min(7, -fifths)]} major (${-fifths} flat${fifths < -1 ? 's' : ''})`;
}

export type { Sample };
