'use client'

import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { VideoPlayer } from '@/components/shared/VideoPlayer'
import { MediaPlaceholder } from '@/components/shared/MediaPlaceholder'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.estruturas)}`

// Quando /estruturas/estrutura-metalica.mp4 existir em public/, definir o caminho aqui.
const METAL_VIDEO: string | null = null

const HIGHLIGHTS = [
  'Galpões comerciais, industriais e rurais',
  'Mezaninos, coberturas e escadas metálicas',
  'Grandes vãos livres sem pilares intermediários',
  'Fabricação e montagem com responsabilidade técnica',
] as const

const CONTAINER = {
  maxWidth: 'var(--vm-container-xl)',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
  paddingBlock: 'clamp(4rem, 8vw, 8rem)',
}

export function MetalStructuresSection() {
  return (
    <SectionWrapper
      id="estruturas"
      aria-label="Estruturas Metálicas"
      style={{ background: 'var(--vm-bg-primary)' }}
    >
      <div style={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Mídia — à esquerda no desktop para alternar o ritmo com a seção Drywall */}
          <ScrollReveal delay={0.1} direction="right" className="order-2 lg:order-1">
            {METAL_VIDEO ? (
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
                    src={METAL_VIDEO}
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
                sublabel="Fabricação e montagem de estruturas metálicas"
              />
            )}
          </ScrollReveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
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
                Estruturas metálicas
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
                Estruturas metálicas sob medida para obras fortes e precisas.
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
                Para projetos que exigem vãos maiores e cargas pesadas, a Veritas
                Metal projeta, fabrica e monta estruturas em aço com o mesmo padrão
                técnico do Steel Frame.
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
                Orçar estrutura metálica
                <span aria-hidden="true">→</span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
