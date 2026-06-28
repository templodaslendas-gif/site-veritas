'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
  once?: boolean
}

const offsets: Record<Direction, string> = {
  up:    'translateY(20px)',
  down:  'translateY(-20px)',
  left:  'translateX(20px)',
  right: 'translateX(-20px)',
  none:  'none',
}

// SSR: renders visible. Client: optional entrance animation below the fold.
// Content is NEVER opacity:0 in server-rendered HTML.
// If JS/IO fails, content remains visible at its natural position.
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  // 'idle' = SSR / not yet checked (no inline styles → content visible)
  // 'waiting' = below fold, JS running (opacity:0 client-side only)
  // 'entered' = in viewport (opacity:1 with transition)
  const [phase, setPhase] = useState<'idle' | 'waiting' | 'entered'>('idle')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return // leave as 'idle' = visible

    const rect = el.getBoundingClientRect()
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (alreadyVisible) return // above/at fold — no animation needed

    // Below fold: set up entrance animation
    setPhase('waiting')

    // Safety: force visible after 3s even if observer never fires
    const fallback = setTimeout(() => setPhase('entered'), 3000)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback)
          setPhase('entered')
          if (once) observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -20px 0px' }
    )

    observer.observe(el)
    return () => {
      clearTimeout(fallback)
      observer.disconnect()
    }
  }, [once])

  const style: React.CSSProperties =
    phase === 'waiting'
      ? { opacity: 0, transform: offsets[direction], transition: 'none' }
      : phase === 'entered'
        ? {
            opacity: 1,
            transform: 'none',
            transition: `opacity 0.55s ${delay}s ease-out, transform 0.55s ${delay}s ease-out`,
          }
        : {} // 'idle' → no inline styles → browser default opacity:1

  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  )
}
