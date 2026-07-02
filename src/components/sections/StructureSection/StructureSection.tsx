'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

// Quando /steel-frame/estrutura.mp4 existir, trocar a imagem pelo vídeo aqui.
const LAYERS = [
  {
    number: '01',
    title: 'Aço galvanizado',
    description:
      'Perfis leves de aço revestido com zinco — o esqueleto da construção, imune a corrosão e cupins.',
  },
  {
    number: '02',
    title: 'Placas OSB',
    description:
      'Chapas estruturais na face externa que travam a estrutura e servem de base para o acabamento.',
  },
  {
    number: '03',
    title: 'Membrana hidrófuga',
    description:
      'Barreira que impede a entrada de água e deixa a parede respirar — proteção contra umidade.',
  },
  {
    number: '04',
    title: 'Isolamento termoacústico',
    description:
      'Lã de vidro ou PET entre os montantes: conforto térmico e silêncio dentro de casa.',
  },
  {
    number: '05',
    title: 'Drywall interno',
    description:
      'Placas de gesso acartonado na face interna, prontas para receber pintura ou revestimento.',
  },
  {
    number: '06',
    title: 'Acabamento',
    description:
      'Por fora, siding, placa cimentícia ou revestimento à escolha. Por dentro, o padrão que você quiser.',
  },
] as const

const CONTAINER = {
  maxWidth: 'var(--vm-container-xl)',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
  paddingBlock: 'clamp(4rem, 8vw, 8rem)',
}

export function StructureSection() {
  const imageRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-24, 24])

  return (
    <SectionWrapper
      id="conheca-estrutura"
      aria-label="Conheça a Estrutura"
      style={{ background: 'var(--vm-bg-secondary)' }}
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
              Anatomia da parede
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
              Conheça a estrutura por dentro.
            </h2>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-lg)',
                lineHeight: 'var(--vm-leading-relaxed)',
                color: 'var(--vm-text-on-light-secondary)',
              }}
            >
              Uma parede em Steel Frame é um sistema de camadas — cada uma com
              função definida em projeto. O resultado: mais desempenho com menos
              espessura que a alvenaria.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Imagem técnica com parallax leve */}
          <div ref={imageRef} className="lg:sticky lg:top-28">
            <ScrollReveal direction="right">
              <motion.div
                style={{
                  y: prefersReduced ? 0 : parallaxY,
                  position: 'relative',
                  borderRadius: 'var(--vm-radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--vm-border-light)',
                  boxShadow: 'var(--vm-shadow-light-lg)',
                }}
              >
                <Image
                  src="/steel-frame/estrutura.jpg"
                  alt="Diagrama técnico das camadas de uma parede em Steel Frame"
                  width={1600}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </motion.div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p
                style={{
                  fontFamily: 'var(--vm-font-body)',
                  fontSize: 'var(--vm-text-xs)',
                  color: 'var(--vm-text-on-light-muted)',
                  marginTop: 'var(--vm-space-4)',
                }}
              >
                Composição típica de parede em Light Steel Frame — dimensionada por
                projeto estrutural.
              </p>
            </ScrollReveal>
          </div>

          {/* Camadas numeradas */}
          <div>
            {LAYERS.map((layer, i) => (
              <ScrollReveal key={layer.number} delay={Math.min(i * 0.07, 0.3)} direction="left">
                <div
                  style={{
                    display: 'flex',
                    gap: 'var(--vm-space-6)',
                    alignItems: 'flex-start',
                    paddingBottom: 'var(--vm-space-8)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        border: '1px solid var(--vm-copper)',
                        background: 'var(--vm-bg-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--vm-font-display)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.08em',
                          color: 'var(--vm-copper)',
                        }}
                      >
                        {layer.number}
                      </span>
                    </div>
                    {i < LAYERS.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: 0.2 }}
                        style={{
                          width: '1px',
                          flex: 1,
                          minHeight: '1.75rem',
                          background: 'var(--vm-border-light)',
                          marginTop: 'var(--vm-space-2)',
                          transformOrigin: 'top',
                        }}
                      />
                    )}
                  </div>
                  <div style={{ paddingTop: 'var(--vm-space-1)' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--vm-font-heading)',
                        fontSize: 'var(--vm-h4)',
                        color: 'var(--vm-text-on-light)',
                        lineHeight: 'var(--vm-leading-snug)',
                        marginBottom: 'var(--vm-space-2)',
                      }}
                    >
                      {layer.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--vm-font-body)',
                        fontSize: 'var(--vm-text-base)',
                        lineHeight: 'var(--vm-leading-relaxed)',
                        color: 'var(--vm-text-on-light-secondary)',
                      }}
                    >
                      {layer.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
