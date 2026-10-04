/**
 * Engraving layout.
 *
 * One shared, duration-proportional time -> x map for the whole score, so every
 * lane stays aligned the way it would on a real page. Lanes (one per musical
 * voice) are stacked vertically; each lane gets its own five-line staff.
 */

import { clefBottomDia, type Clef, type NoteEvent, type ScoreModel, type Track } from './types';
import { makeBeatToSec } from './parse';

export interface LayoutOptions {
  /** Sheet units between adjacent staff lines. */
  lineGap: number;
  /** Minimum clear space between two lanes' drawn content. */
  laneGap: number;
  /** Minimum width of one time slice. */
  minGap: number;
  /** Sheet units per quarter-note beat (capped at `maxSpanBeats`). */
  durScale: number;
  maxSpanBeats: number;
  /** Sheet units per system. */
  systemWidth: number;
  /** Pixels per sheet unit when engraving to a canvas. */
  pxPerUnit: number;
}

export const DEFAULT_LAYOUT: LayoutOptions = {
  lineGap: 0.42,
  laneGap: 0.95,
  minGap: 0.85,
  durScale: 0.62,
  maxSpanBeats: 4,
  systemWidth: 46,
  pxPerUnit: 30,
};

/** Sheet units kept clear above the topmost and below the bottommost thing drawn. */
const EDGE_HEADROOM = 1.2;

export interface LaneMark {
  x: number;
  text: string;
  value: number;
  dir: 0 | 1 | -1;
}

export interface LaneLayout {
  track: Track;
  index: number;
  /** Vertical centre of this lane in sheet space (y up): the middle staff line. */
  y: number;
  clefBottomDia: number;
  notes: NoteEvent[];
  /** Lowest / highest sheet-space y this lane actually draws at (stems included). */
  minY: number;
  maxY: number;
  /** Dynamics and words for this lane, already positioned. */
  marks: LaneMark[];
  keyFifths: number;
  timeSig: { beats: number; beatType: number } | null;
  /** Inclusive anchor range this lane's staff must be drawn over. */
  range: [number, number];
}

/**
 * Sheet-space y of a staff step. Step 0 is the bottom line and step 4 the top,
 * so step 2 — the middle line — sits on the lane centre and every other step is
 * one line-gap away. Both the engraver and the orbs must use this exact
 * mapping, or the orb lands somewhere other than its note head.
 *
 * Sheet space is y-up (Three.js), so a higher step MUST give a higher y. The
 * engraver's canvas projection flips y again for drawing, and the orbs live
 * directly in 3D — get the sign wrong here and every scale runs upside down
 * while the orbs still sit perfectly on their (also upside down) note heads,
 * which is exactly what a self-consistency check cannot catch.
 */
export function stepY(laneY: number, step: number, lineGap: number): number {
  return laneY + (step - 2) * lineGap;
}

/**
 * The clef in force at a given beat, and the diatonic index of its bottom line.
 * A part that changes clef part-way through has to be read against the clef
 * that was actually printed at that point.
 */
function clefBottomAt(
  timeline: readonly { beat: number; clef: Clef }[],
  fallback: number,
  beat: number,
): number {
  if (!timeline.length) return fallback;
  let chosen = timeline[0];
  for (const c of timeline) {
    if (c.beat <= beat + 1e-6) chosen = c;
    else break;
  }
  return clefBottomDia(chosen.clef);
}

export interface SystemLayout {
  index: number;
  x0: number;
  x1: number;
  a0: number;
  a1: number;
}

export interface ScoreLayout {
  lanes: LaneLayout[];
  anchors: number[];
  xAt: number[];
  barAnchorIdx: number[];
  barX: number[];
  systems: SystemLayout[];
  totalWidth: number;
  /** Sheet-space height from the lowest to the highest thing that gets drawn. */
  height: number;
  /** Sheet-space y of the top edge of that range. */
  topY: number;
  options: LayoutOptions;
  beatToX(beat: number): number;
  secToX(sec: number): number;
  beatAt(sec: number): number;
}

