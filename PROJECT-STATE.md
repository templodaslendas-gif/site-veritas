# PROJECT-STATE — Veritas Metal

## Estado Atual

- **Fase:** Arquitetura visual da SteelFrameSection corrigida (texto-protagonista + imagem técnica lateral); VideoReplaySection com título/subtítulo + vídeo grande após timeline
- **Próxima:** Macrofase 3 — Ato 3 (Comparativo, Benefícios, Conheça a Estrutura)
- **Checkpoint:** CP-018 ✅
- **Última atualização:** 2026-07-01

---

## Checkpoints

| CP | Fase | Build | Typecheck | Lint | Status |
|----|------|-------|-----------|------|--------|
| CP-001 | Fase 0 — Fundação | ✅ | ✅ | ✅ | Entregue |
| CP-002 | Fase 0 — Push GitHub | ✅ | ✅ | ✅ | Entregue |
| CP-003 | Fase 1A — Layout Base | ✅ | ✅ | ✅ | Aprovado |
| CP-004 | Fase 1B — Animações de Layout | ✅ | ✅ | ✅ | Aprovado |
| CP-005 | Fase 2A — Hero Cinematográfica | ✅ | ✅ | ✅ | Aprovado |
| CP-006 | Macrofase 2 — Deploy completo | ✅ | ✅ | ✅ | Entregue |
| CP-007 | Macrofase 2 — Fix visual crítico | ✅ | ✅ | ✅ | Entregue |
| CP-008 | Macrofase 2 — Fix SSR visibility (renderização definitiva) | ✅ | — | ✅ | Aprovado |
| CP-009 | SteelFrameSection — vídeo real integrado (construcao-completa.mp4) | ✅ | ✅ | ✅ | Aprovado |
| CP-010 | Auditoria de assets — extensões corrigidas, caminhos validados | ✅ | ✅ | ✅ | Entregue |
| CP-011 | Reestruturação narrativa — Home em 6 Atos, navegação alinhada, anchors preparados | ✅ | ✅ | ✅ | Entregue |
| CP-012 | Identidade visual — tema Engineering Premium (claro), tokens light, header glass branco | ✅ | ✅ | ✅ | Entregue |
| CP-013 | SteelFrameSection refatorada (vídeo protagonista 85%) + VideoReplaySection criada | ✅ | ✅ | ✅ | Entregue |
| CP-014 | VideoPlayer com onError fallback; VideoReplaySection caminho correto; SteelFrame usa estrutura.jpg | ✅ | ✅ | ✅ | Entregue |
| CP-015 | Restaura VideoPlayer em SteelFrameSection; corrige caminho VideoReplaySection para /steel-frame/ | ✅ | ✅ | ✅ | Entregue |
| CP-016 | Renomeia construcao-completa.mp4.mp4 -> .mp4 (extensao dupla); VideoPlayer exibe path no fallback dev | ✅ | ✅ | ✅ | Entregue |
| CP-017 | Separa videos por secao: SteelFrameSection usa estrutura.jpg (estrutura.mp4 nao existe); VideoReplaySection mantem construcao-completa.mp4 | ✅ | ✅ | ✅ | Entregue |
| CP-018 | Corrige arquitetura visual: SteelFrameSection vira secao educativa texto+imagem tecnica lateral (nao mais video/imagem protagonista); VideoReplaySection ganha titulo/subtitulo; comparativo.mp4.mp4 -> comparativo.mp4 | ✅ | ✅ | ✅ | Entregue |

---

## Inventário — src/ (cumulativo até CP-013)

### app/
- `layout.tsx` — Root layout com fontes, metadata, Providers, Header, Footer, WhatsAppFloat, JsonLd
- `page.tsx` — 6 Atos; Ato 2: Intro, Hero, Futuro, SteelFrame, HowItWorks, VideoReplay; Atos 3–6: anchors preparados
- `globals.css` — Tailwind v4 + @theme inline + reset + sr-only + focus ring
- `robots.ts` · `sitemap.ts` · `icon.tsx` · `politica-privacidade/page.tsx`

### styles/
- `tokens.css` — Todos os tokens `--vm-*` (cores, tipo, espaço, grid, motion, z-index)

### components/layout/
- `Header/Header.tsx` — Sticky, scroll-aware (transparente → dark + border após 80px)
- `Header/NavDesktop.tsx` — 6 âncoras + exporta `NAV_ITEMS`
- `Header/NavMobile.tsx` — Hamburger + drawer com AnimatePresence
- `Header/HeaderCTA.tsx` — "Solicitar Orçamento" → WhatsApp
- `Footer/Footer.tsx` — 4 colunas: logo/tagline, Serviços, Contato, Legal
- `Footer/FooterLinks.tsx` — Grupo de links com hover copper
- `WhatsAppFloat/WhatsAppFloat.tsx` — Botão fixo + pulse ring CSS

### components/shared/
- `JsonLd/index.tsx` — `<script type="application/ld+json">`
- `SectionWrapper/index.tsx` — Wrapper semântico section/div/article + prop `style`
- `ScrollReveal/index.tsx` — **Reescrito em CP-008**: sem Framer Motion; máquina de estado `idle|waiting|entered`; SSR renderiza conteúdo visível (nenhum opacity:0 no HTML); animação CSS pura como enhancement opcional
- `VideoPlayer/index.tsx` — Player com fallback; suporta array `sources`

