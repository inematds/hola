# Padrões de Código

## Princípios Gerais

1. **Simplicidade** - Código simples e direto
2. **Legibilidade** - Fácil de entender
3. **Consistência** - Padrões uniformes
4. **Tipagem** - TypeScript estrito
5. **Testabilidade** - Código testável

---

## TypeScript

### Configuração Estrita

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  }
}
```

### Tipos

```typescript
// Preferir interfaces para objetos
interface User {
  id: string;
  name: string;
  stars: number;
}

// Preferir type para unions e intersections
type Status = 'idle' | 'loading' | 'success' | 'error';

// Evitar any - usar unknown se necessário
function parseJSON(json: string): unknown {
  return JSON.parse(json);
}

// Props sempre com interface
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}
```

### Generics

```typescript
// Usar generics para reusabilidade
function getItem<T>(key: string, fallback: T): T {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : fallback;
}
```

---

## React

### Componentes Funcionais

```typescript
// SEMPRE usar function declaration
export function VocabularyCard({ word, image }: VocabularyCardProps) {
  return (
    // ...
  );
}

// NUNCA usar arrow functions para componentes
// ❌ export const VocabularyCard = () => {}
```

### Props

```typescript
// Desestruturar props
function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  // ...
}

// Usar children explícito
interface CardProps {
  children: React.ReactNode;
  title?: string;
}
```

### Hooks

```typescript
// Custom hooks começam com "use"
export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback((src: string) => {
    // ...
  }, []);

  return { isPlaying, play };
}

// Dependências explícitas em useEffect
useEffect(() => {
  fetchData();
}, [userId]); // Lista explícita
```

### Eventos

```typescript
// Handlers com prefixo "handle"
function Form() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ...
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
    </form>
  );
}
```

### Condicionais

```typescript
// Early return para condições simples
function UserProfile({ user }: { user: User | null }) {
  if (!user) {
    return <Loading />;
  }

  return <Profile user={user} />;
}

// Ternário para inline simples
<button disabled={isLoading ? true : false}>
  {isLoading ? 'Carregando...' : 'Enviar'}
</button>

// && para renderização condicional
{hasError && <ErrorMessage />}
```

---

## Styling (Tailwind)

### Classes

```tsx
// Usar cn() helper para classes condicionais
import { cn } from '@/utils';

function Button({ variant, disabled }: ButtonProps) {
  return (
    <button
      className={cn(
        // Base
        "px-6 py-3 rounded-full font-bold",
        "transition-all duration-200",
        // Variants
        variant === 'primary' && "bg-hola-orange text-white",
        variant === 'secondary' && "bg-hola-yellow text-gray-800",
        // States
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && "hover:scale-105 active:scale-95"
      )}
    >
      {children}
    </button>
  );
}
```

### Organização de Classes

1. Layout (display, position)
2. Sizing (width, height, padding, margin)
3. Typography (font, text)
4. Colors (bg, text color, border)
5. Effects (shadow, opacity, transform)
6. Transitions

```tsx
<div className={cn(
  // Layout
  "flex flex-col items-center justify-center",
  // Sizing
  "w-full max-w-md p-6 m-4",
  // Typography
  "text-xl font-bold text-center",
  // Colors
  "bg-white text-gray-800 border-2 border-gray-200",
  // Effects
  "shadow-lg rounded-2xl",
  // Transitions
  "transition-transform duration-200"
)}>
```

### Responsividade

```tsx
// Mobile-first
<div className="
  p-4 text-base          // Mobile
  md:p-6 md:text-lg      // Tablet
  lg:p-8 lg:text-xl      // Desktop
">
```

---

## Estado (Zustand)

### Estrutura de Store

```typescript
// stores/userStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  // State
  userId: string | null;
  stars: number;
  completedLessons: string[];

  // Actions
  setUser: (id: string) => void;
  addStars: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  reset: () => void;
}

const initialState = {
  userId: null,
  stars: 0,
  completedLessons: [],
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,

      setUser: (id) => set({ userId: id }),

      addStars: (amount) => set((state) => ({
        stars: state.stars + amount
      })),

      completeLesson: (lessonId) => set((state) => ({
        completedLessons: [...state.completedLessons, lessonId]
      })),

      reset: () => set(initialState),
    }),
    { name: 'hola-user' }
  )
);
```

### Uso

```typescript
// Selecionar estado específico (evita re-renders)
const stars = useUserStore((state) => state.stars);
const addStars = useUserStore((state) => state.addStars);

// Múltiplos valores
const { stars, completedLessons } = useUserStore((state) => ({
  stars: state.stars,
  completedLessons: state.completedLessons,
}));
```

---

## Async/Await

```typescript
// Sempre usar try/catch
async function fetchLesson(id: string): Promise<Lesson | null> {
  try {
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Failed to fetch lesson:', error);
    return null;
  }
}

// Loading states
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

async function loadData() {
  setStatus('loading');
  try {
    const data = await fetchData();
    setStatus('success');
  } catch {
    setStatus('error');
  }
}
```

---

## Testes

### Unitários

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Hooks

```typescript
// useAudio.test.ts
import { renderHook, act } from '@testing-library/react';
import { useAudio } from './useAudio';

describe('useAudio', () => {
  it('initializes with isPlaying false', () => {
    const { result } = renderHook(() => useAudio());
    expect(result.current.isPlaying).toBe(false);
  });
});
```

---

## Comentários

```typescript
// ✅ Comentar o "porquê", não o "o quê"
// Delay para permitir animação de saída completar
await new Promise(resolve => setTimeout(resolve, 300));

// ✅ TODO com contexto
// TODO(nmaldaner): Implementar cache de áudio após MVP

// ❌ Não comentar o óbvio
// Incrementa o contador
counter++;
```

---

## ESLint Config

```javascript
// .eslintrc.cjs
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_'
    }],
  },
};
```

## Prettier Config

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```
