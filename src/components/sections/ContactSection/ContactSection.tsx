'use client'

import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.contato)}`

const ICON_PROPS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

const CHANNELS = [
  {
    title: 'WhatsApp',
    detail: '(45) 9200-2510',
    description: 'Resposta rápida em horário comercial.',
    href: waUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a9.9 9.9 0 00-8.5 15.1L2 22l5-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.2-.4.6-1.3.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" />
      </svg>
    ),
  },
  {
    title: 'Instagram',
    detail: '@veritas_metal',
    description: 'Acompanhe as obras em andamento.',
    href: 'https://instagram.com/veritas_metal',
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Atendimento',
    detail: 'Segunda a sexta · 8h às 18h',
    description: 'Marechal Cândido Rondon e região Oeste do Paraná.',
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
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

export function ContactSection() {
  return (
    <SectionWrapper
      id="contato"
      aria-label="Entre em Contato"
      style={{ background: 'var(--vm-bg-primary)' }}
    >
      <div style={CONTAINER}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)', maxWidth: '640px' }}>
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
              Contato
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
              Vamos conversar sobre a sua obra.
            </h2>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-lg)',
                lineHeight: 'var(--vm-leading-relaxed)',
                color: 'var(--vm-text-on-light-secondary)',
              }}
            >
              Atendemos Marechal Cândido Rondon e toda a região Oeste do Paraná —
              do primeiro contato à entrega das chaves.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Canais */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vm-space-4)' }}>
            {CHANNELS.map((channel, i) => {
              const inner = (
                <>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      flexShrink: 0,
                      color: 'var(--vm-copper)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 'var(--vm-radius-md)',
                      border: '1px solid var(--vm-border-light)',
                      background: 'var(--vm-bg-primary)',
                      padding: '10px',
                    }}
                  >
                    {channel.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--vm-font-body)',
                        fontSize: 'var(--vm-text-xs)',
                        letterSpacing: 'var(--vm-tracking-label)',
                        textTransform: 'uppercase',
                        color: 'var(--vm-text-on-light-muted)',
                        marginBottom: 'var(--vm-space-1)',
                      }}
                    >
                      {channel.title}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--vm-font-heading)',
                        fontSize: 'var(--vm-h5)',
                        color: 'var(--vm-text-on-light)',
                        lineHeight: 'var(--vm-leading-snug)',
                        marginBottom: 'var(--vm-space-1)',
                      }}
                    >
                      {channel.detail}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--vm-font-body)',
                        fontSize: 'var(--vm-text-sm)',
                        color: 'var(--vm-text-on-light-secondary)',
                        lineHeight: 'var(--vm-leading-relaxed)',
                      }}
                    >
                      {channel.description}
                    </p>
                  </div>
                </>
              )

              const cardStyle: React.CSSProperties = {
                display: 'flex',
                gap: 'var(--vm-space-5)',
                alignItems: 'flex-start',
                background: 'var(--vm-card-bg)',
                border: '1px solid var(--vm-border-light)',
                borderRadius: 'var(--vm-radius-lg)',
                padding: 'var(--vm-space-6)',
                boxShadow: 'var(--vm-shadow-light-sm)',
                textDecoration: 'none',
                transition: `border-color var(--vm-dur-normal) var(--vm-ease-out), transform var(--vm-dur-normal) var(--vm-ease-out), box-shadow var(--vm-dur-normal) var(--vm-ease-out)`,
              }

              const hoverIn = (e: React.MouseEvent<HTMLElement>) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--vm-copper)'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = 'var(--vm-shadow-light-md)'
              }
              const hoverOut = (e: React.MouseEvent<HTMLElement>) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--vm-border-light)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'var(--vm-shadow-light-sm)'
              }

              return (
                <ScrollReveal key={channel.title} delay={Math.min(i * 0.08, 0.25)}>
                  {'href' in channel && channel.href ? (
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={cardStyle}
                      onMouseEnter={hoverIn}
                      onMouseLeave={hoverOut}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div style={cardStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                      {inner}
                    </div>
                  )}
                </ScrollReveal>
              )
            })}
          </div>

          {/* Mapa placeholder — pronto para receber embed real */}
          <ScrollReveal delay={0.15} direction="left">
            <div
              role="img"
              aria-label="Mapa da região de atendimento — Marechal Cândido Rondon, Paraná"
              style={{
                position: 'relative',
                minHeight: '360px',
                height: '100%',
                borderRadius: 'var(--vm-radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--vm-border-light)',
                background: 'linear-gradient(150deg, #FFFFFF 0%, #EFEFEA 60%, #E7E7E1 100%)',
                boxShadow: 'var(--vm-shadow-light-md)',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'repeating-linear-gradient(0deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 48px), repeating-linear-gradient(90deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 48px)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--vm-space-3)',
                  padding: 'var(--vm-space-6)',
                  textAlign: 'center',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--vm-copper)"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ width: '48px', height: '48px' }}
                >
                  <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <p
                  style={{
                    fontFamily: 'var(--vm-font-heading)',
                    fontSize: 'var(--vm-h5)',
                    color: 'var(--vm-text-on-light)',
                  }}
                >
                  Marechal Cândido Rondon — PR
                </p>
                <p
                  style={{
                    fontFamily: 'var(--vm-font-body)',
                    fontSize: 'var(--vm-text-sm)',
                    color: 'var(--vm-text-on-light-secondary)',
                    maxWidth: '300px',
                  }}
                >
                  Atendimento em toda a região Oeste do Paraná. Mapa interativo em
                  breve.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
