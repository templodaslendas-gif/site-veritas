'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const SESSION_KEY = 'vm_intro_shown'
const HOLD_MS = 2400

export function IntroSection() {
  const [show, setShow] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return
    const seen = sessionStorage.getItem(SESSION_KEY)
    if (seen) return
    sessionStorage.setItem(SESSION_KEY, '1')
    setShow(true)
    const t = setTimeout(() => setShow(false), HOLD_MS)
    return () => clearTimeout(t)
  }, [shouldReduceMotion])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'var(--vm-black)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Copper sweeping line */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '50%',
              marginTop: '-3.25rem',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent 0%, var(--vm-copper) 25%, var(--vm-copper-light) 50%, var(--vm-copper) 75%, transparent 100%)',
              transformOrigin: 'left',
            }}
          />

          {/* Brand identity */}
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            >
              <h1
                style={{
                  fontFamily: 'var(--vm-font-display)',
                  fontSize: 'clamp(3rem, 12vw, 9rem)',
                  letterSpacing: 'var(--vm-tracking-display)',
                  color: 'var(--vm-text-primary)',
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  margin: 0,
                }}
              >
                Veritas Metal
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.9 }}
              style={{
                marginTop: 'var(--vm-space-4)',
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-xs)',
                letterSpacing: 'var(--vm-tracking-label)',
                color: 'var(--vm-copper)',
                textTransform: 'uppercase',
              }}
            >
              Construção Inteligente · Engenharia Moderna
            </motion.p>
          </div>

          {/* Skip */}
          <button
            onClick={() => setShow(false)}
            aria-label="Pular introdução"
            style={{
              position: 'absolute',
              top: 'var(--vm-space-6)',
              right: 'var(--vm-space-6)',
              background: 'none',
              border: 'none',
              color: 'var(--vm-text-muted)',
              fontFamily: 'var(--vm-font-body)',
              fontSize: 'var(--vm-text-xs)',
              letterSpacing: 'var(--vm-tracking-label)',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: 'var(--vm-space-2) var(--vm-space-3)',
              transition: `color var(--vm-dur-fast) var(--vm-ease-out)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--vm-text-secondary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--vm-text-muted)'
            }}
          >
            Pular
          </button>

          {/* Linear progress bar */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: HOLD_MS / 1000, ease: 'linear' }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'var(--vm-copper)',
              transformOrigin: 'left',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
