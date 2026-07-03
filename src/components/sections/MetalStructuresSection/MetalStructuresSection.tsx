'use client'

import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ImageCarousel } from '@/components/shared/ImageCarousel'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.estruturas)}`

const METAL_IMAGES = [
  { src: '/estruturas/estrutura-metalica-01.jpg', alt: 'Estrutura metálica de galpão em montagem' },
  { src: '/estruturas/estrutura-metalica-02.jpg', alt: 'Detalhe de ligação em estrutura de aço' },
  { src: '/estruturas/estrutura-metalica-03.jpg', alt: 'Cobertura metálica com grandes vãos livres' },
  { src: '/estruturas/estrutura-metalica-04.jpg', alt: 'Vista panorâmica de estrutura metálica industrial' },
  { src: '/estruturas/estrutura-metalica-05.jpg', alt: 'Montagem de vigas e pilares metálicos' },
  { src: '/estruturas/estrutura-metalica-06.jpg', alt: 'Estrutura metálica concluída com fechamento' },
] as const

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
  paddingBlock: 'clamp(3.25rem, 6.5vw, 6rem)',
}

export function MetalStructuresSection() {
  return (
    <SectionWrapper
      id="estruturas"
      aria-label="Estruturas Metálicas"
      style={{ background: 'var(--vm-bg-primary)' }}
    >
      <div style={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Carrossel — à esquerda no desktop para alternar o ritmo com a seção Drywall */}
          <ScrollReveal delay={0.1} direction="right" className="order-2 lg:order-1">
            <ImageCarousel
              images={METAL_IMAGES}
              label="Fotos de estruturas metálicas executadas pela Veritas Metal"
              fallbackLabel="Fotos em breve"
              fallbackSublabel="Fabricação e montagem de estruturas metálicas"
            />
          </ScrollReveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Estruturas metálicas"
              title="Força, precisão e segurança para estruturas sob medida."
              description="Projetamos, fabricamos e montamos estruturas metálicas para obras residenciais, comerciais, industriais e rurais com padrão técnico, resistência e acabamento profissional."
              titleSize="clamp(2rem, 4.5vw, 3.25rem)"
              marginBottom="var(--vm-space-8)"
            />

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
                className="vm-link-copper"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--vm-space-2)',
                  marginTop: 'var(--vm-space-6)',
                  fontFamily: 'var(--vm-font-body)',
                  fontSize: 'var(--vm-text-sm)',
                  fontWeight: 600,
                  letterSpacing: 'var(--vm-tracking-label)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                Solicitar estrutura metálica
                <span data-arrow aria-hidden="true">
                  →
                </span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
