'use client'

import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const CARDS = [
  {
    title: '60% mais rápido',
    description:
      'Obra no prazo, com cronograma real. Sistemas industrializados eliminam o imprevisto que paralisa a construção convencional.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    title: 'Estrutura de aço',
    description:
      'Galvanizado, antifúngico e resistente a cupins. Normas ABNT, acompanhamento técnico e garantia real em cada fase da obra.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3L4 7v5c0 4.5 3.5 8.5 8 9.5 4.5-1 8-5 8-9.5V7l-8-4z" />
      </svg>
    ),
  },
  {
    title: '90% menos entulho',
    description:
      'Cada peça projetada e cortada em fábrica. Quase nenhum resíduo em obra — menos impacto ambiental, mais eficiência real.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 7c0 7-6 13-16 14 0-7 2-11 6-13 3-1 7-1 10-1z" />
        <path d="M4 21c2-3 5-6 8-8" />
      </svg>
    ),
  },
] as const

const CONTAINER = {
  maxWidth: 'var(--vm-container-xl)',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
  paddingBlock: 'clamp(4rem, 8vw, 8rem)',
}

export function FutureSection() {
  return (
    <SectionWrapper id="futuro" style={{ background: 'var(--vm-charcoal)' }}>
      <div style={CONTAINER}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: 'var(--vm-space-16)', maxWidth: '640px' }}>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-xs)',
                letterSpacing: 'var(--vm-tracking-label)',
                color: 'var(--vm-copper)',
                textTransform: 'uppercase',
                marginBottom: 'var(--vm-space-4)',
              }}
            >
              Evolução
            </p>
            <h2
              style={{
                fontFamily: 'var(--vm-font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: 'var(--vm-tracking-display)',
                color: 'var(--vm-text-primary)',
                textTransform: 'uppercase',
                lineHeight: 'var(--vm-leading-tight)',
                marginBottom: 'var(--vm-space-6)',
              }}
            >
              O futuro da construção já chegou.
            </h2>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-lg)',
                lineHeight: 'var(--vm-leading-relaxed)',
                color: 'var(--vm-text-secondary)',
              }}
            >
              Steel Frame não é tendência. É a forma como as melhores construtoras do
              mundo já constroem há décadas — agora disponível em Marechal Rondon, com
              a qualidade e o acompanhamento que o seu projeto merece.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1} direction="up">
              <article
                style={{
                  background: 'var(--vm-surface)',
                  border: '1px solid var(--vm-border)',
                  borderRadius: 'var(--vm-radius-lg)',
                  padding: 'var(--vm-space-8)',
                  height: '100%',
                  cursor: 'default',
                  transition: `border-color var(--vm-dur-normal) var(--vm-ease-out), transform var(--vm-dur-normal) var(--vm-ease-out)`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--vm-copper)'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--vm-border)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    color: 'var(--vm-copper)',
                    marginBottom: 'var(--vm-space-6)',
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--vm-font-display)',
                    fontSize: 'var(--vm-display-sm)',
                    letterSpacing: 'var(--vm-tracking-display)',
                    color: 'var(--vm-text-primary)',
                    textTransform: 'uppercase',
                    lineHeight: 'var(--vm-leading-tight)',
                    marginBottom: 'var(--vm-space-3)',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--vm-font-body)',
                    fontSize: 'var(--vm-text-base)',
                    lineHeight: 'var(--vm-leading-relaxed)',
                    color: 'var(--vm-text-secondary)',
                  }}
                >
                  {card.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.25}>
          <div style={{ marginTop: 'var(--vm-space-12)', textAlign: 'center' }}>
            <a
              href="#steel-frame"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--vm-space-2)',
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-sm)',
                letterSpacing: 'var(--vm-tracking-label)',
                color: 'var(--vm-copper)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: `color var(--vm-dur-fast) var(--vm-ease-out)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--vm-copper-light)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--vm-copper)'
              }}
            >
              Entenda o sistema construtivo
              <span aria-hidden="true" style={{ fontFamily: 'var(--vm-font-body)' }}>→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