### components/sections/
- `IntroSection/IntroSection.tsx` — Intro cinematográfica: cobre a tela (z:200), barra de progresso 2400ms, skip, AnimatePresence exit slideUp. Mostrada 1× por sessão (sessionStorage)
- `HeroSection/HeroSection.tsx` — Hero fullscreen 100dvh: 1 source mp4, 2 overlays reforçados (95%→55%), text-shadow para contraste. **CP-008**: `itemVariants.hidden` sem opacity (apenas y:16) — SSR renderiza copy sempre visível; animação apenas desloca Y
- `HeroSection/HeroScrollIndicator.tsx` — Seta bounce animada → `#futuro`
- `FutureSection/FutureSection.tsx` — 3 cards (60% mais rápido, Estrutura de aço, 90% menos entulho), hover copper via onMouseEnter, ScrollReveal por bloco
- `SteelFrameSection/SteelFrameSection.tsx` — Grid 2 colunas: copy + 6 benefícios + CTAs | VideoPlaceholder 16:9; background `--vm-black`
- `HowItWorksSection/HowItWorksSection.tsx` — 6 passos em timeline: badge número + conector + content. Conector corrigido (amount:0.8→0.2). CTA WhatsApp ao final

### components/
- `Providers.tsx` — LenisProvider wrapper

### lib/
- `gsap/register.ts` · `gsap/presets.ts`
- `lenis/LenisProvider.tsx` — Lenis 1.3.25, integrado via gsap.ticker
- `cn.ts` · `messages.ts` · `events.ts`
- `utils/format.ts` · `projects/data.ts`

### hooks/
- `useReducedMotion.ts` · `useMediaQuery.ts` · `useIntersection.ts`
- `useGSAP.ts` · `useLenis.ts` · `useScrollProgress.ts` · `useWhatsApp.ts`

### types/
- `index.ts` · `motion.ts`

---

## Pendências — Narrativa em 6 Atos

| Ato | Seção | Fundo | Status |
|-----|-------|-------|--------|
| ATO 3 | Comparativo Steel Frame × Construção Convencional (`#comparativo`) | Escuro | Anchor criado |
| ATO 3 | Benefícios (`#beneficios`) | Claro | Anchor criado |
| ATO 3 | Conheça a Estrutura (`#conheca-estrutura`) | Claro | Anchor criado |
| ATO 4 | Projetos — galeria (`#projetos`) | Escuro | Anchor criado |
| ATO 4 | Diferenciais (`#diferenciais`) | Claro | Anchor criado |
| ATO 5 | Drywall (`#drywall`) | Claro | Anchor criado |
| ATO 5 | Estruturas Metálicas (`#estruturas`) | Claro | Anchor criado |
| ATO 6 | FAQ (`#faq`) | Claro | Anchor criado |
| ATO 6 | CTA Final (`#cta-final`) | Escuro | Anchor criado |
| ATO 6 | Contato + Formulário RHF/Zod (`#contato`) | Claro | Anchor criado |
| — | GA4 + cookie consent (LGPD) | — | Pendente |
| — | Content-Security-Policy | — | Pendente |
| — | Deploy produção | — | Pendente |

---

## Decisões Arquiteturais

| Decisão | Motivo |
|---------|--------|
| Tema claro (Engineering Premium) como padrão | Referências Apple/Tesla/BIG — sofisticação, precisão, arquitetura contemporânea |
| Hero permanece escura | Contraste dramático: Hero escura → seções claras cria ritmo visual forte |
| Header glass branco após scroll | Consistente com tema claro; transparente no topo mantém contraste sobre Hero |
| Tokens `--vm-bg-*`, `--vm-text-on-light-*`, `--vm-shadow-light-*` | Separação semântica: tokens escuros (Intro/Footer) vs tokens claros (restante) |
| Tailwind v4 CSS-first | Blueprint; sem tailwind.config.ts |
| Tokens `--vm-*` em CSS vars | GSAP acessa valores em JS |
| Lenis + gsap.ticker | Sincronização garantida |
| Header/Footer no layout.tsx | Aparece em todas as rotas |
| z-index como número no style prop | TypeScript não aceita CSS vars em zIndex |
| ScrollReveal sem Framer Motion (CP-008) | Framer Motion escrevia `opacity:0` inline no SSR HTML via `initial`; conteúdo ficava invisível se animação falhasse. Solução: `idle`=sem inline style → visível por padrão; animação CSS pura como enhancement |
| HeroSection hidden sem opacity (CP-008) | `initial={{ opacity:0 }}` no SSR tornava toda a copy invisível até JS animar. `hidden: { y: 16 }` mantém conteúdo visível mesmo sem animação |
| Source de vídeo: só .mp4 | .webm inexistente causava 404 antes de carregar o .mp4; removido até o arquivo existir |
| Poster do vídeo: undefined | `/images/hero-poster.webp` não existe; sem poster o browser carrega o vídeo direto |
| WhatsApp pulse via CSS keyframes | CSS suficiente; evita overhead JS |
| Overlay hero reforçado (95%→55%) | Garante contraste do texto mesmo com vídeo de soldagem brilhante |

---

## Riscos

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Hero sem poster: flash preto durante load | Baixo | Criar `hero-poster.webp` quando vídeo final for definido |
| LCP > 1.8s sem hero otimizado | Alto | fetchpriority="high" + poster WebP < 80KB (Macrofase 6) |
| Lenis vs. scroll nativo iOS | Médio | Testar em dispositivo real antes do deploy |
| npm audit: 2 vulns moderadas | Baixo | Monitorar |
