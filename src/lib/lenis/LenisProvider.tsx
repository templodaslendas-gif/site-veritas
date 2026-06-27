'use client'

import { useEffect, useRef, createContext, useContext } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'

type LenisContextValue = {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextValue>({ lenis: null })

export function useLenisContext() {
  return useContext(LenisContext)
}

type LenisProviderProps = {
  children: React.ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    lenisRef.current = lenis

    const rafCallback = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(rafCallback)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  )
}
