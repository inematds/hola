# Requisitos Não-Funcionais

## Performance

### RNF001 - Tempo de Carregamento
- Primeira carga: < 3 segundos em 4G
- Navegação entre telas: < 500ms
- Carregamento de áudio: < 1 segundo

### RNF002 - Responsividade
- Funcionar em tablets (768px+)
- Funcionar em smartphones (360px+)
- Orientação: portrait e landscape
- Touch-friendly em todas as interações

### RNF003 - Offline (Futuro)
- Aulas já acessadas devem funcionar offline
- Sincronização automática ao reconectar
- Indicador visual de modo offline

---

## Segurança

### RNF004 - Proteção de Dados
- Compliance com LGPD
- Dados de crianças especialmente protegidos
- Criptografia em trânsito (HTTPS)
- Criptografia em repouso para dados sensíveis

### RNF005 - Ambiente Seguro
- Sem chat ou comunicação entre usuários
- Sem anúncios de terceiros
- Sem links externos
- Sem coleta de dados desnecessários

### RNF006 - Controle Parental
- PIN/senha para área de responsáveis
- Não expor informações de progresso sem autenticação
- Opção de limitar tempo de uso (futuro)

---

## Usabilidade

### RNF007 - Acessibilidade Infantil
- Contraste adequado para leitura
- Fontes grandes e legíveis (mínimo 16px)
- Áudio para todo conteúdo textual
- Feedback sonoro e visual combinados

### RNF008 - Simplicidade
- Máximo 2 cliques para iniciar aula
- Navegação intuitiva sem instrução
- Consistência visual em todas as telas
- Sem popups ou interrupções

### RNF009 - Feedback
- Toda ação deve ter feedback visual
- Sons para acertos e encorajamento
- Animações suaves (não distraem)
- Estados claros (loading, sucesso, erro)

---

## Confiabilidade

### RNF010 - Disponibilidade
- Uptime: 99.5% (MVP)
- Janela de manutenção: fora do horário pico (6h-22h)
- Monitoramento de erros em tempo real

### RNF011 - Recuperação
- Salvar progresso automaticamente
- Não perder progresso em caso de crash
- Retomar do ponto onde parou

---

## Escalabilidade

### RNF012 - Capacidade
- MVP: suportar 1.000 usuários simultâneos
- Arquitetura preparada para escalar horizontalmente
- CDN para assets estáticos

### RNF013 - Evolução
- Código modular para adicionar novos níveis
- Sistema de conteúdo extensível
- API preparada para app mobile futuro

---

## Compatibilidade

### RNF014 - Navegadores
- Chrome 90+ (prioritário)
- Safari 14+ (iOS)
- Firefox 90+
- Edge 90+

### RNF015 - Dispositivos
- Tablets Android 8+
- iPads iOS 14+
- Smartphones Android 8+ (tela 5"+)
- iPhones iOS 14+
- Desktop (secundário)

---

## Manutenibilidade

### RNF016 - Código
- TypeScript para type safety
- Componentes documentados
- Testes unitários (cobertura > 60%)
- Code review obrigatório

### RNF017 - Deploy
- CI/CD automatizado
- Ambientes: dev, staging, production
- Rollback em < 5 minutos
- Feature flags para releases graduais

---

## Métricas e Monitoramento

### RNF018 - Analytics
- Eventos de uso (aulas iniciadas, completadas)
- Tempo de sessão
- Taxa de conclusão por aula
- Erros e crashes

### RNF019 - Alertas
- Alerta se erro rate > 1%
- Alerta se latência > 3s
- Alerta se disponibilidade < 99%

---

## Matriz de Prioridade

| Categoria | Requisito | Prioridade MVP |
|-----------|-----------|----------------|
| Performance | Tempo de carregamento | P0 |
| Performance | Responsividade | P0 |
| Segurança | LGPD | P0 |
| Segurança | Ambiente seguro | P0 |
| Usabilidade | Simplicidade | P0 |
| Usabilidade | Feedback | P0 |
| Confiabilidade | Salvar progresso | P0 |
| Compatibilidade | Chrome + Safari | P0 |
| Performance | Offline | P2 |
| Segurança | Controle parental avançado | P2 |
