'use client'

import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { VideoPlayer } from '@/components/shared/VideoPlayer'
import { MediaPlaceholder } from '@/components/shared/MediaPlaceholder'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.drywall)}`

// Quando /drywall/drywall.mp4 existir em public/, definir o caminho aqui.
const DRYWALL_VIDEO: string | null = null

const HIGHLIGHTS = [
  'Paredes, forros e sancas com acabamento perfeito',
  'Execução limpa e rápida, sem quebra-quebra',
  'Isolamento acústico entre ambientes',
  'Ideal para reformas, divisórias e interiores',
] as const

const CONTAINER = {
  maxWidth: 'var(--vm-container-xl)',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
  paddingBlock: 'clamp(4rem, 8vw, 8rem)',
}

export function DrywallSection() {
  return (
    <SectionWrapper
      id="drywall"
      aria-label="Drywall"
      style={{ background: 'var(--vm-bg-secondary)' }}
    >
      <div style={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <ScrollReveal>
              <div
                aria-hidden="true"
                style={{
                  width: '32px',
                  height: '2px',
                  background: 'var(--vm-copper)',
                  marginBottom: 'var(--vm-space-4)',
                }}
              />
              <p
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
                Drywall de alto padrão
              </p>
              <h2
                style={{
                  fontFamily: 'var(--vm-font-display)',
                  fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
                  letterSpacing: 'var(--vm-tracking-display)',
                  color: 'var(--vm-text-on-light)',
                  textTransform: 'uppercase',
                  lineHeight: 'var(--vm-leading-tight)',
                  marginBottom: 'var(--vm-space-6)',
                }}
              >
                Drywall para interiores rápidos, limpos e impecáveis.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--vm-font-body)',
                  fontSize: 'var(--vm-text-lg)',
                  lineHeight: 'var(--vm-leading-relaxed)',
                  color: 'var(--vm-text-on-light-secondary)',
                  marginBottom: 'var(--vm-space-8)',
                }}
              >
                A mesma precisão do Steel Frame aplicada aos ambientes internos.
                Divisórias, forros e revestimentos em gesso acartonado com
                planejamento e acabamento de alto padrão.
              </p>
            </ScrollReveal>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {HIGHLIGHTS.map((item, i) => (
                <ScrollReveal key={item} delay={Math.min(i * 0.08, 0.3)}>
                  <li
                    style={{
                      display: 'flex',
                      gap: 'var(--vm-space-3)',
                      alignItems: 'flex-start',
                      marginBottom: 'var(--vm-space-4)',
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--vm-copper)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '3px' }}
                    >
                      <path d="M5 12l4.5 4.5L19 7" />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'var(--vm-font-body)',
                        fontSize: 'var(--vm-text-base)',
                        lineHeight: 'var(--vm-leading-relaxed)',
                        color: 'var(--vm-text-on-light-secondary)',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal delay={0.3}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--vm-space-2)',
                  marginTop: 'var(--vm-space-6)',
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
                Orçar projeto em Drywall
                <span aria-hidden="true">→</span>
              </a>
            </ScrollReveal>
          </div>

          {/* Mídia */}
          <ScrollReveal delay={0.1} direction="left">
            {DRYWALL_VIDEO ? (
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  borderRadius: 'var(--vm-radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--vm-border-light)',
                  boxShadow: 'var(--vm-shadow-light-lg)',
                }}
              >
                <div style={{ position: 'absolute', inset: 0 }}>
                  <VideoPlayer
                    src={DRYWALL_VIDEO}
                    autoPlay
                    loop
                    muted
                    preload="none"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <MediaPlaceholder
                label="Vídeo em breve"
                sublabel="Execução de Drywall pela equipe Veritas Metal"
              />
            )}
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
