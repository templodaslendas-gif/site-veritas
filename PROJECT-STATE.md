# PROJECT-STATE — Veritas Metal

## Estado Atual

- **Fase:** Ajuste visual final e revisão de responsividade mobile — seção Projetos removida; Drywall, Estruturas Metálicas e Diferenciais reforçados visualmente; vídeo comparativo corrigido (era retrato 9:16, forçado em caixa 16:9)
- **Próxima:** Macrofase 6 — Infraestrutura (GA4, cookie consent LGPD, CSP, deploy produção) + formulário de contato RHF/Zod (opcional)
- **Checkpoint:** CP-020 ✅
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
| CP-019 | Home completa — 10 seções dos Atos 3–6 implementadas com cinematic motion (Comparativo com comparativo.mp4, Benefícios, Estrutura, Projetos, Diferenciais, Drywall, Estruturas Metálicas, FAQ, CTA Final, Contato) | ✅ | ✅ | ✅ | Entregue |
| CP-020 | Ajuste visual final: remove Projetos, reforça Drywall/Estruturas/Diferenciais, corrige vídeo comparativo (retrato 9:16 mal enquadrado em caixa 16:9) e renomeia arquivos com extensão dupla, revisão de responsividade mobile | ✅ | ✅ | ✅ | Entregue |

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
- `SectionWrapper/index.tsx` — Wrapper semântico section/div/article + props `style` e `aria-label`
- `AnimatedNumber/index.tsx` — **CP-019**: contador animado 0→valor no viewport; SSR renderiza o valor final (nunca invisível); respeita reduced-motion
- `MediaPlaceholder/index.tsx` — **CP-019**: placeholder premium (malha técnica + ícone copper) para mídia inexistente; variantes light/dark; nunca referencia arquivo ausente
- `ScrollReveal/index.tsx` — **Reescrito em CP-008**: sem Framer Motion; máquina de estado `idle|waiting|entered`; SSR renderiza conteúdo visível (nenhum opacity:0 no HTML); animação CSS pura como enhancement opcional
- `VideoPlayer/index.tsx` — Player com fallback; suporta array `sources`

### components/sections/
- `IntroSection/IntroSection.tsx` — Intro cinematográfica: cobre a tela (z:200), barra de progresso 2400ms, skip, AnimatePresence exit slideUp. Mostrada 1× por sessão (sessionStorage)
- `HeroSection/HeroSection.tsx` — Hero fullscreen 100dvh: 1 source mp4, 2 overlays reforçados (95%→55%), text-shadow para contraste. **CP-008**: `itemVariants.hidden` sem opacity (apenas y:16) — SSR renderiza copy sempre visível; animação apenas desloca Y
- `HeroSection/HeroScrollIndicator.tsx` — Seta bounce animada → `#futuro`
- `FutureSection/FutureSection.tsx` — 3 cards (60% mais rápido, Estrutura de aço, 90% menos entulho), hover copper via onMouseEnter, ScrollReveal por bloco
- `SteelFrameSection/SteelFrameSection.tsx` — Grid 2 colunas: copy + 6 benefícios + CTAs | VideoPlaceholder 16:9; background `--vm-black`
- `HowItWorksSection/HowItWorksSection.tsx` — 6 passos em timeline: badge número + conector + content. Conector corrigido (amount:0.8→0.2). CTA WhatsApp ao final
- `ComparisonSection/ComparisonSection.tsx` — **CP-019** (`#comparativo`, escuro): vídeo comparativo.mp4 em destaque, 3 stats com AnimatedNumber, tabela premium 8 critérios (Steel Frame × Convencional), linha copper animada, CTA WhatsApp
- `BenefitsSection/BenefitsSection.tsx` — **CP-019** (`#beneficios`, claro): 8 cards premium (velocidade, economia, térmico, acústico, sustentabilidade, limpeza, resistência, valorização) com stagger + hover copper
- `StructureSection/StructureSection.tsx` — **CP-019** (`#conheca-estrutura`, branco): estrutura.jpg sticky com parallax leve (useScroll/useTransform) + 6 camadas numeradas com conectores animados; preparada para futuro estrutura.mp4
- `DifferentialsSection/DifferentialsSection.tsx` — **CP-019**, reforçado em **CP-020** (`#diferenciais`, claro): eyebrow com kicker copper, headline maior ("Engenharia, equipe qualificada e garantia do início ao fim."), 6 cards com ícone em círculo copper-tint, padding/gap maiores, radius-xl, hover mais forte
- `DrywallSection/DrywallSection.tsx` — **CP-019**, reforçado em **CP-020** (`#drywall`, branco): eyebrow "Drywall de alto padrão" + kicker, headline "Drywall para interiores rápidos, limpos e impecáveis."; copy + 4 bullets + MediaPlaceholder; const `DRYWALL_VIDEO` pronta para /drywall/drywall.mp4; CTA WhatsApp drywall
- `MetalStructuresSection/MetalStructuresSection.tsx` — **CP-019**, reforçado em **CP-020** (`#estruturas`, claro): eyebrow "Estruturas metálicas" + kicker, headline "Estruturas metálicas sob medida para obras fortes e precisas."; mídia à esquerda (ritmo alternado), 4 bullets; const `METAL_VIDEO` pronta para /estruturas/estrutura-metalica.mp4; CTA WhatsApp estruturas

> **Removida em CP-020**: `ProjectsSection` (galeria de Projetos) foi descontinuada — sem fotos reais, a seção não agregava valor. Nav (Header/Footer) atualizada: item "Projetos" → "Diferenciais" (`#diferenciais`).
- `FAQSection/FAQSection.tsx` — **CP-019** (`#faq`, branco): accordion premium com 10 perguntas reais; AnimatePresence height, aria-expanded/aria-controls, reduced-motion via useReducedMotion
- `FinalCTASection/FinalCTASection.tsx` — **CP-019** (`#cta-final`, preto): headline display grande, linha copper scaleX, botão WhatsApp com glow copper no hover
- `ContactSection/ContactSection.tsx` — **CP-019** (`#contato`, claro): cards WhatsApp/Instagram/atendimento + mapa placeholder (pin copper, pronto para embed real)

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
| ATO 3 | Comparativo Steel Frame × Construção Convencional (`#comparativo`) | Escuro | ✅ CP-019 |
| ATO 3 | Benefícios (`#beneficios`) | Claro | ✅ CP-019 |
| ATO 3 | Conheça a Estrutura (`#conheca-estrutura`) | Claro | ✅ CP-019 |
| ATO 4 | Diferenciais (`#diferenciais`) | Claro | ✅ CP-019 / reforçada CP-020 |
| ATO 5 | Drywall (`#drywall`) | Claro | ✅ CP-019 (aguarda /drywall/drywall.mp4) |
| ATO 5 | Estruturas Metálicas (`#estruturas`) | Claro | ✅ CP-019 (aguarda /estruturas/estrutura-metalica.mp4) |
| ATO 6 | FAQ (`#faq`) | Claro | ✅ CP-019 |
| ATO 6 | CTA Final (`#cta-final`) | Escuro | ✅ CP-019 |
| ATO 6 | Contato (`#contato`) | Claro | ✅ CP-019 (formulário RHF/Zod futuro; mapa placeholder) |
| — | Formulário de contato RHF/Zod | — | Pendente |
| — | GA4 + cookie consent (LGPD) | — | Pendente |
| — | Content-Security-Policy | — | Pendente |
| — | Deploy produção | — | Pendente |
| — | Fotos reais de projetos executados (seção removida em CP-020 até haver conteúdo) | — | Pendente |

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
