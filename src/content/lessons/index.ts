export interface Word {
  spanish: string;
  portuguese: string;
  image: string;
  audio: string;
}

export interface QuizQuestion {
  image: string;
  options: string[];
  correct: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  words: Word[];
  quiz: QuizQuestion[];
}

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Animais da Fazenda',
    description: 'Aprenda os nomes dos animais que vivem na fazenda!',
    icon: '🐄',
    words: [
      {
        spanish: 'Perro',
        portuguese: 'Cachorro',
        image: '/images/vocabulary/perro.png',
        audio: '/audio/vocabulary/perro.mp3',
      },
      {
        spanish: 'Gato',
        portuguese: 'Gato',
        image: '/images/vocabulary/gato.png',
        audio: '/audio/vocabulary/gato.mp3',
      },
      {
        spanish: 'Vaca',
        portuguese: 'Vaca',
        image: '/images/vocabulary/vaca.png',
        audio: '/audio/vocabulary/vaca.mp3',
      },
      {
        spanish: 'Caballo',
        portuguese: 'Cavalo',
        image: '/images/vocabulary/caballo.png',
        audio: '/audio/vocabulary/caballo.mp3',
      },
      {
        spanish: 'Pollo',
        portuguese: 'Galinha',
        image: '/images/vocabulary/pollo.png',
        audio: '/audio/vocabulary/pollo.mp3',
      },
    ],
    quiz: [
      { image: '🐕', options: ['Perro', 'Gato', 'Vaca', 'Pollo'], correct: 'Perro' },
      { image: '🐱', options: ['Caballo', 'Gato', 'Perro', 'Vaca'], correct: 'Gato' },
      { image: '🐄', options: ['Pollo', 'Perro', 'Vaca', 'Gato'], correct: 'Vaca' },
    ],
  },
  {
    id: 'lesson-2',
    title: 'Animais Selvagens',
    description: 'Conheça os animais da selva em espanhol!',
    icon: '🦁',
    words: [
      {
        spanish: 'León',
        portuguese: 'Leão',
        image: '/images/vocabulary/leon.png',
        audio: '/audio/vocabulary/leon.mp3',
      },
      {
        spanish: 'Elefante',
        portuguese: 'Elefante',
        image: '/images/vocabulary/elefante.png',
        audio: '/audio/vocabulary/elefante.mp3',
      },
      {
        spanish: 'Mono',
        portuguese: 'Macaco',
        image: '/images/vocabulary/mono.png',
        audio: '/audio/vocabulary/mono.mp3',
      },
      {
        spanish: 'Jirafa',
        portuguese: 'Girafa',
        image: '/images/vocabulary/jirafa.png',
        audio: '/audio/vocabulary/jirafa.mp3',
      },
      {
        spanish: 'Tigre',
        portuguese: 'Tigre',
        image: '/images/vocabulary/tigre.png',
        audio: '/audio/vocabulary/tigre.mp3',
      },
    ],
    quiz: [
      { image: '🦁', options: ['Tigre', 'León', 'Mono', 'Jirafa'], correct: 'León' },
      { image: '🐘', options: ['Elefante', 'León', 'Mono', 'Tigre'], correct: 'Elefante' },
      { image: '🦒', options: ['Mono', 'Tigre', 'Jirafa', 'León'], correct: 'Jirafa' },
    ],
  },
  {
    id: 'lesson-3',
    title: 'Animais do Mar',
    description: 'Descubra as criaturas do oceano!',
    icon: '🐠',
    words: [
      {
        spanish: 'Pez',
        portuguese: 'Peixe',
        image: '/images/vocabulary/pez.png',
        audio: '/audio/vocabulary/pez.mp3',
      },
      {
        spanish: 'Ballena',
        portuguese: 'Baleia',
        image: '/images/vocabulary/ballena.png',
        audio: '/audio/vocabulary/ballena.mp3',
      },
      {
        spanish: 'Delfín',
        portuguese: 'Golfinho',
        image: '/images/vocabulary/delfin.png',
        audio: '/audio/vocabulary/delfin.mp3',
      },
      {
        spanish: 'Tiburón',
        portuguese: 'Tubarão',
        image: '/images/vocabulary/tiburon.png',
        audio: '/audio/vocabulary/tiburon.mp3',
      },
      {
        spanish: 'Tortuga',
        portuguese: 'Tartaruga',
        image: '/images/vocabulary/tortuga.png',
        audio: '/audio/vocabulary/tortuga.mp3',
      },
    ],
    quiz: [
      { image: '🐟', options: ['Ballena', 'Pez', 'Delfín', 'Tortuga'], correct: 'Pez' },
      { image: '🐬', options: ['Tiburón', 'Pez', 'Delfín', 'Ballena'], correct: 'Delfín' },
      { image: '🦈', options: ['Tortuga', 'Tiburón', 'Ballena', 'Pez'], correct: 'Tiburón' },
    ],
  },
  {
    id: 'lesson-4',
    title: 'Pequenos Animais',
    description: 'Aprenda sobre insetos e pequenos bichinhos!',
    icon: '🦋',
    words: [
      {
        spanish: 'Mariposa',
        portuguese: 'Borboleta',
        image: '/images/vocabulary/mariposa.png',
        audio: '/audio/vocabulary/mariposa.mp3',
      },
      {
        spanish: 'Abeja',
        portuguese: 'Abelha',
        image: '/images/vocabulary/abeja.png',
        audio: '/audio/vocabulary/abeja.mp3',
      },
      {
        spanish: 'Hormiga',
        portuguese: 'Formiga',
        image: '/images/vocabulary/hormiga.png',
        audio: '/audio/vocabulary/hormiga.mp3',
      },
      {
        spanish: 'Araña',
        portuguese: 'Aranha',
        image: '/images/vocabulary/arana.png',
        audio: '/audio/vocabulary/arana.mp3',
      },
      {
        spanish: 'Caracol',
        portuguese: 'Caracol',
        image: '/images/vocabulary/caracol.png',
        audio: '/audio/vocabulary/caracol.mp3',
      },
    ],
    quiz: [
      { image: '🦋', options: ['Abeja', 'Mariposa', 'Hormiga', 'Araña'], correct: 'Mariposa' },
      { image: '🐝', options: ['Caracol', 'Araña', 'Abeja', 'Hormiga'], correct: 'Abeja' },
      { image: '🐜', options: ['Hormiga', 'Mariposa', 'Caracol', 'Abeja'], correct: 'Hormiga' },
    ],
  },
  {
    id: 'lesson-5',
    title: 'Revisão Final',
    description: 'Teste tudo o que você aprendeu!',
    icon: '🏆',
    words: [
      {
        spanish: 'Perro',
        portuguese: 'Cachorro',
        image: '/images/vocabulary/perro.png',
        audio: '/audio/vocabulary/perro.mp3',
      },
      {
        spanish: 'León',
        portuguese: 'Leão',
        image: '/images/vocabulary/leon.png',
        audio: '/audio/vocabulary/leon.mp3',
      },
      {
        spanish: 'Delfín',
        portuguese: 'Golfinho',
        image: '/images/vocabulary/delfin.png',
        audio: '/audio/vocabulary/delfin.mp3',
      },
      {
        spanish: 'Mariposa',
        portuguese: 'Borboleta',
        image: '/images/vocabulary/mariposa.png',
        audio: '/audio/vocabulary/mariposa.mp3',
      },
      {
        spanish: 'Elefante',
        portuguese: 'Elefante',
        image: '/images/vocabulary/elefante.png',
        audio: '/audio/vocabulary/elefante.mp3',
      },
    ],
    quiz: [
      { image: '🐕', options: ['León', 'Perro', 'Delfín', 'Elefante'], correct: 'Perro' },
      { image: '🦁', options: ['Mariposa', 'Perro', 'León', 'Delfín'], correct: 'León' },
      { image: '🐬', options: ['Elefante', 'Delfín', 'León', 'Mariposa'], correct: 'Delfín' },
      { image: '🦋', options: ['Perro', 'Elefante', 'Mariposa', 'León'], correct: 'Mariposa' },
      { image: '🐘', options: ['Delfín', 'Mariposa', 'Perro', 'Elefante'], correct: 'Elefante' },
    ],
  },
];
