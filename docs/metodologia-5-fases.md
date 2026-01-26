# Metodologia das 5 Fases
## Guia Prático para Criar um Projeto do Zero

Este documento serve como base para qualquer pessoa criar um projeto de software seguindo uma metodologia simples e direta.

---

## Visão Geral

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  FASE 1 │───►│  FASE 2 │───►│  FASE 3 │───►│  FASE 4 │───►│  FASE 5 │
│  IDEIA  │    │ PESQUISA│    │RELATÓRIO│    │VALIDAÇÃO│    │EXECUÇÃO │
└─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘
```

---

## FASE 1: IDEIA

**Objetivo:** Definir o que você quer construir.

### O que fazer:
1. Escreva em uma frase o que é o produto
2. Defina quem vai usar (usuário)
3. Defina quem vai pagar (comprador)
4. Liste 3 problemas que resolve

### Entregável:
```
Produto: [Nome] - [Uma frase explicando]
Usuário: [Quem usa]
Comprador: [Quem paga]
Problemas:
1. [Problema 1]
2. [Problema 2]
3. [Problema 3]
```

### Exemplo (Hola):
```
Produto: Hola - Plataforma de espanhol para crianças brasileiras
Usuário: Crianças de 6 a 12 anos
Comprador: Pais e escolas
Problemas:
1. Apps de idiomas não são feitos para crianças
2. Pais não conseguem ver o progresso
3. Aulas presenciais são caras
```

### Critério de Saída:
- [ ] Consigo explicar o produto em 30 segundos

---

## FASE 2: PESQUISA

**Objetivo:** Entender o mercado e validar a ideia.

### O que fazer:
1. Liste 5 concorrentes
2. Anote pontos fortes e fracos de cada um
3. Pesquise tamanho do mercado
4. Identifique o diferencial do seu produto

### Entregável:

| Concorrente | Pontos Fortes | Pontos Fracos |
|-------------|---------------|---------------|
| [Nome 1] | | |
| [Nome 2] | | |
| [Nome 3] | | |

**Meu diferencial:** [O que só eu faço]

### Perguntas para responder:
- Existe mercado para isso?
- Por que alguém compraria de mim e não do concorrente?
- Qual é o tamanho da oportunidade?

### Critério de Saída:
- [ ] Sei quem são meus concorrentes
- [ ] Tenho um diferencial claro

---

## FASE 3: RELATÓRIO E INSTRUÇÕES

**Objetivo:** Documentar tudo para começar a construir.

### O que fazer:
1. Escreva o relatório do projeto (visão completa)
2. Defina as funcionalidades do MVP
3. Crie as instruções técnicas (prompt/spec)
4. Liste o que NÃO fazer no início

### Entregável - Relatório:
```markdown
# RELATÓRIO DO PROJETO

## 1. Visão Geral
[O que é e para quem]

## 2. Problema
[O que resolve]

## 3. Solução
[Como resolve]

## 4. Público-Alvo
[Usuário e comprador]

## 5. Funcionalidades MVP
[Lista mínima para validar]

## 6. O que NÃO fazer agora
[Evitar scope creep]

## 7. Métricas de Sucesso
[Como saber se funcionou]
```

### Entregável - Instruções Técnicas:
```markdown
# INSTRUÇÕES PARA CONSTRUÇÃO

## Stack Tecnológico
[Tecnologias escolhidas]

## Estrutura do Projeto
[Pastas e arquivos]

## Funcionalidades Detalhadas
[Cada feature com critérios de aceite]

