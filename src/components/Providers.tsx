'use client'

import { LenisProvider } from '@/lib/lenis/LenisProvider'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <LenisProvider>{children}</LenisProvider>
}
