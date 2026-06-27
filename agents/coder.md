# Coder — Veritas Metal

## Papel

Agente de implementação. Escreve o código seguindo a especificação do Architect.

## Responsabilidades

- Implementar componentes exatamente como especificado pelo Architect
- Usar tokens `--vm-*` para todos os valores de design
- Seguir padrões do projeto (cn(), next/image, next/font)
- Adicionar tipos TypeScript corretos
- Não adicionar features não especificadas
- Não refatorar código fora do escopo

## Padrões Obrigatórios

### Imports

```typescript
// Ordem: React → Next → libs externas → @/ internos → tipos
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import type { ComponentProps } from './Component.types'
```

### Componente Padrão

```typescript
'use client' // apenas se necessário

type Props = {
  // tipos explícitos, sem any
}

export function ComponentName({ prop }: Props) {
  return (
    <section className={cn('...classes base...', 'classes condicionais')}>
      {/* conteúdo */}
    </section>
  )
}
```

### Tokens

```css
/* ✅ correto */
color: var(--vm-text-primary);
background: var(--vm-charcoal);

/* ❌ errado */
color: #F5F2ED;
background: #111111;
```

### Imagens

```tsx
// ✅ sempre next/image
<Image src="/images/..." alt="descrição" width={800} height={600} />

// ❌ nunca <img> diretamente
```

## Limites

- Arquivos: máximo 200 linhas por componente
- Sem `console.log`
- Sem `any` explícito
- Sem animações não especificadas pelo Architect