/** Fraction of a track's notes sitting within three ledger lines of the staff. */
function fitScore(notes: NoteEvent[], pick: (e: NoteEvent) => number): number {
  if (!notes.length) return 0;
  let n = 0;
  for (const e of notes) {
    const bottom = pick(e);
    let lo = Infinity;
    let hi = -Infinity;
    for (const p of e.pitches) {
      const s = p.dia - bottom;
      if (s < lo) lo = s;
      if (s > hi) hi = s;
    }
    if (Math.abs((lo + hi) / 2 - 2) <= 4) n++;
  }
  return n / notes.length;
}

/**
 * Decide which clef a track is really written in, as a function of beat.
 *
 * Well-formed files change clef where the music needs it. Converted ones often
 * re-declare a staff's clef every few measures regardless — one library copy of
 * Clair de Lune flips its left hand between treble and bass 25 times, which
 * scatters that voice across several octaves of empty staff. So the declared
 * timeline is honoured only when it actually reads better than settling on the
 * single clef the notes fit best.
 */
function resolveTrackClef(track: Track): { clefAt: (beat: number) => number; fit: number } {
  const base = clefBottomDia(track.clef);
  const timeline = track.clefTimeline ?? [];
  const notes = track.events.filter((e) => e.pitches.length);
  if (!notes.length) return { clefAt: () => base, fit: 1 };

  const viaTimeline = (beat: number) => clefBottomAt(timeline, base, beat);
  const timelineFit = fitScore(notes, (e) => viaTimeline(e.onsetBeat));

  const candidates = new Set<number>([base, ...timeline.map((c) => clefBottomDia(c.clef))]);
  let best = base;
  let bestFit = -1;
  for (const c of candidates) {
    const f = fitScore(notes, () => c);
    if (f > bestFit) {
      bestFit = f;
      best = c;
    }
  }

  // Honour the declared changes only when they read well in absolute terms and
  // beat the best single clef. A part that genuinely changes clef keeps both
  // clefs placing its notes near the staff, so it scores high and is kept.
  const useSingle = timelineFit < 0.75 && bestFit > timelineFit + 0.05;
  return useSingle
    ? { clefAt: () => best, fit: bestFit }
    : { clefAt: viaTimeline, fit: timelineFit };
}

