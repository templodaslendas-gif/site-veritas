# Site Rules — Veritas Metal

Regras não-negociáveis para manutenção e evolução do site.

## Design

- Paleta exclusiva: tokens `--vm-*` em `src/styles/tokens.css`
- Fontes: Bebas Neue (display), Bricolage Grotesque (heading), Inter (body), Geist Mono (mono)
- Nunca usar cor fora da paleta sem aprovação e inclusão no tokens.css
- Espaçamentos apenas via `--vm-space-*`
- Grid: 12 colunas, gutter 1.5rem, container máximo 1440px

## Motion

- Lenis: scroll suave — nunca usar `scroll-behavior: smooth` no CSS
- GSAP + ScrollTrigger: animações vinculadas ao scroll
- Framer Motion: mount/exit/hover de componentes React
- Nunca usar os três para a mesma animação
- Duração máxima de UI: 300ms; storytelling: até 1200ms
- `prefers-reduced-motion`: todas as animações devem ter fallback estático

## Performance

- Lighthouse mobile ≥ 90
- LCP < 1.8s
- INP < 100ms
- CLS = 0
- Imagens: sempre `next/image` com WebP, lazy load, placeholder blur
- Hero image: `fetchpriority="high"`, `priority` no next/image
- Three.js: `next/dynamic` com `ssr: false`, carregar só quando visível

## SEO

- Um `<h1>` por página contendo keyword principal
- Meta title ≤ 60 chars, meta description ≤ 155 chars
- Open Graph: sempre `og:image` 1200×630
- JSON-LD: Organization + LocalBusiness + FAQPage
- Sitemap automático via `src/app/sitemap.ts`

## Acessibilidade

- Contraste mínimo 4.5:1 em texto
- Focus ring visível em todos os elementos interativos
- `aria-label` em todos os botões sem texto visível
- Skip link para conteúdo principal: `<a href="#main-content">`
- `alt` descritivo em imagens de conteúdo; `alt=""` em decorativas

## Conversão

- CTA principal (WhatsApp) visível sem scroll em mobile
- Um CTA primário por seção
- Mensagens WhatsApp pré-preenchidas e específicas por seção
- UTM params em todos os links WhatsApp

## Segurança

- Sem secrets no código ou frontend
- Headers HTTP configurados em `next.config.ts`
- LGPD: consentimento antes de analytics
- Formulário validado client + server (Zod)

## Código

- TypeScript strict: zero `any` explícito
- Componentes com < 100 linhas preferencialmente; nunca > 200
- Arquivos com < 500 linhas
- Comentários apenas quando o "porquê" não é óbvio
- Sem `console.log` em produção
