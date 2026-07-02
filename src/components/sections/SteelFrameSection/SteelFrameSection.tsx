'use client'

import Image from 'next/image'
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

export function SteelFrameSection() {
  return (
    <SectionWrapper id="steel-frame" style={{ background: 'var(--vm-bg-secondary)' }}>
      <div style={CONTAINER}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-16">

          {/* Coluna de texto — protagonista */}
          <div>
            {/* Eyebrow */}
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
                O que é Steel Frame
              </p>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={0.05}>
              <h2
                style={{
                  fontFamily: 'var(--vm-font-display)',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  letterSpacing: 'var(--vm-tracking-display)',
                  color: 'var(--vm-text-on-light)',
                  textTransform: 'uppercase',
                  lineHeight: 'var(--vm-leading-tight)',
                  marginBottom: 'var(--vm-space-6)',
                  maxWidth: '640px',
                }}
              >
                Perfis de aço.
                <br />
                Precisão milimétrica.
              </h2>
            </ScrollReveal>

            {/* Intro text */}
            <ScrollReveal delay={0.1}>
              <p
                style={{
                  fontFamily: 'var(--vm-font-body)',
                  fontSize: 'var(--vm-text-lg)',
                  lineHeight: 'var(--vm-leading-relaxed)',
                  color: 'var(--vm-text-on-light-secondary)',
                  maxWidth: '640px',
                  marginBottom: 'var(--vm-space-10)',
                }}
              >
                Steel Frame é um sistema construtivo industrializado onde toda a estrutura
                é formada por perfis leves de aço galvanizado. Leve, resistente e rápido
                — com a precisão que a alvenaria tradicional não consegue alcançar.
              </p>
            </ScrollReveal>

            {/* Lista de benefícios — 2 colunas no desktop */}
            <ScrollReveal delay={0.15}>
              <ul
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: 'var(--vm-space-10)',
                  maxWidth: '760px',
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
                      color: 'var(--vm-text-on-light-secondary)',
                    }}
                  >
                    <CheckIcon />
                    {benefit}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* CTA */}
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
                    color: 'var(--vm-text-on-light)',
                    fontFamily: 'var(--vm-font-body)',
                    fontSize: 'var(--vm-text-sm)',
                    fontWeight: 500,
                    letterSpacing: 'var(--vm-tracking-label)',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderRadius: 'var(--vm-radius-sm)',
                    border: '1px solid var(--vm-border-light)',
                    whiteSpace: 'nowrap',
                    transition: `border-color var(--vm-dur-fast) var(--vm-ease-out), color var(--vm-dur-fast) var(--vm-ease-out), transform var(--vm-dur-fast) var(--vm-ease-out)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--vm-copper)'
                    e.currentTarget.style.color = 'var(--vm-copper)'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--vm-border-light)'
                    e.currentTarget.style.color = 'var(--vm-text-on-light)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Veja como funciona
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Imagem técnica complementar — não protagonista */}
          <ScrollReveal delay={0.12}>
            <div className="lg:sticky lg:top-32">
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4 / 5',
                  borderRadius: 'var(--vm-radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--vm-shadow-light-md)',
                  border: '1px solid var(--vm-border-light)',
                }}
              >
                <Image
                  src="/steel-frame/estrutura.jpg"
                  alt="Detalhe técnico dos perfis de aço galvanizado do sistema Steel Frame"
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
              <p
                style={{
                  fontFamily: 'var(--vm-font-body)',
                  fontSize: 'var(--vm-text-xs)',
                  color: 'var(--vm-text-on-light-secondary)',
                  marginTop: 'var(--vm-space-3)',
                }}
              >
                Detalhe da estrutura em perfis de aço galvanizado
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </SectionWrapper>
  )
}