export function layoutScore(
  model: ScoreModel,
  optsIn: Partial<LayoutOptions> = {},
  visibleTrackIds?: ReadonlySet<string>,
): ScoreLayout {
  const options: LayoutOptions = { ...DEFAULT_LAYOUT, ...optsIn };
  const { lineGap, minGap, durScale, maxSpanBeats, systemWidth } = options;

  const visibleTracks = visibleTrackIds
    ? model.tracks.filter((t) => visibleTrackIds.has(t.id))
    : model.tracks;

  // ---------------- 1. anchors: every moment the score changes ----------------
  const set = new Set<number>([0]);
  for (const t of visibleTracks) {
    for (const e of t.events) {
      if (e.grace) continue;
      set.add(round6(e.onsetBeat));
      if (e.durBeat > 0) set.add(round6(e.onsetBeat + e.durBeat));
    }
  }
  for (const b of model.measureBeats) set.add(round6(b));
  const anchors = [...set].filter((b) => Number.isFinite(b)).sort((a, b) => a - b);
  if (anchors[0] !== 0) anchors.unshift(0);

  // ---------------- 2. widths ----------------
  const xAt: number[] = new Array(anchors.length);
  xAt[0] = 0;
  for (let i = 1; i < anchors.length; i++) {
    const span = Math.min(anchors[i] - anchors[i - 1], maxSpanBeats);
    xAt[i] = xAt[i - 1] + minGap + span * durScale;
  }

  const anchorIndex = new Map<number, number>();
  anchors.forEach((b, i) => anchorIndex.set(b, i));

  function beatToX(beat: number): number {
    if (anchors.length === 1) return 0;
    if (beat <= anchors[0]) return xAt[0] + (beat - anchors[0]) * ((xAt[1] - xAt[0]) / (anchors[1] - anchors[0] || 1));
    const last = anchors.length - 1;
    if (beat >= anchors[last]) {
      const slope = (xAt[last] - xAt[last - 1]) / (anchors[last] - anchors[last - 1] || 1);
      return xAt[last] + (beat - anchors[last]) * slope;
    }
    let lo = 0;
    let hi = last;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (anchors[mid] <= beat) lo = mid;
      else hi = mid - 1;
    }
    const b0 = anchors[lo];
    const b1 = anchors[lo + 1];
    const u = b1 === b0 ? 0 : (beat - b0) / (b1 - b0);
    return xAt[lo] + (xAt[lo + 1] - xAt[lo]) * u;
  }

  const barX = model.measureBeats.map((b) => beatToX(b));
  const barAnchorIdx = model.measureBeats
    .map((b) => anchorIndex.get(round6(b)))
    .filter((i): i is number => i !== undefined);
  const barIdxSet = new Set(barAnchorIdx);

  // ---------------- 3. lanes ----------------
  const n = visibleTracks.length;
  const laneGap = options.laneGap;
  /** How far a stem reaches beyond its head, in sheet units (see drawStem). */
  const stemUnits = 3.4 * lineGap;

  // How far each lane's ink reaches above and below its own staff centre.
  // Measured first, so lanes can be stacked by what they actually need: a wide
  // voice needs more room than a fixed stride gives it, and a fixed stride
  // would otherwise let a melody's ledger lines run into the lane below.
  const clefFor = new Map<string, (beat: number) => number>();
  /** Voices whose notes fit no candidate clef well — a sign of a bad file. */
  const poorlyFitting: string[] = [];
  const extents = visibleTracks.map((track) => {
    const resolved = resolveTrackClef(track);
    clefFor.set(track.id, resolved.clefAt);
    if (resolved.fit < 0.45) poorlyFitting.push(track.partName);
    const bottomAt = clefFor.get(track.id)!;
    let lo = -2 * lineGap;
    let hi = 2 * lineGap;
    for (const e of track.events) {
      if (!e.pitches.length) continue;
      const bottom = bottomAt(e.onsetBeat);
      let mn = Infinity;
      let mx = -Infinity;
      for (const p of e.pitches) {
        const s = p.dia - bottom;
        if (s < mn) mn = s;
        if (s > mx) mx = s;
      }
      // Sheet space is y-up, so the highest step is the highest y.
      const high = stepY(0, mx, lineGap) + stemUnits;
      const low = stepY(0, mn, lineGap) - stemUnits;
      if (high > hi) hi = high;
      if (low < lo) lo = low;
    }
    return { lo, hi };
  });

  // Stack from the top down, then re-centre the whole stack on y = 0.
  const laneY: number[] = [];
  let cursor = 0;
  for (let i = 0; i < n; i++) {
    const y = cursor - extents[i].hi;
    laneY.push(y);
    cursor = y + extents[i].lo - laneGap;
  }
  const centreShift = (0 + cursor) / 2;
  for (let i = 0; i < n; i++) laneY[i] += centreShift;

  const timeSigAt = (beat: number) => {
    let best: { beats: number; beatType: number } | null = null;
    for (const ts of model.timeSigs) {
      if (model.measureBeats[ts.measure] <= beat + 1e-6) best = ts;
    }
    return best ?? model.timeSigs[0] ?? null;
  };

  const dynByTrack = groupBy(model.dynamics.map((d) => ({ ...d, x: 0 })), (d) => d.trackId);
  const wedgeByTrack = groupBy(model.wedges, (w) => w.trackId);
  const annByTrack = groupBy(model.annotations, (a) => a.trackId);

  const lanes: LaneLayout[] = visibleTracks.map((track, index) => {
    const y = laneY[index];
    const bottomAt = clefFor.get(track.id)!;
    const notes = track.events;

    const laneMinY = y + extents[index].lo;
    const laneMaxY = y + extents[index].hi;

    for (const e of notes) {
      // Written pitch only means something relative to the clef printed at this
      // point, so resolve it per note.
      const bottomDia = bottomAt(e.onsetBeat);
      e.clefBottomDia = bottomDia;
      let minStep = 0;
      let maxStep = 0;
      if (e.pitches.length) {
        let lo = Infinity;
        let hi = -Infinity;
        for (const p of e.pitches) {
          const s = p.dia - bottomDia;
          if (s < lo) lo = s;
          if (s > hi) hi = s;
        }
        minStep = lo;
        maxStep = hi;
      }
      e.staffStep = minStep;
      e.lane = index;
      e.stemUp = (minStep + maxStep) / 2 <= 4;
      // The orb anchors here. For a chord it must sit on a note head that is
      // actually drawn: anchoring at the mean of the chord's outer steps puts
      // the orb in empty space in the middle of a wide chord, which reads as
      // "the orb missed the note". The lowest pitch is always a real head.
      e.y = stepY(y, minStep, lineGap);
    }

    // Main notes get their x from the time map; grace notes are tucked in front.
    for (const e of notes) if (!e.grace) e.x = beatToX(e.onsetBeat);
    let pendingGrace: NoteEvent[] = [];
    for (const e of notes) {
      if (e.grace) {
        pendingGrace.push(e);
      } else {
        pendingGrace.forEach((g, i) => {
          g.x = e.x - (pendingGrace.length - i) * 0.3;
        });
        pendingGrace = [];
      }
    }
    for (const g of pendingGrace) g.x = beatToX(0);

    const marks: LaneMark[] = [];
    for (const d of dynByTrack.get(track.id) ?? []) {
      marks.push({ x: beatToX(d.beat), text: d.kind, value: d.value, dir: 0 });
    }
    for (const w of wedgeByTrack.get(track.id) ?? []) {
      marks.push({ x: beatToX(w.beat), text: '', value: 0, dir: w.dir });
    }
    for (const a of annByTrack.get(track.id) ?? []) {
      if (a.text.length > 18) continue;
      marks.push({ x: beatToX(a.beat), text: a.text, value: 0, dir: 0 });
    }
    marks.sort((p, q) => p.x - q.x);

    const xs = notes.filter((e) => !e.grace).map((e) => e.x);
    return {
      track,
      index,
      y,
      clefBottomDia: clefBottomDia(track.clef),
      notes,
      minY: laneMinY,
      maxY: laneMaxY,
      marks,
      keyFifths: track.keyFifths,
      timeSig: timeSigAt(notes[0]?.onsetBeat ?? 0),
      range: xs.length ? [Math.min(...xs), Math.max(...xs)] : [0, 0],
    };
  });

  // ---------------- 4. systems ----------------
  const systems: SystemLayout[] = [];
  const last = anchors.length - 1;
  let i0 = 0;
  let guard = 0;
  while (i0 < last && guard++ < 10000) {
    const limit = xAt[i0] + systemWidth;
    let i = i0 + 1;
    while (i <= last && xAt[i] < limit) i++;
    if (i > last) break;
    // Prefer to end a system on a barline, but never waste more than 40% of the width.
    let brk = i - 1;
    for (let k = i - 1; k > i0; k--) {
      if (barIdxSet.has(k)) { brk = k; break; }
      if (xAt[i] - xAt[k] > systemWidth * 0.6) break;
    }
    if (brk <= i0) brk = i0 + 1;
    systems.push({ index: systems.length, x0: xAt[i0], x1: xAt[brk], a0: i0, a1: brk });
    i0 = brk;
  }
  systems.push({ index: systems.length, x0: xAt[i0], x1: xAt[last], a0: i0, a1: last });

  const totalWidth = xAt[last];
  // Fit the sheet to what is actually drawn, not just to the outer staves.
  // A melody reaching a few ledger lines above its staff — or a bass dropping
  // below its staff — would otherwise be engraved off the edge of the canvas
  // and silently disappear.
  let contentTop = -Infinity;
  let contentBottom = Infinity;
  for (const lane of lanes) {
    if (lane.maxY > contentTop) contentTop = lane.maxY;
    if (lane.minY < contentBottom) contentBottom = lane.minY;
  }
  if (!lanes.length) {
    contentTop = 2 * lineGap;
    contentBottom = -2 * lineGap;
  }
  const height = contentTop - contentBottom + 2 * EDGE_HEADROOM;

  if (poorlyFitting.length) {
    const names = [...new Set(poorlyFitting)].join(', ');
    model.warnings.push(
      `${names}: these voices sit far from the staff under every clef the file declares. ` +
        'The score data looks inconsistent — the notes are placed on the best-fitting clef, ' +
        'but they will spread well above and below their staff.',
    );
  }

  // A voice whose events pile onto far fewer onsets than it has notes has had
  // its cursor rewound under it — <backup> semantics we do not fully honour for
  // files that interleave voices on one staff. The engraving is still produced,
  // but it is stacked, so say so rather than showing a mess in silence.
  const piled = lanes.filter((lane) => {
    const evs = lane.notes.filter((n) => !n.grace);
    if (evs.length < 24) return false;
    const onsets = new Set(evs.map((n) => Math.round(n.onsetBeat * 1e4)));
    return onsets.size < evs.length * 0.6;
  });
  if (piled.length) {
    const detail = piled
      .map((l) => `${l.track.partName} (${l.notes.length} notes in ${new Set(l.notes.map((n) => Math.round(n.onsetBeat * 1e4))).size} positions)`)
      .join(', ');
    model.warnings.push(
      `${detail}. These voices stack many notes at the same moment, which usually means ` +
        'the file interleaves voices on one staff in a way this parser does not fully ' +
        'separate. The notes are all there, but they overlap instead of lining up.',
    );
  }

  // ---------------- 5. time conversions ----------------
  const secToBeat = makeSecToBeat(model.tempoMap);
  const beatToSec = makeBeatToSec(model.tempoMap);
  const secToX = (sec: number) => beatToX(secToBeat(sec));
  void beatToSec;

  return {
    lanes,
    anchors,
    xAt,
    barAnchorIdx,
    barX,
    systems,
    totalWidth,
    height,
    topY: contentTop + EDGE_HEADROOM,
    options,
    beatToX,
    secToX,
    beatAt: secToBeat,
  };
}

function makeSecToBeat(map: { beat: number; secPerBeat: number }[]): (sec: number) => number {
  if (!map.length) return (s) => s / 0.5;
  const pts = [...map].sort((a, b) => a.beat - b.beat);
  const secAt: number[] = [0];
  for (let i = 1; i < pts.length; i++) {
    secAt[i] = secAt[i - 1] + (pts[i].beat - pts[i - 1].beat) * pts[i - 1].secPerBeat;
  }
  return (sec: number): number => {
    if (sec <= secAt[0]) return pts[0].beat + (sec - secAt[0]) / pts[0].secPerBeat;
    let lo = 0;
    let hi = pts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (secAt[mid] <= sec) lo = mid;
      else hi = mid - 1;
    }
    return pts[lo].beat + (sec - secAt[lo]) / pts[lo].secPerBeat;
  };
}

function groupBy<T>(items: T[], keyFn: (item: T) => string): Map<string, T[]> {
  const m = new Map<string, T[]>();
  for (const it of items) {
    const k = keyFn(it);
    const arr = m.get(k);
    if (arr) arr.push(it);
    else m.set(k, [it]);
  }
  return m;
}

function round6(n: number): number {
  return Math.round(n * 1e6) / 1e6;
}
