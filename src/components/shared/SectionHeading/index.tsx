'use client'

import { useRef } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import { gsap } from '@/lib/gsap/register'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  onDark?: boolean
  align?: 'left' | 'center'
  maxWidth?: string
  titleSize?: string
  marginBottom?: string
}

// Cabeçalho de seção com reveal premium via GSAP + ScrollTrigger:
// linha copper (scaleX), eyebrow (fade+y), palavras da headline em stagger,
// descrição (fade+y). SSR renderiza tudo visível — o estado "hidden" só é
// aplicado client-side pelo GSAP (padrão CP-008: conteúdo nunca invisível
// se JS/animação falhar). prefers-reduced-motion mantém tudo estático.
export function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
  align = 'left',
  maxWidth = '680px',
  titleSize = 'clamp(2rem, 5vw, 3.5rem)',
  marginBottom = 'clamp(2rem, 5vw, 3.25rem)',
}: SectionHeadingProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const words = title.split(' ')

  useGSAP(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const wordEls = root.querySelectorAll<HTMLElement>('[data-sh-word]')
    const line = root.querySelector<HTMLElement>('[data-sh-line]')
    const eyebrowEl = root.querySelector<HTMLElement>('[data-sh-eyebrow]')
    const descEl = root.querySelector<HTMLElement>('[data-sh-desc]')

    const tl = gsap.timeline({
      scrollTrigger: { trigger: root, start: 'top 85%', once: true },
      defaults: { ease: 'power3.out' },
    })

    if (line) {
      tl.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          transformOrigin: align === 'center' ? 'center center' : 'left center',
        },
        0
      )
    }
    if (eyebrowEl) {
      tl.fromTo(eyebrowEl, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.05)
    }
    if (wordEls.length) {
      tl.fromTo(
        wordEls,
        { autoAlpha: 0, yPercent: 55 },
        { autoAlpha: 1, yPercent: 0, duration: 0.65, stagger: 0.045 },
        0.12
      )
    }
    if (descEl) {
      tl.fromTo(descEl, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.4)
    }
  }, [])

  const centered = align === 'center'

  return (
    <div
      ref={rootRef}
      style={{
        marginBottom,
        maxWidth,
        marginInline: centered ? 'auto' : undefined,
        textAlign: centered ? 'center' : 'left',
      }}
    >
      <div
        data-sh-line
        aria-hidden="true"
        style={{
          width: '40px',
          height: '2px',
          background: 'var(--vm-copper)',
          marginBottom: 'var(--vm-space-4)',
          marginInline: centered ? 'auto' : undefined,
        }}
      />
      <p
        data-sh-eyebrow
        style={{
          fontFamily: 'var(--vm-font-body)',
          fontSize: 'var(--vm-text-sm)',
          fontWeight: 600,
          letterSpacing: 'var(--vm-tracking-label)',
          color: 'var(--vm-copper)',
          textTransform: 'uppercase',
          marginBottom: 'var(--vm-space-4)',
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: 'var(--vm-font-display)',
          fontSize: titleSize,
          letterSpacing: 'var(--vm-tracking-display)',
          color: onDark ? 'var(--vm-text-primary)' : 'var(--vm-text-on-light)',
          textTransform: 'uppercase',
          lineHeight: 'var(--vm-leading-tight)',
          marginBottom: description ? 'var(--vm-space-6)' : 0,
        }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            <span data-sh-word style={{ display: 'inline-block' }}>
              {word}
            </span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </h2>
      {description && (
        <p
          data-sh-desc
          style={{
            fontFamily: 'var(--vm-font-body)',
            fontSize: 'var(--vm-text-lg)',
            lineHeight: 'var(--vm-leading-relaxed)',
            color: onDark
              ? 'var(--vm-text-secondary)'
              : 'var(--vm-text-on-light-secondary)',
            marginInline: centered ? 'auto' : undefined,
            maxWidth: centered ? '560px' : undefined,
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
