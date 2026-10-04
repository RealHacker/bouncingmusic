/** Shared data model. Everything downstream (layout, audio, scene, export) reads this. */

export type Step = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B';
export type ClefSign = 'G' | 'F' | 'C' | 'percussion';

export interface Clef {
  sign: ClefSign;
  line: number;
}

export interface Pitch {
  step: Step;
  alter: number;
  octave: number;
  /** MIDI note number. */
  midi: number;
  /** Diatonic index: STEP_DIA[step] + octave * 7. Used for staff placement. */
  dia: number;
}

export interface NoteEvent {
  id: number;
  trackId: string;
  /** Onset in quarter-note beats from the start of the piece. */
  onsetBeat: number;
  durBeat: number;
  /** Same instants converted with the tempo map. */
  onsetSec: number;
  durSec: number;
  /** Empty for rests; >1 for chords. */
  pitches: Pitch[];
  rest: boolean;
  tieStart: boolean;
  tieStop: boolean;
  grace: boolean;
  dots: number;
  /** Tuplet scaling, e.g. 2/3 for a triplet. */
  timeMod: { actual: number; normal: number } | null;
  /** Engraving note type as written in the file ("quarter", "eighth", …). */
  typeName: string;
  stems: string | null;

  // ---- filled in by the layout pass ----
  /** Position along the music axis, in sheet units. */
  x: number;
  /** Position across the sheet (up is positive), in sheet units. */
  y: number;
  /** Which lane (track row) this note lives in. */
  lane: number;
  /** Staff step, 0 = bottom line, resolved against the clef in force here. */
  staffStep: number;
  stemUp: boolean;
  /**
   * Diatonic index of the bottom staff line for the clef in force at this note.
   * Written notes are read against whichever clef is current, so a part that
   * switches clef mid-piece cannot be laid out with one clef throughout.
   */
  clefBottomDia: number;
}

/** A clef taking effect from `beat` onwards. */
export interface ClefChange {
  beat: number;
  clef: Clef;
}

export interface Track {
  id: string;
  partId: string;
  partName: string;
  staffNo: number;
  voiceNo: string;
  /** Clef at the start of the part; see `clefTimeline` for later changes. */
  clef: Clef;
  /** Every clef this track passes through, ordered by beat. */
  clefTimeline: ClefChange[];
  keyFifths: number;
  transpose: number;
  midiProgram: number | null;
  events: NoteEvent[];
  /** True when the track contains at least one sounding note. */
  sounding: boolean;
}

export type DynamicKind =
  | 'pppppp' | 'ppppp' | 'pppp' | 'ppp' | 'pp' | 'p'
  | 'mp' | 'mf'
  | 'f' | 'ff' | 'fff' | 'ffff' | 'fffff' | 'ffffff';

export interface DynamicMark {
  beat: number;
  kind: DynamicKind;
  /** Normalised loudness 0..1. */
  value: number;
  trackId: string;
}

export interface TempoPoint {
  beat: number;
  secPerBeat: number;
}

export interface Wedge {
  beat: number;
  /** 1 = crescendo, -1 = diminuendo. */
  dir: 1 | -1;
  trackId: string;
}

export interface Annotation {
  beat: number;
  text: string;
  trackId: string;
  above: boolean;
}


export interface ScoreModel {
  title: string;
  composer: string;
  sourceName: string;
  /** Global time-signature history, keyed by measure index. */
  timeSigs: { measure: number; beats: number; beatType: number }[];
  keyFifths: number;
  tempoMap: TempoPoint[];
  /** Measure start positions, in quarter-note beats, taken from the first part. */
  measureBeats: number[];
  tracks: Track[];
  dynamics: DynamicMark[];
  wedges: Wedge[];
  annotations: Annotation[];
  durationSec: number;
  noteCount: number;
  warnings: string[];
}

export const STEP_SEMI: Record<Step, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
export const STEP_DIA: Record<Step, number> = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };

/** Diatonic index of the note sitting on the bottom staff line, per clef. */
export const CLEF_BOTTOM_DIA: Record<string, number> = {
  'G2': 30, // E4
  'G1': 37, // E5, French violin clef
  'F4': 18, // G2
  'F3': 25, // G3
  'F5': 11, // G1
  'C1': 28, // C4
  'C2': 26, // A3
  'C3': 24, // F3
  'C4': 22, // D3
  'C5': 31, // F4
  'perc': 28,
};

export function clefKey(c: Clef): string {
  return c.sign === 'percussion' ? 'perc' : `${c.sign}${c.line}`;
}

export function clefBottomDia(c: Clef): number {
  return CLEF_BOTTOM_DIA[clefKey(c)] ?? 30;
}

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export function midiName(midi: number): string {
  const m = Math.round(midi);
  return `${NOTE_NAMES[((m % 12) + 12) % 12]}${Math.floor(m / 12) - 1}`;
}

export const DYNAMIC_VALUE: Record<string, number> = {
  pppppp: 0.06, ppppp: 0.1, pppp: 0.16, ppp: 0.24, pp: 0.34, p: 0.45,
  mp: 0.55, mf: 0.68, f: 0.82, ff: 0.9, fff: 0.95, ffff: 0.98, fffff: 1, ffffff: 1,
};

export function isDynamicName(name: string): name is DynamicKind {
  return Object.prototype.hasOwnProperty.call(DYNAMIC_VALUE, name);
}
