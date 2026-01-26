# Tech Stack

## Visão Geral

| Camada | Tecnologia | Versão |
|--------|------------|--------|
| Frontend | React | 18.x |
| Linguagem | TypeScript | 5.x |
| Bundler | Vite | 5.x |
| Styling | Tailwind CSS | 3.x |
| Animações | Framer Motion | 11.x |
| Áudio | Howler.js | 2.x |
| Estado | Zustand | 4.x |
| Roteamento | React Router | 6.x |
| Backend | Supabase | - |
| Database | PostgreSQL | 15.x |
| Hospedagem | Vercel | - |
| CDN | Cloudflare | - |

---

## Frontend

### React 18

**Por que React:**
- Ecossistema maduro e vasto
- Grande comunidade e suporte
- Component-based architecture
- Hooks API moderna
- Server Components (futuro)

**Configuração:**
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

### TypeScript 5

**Por que TypeScript:**
- Type safety previne bugs
- Melhor DX com autocomplete
- Documentação inline
- Refactoring seguro

**Configuração estrita:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

### Vite 5

**Por que Vite:**
- Dev server instantâneo
- HMR ultra-rápido
- Build otimizado
- Configuração simples
- Suporte nativo ESM

### Tailwind CSS 3

**Por que Tailwind:**
- Utility-first (produtividade)
- Bundle pequeno (purge)
- Design system consistente
- Responsividade fácil
- Dark mode pronto

**Configuração customizada:**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        hola: {
          orange: '#FF6B35',
          yellow: '#FFD93D',
          green: '#6BCB77',
          blue: '#4D96FF',
        }
      },
      fontFamily: {
        child: ['Nunito', 'sans-serif'],
      }
    }
  }
}
```

### Framer Motion 11

**Por que Framer Motion:**
- API declarativa simples
- Animações performáticas
- Gestos (drag, tap)
- Layout animations
- Exit animations

**Uso típico:**
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0 }}
  transition={{ type: "spring" }}
/>
```

### Howler.js 2

**Por que Howler:**
- Cross-browser confiável
- Sprite support (múltiplos sons)
- Volume e fade control
- Preload e cache
- Mobile-friendly

**Uso típico:**
```typescript
const sound = new Howl({
  src: ['/audio/perro.mp3'],
  preload: true,
  volume: 0.8,
});
sound.play();
```

### Zustand 4

**Por que Zustand:**
- Simples e minimalista
- Sem boilerplate
- DevTools support
- Persist middleware
- TypeScript nativo

**Uso típico:**
```typescript
const useUserStore = create<UserState>((set) => ({
  stars: 0,
  addStars: (n) => set((state) => ({ stars: state.stars + n })),
}));
```

---

## Backend (MVP)

### Supabase

**Por que Supabase:**
- PostgreSQL gerenciado
- Auth pronto (magic link, OAuth)
- Realtime subscriptions
- Storage para assets
- Free tier generoso
- SDK JavaScript

**Recursos utilizados:**
- Auth (magic link para acesso simples)
- Database (progresso, usuários)
- Storage (assets de conteúdo)

---

## Infraestrutura

### Vercel

**Por que Vercel:**
- Deploy automático (Git)
- Preview deployments
- Edge functions
- Analytics incluso
- Free tier adequado

### Cloudflare

**Por que Cloudflare:**
- CDN global
- Cache de assets
- DDoS protection
- Free tier generoso
- Images optimization

---

## Ferramentas de Desenvolvimento

| Ferramenta | Uso |
|------------|-----|
| ESLint | Linting |
| Prettier | Formatação |
| Husky | Git hooks |
| Vitest | Testes unitários |
| Playwright | Testes E2E |
| Storybook | Documentação de componentes |

---

## Dependências

### Produção

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^11.0.0",
    "howler": "^2.2.4",
    "zustand": "^4.4.0",
    "@supabase/supabase-js": "^2.39.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

### Desenvolvimento

```json
{
  "devDependencies": {
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0",
    "vitest": "^1.0.0",
    "@types/react": "^18.2.0",
    "@types/howler": "^2.2.0"
  }
}
```

---

## Alternativas Consideradas

| Decisão | Escolhido | Alternativa | Por que não |
|---------|-----------|-------------|-------------|
| Bundler | Vite | Webpack | Mais complexo, DX pior |
| Estado | Zustand | Redux | Overkill para MVP |
| Styling | Tailwind | Styled Components | Runtime overhead |
| Backend | Supabase | Firebase | PostgreSQL > Firestore |
| Animação | Framer | GSAP | API mais complexa |
| Áudio | Howler | Web Audio API | Mais baixo nível |
