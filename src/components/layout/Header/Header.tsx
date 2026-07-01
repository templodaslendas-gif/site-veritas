'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NavDesktop } from './NavDesktop'
import { NavMobile } from './NavMobile'
import { HeaderCTA } from './HeaderCTA'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed left-0 right-0 top-0 flex items-center justify-between px-4 lg:px-6"
      style={{
        height: scrolled ? '64px' : '72px',
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--vm-border-light)'
          : '1px solid transparent',
        transition: [
          'height var(--vm-dur-normal) var(--vm-ease-out)',
          'background-color var(--vm-dur-normal) var(--vm-ease-out)',
          'backdrop-filter var(--vm-dur-normal) var(--vm-ease-out)',
          'border-color var(--vm-dur-normal) var(--vm-ease-out)',
        ].join(', '),
      }}
    >
      <Link
        href="/"
        aria-label="Veritas Metal — Página inicial"
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
      >
        <span
          style={{
            fontFamily: 'var(--vm-font-display)',
            fontSize: scrolled ? '1.375rem' : '1.5rem',
            letterSpacing: 'var(--vm-tracking-display)',
            color: scrolled ? 'var(--vm-text-on-light)' : 'var(--vm-text-primary)',
            lineHeight: 1,
            userSelect: 'none',
            transition: 'font-size var(--vm-dur-normal) var(--vm-ease-out)',
          }}
        >
          VERITAS METAL
        </span>
      </Link>

      <NavDesktop scrolled={scrolled} />

      <div className="flex items-center gap-4">
        <div className="hidden lg:block">
          <HeaderCTA />
        </div>
        <NavMobile scrolled={scrolled} />
      </div>
    </header>
  )
}
