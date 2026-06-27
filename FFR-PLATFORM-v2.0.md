# FFR Platform v2.1
**FFR Brasil Technology — Plataforma Reutilizável para Todos os Projetos**
*Versão 2.1 — Referência normativa interna*
*Atualizado em: 2026-06-27 — Incorporadas regras de Controle de Sessões, Checkpoints, PROJECT-STATE, CHANGELOG, Retomada Automática, Divisão de Fases, Documentação Viva, Recuperação, Pipeline Expandido, Sincronização, Melhoria Contínua e Regra de Ouro.*

---

## Sumário

1. [Identidade e Propósito](#1-identidade-e-propósito)
2. [Pipeline Oficial](#2-pipeline-oficial)
3. [Core Skills](#3-core-skills)
4. [Skills Públicas](#4-skills-públicas)
5. [Dispatcher — Roteamento](#5-dispatcher--roteamento)
6. [Sistema de Agentes](#6-sistema-de-agentes)
7. [Governança e Decisão](#7-governança-e-decisão)
8. [Padrões de UX/UI](#8-padrões-de-uxui)
9. [Padrões de Motion](#9-padrões-de-motion)
10. [Segurança](#10-segurança)
11. [Performance](#11-performance)
12. [SEO](#12-seo)
13. [Deploy](#13-deploy)
14. [Documentação](#14-documentação)
15. [Auditoria](#15-auditoria)
16. [Regra: Planejar Antes de Implementar](#16-regra-planejar-antes-de-implementar)
17. [Autonomia: Criar Agentes e Documentos](#17-autonomia-criar-agentes-e-documentos)
18. [Controle de Sessões](#18-controle-de-sessões)
19. [Checkpoints Obrigatórios](#19-checkpoints-obrigatórios)
20. [PROJECT-STATE.md — Arquivo de Estado](#20-project-statemd--arquivo-de-estado)
21. [CHANGELOG.md — Registro de Mudanças](#21-changelogmd--registro-de-mudanças)
22. [Retomada Automática](#22-retomada-automática)
23. [Divisão Automática de Fases](#23-divisão-automática-de-fases)
24. [Relatório Final de Fase](#24-relatório-final-de-fase)
25. [Documentação Viva](#25-documentação-viva)
26. [Recuperação de Desastre](#26-recuperação-de-desastre)
27. [Pipeline Oficial Expandido](#27-pipeline-oficial-expandido)
28. [Sincronização da Plataforma](#28-sincronização-da-plataforma)
29. [Melhoria Contínua](#29-melhoria-contínua)
30. [Regra de Ouro — Hierarquia de Prioridade](#30-regra-de-ouro--hierarquia-de-prioridade)

---

## 1. Identidade e Propósito

A FFR Brasil Technology entrega projetos digitais com identidade, consistência e propósito. A **FFR Platform v2.0** é o repositório normativo de padrões, skills, fluxos e decisões que governam todos os projetos — sites institucionais, landing pages, SaaS, dashboards, apps mobile e sistemas internos.

### Valores Operacionais

| Valor | Definição |
|-------|-----------|
| **Precisão** | Espaçamentos consistentes, hierarquia rigorosa, decisões fundamentadas |
| **Confiança** | Segurança de dados, rastreabilidade de código, entrega previsível |
| **Propósito** | Toda animação, componente e linha de código existe por uma razão |
| **Qualidade sem compromisso** | Lighthouse ≥ 90, RLS ativo, acessibilidade real, LGPD obedecida |

### O Que Esta Plataforma Governa

- Sequência de skills a invocar em cada tipo de projeto
- Padrões visuais, de motion, de tipografia e de espaçamento
- Requisitos de segurança antes de qualquer deploy
- Estrutura de agentes e coordenação de trabalho em paralelo
- Regras de governança e decisão para evitar retrabalo e deriva

---

## 2. Pipeline Oficial

O pipeline FFR é sequencial e não pode ser invertido. Cada etapa depende da anterior.

```
┌─────────────────────────────────────────────────────────────────┐
│                     PIPELINE FFR v2.0                           │
├────┬──────────────────────────┬──────────────────────────────────┤
│ #  │ Etapa                    │ Responsável (skill)              │
├────┼──────────────────────────┼──────────────────────────────────┤
│ 1  │ Roteamento               │ ffr-dispatcher                   │
│ 2  │ Especificação de produto │ gsd-spec-phase / ffr-saas        │
│ 3  │ UX / Arquitetura         │ ui-ux-pro-max                    │
│ 4  │ Design tokens / sistema  │ design-is                        │
│ 5  │ Identidade visual FFR    │ ffr-premium-ui                   │
│ 6  │ Motion (quando aplicável)│ ffr-cinematic                    │
│ 7  │ Planejamento de execução │ gsd-plan-phase / get-shit-done   │
│ 8  │ Implementação            │ gsd-execute-phase                │
│ 9  │ Auditoria de segurança   │ ffr-security / gsd-secure-phase  │
│ 10 │ Revisão de código        │ gsd-code-review / code-review    │
│ 11 │ Verificação de entrega   │ gsd-verify-work                  │
│ 12 │ Deploy                   │ ffr-security + provider          │
│ 13 │ Registro de contexto     │ ffr-project-intelligence         │
└────┴──────────────────────────┴──────────────────────────────────┘
```

### Pipelines por Tipo de Projeto

**Site Institucional / Landing Page:**
```
dispatcher → ffr-business → ui-ux-pro-max → ffr-premium-ui
→ ffr-security → get-shit-done → ffr-security (deploy)
```

**Landing Page Cinematic:**
```
dispatcher → ffr-business → ui-ux-pro-max → ffr-premium-ui
→ ffr-cinematic → ffr-security → get-shit-done → ffr-security (deploy)
```

**SaaS / Dashboard / Sistema Interno:**
```
dispatcher → gsd-spec-phase → ffr-saas → ui-ux-pro-max
→ ffr-premium-ui → ffr-security → gsd-plan-phase
→ gsd-execute-phase → gsd-secure-phase → gsd-code-review
→ gsd-verify-work → deploy
```

**App Mobile:**
```
dispatcher → gsd-spec-phase → ffr-saas → ui-ux-pro-max
→ ffr-premium-ui → ffr-security → gsd-plan-phase
→ gsd-execute-phase → gsd-secure-phase → gsd-verify-work → deploy
```

### Regra de Pipeline

Nenhuma skill de implementação (`get-shit-done`, `gsd-execute-phase`) é invocada antes de as etapas de UX e visual estarem concluídas. Nenhum deploy acontece sem `ffr-security` ter auditado formulários, webhooks, RLS, variáveis de ambiente e headers.

---

## 3. Core Skills

Skills internas FFR — desenvolvidas e mantidas pela FFR Brasil Technology.

| Skill | Propósito | Posição no Pipeline |
|-------|-----------|---------------------|
| `ffr-dispatcher` | Roteamento inicial; identifica tipo de projeto e recomenda skills | #1 |
| `ffr-business` | Sites institucionais, landing pages; estrutura de seções, copy, conversão | #2 (business) |
| `ffr-saas` | SaaS, dashboards, sistemas internos; arquitetura, banco, permissões | #2 (produto) |
| `ffr-premium-ui` | Identidade visual FFR; tokens, tipografia, paleta, componentes, microinterações | #5 |
| `ffr-cinematic` | Motion design avançado; WebGL, GSAP, Lenis, Three.js, scroll storytelling | #6 |
| `ffr-security` | Auditoria preventiva e pós-implementação; secrets, RLS, headers, LGPD | #9 e #12 |
| `ffr-project-intelligence` | Memória técnica de projetos; snapshots, decisões, banco, APIs, roadmap | #13 |

### Hierarquia de Core Skills

```
ffr-dispatcher
    ├── ffr-business       (sites, landing pages)
    ├── ffr-saas           (produtos digitais)
    │       └── ffr-security (sempre obrigatória após ffr-saas)
    ├── ffr-premium-ui     (visual — após UX)
    │       └── ffr-cinematic (motion — após ffr-premium-ui)
    └── ffr-project-intelligence (registro contínuo)
```

---

## 4. Skills Públicas

Skills de terceiros integradas ao fluxo FFR. As core skills FFR **nunca substituem** estas — apenas as orquestram.

| Skill Pública | Papel no Fluxo FFR |
|---------------|---------------------|
| `ui-ux-pro-max` | UX research, wireframes, arquitetura de informação — sempre antes do visual |
| `design-is` | Tokens de design, coerência de sistema — sempre antes de ffr-premium-ui |
| `get-shit-done` / `gsd-*` | Planejamento e execução de tarefas — após aprovação do plano |
| `gsd-spec-phase` | Especificação de produto e arquitetura — antes de ffr-saas |
| `gsd-plan-phase` | Planejamento executável — antes de qualquer implementação |
| `gsd-execute-phase` | Execução do plano aprovado — com commits atômicos |
| `gsd-secure-phase` | Revisão formal de segurança pré-deploy — após implementação |
| `gsd-code-review` / `code-review` | Revisão de qualidade de código — antes de deploy |
| `gsd-verify-work` | Verificação de entrega — goal-backward, não apenas tasks |
| `claude-mem` | Memória persistente entre sessões — alimentada por ffr-project-intelligence |
| `systematic-debugging` | Debugging por método científico — ao encontrar qualquer bug |
| `n8n-mcp` | Automação com n8n — quando há workflows e integrações externas |
| `smart-explore` / `learn-codebase` | Exploração de codebase antes de implementar |

### Regra de Uso de Skills Públicas

Toda skill pública deve ser invocada via ferramenta `Skill` **antes de qualquer ação relacionada**, mesmo que o contexto pareça simples. A 1% de chance de relevância já justifica a invocação.

---

## 5. Dispatcher — Roteamento

O `ffr-dispatcher` é o ponto de entrada obrigatório para todo novo projeto FFR.

### Categorias de Projeto Reconhecidas

| Categoria | Características | Skills Ativadas |
|-----------|-----------------|-----------------|
| Site Institucional | Múltiplas páginas, SEO, credibilidade | ffr-business → ui-ux-pro-max → ffr-premium-ui |
| Landing Page | Conversão focada, página única | ffr-business → ui-ux-pro-max → ffr-premium-ui |
| Landing Cinematic | Experiência visual imersiva, motion central | ffr-business → ffr-premium-ui → ffr-cinematic |
| SaaS B2B | Multi-tenant, auth, roles, dashboard | gsd-spec-phase → ffr-saas → ffr-security |
| Dashboard | Visualização de dados, uso intensivo | ffr-saas → ui-ux-pro-max → ffr-premium-ui |
| App Mobile | iOS/Android, gestures, offline-first | gsd-spec-phase → ffr-saas → ffr-security |
| Automação | Workflows, job scheduling, integrações | n8n-mcp → ffr-security |
| Sistema Interno | Sem multi-tenant, uma empresa | ffr-saas → ffr-security |

### Fluxo de Roteamento

```
Novo projeto recebido
    ↓
ffr-dispatcher identifica tipo
    ↓
Recomenda pipeline completo
    ↓
Skills são invocadas em sequência
    ↓
Nenhuma etapa é pulada sem justificativa documentada
```

O dispatcher **nunca** toma decisões de UX, visual, segurança ou implementação. Ele apenas roteia.

---

## 6. Sistema de Agentes

### Topologia Padrão FFR

A FFR adota topologia **hierarchical-mesh**: um agente coordenador orquestra agentes especializados que se comunicam diretamente entre si via `SendMessage`.

```
Coordenador (Lead)
    ├── researcher    → coleta contexto do codebase
    ├── architect     → define solução técnica
    ├── coder         → implementa
    ├── tester        → verifica
    └── reviewer      → qualidade e segurança
```

### Regras de Coordenação

- Todos os agentes nomeados com `name:` — obrigatório para endereçamento via `SendMessage`
- Todos os agentes de pipeline lançados **em uma única mensagem** com `run_in_background: true`
- Após lançar agentes: parar, informar o usuário, aguardar resultados
- Nunca pesquisar status — agentes retornam ou enviam mensagem ao concluir
- Agentes se comunicam diretamente: cada prompt instrui **quem contactar** ao terminar

### Padrões de Pipeline de Agentes

| Padrão | Fluxo | Quando Usar |
|--------|-------|-------------|
| Pipeline | A → B → C → D | Dependências sequenciais (desenvolvimento de feature) |
| Fan-out | Lead → A, B, C → Lead | Pesquisa paralela independente |
| Supervisor | Lead ↔ workers | Coordenação contínua (refactor complexo) |

### Tipos de Agentes FFR

**Core:** `coder`, `reviewer`, `tester`, `planner`, `researcher`

**Arquitetura:** `system-architect`, `backend-dev`, `mobile-dev`

**Segurança:** `security-architect`, `security-auditor`

**Performance:** `performance-engineer`, `perf-analyzer`

**Coordenação:** `hierarchical-coordinator`, `mesh-coordinator`, `adaptive-coordinator`

**GitHub:** `pr-manager`, `code-review-swarm`, `issue-tracker`, `release-manager`

### Limites

- Máximo de 15 agentes simultâneos por sessão
- Agentes de segurança (`security-architect`, `security-auditor`) são obrigatórios em projetos com auth, pagamentos ou dados pessoais
- Agentes nunca tomam decisões de deploy sem confirmação do coordenador

---

## 7. Governança e Decisão

### Hierarquia de Decisão

```
1. Instruções explícitas do cliente / usuário    (máxima prioridade)
2. Skills FFR (core e públicas)                  (override de comportamento padrão)
3. Padrões desta plataforma (FFR-PLATFORM-v2.0)  (referência normativa)
4. Comportamento padrão do modelo               (mínima prioridade)
```

### Regras de Governança

**Antes de implementar:**
- Nenhuma linha de código antes de plano aprovado
- Nenhum plano antes de especificação de UX
- Nenhuma UX antes do tipo de projeto ser roteado pelo dispatcher

**Durante a implementação:**
- Commits atômicos por responsabilidade (uma mudança por commit)
- Nenhum segredo em código ou git
- Testes rodados após cada mudança de código
- Build verificado antes de qualquer commit

**Antes de deploy:**
- `ffr-security` obrigatório para qualquer projeto com formulário, auth, pagamento ou dado pessoal
- `gsd-secure-phase` formal para SaaS e sistemas com dados de usuário
- `gsd-code-review` ou `code-review` revisando diff antes de produção
- `gsd-verify-work` confirmando que o objetivo foi atingido (não apenas que as tasks foram completadas)

**Ações que exigem confirmação do usuário:**
- Deletar arquivos ou branches
- Force push ou reset destructivo
- Modificar pipelines de CI/CD
- Criar PRs ou issues públicas
- Fazer deploy em produção
- Modificar variáveis de ambiente de produção

### Princípio de Não Surpresa

Todo agente, skill e decisão deve produzir resultado previsível e documentado. Desvios do pipeline precisam de justificativa explícita registrada via `ffr-project-intelligence`.

---

## 8. Padrões de UX/UI

### Hierarquia de Responsabilidade Visual

```
ui-ux-pro-max     → UX research, fluxos, arquitetura de informação, wireframes
design-is         → Tokens, design system, coerência
ffr-premium-ui    → Identidade visual FFR, componentes, microinterações
ffr-cinematic     → Motion avançado, WebGL, scroll storytelling
```

Nenhuma etapa posterior pode começar sem a anterior estar concluída.

### Personalidade Visual FFR

A marca FFR Brasil Technology comunica **tecnologia com propósito humano**:

- **Precisão** — grid disciplinado, espaçamentos por escala, alinhamentos rigorosos
- **Confiança** — hierarquia clara, contraste alto, tipografia legível
- **Movimento com propósito** — animação que explica, guia, valoriza ou vende
- **Modernidade atemporal** — sem trends passageiros; prefira funcional e limpo

### Sistema de Tokens (Estrutura)

Toda decisão visual nasce em um token. Nunca valores hardcoded.

**Camadas de token:**
- Escala primitiva (números brutos: cores numéricas, espaços em rem)
- Tokens semânticos (significado: `--ffr-bg-base`, `--ffr-text-primary`)
- Tokens de componente (contexto: `--button-primary-bg`)

**Categorias obrigatórias:**
- Cores: brand scale + neutros + feedback (success, warning, error, info)
- Tipografia: display, body, mono + escala de tamanhos
- Espaçamento: escala base 4px
- Bordas: radius, width
- Sombras: elevação por nível
- Motion: durations + easings
- Breakpoints: 5 pontos (480 / 768 / 1024 / 1280 / 1440)

### Tipografia FFR

| Família | Uso | Peso Usado |
|---------|-----|-----------|
| Display (Cal Sans / Bricolage) | Headings premium | 700 |
| Body (Inter / DM Sans) | Corpo e UI | 400 / 500 / 600 |
| Mono (Geist Mono / JetBrains) | Código | 400 |

**Regras tipográficas:**
- Máximo 65–75 caracteres por linha
- Heading: `line-height: 1.1`, `letter-spacing: -0.02em`
- Body: `line-height: 1.6`, `letter-spacing: 0`
- Font mínima no mobile: 16px (evita zoom automático do Safari)

### Estrutura de Componentes

Toda interface FFR precisa de estados mapeados explicitamente:

| Estado | Obrigações |
|--------|-----------|
| Loading | Skeleton screen (não spinner vazio); forma do conteúdo que virá |
| Empty | Ícone + título + descrição + CTA; nunca apenas "sem resultados" |
| Error | Mensagem genérica ao usuário; ação de recuperação; sem stack trace |
| Success | Confirmação imediata (toast 3–4s); modal para ações críticas |
| Disabled | Botão com tooltip explicando o motivo |

### Acessibilidade

Não é checklist — é qualidade fundamental:

- Contraste mínimo 4.5:1 para texto (7:1 como alvo AAA)
- Focus ring visível em todos os elementos interativos (`outline: 2px solid var(--ffr-brand-500)`)
- Semântica HTML correta: `<button>` para ações, `<a>` para links
- ARIA apenas quando HTML semântico não basta
- Keyboard navigation completa
- `prefers-reduced-motion` sempre implementado
- Touch targets ≥ 48×48px

### Mobile-First

CSS escrito do menor breakpoint para o maior. Testado em 320px (mínimo) e 375px (iPhone SE). Scroll horizontal nunca presente. Todos os links de contato clicáveis em mobile (`tel:`, `mailto:`, `wa.me`).

---

## 9. Padrões de Motion

### Filosofia de Animação FFR

Toda animação deve cumprir pelo menos uma das funções:

| Função | Descrição |
|--------|-----------|
| Explicar | Ajuda o visitante a entender o produto ou fluxo |
| Guiar | Direciona o olhar e o fluxo de leitura |
| Valorizar | Reforça percepção de qualidade e premium |
| Vender | Aumenta conversão, reduz fricção, gera desejo |

Animação sem propósito é custo de performance sem retorno. Remova.

### Biblioteca por Situação

| Situação | Biblioteca |
|----------|-----------|
| Hover, fade, transição de estado | CSS |
| Componente React: mount/exit, layout, gestures | Framer Motion |
| Timeline, ScrollTrigger, SVG, storytelling | GSAP |
| Smooth scroll em sites com seções | Lenis |
| 3D, WebGL, shaders, partículas interativas | Three.js / R3F |
| Site cinematic completo | Lenis + GSAP + Three.js |

Nunca usar GSAP e Framer Motion para a mesma animação.

### Durações de Referência

| Token | Valor | Uso |
|-------|-------|-----|
| `--ffr-duration-fast` | 100ms | Hover, micro feedback |
| `--ffr-duration-normal` | 200ms | Transições de estado |
| `--ffr-duration-medium` | 300ms | Modais, drawers |
| `--ffr-duration-slow` | 500ms | Page transitions |
| `--ffr-duration-loading` | 800ms | Skeleton pulse |

### Propriedades Seguras para Animar

**Usar sempre:** `transform`, `opacity`, `filter`, `clip-path`

**Nunca animar:** `width`, `height`, `top`, `left`, `margin`, `padding` (causam reflow)

### Responsividade de Motion

| Breakpoint | Comportamento |
|-----------|---------------|
| Desktop (> 1024px) | Experiência completa: WebGL, parallax, mouse interaction |
| Tablet (768–1024px) | Reduzir: desativar mouse parallax; manter scroll animations |
| Mobile (< 768px) | Fallback: WebGL → imagem estática; vídeo → poster; parallax → fixo |
| `prefers-reduced-motion` | Todas animações desabilitadas ou reduzidas a fade simples |

---

## 10. Segurança

### Regras Absolutas (sem exceção)

1. Nenhum segredo no frontend — API keys, service roles e tokens privados nunca chegam ao client
2. Nenhum token hardcoded — todo segredo vive em variáveis de ambiente
3. Nenhum `.env` no git — sempre no `.gitignore`; verificado antes de qualquer commit
4. Nenhum input sem validação — toda entrada é validada e sanitizada no servidor
5. Nenhum stack trace exposto — mensagens de erro ao usuário são genéricas
6. Nenhum bucket público sem necessidade documentada — storage privado por padrão

### Obrigações por Categoria

**Autenticação:**
- Email confirmation ativo em produção
- Rate limiting de auth ativo
- JWT expiry configurado (1h access token, 7d refresh token)
- `auth.users` nunca consultado diretamente no frontend

**Banco de Dados (Supabase):**
- RLS ativo em todas as tabelas com dados de usuário
- Toda policy testada com usuário autenticado E anônimo
- `service_role` nunca usado em queries do frontend
- Políticas de INSERT, UPDATE e DELETE definidas (não apenas SELECT)
- Isolation de tenant verificada (tenant A não acessa dados do tenant B)

**Frontend:**
- `dangerouslySetInnerHTML` banido ou auditado linha a linha
- Conteúdo de usuário sempre escapado antes de renderizar
- JWT nunca em `localStorage` (usar httpOnly cookies)
- Cookies: `httpOnly`, `Secure`, `SameSite=Lax` mínimo

**Backend / API:**
- Todo endpoint verifica autenticação antes de qualquer lógica
- Rate limiting em todas as rotas públicas
- CORS com lista explícita (nunca `*` em produção)
- Schema validation em todos os endpoints (Zod ou similar)
- SQL via ORM ou prepared statements; nunca concatenação

**Headers de Segurança Obrigatórios:**

| Header | Valor mínimo |
|--------|-------------|
| `Content-Security-Policy` | `default-src 'self'` sem `unsafe-inline` em script-src |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` ou domínios explícitos |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |

**LGPD:**
- Consentimento explícito antes de coletar dados pessoais
- Política de privacidade linkada no ponto de coleta
- Mecanismo de exclusão de conta implementado (direito ao esquecimento)
- Terceiros que recebem dados documentados

### Posição no Pipeline

`ffr-security` é invocada duas vezes: preventivamente (antes de implementar) e como auditora (antes do deploy). `gsd-secure-phase` é a revisão formal para SaaS e sistemas com dados críticos.

---

## 11. Performance

### Metas de Core Web Vitals

| Métrica | Meta | Crítico |
|---------|------|---------|
| LCP | < 2.5s | < 4s |
| INP | < 100ms | < 300ms |
| CLS | 0 | < 0.1 |
| Bundle JS | < 100KB gzip | < 200KB |
| Lighthouse mobile | ≥ 90 | ≥ 80 |

Para sites cinematic com WebGL: Lighthouse mobile ≥ 75 e FPS ≥ 30fps em mobile.

### Regras de Imagens

- Formato WebP obrigatório
- Hero image ≤ 300 KB; demais imagens ≤ 150 KB
- `loading="lazy"` em imagens abaixo da dobra
- `fetchpriority="high"` na imagem do hero (LCP)
- Vídeos de fundo: `autoplay muted loop playsinline`; poster obrigatório; < 5MB
- `alt` descritivo em imagens de conteúdo; `alt=""` em imagens decorativas

### Regras de Fontes

- `font-display: swap` obrigatório
- Subset Latin quando possível
- `preconnect` para Google Fonts antes de carregar
- Fonte carregada antes de qualquer animação de texto

### Regras de JavaScript

- Code splitting com `React.lazy()` + `Suspense` para componentes pesados
- Three.js em chunk separado; carregar apenas quando visível via `IntersectionObserver`
- `SELECT` explícito no banco (nunca `SELECT *`)
- Paginação em todas as listagens
- TanStack Query com `staleTime` configurado (evitar refetch desnecessário)

---

## 12. SEO

### Obrigações por Elemento

| Elemento | Regra |
|----------|-------|
| `<title>` | `[Palavra-chave] — [Empresa] — [Cidade]` (local); ≤ 60 chars; único por página |
| Meta description | Benefício + CTA implícito; ≤ 155 chars; única por página |
| `<h1>` | Um por página; contém a palavra-chave principal |
| `<h2>`–`<h6>` | Hierarquia lógica; nunca pular níveis |
| `og:image` | 1200×630px; legível em miniatura; sem texto cortado nas bordas |
| Schema.org | `Organization` mínimo; `LocalBusiness` para negócios locais; `FAQPage` quando há FAQ |
| Sitemap | `/sitemap.xml` gerado automaticamente |
| `robots.txt` | Sem bloquear assets; bloquear `/api/` quando necessário |
| URLs | Slugs descritivos em português; sem `?id=`, sem underscores |

### SEO e Performance são Inseparáveis

Core Web Vitals (LCP, INP, CLS) impactam ranking. A otimização de performance é SEO.

### Conteúdo em HTML

Conteúdo indexável nunca vive apenas em canvas, WebGL ou JavaScript. Sempre presente em HTML para que crawlers o encontrem.

---

## 13. Deploy

### Checklist de Pré-Deploy (obrigatório)

**Segurança:**
- [ ] `ffr-security` revisou formulários, webhooks, RLS, env e scripts externos
- [ ] Consentimento de cookies antes de analytics (LGPD)
- [ ] Scripts de terceiros carregam após consentimento
- [ ] Headers de segurança verificados
- [ ] Nenhum segredo no código ou no git

**Banco (quando aplicável):**
- [ ] Migrations rodadas antes do deploy de código
- [ ] Rollback de migration documentado
- [ ] Health check de banco pós-deploy

**Build:**
- [ ] `npm run build` sem erros
- [ ] TypeScript sem erros de tipo
- [ ] `npm test` ou equivalente passou
- [ ] Lighthouse rodado no ambiente de staging (não apenas local)

**Infraestrutura:**
- [ ] HTTPS configurado e ativo
- [ ] Redirect `www` ↔ raiz configurado (apenas um canônico)
- [ ] Página 404 personalizada
- [ ] Variáveis de ambiente configuradas no provider (nunca no código)
- [ ] Domínio apontando para o ambiente correto

### Processo Padrão

```
staging → testes → aprovação → produção (manual)
```

Deploy em produção sempre manual e com confirmação explícita do lead. Auto-deploy permitido apenas em staging/develop.

### Pós-Deploy

- [ ] Smoke test das rotas críticas
- [ ] Verificar logs de erro nas primeiras horas
- [ ] Lighthouse em produção para confirmar performance
- [ ] `ffr-project-intelligence` atualizado com estado do deploy

---

## 14. Documentação

### O Que Documentar

| Documento | Quando Criar | Formato |
|-----------|-------------|---------|
| Project Snapshot | Início + após mudanças grandes | ffr-project-intelligence |
| Architecture Snapshot | Após definição de stack | ffr-project-intelligence |
| Business Rules | Ao mapear regras com cliente | ffr-project-intelligence |
| Database Summary | Após schema estável | ffr-project-intelligence |
| API Summary | Após endpoints definidos | ffr-project-intelligence |
| Deployment Summary | Antes do primeiro deploy | ffr-project-intelligence |
| Roadmap | Ao planejar fases | ffr-project-intelligence |
| Known Issues | Ao aceitar limitação | ffr-project-intelligence |
| Pending Work | Continuamente | ffr-project-intelligence |

### O Que Nunca Documentar

- Padrões já deriváveis lendo o código
- História de git (usar `git log` / `git blame`)
- Detalhes de implementação que mudam frequentemente
- Tarefas temporárias da sessão atual (usar tasks, não memória)

### Regras de Documentação

- Um comentário por bloco de código: apenas o **porquê**, nunca o **o quê**
- Nenhum comentário que explique o que o nome já diz
- Nenhuma documentação criada sem solicitação explícita do usuário
- Documentação técnica vive em `ffr-project-intelligence` + `claude-mem` (persistência entre sessões)

---

## 15. Auditoria

### Tipos de Auditoria FFR

| Tipo | Skill | Quando |
|------|-------|--------|
| Auditoria de segurança | `ffr-security` | Antes de qualquer deploy com dados sensíveis |
| Revisão formal de segurança | `gsd-secure-phase` | Pré-deploy em SaaS e sistemas críticos |
| Revisão de código | `gsd-code-review` / `code-review` | Antes de merges e deploys |
| Auditoria de UI | `gsd-ui-review` | Após implementação de interface |
| Verificação de entrega | `gsd-verify-work` | Verificação goal-backward de phase |
| Auditoria de milestone | `gsd-audit-milestone` | Ao concluir uma fase do roadmap |

### Relatório de Risco (Template)

Ao concluir auditoria de segurança, gerar relatório com:

```
## Auditoria FFR — [Projeto] — [Data]

### Crítico (bloqueia deploy)
### Alto (resolver antes da próxima sprint)
### Médio (resolver no próximo ciclo)
### Baixo / Informativo
### Itens Aprovados
### Próximos Passos
```

**Regra de bloqueio:** se houver qualquer item CRÍTICO no relatório, o projeto não vai para produção.

### Auditoria Contínua

Após mudanças de:
- Segurança → worker `audit`
- Performance → worker `optimize`
- Novas features → worker `testgaps`
- 5+ arquivos alterados → worker `map`
- Mudanças em API pública → worker `document`

---

## 16. Regra: Planejar Antes de Implementar

Esta é a regra de maior impacto na qualidade dos projetos FFR. Sem exceções.

### O Princípio

```
Nenhuma linha de código é escrita antes de um plano aprovado.
Nenhum plano é criado antes de a especificação ser aprovada.
Nenhuma especificação começa antes do roteamento pelo dispatcher.
```

### Sequência Obrigatória

```
1. ffr-dispatcher identifica o tipo de projeto
2. UX e wireframes aprovados (ui-ux-pro-max)
3. Design system e visual aprovados (ffr-premium-ui)
4. Plano de execução aprovado (gsd-plan-phase)
5. Implementação começa (gsd-execute-phase)
```

Qualquer etapa pulada é retorno garantido ao ponto anterior.

### Sinais de Red Flag

Se qualquer um destes pensamentos ocorrer antes do plano estar aprovado, parar:

- "Isso é simples, posso começar logo"
- "O UX parece óbvio, não preciso de wireframe"
- "Já sei como vai ficar o visual"
- "Posso planejar e implementar ao mesmo tempo"
- "É só um ajuste pequeno"

### Exceções Permitidas

- Correção de bug crítico em produção (documentar a decisão)
- Mudança de texto/copy sem impacto de lógica
- Correção de typo em CSS ou configuração

Qualquer exceção deve ser registrada em `ffr-project-intelligence` com justificativa.

---

## 17. Autonomia: Criar Agentes e Documentos

A plataforma FFR v2.0 concede autonomia total para criar agentes e documentos de projeto **sem solicitar permissão** nos seguintes casos.

### Autonomia para Criar Agentes

Criar agentes sem confirmação quando:

| Situação | Tipo de Agente Criado |
|----------|----------------------|
| Tarefa com 3+ arquivos afetados | researcher + coder + reviewer |
| Nova feature com impacto em múltiplos módulos | architect + coder + tester |
| Refactor cross-module | architect + coder + reviewer |
| Mudança em auth, payments ou dados pessoais | security-architect + security-auditor + coder |
| Performance após mudança de queries | perf-analyzer + coder |
| PRs com mudanças sensíveis | code-review-swarm |

Pedir confirmação antes de criar agentes quando:
- A tarefa é uma edição de 1–2 linhas
- A tarefa é uma mudança de configuração simples
- O usuário não deu sinal de urgência ou complexidade

### Autonomia para Criar Documentos

Criar documentos sem confirmação quando o `ffr-project-intelligence` definiu que o template é necessário:

- **Project Snapshot** → ao iniciar um projeto ou retomar após intervalo
- **Architecture Snapshot** → após definição de stack ou mudança arquitetural
- **Business Rules** → ao identificar regras de negócio no projeto
- **Pending Work** → ao detectar trabalho não rastreado
- **Known Issues** → ao aceitar uma limitação técnica
- **Deployment Summary** → antes do primeiro deploy de qualquer ambiente

Documentos são salvos via `claude-mem` para persistência entre sessões.

### Autonomia Negada

Nunca agir sem confirmação para:

- Deploy em produção
- Deleção de arquivos, branches ou dados
- Modificação de variáveis de ambiente de produção
- Criação de PRs públicas ou issues
- Push em branch principal
- Modificação de CI/CD pipelines
- Ações que afetam dados de usuários reais

### Regra de Comunicação

Ao agir com autonomia, sempre comunicar ao usuário:

```
"Criando agente [nome] para [propósito]. Você será notificado ao concluir."
"Criando documento [tipo] via ffr-project-intelligence para registrar [contexto]."
```

Nada acontece em silêncio.

---

---

## 18. Controle de Sessões

Sessões do Claude Code possuem limite de contexto e de tokens. A Plataforma FFR é projetada para trabalhar naturalmente com múltiplas sessões.

### Princípio Fundamental

```
Nenhuma fase deve ser planejada para consumir uma única sessão inteira.
Toda fase deve ser autocontida e terminar em um checkpoint estável.
```

### Regras

- **Nunca** planejar uma fase que dependa de continuidade de sessão
- **Sempre** dividir fases grandes em subfases menores antes de iniciar
- **Sempre** terminar a sessão em um estado que permita retomada sem perda
- **Nunca** continuar automaticamente para a próxima fase — aguardar aprovação

### Estrutura de Subfases

```
Fase 0A — Documentação
    ↓ Checkpoint
Fase 0B — Fundação Técnica
    ↓ Checkpoint
Fase 0C — Validação
    ↓ Checkpoint
Fase 1A — Design System
    ↓ Checkpoint
Fase 1B — Componente X
    ↓ Checkpoint
...
```

### Regra de Estimativa

Antes de iniciar qualquer fase, estimar se ela pode ser concluída na sessão atual. Se houver dúvida, dividir preventivamente. É preferível criar um checkpoint cedo a ser interrompido no meio de uma implementação.

---

## 19. Checkpoints Obrigatórios

Todo checkpoint FFR é um estado estável e verificado do projeto.

### Validações Obrigatórias em Todo Checkpoint

```bash
npm run typecheck   # zero erros TypeScript
npm run lint        # zero erros ESLint / zero warnings críticos
npm run build       # build limpo sem erros
```

Para projetos com banco de dados:
```bash
supabase db push --dry-run   # migrations sem conflito
```

### Conteúdo do Checkpoint

Ao atingir um checkpoint, produzir obrigatoriamente:

1. **Validações técnicas** — resultados de build, lint, typecheck
2. **Lista de arquivos criados** — caminho completo de cada arquivo
3. **Lista de arquivos modificados** — com descrição da mudança
4. **Tarefas concluídas** — marcadas com ✅
5. **Tarefas pendentes** — marcadas com ⏳ e motivo
6. **Riscos conhecidos** — identificados durante a fase
7. **Próximos passos recomendados** — próxima subfase sugerida

### Regra de Parada

**Após o checkpoint: parar. Aguardar aprovação explícita do usuário antes de continuar.**

Não existe "continuar automaticamente". Cada fase precisa de um "sim" explícito.

---

## 20. PROJECT-STATE.md — Arquivo de Estado

Todo projeto FFR deve ter um arquivo `PROJECT-STATE.md` na raiz. Este é o principal mecanismo de continuidade entre sessões.

### Quando Atualizar

- Ao finalizar qualquer fase ou subfase
- Ao atingir qualquer checkpoint
- Ao tomar decisões arquiteturais significativas
- Ao resolver bugs que afetam a arquitetura

### Estrutura Mínima

```markdown
# PROJECT-STATE — [Nome do Projeto]

## Estado Atual
- **Fase:** [ex: Fase 1B — Header]
- **Subfase:** [ex: 1B.2 — NavMobile]
- **Checkpoint:** [ex: CP-003 — Fundação Completa]
- **Status:** [Em progresso / Aguardando aprovação / Concluído]
- **Última atualização:** [data e hora]

## Validações do Último Checkpoint
- [ ] Build: [✅ OK / ❌ Falhou]
- [ ] TypeScript: [✅ OK / ❌ Erros]
- [ ] Lint: [✅ OK / ❌ Erros]

## Arquivos Criados (cumulativo)
| Arquivo | Fase | Status |
|---------|------|--------|
| src/... | 0 | ✅ |

## Arquivos Modificados (desde último checkpoint)
| Arquivo | Mudança |
|---------|---------|
| src/... | [o que mudou] |

## Tarefas Concluídas
- [x] [tarefa] — Fase [N]

## Tarefas Pendentes
- [ ] [tarefa] — Fase [N] — [motivo / dependência]

## Riscos Conhecidos
| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| [risco] | Alto/Médio/Baixo | [como mitigar] |

## Decisões Arquiteturais
| Decisão | Alternativa Descartada | Motivo |
|---------|----------------------|--------|
| [decisão] | [alternativa] | [motivo] |

## Próximos Passos
1. [próxima subfase]
2. [dependência]
3. [estimativa de sessões necessárias]
```

### Regra de Prioridade

Em caso de divergência entre arquivos do projeto e `PROJECT-STATE.md`, o checkpoint mais recente registrado em `PROJECT-STATE.md` é a fonte oficial.

---

## 21. CHANGELOG.md — Registro de Mudanças

Todo projeto FFR deve ter um `CHANGELOG.md` na raiz. Registra todas as mudanças significativas do projeto de forma cronológica.

### Quando Registrar

- Ao concluir qualquer fase ou subfase
- Ao adicionar ou remover dependências
- Ao tomar decisões arquiteturais
- Ao corrigir bugs de impacto médio ou alto
- Ao atualizar documentos da plataforma

### Estrutura

```markdown
# CHANGELOG — [Nome do Projeto]

Formato: [vX.Y.Z] — Data — Resumo

## [Não Lançado]
### Adicionado
### Alterado
### Removido

## [0.1.0] — YYYY-MM-DD — Fase 0: Fundação
### Adicionado
- Estrutura Next.js 15 com App Router
- Design System: tokens.css com tokens --vm-*
- ...

### Dependências Instaladas
- next@^15.3.0
- gsap@^3.12.5
- ...

### Arquivos Criados
- src/styles/tokens.css
- ...

### Arquivos Modificados
- .prettierrc (removido tailwindConfig inexistente)
- ...
```

### Semver FFR para Projetos de Site

| Versão | Quando usar |
|--------|-------------|
| `0.1.0` | Fundação concluída (Fase 0) |
| `0.2.0` | Layout base concluído |
| `0.x.0` | Cada conjunto de seções |
| `1.0.0` | Deploy em produção |
| `1.x.0` | Novas features pós-deploy |

---

## 22. Retomada Automática

Quando uma nova sessão iniciar em um projeto FFR existente, seguir obrigatoriamente esta sequência antes de qualquer ação.

### Sequência de Retomada

```
1. Ler FFR-PLATFORM-v2.1.md        → padrões e pipeline
2. Ler [PROJETO]-MASTER-BRIEF.md   → contexto de negócio
3. Ler [PROJETO]-MASTER-BLUEPRINT.md → arquitetura técnica
4. Ler PROJECT-STATE.md            → estado atual e checkpoint
5. Ler CHANGELOG.md                → histórico de mudanças
6. Verificar arquivos existentes   → glob na pasta src/
7. Identificar último checkpoint   → retomar exatamente dali
```

### Regras

- **Nunca** recriar arquivos existentes
- **Nunca** repetir trabalho já concluído
- **Nunca** iniciar nova fase antes de confirmar checkpoint anterior
- **Sempre** comunicar ao usuário o que foi identificado antes de continuar

### Comunicação de Retomada

Ao retomar, apresentar ao usuário:

```
## Retomada do Projeto [Nome]

**Último checkpoint:** [CP-XXX — descrição]
**Estado atual:** [fase e subfase]
**Validações:** build ✅ / lint ✅ / typecheck ✅

**Pronto para continuar com:** [próxima subfase recomendada]
**Aguardando aprovação para iniciar.**
```

---

## 23. Divisão Automática de Fases

Quando estimar que uma fase pode exceder o limite de contexto ou tokens da sessão, dividir preventivamente sem necessidade de solicitação do usuário.

### Critérios para Divisão

Dividir automaticamente quando a fase envolver:

| Critério | Ação |
|---------|------|
| 8+ arquivos novos a criar | Dividir em A (estrutura) e B (implementação) |
| 3+ componentes complexos | Cada componente em sua própria subfase |
| Arquivos de governança + código | Separar em subfase de documentação |
| Validação + implementação | Separar em subfases sequenciais |
| Estimativa > 60% da sessão | Dividir em duas subfases iguais |

### Nomenclatura

```
Fase 1 → Fase 1A + Fase 1B (+ 1C se necessário)
Fase 2 → Fase 2A + Fase 2B
```

Nunca usar nomes genéricos como "Parte 1". Sempre nomear pelo conteúdo: "1A — Header Estrutura", "1B — Header Animações".

### Comunicar a Divisão

```
"A Fase 1 seria muito extensa para uma única sessão. Dividi em:
- Fase 1A — Header e Footer (estrutura HTML + CSS)
- Fase 1B — Header animações e comportamento de scroll

Iniciarei pela Fase 1A. Confirmar?"
```

---

## 24. Relatório Final de Fase

Ao finalizar qualquer fase ou subfase, gerar obrigatoriamente este relatório antes de apresentar o checkpoint.

### Estrutura do Relatório

```markdown
## Fase [X] Concluída — [Nome da Fase]

### Arquivos Criados
| Arquivo | Descrição |
|---------|-----------|
| src/... | [o que faz] |

### Arquivos Modificados
| Arquivo | Mudança |
|---------|---------|
| src/... | [o que mudou e por quê] |

### Arquivos Removidos
(se houver)

### Dependências Instaladas
- [pacote]@[versão] — [motivo]

### Validações
- Build: ✅ / ❌
- TypeScript: ✅ / ❌
- Lint: ✅ / ❌

### Pendências Identificadas
- [item pendente] — [motivo / quando resolver]

### Riscos Identificados
- [risco] — [impacto] — [mitigação recomendada]

### Próxima Fase Recomendada
[nome e descrição resumida da próxima fase]

### Estimativa da Próxima Fase
[baixa / média / alta complexidade] — [estimativa de arquivos]
```

---

## 25. Documentação Viva

Todos os documentos base do projeto são tratados como documentação viva — nunca estáticos.

### Documentos Vivos

| Documento | Atualizar quando |
|-----------|-----------------|
| `FFR-PLATFORM-v2.1.md` | Decisão altera padrão da plataforma |
| `[PROJETO]-MASTER-BRIEF.md` | Mudança de negócio, posicionamento ou copy |
| `[PROJETO]-MASTER-BLUEPRINT.md` | Mudança arquitetural, componente ou decisão técnica |
| `PROJECT-STATE.md` | Final de toda fase ou subfase |
| `CHANGELOG.md` | Final de toda fase ou subfase |
| `SECURITY-CHECKLIST.md` | Novo risco ou novo item mitigado |
| `SITE-RULES.md` | Nova regra de projeto aprovada |

### Regra de Atualização

Sem necessidade de solicitação. Ao identificar que uma decisão mudou algo documentado:

1. Atualizar o documento afetado
2. Registrar a mudança no `CHANGELOG.md`
3. Se a mudança afeta padrões da plataforma: atualizar `FFR-PLATFORM-v2.1.md` também

### Nunca Deixar Documentos Stale

Um documento desatualizado é pior que nenhum documento — porque induz erro em sessões futuras.

---

## 26. Recuperação de Desastre

Quando uma sessão é interrompida inesperadamente ou há divergência entre o estado esperado e o real.

### Sequência de Recuperação

```
1. Ler PROJECT-STATE.md             → identificar último checkpoint válido
2. Verificar arquivos listados      → confirmar que existem e não corromperam
3. Rodar validações                 → build, typecheck, lint
4. Se validações passam             → retomar do checkpoint
5. Se validações falham             → identificar o que diverge
6. Resolver divergências            → nunca sobrescrever sem entender
7. Documentar o incidente           → em CHANGELOG.md
```

### Regras

- **Nunca** reiniciar do zero sem tentar recuperar
- **Nunca** sobrescrever arquivos sem confirmar o que mudou
- **Nunca** usar o checkpoint mais antigo se um mais recente existir
- Em caso de dúvida: ler o arquivo antes de editar; verificar git diff se disponível

### Fonte de Verdade

```
PROJECT-STATE.md > Arquivos no disco > Memória da sessão anterior
```

---

## 27. Pipeline Oficial Expandido

O pipeline completo de um projeto FFR, do planejamento ao pós-deploy.

```
┌─────────────────────────────────────────────────────────────┐
│              PIPELINE FFR v2.1 — COMPLETO                   │
├────┬──────────────────────────┬────────────────────────────┤
│ #  │ Etapa                    │ Ação / Documento            │
├────┼──────────────────────────┼────────────────────────────┤
│  1 │ Planejamento             │ Brief + escopo              │
│  2 │ Platform                 │ FFR-PLATFORM-v2.1.md        │
│  3 │ Master Brief             │ [PROJETO]-MASTER-BRIEF.md   │
│  4 │ Master Blueprint         │ [PROJETO]-MASTER-BLUEPRINT  │
│  5 │ Governança               │ CLAUDE.md AGENTS.md RULES   │
│  6 │ Project State            │ PROJECT-STATE.md criado     │
│  7 │ Arquitetura              │ Stack, decisões, tokens     │
│  8 │ Fundação                 │ Setup, configs, estrutura   │
│    │   └─ Checkpoint          │ build ✅ lint ✅ types ✅   │
│  9 │ Design System            │ Tokens, globals, motion     │
│    │   └─ Checkpoint          │                             │
│ 10 │ Implementação            │ Fase a fase, por seção      │
│    │   └─ Checkpoint por fase │                             │
│ 11 │ Auditoria                │ ffr-security, code-review   │
│    │   └─ Checkpoint          │                             │
│ 12 │ Deploy                   │ Vercel / provider           │
│    │   └─ Checkpoint          │                             │
│ 13 │ Pós-Deploy               │ Smoke test, Lighthouse      │
│ 14 │ Manutenção               │ Iterações, hotfixes         │
└────┴──────────────────────────┴────────────────────────────┘
```

### Regra de Sequência

Nenhuma etapa pode ser pulada sem justificativa documentada no `CHANGELOG.md`. A justificativa não elimina a etapa — apenas a posterga com data de retorno.

---

## 28. Sincronização da Plataforma

A Plataforma FFR deve manter consistência interna. Nenhuma regra existe apenas em um único documento.

### Documentos que Devem Estar Sincronizados

| Documento | Conteúdo mínimo sincronizado |
|-----------|----------------------------|
| `FFR-PLATFORM-v2.1.md` | Todas as regras da plataforma |
| `CLAUDE.md` (projeto) | Regras aplicáveis ao projeto específico |
| `AGENTS.md` (projeto) | Agentes e protocolos alinhados com §6 |
| `SITE-RULES.md` | Regras técnicas derivadas da plataforma |
| Templates de novo projeto | Estrutura base atualizada |

### Quando Sincronizar

Ao atualizar qualquer regra em `FFR-PLATFORM-v2.1.md`:

1. Verificar se a regra tem reflexo nos outros documentos
2. Propagar a mudança (ou referência) nos documentos afetados
3. Registrar no `CHANGELOG.md` da plataforma

### Fonte de Verdade Única

```
FFR-PLATFORM-v2.1.md é a fonte de verdade.
Os outros documentos derivam dela ou referenciam suas seções.
Em caso de conflito: a plataforma prevalece.
```

---

## 29. Melhoria Contínua

A Plataforma FFR é evolutiva. Cada projeto pode gerar melhorias que beneficiam todos os projetos futuros.

### Critérios para Incorporação

Antes de incorporar uma melhoria à plataforma, verificar se ela é:

| Critério | Pergunta |
|---------|---------|
| Reutilizável | Funciona em outros tipos de projeto? |
| Escalável | Funciona com equipes maiores? |
| Genérica | Não depende de contexto específico? |
| Compatível | Não conflita com regras existentes? |

Se todos os critérios forem atendidos: incorporar e documentar.

### Processo de Incorporação

```
1. Identificar a melhoria no projeto atual
2. Verificar os 4 critérios acima
3. Redigir a regra de forma genérica
4. Adicionar à seção adequada de FFR-PLATFORM-v2.1.md
5. Atualizar TOC e versão se necessário
6. Registrar no CHANGELOG da plataforma
7. Comunicar ao usuário: "Melhoria incorporada à plataforma: [descrição]"
```

### Tipos de Melhorias a Observar

- Padrões de código que se repetem com sucesso
- Fluxos de trabalho que economizaram tempo
- Erros que poderiam ter sido evitados com uma regra
- Ferramentas ou técnicas novas testadas com sucesso
- Decisões arquiteturais que funcionaram bem

---

## 30. Regra de Ouro — Hierarquia de Prioridade

Quando surgir qualquer decisão de arquitetura, documentação ou processo, aplicar esta hierarquia:

```
┌─────────────────────────────────────────────────────────────┐
│            HIERARQUIA DE PRIORIDADE FFR v2.1                │
├────┬────────────────────────────────────────────────────────┤
│  1 │ Instruções explícitas do usuário / cliente             │
│    │ → máxima prioridade, sempre                            │
├────┼────────────────────────────────────────────────────────┤
│  2 │ FFR-PLATFORM-v2.1.md                                   │
│    │ → padrões da plataforma, normativa interna             │
├────┼────────────────────────────────────────────────────────┤
│  3 │ [PROJETO]-MASTER-BLUEPRINT.md                          │
│    │ → arquitetura específica do projeto                    │
├────┼────────────────────────────────────────────────────────┤
│  4 │ [PROJETO]-MASTER-BRIEF.md                              │
│    │ → contexto de negócio e estratégia                     │
├────┼────────────────────────────────────────────────────────┤
│  5 │ Código existente no projeto                            │
│    │ → padrões já adotados, consistência                    │
└────┴────────────────────────────────────────────────────────┘
```

### Como Aplicar

**Em conflito entre documentos:** o documento de nível superior prevalece. Documentar a decisão no `CHANGELOG.md`.

**Em conflito entre plataforma e projeto:** a plataforma prevalece para padrões; o blueprint prevalece para decisões específicas do projeto.

**Em dúvida sobre prioridade:** perguntar ao usuário. Nunca assumir em silêncio.

### Objetivo

```
Cada novo projeto deve ser:
- Mais rápido que o anterior (plataforma evoluiu)
- Mais consistente que o anterior (padrões acumulados)
- Mais inteligente que o anterior (lições aprendidas)
```

---

## Apêndice A: Checklist de Início de Projeto

Use ao receber qualquer novo projeto FFR.

- [ ] `ffr-dispatcher` invocado — tipo de projeto identificado
- [ ] Pipeline completo definido — skills em sequência
- [ ] Master Brief criado ou revisado
- [ ] Master Blueprint criado ou revisado
- [ ] Stack tecnológica confirmada — Next.js / Vite / Mobile
- [ ] Governança criada: `CLAUDE.md`, `AGENTS.md`, `SITE-RULES.md`, `SECURITY-CHECKLIST.md`
- [ ] `PROJECT-STATE.md` criado
- [ ] `CHANGELOG.md` criado
- [ ] UX agendado — `ui-ux-pro-max` antes de qualquer visual
- [ ] Design tokens definidos — `design-is` antes de `ffr-premium-ui`
- [ ] Segurança mapeada — `ffr-security` preventiva desde o início
- [ ] Plano de execução pendente — nenhum código antes do plano aprovado
- [ ] `claude-mem` verificado — contexto de sessões anteriores carregado

---

## Apêndice B: Checklist de Retomada de Sessão

Use ao iniciar qualquer sessão em projeto FFR existente.

- [ ] Lido: `FFR-PLATFORM-v2.1.md`
- [ ] Lido: `[PROJETO]-MASTER-BRIEF.md`
- [ ] Lido: `[PROJETO]-MASTER-BLUEPRINT.md`
- [ ] Lido: `PROJECT-STATE.md`
- [ ] Lido: `CHANGELOG.md`
- [ ] Verificado: arquivos existentes no `src/`
- [ ] Identificado: último checkpoint válido
- [ ] Confirmado: próxima subfase a executar
- [ ] Comunicado ao usuário: estado atual e próximo passo
- [ ] Aguardando aprovação antes de continuar

---

## Apêndice C: Template de Checkpoint

```markdown
## Checkpoint [CP-XXX] — [Nome da Fase]

**Data:** [YYYY-MM-DD]
**Fase:** [N — descrição]

### Validações
- Build: ✅
- TypeScript: ✅
- Lint: ✅

### Arquivos Criados
- [arquivo] — [descrição]

### Arquivos Modificados
- [arquivo] — [mudança]

### Tarefas Concluídas
- [x] [tarefa]

### Tarefas Pendentes
- [ ] [tarefa] — [motivo]

### Riscos
- [risco] — [mitigação]

### Próxima Fase Recomendada
[descrição]

**Aguardando aprovação para continuar.**
```

---

*FFR Platform v2.1 — FFR Brasil Technology*
*Mantida como documentação viva. Atualizar ao registrar decisões que mudam padrões desta plataforma.*
*Histórico de versões: v2.0 (fundação) → v2.1 (2026-06-27: Controle de Sessões, Checkpoints, PROJECT-STATE, CHANGELOG, Pipeline Expandido, Regra de Ouro)*
