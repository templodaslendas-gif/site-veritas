'use client'

import { useLenisContext } from '@/lib/lenis/LenisProvider'

export function useLenis() {
  return useLenisContext().lenis
}
