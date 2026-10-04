/**
 * Canvas-2D engraver.
 *
 * Draws one "system" (a horizontal slice of the whole score) into a canvas that is
 * later used as the texture of a flat plane in sheet space. Everything is a pure
 * function of the layout, so a system can be re-drawn at any time (that is how the
 * pool of planes recycles for the endless sheet).
 *
 * Deliberate simplifications: clefs and the time signature are drawn as glyph/text,
 * and the key signature is rendered as a compact "2#" / "3b" tag rather than with
 * full per-clef accidental placement.
 */

import type { LaneLayout, ScoreLayout, SystemLayout } from '../core/layout';
import { stepY } from '../core/layout';
import type { NoteEvent } from '../core/types';

export interface EngraveStyle {
  paper: string;
  staffLine: string;
  staffShadow: string;
  ridge: string;
  noteFill: string;
  noteEdge: string;
  stem: string;
  barline: string;
  text: string;
  clef: string;
  fontStack: string;
}

export const DEFAULT_STYLE: EngraveStyle = {
  paper: '#0a0c12',
  staffLine: '#7d8a9c',
  staffShadow: 'rgba(2,3,6,0.85)',
  ridge: 'rgba(150,175,210,',
  noteFill: '#05070c',
  noteEdge: 'rgba(216,230,250,0.74)',
  stem: '#98a5b8',
  barline: '#9ca8bc',
  text: '#b8c8de',
  clef: '#cedaeb',
  fontStack: '"Segoe UI Symbol","Bravura","DejaVu Sans","Noto Music",serif',
};

export interface EngraveOptions {
  style: EngraveStyle;
  showText: boolean;
  showBeams: boolean;
  padding: number;
}

const TYPE_FLAGS: Record<string, number> = {
  eighth: 1, '16th': 2, '32nd': 3, '64th': 4, '128th': 5,
};

const CLEF_GLYPH: Record<string, string> = {
  G: '\u{1D11E}',
  F: '\u{1D122}',
  C: '\u{1D121}',
  percussion: '\u{1D13F}',
};

const glyphCache = new Map<string, boolean>();

function fontHasGlyph(ch: string, font: string): boolean {
  const key = `${ch}|${font}`;
  const hit = glyphCache.get(key);
  if (hit !== undefined) return hit;
  let ok = false;
  try {
    const c = document.createElement('canvas').getContext('2d');
    if (c) {
      c.font = font;
      const wGlyph = c.measureText(ch).width;
      const wTofu = c.measureText('\uFFFE').width;
      ok = wGlyph > 0.5 && Math.abs(wGlyph - wTofu) > 0.5;
    }
  } catch {
    ok = false;
  }
  glyphCache.set(key, ok);
  return ok;
}

export interface EngraveMetrics {
  /** Sheet-space size of the produced canvas. */
  widthUnits: number;
  heightUnits: number;
  /** Sheet-space x of the canvas' left edge. */
  x0: number;
  /** Sheet-space y of the canvas' top edge (y up). */
  topY: number;
  pxPerUnit: number;
  topYSheet: number;
  bottomYSheet: number;
}

export function computeMetrics(layout: ScoreLayout, sys: SystemLayout, pad: number): EngraveMetrics {
  const { pxPerUnit } = layout.options;
  // The sheet is sized to the real extent of the music (see layoutScore), so
  // every head, stem and ledger line lands inside the canvas. Sizing it from
  // the outer staves instead silently clips anything reaching off the staff.
  const topY = layout.topY;
  const bottomY = layout.topY - layout.height;
  const widthUnits = sys.x1 - sys.x0 + (2 * pad) / pxPerUnit;
  const heightUnits = topY - bottomY + (2 * pad) / pxPerUnit;
  return {
    widthUnits,
    heightUnits,
    x0: sys.x0 - pad / pxPerUnit,
    topY: topY + pad / pxPerUnit,
    pxPerUnit,
    topYSheet: topY,
    bottomYSheet: bottomY,
  };
}

export function drawSystem(
  canvas: HTMLCanvasElement,
  layout: ScoreLayout,
  sys: SystemLayout,
  opts: EngraveOptions,
): EngraveMetrics {
  const { style, padding: pad } = opts;
  const m = computeMetrics(layout, sys, pad);
  const PX = m.pxPerUnit;
  const w = Math.max(2, Math.round(m.widthUnits * PX));
  const h = Math.max(2, Math.round(m.heightUnits * PX));
  if (canvas.width !== w) canvas.width = w;
  if (canvas.height !== h) canvas.height = h;

  const ctx = canvas.getContext('2d');
  if (!ctx) return m;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = style.paper;
  ctx.fillRect(0, 0, w, h);

  const X = (sheetX: number) => (sheetX - m.x0) * PX;
  const Y = (sheetY: number) => (m.topY - sheetY) * PX;
  const lineGapPx = layout.options.lineGap * PX;

  for (const lane of layout.lanes) {
    drawLane(ctx, lane, { X, Y, PX, lineGapPx, layout, sys, opts });
  }

  // Left edge of the system, spanning every lane: frames the "page".
  ctx.fillStyle = style.barline;
  const edgeY = Y(layout.lanes[0].y + 2 * layout.options.lineGap);
  const edgeY2 = Y(layout.lanes[layout.lanes.length - 1].y - 2 * layout.options.lineGap);
  ctx.fillRect(X(sys.x0) - 1, edgeY, 1.8, edgeY2 - edgeY);

  return m;
}

