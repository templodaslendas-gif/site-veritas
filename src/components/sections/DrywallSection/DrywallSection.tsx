'use client'

import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ImageCarousel } from '@/components/shared/ImageCarousel'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.drywall)}`

const DRYWALL_IMAGES = [
  { src: '/drywall/drywall-01.png', alt: 'Ambiente interno com forro e paredes em drywall' },
  { src: '/drywall/drywall-02.jpg', alt: 'Execução de parede em gesso acartonado' },
  { src: '/drywall/drywall-03.jpg', alt: 'Detalhe de sanca em drywall com iluminação embutida' },
  { src: '/drywall/drywall-04.jpg', alt: 'Montagem de estrutura para divisória em drywall' },
  { src: '/drywall/drywall-05.jpg', alt: 'Acabamento final de forro em gesso acartonado' },
] as const

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
  paddingBlock: 'clamp(3.25rem, 6.5vw, 6rem)',
}

export function DrywallSection() {
  return (
    <SectionWrapper
      id="drywall"
      aria-label="Drywall"
      style={{ background: 'var(--vm-bg-secondary)' }}
    >
      <div style={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="Drywall de alto padrão"
              title="Interiores sofisticados, execução limpa e acabamento impecável."
              description="Soluções em gesso acartonado para divisórias, forros, sancas e revestimentos internos com precisão, rapidez e acabamento profissional."
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
                Solicitar projeto em Drywall
                <span data-arrow aria-hidden="true">
                  →
                </span>
              </a>
            </ScrollReveal>
          </div>

          {/* Carrossel de fotos */}
          <ScrollReveal delay={0.1} direction="left">
            <ImageCarousel
              images={DRYWALL_IMAGES}
              label="Fotos de projetos em Drywall executados pela Veritas Metal"
              fallbackLabel="Fotos em breve"
              fallbackSublabel="Execução de Drywall pela equipe Veritas Metal"
            />
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