## Fluxos Principais
[Como o usuário navega]
```

### Critério de Saída:
- [ ] Relatório completo escrito
- [ ] Instruções técnicas prontas
- [ ] Qualquer desenvolvedor consegue entender o que construir

---

## FASE 4: VALIDAÇÃO

**Objetivo:** Criticar o projeto antes de construir.

### O que fazer:
1. Analise criticamente o relatório
2. Compare com concorrentes
3. Identifique riscos e lacunas
4. Valide com potenciais usuários (se possível)

### Checklist de Validação:

**Conceito:**
- [ ] O problema é real?
- [ ] A solução faz sentido?
- [ ] O diferencial é claro?

**Mercado:**
- [ ] Existe demanda?
- [ ] O timing é bom?
- [ ] Consigo competir?

**Técnico:**
- [ ] É viável construir?
- [ ] O MVP é realmente mínimo?
- [ ] Tenho as skills necessárias?

**Negócio:**
- [ ] Como vou ganhar dinheiro?
- [ ] Qual o preço?
- [ ] Como vou adquirir clientes?

### Entregável - Análise Crítica:

| Aspecto | Score (1-10) | Comentário |
|---------|--------------|------------|
| Problema real | | |
| Solução adequada | | |
| Timing de mercado | | |
| Viabilidade técnica | | |
| Viabilidade financeira | | |
| Competitividade | | |

**Score Geral:** X/10

**Recomendações:**
1. [Ajuste 1]
2. [Ajuste 2]
3. [Ajuste 3]

### Critério de Saída:
- [ ] Score geral > 6/10
- [ ] Riscos identificados e mitigados
- [ ] Confiança para começar a construir

---

## FASE 5: EXECUÇÃO

**Objetivo:** Construir e lançar o MVP.

### O que fazer:
1. Configure o ambiente de desenvolvimento
2. Construa feature por feature
3. Teste com usuários reais
4. Colete feedback e itere

### Estrutura de Execução:

```
Semana 1-2: Setup + Core
├── Ambiente configurado
├── Estrutura de pastas
└── Funcionalidade principal

Semana 3-4: Features + Polish
├── Demais funcionalidades
├── UI/UX refinado
└── Testes básicos

Semana 5-6: Teste + Lançamento
├── Testes com usuários
├── Ajustes finais
└── Lançamento MVP
```

### Checklist de Execução:

**Setup:**
- [ ] Repositório criado
- [ ] Ambiente configurado
- [ ] Estrutura inicial pronta

**Desenvolvimento:**
- [ ] Feature 1 funcionando
- [ ] Feature 2 funcionando
- [ ] Feature N funcionando

**Qualidade:**
- [ ] Funciona em mobile
- [ ] Não tem bugs críticos
- [ ] Performance aceitável

**Lançamento:**
- [ ] Deploy realizado
- [ ] Usuários podem acessar
- [ ] Métricas configuradas

### Critério de Saída:
- [ ] MVP funcionando
- [ ] Primeiros usuários testando
- [ ] Feedback coletado

---

## Resumo Visual

```
FASE 1: IDEIA          → "O que vou fazer?"
         │
         ▼
FASE 2: PESQUISA       → "Faz sentido fazer?"
         │
         ▼
FASE 3: RELATÓRIO      → "Como vou fazer?"
         │
         ▼
FASE 4: VALIDAÇÃO      → "Está bom o plano?"
         │
         ▼
FASE 5: EXECUÇÃO       → "Fazendo!"
```

---

## Dicas Importantes

### O que NÃO fazer:
- Pular fases
- Construir sem documentar
- Fazer tudo de uma vez
- Ignorar feedback
- Buscar perfeição no MVP

### O que SEMPRE fazer:
- Começar pequeno
- Documentar decisões
- Validar antes de construir
- Coletar feedback rápido
- Iterar constantemente

---

## Template Rápido

Para começar um projeto agora, copie e preencha:

```markdown
# [NOME DO PROJETO]

## FASE 1 - IDEIA
- Produto:
- Usuário:
- Comprador:
- Problema principal:

## FASE 2 - PESQUISA
- Concorrente 1:
- Concorrente 2:
- Meu diferencial:

## FASE 3 - RELATÓRIO
- MVP inclui:
  1.
  2.
  3.
- NÃO inclui:
  1.
  2.

## FASE 4 - VALIDAÇÃO
- Score: /10
- Principal risco:
- Mitigação:

## FASE 5 - EXECUÇÃO
- [ ] Semana 1:
- [ ] Semana 2:
- [ ] Semana 3:
- [ ] Lançamento:
```

---

**Lembre-se:** Um projeto mediano lançado é melhor que um projeto perfeito nunca terminado.

> *"Começar pequeno, ensinar bem, crescer com prova real."*
