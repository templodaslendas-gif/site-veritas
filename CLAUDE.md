# Veritas Metal — Regras para Claude Code

## Identidade do Projeto

Site institucional de construção com Steel Frame.
Stack: Next.js 15 · TypeScript · Tailwind CSS 4 · GSAP · Lenis · Framer Motion.

## Retomada Automática (OBRIGATÓRIO ao iniciar qualquer sessão)

Antes de qualquer ação em sessão nova, ler nesta ordem:

1. `FFR-PLATFORM-v2.0.md` (v2.1) — padrões e pipeline
2. `VERITAS-MASTER-BRIEF.md` — contexto de negócio
3. `VERITAS-MASTER-BLUEPRINT.md` — arquitetura técnica
4. `PROJECT-STATE.md` — estado atual e último checkpoint
5. `CHANGELOG.md` — histórico de mudanças
6. Verificar arquivos existentes com glob em `src/`

Identificar o último checkpoint válido. Comunicar ao usuário o estado atual. Aguardar aprovação antes de continuar.

**NUNCA recriar arquivos existentes. NUNCA repetir trabalho concluído.**

## Hierarquia de Prioridade (Regra de Ouro)

```
1. Instruções explícitas do usuário  (máxima prioridade)
2. FFR-PLATFORM-v2.0.md (v2.1)       (padrões da plataforma)
3. VERITAS-MASTER-BLUEPRINT.md       (arquitetura do projeto)
4. VERITAS-MASTER-BRIEF.md           (contexto de negócio)
5. Código existente                  (consistência)
```

## Regras Absolutas

- NUNCA implementar componente visual sem plano aprovado
- NUNCA criar seção da Home sem especificação completa no Blueprint
- NUNCA misturar responsabilidades de libraries de motion (Lenis=scroll, GSAP=scroll animations, Framer=mount/exit)
- NUNCA hardcodar valores de design — usar sempre tokens `--vm-*`
- NUNCA animar `width`, `height`, `top`, `left`, `margin` — apenas `transform`, `opacity`, `filter`, `clip-path`
- NUNCA commitar `.env*` ou credenciais
- SEMPRE verificar `prefers-reduced-motion` em toda animação
- SEMPRE usar `next/image` para imagens
- SEMPRE usar `next/font` para fontes
- SEMPRE atualizar `PROJECT-STATE.md` e `CHANGELOG.md` ao concluir qualquer fase

## Checkpoints

Todo checkpoint inclui obrigatoriamente:
```bash
npm run typecheck   # zero erros
npm run lint        # zero erros
npm run build       # build limpo
```
Após o checkpoint: parar. Apresentar relatório. Aguardar aprovação para a próxima fase.

## Divisão de Fases

Se uma fase estimada for grande, dividir preventivamente em subfases (A, B, C...) antes de iniciar. Nunca ser interrompido no meio de uma implementação.

## Ordem de Implementação

Seguir exatamente as fases do VERITAS-MASTER-BLUEPRINT.md. Nunca pular fase ou seção fora de ordem.

## Design Tokens

Todos os tokens começam com `--vm-`. Definidos em `src/styles/tokens.css`.
Exposto ao Tailwind via `@theme inline` em `src/app/globals.css`.

## WhatsApp

Número: `5545920022510`
Mensagens pré-definidas em: `src/lib/messages.ts`
Hook de uso: `src/hooks/useWhatsApp.ts`

## Estrutura de Pastas

```
src/
├── app/          → Rotas Next.js (App Router)
├── components/
│   ├── ui/       → Primitivos sem lógica de negócio
│   ├── layout/   → Header, Footer, WhatsAppFloat
│   ├── sections/ → Seções da Home
│   └── shared/   → SectionWrapper, ScrollReveal, VideoPlayer, JsonLd
├── hooks/        → Custom hooks
├── lib/          → Utilitários, dados, presets
│   ├── gsap/
│   ├── lenis/
│   ├── utils/
│   ├── projects/
│   └── analytics/ (futuro)
├── styles/       → tokens.css
└── types/        → Tipos TypeScript
```
