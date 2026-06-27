# CHANGELOG — Veritas Metal

Todas as mudanças significativas do projeto são documentadas aqui.
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [Não Lançado]

### A implementar
- Fase 1A: Header, Footer, WhatsAppFloat, SectionWrapper
- Fase 1B: Animações de layout e comportamento de scroll
- Fases 2–10: Seções da Home (S01–S16)
- Fase 11: LGPD cookie consent, GA4, Content-Security-Policy
- Fase 12: Deploy em produção

---

## [0.1.0] — 2026-06-27 — Fase 0: Fundação Completa

### Adicionado

**Configuração do Projeto**
- `package.json` com scripts: dev, build, lint, typecheck, format
- `tsconfig.json` com strict mode e path alias `@/*`
- `next.config.ts` com headers de segurança (X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy)
- `postcss.config.mjs` com `@tailwindcss/postcss` (Tailwind v4)
- `.eslintrc.json` com next/core-web-vitals
- `.prettierrc` com prettier-plugin-tailwindcss
- `.gitignore` cobrindo .env*, node_modules, .next

**App Next.js 15**
- `src/app/layout.tsx` — Root layout com fontes Google (Bebas Neue, Bricolage Grotesque, Inter) e Geist Mono, metadata completa, viewport
- `src/app/page.tsx` — Placeholder home aguardando Fase 2
- `src/app/globals.css` — Tailwind v4 import + @theme inline + reset + base styles
- `src/app/robots.ts` — robots.txt automático
- `src/app/sitemap.ts` — sitemap.xml automático
- `src/app/icon.tsx` — Favicon gerado com ImageResponse
- `src/app/politica-privacidade/page.tsx` — Rota /politica-privacidade

**Design System**
- `src/styles/tokens.css` — Todos os CSS Custom Properties `--vm-*`:
  - Cores: black, charcoal, surface, elevated, borders, text, copper, stones, feedback
  - Tipografia: famílias, escalas display/heading/body, line-heights, letter-spacings
  - Espaçamento: 15 steps (0.25rem → 12rem)
  - Grid: containers, cols, gap, gutter
  - Breakpoints: 480/768/1024/1280/1440px
  - Motion: 7 durações, 5 easings
  - Bordas, sombras, z-index

**Motion Infrastructure**
- `src/lib/gsap/register.ts` — Registro do ScrollTrigger com guard de SSR
- `src/lib/gsap/presets.ts` — Animações reutilizáveis: fadeUp, fadeIn, revealLine, staggerFadeUp, scaleIn
- `src/lib/lenis/LenisProvider.tsx` — Provider com RAF loop sincronizado ao GSAP ticker
- `src/components/Providers.tsx` — Wrapper de providers

**Hooks (7)**
- `useReducedMotion.ts` — prefers-reduced-motion SSR-safe
- `useMediaQuery.ts` — genérico + atalhos useIsMobile/Tablet/Desktop
- `useIntersection.ts` — IntersectionObserver com triggerOnce
- `useGSAP.ts` — gsap.context() com cleanup automático via revert()
- `useLenis.ts` — acesso ao contexto Lenis
- `useScrollProgress.ts` — progresso de scroll 0–1
- `useWhatsApp.ts` — URL wa.me com mensagem e UTM params

**Lib**
- `src/lib/cn.ts` — clsx + tailwind-merge
- `src/lib/messages.ts` — Mensagens WhatsApp pré-preenchidas por seção (6 mensagens)
- `src/lib/events.ts` — Eventos GA4 tipados (5 tipos de evento)
- `src/lib/utils/format.ts` — formatArea, formatCurrency, formatPhone, slugify, truncate, pluralize
- `src/lib/projects/data.ts` — Dados estáticos de 3 projetos exemplo + PROJECT_TAGS

**Types**
- `src/types/index.ts` — Section, Breakpoint, AnimationVariant, WhatsAppSource, NavItem, ProjectCard, Testimonial, FAQItem, Metric
- `src/types/motion.ts` — MotionVariant, ScrollRevealPreset, MotionDuration, MotionEase, MOTION_DURATION_MS, FRAMER_VARIANTS

**Governança**
- `README.md`
- `CLAUDE.md` (project-level)
- `AGENTS.md`
- `SITE-RULES.md`
- `SECURITY-CHECKLIST.md`
- `PROJECT-STATE.md`
- `CHANGELOG.md` (este arquivo)
- `docs/LGPD.md`
- `docs/PRIVACY-POLICY.md`
- `docs/COOKIE-POLICY.md`

**Agentes**
- `agents/coordinator.md`
- `agents/researcher.md`
- `agents/architect.md`
- `agents/coder.md`
- `agents/reviewer.md`
- `agents/security-auditor.md`

### Dependências Instaladas

| Pacote | Versão | Uso |
|--------|--------|-----|
| `next` | ^15.3.0 | Framework |
| `react` | ^19.0.0 | UI |
| `react-dom` | ^19.0.0 | DOM |
| `gsap` | ^3.12.5 | Animações scroll/timeline |
| `lenis` | ^1.1.14 | Smooth scroll |
| `framer-motion` | ^11.11.0 | Animações de componente |
| `clsx` | ^2.1.1 | Classnames condicional |
| `tailwind-merge` | ^2.5.2 | Merge de classes Tailwind |
| `geist` | ^1.3.1 | Geist Mono font |
| `typescript` | ^5.6.0 | Type safety |
| `tailwindcss` | ^4.0.0 | CSS framework |
| `@tailwindcss/postcss` | ^4.0.0 | Plugin PostCSS Tailwind v4 |
| `postcss` | ^8.4.49 | CSS processing |
| `eslint` | ^8.57.1 | Linting |
| `eslint-config-next` | ^15.3.0 | ESLint Next.js |
| `prettier` | ^3.3.3 | Formatter |
| `prettier-plugin-tailwindcss` | ^0.6.8 | Sort classes |

### Corrigido

| Bug | Arquivo | Descrição |
|-----|---------|-----------|
| Referência a arquivo inexistente | `.prettierrc` | Removido `tailwindConfig: ./tailwind.config.ts` — Tailwind v4 é CSS-first |
| RAF cleanup com referência inválida | `LenisProvider.tsx` | Extraído `rafCallback` para variável para remoção correta do ticker |
| Tipo de callback incorreto | `useGSAP.ts` | `gsap.context()` não passa contexto como argumento; tipo corrigido para `() => void` |

### Plataforma FFR

- `FFR-PLATFORM-v2.0.md` → atualizado para `v2.1`
- Incorporadas 13 novas seções: Controle de Sessões, Checkpoints, PROJECT-STATE, CHANGELOG, Retomada Automática, Divisão de Fases, Relatório de Fase, Documentação Viva, Recuperação, Pipeline Expandido, Sincronização, Melhoria Contínua, Regra de Ouro
- Adicionados Apêndices B (Retomada) e C (Template de Checkpoint)

### Validações do Checkpoint CP-001

```
npm run build       → ✅ Compilado (23.4s)
npm run typecheck   → ✅ Zero erros
npm run lint        → ✅ Zero erros
```
