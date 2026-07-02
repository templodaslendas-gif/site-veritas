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

const DIFFERENTIALS = [
  {
    title: 'Acompanhamento com engenheiro',
    description:
      'Responsável técnico presente do projeto à entrega. Cada etapa conferida por quem assina a obra.',
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5" />
      </svg>
    ),
  },
  {
    title: 'Equipe qualificada',
    description:
      'Montadores treinados no sistema Steel Frame — não é adaptação de pedreiro, é especialização.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 15l4-8 4 5 4-7 4 10" />
        <path d="M4 19h16" />
      </svg>
    ),
  },
  {
    title: 'Garantia real',
    description:
      'Garantia estrutural documentada em contrato, com assistência técnica depois da entrega.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 3L4 7v5c0 4.5 3.5 8.5 8 9.5 4.5-1 8-5 8-9.5V7l-8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Planejamento completo',
    description:
      'Cronograma físico-financeiro definido antes do primeiro perfil ser montado. Sem surpresas.',
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </svg>
    ),
  },
  {
    title: 'Execução do início ao fim',
    description:
      'Da fundação ao acabamento com um único responsável. Sem empurra-empurra entre empreiteiros.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 12h10" />
        <path d="M10 6l6 6-6 6" />
        <path d="M20 4v16" />
      </svg>
    ),
  },
  {
    title: 'Padrão técnico',
    description:
      'Normas ABNT do Light Steel Frame aplicadas em projeto, materiais e montagem. Qualidade mensurável.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M9.5 14.5L4 20M14 4l6 6-8.5 8.5a2 2 0 01-2.8 0L6 15.7a2 2 0 010-2.8L14 4z" />
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

export function DifferentialsSection() {
  return (
    <SectionWrapper
      id="diferenciais"
      aria-label="Diferenciais Veritas Metal"
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
              Por que a Veritas Metal
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
              Engenharia que você acompanha de perto.
            </h2>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-lg)',
                lineHeight: 'var(--vm-leading-relaxed)',
                color: 'var(--vm-text-on-light-secondary)',
              }}
            >
              Construir com a Veritas Metal é ter previsibilidade, responsabilidade
              técnica e uma equipe que responde por cada detalhe da obra.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de diferenciais */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((item, i) => (
            <ScrollReveal key={item.title} delay={Math.min(i * 0.08, 0.4)} direction="up">
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
                  {item.icon}
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
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--vm-font-body)',
                    fontSize: 'var(--vm-text-sm)',
                    lineHeight: 'var(--vm-leading-relaxed)',
                    color: 'var(--vm-text-on-light-secondary)',
                  }}
                >
                  {item.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
