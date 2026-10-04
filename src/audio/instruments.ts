/**
 * A small additive/subtractive synth. No samples and no downloads: every voice is a
 * PeriodicWave plus an envelope, so rendering is deterministic and identical
 * between the OfflineAudioContext used for export and the live AudioContext.
 */

import type { Track } from '../core/types';

export type Family =
  | 'flute' | 'oboe' | 'clarinet' | 'bassoon' | 'horn' | 'trumpet' | 'timpani'
  | 'violin' | 'viola' | 'cello' | 'bass' | 'harp' | 'piano' | 'organ' | 'voice' | 'pluck';

export interface InstrumentSpec {
  family: Family;
  name: string;
  /** Harmonic amplitudes, index 0 = fundamental. */
  harmonics: number[];
  /** Phase offsets in turns, parallel to `harmonics`. */
  phases: number[];
  attack: number;
  decay: number;
  sustain: number;
  release: number;
  /** Overall gain trim. */
  gain: number;
  /** Filter cutoff as a fraction of the note frequency (0 = very dark). */
  brightness: number;
  /** Amount of breath/attack noise, 0..1. */
  noise: number;
  /** Vibrato depth in cents and rate in Hz. */
  vibratoCents: number;
  vibratoHz: number;
  /** Amount of stereo placement from the lane index. */
  detuneCents: number;
}

const base = (o: Partial<InstrumentSpec> & { harmonics: number[] }): InstrumentSpec => ({
  family: 'piano',
  name: 'piano',
  phases: o.harmonics.map((_, i) => (i % 2 ? 0.5 : 0)),
  attack: 0.02,
  decay: 0.25,
  sustain: 0.6,
  release: 0.3,
  gain: 0.5,
  brightness: 0.9,
  noise: 0,
  vibratoCents: 0,
  vibratoHz: 0,
  detuneCents: 4,
  ...o,
});

export const INSTRUMENTS: Record<Family, InstrumentSpec> = {
  flute: base({
    family: 'flute', name: 'flute', harmonics: [1, 0.22, 0.12, 0.04],
    attack: 0.06, decay: 0.1, sustain: 0.82, release: 0.18, gain: 0.42,
    brightness: 1.1, noise: 0.1, vibratoCents: 12, vibratoHz: 5.2,
  }),
  oboe: base({
    family: 'oboe', name: 'oboe', harmonics: [1, 0.55, 0.3, 0.22, 0.1],
    attack: 0.035, decay: 0.12, sustain: 0.78, release: 0.15, gain: 0.4,
    brightness: 0.95, noise: 0.07, vibratoCents: 10, vibratoHz: 5,
  }),
  clarinet: base({
    family: 'clarinet', name: 'clarinet', harmonics: [1, 0.03, 0.62, 0.04, 0.28, 0.02, 0.12],
    attack: 0.04, decay: 0.12, sustain: 0.8, release: 0.16, gain: 0.4,
    brightness: 0.8, noise: 0.05, vibratoCents: 8, vibratoHz: 4.6,
  }),
  bassoon: base({
    family: 'bassoon', name: 'bassoon', harmonics: [1, 0.4, 0.15, 0.1, 0.05],
    attack: 0.05, decay: 0.14, sustain: 0.78, release: 0.18, gain: 0.46,
    brightness: 0.55, noise: 0.09, vibratoCents: 8, vibratoHz: 4.2,
  }),
  horn: base({
    family: 'horn', name: 'horn', harmonics: [1, 0.5, 0.28, 0.12, 0.08, 0.04],
    phases: [0, 0, 0, 0, 0, 0],
    attack: 0.07, decay: 0.16, sustain: 0.8, release: 0.2, gain: 0.44,
    brightness: 0.6, noise: 0.05, vibratoCents: 6, vibratoHz: 4,
  }),
  trumpet: base({
    family: 'trumpet', name: 'trumpet', harmonics: [1, 0.85, 0.6, 0.42, 0.3, 0.18, 0.12],
    phases: [0, 0.5, 0, 0.5, 0, 0.5, 0],
    attack: 0.025, decay: 0.1, sustain: 0.82, release: 0.14, gain: 0.4,
    brightness: 1.15, noise: 0.06, vibratoCents: 5, vibratoHz: 5.6,
  }),
  timpani: base({
    family: 'timpani', name: 'timpani', harmonics: [1, 0.3, 0.12, 0.05],
    attack: 0.002, decay: 0.9, sustain: 0.06, release: 0.35, gain: 0.62,
    brightness: 0.35, noise: 0.3,
  }),
  violin: base({
    family: 'violin', name: 'violin', harmonics: [1, 0.62, 0.42, 0.3, 0.2, 0.14, 0.1, 0.06],
    attack: 0.055, decay: 0.14, sustain: 0.8, release: 0.22, gain: 0.4,
    brightness: 1.2, noise: 0.05, vibratoCents: 18, vibratoHz: 5.4,
  }),
  viola: base({
    family: 'viola', name: 'viola', harmonics: [1, 0.58, 0.38, 0.26, 0.17, 0.11, 0.08],
    attack: 0.055, decay: 0.15, sustain: 0.8, release: 0.22, gain: 0.42,
    brightness: 1.0, noise: 0.05, vibratoCents: 16, vibratoHz: 5,
  }),
  cello: base({
    family: 'cello', name: 'cello', harmonics: [1, 0.5, 0.3, 0.18, 0.12, 0.07],
    attack: 0.06, decay: 0.16, sustain: 0.8, release: 0.24, gain: 0.46,
    brightness: 0.8, noise: 0.06, vibratoCents: 13, vibratoHz: 4.6,
  }),
  bass: base({
    family: 'bass', name: 'bass', harmonics: [1, 0.4, 0.22, 0.1, 0.05],
    attack: 0.03, decay: 0.18, sustain: 0.75, release: 0.2, gain: 0.5,
    brightness: 0.6, noise: 0.06, vibratoCents: 8, vibratoHz: 4,
  }),
  harp: base({
    family: 'harp', name: 'harp', harmonics: [1, 0.4, 0.22, 0.12, 0.06],
    attack: 0.002, decay: 0.55, sustain: 0.15, release: 0.3, gain: 0.42,
    brightness: 0.8, noise: 0.12, vibratoCents: 0, vibratoHz: 0,
  }),
  pluck: base({
    family: 'pluck', name: 'pizzicato', harmonics: [1, 0.5, 0.28, 0.14, 0.07],
    attack: 0.001, decay: 0.32, sustain: 0.02, release: 0.12, gain: 0.46,
    brightness: 0.9, noise: 0.34, vibratoCents: 0, vibratoHz: 0,
  }),
  piano: base({
    family: 'piano', name: 'piano', harmonics: [1, 0.42, 0.2, 0.12, 0.07, 0.04, 0.02],
    attack: 0.004, decay: 0.6, sustain: 0.22, release: 0.35, gain: 0.5,
    brightness: 1.0, noise: 0.08, vibratoCents: 0, vibratoHz: 0,
  }),
  organ: base({
    family: 'organ', name: 'organ', harmonics: [1, 0.6, 0.35, 0.18, 0.1],
    phases: [0, 0.25, 0, 0.25, 0],
    attack: 0.02, decay: 0.05, sustain: 0.95, release: 0.1, gain: 0.36,
    brightness: 0.9, noise: 0, vibratoCents: 5, vibratoHz: 4.8,
  }),
  voice: base({
    family: 'voice', name: 'voice', harmonics: [1, 0.5, 0.3, 0.15, 0.08, 0.04],
    attack: 0.08, decay: 0.15, sustain: 0.75, release: 0.2, gain: 0.4,
    brightness: 0.95, noise: 0.08, vibratoCents: 20, vibratoHz: 5.5,
  }),
};

