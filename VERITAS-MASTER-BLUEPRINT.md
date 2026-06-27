# VERITAS MASTER BLUEPRINT
**Planta Técnica Completa — Projeto Veritas Metal**
*Arquitetura · Componentes · Motion · Performance · Implementação*

Versão 1.0 — Plataforma: FFR Platform v2.0
Referência: VERITAS-MASTER-BRIEF.md

---

## Sumário

1. [Stack e Decisões Arquiteturais](#1-stack-e-decisões-arquiteturais)
2. [Estrutura de Pastas](#2-estrutura-de-pastas)
3. [Design System — Tokens](#3-design-system--tokens)
4. [Tipografia](#4-tipografia)
5. [Grid e Espaçamentos](#5-grid-e-espaçamentos)
6. [Sistema de Motion](#6-sistema-de-motion)
7. [Componentes Reutilizáveis](#7-componentes-reutilizáveis)
8. [Component Tree](#8-component-tree)
9. [Estratégia de Vídeos](#9-estratégia-de-vídeos)
10. [Estratégia de Imagens](#10-estratégia-de-imagens)
11. [Performance e Bundle Strategy](#11-performance-e-bundle-strategy)
12. [Acessibilidade](#12-acessibilidade)
13. [SEO Técnico](#13-seo-técnico)
14. [Navegação e Fluxo](#14-navegação-e-fluxo)
15. [Estratégia de CTAs e Conversão](#15-estratégia-de-ctas-e-conversão)
16. [Seções da Home — Especificação Completa](#16-seções-da-home--especificação-completa)
17. [Plano de Implementação](#17-plano-de-implementação)

---

## 1. Stack e Decisões Arquiteturais

### Stack Definitiva

| Camada | Tecnologia | Versão alvo | Justificativa |
|--------|-----------|-------------|---------------|
| Framework | Next.js App Router | 15.x | SSR para SEO, Server Components, route-level code splitting |
| Linguagem | TypeScript | 5.x | Type safety + IntelliSense em toda a equipe |
| Estilos | Tailwind CSS | 4.x | Utility-first alinhado com FFR Platform |
| Tokens | CSS Custom Properties | nativa | Zero runtime, suporte universal, tema consistente |
| Scroll suave | Lenis | 1.x | Integração nativa com GSAP RAF, melhor que CSS scroll-behavior |
| Animações scroll | GSAP + ScrollTrigger | 3.x | Precisão de frame, pinning, scrub — sem alternativa equivalente |
| Animações de componente | Framer Motion | 11.x | AnimatePresence, layout animations, gestures em React |
| Animação de intro | Three.js (pré-renderizado) | — | Chunk isolado, lazy loaded, fallback em vídeo MP4 |
| Imagens | next/image | nativa | WebP automático, lazy, placeholder blur, CDN |
| Fontes | next/font | nativa | Autohosting, display: swap, preload automático |
| Formulário | React Hook Form + Zod | 7.x + 3.x | Validação performática sem re-renders desnecessários |
| Analytics | GA4 via @next/third-parties | — | Carregamento otimizado |
| Deploy | Vercel | — | Edge network, auto-HTTPS, preview por branch |
| SEO sitemap | next-sitemap | — | Geração automática pós-build |

### Decisões Arquiteturais

**App Router sobre Pages Router:**
Server Components reduzem bundle do cliente. Seções de conteúdo puro (FAQ, benefícios) renderizam no servidor — zero JS no cliente para esse conteúdo.

**One Page Application (SPA-like Home):**
Todo o conteúdo na raiz (`/`). Sub-páginas apenas para Política de Privacidade (`/politica-privacidade`) e futuramente páginas de projeto individuais (`/projetos/[slug]`).

**CSS Custom Properties como tokens — não Tailwind arbitraries:**
Tokens definidos em `tokens.css` e expostos ao Tailwind via `tailwind.config.ts`. Isso permite acesso direto aos tokens no GSAP e em CSS vanilla quando necessário.

**Three.js apenas para a intro:**
A logo forjada é o único caso de uso que justifica Three.js. Carregada em chunk separado, apenas se o visitante não fez o skip e o dispositivo não é low-end. Caso contrário, vídeo MP4 pré-renderizado.

**Lenis + GSAP como dupla de scroll:**
Lenis gerencia o scroll suave. GSAP ScrollTrigger hookeia no Lenis RAF. Framer Motion não toca no scroll — é apenas para mount/exit/hover em nível de componente.

---

## 2. Estrutura de Pastas

```
veritas-metal/
│
├── public/
│   ├── fonts/                          # Self-hosted fonts (Bebas Neue, Inter subset)
│   ├── images/
│   │   ├── hero/
│   │   │   ├── hero-poster.jpg         # LCP crítico — < 80KB, qualidade máxima percebida
│   │   │   └── hero-poster-mobile.jpg  # 375px × 812px crop
│   │   ├── intro/
│   │   │   └── intro-poster.jpg        # Frame final da intro (fallback)
│   │   ├── projects/
│   │   │   └── [slug]/                 # Pasta por projeto
│   │   │       ├── cover.jpg
│   │   │       ├── interior-01.jpg
│   │   │       └── ...
│   │   ├── process/                    # Fotos das 6 etapas
│   │   │   ├── 01-project.jpg
│   │   │   ├── 02-foundation.jpg
│   │   │   ├── 03-structure.jpg
│   │   │   ├── 04-closure.jpg
│   │   │   ├── 05-systems.jpg
│   │   │   └── 06-finish.jpg
│   │   ├── sections/                   # Imagens por seção
│   │   │   ├── future/                 # 5 frames do scroll storytelling
│   │   │   ├── steel-frame/            # Diagrama de camadas
│   │   │   ├── drywall/                # Antes/depois
│   │   │   └── metal-structures/       # Galpões, coberturas
│   │   └── og/
│   │       └── og-image.jpg            # 1200 × 630px
│   └── videos/
│       ├── intro/
│       │   ├── intro.mp4               # < 3MB, H.264
│       │   └── intro-mobile.mp4        # versão comprimida
│       ├── hero/
│       │   ├── hero.mp4                # < 8MB, H.264
│       │   └── hero-mobile.mp4         # poster ou vídeo comprimido
│       └── sections/
│           └── comparison.mp4          # opcional — time-lapse comparativo
│
├── src/
│   │
│   ├── app/
│   │   ├── layout.tsx                  # Root: fonts, LenisProvider, Analytics, JSON-LD global
│   │   ├── page.tsx                    # Home — composição das sections
│   │   ├── globals.css                 # @import tokens.css + reset + base
│   │   ├── politica-privacidade/
│   │   │   └── page.tsx
│   │   ├── sitemap.ts                  # next-sitemap config
│   │   └── robots.ts
│   │
│   ├── components/
│   │   │
│   │   ├── ui/                         # Primitivos — sem lógica de negócio
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.types.ts
│   │   │   ├── Badge/
│   │   │   ├── SectionLabel/           # Eyebrow label cobre
│   │   │   ├── AnimatedCounter/        # Número que conta ao entrar no viewport
│   │   │   ├── SplitText/              # Wrapper GSAP SplitText
│   │   │   ├── RevealLine/             # Linha de texto com mask reveal
│   │   │   ├── WhatsAppButton/         # CTA principal — variantes por seção
│   │   │   ├── Icon/                   # Ícones SVG tipados
│   │   │   └── Skeleton/
│   │   │
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx          # Sticky, scroll-aware
│   │   │   │   ├── NavDesktop.tsx
│   │   │   │   ├── NavMobile.tsx       # Drawer
│   │   │   │   └── HeaderCTA.tsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── FooterLinks.tsx
│   │   │   └── WhatsAppFloat/          # Botão flutuante mobile
│   │   │       └── WhatsAppFloat.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Intro/
│   │   │   │   ├── Intro.tsx           # Orquestrador
│   │   │   │   ├── IntroVideo.tsx      # Vídeo MP4 fullscreen
│   │   │   │   ├── IntroLogo.tsx       # Reveal do logo
│   │   │   │   ├── IntroTagline.tsx    # Fade da tagline
│   │   │   │   └── IntroSkip.tsx       # Botão skip
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── HeroBackground.tsx  # Video + overlay + parallax
│   │   │   │   ├── HeroContent.tsx     # Eyebrow + headline + sub + CTAs
│   │   │   │   ├── HeroHeadline.tsx    # SplitText reveal
│   │   │   │   └── HeroScrollHint.tsx  # Indicador de scroll
│   │   │   ├── FutureConstruction/
│   │   │   │   ├── FutureConstruction.tsx   # Orquestrador do pin
│   │   │   │   ├── StoryScene.tsx           # Cada tela do storytelling
│   │   │   │   └── StoryProgress.tsx        # Barra de progresso
│   │   │   ├── WhatIsSteelFrame/
│   │   │   │   ├── WhatIsSteelFrame.tsx
│   │   │   │   ├── WallDiagram.tsx          # SVG interativo das camadas
│   │   │   │   ├── LayerLabel.tsx           # Label animado por camada
│   │   │   │   └── SteelFrameStat.tsx       # "80% nos EUA" com counter
│   │   │   ├── HowItWorks/
│   │   │   │   ├── HowItWorks.tsx
│   │   │   │   ├── ProcessTimeline.tsx
│   │   │   │   ├── ProcessStep.tsx          # Cada etapa
│   │   │   │   └── TimelineConnector.tsx    # Linha SVG desenhada
│   │   │   ├── Comparison/
│   │   │   │   ├── Comparison.tsx
│   │   │   │   ├── ComparisonTable.tsx      # Desktop
│   │   │   │   ├── ComparisonCards.tsx      # Mobile
│   │   │   │   └── ComparisonRow.tsx
│   │   │   ├── Benefits/
│   │   │   │   ├── Benefits.tsx
│   │   │   │   └── BenefitCard.tsx
│   │   │   ├── Projects/
│   │   │   │   ├── Projects.tsx
│   │   │   │   ├── ProjectFilter.tsx
│   │   │   │   ├── ProjectGrid.tsx
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   └── ProjectModal.tsx         # Modal fullscreen com detalhes
│   │   │   ├── Drywall/
│   │   │   │   ├── Drywall.tsx
│   │   │   │   └── BeforeAfterSlider.tsx    # Slider drag interativo
│   │   │   ├── MetalStructures/
│   │   │   │   ├── MetalStructures.tsx
│   │   │   │   └── StructureShowcase.tsx
│   │   │   ├── Differentials/
│   │   │   │   ├── Differentials.tsx
│   │   │   │   └── DifferentialItem.tsx
│   │   │   ├── FAQ/
│   │   │   │   ├── FAQ.tsx
│   │   │   │   ├── FAQItem.tsx              # Accordion Framer Motion
│   │   │   │   └── FAQSchema.tsx            # JSON-LD injetado no head
│   │   │   ├── FinalCTA/
│   │   │   │   └── FinalCTA.tsx
│   │   │   └── Contact/
│   │   │       ├── Contact.tsx
│   │   │       ├── ContactForm.tsx          # RHF + Zod
│   │   │       └── ContactInfo.tsx
│   │   │
│   │   └── shared/
│   │       ├── SectionWrapper/              # Container padrão de seção
│   │       ├── ScrollReveal/                # HOC com IntersectionObserver
│   │       ├── VideoPlayer/                 # Video wrapper com poster + lazy
│   │       └── JsonLd/                      # Helper para JSON-LD scripts
│   │
│   ├── hooks/
│   │   ├── useGSAP.ts                       # Wrapper seguro para Next.js
│   │   ├── useLenis.ts                      # Acesso ao contexto do Lenis
│   │   ├── useScrollProgress.ts             # 0–1 progresso na seção
│   │   ├── useIntersection.ts               # Trigger de viewport
│   │   ├── useMediaQuery.ts                 # SSR-safe breakpoint detection
│   │   ├── useReducedMotion.ts              # prefers-reduced-motion
│   │   └── useWhatsApp.ts                   # Geração de URL + tracking GA4
│   │
│   ├── lib/
│   │   ├── gsap/
│   │   │   ├── register.ts                  # ScrollTrigger + SplitText registration
│   │   │   └── presets.ts                   # Animações reutilizáveis (revealLine, fadeUp, etc.)
│   │   ├── lenis/
│   │   │   └── LenisProvider.tsx            # Context Provider com RAF loop
│   │   ├── whatsapp/
│   │   │   └── messages.ts                  # Mensagens pré-preenchidas por seção
│   │   ├── analytics/
│   │   │   └── events.ts                    # Eventos GA4 tipados
│   │   ├── projects/
│   │   │   └── data.ts                      # Dados estáticos dos projetos
│   │   └── utils/
│   │       ├── cn.ts                        # clsx + twMerge
│   │       └── format.ts
│   │
│   ├── styles/
│   │   └── tokens.css                       # CSS Custom Properties — fonte da verdade
│   │
│   └── types/
│       ├── project.ts
│       ├── faq.ts
│       └── motion.ts
│
├── tailwind.config.ts                       # Consome tokens.css via cssVariables
├── next.config.ts
└── tsconfig.json
```

---

## 3. Design System — Tokens

Todos os valores definidos em `src/styles/tokens.css` como CSS Custom Properties. O Tailwind os consome via `tailwind.config.ts` com `hsl()` ou diretamente. Nunca valores hardcoded fora deste arquivo.

### Paleta de Cores

```
/* Base — Industrial dark */
--vm-black:         #080808   /* Fundo absoluto — intro e overlays */
--vm-charcoal:      #111111   /* Fundo principal do site */
--vm-surface:       #181818   /* Cards, seções alternadas */
--vm-elevated:      #212121   /* Componentes elevados */
--vm-border:        #2C2C2C   /* Bordas sutis */
--vm-border-strong: #404040   /* Bordas com destaque */

/* Texto */
--vm-text-primary:   #F5F2ED  /* Off-white quente — principal */
--vm-text-secondary: #A09A93  /* Texto secundário */
--vm-text-muted:     #5C5650  /* Texto desativado, captions */

/* Cobre — Acento premium */
--vm-copper-light:  #DBA87A   /* Hover, brilhos */
--vm-copper:        #C4803E   /* CTA primário, destaques, ícones ativos */
--vm-copper-dark:   #9A5E1E   /* Estado pressed */

/* Neutros adicionais */
--vm-stone-200:     #D9D4CC
--vm-stone-400:     #968D84
--vm-stone-600:     #5A534C

/* Feedback */
--vm-success:       #4DB87A
--vm-warning:       #D4913A
--vm-error:         #C85444
--vm-info:          #4A8FBF
```

### Aplicação Semântica de Cores

| Token | Uso |
|-------|-----|
| `--vm-charcoal` | Fundo base de todas as seções |
| `--vm-surface` | Seções alternadas, cards, FAQ |
| `--vm-elevated` | Modais, tooltips, header após scroll |
| `--vm-copper` | CTA primário, links ativos, ícones de destaque |
| `--vm-text-primary` | Texto principal, headings |
| `--vm-text-secondary` | Subtítulos, descrições |
| `--vm-border` | Divisórias sutis, bordas de card |

---

## 4. Tipografia

### Famílias

| Papel | Fonte | Fallback | Uso |
|-------|-------|---------|-----|
| Display | Bebas Neue | Impact, system-ui | Headlines grandes (Hero, seções de impacto) |
| Heading | Bricolage Grotesque | Georgia, serif | H2, H3, subtítulos premium |
| Body | Inter | system-ui | Parágrafos, labels, UI |
| Mono | Geist Mono | Consolas, monospace | Dados técnicos, eyebrow labels, badges |

**Bebas Neue** — condensado, industrial, peso único (400 funciona como display bold). Google Fonts. Carregado com `next/font/google`.

**Bricolage Grotesque** — variável (100–800). Carregado somente em weights 400, 600, 700. Google Fonts.

**Inter** — variável. Subset Latin. Carregado em 400, 500, 600. Google Fonts.

**Geist Mono** — Vercel/Next.js font. npm package `geist`.

### Escala Tipográfica

```
/* Escala display (Bebas Neue) */
--vm-display-2xl:  9rem;     /* 144px — Impacto máximo, hero em desktop */
--vm-display-xl:   6rem;     /* 96px  — Hero em tablet */
--vm-display-lg:   4.5rem;   /* 72px  — Seções de impacto */
--vm-display-md:   3rem;     /* 48px  — Hero mobile */

/* Escala heading (Bricolage Grotesque) */
--vm-h1:  2.5rem;    /* 40px */
--vm-h2:  2rem;      /* 32px */
--vm-h3:  1.5rem;    /* 24px */
--vm-h4:  1.25rem;   /* 20px */

/* Escala body (Inter) */
--vm-text-xl:   1.25rem;   /* 20px — Lead text */
--vm-text-lg:   1.125rem;  /* 18px — Body large */
--vm-text-base: 1rem;      /* 16px — Body padrão */
--vm-text-sm:   0.875rem;  /* 14px — Captions, labels */
--vm-text-xs:   0.75rem;   /* 12px — Legal, metadata */

/* Line heights */
--vm-leading-tight:  1.05;   /* Display */
--vm-leading-snug:   1.2;    /* Headings */
--vm-leading-normal: 1.5;    /* Body */
--vm-leading-relaxed: 1.7;   /* Long-form */

/* Letter spacing */
--vm-tracking-display: -0.03em;  /* Display — tight */
--vm-tracking-heading: -0.02em;  /* Headings */
--vm-tracking-body:    0em;      /* Body */
--vm-tracking-label:   0.08em;   /* Labels uppercase */
--vm-tracking-mono:    0.02em;   /* Mono */
```

### Regras Tipográficas

- Display sempre em uppercase (Bebas Neue já é condensed — uppercase amplifica)
- Máximo 65 chars por linha em body (controlado por `max-width: 65ch`)
- Headings com `text-wrap: balance` para quebras naturais
- Body com `text-wrap: pretty` para orfãos
- Mobile: `--vm-display-xl` no hero; Desktop: `--vm-display-2xl`
- Eyebrow labels em Geist Mono uppercase com `--vm-tracking-label`

---

## 5. Grid e Espaçamentos

### Grid

```
/* Containers */
--vm-container-sm:  640px
--vm-container-md:  768px
--vm-container-lg:  1024px
--vm-container-xl:  1280px
--vm-container-2xl: 1440px   /* Máximo do site */

/* Grid padrão */
--vm-cols:    12
--vm-gap:     1.5rem    /* 24px entre colunas */
--vm-gutter:  1.5rem    /* Lateral — mobile */
--vm-gutter-md: 2.5rem  /* Lateral — tablet */
--vm-gutter-xl: 4rem    /* Lateral — desktop */
```

### Escala de Espaçamento (base 4px)

```
--vm-space-1:   0.25rem   /*  4px */
--vm-space-2:   0.5rem    /*  8px */
--vm-space-3:   0.75rem   /* 12px */
--vm-space-4:   1rem      /* 16px */
--vm-space-5:   1.25rem   /* 20px */
--vm-space-6:   1.5rem    /* 24px */
--vm-space-8:   2rem      /* 32px */
--vm-space-10:  2.5rem    /* 40px */
--vm-space-12:  3rem      /* 48px */
--vm-space-16:  4rem      /* 64px */
--vm-space-20:  5rem      /* 80px */
--vm-space-24:  6rem      /* 96px */
--vm-space-32:  8rem      /* 128px */
--vm-space-40:  10rem     /* 160px */
--vm-space-48:  12rem     /* 192px */
```

### Ritmo Vertical entre Seções

| Tamanho de seção | Mobile | Desktop |
|------------------|--------|---------|
| Seções padrão | `--vm-space-20` (80px) | `--vm-space-40` (160px) |
| Seções de impacto (Hero, CTA Final) | Fullscreen | Fullscreen |
| Micro-espaço interno | `--vm-space-8` | `--vm-space-12` |

### Breakpoints

```
--vm-bp-sm:  480px
--vm-bp-md:  768px
--vm-bp-lg:  1024px
--vm-bp-xl:  1280px
--vm-bp-2xl: 1440px
```

Mobile-first: CSS escrito do menor para o maior breakpoint.

---

## 6. Sistema de Motion

### Filosofia

Três bibliotecas, responsabilidades separadas — sem sobreposição:

| Biblioteca | Responsabilidade | Não toca em |
|------------|-----------------|-------------|
| **Lenis** | Scroll suave, RAF loop | Animações de conteúdo |
| **GSAP + ScrollTrigger** | Scroll-based animations, timelines, storytelling | Mount/exit de componente |
| **Framer Motion** | Mount/exit, hover, layout, accordion, modal | Scroll, parallax |

### Tokens de Motion

```css
/* Durações */
--vm-dur-instant:    80ms    /* Micro feedback (hover icon) */
--vm-dur-fast:       150ms   /* Hover states, focus */
--vm-dur-normal:     300ms   /* Transições de estado padrão */
--vm-dur-medium:     500ms   /* Modais, drawers */
--vm-dur-slow:       800ms   /* Reveals de seção */
--vm-dur-cinematic:  1200ms  /* Animações de impacto */
--vm-dur-intro:      3500ms  /* Intro total */

/* Easings */
--vm-ease-out:       cubic-bezier(0, 0, 0.2, 1)
--vm-ease-in:        cubic-bezier(0.4, 0, 1, 1)
--vm-ease-inout:     cubic-bezier(0.4, 0, 0.2, 1)
--vm-ease-smooth:    cubic-bezier(0.16, 1, 0.3, 1)   /* Expo out — entradas premium */
--vm-ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1)
--vm-ease-linear:    linear                            /* Scrub de scroll */
```

### Configuração do Lenis

```
Opções:
  duration: 1.4
  easing: exponential ease out
  orientation: vertical
  gestureOrientation: vertical
  smoothWheel: true
  wheelMultiplier: 1
  touchMultiplier: 2
  infinite: false

Integração com GSAP:
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
```

Lenis como `LenisProvider` no `app/layout.tsx`. Contexto disponível via `useLenis()`.

### Configuração GSAP

```
Plugins registrados globalmente (uma vez, em lib/gsap/register.ts):
  - ScrollTrigger
  - SplitText (plugin premium — avaliar licença)
  - CustomEase

ScrollTrigger defaults:
  markers: false (dev apenas)
  scroller: body (Lenis não precisa de scroller customizado)
  fastScrollEnd: true
  preventOverlaps: true

Refresh automático:
  ScrollTrigger.refresh() após:
    - Fontes carregadas (document.fonts.ready)
    - Imagens críticas decodificadas
    - Intro finalizada
    - Window resize (debounced 200ms)
```

### Presets GSAP Reutilizáveis (`lib/gsap/presets.ts`)

| Preset | Descrição | Parâmetros |
|--------|-----------|-----------|
| `revealLine` | Mask reveal de linha de texto de baixo para cima | `{ el, delay?, duration? }` |
| `fadeUp` | Fade + translateY(-20px) para 0 | `{ el, delay?, stagger? }` |
| `fadeIn` | Apenas opacity 0 → 1 | `{ el, delay? }` |
| `scaleIn` | Scale 0.92 → 1 com fade | `{ el, delay? }` |
| `drawLine` | SVG stroke-dashoffset reveal | `{ el, trigger? }` |
| `counterUp` | Número animado de 0 até valor | `{ el, value, duration? }` |
| `parallaxY` | Parallax vertical vinculado ao scroll | `{ el, speed, trigger }` |
| `staggerReveal` | revealLine em grupo com stagger | `{ els, stagger?, delay? }` |

### prefers-reduced-motion

Todo componente de animação checa `useReducedMotion()`. Quando `true`:
- GSAP: `gsap.set()` em vez de `gsap.to()` (aplica estado final direto)
- Framer Motion: `transition: { duration: 0 }`
- CSS: `@media (prefers-reduced-motion: reduce)` desativa todas as transições

---

## 7. Componentes Reutilizáveis

### WhatsAppButton

Variantes: `primary`, `secondary`, `ghost`, `float`

Props:
- `section`: identificador da seção (para UTM e mensagem)
- `size`: `sm | md | lg`
- `variant`: define visual
- `className`: extensível

Comportamento:
- Gera URL via `useWhatsApp(section)` — injeta UTM e mensagem pré-preenchida
- Dispara evento GA4 `click_whatsapp` com `section` como propriedade
- `target="_blank" rel="noopener noreferrer"`
- Loading state: spinner + disable durante 500ms após clique (evita duplo toque)

### SplitText / RevealLine

Wrapper sobre GSAP SplitText (ou implementação manual por span de linha).

- Divide o texto em linhas
- Cada linha em container `overflow: hidden`
- GSAP anima cada linha de `y: 100%` para `y: 0` com stagger
- Respeita `prefers-reduced-motion`
- Fallback quando SplitText indisponível: fade simples

### AnimatedCounter

- Usa `useIntersection` para triggar
- GSAP `counterUp` preset
- Formato: `{ value, suffix?, prefix?, duration? }`
- Exemplo: `{ value: 80, suffix: "%" }` → anima de 0 a 80%

### SectionWrapper

Container padrão para todas as seções:
- `max-width: var(--vm-container-2xl)`
- Padding horizontal por breakpoint
- `id` para anchor navigation
- `aria-label` para screen readers
- `data-section` para analytics

### ScrollReveal

HOC com `useIntersection`. Quando o elemento entra no viewport:
- Aplica animação definida via prop (`fadeUp | fadeIn | scaleIn`)
- Uma vez só — não reverte ao sair
- `threshold`: 0.15 por padrão
- Respeita `prefers-reduced-motion`

### VideoPlayer

Wrapper sobre `<video>`:
- `autoPlay muted loop playsInline` para hero/intro
- `poster` obrigatório
- `preload="none"` para vídeos abaixo da dobra
- `preload="auto"` para hero (crítico)
- Lazy init via IntersectionObserver para vídeos below-fold
- Pausa quando `document.hidden === true`

### BeforeAfterSlider

- Drag/touch-enabled
- CSS clip-path ou posicionamento de duas imagens sobrepostas
- Handle centralizado com indicador visual
- Acessível: keyboard left/right para mover o handle
- `aria-label="Comparação antes e depois"`

### ProjectModal

- Framer Motion AnimatePresence
- Focus trap enquanto aberto
- `Escape` para fechar
- `aria-modal="true"`, `role="dialog"`
- Scroll interno se conteúdo exceder viewport
- Overlay com blur sutil no fundo

---

## 8. Component Tree

```
app/layout.tsx
  └── LenisProvider
        └── GSAPProvider (register plugins)
              └── body
                    ├── Header
                    │     ├── Logo
                    │     ├── NavDesktop
                    │     │     └── NavLink (×6)
                    │     ├── HeaderCTA → WhatsAppButton[header]
                    │     └── NavMobile (hamburger drawer)
                    │
                    ├── main
                    │     ├── Intro (Suspense boundary)
                    │     │     ├── IntroVideo
                    │     │     ├── IntroLogo
                    │     │     ├── IntroTagline
                    │     │     └── IntroSkip
                    │     │
                    │     ├── Hero
                    │     │     ├── HeroBackground
                    │     │     │     └── VideoPlayer[hero]
                    │     │     ├── HeroContent
                    │     │     │     ├── SectionLabel[eyebrow]
                    │     │     │     ├── HeroHeadline → SplitText
                    │     │     │     ├── HeroSubheadline
                    │     │     │     ├── WhatsAppButton[hero] (primary)
                    │     │     │     └── Button[secondary] (anchor)
                    │     │     └── HeroScrollHint
                    │     │
                    │     ├── FutureConstruction
                    │     │     ├── StoryScene (×5)
                    │     │     │     ├── SceneImage → next/image
                    │     │     │     └── SceneText → RevealLine
                    │     │     └── StoryProgress
                    │     │
                    │     ├── WhatIsSteelFrame
                    │     │     ├── SectionLabel
                    │     │     ├── SectionTitle → SplitText
                    │     │     ├── SectionBody
                    │     │     ├── WallDiagram → SVG animado
                    │     │     │     └── LayerLabel (×6)
                    │     │     └── SteelFrameStat → AnimatedCounter
                    │     │
                    │     ├── HowItWorks
                    │     │     ├── SectionLabel + SectionTitle
                    │     │     └── ProcessTimeline
                    │     │           └── ProcessStep (×6)
                    │     │                 ├── StepNumber
                    │     │                 ├── StepImage → next/image
                    │     │                 └── StepContent
                    │     │
                    │     ├── Comparison
                    │     │     ├── SectionTitle
                    │     │     ├── ComparisonTable (desktop)
                    │     │     │     └── ComparisonRow (×11)
                    │     │     ├── ComparisonCards (mobile)
                    │     │     └── ImpactStat
                    │     │
                    │     ├── Benefits
                    │     │     ├── SectionTitle
                    │     │     └── BenefitGrid
                    │     │           └── BenefitCard (×6)
                    │     │                 ├── Icon
                    │     │                 ├── BenefitTitle
                    │     │                 └── BenefitText
                    │     │
                    │     ├── Projects
                    │     │     ├── SectionTitle
                    │     │     ├── ProjectFilter
                    │     │     ├── ProjectGrid
                    │     │     │     └── ProjectCard (×n) → next/image
                    │     │     └── ProjectModal (AnimatePresence)
                    │     │
                    │     ├── Drywall
                    │     │     ├── SectionLabel + SectionTitle
                    │     │     ├── SectionBody + FeatureList
                    │     │     ├── BeforeAfterSlider
                    │     │     └── WhatsAppButton[drywall]
                    │     │
                    │     ├── MetalStructures
                    │     │     ├── SectionLabel + SectionTitle
                    │     │     ├── StructureShowcase → next/image
                    │     │     └── WhatsAppButton[metal]
                    │     │
                    │     ├── Differentials
                    │     │     ├── SectionTitle
                    │     │     └── DifferentialItem (×6) → ScrollReveal
                    │     │
                    │     ├── FAQ
                    │     │     ├── FAQSchema (JSON-LD)
                    │     │     ├── SectionTitle
                    │     │     ├── WhatsAppButton[faq-top]
                    │     │     ├── FAQItem (×7) → AnimatePresence
                    │     │     └── WhatsAppButton[faq-bottom]
                    │     │
                    │     ├── FinalCTA
                    │     │     ├── SectionTitle → SplitText
                    │     │     ├── SectionSubtitle
                    │     │     ├── WhatsAppButton[final] (xl)
                    │     │     └── SocialLinks
                    │     │
                    │     └── Contact
                    │           ├── SectionTitle
                    │           ├── ContactForm
                    │           │     ├── FieldName
                    │           │     ├── FieldPhone
                    │           │     ├── FieldMessage
                    │           │     └── SubmitButton
                    │           └── ContactInfo
                    │                 ├── WhatsAppLink
                    │                 ├── InstagramLink
                    │                 └── LocationText
                    │
                    ├── Footer
                    │     ├── FooterLogo
                    │     ├── FooterNav (4 grupos)
                    │     ├── FooterContact
                    │     └── FooterLegal
                    │
                    └── WhatsAppFloat (mobile only, sticky)
```

---

## 9. Estratégia de Vídeos

### Hierarquia de Carregamento

```
Prioridade 1 (crítico — carrega com a página):
  intro-poster.jpg         Placeholder até o vídeo estar pronto
  hero-poster.jpg          LCP — fetchpriority="high"
  hero-poster-mobile.jpg   Versão mobile do poster

Prioridade 2 (hero vídeo — após LCP):
  hero.mp4                 Loop de fundo — autoplay muted
  hero-mobile.mp4          Versão menor ou omitida (só poster)

Prioridade 3 (intro — primeiro render):
  intro.mp4                Carrega em paralelo ao hero

Prioridade 4 (lazy — on demand):
  comparison.mp4           Seção comparativa
  project-[slug].mp4       Vídeos individuais de projeto (no modal)
```

### Especificações Técnicas

| Vídeo | Resolução | Codec | Max Size | Audio | Fallback |
|-------|-----------|-------|----------|-------|---------|
| intro.mp4 | 1920×1080 | H.264 | 3MB | Nenhum | intro-poster.jpg |
| hero.mp4 | 1920×1080 | H.264 | 8MB | Nenhum | hero-poster.jpg |
| hero-mobile.mp4 | 828×1792 | H.264 | 3MB | Nenhum | hero-poster-mobile.jpg |
| comparison.mp4 | 1280×720 | H.264 | 5MB | Nenhum | Imagem estática |

**Compressão:** FFmpeg com `crf=28`, `preset=slow`, `movflags=+faststart`

`+faststart` é obrigatório — faz o vídeo começar a tocar antes de baixar completamente.

### Comportamento por Dispositivo

| Dispositivo | Intro | Hero | Demais |
|-------------|-------|------|--------|
| Desktop moderno | intro.mp4 | hero.mp4 | lazy |
| Mobile iOS | intro.mp4 ou poster | hero-poster-mobile.jpg | lazy |
| Mobile Android | intro.mp4 ou poster | hero-poster-mobile.jpg | lazy |
| `prefers-reduced-motion` | só poster | só poster | desabilitado |
| Low-end detection | só poster | só poster | desabilitado |

**Low-end detection:** `navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 2`

### Pausa automática

Todos os vídeos em loop pausam quando `document.visibilityState === "hidden"` via Page Visibility API. Retomam ao voltar.

---

## 10. Estratégia de Imagens

### next/image em todas as imagens de conteúdo

- `fill` com `object-fit: cover` para imagens de fundo
- `width` + `height` explícitos para imagens de conteúdo (evita CLS)
- `placeholder="blur"` + `blurDataURL` gerado no build para imagens críticas
- `sizes` correto por contexto (exemplo: `"(max-width: 768px) 100vw, 50vw"`)

### Prioridade de Carregamento

```
priority={true}:   hero-poster, intro-poster, primeiros 3 ProjectCards
loading="lazy":    Todas as demais imagens
decoding="async":  Padrão no next/image
fetchPriority:     "high" para hero poster (via priority prop)
```

### Formatos e Otimização

- next/image serve WebP automaticamente para browsers suportados (99%+)
- Fallback JPEG automático
- `quality={85}` por padrão; `quality={70}` para galeria de projetos
- Imagens de projeto: gerar 3 tamanhos (400w, 800w, 1200w)

### Placeholders

```
Imagens críticas (hero, intro):    blurDataURL gerado estaticamente
Imagens de projeto:                Skeleton com pulse animation (--vm-surface)
Imagens de processo:               blurDataURL gerado estaticamente
```

---

## 11. Performance e Bundle Strategy

### Metas

| Métrica | Meta | Máximo aceitável |
|---------|------|-----------------|
| LCP | < 1.8s | < 2.5s |
| INP | < 100ms | < 200ms |
| CLS | 0 | < 0.05 |
| FCP | < 1.2s | < 1.8s |
| Lighthouse mobile | ≥ 90 | ≥ 85 |
| Lighthouse desktop | ≥ 95 | — |
| JS inicial (gzipped) | < 90KB | < 150KB |
| JS total (gzipped) | < 250KB | < 400KB |

### Bundle Strategy

**Chunks automáticos do Next.js:**
- Framework chunk: React, ReactDOM (sempre em cache)
- Shared chunk: módulos usados em 3+ componentes
- Page chunk: código específico da home

**Chunks manuais (dynamic imports):**

```
lazy("ProjectModal")         → carregado na primeira abertura de projeto
lazy("Intro")                → carregado imediatamente mas em chunk separado
lazy("FutureConstruction")   → below fold
lazy("WhatIsSteelFrame")     → below fold
lazy("HowItWorks")           → below fold
lazy("Comparison")           → below fold
lazy("Projects")             → below fold
lazy("BeforeAfterSlider")    → inside Drywall section
lazy("ProjectModal")         → on demand
```

**Three.js (se usado para intro 3D):**
```
import("three")              → chunk isolado ~160KB gzipped
                               Carregado somente se vídeo falhar e dispositivo suporta
```

**GSAP:**
```
Carregado como shared chunk — todas as seções que usam ScrollTrigger compartilham
gsap core: ~25KB gzipped
ScrollTrigger: ~15KB gzipped
SplitText: ~8KB gzipped (avaliar licença)
```

**Framer Motion:**
```
"framer-motion"              → shared chunk ~30KB gzipped
                               Usado em accordion, modal, hover cards
```

**Lenis:**
```
~5KB gzipped, carregado no root layout (crítico para smooth scroll desde o início)
```

### Estratégia de Carregamento (Loading Waterfall)

```
T=0ms     HTML inicial, CSS crítico inlined
T=0ms     Fontes preconnect (Google Fonts CDN)
T=100ms   Fontes WOFF2 iniciando download
T=100ms   hero-poster.jpg iniciando (fetchPriority=high)
T=200ms   React hidratação inicial
T=300ms   Lenis inicializado
T=400ms   GSAP plugins registrados
T=500ms   hero-poster.jpg decodificado → LCP
T=800ms   Fontes carregadas → ScrollTrigger.refresh()
T=1000ms  Intro.mp4 iniciando (parallel ao hero)
T=2000ms  Below-fold sections começam lazy load (IntersectionObserver)
T=3500ms  Intro termina → Hero visível → hero.mp4 inicia
```

### Técnicas de Performance

**Critical CSS:** Next.js injeta automaticamente CSS do render inicial.

**Preload hints (`app/layout.tsx`):**
```
<link rel="preload" href="/fonts/bebas-neue.woff2" as="font" crossOrigin />
<link rel="preload" href="/images/hero/hero-poster.jpg" as="image" fetchPriority="high" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
```

**Image Intersection Lazy Init:**
Vídeos abaixo da dobra: `preload="none"`, iniciam com IntersectionObserver a 200px de distância.

**will-change:**
Aplicado somente durante animação ativa: adicionado no início, removido ao final via GSAP `onComplete`.

**Font Subsetting:**
Inter: subset=latin. Bebas Neue: subset=latin (apenas uppercase A-Z, 0-9, pontuação básica).

---

## 12. Acessibilidade

### Skip Link

Primeiro elemento do DOM: `<a href="#main-content" className="sr-only focus:not-sr-only">Pular para conteúdo principal</a>`

### Focus Management

- `ProjectModal`: focus trap ativo; `Escape` fecha; foco retorna ao `ProjectCard` que abriu
- `NavMobile`: focus trap no drawer; `Escape` fecha; foco retorna ao botão hamburger
- `FAQItem`: foco no conteúdo expandido após abertura do accordion

### ARIA

| Componente | ARIA |
|-----------|------|
| Header nav | `role="navigation" aria-label="Navegação principal"` |
| Mobile menu button | `aria-expanded aria-controls="mobile-nav"` |
| ProjectModal | `role="dialog" aria-modal="true" aria-labelledby="modal-title"` |
| FAQItem (button) | `aria-expanded aria-controls="faq-answer-{id}"` |
| ComparisonTable | `<th scope="col/row">` correto |
| BeforeAfterSlider | `role="slider" aria-valuemin aria-valuemax aria-valuenow` |
| VideoPlayer | `aria-label="Vídeo de fundo — [descrição]"` |
| WhatsAppFloat | `aria-label="Abrir WhatsApp"` |

### Imagens

- Imagens de conteúdo: `alt` descritivo e específico
- Imagens decorativas: `alt=""`
- Imagens de projeto: `alt="[tipo] em Steel Frame — [cidade] — Veritas Metal"`

### Contraste

- Texto sobre fundo escuro: mínimo 4.5:1 — alvo 7:1
- Cobre sobre charcoal: verificar e ajustar se necessário (copper claro pode precisar de ajuste)
- Texto cinza (`--vm-text-secondary`): verificar 4.5:1 sobre `--vm-charcoal`

### Teclado

- Toda ação disponível via teclado
- Ordem de foco lógica (nunca `tabindex > 1`)
- Focus ring: `outline: 2px solid var(--vm-copper); outline-offset: 3px`

### prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

GSAP e Framer Motion verificam via `useReducedMotion()` e aplicam estados finais imediatamente.

---

## 13. SEO Técnico

### Metadata (Next.js generateMetadata)

```
Home (/):
  title: "Steel Frame no Oeste do Paraná | Veritas Metal — Marechal Cândido Rondon"
  description: "Especialistas em Steel Frame, Drywall e Estruturas Metálicas.
                Construção inteligente até 50% mais rápida. Solicite seu orçamento."
  openGraph:
    title: "Steel Frame no Oeste do Paraná | Veritas Metal"
    description: [mesma]
    images: [{ url: "/og/og-image.jpg", width: 1200, height: 630 }]
    locale: "pt_BR"
    type: "website"
  twitter:
    card: "summary_large_image"
  robots:
    index: true, follow: true
  alternates:
    canonical: "https://[dominio]"
```

### JSON-LD (Estruturado)

**`LocalBusiness` — app/layout.tsx:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Veritas Metal",
  "description": "Especialistas em Steel Frame, Drywall e Estruturas Metálicas no Oeste do Paraná",
  "telephone": "+5545920022510",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Marechal Cândido Rondon",
    "addressRegion": "PR",
    "addressCountry": "BR"
  },
  "sameAs": ["https://instagram.com/veritas_metal"],
  "url": "https://[dominio]",
  "priceRange": "$$"
}
```

**`FAQPage` — components/sections/FAQ/FAQSchema.tsx:**
Cada pergunta/resposta como `@type: Question` com `acceptedAnswer`.

### Heading Hierarchy

```
h1: "Construção Inteligente. Engenharia Moderna." (Hero — único h1)
h2: "O Que É Steel Frame"
h2: "Como Funciona"
h2: "Steel Frame x Construção Tradicional"
h2: "Benefícios do Steel Frame"
h2: "Projetos Entregues"
h2: "Drywall em Marechal Cândido Rondon"
h2: "Estruturas Metálicas no Oeste do Paraná"
h2: "Por Que a Veritas Metal"
h2: "Perguntas Frequentes sobre Steel Frame"
h2: "Pronto para Construir de Forma Mais Inteligente?"
h2: "Fale com a Veritas Metal"
  h3: Usado dentro de cada seção quando necessário
```

### Sitemap e Robots

`app/sitemap.ts` gerado dinamicamente. `app/robots.ts` com:
```
Allow: /
Disallow: /api/
Sitemap: https://[dominio]/sitemap.xml
```

---

## 14. Navegação e Fluxo

### Fluxo de Navegação Principal

```
Visitante chega → Intro (3–5s) → Hero
                                    ↓ scroll ou CTA secundário
                         O Futuro da Construção
                                    ↓
                          O Que É Steel Frame
                                    ↓
                             Como Funciona
                                    ↓
                    Steel Frame x Construção Tradicional
                                    ↓
                               Benefícios
                                    ↓ CTA intercalado
                               Projetos
                                    ↓
                               Drywall
                                    ↓
                         Estruturas Metálicas
                                    ↓
                        Diferenciais Veritas Metal
                                    ↓
                                  FAQ
                                    ↓ CTA final
                               CTA Final
                                    ↓ alternativo
                               Contato
```

### Anchor Navigation

Todos os IDs de seção:
```
#hero                  → Hero
#steel-frame           → O Que É Steel Frame
#como-funciona         → Como Funciona
#projetos              → Projetos
#drywall               → Drywall
#estruturas            → Estruturas Metálicas
#faq                   → FAQ
#contato               → Contato e Rodapé
```

O Header sticky faz scroll suave via Lenis para os anchors: `lenis.scrollTo("#steel-frame", { duration: 1.2, easing: ... })`

### Mobile Navigation

Hamburger abre drawer lateral (direita). Itens:
```
Steel Frame
Como Funciona
Projetos
Drywall
Estruturas Metálicas
FAQ
[Botão WhatsApp — destaque cobre]
```

---

## 15. Estratégia de CTAs e Conversão

### Mapa de CTAs por Seção

| Seção | CTA Primário | Link | Mensagem WhatsApp |
|-------|-------------|------|------------------|
| Header (sticky) | Solicitar Orçamento | WhatsApp | "Olá! Vim pelo site e gostaria de solicitar um orçamento." |
| Hero | Solicitar Orçamento | WhatsApp | "Olá! Tenho interesse em construção Steel Frame." |
| Hero | Conhecer o Steel Frame | #steel-frame | — |
| WhatIsSteelFrame | Entender como funciona | #como-funciona | — |
| HowItWorks | Solicitar Orçamento | WhatsApp | "Olá! Entendi o processo e gostaria de um orçamento." |
| Comparison | Ver projetos entregues | #projetos | — |
| Benefits | Ver projetos | #projetos | — |
| ProjectCard | Quero um projeto assim | WhatsApp | "Olá! Vi um projeto e gostaria de saber mais." |
| Drywall | Orçamento de Drywall | WhatsApp | "Olá! Tenho interesse em Drywall." |
| MetalStructures | Orçamento Comercial | WhatsApp | "Olá! Preciso de orçamento para estrutura metálica." |
| FAQ top | Tirar Dúvidas | WhatsApp | "Olá! Tenho dúvidas sobre Steel Frame." |
| FAQ bottom | Solicitar Orçamento | WhatsApp | "Olá! Li as perguntas frequentes e quero um orçamento." |
| FinalCTA | Falar com a Veritas Metal | WhatsApp | "Olá! Li tudo sobre Steel Frame e quero conversar sobre meu projeto." |
| WhatsAppFloat | — | WhatsApp | "Olá! Vim pelo site da Veritas Metal." |

### UTM Tags por Seção

```
Formato: ?utm_source=site&utm_medium=whatsapp&utm_campaign=orcamento&utm_content=[seção]

Exemplos:
  header:     &utm_content=header-sticky
  hero:       &utm_content=hero
  howItWorks: &utm_content=como-funciona
  drywall:    &utm_content=drywall
  faqTop:     &utm_content=faq-topo
  faqBottom:  &utm_content=faq-rodape
  finalCta:   &utm_content=cta-final
  float:      &utm_content=float-mobile
```

### Evento GA4 por Clique

```
eventName: "click_whatsapp"
parameters: {
  section: "hero" | "drywall" | ... ,
  variant: "primary" | "secondary" | "float",
  device: "mobile" | "desktop"
}
```

### Regras de CTA

- Um CTA primário por seção (cobre, preenchido)
- CTA secundário em ghost (mesma cor, sem fill)
- Nunca dois CTAs de peso igual na mesma seção
- Texto de botão: verbo ativo + resultado ("Solicitar Orçamento" nunca "Enviar")
- Hover: scale 1.02 + brilho sutil (150ms ease-out)
- Active: scale 0.98 (feedback de clique)
- Loading: spinner + disabled após clique

---

## 16. Seções da Home — Especificação Completa

---

### S01 — Header

**Objetivo:** Navegação e acesso permanente à conversão.
**Mensagem principal:** Veritas Metal — acesso rápido ao que importa.
**Emoção desejada:** Confiança, profissionalismo, presença.

**Componentes:** `Header`, `Logo`, `NavDesktop`, `NavMobile`, `WhatsAppButton[header]`

**Motion:**
- Estado inicial: background `transparent`
- Após 80px de scroll: `background: var(--vm-elevated)` + `backdrop-filter: blur(12px)` + `border-bottom: 1px solid var(--vm-border)`
- Transição: Framer Motion `animate` com duration 300ms ease-out
- Logo: scale sutil 100% → 90% após scroll (reduz levemente o peso visual)

**Assets:** Logo SVG (versão clara, duas variações: completa + ícone para mobile)

**SEO:** `<header role="banner">`, nav com `aria-label="Navegação principal"`, links são âncoras com `href="#id"`

**CTA:** "Solicitar Orçamento" — cobre, md size, sempre visível

**Mobile:** Logo + hamburger. WhatsAppButton separado no float global (não no header mobile).

**Desktop:** Logo à esquerda + nav central + CTA à direita.

**Requisitos técnicos:**
- `position: fixed; top: 0; z-index: 50`
- `scroll-y` detectado via `useScrollY()` com threshold de 80px
- Framer Motion para transição de background
- `will-change: background-color` durante scroll; removido quando parado

---

### S02 — Intro Cinematográfica

**Objetivo:** Impacto de marca antes de qualquer conteúdo. Comunicar premium.
**Mensagem principal:** Veritas Metal existe. É poderosa. É diferente.
**Emoção desejada:** Surpresa, admiração, antecipação.

**Componentes:** `Intro`, `IntroVideo`, `IntroLogo`, `IntroTagline`, `IntroSkip`

**Motion:**
- T=0: Tela preta
- T=200ms: IntroVideo inicia (fade in lento do vídeo)
- T=0→3000ms: vídeo da logo forjada em aço rodando
- T=2800ms: fade in da tagline "Construção Inteligente. Engenharia Moderna."
- T=3500ms: fade out de toda a intro → hero visível
- Skip: qualquer scroll ou clique → fade out imediato (300ms) → hero
- GSAP timeline orquestra tudo; skip cancela a timeline

**Assets:**
- `intro.mp4` (logo forjada em aço — vídeo pré-renderizado)
- `intro-poster.jpg` (frame final do vídeo — fallback e placeholder)
- Logo SVG para o fade final antes de fechar

**SEO:**
- `aria-hidden="true"` no vídeo decorativo
- `aria-label="Introdução Veritas Metal — pressione qualquer tecla para pular"` no container
- Conteúdo textual invisível para screen readers (conteúdo real está no Hero)

**CTA:** `IntroSkip` — texto "Pular intro" + ícone seta — aparece após 1s, canto inferior direito

**Mobile:** Mesmo comportamento. Vídeo menor (intro-mobile.mp4 ou fallback poster + animação CSS da logo)

**Desktop:** Fullscreen `100dvh`, centralizado

**Requisitos técnicos:**
- `position: fixed; inset: 0; z-index: 100`
- Remove do DOM após finalizar (unmount via `useState(introCompleted)`)
- Scroll bloqueado durante a intro via `lenis.stop()` / `lenis.start()`
- `preload="auto"` no vídeo (crítico para início imediato)
- Chunk isolado com `next/dynamic` (não bloqueia hidratação da home)

---

### S03 — Hero

**Objetivo:** Capturar em 5 segundos. Comunicar o que é a Veritas Metal. Primeiro CTA.
**Mensagem principal:** "Construção Inteligente. Engenharia Moderna."
**Emoção desejada:** Impacto, desejo, confiança, urgência calma.

**Componentes:** `Hero`, `HeroBackground`, `VideoPlayer[hero]`, `HeroContent`, `SectionLabel[eyebrow]`, `HeroHeadline`, `HeroSubheadline`, `WhatsAppButton[hero]`, `Button[secondary]`, `HeroScrollHint`

**Motion:**
- Após intro: hero entra com fade suave (500ms)
- Headline: `SplitText` — cada linha revela de baixo para cima com mask (stagger 0.08s por linha)
- Subheadline: fadeUp 400ms com delay de 600ms
- CTAs: fadeUp 400ms com delay de 900ms
- ScrollHint: pulse animation CSS em loop
- Video de fundo: parallax sutil via `ScrollTrigger` — move 15% mais lento que scroll
- Overlay: gradiente vertical `transparent → var(--vm-black)` na parte inferior

**Assets:**
- `hero.mp4` — loop de fundo (casa em Steel Frame, dramático, paleta escura)
- `hero-poster.jpg` — LCP, `fetchPriority="high"`, `priority={true}`
- `hero-poster-mobile.jpg` — crop vertical para mobile

**SEO:**
- `<section id="hero">` com `aria-label="Apresentação Veritas Metal"`
- **H1 único da página:** "Construção Inteligente. Engenharia Moderna."
- Eyebrow não é heading — `<p>` ou `<span>` com classe visual
- Subheadline em `<p>`

**CTA:**
- Primário: "Solicitar Orçamento" → WhatsApp — cobre, lg, acima da dobra
- Secundário: "Conhecer o Steel Frame" → `#steel-frame` — ghost, lg

**Mobile:**
- Poster estático (não vídeo) — performance
- Display `--vm-display-md` (48px)
- CTAs empilhados, largura total
- Overlay mais escuro para legibilidade

**Desktop:**
- Vídeo em loop
- Display `--vm-display-2xl` (144px) ou mínimo `--vm-display-xl` (96px)
- CTAs em linha
- Eyebrow visível acima do headline

**Requisitos técnicos:**
- `height: 100dvh` — usa `dvh` para mobile (exclui barra do browser)
- Vídeo: `autoPlay muted loop playsInline poster={...}`
- hero.mp4 inicia após intro completa (evento `onIntroComplete`)
- `prefers-reduced-motion`: video desabilitado, poster estático
- CLS: espaço reservado antes das fontes carregarem via `min-height`

---

### S04 — O Futuro da Construção

**Objetivo:** Criar abertura mental. Provocar reflexão antes de apresentar a solução.
**Mensagem principal:** "Por décadas, construímos da mesma forma. Isso está mudando."
**Emoção desejada:** Reconhecimento, curiosidade, receptividade à mudança.

**Componentes:** `FutureConstruction`, `StoryScene` (×5), `SceneImage`, `SceneText`, `StoryProgress`

**Motion:**
- Seção pinada (GSAP `ScrollTrigger pin: true`)
- 5 cenas reveladas progressivamente pelo scroll (scrub)
- Cada cena: fade in de imagem + reveal de texto por linha
- Progresso do scroll: barra horizontal em cobre no topo
- Duração total de pin: `100vh × 5 = 500vh` de scroll space
- Transição entre cenas: crossfade suave (não corte brusco)

**Assets:**
- 5 imagens (ver `public/images/sections/future/`)
- Textos das 5 cenas definidos no MASTER BRIEF

**SEO:**
- `<section aria-label="A evolução da construção">`
- `<h2>` invisível para screen readers mas semântico: "O Futuro da Construção"
- Imagens com `alt` descritivo mesmo sendo majoritariamente visuais

**CTA:** Nenhum CTA nesta seção. É de transição narrativa — leva organicamente para a próxima.

**Mobile:**
- Pin desabilitado (`gsap.matchMedia` — abaixo de 768px)
- Cenas como cards empilhados com scroll normal
- Fade entre cards via IntersectionObserver
- Texto acima da imagem para garantir legibilidade

**Desktop:**
- Pin ativo com 500vh de scroll space
- Layout fullscreen por cena
- Imagem à direita, texto à esquerda (ou sobreposto com overlay)

**Requisitos técnicos:**
- `gsap.matchMedia` para responsividade do ScrollTrigger
- Imagens com `loading="lazy"` mas preload via CSS background para as primeiras 2
- Pin via `ScrollTrigger({ pin: true, scrub: 1, snap: 1/4 })`

---

### S05 — O Que É Steel Frame

**Objetivo:** Definir e tornar o Steel Frame compreensível e desejável.
**Mensagem principal:** "Steel Frame: a estrutura que sustenta o futuro."
**Emoção desejada:** Entendimento, interesse, confiança técnica.

**Componentes:** `WhatIsSteelFrame`, `SectionLabel`, `SplitText[h2]`, `SectionBody`, `WallDiagram`, `LayerLabel` (×6), `SteelFrameStat`

**Motion:**
- H2: SplitText reveal por linha (GSAP, trigger no ScrollTrigger)
- Parágrafo: fadeUp (Framer Motion, trigger IntersectionObserver)
- WallDiagram: camadas aparecem sequencialmente (stagger 200ms cada) ao entrar no viewport
- LayerLabels: fade in com delay após a camada correspondente aparecer
- SteelFrameStat ("80% nos EUA"): AnimatedCounter ao entrar no viewport

**Assets:**
- `steel-frame-wall-diagram.svg` — diagrama explodido das 6 camadas da parede
- Alternativa: render 3D da parede como imagem estática com layers animados via CSS

**SEO:**
- `<h2>O Que É Steel Frame</h2>` — keyword principal
- Texto do diagrama acessível via `aria-label` ou `<desc>` no SVG

**CTA:** "Entender como funciona" — ghost, sm, âncora para `#como-funciona`

**Mobile:**
- Coluna única: texto acima, diagrama abaixo
- Diagrama ocupa 100vw com scroll horizontal interno se necessário
- Labels do diagrama em modal ao tocar em cada camada

**Desktop:**
- 2 colunas (8/12 + 4/12 ou 6/12 + 6/12)
- Texto à esquerda, diagrama à direita sticky durante o scroll do texto

**Requisitos técnicos:**
- WallDiagram em SVG para animação via GSAP (`gsap.from(".layer-*", { scaleY: 0, stagger: 0.2 })`)
- `useIntersection` hook para triggar diagrama quando 30% visível
- Stat com `AnimatedCounter` (0 → 80, sufixo "%")

---

### S06 — Como Funciona

**Objetivo:** Mostrar o processo completo com clareza e velocidade.
**Mensagem principal:** "6 etapas precisas. Do terreno à entrega."
**Emoção desejada:** Confiança, clareza, antecipação positiva.

**Componentes:** `HowItWorks`, `SectionLabel`, `SplitText[h2]`, `ProcessTimeline`, `ProcessStep` (×6), `StepNumber`, `StepImage`, `StepContent`, `TimelineConnector`

**Motion:**
- Linha da timeline: SVG `stroke-dashoffset` draw animation vinculada ao scroll
- Cada step: entra da direita (alternado esquerda/direita) com ScrollTrigger
- StepNumber: scale 0 → 1 com spring (Framer Motion)
- StepImage: reveal com clip-path de baixo para cima (GSAP)
- Stagger entre steps: controlado pelo scroll (não tempo)

**Assets:**
- 6 fotos de processo (`public/images/process/01-project.jpg` ... `06-finish.jpg`)
- SVG de linha da timeline

**SEO:**
- `<ol>` para a timeline (lista ordenada = processo sequencial)
- `<h3>` para cada etapa
- `<h2>Como Funciona o Steel Frame</h2>`

**CTA:** Após última etapa — "Uma residência de 100m² pronta em 90 a 120 dias." + WhatsAppButton[howItWorks]

**Mobile:**
- Timeline vertical (single column)
- Imagem acima do texto por step
- Linha da timeline à esquerda como indicador visual simples

**Desktop:**
- Timeline com alternância esquerda/direita (imagem ↔ texto)
- Linha central conectando todos os steps
- Steps revelados por scroll

**Requisitos técnicos:**
- `next/image` com `sizes="(max-width: 768px) 100vw, 50vw"` por step
- Timeline SVG line: `getTotalLength()` para calcular dasharray inicial
- ScrollTrigger com `start: "top 70%"` por step

---

### S07 — Steel Frame x Construção Tradicional

**Objetivo:** Eliminar a comparação mental desfavorável ao Steel Frame.
**Mensagem principal:** "Os números não mentem. A escolha é clara."
**Emoção desejada:** Convicção, alívio de dúvida, certeza.

**Componentes:** `Comparison`, `SplitText[h2]`, `ComparisonTable` (desktop), `ComparisonCards` (mobile), `ComparisonRow` (×11), `ImpactStat`

**Motion:**
- H2: SplitText reveal
- Linhas da tabela: fade in com stagger via ScrollTrigger (cada linha após a anterior)
- Células positivas (Steel Frame): verde sutil após fade (Framer Motion)
- ImpactStat abaixo: AnimatedCounter + fadeUp

**Assets:** Nenhum asset externo — tabela de dados.

**SEO:**
- `<table>` acessível com `<caption>Comparativo: Steel Frame versus Alvenaria Convencional</caption>`
- `<th scope="col">` para headers de coluna
- H2: "Steel Frame x Construção Tradicional"

**CTA:** "Ver projetos entregues" — ghost — âncora `#projetos`

**Mobile:**
- Tabela substituída por cards (um por critério)
- Cada card: ícone Steel Frame ✓ verde vs alvenaria indicador
- Scroll vertical simples

**Desktop:**
- Tabela completa com 3 colunas (Critério | Steel Frame | Alvenaria)
- `position: sticky` no header da tabela
- Linha com destaque cobre para Velocidade (critério principal)

**Requisitos técnicos:**
- `useMediaQuery("(max-width: 768px)")` para alternar Table ↔ Cards
- Dados centralizados em `lib/projects/data.ts` → `comparisonData[]`

---

### S08 — Benefícios

**Objetivo:** Consolidar a decisão emocional e racional.
**Mensagem principal:** "6 razões para construir diferente."
**Emoção desejada:** Desejo, certeza, entusiasmo.

**Componentes:** `Benefits`, `SplitText[h2]`, `BenefitGrid`, `BenefitCard` (×6), `Icon`, `BenefitTitle`, `BenefitText`

**Motion:**
- Cards: Framer Motion `staggerChildren` — aparecem em grid com delay de 0.1s entre cada
- Hover no card: scale 1.03 + border cobre (150ms)
- Ícone no card: rotate 0 → 360deg no hover (360ms, ease-out)
- Trigger: IntersectionObserver quando grid é 20% visível

**Assets:**
- 6 ícones SVG inline (Velocidade, Precisão, Conforto Térmico, Acústico, Sustentabilidade, Durabilidade)
- Estilo: linha fina (1.5px stroke), cobre, 32×32px

**SEO:**
- H2: "Benefícios do Steel Frame"
- Cada card como `<article>` com `<h3>`

**CTA:** "Ver projetos realizados" — ghost — âncora `#projetos`

**Mobile:**
- Grid 2 colunas
- Cards menores, ícone acima do título

**Desktop:**
- Grid 3 colunas
- Cards com padding generoso

**Requisitos técnicos:**
- Cards como Server Component (sem interação complexa — Framer Motion client wrapper)
- Ícones como componentes SVG inline para evitar requisição extra

---

### S09 — Projetos

**Objetivo:** Prova social visual. Converter a confiança em desejo concreto.
**Mensagem principal:** "Projetos entregues no Oeste do Paraná."
**Emoção desejada:** Confiança ("isso é real"), desejo ("quero igual"), urgência.

**Componentes:** `Projects`, `SectionLabel`, `SplitText[h2]`, `ProjectFilter`, `ProjectGrid`, `ProjectCard` (×n), `ProjectModal`

**Motion:**
- Cards: `staggerReveal` com ScrollTrigger quando grid visível
- Filtro: cards fazem layout animation (Framer Motion `layoutId`) ao filtrar
- Card hover: imagem scale 1.08 (overflow hidden) + overlay cobre sutil
- Modal: Framer Motion AnimatePresence — scale 0.9 → 1 + fade

**Assets:**
- `public/images/projects/[slug]/cover.jpg` para cada projeto
- `public/images/projects/[slug]/interior-*.jpg` para modal
- Vídeo opcional por projeto (modal)

**SEO:**
- `<section id="projetos" aria-label="Portfólio de projetos Veritas Metal">`
- H2: "Projetos Entregues"
- Alt text em cada imagem: "Casa em Steel Frame de Xm² — Marechal Cândido Rondon — Veritas Metal"

**CTA:**
- Por card: "Quero um projeto assim" → WhatsApp[projects]
- No modal: mesmo CTA, maior

**Mobile:**
- 1 coluna de cards
- Sem filtro ou filtro simplificado (2 opções: Residencial / Comercial)
- Modal fullscreen

**Desktop:**
- 3 colunas, masonry ou grid uniforme
- Filtro com 3 opções: Residencial · Comercial · Reforma
- Modal com galeria interna

**Requisitos técnicos:**
- `next/image` com `placeholder="blur"` em todos os cards
- Dados de projeto em `lib/projects/data.ts` (array estático, sem banco)
- Modal com `createPortal` para o body
- Focus trap via `focus-trap-react` ou implementação custom

---

### S10 — Drywall

**Objetivo:** Capturar demanda por reforma, divisória e interiores.
**Mensagem principal:** "Ambientes que você repensa. Paredes que você move."
**Emoção desejada:** Liberdade, praticidade, modernidade.

**Componentes:** `Drywall`, `SectionLabel`, `SplitText[h2]`, `SectionBody`, `FeatureList`, `BeforeAfterSlider`, `WhatsAppButton[drywall]`

**Motion:**
- Texto: fadeUp padrão via ScrollReveal
- BeforeAfterSlider: handle drag com Framer Motion drag
- Slider inicial: posição 50% (centralizado)
- Labels "Antes" / "Depois" em fade ao aproximar do respectivo lado

**Assets:**
- `public/images/sections/drywall/before.jpg`
- `public/images/sections/drywall/after.jpg`
- Mesmo ângulo, mesmo ambiente — antes e depois da reforma

**SEO:**
- H2: "Drywall em Marechal Cândido Rondon"
- Alt: "Ambiente antes da reforma com Drywall" e "Ambiente reformado com Drywall — Veritas Metal"

**CTA:** "Solicitar Orçamento de Drywall" → WhatsApp[drywall]

**Mobile:**
- Layout coluna única
- Slider antes/depois em fullwidth
- FeatureList com ícones à esquerda

**Desktop:**
- 2 colunas: texto à esquerda, slider à direita
- Slider com dimensões fixas (ex: 600×400px)

**Requisitos técnicos:**
- BeforeAfterSlider: `pointer-events` + `touch-action: none` para evitar conflito com scroll
- Slider com `useRef` para posição + Framer Motion `useDragControls`
- `aria-label` e controles keyboard no slider

---

### S11 — Estruturas Metálicas

**Objetivo:** Capturar demanda comercial e industrial.
**Mensagem principal:** "Escala industrial. Acabamento premium."
**Emoção desejada:** Poder, ambição, escala, competência técnica.

**Componentes:** `MetalStructures`, `SectionLabel`, `SplitText[h2]`, `StructureShowcase`, `FeatureGrid`, `WhatsAppButton[metal]`

**Motion:**
- Layout com imagem de fundo de galpão em parallax (GSAP ScrollTrigger)
- Texto em overlay com fade in progressivo
- FeatureGrid: cards menores com stagger

**Assets:**
- Imagem de galpão grande, dramática (câmera baixa, angular)
- Imagem de cobertura metálica
- 3–4 fotos de projetos comerciais

**SEO:**
- H2: "Estruturas Metálicas no Oeste do Paraná"
- Alt: "Galpão de estrutura metálica construído pela Veritas Metal"

**CTA:** "Solicitar Orçamento Comercial" → WhatsApp[metal]

**Mobile:**
- Imagem fullwidth no topo, conteúdo abaixo
- Layout vertical

**Desktop:**
- Imagem em parallax como fundo da seção (altura 60vh)
- Conteúdo posicionado sobre overlay escuro

**Requisitos técnicos:**
- Parallax via `gsap.to(imgEl, { yPercent: 20, ease: "none", scrollTrigger: { scrub: true } })`
- `overflow: hidden` no container para conter o parallax

---

### S12 — Diferenciais Veritas Metal

**Objetivo:** Justificar "por que Veritas Metal" e não qualquer outro executante.
**Mensagem principal:** "Somos a escolha certa. E este é o motivo."
**Emoção desejada:** Confiança, segurança, preferência.

**Componentes:** `Differentials`, `SplitText[h2]`, `DifferentialItem` (×6)

**Motion:**
- Items: GSAP stagger reveal da esquerda (translate -40px → 0, opacity 0 → 1)
- Cada item tem delay incremental: delay × index × 0.1s
- Linha indicadora cobre à esquerda de cada item: height 0 → 100% com delay

**Assets:** Nenhum. Seção text-based com ícone simples por item.

**SEO:**
- H2: "Por Que a Veritas Metal"
- Cada item como `<article>` com `<h3>`

**CTA:** Sem CTA próprio — flui para o FAQ naturalmente

**Mobile:**
- Lista vertical, fullwidth
- Linha cobre à esquerda com 4px de largura

**Desktop:**
- Grid 2 colunas ou lista single column com mais espaço

**Requisitos técnicos:**
- Server Component (sem interação — apenas texto e animação de entrada)
- ScrollTrigger com `start: "top 80%"` para trigger antes do item estar na tela

---

### S13 — FAQ

**Objetivo:** Eliminar as últimas objeções antes da decisão final.
**Mensagem principal:** "Suas dúvidas. Respondidas de forma direta."
**Emoção desejada:** Alívio, confiança, remoção de barreiras.

**Componentes:** `FAQ`, `FAQSchema`, `SectionLabel`, `SplitText[h2]`, `WhatsAppButton[faq-top]`, `FAQItem` (×7), `WhatsAppButton[faq-bottom]`

**Motion:**
- FAQ accordion: Framer Motion AnimatePresence com `height: 0 → auto`
- Ícone +/- no accordion: rotate 0 → 45deg ao expandir
- Smooth easing na abertura: `spring { stiffness: 300, damping: 30 }`

**Assets:** Nenhum. Text-based.

**SEO:**
- H2: "Perguntas Frequentes sobre Steel Frame"
- FAQPage JSON-LD injetado no `<head>` via `FAQSchema` component
- `<details>/<summary>` ou aria-accordion pattern
- Cada pergunta como `<h3>` dentro do item

**CTA:**
- Topo do FAQ: "Prefere tirar suas dúvidas direto? Fale conosco" → WhatsApp[faq-top]
- Final do FAQ: "Pronto para o próximo passo?" + WhatsAppButton[faq-bottom]

**Mobile:**
- Fullwidth accordion
- Padding interno generoso para touch

**Desktop:**
- Coluna única com max-width 800px centrado
- Mais espaço entre itens

**Requisitos técnicos:**
- `useId()` para ids únicos de aria-controls
- `FAQSchema` como Client Component (injeta script no head via `useEffect`)
- Dados do FAQ em `lib/projects/data.ts → faqData[]`

---

### S14 — CTA Final

**Objetivo:** Converter o visitante que leu tudo. O mais qualificado.
**Mensagem principal:** "Pronto para construir de forma mais inteligente?"
**Emoção desejada:** Clareza, urgência calma, chamado à ação.

**Componentes:** `FinalCTA`, `SplitText[h2]`, `SectionSubtitle`, `WhatsAppButton[final]`, `SocialLinks`

**Motion:**
- H2: SplitText reveal com velocidade mais lenta (cinematic feel)
- Background: imagem de projeto com parallax ou overlay animado
- Botão WhatsApp: pulse animation discreta em cobre após 2s de exibição
- Social links: fadeUp stagger

**Assets:**
- Background: foto de projeto de alto impacto (exterior de casa entregue)
- Overlay escuro com gradiente radial do centro

**SEO:**
- H2 semântico mesmo sendo visual
- CTA com texto descritivo (não "Clique aqui")

**CTA:**
- Principal: "Falar com a Veritas Metal" → WhatsApp[final] — extra large, máximo destaque
- Secundário: "@veritas_metal" → Instagram

**Mobile:**
- CTA fullwidth
- Fonte menor para o headline mas botão grande

**Desktop:**
- Seção fullwidth, centralizada
- Headline grande com Bebas Neue display

**Requisitos técnicos:**
- `height: min(100vh, 700px)` para a seção
- Background com `next/image fill` + overlay CSS
- Pulse animation via Framer Motion `animate` com `repeat: Infinity`

---

### S15 — Contato

**Objetivo:** Conversão alternativa para quem prefere formulário ao WhatsApp.
**Mensagem principal:** "Fale com a Veritas Metal."
**Emoção desejada:** Acessibilidade, simplicidade, acolhimento.

**Componentes:** `Contact`, `SectionTitle`, `ContactForm`, `FieldName`, `FieldPhone`, `FieldMessage`, `SubmitButton`, `ContactInfo`, `WhatsAppLink`, `InstagramLink`, `LocationText`

**Motion:**
- Form fields: focus state com border cobre (CSS transition 150ms)
- Submit button: loading spinner após clique
- Mensagem de sucesso: fadeIn após envio

**Assets:** Nenhum.

**SEO:**
- `<section id="contato">` + `aria-label`
- Dados de contato marcados com `LocalBusiness` schema (via layout.tsx)
- Link `href="tel:+5545920022510"` para telefone
- Link `href="https://wa.me/5545920022510"` para WhatsApp

**CTA:**
- Submit: "Enviar Mensagem"
- Alternativo: "Ou fale direto no WhatsApp" com ícone

**Mobile:**
- Coluna única: form em cima, info abaixo

**Desktop:**
- 2 colunas: form à esquerda (8/12), info à direita (4/12)

**Requisitos técnicos:**
- React Hook Form com validação Zod (nome: min 2 chars; telefone: formato BR; mensagem: min 10 chars)
- Envio para webhook n8n ou email via API Route (`/api/contact`)
- Rate limiting na API Route (prevenir spam)
- Honeypot field para anti-bot
- `aria-describedby` em cada campo para mensagem de erro

---

### S16 — Rodapé

**Objetivo:** Encerramento profissional + acesso rápido + legal.
**Mensagem principal:** Veritas Metal — reforço final da identidade.
**Emoção desejada:** Profissionalismo, completude.

**Componentes:** `Footer`, `FooterLogo`, `FooterNav` (4 grupos), `FooterContact`, `FooterLegal`

**Motion:** Nenhum. Rodapé é estático — performance e clareza acima de tudo.

**Assets:** Logo variante clara (SVG)

**SEO:**
- Links internos adicionam valor de SEO
- `<footer role="contentinfo">`
- `<nav aria-label="Links do rodapé">`

**CTA:** Link WhatsApp no rodapé — texto simples, sem botão proeminente

**Mobile:**
- Grupos de nav empilhados em acordeão ou simplesmente em colunas menores

**Desktop:**
- Grid de 4 colunas: Logo + tagline | Links | Serviços | Contato

**Requisitos técnicos:**
- Server Component puro (sem JS de interação)
- `<small>` para copyright e links legais

---

## 17. Plano de Implementação

### Dependências Críticas

```
O Futuro da Construção DEPENDE DE:
  - GSAP ScrollTrigger configurado
  - Lenis operacional
  - Assets de imagem entregues

Hero DEPENDE DE:
  - Intro estar completa (evento onIntroComplete)
  - hero-poster.jpg entregue
  - Fontes carregadas (CLS)

ProjectModal DEPENDE DE:
  - Dados de projetos definidos
  - Imagens de projetos entregues

FAQ JSON-LD DEPENDE DE:
  - Texto final das 7 perguntas aprovado

SEO técnico DEPENDE DE:
  - Domínio definido (para canonical e sitemap)
  - og:image produzida
```

### Fase 1 — Fundação (Prioridade: Bloqueadora)

```
Objetivos:
  - Projeto Next.js funcional com tokens, tipografia, grid
  - Lenis + GSAP configurados e integrados
  - Header + Footer em funcionamento
  - Intro + Hero renderizando (sem assets definitivos)

Tarefas:
  [ ] next.js init + TypeScript + Tailwind 4
  [ ] tokens.css com paleta, tipografia, espaçamento, motion
  [ ] tailwind.config.ts consumindo tokens
  [ ] LenisProvider no layout.tsx
  [ ] GSAP register (ScrollTrigger + SplitText)
  [ ] next/font configurado (Bebas Neue, Bricolage Grotesque, Inter, Geist Mono)
  [ ] SectionWrapper, Button, WhatsAppButton, SectionLabel
  [ ] Header (sticky, scroll-aware, mobile drawer)
  [ ] Footer (estático)
  [ ] WhatsAppFloat (mobile)
  [ ] Intro skeleton (fullscreen, preto, logo SVG)
  [ ] Hero skeleton (fullscreen, poster placeholder)
  [ ] Lighthouse baseline (antes dos assets)

Dependências: nenhuma (é o ponto de partida)
Critério de conclusão: site carrega, scroll funciona, header sticky funciona
```

### Fase 2 — Intro + Hero (Prioridade: Alta)

```
Objetivos:
  - Experiência de entrada impactante funcionando
  - LCP ≤ 2.5s
  - Conversão #1 do site ativa (CTA hero)

Tarefas:
  [ ] IntroVideo com video.mp4 ou fallback poster+CSS
  [ ] IntroLogo reveal (GSAP timeline)
  [ ] IntroTagline fadeIn
  [ ] IntroSkip (click e scroll)
  [ ] Lenis.stop() durante intro; lenis.start() ao finalizar
  [ ] HeroBackground com VideoPlayer[hero]
  [ ] HeroContent: SplitText headline, subheadline, CTAs
  [ ] HeroScrollHint
  [ ] ScrollTrigger parallax no hero video
  [ ] Otimização de LCP (hero-poster fetchPriority=high)
  [ ] WhatsApp links funcionais com UTM e mensagem

Dependências: Fase 1 completa; assets de intro e hero entregues
Critério: LCP < 2.5s; intro skippable; CTAs funcionam; mobile testado
```

### Fase 3 — Seções Educacionais (Prioridade: Alta)

```
Objetivos:
  - Conteúdo educacional sobre Steel Frame implementado
  - Scroll storytelling funcionando
  - Usuário consegue completar a jornada mental

Tarefas:
  [ ] FutureConstruction (scroll storytelling, pin, 5 cenas)
  [ ] WhatIsSteelFrame (WallDiagram SVG, LayerLabels, AnimatedCounter)
  [ ] HowItWorks (ProcessTimeline, 6 steps, SVG line draw)
  [ ] Comparison (tabela desktop + cards mobile, dados completos)
  [ ] Benefits (6 cards com ícones SVG, stagger reveal)
  [ ] gsap.matchMedia para responsividade de animações

Dependências: Fase 1 + assets de processo e seções
Critério: jornada completa do visitante funcionando; mobile testado; prefers-reduced-motion
```

### Fase 4 — Conversão e Portfólio (Prioridade: Alta)

```
Objetivos:
  - Galeria de projetos funcionando
  - Modal de projeto
  - Drywall e Estruturas Metálicas

Tarefas:
  [ ] Projects (grid, filtro, ProjectCard com blur placeholder)
  [ ] ProjectModal (AnimatePresence, focus trap, galeria interna)
  [ ] Drywall (BeforeAfterSlider touch/mouse, FeatureList)
  [ ] MetalStructures (parallax, showcase)
  [ ] Differentials (stagger reveal da esquerda)
  [ ] Dados de projetos em lib/projects/data.ts

Dependências: Fase 3; fotos de projetos entregues pelo cliente
Critério: galeria abre corretamente; slider funciona em touch; modal acessível
```

### Fase 5 — FAQ, CTA Final, Contato (Prioridade: Média-Alta)

```
Objetivos:
  - FAQ com accordion e JSON-LD
  - CTA final com máximo impacto
  - Formulário de contato funcional

Tarefas:
  [ ] FAQ accordion (AnimatePresence, aria-expanded)
  [ ] FAQSchema (JSON-LD no head)
  [ ] FinalCTA (SplitText headline, pulse button, background parallax)
  [ ] ContactForm (React Hook Form + Zod, todos os campos)
  [ ] API Route /api/contact (envio via email ou n8n webhook)
  [ ] Rate limiting na API
  [ ] Mensagem de sucesso/erro pós-envio

Dependências: Fases anteriores; texto definitivo do FAQ aprovado; endpoint de envio de emails
Critério: FAQ aparece no Google Search Console; formulário envia sem erro; FAQ acessível via teclado
```

### Fase 6 — SEO, Performance e Acessibilidade (Prioridade: Alta)

```
Objetivos:
  - Todas as metas técnicas atingidas
  - SEO on-page completo

Tarefas:
  [ ] generateMetadata no layout.tsx e page.tsx
  [ ] LocalBusiness JSON-LD no layout.tsx
  [ ] sitemap.ts e robots.ts
  [ ] Open Graph (og:image 1200x630 criada)
  [ ] Heading hierarchy auditada (único h1)
  [ ] Alt texts em todas as imagens
  [ ] Skip link implementado
  [ ] prefers-reduced-motion em todos os componentes
  [ ] Focus ring em todos os interativos
  [ ] ComparisonTable acessível (th scope)
  [ ] BeforeAfterSlider keyboard-accessible
  [ ] Lighthouse: mobile ≥ 90, desktop ≥ 95
  [ ] Core Web Vitals: LCP < 2.5s, CLS = 0, INP < 100ms
  [ ] Bundle analysis (next-bundle-analyzer)
  [ ] WebP confirmado para todas as imagens

Dependências: todas as fases anteriores
Critério: Lighthouse ≥ 90 mobile; zero erros de acessibilidade WAVE; JSON-LD válido no Rich Results Test
```

### Fase 7 — Analytics, QA e Deploy (Prioridade: Alta)

```
Objetivos:
  - Rastreamento configurado
  - QA completo
  - Site em produção

Tarefas:
  [ ] GA4 via @next/third-parties
  [ ] GTM (se necessário para flexibilidade)
  [ ] Eventos GA4 para todos os clicks de WhatsApp (por seção)
  [ ] Teste em Chrome, Safari, Firefox (desktop)
  [ ] Teste em iPhone (Safari iOS) e Android (Chrome)
  [ ] Teste em 375px, 768px, 1024px, 1440px
  [ ] Todos os links WhatsApp verificados (número + mensagem + UTM)
  [ ] Formulário de contato testado (sucesso + erro de validação)
  [ ] Modal de projeto testado (abertura + fechamento + teclado)
  [ ] Scroll storytelling testado em todos os breakpoints
  [ ] Build sem erros TypeScript
  [ ] Deploy Vercel + domínio configurado
  [ ] HTTPS + redirects www/raiz configurados
  [ ] Página 404 personalizada
  [ ] Google Search Console sitemap submetido
  [ ] ffr-security auditoria final executada

Dependências: todas as fases anteriores
Critério: site ao ar, GA4 recebendo dados, WhatsApp funcional, Lighthouse passando
```

### Fase 8 — Pós-Launch (Contínuo)

```
Prioridade: Operacional

Tarefas recorrentes:
  [ ] Adicionar novo projeto à galeria após cada entrega
  [ ] Monitorar GA4 (sessões, cliques WhatsApp, scroll depth)
  [ ] Monitorar Google Search Console (posições, CTR)
  [ ] Responder avaliações Google Meu Negócio
  [ ] A/B test: headline do hero (variações B e C do brief)
  [ ] Expandir FAQ com dúvidas reais recebidas no WhatsApp
  [ ] Lighthouse mensal para detectar regressões
```

---

*VERITAS MASTER BLUEPRINT — Versão 1.0*
*Referência técnica definitiva. Nenhuma linha de código sem este documento aprovado.*
*FFR Brasil Technology × Veritas Metal*
