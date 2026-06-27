'use client'

import { useEffect, useRef } from 'react'
import { registerGSAP, gsap } from '@/lib/gsap/register'

type GSAPCallback = () => void

export function useGSAP(callback: GSAPCallback, deps: React.DependencyList = []) {
  const contextRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    registerGSAP()
    contextRef.current = gsap.context(callback)

    return () => {
      contextRef.current?.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return contextRef
}