const NAME_HINTS: [RegExp, Family][] = [
  [/timpani|\btimp\b/i, 'timpani'],
  [/harp|celesta|glocken|chime|bell/i, 'harp'],
  [/pizz/i, 'pluck'],
  [/harpsichord|clavichord/i, 'pluck'],
  [/organ/i, 'organ'],
  [/piano|clav|pianoforte/i, 'piano'],
  [/flute|fl\.?\b|travers/i, 'flute'],
  [/oboe/i, 'oboe'],
  [/clarinet/i, 'clarinet'],
  [/bassoon|fagott|bassoon/i, 'bassoon'],
  [/horn|corno|cor\b/i, 'horn'],
  [/trumpet|cornet|tromba|tromp/i, 'trumpet'],
  [/trombone/i, 'trumpet'],
  [/cello|violon|violoncello|vc\b/i, 'cello'],
  [/double bass|contrabass|db\b|basso/i, 'bass'],
  [/viola/i, 'viola'],
  [/violin|violone|vl\b|vn\b/i, 'violin'],
  [/guitar|lute/i, 'pluck'],
  [/voice|choir|soprano|alto|tenor|basso/i, 'voice'],
];

const GM_FAMILY: Record<number, Family> = {
  0: 'piano', 1: 'piano', 2: 'piano', 3: 'piano', 4: 'piano', 5: 'piano', 6: 'piano', 7: 'piano',
  8: 'piano', 9: 'piano', 10: 'piano', 11: 'piano', 12: 'pluck', 13: 'pluck',
  15: 'organ', 16: 'organ', 17: 'organ', 18: 'organ', 19: 'organ', 20: 'organ',
  21: 'pluck', 22: 'pluck', 23: 'pluck',
  24: 'pluck', 25: 'pluck', 26: 'pluck', 27: 'violin',
  32: 'bass', 33: 'bass', 34: 'bass', 35: 'bass', 36: 'bass', 37: 'bass',
  40: 'violin', 41: 'viola', 42: 'cello', 43: 'bass', 44: 'violin', 45: 'pluck',
  46: 'harp', 47: 'timpani', 48: 'voice', 49: 'voice', 50: 'voice', 51: 'voice', 52: 'voice',
  53: 'voice', 54: 'trumpet',
  56: 'trumpet', 57: 'trumpet', 58: 'trumpet', 59: 'trumpet',
  60: 'bassoon', 61: 'bassoon', 62: 'bassoon', 63: 'bassoon',
  64: 'bassoon', 65: 'bassoon', 66: 'bassoon', 67: 'bassoon',
  68: 'oboe', 69: 'oboe', 70: 'clarinet', 71: 'clarinet', 72: 'clarinet',
  73: 'flute', 74: 'flute', 75: 'flute', 76: 'flute', 77: 'flute', 78: 'flute', 79: 'flute',
};

/** Pick a timbre for a track from its name, then fall back to the General MIDI program. */
export function instrumentFor(track: Track): InstrumentSpec {
  const hay = `${track.partName} ${track.voiceNo}`;
  for (const [re, family] of NAME_HINTS) {
    if (re.test(hay)) return { ...INSTRUMENTS[family], name: track.partName };
  }
  if (track.midiProgram != null && GM_FAMILY[track.midiProgram]) {
    const f = GM_FAMILY[track.midiProgram];
    return { ...INSTRUMENTS[f], name: track.partName };
  }
  return { ...INSTRUMENTS.piano, name: track.partName };
}

export const midiToFreq = (midi: number): number => 440 * Math.pow(2, (midi - 69) / 12);
