'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function HeroScrollIndicator() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <a
      href="#futuro"
      aria-label="Rolar para a próxima seção"
      style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.375rem',
        textDecoration: 'none',
        opacity: 0.55,
        transition: `opacity var(--vm-dur-fast) var(--vm-ease-out)`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.55' }}
      onFocus={(e) => { e.currentTarget.style.opacity = '1' }}
      onBlur={(e) => { e.currentTarget.style.opacity = '0.55' }}
    >
      <span
        style={{
          fontFamily: 'var(--vm-font-body)',
          fontSize: 'var(--vm-text-xs)',
          letterSpacing: 'var(--vm-tracking-label)',
          color: 'var(--vm-text-muted)',
          textTransform: 'uppercase',
        }}
      >
        Ver mais
      </span>
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 7, 0] }}
        transition={
          shouldReduceMotion
            ? {}
            : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 4v12M5 11l5 5 5-5"
            stroke="var(--vm-copper)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </a>
  )
}
