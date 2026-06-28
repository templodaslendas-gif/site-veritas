# CHANGELOG — Veritas Metal

Todas as mudanças significativas do projeto são documentadas aqui.
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [Não Lançado]

### A implementar
- Fase 2B: Intro Cinematográfica
- Fases 3–10: Seções da Home (S04–S16)
- Fase 11: LGPD cookie consent, GA4, Content-Security-Policy
- Fase 12: Deploy em produção

---

## [0.4.0] — 2026-06-27 — Fase 2A: Hero Cinematográfica

### Adicionado

- `src/components/sections/HeroSection/HeroSection.tsx`
  - Seção fullscreen `100dvh` com `minHeight: 600px`
  - Vídeo background via `VideoPlayer` com array `sources` (webm → mp4) + poster webp
  - Config `HERO_VIDEO` isolada no topo do arquivo — troca de vídeo sem tocar no componente
  - Dois overlays: gradiente direcional `160deg` (92%→45%) + vinheta inferior
  - Eyebrow copper uppercase: "Marechal Cândido Rondon · Oeste do Paraná"
  - Headline Bebas Neue: `clamp(2.25rem, 7vw, 5rem)` — "Construção Inteligente. / Engenharia Moderna."
  - Subheadline Inter: `clamp(1rem, 1.5vw + 0.5rem, 1.25rem)` — serviços e região
  - Reforço: "Do projeto à entrega..." em `--vm-text-muted`
  - CTA primário: copper filled → WhatsApp com `WA_MESSAGES.hero`
  - CTA secundário: ghost/outline → `#steel-frame`
  - Stagger Framer Motion (12 delay entre filhos, 350ms inicial); desativado com `prefers-reduced-motion`
  - Mobile-first: `text-center lg:text-left`, CTAs `flex-col sm:flex-row`, botões `w-full sm:w-auto`

- `src/components/sections/HeroSection/HeroScrollIndicator.tsx`
  - Seta SVG bouncing (`y: [0, 7, 0]` loop 1.8s) em copper
  - Link acessível `aria-label` para `#steel-frame`
  - Hover/focus: opacidade 0.55 → 1

### Modificado

- `src/components/shared/VideoPlayer/index.tsx`
  - Adicionada interface `VideoSource { src: string; type: string }`
  - Nova prop `sources?: VideoSource[]` para múltiplos formatos (webm + mp4)
  - `src` prop torna-se opcional quando `sources` é fornecido
  - Compatibilidade retroativa mantida

- `src/components/shared/SectionWrapper/index.tsx`
  - Adicionada prop `style?: React.CSSProperties`
  - Compatibilidade retroativa mantida

- `src/app/page.tsx`
  - Removido placeholder; agora renderiza `<HeroSection />` + `<div id="steel-frame" />`
  - `<main id="main-content">` mantido para skip-link funcionar

### Validações do Checkpoint CP-005

```
npm run build       → ✅ Compilado sem erros (8/8 páginas estáticas)
npm run typecheck   → ✅ Zero erros TypeScript
npm run lint        → ✅ Zero erros ESLint
```

---

## [0.3.0] — 2026-06-27 — Fase 1B: Animações de Layout

### Modificado

- `src/components/layout/Header/Header.tsx`
  - Altura reduz de 72px → 64px ao fazer scroll (transição suave)
  - Background muda para `rgba(17,17,17,0.92)` + `backdrop-filter: blur(12px)` — efeito glass
  - Logo reduz de 1.5rem → 1.375rem ao scrollar
  - `paddingInline` agora responsivo via Tailwind: `px-4 lg:px-6`
  - Transição CSS cobre: height, background-color, backdrop-filter, border-color

- `src/components/layout/Header/NavDesktop.tsx`
  - Extraídas funções `activateLink`/`deactivateLink` reutilizadas em mouse E foco
  - Adicionados `onFocus`/`onBlur` para paridade de comportamento com teclado
  - Underline copper agora anima também ao navegar por teclado (Tab)
  - `data-underline` para seleção precisa do elemento span

- `src/components/layout/WhatsAppFloat/WhatsAppFloat.tsx`
  - Importados `motion` e `useReducedMotion` do Framer Motion
  - Wrapper `motion.div` com entrance: `{ opacity: 0, y: 20, scale: 0.85 }` → visível após delay de 1.8s
  - `useReducedMotion`: sem animação de entrada quando preferência ativa
  - CSS `.wa-btn:focus-visible` com `border-radius: 9999px` para anel de foco circular

### Validações do Checkpoint CP-004

```
npm run build       → ✅ Compilado sem erros (8/8 páginas estáticas)
npm run typecheck   → ✅ Zero erros TypeScript
npm run lint        → ✅ Zero erros ESLint
```

---

## [0.2.0] — 2026-06-27 — Fase 1A: Layout Base

### Adicionado

**Componentes de Layout**
- `src/components/layout/Header/Header.tsx` — Header sticky, scroll-aware: transparente no topo → fundo dark + borda após 80px de scroll
- `src/components/layout/Header/NavDesktop.tsx` — Navegação desktop com 6 âncoras (Steel Frame, Projetos, Drywall, Estruturas, FAQ, Contato). Exporta `NAV_ITEMS` reutilizável
- `src/components/layout/Header/NavMobile.tsx` — Hamburger com animação CSS de 3 barras → X. Drawer com AnimatePresence Framer Motion (slide from right). Fecha ao clicar no overlay
- `src/components/layout/Header/HeaderCTA.tsx` — Botão "Solicitar Orçamento" com link UTM para WhatsApp. Hover: translateY(-1px) + copper-light
- `src/components/layout/Footer/Footer.tsx` — Footer completo: logo, tagline, localização, 4 colunas de links (Serviços, Contato, Legal), copyright dinâmico
- `src/components/layout/Footer/FooterLinks.tsx` — Grupo de links com hover copper-light
- `src/components/layout/WhatsAppFloat/WhatsAppFloat.tsx` — Botão fixo bottom-right com ícone SVG WhatsApp, pulse ring animation, hover scale

**Componentes Shared**
- `src/components/shared/JsonLd/index.tsx` — Renderiza `<script type="application/ld+json">` com qualquer schema.org
- `src/components/shared/SectionWrapper/index.tsx` — Wrapper semântico (section/div/article) com id e className
- `src/components/shared/ScrollReveal/index.tsx` — Animação de entrada on scroll via Framer Motion. Suporta 4 direções, delay, amount. Respeita `prefers-reduced-motion`
- `src/components/shared/VideoPlayer/index.tsx` — Player de vídeo (autoPlay, loop, muted, playsInline) com fallback placeholder quando src ausente

**Modificações**
- `src/app/layout.tsx` — Integrado: Providers, Header, Footer, WhatsAppFloat, JsonLd com Organization schema (LocalBusiness)
- `src/app/page.tsx` — Placeholder visual com paddingTop:72px para compensar header fixo

### Validações do Checkpoint CP-003

```
npm run build       → ✅ Compilado (23.6s, 8/8 páginas estáticas)
npm run typecheck   → ✅ Zero erros TypeScript
npm run lint        → ✅ Zero erros ESLint
```

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