interface DrawCtx {
  X: (x: number) => number;
  Y: (y: number) => number;
  PX: number;
  lineGapPx: number;
  layout: ScoreLayout;
  sys: SystemLayout;
  opts: EngraveOptions;
}

function drawLane(ctx: CanvasRenderingContext2D, lane: LaneLayout, d: DrawCtx) {
  const { X, Y, lineGapPx, layout, sys, opts } = d;
  const style = opts.style;
  const { lineGap } = layout.options;

  const yTopLine = Y(lane.y + 2 * lineGap);
  const yBottomLine = Y(lane.y - 2 * lineGap);
  const x0 = X(sys.x0);
  const x1 = X(sys.x1);
  const w = x1 - x0;

  // Soft ridge highlight across the band, brightest on the middle line.
  const g = ctx.createLinearGradient(0, yTopLine, 0, yBottomLine);
  g.addColorStop(0, `${style.ridge}0)`);
  g.addColorStop(0.5, `${style.ridge}0.07)`);
  g.addColorStop(1, `${style.ridge}0)`);
  ctx.fillStyle = g;
  ctx.fillRect(x0, yTopLine, w, yBottomLine - yTopLine);

  // Five staff lines, each with a dark edge underneath to read as raised.
  for (let j = 0; j < 5; j++) {
    const y = yTopLine + j * lineGapPx;
    ctx.fillStyle = style.staffShadow;
    ctx.fillRect(x0, y + 1.4, w, 1.6);
    ctx.fillStyle = style.staffLine;
    ctx.fillRect(x0, y, w, 1.3);
  }

  drawBarlines(ctx, d, yTopLine, yBottomLine);
  drawHeader(ctx, lane, d, yTopLine);

  const notes = lane.notes;
  const inRange = notes.filter(
    (n) => n.x >= sys.x0 - 0.6 && n.x <= sys.x1 + 0.6,
  );
  if (!inRange.length) {
    drawMarks(ctx, lane, d, yBottomLine);
    return;
  }

  const rx = 0.62 * lineGapPx;
  const ry = 0.42 * lineGapPx;

  // Accidental memory, reset at every barline.
  const activeAcc = new Map<string, number>();
  const barXs = layout.barX.filter((bx) => bx >= sys.x0 - 0.6 && bx <= sys.x1 + 0.6);
  let barPtr = 0;

  for (const n of inRange) {
    if (n.rest) continue;
    // New measure? clear remembered accidentals.
    while (barPtr < barXs.length && barXs[barPtr] <= n.x) {
      activeAcc.clear();
      barPtr++;
    }

    for (let pi = 0; pi < n.pitches.length; pi++) {
      const p = n.pitches[pi];
      // Per note, not per lane: the part may have changed clef since.
      const step = p.dia - (n.clefBottomDia || lane.clefBottomDia);
      const cy = Y(stepY(lane.y, step, lineGap));
      const cx = X(n.x) - (n.pitches.length - 1 - pi) * rx * 0.9;
      const needKey = `${p.step}${p.octave}`;
      const remembered = activeAcc.get(needKey);
      if (p.alter !== 0 && remembered !== p.alter) {
        const acc = p.alter > 0 ? '\u266F' : p.alter < 0 ? '\u266D' : '\u266E';
        ctx.font = `${Math.round(1.35 * lineGapPx)}px ${style.fontStack}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = style.text;
        ctx.fillText(acc, cx - rx * 2.1, cy);
        activeAcc.set(needKey, p.alter);
      }

      // Ledger lines: the staff tops out at step 4, so step 6 is the first
      // ledger above and step -2 the first below.
      ctx.fillStyle = style.staffLine;
      for (let s = 6; s <= step; s += 2) {
        ctx.fillRect(cx - rx * 1.5, Y(stepY(lane.y, s, lineGap)) - 0.6, rx * 3, 1.2);
      }
      for (let s = -2; s >= step; s -= 2) {
        ctx.fillRect(cx - rx * 1.5, Y(stepY(lane.y, s, lineGap)) - 0.6, rx * 3, 1.2);
      }

      // Note head.
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.32);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.fillStyle = style.noteFill;
      ctx.fill();
      ctx.lineWidth = 1.1;
      ctx.strokeStyle = style.noteEdge;
      ctx.stroke();
      ctx.restore();

      // Hollow head for a half note or longer.
      if (n.durBeat >= 2 && n.pitches.length === 1 && !n.grace) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-0.32);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx * 0.52, ry * 0.52, 0, 0, Math.PI * 2);
        ctx.fillStyle = style.paper;
        ctx.fill();
        ctx.restore();
      }
    }
  }

  // Stems and beams.
  if (opts.showBeams) {
    const groups = beamGroups(inRange);
    ctx.strokeStyle = style.stem;
    ctx.fillStyle = style.stem;
    for (const n of inRange) {
      if (n.rest || n.grace || n.typeName === 'whole' || n.typeName === 'breve') continue;
      const flags = flagsOf(n);
      if (flags === 0) continue;
      drawStem(ctx, n, d, rx, ry);
    }
    for (const grp of groups) drawBeams(ctx, grp, d, rx, ry);
  }

  drawMarks(ctx, lane, d, yBottomLine);
}

function flagsOf(n: NoteEvent): number {
  const byType = TYPE_FLAGS[n.typeName];
  if (byType) return byType;
  if (n.durBeat <= 0.26) return 2;
  if (n.durBeat <= 0.55) return 1;
  return 0;
}

interface StemEnd {
  x: number;
  y: number;
  flags: number;
}

function drawStem(
  ctx: CanvasRenderingContext2D,
  n: NoteEvent,
  d: DrawCtx,
  rx: number,
  ry: number,
) {
  const { Y, X, lineGapPx } = d;
  const len = 3.4 * lineGapPx;
  const up = n.stemUp;
  const cx = X(n.x);
  const cy = Y(n.y);
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  if (up) {
    ctx.moveTo(cx + rx * 0.82, cy - ry * 0.5);
    ctx.lineTo(cx + rx * 0.82, cy - ry * 0.5 - len);
  } else {
    ctx.moveTo(cx - rx * 0.82, cy + ry * 0.5);
    ctx.lineTo(cx - rx * 0.82, cy + ry * 0.5 + len);
  }
  ctx.stroke();
}

function stemEnds(d: DrawCtx, rx: number, ry: number, n: NoteEvent): StemEnd {
  const { Y, X, lineGapPx } = d;
  const len = 3.4 * lineGapPx;
  const cx = X(n.x);
  const cy = Y(n.y);
  return {
    x: n.stemUp ? cx + rx * 0.82 : cx - rx * 0.82,
    y: n.stemUp ? cy - ry * 0.5 - len : cy + ry * 0.5 + len,
    flags: flagsOf(n),
  };
}

function beamGroups(notes: NoteEvent[]): NoteEvent[][] {
  const groups: NoteEvent[][] = [];
  let cur: NoteEvent[] = [];
  for (const n of notes) {
    const ok = !n.rest && !n.grace && flagsOf(n) > 0;
    if (!ok) {
      if (cur.length > 1) groups.push(cur);
      cur = [];
      continue;
    }
    if (cur.length) {
      const prev = cur[cur.length - 1];
      const gap = n.onsetBeat - (prev.onsetBeat + prev.durBeat);
      if (gap > 1e-6) {
        if (cur.length > 1) groups.push(cur);
        cur = [];
      }
    }
    cur.push(n);
  }
  if (cur.length > 1) groups.push(cur);
  return groups;
}

function drawBeams(
  ctx: CanvasRenderingContext2D,
  group: NoteEvent[],
  d: DrawCtx,
  rx: number,
  ry: number,
) {
  const up = group[0].stemUp;
  const thick = 0.42 * d.lineGapPx;

  const primary = (from: number, to: number, level: number) => {
    const p0 = stemEnds(d, rx, ry, group[from]);
    const p1 = stemEnds(d, rx, ry, group[to]);
    const off = up ? -level * thick : level * thick;
    const t = up ? thick : -thick;
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y + off);
    ctx.lineTo(p1.x, p1.y + off);
    ctx.lineTo(p1.x, p1.y + off + t);
    ctx.lineTo(p0.x, p0.y + off + t);
    ctx.closePath();
    ctx.fill();
  };

  primary(0, group.length - 1, 0);

  // Secondary beams: only across runs of notes that share the extra flag.
  for (let level = 1; level < 4; level++) {
    let runStart = -1;
    for (let i = 0; i <= group.length; i++) {
      const has = i < group.length && flagsOf(group[i]) > level;
      if (has && runStart < 0) runStart = i;
      if (!has && runStart >= 0) {
        if (i - 1 > runStart) primary(runStart, i - 1, level);
        runStart = -1;
      }
    }
  }
}


function drawBarlines(
  ctx: CanvasRenderingContext2D,
  d: DrawCtx,
  yTop: number,
  yBottom: number,
) {
  const { X, layout, sys, opts } = d;
  ctx.fillStyle = opts.style.barline;
  for (const bx of layout.barX) {
    if (bx <= sys.x0 + 0.01 || bx > sys.x1) continue;
    ctx.fillRect(X(bx) - 0.8, yTop, 1.7, yBottom - yTop);
  }
}

function drawHeader(
  ctx: CanvasRenderingContext2D,
  lane: LaneLayout,
  d: DrawCtx,
  yTopLine: number,
) {
  const { X, Y, lineGapPx, layout, sys, opts } = d;
  if (sys.index !== 0) return;
  const style = opts.style;
  const { lineGap } = layout.options;
  let x = X(sys.x0) + 6;

  const clef = CLEF_GLYPH[lane.track.clef.sign] ?? CLEF_GLYPH.G;
  const clefFont = `${Math.round(4.6 * lineGapPx)}px ${style.fontStack}`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  if (fontHasGlyph(clef, clefFont)) {
    ctx.font = clefFont;
    ctx.fillStyle = style.clef;
    ctx.fillText(clef, x, Y(lane.y - 0.6 * lineGap) + lineGapPx * 1.6);
    x += 4.2 * lineGapPx;
  } else {
    ctx.font = `${Math.round(3 * lineGapPx)}px Georgia, serif`;
    ctx.fillStyle = style.clef;
    ctx.fillText(lane.track.clef.sign === 'F' ? 'F' : lane.track.clef.sign === 'C' ? 'C' : 'G', x, Y(lane.y));
    x += 2.4 * lineGapPx;
  }

  if (opts.showText) {
    const fifths = lane.keyFifths;
    if (fifths !== 0) {
      ctx.font = `${Math.round(1.5 * lineGapPx)}px ${style.fontStack}`;
      ctx.fillStyle = style.text;
      ctx.textAlign = 'left';
      ctx.fillText(`${Math.abs(fifths)}${fifths > 0 ? '\u266F' : '\u266D'}`, x, Y(lane.y + 1.4 * lineGap));
      x += 2.1 * lineGapPx;
    }
    const ts = lane.timeSig;
    if (ts) {
      ctx.font = `bold ${Math.round(2.1 * lineGapPx)}px Georgia, serif`;
      ctx.textAlign = 'center';
      ctx.fillStyle = style.clef;
      ctx.fillText(String(ts.beats), x + lineGapPx, Y(lane.y + 0.55 * lineGap));
      ctx.fillText(String(ts.beatType), x + lineGapPx, Y(lane.y - 1.35 * lineGap));
      x += 2.6 * lineGapPx;
    }
    ctx.textAlign = 'left';
    ctx.font = `${Math.round(1.15 * lineGapPx)}px system-ui, sans-serif`;
    ctx.fillStyle = 'rgba(157,176,200,0.75)';
    ctx.fillText(lane.track.partName, X(sys.x0) + 6, yTopLine - lineGapPx * 0.7);
  }
}

function drawMarks(
  ctx: CanvasRenderingContext2D,
  lane: LaneLayout,
  d: DrawCtx,
  yBottomLine: number,
) {
  const { X, lineGapPx, sys, opts } = d;
  if (!opts.showText) return;
  const style = opts.style;

  for (let i = 0; i < lane.marks.length; i++) {
    const mk = lane.marks[i];
    if (mk.x < sys.x0 - 0.4 || mk.x > sys.x1) continue;

    if (mk.dir !== 0) {
      // Hairpin to the next mark.
      const next = lane.marks.slice(i + 1).find((k) => k.x > mk.x);
      const xEnd = Math.min(next ? next.x : mk.x + 5, sys.x1);
      const y = yBottomLine + lineGapPx * 1.15;
      const mid = (X(mk.x) + X(xEnd)) / 2;
      ctx.strokeStyle = 'rgba(157,176,200,0.6)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      if (mk.dir > 0) {
        ctx.moveTo(X(mk.x), y);
        ctx.lineTo(mid, y - lineGapPx * 0.6);
        ctx.lineTo(X(xEnd), y);
      } else {
        ctx.moveTo(X(mk.x), y - lineGapPx * 0.6);
        ctx.lineTo(mid, y);
        ctx.lineTo(X(xEnd), y - lineGapPx * 0.6);
      }
      ctx.stroke();
      continue;
    }

    if (!mk.text) continue;
    ctx.font = `${Math.round(1.25 * lineGapPx)}px Georgia, serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = style.text;
    ctx.fillText(mk.text, X(mk.x), yBottomLine + lineGapPx * 1.1);
  }
  ctx.textBaseline = 'alphabetic';
}
