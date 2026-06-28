# PROJECT-STATE — Veritas Metal

## Estado Atual

- **Fase:** Fase 2A — Hero Cinematográfica (CONCLUÍDA)
- **Próxima:** Fase 2B — Intro Cinematográfica
- **Checkpoint:** CP-005 ✅
- **Última atualização:** 2026-06-27

---

## Checkpoints

| CP | Fase | Build | Typecheck | Lint | Status |
|----|------|-------|-----------|------|--------|
| CP-001 | Fase 0 — Fundação | ✅ | ✅ | ✅ | Entregue |
| CP-002 | Fase 0 — Push GitHub | ✅ | ✅ | ✅ | Entregue |
| CP-003 | Fase 1A — Layout Base | ✅ | ✅ | ✅ | Aprovado |
| CP-004 | Fase 1B — Animações de Layout | ✅ | ✅ | ✅ | Aprovado |
| CP-005 | Fase 2A — Hero Cinematográfica | ✅ | ✅ | ✅ | Aguardando aprovação |

---

## Inventário — src/ (cumulativo até CP-005)

### app/
- `layout.tsx` — Root layout com fontes, metadata, Providers, Header, Footer, WhatsAppFloat, JsonLd
- `page.tsx` — HeroSection + âncora `#steel-frame`
- `globals.css` — Tailwind v4 + @theme inline + reset + sr-only + focus ring + scrollbar
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
- `ScrollReveal/index.tsx` — Reveal on scroll via Framer Motion + reduced-motion
- `VideoPlayer/index.tsx` — Player com fallback; suporta array `sources` (webm+mp4)

### components/sections/
- `HeroSection/HeroSection.tsx` — Hero cinematográfica fullscreen (100dvh): vídeo background, 2 overlays, eyebrow copper, headline Bebas Neue clamp, subheadline, reforço, CTA primário WhatsApp, CTA secundário ghost, stagger entrance Framer Motion
- `HeroSection/HeroScrollIndicator.tsx` — Seta bounce animada para `#steel-frame`

### components/
- `Providers.tsx` — LenisProvider wrapper

### lib/
- `gsap/register.ts` · `gsap/presets.ts`
- `lenis/LenisProvider.tsx`
- `cn.ts` · `messages.ts` · `events.ts`
- `utils/format.ts` · `projects/data.ts`

### hooks/
- `useReducedMotion.ts` · `useMediaQuery.ts` · `useIntersection.ts`
- `useGSAP.ts` · `useLenis.ts` · `useScrollProgress.ts` · `useWhatsApp.ts`

### types/
- `index.ts` · `motion.ts`

---

## Pendências

| Tarefa | Fase |
|--------|------|
| Intro Cinematográfica (S02) | 2B |
| Seções S04–S16 | 3–10 |
| Formulário de contato (RHF + Zod) | 10 |
| GA4 + cookie consent | 11 |
| Content-Security-Policy | 11 |
| Deploy produção | 12 |

---

## Decisões Arquiteturais

| Decisão | Motivo |
|---------|--------|
| Tailwind v4 CSS-first | Blueprint; sem tailwind.config.ts |
| Tokens `--vm-*` em CSS vars | GSAP acessa valores em JS |
| Lenis + gsap.ticker | Sincronização garantida |
| Header/Footer no layout.tsx | Aparece em todas as rotas |
| z-index como número no style prop | TypeScript não aceita CSS vars em zIndex |
| ScrollReveal via Framer Motion | Motion trinity: FM = componente mount/exit |
| WhatsApp pulse via CSS keyframes | CSS suficiente; evita overhead JS |

---

## Riscos

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Three.js em mobile low-end | Alto | Fallback MP4 obrigatório (Fase 2) |
| LCP > 1.8s sem hero otimizado | Alto | fetchpriority="high" + WebP < 80KB (Fase 2) |
| Lenis vs. scroll nativo iOS | Médio | Testar em dispositivo real (Fase 2) |
| npm audit: 2 vulns moderadas | Baixo | Monitorar |
