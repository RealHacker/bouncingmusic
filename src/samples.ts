export interface Sample {
  title: string;
  subtitle: string;
  url: string;
}

const BASE = 'https://musetrainer.github.io/library/scores/';

export const SAMPLES: Sample[] = [
  { title: 'Canon in D', subtitle: 'Pachelbel · melody over a walking bass', url: BASE + 'Canon_in_D.mxl' },
  { title: "Bach · Air on the G String", subtitle: 'arr. for piano', url: BASE + 'J._S._Bach_-_Air_on_the_G_String_Piano_arrangement.mxl' },
  { title: 'Clair de Lune', subtitle: 'Debussy', url: BASE + 'Clair_de_Lune__Debussy.mxl' },
  { title: 'Für Elise', subtitle: 'Beethoven · beginner edition', url: BASE + 'Fur_Elise_-_Beethoven_-_for_beginner_piano.mxl' },
  { title: 'Greensleeves', subtitle: 'easy + beautiful arrangement', url: BASE + 'Greensleeves_for_Piano_easy_and_beautiful.mxl' },
];

export const EXTRA_SAMPLES: Sample[] = [
  { title: 'Prelude in C', subtitle: 'Bach, WTC I', url: BASE + 'Prelude_I_in_C_major_BWV_846_-_Well_Tempered_Clavier_First_Book.mxl' },
  { title: 'Moonlight Sonata', subtitle: 'Beethoven · 1st mvt', url: BASE + 'moonlight_sonata_3rd_movement.mxl' },
  { title: 'Arabesque No. 1', subtitle: 'Debussy', url: BASE + 'Arabesque_L._66_No._1_in_E_Major.mxl' },
  { title: 'Minuet in G', subtitle: 'BWV Anh. 114', url: BASE + 'Bach_Minuet_in_G_Major_BWV_Anh._114.mxl' },
  { title: 'Marche Turque', subtitle: 'Mozart · Turkish March', url: BASE + 'WA_Mozart_Marche_Turque_Turkish_March_fingered.mxl' },
];
