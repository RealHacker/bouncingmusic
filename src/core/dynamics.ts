/**
 * Shared loudness curve. The audio renderer and the orb brightness both read this,
 * so a crescendo is heard *and* seen at the same moment.
 */

import type { ScoreModel } from './types';

export interface DynamicCurve {
  (sec: number): number;
}

export function dynamicCurve(
  model: ScoreModel,
  trackId: string,
  beatToSec: (beat: number) => number,
): DynamicCurve {
  const marks = model.dynamics
    .filter((d) => d.trackId === trackId)
    .map((d) => ({ sec: beatToSec(d.beat), value: d.value, kind: 'lvl' as const }));
  const wedges = model.wedges
    .filter((w) => w.trackId === trackId)
    .map((w) => ({ sec: beatToSec(w.beat), dir: w.dir, kind: 'wedge' as const }));

  if (!marks.length && !wedges.length) return () => 0.62;

  const events = [
    ...marks.map((m) => ({ sec: m.sec, kind: 'lvl' as const, value: m.value })),
    ...wedges.map((w) => ({ sec: w.sec, kind: 'wedge' as const, value: w.dir })),
  ].sort((a, b) => a.sec - b.sec);

  const SPAN = 6; // beats a hairpin is assumed to last if nothing follows it

  return (sec: number): number => {
    let value = marks[0]?.value ?? 0.55;
    let wedgeStart = -Infinity;
    let wedgeDir = 0;
    for (const e of events) {
      if (e.sec > sec) break;
      if (e.kind === 'lvl') {
        value = e.value;
        wedgeStart = -Infinity;
        wedgeDir = 0;
      } else {
        wedgeStart = e.sec;
        wedgeDir = e.value;
      }
    }
    if (wedgeDir !== 0) {
      const next = events.find((e) => e.sec > wedgeStart);
      const end = next ? next.sec : wedgeStart + SPAN * 0.5;
      const u = Math.min(1, Math.max(0, (sec - wedgeStart) / Math.max(0.4, end - wedgeStart)));
      value = Math.min(1, Math.max(0.05, 0.42 + u * 0.5 * wedgeDir));
    }
    return value;
  };
}

/** Fallback used when a track has no dynamics at all. */
export const defaultDynamic = 0.62;
