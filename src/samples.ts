export interface Sample {
  title: string;
  subtitle: string;
  url: string;
}

const BASE = 'https://musetrainer.github.io/library/scores/';

/**
 * Featured pieces. Both lists render into one chip list; this split is only
 * about which sit at the top. Subtitles are taken from what the MusicXML
 * actually claims (work-title / creator), not guessed from the piece.
 */
export const SAMPLES: Sample[] = [
  { title: 'Canon in D', subtitle: 'Pachelbel · melody over a walking bass', url: BASE + 'Canon_in_D.mxl' },
  { title: "Bach · Air on the G String", subtitle: 'arr. for piano', url: BASE + 'J._S._Bach_-_Air_on_the_G_String_Piano_arrangement.mxl' },
  { title: 'Für Elise', subtitle: 'Beethoven · beginner edition', url: BASE + 'Fur_Elise_-_Beethoven_-_for_beginner_piano.mxl' },
  { title: 'Greensleeves', subtitle: 'easy + beautiful arrangement', url: BASE + 'Greensleeves_for_Piano_easy_and_beautiful.mxl' },
  { title: 'Hungarian Dance No. 5', subtitle: 'Brahms · in G minor', url: BASE + 'Hungarian_Dance_No_5_in_G_Minor.mxl' },
];

export const EXTRA_SAMPLES: Sample[] = [
  { title: 'Happy Birthday To You', subtitle: 'arr. for piano · the one everybody knows', url: BASE + 'Happy_Birthday_To_You_Piano.mxl' },
  { title: "Mariage d'Amoure", subtitle: 'Senneville · a waltz in three', url: BASE + 'Mariage_dAmour.mxl' },
  { title: 'Ode to Joy', subtitle: 'Beethoven · easy variation', url: BASE + 'Ode_to_Joy_Easy_variation.mxl' },
  { title: 'Passacaglia', subtitle: 'one long walking bass line', url: BASE + 'Passacaglia.mxl' },
  { title: 'Swan Lake', subtitle: 'Tchaikovsky · from the ballet', url: BASE + 'Swan_Lake.mxl' },
  { title: 'The Entertainer', subtitle: 'Scott Joplin · ragtime', url: BASE + 'The_Entertainer_-_Scott_Joplin.mxl' },
  { title: 'Arabesque No. 1', subtitle: 'Debussy', url: BASE + 'Arabesque_L._66_No._1_in_E_Major.mxl' },
  { title: 'Minuet in G', subtitle: 'BWV Anh. 114', url: BASE + 'Bach_Minuet_in_G_Major_BWV_Anh._114.mxl' },
  { title: 'Marche Turque', subtitle: 'Mozart · Turkish March', url: BASE + 'WA_Mozart_Marche_Turque_Turkish_March_fingered.mxl' },
];
