'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'
import { NAV_ITEMS } from './NavDesktop'

export function NavMobile({ scrolled = false }: { scrolled?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.orcamento)}`

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        style={{
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          width: '40px',
          height: '40px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
        }}
      >
        <span
          style={{
            display: 'block',
            width: '22px',
            height: '2px',
            background: scrolled ? 'var(--vm-text-on-light)' : 'var(--vm-text-primary)',
            transition: `transform var(--vm-dur-normal) var(--vm-ease-out), opacity var(--vm-dur-normal) var(--vm-ease-out)`,
            transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '22px',
            height: '2px',
            background: scrolled ? 'var(--vm-text-on-light)' : 'var(--vm-text-primary)',
            transition: `opacity var(--vm-dur-normal) var(--vm-ease-out)`,
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: 'block',
            width: '22px',
            height: '2px',
            background: scrolled ? 'var(--vm-text-on-light)' : 'var(--vm-text-primary)',
            transition: `transform var(--vm-dur-normal) var(--vm-ease-out), opacity var(--vm-dur-normal) var(--vm-ease-out)`,
            transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(8, 8, 8, 0.6)',
                zIndex: 49,
              }}
              aria-hidden
            />

            <motion.nav
              key="drawer"
              id="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(320px, 85vw)',
                background: 'var(--vm-charcoal)',
                borderLeft: '1px solid var(--vm-border)',
                zIndex: 50,
                display: 'flex',
                flexDirection: 'column' as const,
                padding: 'var(--vm-space-6)',
                paddingTop: '88px',
                gap: 'var(--vm-space-2)',
                overflowY: 'auto' as const,
              }}
              aria-label="Menu mobile"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3, ease: [0, 0, 0.2, 1] }}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: 'var(--vm-font-body)',
                    fontSize: 'var(--vm-text-base)',
                    letterSpacing: 'var(--vm-tracking-label)',
                    color: 'var(--vm-text-secondary)',
                    textTransform: 'uppercase' as const,
                    textDecoration: 'none',
                    paddingBlock: 'var(--vm-space-3)',
                    borderBottom: '1px solid var(--vm-border)',
                    transition: `color var(--vm-dur-fast) var(--vm-ease-out)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--vm-text-primary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--vm-text-secondary)'
                  }}
                >
                  {item.label}
                </motion.a>
              ))}

              <div style={{ marginTop: 'auto', paddingTop: 'var(--vm-space-6)' }}>
                <Link
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: 'var(--vm-space-4)',
                    background: 'var(--vm-copper)',
                    color: 'var(--vm-black)',
                    fontFamily: 'var(--vm-font-body)',
                    fontSize: 'var(--vm-text-sm)',
                    fontWeight: 600,
                    letterSpacing: 'var(--vm-tracking-label)',
                    textTransform: 'uppercase' as const,
                    textDecoration: 'none',
                    borderRadius: 'var(--vm-radius-sm)',
                    width: '100%',
                  }}
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
