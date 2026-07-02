'use client'

import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const ICON_PROPS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

const BENEFITS = [
  {
    title: 'Velocidade',
    description: 'Obra até 60% mais rápida. Estrutura montada em semanas, não em meses.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />
      </svg>
    ),
  },
  {
    title: 'Economia',
    description: 'Fundação mais barata, prazo menor, zero retrabalho. Custo final previsível.',
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5c0-1 1-1.8 2.5-1.8s2.5.8 2.5 1.8-1 1.5-2.5 1.8-2.5.8-2.5 1.9 1 1.8 2.5 1.8 2.5-.8 2.5-1.8" />
      </svg>
    ),
  },
  {
    title: 'Conforto térmico',
    description: 'Isolamento nas paredes mantém a casa fresca no verão e aquecida no inverno.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 3a3 3 0 013 3v7.5a4.5 4.5 0 11-6 0V6a3 3 0 013-3z" />
        <circle cx="12" cy="17" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'Conforto acústico',
    description: 'Camadas de isolamento reduzem o ruído externo. Silêncio dentro de casa.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 9v6h4l5 4V5L8 9H4z" />
        <path d="M16.5 8.5a5 5 0 010 7" />
      </svg>
    ),
  },
  {
    title: 'Sustentabilidade',
    description: 'Aço 100% reciclável, obra seca e baixo consumo de água e areia.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M20 7c0 7-6 13-16 14 0-7 2-11 6-13 3-1 7-1 10-1z" />
        <path d="M4 21c2-3 5-6 8-8" />
      </svg>
    ),
  },
  {
    title: 'Limpeza',
    description: 'Canteiro organizado do início ao fim. Quase nenhum entulho gerado.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M5 12l4.5 4.5L19 7" />
      </svg>
    ),
  },
  {
    title: 'Resistência',
    description: 'Aço galvanizado dimensionado por norma ABNT. Imune a cupim e apodrecimento.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 3L4 7v5c0 4.5 3.5 8.5 8 9.5 4.5-1 8-5 8-9.5V7l-8-4z" />
      </svg>
    ),
  },
  {
    title: 'Valorização',
    description: 'Tecnologia construtiva reconhecida valoriza o imóvel na revenda.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 19h16M6 19v-6M11 19V9M16 19V5" />
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

export function BenefitsSection() {
  return (
    <SectionWrapper
      id="beneficios"
      aria-label="Benefícios do Steel Frame"
      style={{ background: 'var(--vm-bg-primary)' }}
    >
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
              Benefícios
            </p>
            <h2
              style={{
                fontFamily: 'var(--vm-font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: 'var(--vm-tracking-display)',
                color: 'var(--vm-text-on-light)',
                textTransform: 'uppercase',
                lineHeight: 'var(--vm-leading-tight)',
                marginBottom: 'var(--vm-space-6)',
              }}
            >
              Tudo o que sua obra ganha com Steel Frame.
            </h2>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-lg)',
                lineHeight: 'var(--vm-leading-relaxed)',
                color: 'var(--vm-text-on-light-secondary)',
              }}
            >
              Cada vantagem do sistema industrializado se traduz em economia,
              conforto e tranquilidade — da fundação à entrega das chaves.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {BENEFITS.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={Math.min(i * 0.07, 0.35)} direction="up">
              <article
                style={{
                  background: 'var(--vm-card-bg)',
                  border: '1px solid var(--vm-border-light)',
                  borderRadius: 'var(--vm-radius-lg)',
                  padding: 'var(--vm-space-8)',
                  height: '100%',
                  cursor: 'default',
                  boxShadow: 'var(--vm-shadow-light-sm)',
                  transition: `border-color var(--vm-dur-normal) var(--vm-ease-out), transform var(--vm-dur-normal) var(--vm-ease-out), box-shadow var(--vm-dur-normal) var(--vm-ease-out)`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--vm-copper)'
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = 'var(--vm-shadow-light-md)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--vm-border-light)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'var(--vm-shadow-light-sm)'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'var(--vm-copper)',
                    marginBottom: 'var(--vm-space-5)',
                  }}
                >
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--vm-font-heading)',
                    fontSize: 'var(--vm-h4)',
                    color: 'var(--vm-text-on-light)',
                    lineHeight: 'var(--vm-leading-snug)',
                    marginBottom: 'var(--vm-space-3)',
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--vm-font-body)',
                    fontSize: 'var(--vm-text-sm)',
                    lineHeight: 'var(--vm-leading-relaxed)',
                    color: 'var(--vm-text-on-light-secondary)',
                  }}
                >
                  {benefit.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
