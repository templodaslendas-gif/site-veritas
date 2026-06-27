# PROJECT-STATE — Veritas Metal

## Estado Atual

- **Fase:** Fase 0 — Fundação (CONCLUÍDA)
- **Subfase:** 0C — Validação e Checkpoint
- **Checkpoint:** CP-001 — Fundação Completa
- **Status:** ✅ Aguardando aprovação para iniciar Fase 1
- **Última atualização:** 2026-06-27

---

## Validações do Checkpoint CP-001

| Validação | Resultado |
|-----------|-----------|
| `npm run build` | ✅ Compilado sem erros (Next.js 15.5.19) |
| `npm run typecheck` | ✅ Zero erros TypeScript |
| `npm run lint` | ✅ Zero erros ESLint |
| Rotas geradas | ✅ `/`, `/politica-privacidade`, `/robots.txt`, `/sitemap.xml`, `/icon` |

---

## Arquivos Criados — Fase 0 (cumulativo)

### Configuração
| Arquivo | Descrição |
|---------|-----------|
| `package.json` | Dependências e scripts npm |
| `tsconfig.json` | TypeScript strict + paths @/* |
| `next.config.ts` | Headers de segurança, imagens, fontes |
| `postcss.config.mjs` | Tailwind CSS v4 plugin |
| `.eslintrc.json` | next/core-web-vitals |
| `.prettierrc` | Formatter com prettier-plugin-tailwindcss |
| `.prettierignore` | Exclusões do Prettier |
| `.gitignore` | Exclusões git incluindo .env* |

### App (Next.js 15 App Router)
| Arquivo | Descrição |
|---------|-----------|
| `src/app/layout.tsx` | Root layout: fonts, metadata, viewport |
| `src/app/page.tsx` | Placeholder home |
| `src/app/globals.css` | @import tokens + @theme inline + base styles |
| `src/app/robots.ts` | robots.txt automático |
| `src/app/sitemap.ts` | sitemap.xml automático |
| `src/app/icon.tsx` | Favicon gerado dinamicamente |
| `src/app/politica-privacidade/page.tsx` | Página de política de privacidade |

### Design System
| Arquivo | Descrição |
|---------|-----------|
| `src/styles/tokens.css` | Todos tokens --vm-*: cores, tipografia, espaçamento, grid, motion, z-index |

### Motion Infrastructure
| Arquivo | Descrição |
|---------|-----------|
| `src/lib/gsap/register.ts` | Registro do ScrollTrigger |
| `src/lib/gsap/presets.ts` | fadeUp, fadeIn, revealLine, staggerFadeUp, scaleIn |
| `src/lib/lenis/LenisProvider.tsx` | Provider com RAF loop integrado ao GSAP |
| `src/components/Providers.tsx` | Wrapper de providers (LenisProvider) |

### Hooks
| Arquivo | Descrição |
|---------|-----------|
| `src/hooks/useReducedMotion.ts` | prefers-reduced-motion SSR-safe |
| `src/hooks/useMediaQuery.ts` | Breakpoints + useIsMobile/Tablet/Desktop |
| `src/hooks/useIntersection.ts` | IntersectionObserver com triggerOnce |
| `src/hooks/useGSAP.ts` | gsap.context() com cleanup automático |
| `src/hooks/useLenis.ts` | Acesso ao contexto do Lenis |
| `src/hooks/useScrollProgress.ts` | Progresso de scroll 0–1 |
| `src/hooks/useWhatsApp.ts` | Geração de URL wa.me com UTM |

### Lib / Utilities
| Arquivo | Descrição |
|---------|-----------|
| `src/lib/cn.ts` | clsx + tailwind-merge |
| `src/lib/messages.ts` | Mensagens WhatsApp pré-preenchidas por seção |
| `src/lib/events.ts` | Eventos GA4 tipados |
| `src/lib/utils/format.ts` | formatArea, formatCurrency, formatPhone, slugify |
| `src/lib/projects/data.ts` | Dados estáticos dos projetos |

### Types
| Arquivo | Descrição |
|---------|-----------|
| `src/types/index.ts` | Section, Breakpoint, AnimationVariant, tipos de negócio |
| `src/types/motion.ts` | MotionVariant, FRAMER_VARIANTS, MOTION_DURATION_MS |

### Governança
| Arquivo | Descrição |
|---------|-----------|
| `README.md` | Documentação do projeto |
| `CLAUDE.md` | Regras projeto-específicas para Claude Code |
| `AGENTS.md` | Agentes e protocolo de comunicação |
| `SITE-RULES.md` | Regras não-negociáveis do site |
| `SECURITY-CHECKLIST.md` | Checklist de segurança por fase |
| `PROJECT-STATE.md` | Este arquivo |
| `CHANGELOG.md` | Histórico de mudanças |
| `docs/LGPD.md` | Conformidade LGPD |
| `docs/PRIVACY-POLICY.md` | Política de privacidade |
| `docs/COOKIE-POLICY.md` | Política de cookies |

### Agentes
| Arquivo | Responsabilidade |
|---------|-----------------|
| `agents/coordinator.md` | Orquestração do pipeline |
| `agents/researcher.md` | Análise de codebase |
| `agents/architect.md` | Decisões de componentes |
| `agents/coder.md` | Implementação |
| `agents/reviewer.md` | Revisão de qualidade |
| `agents/security-auditor.md` | Segurança e LGPD |

---

## Arquivos Modificados na Fase 0

| Arquivo | Mudança |
|---------|---------|
| `.prettierrc` | Removido `tailwindConfig` (arquivo não existe em Tailwind v4) |
| `src/lib/lenis/LenisProvider.tsx` | Corrigido bug de cleanup no RAF (referência de função) |
| `src/hooks/useGSAP.ts` | Corrigido tipo do callback: `() => void` em vez de `(context) => void` |
| `FFR-PLATFORM-v2.0.md` | Atualizado para v2.1 com 13 novas seções (Checkpoints, SESSION, etc.) |

---

## Tarefas Concluídas — Fase 0

- [x] Estrutura Next.js 15 com App Router
- [x] TypeScript strict com path alias @/*
- [x] Tailwind CSS v4 (CSS-first, @theme inline)
- [x] ESLint + Prettier configurados
- [x] Design System: tokens.css com todos --vm-* tokens
- [x] Motion infrastructure: GSAP + Lenis + presets
- [x] Hooks: 7 hooks criados e validados
- [x] Lib utilities: cn, messages, events, format, projects/data
- [x] Types: index.ts e motion.ts
- [x] SEO base: metadata, robots.ts, sitemap.ts, icon.tsx
- [x] Rota /politica-privacidade
- [x] Governança: README, CLAUDE.md, AGENTS.md, SITE-RULES.md, SECURITY-CHECKLIST.md
- [x] Docs: LGPD.md, PRIVACY-POLICY.md, COOKIE-POLICY.md
- [x] Agentes: coordinator, researcher, architect, coder, reviewer, security-auditor
- [x] Build limpo validado
- [x] PROJECT-STATE.md criado
- [x] CHANGELOG.md criado

---

## Tarefas Pendentes

| Tarefa | Fase | Motivo |
|--------|------|--------|
| Header + NavDesktop + NavMobile | 1A | Fase 1 ainda não iniciada |
| Footer + FooterLinks | 1A | Fase 1 ainda não iniciada |
| WhatsAppFloat | 1A | Fase 1 ainda não iniciada |
| SectionWrapper, ScrollReveal, JsonLd | 1A | Componentes shared |
| Todos os componentes de seção (S01-S16) | 2–10 | Fase 2+ ainda não iniciada |
| Formulário de contato (RHF + Zod) | 10 | Dependências a instalar |
| GA4 + cookie consent | 11 | Fase 11 ainda não iniciada |
| Content-Security-Policy header | 11 | Requer lista de origens definitiva |
| Deploy em produção | 12 | Após todas as seções |

---

## Riscos Conhecidos

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Three.js lazy loading em mobile low-end | Alto | Fallback vídeo MP4 obrigatório |
| LCP > 1.8s se hero image não otimizada | Alto | fetchpriority="high" + WebP < 80KB |
| Lenis conflito com scroll nativo em iOS | Médio | Testar em dispositivo real na Fase 2 |
| GSAP ScrollTrigger refresh após resize | Médio | ScrollTrigger.refresh() no resize handler |
| npm audit: 2 vulnerabilidades moderadas | Baixo | Monitorar; não afetam produção |

---

## Decisões Arquiteturais Registradas

| Decisão | Alternativa Descartada | Motivo |
|---------|----------------------|--------|
| Tailwind v4 CSS-first | tailwind.config.ts | Alinhado com Blueprint; menos boilerplate |
| Tokens --vm-* em CSS vars | Só Tailwind utilities | GSAP precisa acessar os valores em JS |
| LenisProvider com gsap.ticker | requestAnimationFrame manual | Sincronização garantida pelo ticker do GSAP |
| types/index.ts consolidado | Arquivo por tipo | Fase 0 não justifica granularidade; refatorar na Fase 1 se necessário |
| Governance em .md na raiz | /docs apenas | Mais visível para Claude Code em novas sessões |

---

## Próximos Passos — Fase 1

### Fase 1A — Layout Base (Estrutura)
Criar: `src/components/layout/Header/`, `src/components/layout/Footer/`, `src/components/layout/WhatsAppFloat/`, `src/components/shared/SectionWrapper/`, `src/components/shared/JsonLd/`

### Fase 1B — Layout Animações e Interação
Adicionar comportamento de scroll ao Header, animação de entrada do Footer, botão flutuante do WhatsApp com animação de entrada.

**Estimativa:** Fase 1A e 1B — complexidade média — ~15 arquivos ao total.

**Aguardando aprovação para iniciar Fase 1A.**
