# Estrutura do Código-Fonte

## Visão Geral

```
hola/
├── public/                     # Assets públicos
│   ├── images/                 # Imagens do conteúdo
│   │   ├── characters/         # Personagens
│   │   ├── vocabulary/         # Imagens de vocabulário
│   │   └── ui/                 # Ícones e UI
│   ├── audio/                  # Arquivos de áudio
│   │   ├── vocabulary/         # Pronúncias
│   │   ├── effects/            # Efeitos sonoros
│   │   └── music/              # Músicas de fundo
│   └── favicon.ico
│
├── src/
│   ├── main.tsx                # Entry point
│   ├── App.tsx                 # Root component
│   ├── router.tsx              # Configuração de rotas
│   │
│   ├── components/             # Componentes reutilizáveis
│   │   ├── ui/                 # Componentes de UI genéricos
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── index.ts
│   │   ├── character/          # Componentes do personagem
│   │   │   ├── Character.tsx
│   │   │   ├── CharacterBubble.tsx
│   │   │   └── index.ts
│   │   ├── lesson/             # Componentes de aula
│   │   │   ├── VocabularyCard.tsx
│   │   │   ├── QuizOption.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   └── index.ts
│   │   ├── rewards/            # Sistema de recompensas
│   │   │   ├── StarCounter.tsx
│   │   │   ├── Celebration.tsx
│   │   │   └── index.ts
│   │   └── layout/             # Componentes de layout
│   │       ├── Header.tsx
│   │       ├── Navigation.tsx
│   │       └── index.ts
│   │
│   ├── pages/                  # Páginas da aplicação
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   ├── Home.test.tsx
│   │   │   └── index.ts
│   │   ├── Trail/
│   │   │   ├── Trail.tsx
│   │   │   └── index.ts
│   │   ├── Lesson/
│   │   │   ├── Lesson.tsx
│   │   │   ├── LessonIntro.tsx
│   │   │   ├── LessonVocabulary.tsx
│   │   │   ├── LessonQuiz.tsx
│   │   │   ├── LessonComplete.tsx
│   │   │   └── index.ts
│   │   └── Parent/
│   │       ├── ParentPanel.tsx
│   │       ├── ProgressReport.tsx
│   │       └── index.ts
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── useAudio.ts         # Gerenciamento de áudio
│   │   ├── useProgress.ts      # Progresso do usuário
│   │   ├── useLesson.ts        # Dados da aula atual
│   │   ├── useAuth.ts          # Autenticação
│   │   └── index.ts
│   │
│   ├── stores/                 # Estado global (Zustand)
│   │   ├── userStore.ts        # Dados do usuário
│   │   ├── lessonStore.ts      # Estado da aula
│   │   ├── rewardStore.ts      # Recompensas
│   │   └── index.ts
│   │
│   ├── services/               # Serviços externos
│   │   ├── supabase.ts         # Cliente Supabase
│   │   ├── audio.ts            # Serviço de áudio
│   │   ├── analytics.ts        # Analytics
│   │   └── index.ts
│   │
│   ├── content/                # Conteúdo das aulas
│   │   ├── themes/
│   │   │   ├── animals.ts      # Tema: Animais
│   │   │   ├── colors.ts       # Tema: Cores
│   │   │   └── index.ts
│   │   ├── lessons/
│   │   │   ├── lesson-1.ts
│   │   │   ├── lesson-2.ts
│   │   │   └── index.ts
│   │   └── types.ts            # Tipos de conteúdo
│   │
│   ├── styles/                 # Estilos globais
│   │   ├── globals.css         # CSS global + Tailwind
│   │   └── animations.css      # Animações customizadas
│   │
│   ├── types/                  # Tipos TypeScript
│   │   ├── user.ts
│   │   ├── lesson.ts
│   │   ├── content.ts
│   │   └── index.ts
│   │
│   └── utils/                  # Utilitários
│       ├── cn.ts               # Class name helper
│       ├── storage.ts          # Local storage
│       └── index.ts
│
├── docs/                       # Documentação
│   ├── prd/                    # Product Requirements
│   ├── architecture/           # Arquitetura técnica
│   ├── stories/                # User stories
│   └── qa/                     # Quality assurance
│
├── tests/                      # Testes
│   ├── unit/                   # Testes unitários
│   ├── integration/            # Testes de integração
│   └── e2e/                    # Testes E2E
│
├── .github/                    # GitHub configs
│   └── workflows/
│       └── ci.yml              # CI/CD pipeline
│
├── index.html                  # HTML template
├── vite.config.ts              # Vite config
├── tailwind.config.js          # Tailwind config
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
└── README.md                   # Documentação principal
```

---

## Convenções de Nomenclatura

### Arquivos

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Componentes | PascalCase | `VocabularyCard.tsx` |
| Hooks | camelCase com "use" | `useAudio.ts` |
| Stores | camelCase com "Store" | `userStore.ts` |
| Serviços | camelCase | `analytics.ts` |
| Tipos | camelCase | `user.ts` |
| Testes | nome.test.tsx | `Button.test.tsx` |

### Código

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Componentes | PascalCase | `VocabularyCard` |
| Funções | camelCase | `playSound` |
| Constantes | UPPER_SNAKE | `MAX_STARS` |
| Tipos/Interfaces | PascalCase | `UserProgress` |
| Props | PascalCase + Props | `ButtonProps` |

---

## Organização de Componentes

Cada componente segue a estrutura:

```
ComponentName/
├── ComponentName.tsx       # Implementação
├── ComponentName.test.tsx  # Testes (se necessário)
├── ComponentName.stories.tsx # Storybook (se necessário)
└── index.ts                # Export
```

### Exemplo de Componente

```tsx
// src/components/lesson/VocabularyCard.tsx

import { motion } from 'framer-motion';
import { useAudio } from '@/hooks';
import { cn } from '@/utils';

export interface VocabularyCardProps {
  word: string;
  image: string;
  audio: string;
  onComplete?: () => void;
}

export function VocabularyCard({
  word,
  image,
  audio,
  onComplete
}: VocabularyCardProps) {
  const { play } = useAudio();

  const handleClick = () => {
    play(audio);
    onComplete?.();
  };

  return (
    <motion.button
      className={cn(
        "flex flex-col items-center p-6",
        "bg-white rounded-3xl shadow-lg",
        "active:scale-95 transition-transform"
      )}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <img
        src={image}
        alt={word}
        className="w-32 h-32 object-contain"
      />
      <span className="mt-4 text-2xl font-child font-bold text-hola-blue">
        {word}
      </span>
    </motion.button>
  );
}
```

---

## Imports

Usar path aliases para imports limpos:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@stores/*": ["./src/stores/*"],
      "@services/*": ["./src/services/*"],
      "@content/*": ["./src/content/*"],
      "@types/*": ["./src/types/*"],
      "@utils/*": ["./src/utils/*"]
    }
  }
}
```

### Ordem de Imports

1. React e bibliotecas externas
2. Componentes
3. Hooks
4. Stores
5. Services
6. Types
7. Utils
8. Styles

```typescript
// Exemplo
import { useState } from 'react';
import { motion } from 'framer-motion';

import { Button, Card } from '@components/ui';
import { VocabularyCard } from '@components/lesson';

import { useAudio, useProgress } from '@hooks';

import { userStore } from '@stores';

import { supabase } from '@services';

import type { Lesson, Word } from '@types';

import { cn } from '@utils';
```
