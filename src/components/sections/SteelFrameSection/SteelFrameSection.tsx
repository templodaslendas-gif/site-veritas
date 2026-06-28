'use client'

import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.orcamento)}`

const BENEFITS = [
  'Estrutura em perfis de aço galvanizado de alta resistência',
  'Montagem até 3× mais rápida que a alvenaria convencional',
  'Isolamento térmico e acústico superior por padrão',
  'Precisão milimétrica do projeto à execução final',
  'Compatível com qualquer tipo de revestimento externo',
  'Geração mínima de resíduos — obra mais limpa e ágil',
]

const CONTAINER = {
  maxWidth: 'var(--vm-container-xl)',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
  paddingBlock: 'clamp(4rem, 8vw, 8rem)',
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={16}
      height={16}
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: '2px', color: 'var(--vm-copper)' }}
    >
      <path d="M2 8l4 4 8-8" />
    </svg>
  )
}

function VideoPlaceholder() {
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        background: 'var(--vm-surface)',
        borderRadius: 'var(--vm-radius-lg)',
        border: '1px solid var(--vm-border)',
        overflow: 'hidden',
      }}
      aria-label="Vídeo em produção"
      role="img"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--vm-space-4)',
          background:
            'radial-gradient(ellipse at center, rgba(196,128,62,0.06) 0%, transparent 70%)',
        }}
      >
        {/* Play button */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: '1px solid var(--vm-border-strong)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="var(--vm-copper)"
            width={20}
            height={20}
            aria-hidden="true"
          >
            <polygon points="6,4 20,12 6,20" />
          </svg>
        </div>
        <p
          style={{
            fontFamily: 'var(--vm-font-body)',
            fontSize: 'var(--vm-text-xs)',
            letterSpacing: 'var(--vm-tracking-label)',
            color: 'var(--vm-text-muted)',
            textTransform: 'uppercase',
          }}
        >
          Vídeo em breve
        </p>
      </div>
    </div>
  )
}

export function SteelFrameSection() {
  return (
    <SectionWrapper id="steel-frame" style={{ background: 'var(--vm-black)' }}>
      <div style={CONTAINER}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left: content */}
          <div>
            <ScrollReveal>
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
                Steel Frame
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
                Perfis de aço.
                <br />
                Precisão milimétrica.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--vm-font-body)',
                  fontSize: 'var(--vm-text-lg)',
                  lineHeight: 'var(--vm-leading-relaxed)',
                  color: 'var(--vm-text-secondary)',
                  marginBottom: 'var(--vm-space-8)',
                }}
              >
                Steel Frame é um sistema construtivo industrializado onde toda a estrutura
                é formada por perfis leves de aço galvanizado. Leve, resistente e rápido
                — com a precisão que a alvenaria tradicional não consegue alcançar.
              </p>
            </ScrollReveal>

            {/* Benefits */}
            <ScrollReveal delay={0.1}>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: 'var(--vm-space-10)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--vm-space-3)',
                }}
              >
                {BENEFITS.map((benefit) => (
                  <li
                    key={benefit}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--vm-space-3)',
                      fontFamily: 'var(--vm-font-body)',
                      fontSize: 'var(--vm-text-base)',
                      lineHeight: 'var(--vm-leading-normal)',
                      color: 'var(--vm-text-secondary)',
                    }}
                  >
                    <CheckIcon />
                    {benefit}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingInline: '2rem',
                    paddingBlock: '0.9rem',
                    background: 'var(--vm-copper)',
                    color: 'var(--vm-black)',
                    fontFamily: 'var(--vm-font-body)',
                    fontSize: 'var(--vm-text-sm)',
                    fontWeight: 600,
                    letterSpacing: 'var(--vm-tracking-label)',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderRadius: 'var(--vm-radius-sm)',
                    border: '1px solid var(--vm-copper)',
                    whiteSpace: 'nowrap',
                    transition: `background-color var(--vm-dur-fast) var(--vm-ease-out), transform var(--vm-dur-fast) var(--vm-ease-out)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--vm-copper-light)'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--vm-copper)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Solicitar orçamento
                </a>
                <a
                  href="#como-funciona"
                  className="w-full sm:w-auto"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingInline: '2rem',
                    paddingBlock: '0.9rem',
                    background: 'transparent',
                    color: 'var(--vm-text-primary)',
                    fontFamily: 'var(--vm-font-body)',
                    fontSize: 'var(--vm-text-sm)',
                    fontWeight: 500,
                    letterSpacing: 'var(--vm-tracking-label)',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderRadius: 'var(--vm-radius-sm)',
                    border: '1px solid var(--vm-border-strong)',
                    whiteSpace: 'nowrap',
                    transition: `border-color var(--vm-dur-fast) var(--vm-ease-out), color var(--vm-dur-fast) var(--vm-ease-out), transform var(--vm-dur-fast) var(--vm-ease-out)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--vm-copper)'
                    e.currentTarget.style.color = 'var(--vm-copper-light)'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--vm-border-strong)'
                    e.currentTarget.style.color = 'var(--vm-text-primary)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Veja como funciona
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: visual */}
          <ScrollReveal direction="left" delay={0.15}>
            <VideoPlaceholder />
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
