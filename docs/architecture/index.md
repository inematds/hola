# Arquitetura Técnica - Hola

**Versão:** 1.0
**Data:** Janeiro 2026
**Status:** Draft

## Índice

1. [Visão Geral](#visão-geral)
2. [Tech Stack](./tech-stack.md)
3. [Estrutura de Código](./source-tree.md)
4. [Padrões de Código](./coding-standards.md)
5. [Fluxos Principais](./flows.md)
6. [Modelo de Dados](./data-model.md)

## Visão Geral

### Princípios Arquiteturais

1. **Simplicidade primeiro** - MVP deve ser simples de desenvolver e manter
2. **Mobile-first** - Otimizado para tablets e smartphones
3. **Offline-ready** - Arquitetura preparada para funcionar offline (futuro)
4. **Escalável** - Estrutura que suporta crescimento sem reescrita
5. **Seguro** - Proteção de dados de crianças desde o design

### Diagrama de Alto Nível

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENTE                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   Tablet    │  │ Smartphone  │  │   Desktop   │             │
│  │  (Primary)  │  │ (Secondary) │  │  (Tertiary) │             │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘             │
│         │                │                │                     │
│         └────────────────┼────────────────┘                     │
│                          │                                      │
│                    ┌─────▼─────┐                                │
│                    │React SPA  │                                │
│                    │(Vite+TS)  │                                │
│                    └─────┬─────┘                                │
└──────────────────────────┼──────────────────────────────────────┘
                           │
                           │ HTTPS
                           │
┌──────────────────────────▼──────────────────────────────────────┐
│                        BACKEND                                   │
│                                                                  │
│  ┌─────────────────┐    ┌─────────────────┐                    │
│  │   API Gateway   │    │   Static CDN    │                    │
│  │   (Express)     │    │  (Cloudflare)   │                    │
│  └────────┬────────┘    └─────────────────┘                    │
│           │                                                     │
│  ┌────────▼────────┐    ┌─────────────────┐                    │
│  │   Application   │────│    PostgreSQL   │                    │
│  │    (Node.js)    │    │   (Supabase)    │                    │
│  └─────────────────┘    └─────────────────┘                    │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Decisões Arquiteturais

| Decisão | Escolha | Justificativa |
|---------|---------|---------------|
| Frontend | React + TypeScript | Ecossistema maduro, type safety, componentização |
| Bundler | Vite | Rápido, moderno, boa DX |
| Styling | Tailwind CSS | Produtividade, consistência, bundle pequeno |
| Animações | Framer Motion | API declarativa, performance |
| Áudio | Howler.js | Cross-browser, controle fino |
| Backend MVP | Supabase | BaaS rápido, PostgreSQL, auth incluso |
| Hospedagem | Vercel + Supabase | Free tier generoso, fácil deploy |

### Componentes Principais

```
┌────────────────────────────────────────────────────────────┐
│                      FRONTEND                               │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │    Pages     │  │  Components  │  │   Services   │    │
│  ├──────────────┤  ├──────────────┤  ├──────────────┤    │
│  │ Home         │  │ Character    │  │ Audio        │    │
│  │ Trail        │  │ LessonCard   │  │ Progress     │    │
│  │ Lesson       │  │ Quiz         │  │ Auth         │    │
│  │ Quiz         │  │ Rewards      │  │ Analytics    │    │
│  │ ParentPanel  │  │ ProgressBar  │  │ Content      │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │    Hooks     │  │    Store     │  │   Assets     │    │
│  ├──────────────┤  ├──────────────┤  ├──────────────┤    │
│  │ useAudio     │  │ userStore    │  │ images/      │    │
│  │ useProgress  │  │ lessonStore  │  │ audio/       │    │
│  │ useLesson    │  │ rewardStore  │  │ animations/  │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Fluxo de Dados

```
User Action → Component → Hook → Service → API → Database
                                    ↓
User ← Component ← State Update ← Response
```

### Segurança

- HTTPS em todas as comunicações
- JWT para autenticação
- Dados de crianças isolados
- Sem coleta de dados desnecessários
- LGPD compliance desde o design

### Performance

- Lazy loading de páginas
- Preload de áudios
- Imagens otimizadas (WebP)
- CDN para assets estáticos
- Service Worker para cache (futuro)

### Monitoramento

- Error tracking (Sentry)
- Analytics (Mixpanel/PostHog)
- Performance (Web Vitals)
- Uptime (Better Uptime)
