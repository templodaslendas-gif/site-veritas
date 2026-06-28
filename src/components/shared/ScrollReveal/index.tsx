'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
  once?: boolean
  amount?: number
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0, y: 40 },
  down:  { x: 0, y: -40 },
  left:  { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none:  { x: 0, y: 0 },
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
  amount = 0,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once,
    amount,
    margin: '0px 0px -40px 0px',
  })

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  const { x, y } = offsets[direction]

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.6, delay, ease: [0, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
