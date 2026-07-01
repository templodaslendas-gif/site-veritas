'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.orcamento)}`

const STEPS = [
  {
    number: '01',
    title: 'Projeto',
    description:
      'Desenvolvemos o projeto estrutural completo: plantas, cortes, elevações e memorial descritivo. Toda a documentação para aprovação em prefeitura.',
  },
  {
    number: '02',
    title: 'Fundação',
    description:
      'Radier ou sapatas dimensionados especificamente para o Steel Frame, garantindo estabilidade e transmitindo as cargas com segurança ao solo.',
  },
  {
    number: '03',
    title: 'Estrutura',
    description:
      'Montagem dos perfis de aço galvanizado com precisão milimétrica. Cada vão, abertura e pé-direito exatamente conforme o projeto.',
  },
  {
    number: '04',
    title: 'Fechamento',
    description:
      'Aplicação de placas OSB na face externa e drywall na face interna, com manta de isolamento termoacústico entre as camadas.',
  },
  {
    number: '05',
    title: 'Instalações',
    description:
      'Passagens para elétrica, hidráulica e dados integradas à estrutura, sem necessidade de quebrar paredes depois.',
  },
  {
    number: '06',
    title: 'Acabamento',
    description:
      'Revestimentos, pintura, esquadrias e detalhes finais. Entregamos o espaço pronto para uso, com garantia e assistência técnica.',
  },
]

const CONTAINER = {
  maxWidth: 'var(--vm-container-xl)',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
  paddingBlock: 'clamp(4rem, 8vw, 8rem)',
}

export function HowItWorksSection() {
  return (
    <SectionWrapper id="como-funciona" style={{ background: 'var(--vm-bg-primary)' }}>
      <div style={CONTAINER}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: 'var(--vm-space-16)', maxWidth: '560px' }}>
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
              Processo
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
              Da ideia à entrega — cada passo com precisão.
            </h2>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-lg)',
                lineHeight: 'var(--vm-leading-relaxed)',
                color: 'var(--vm-text-on-light-secondary)',
              }}
            >
              Acompanhamento técnico em todas as fases, do projeto à entrega das chaves.
              Sem surpresas, sem atrasos, sem improvisos.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div
          className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-x-20"
          style={{ maxWidth: '900px' }}
        >
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.07} direction="up">
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--vm-space-6)',
                  alignItems: 'flex-start',
                  paddingBottom: 'var(--vm-space-10)',
                }}
              >
                {/* Badge + connector */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  {/* Number badge */}
                  <div
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      border: '1px solid var(--vm-copper)',
                      background: 'var(--vm-bg-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
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
                      {step.number}
                    </span>
                  </div>

                  {/* Connector line (all except last) */}
                  {i < STEPS.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: 0.2 }}
                      style={{
                        width: '1px',
                        flex: 1,
                        minHeight: '2.5rem',
                        background: 'var(--vm-border-light)',
                        marginTop: 'var(--vm-space-2)',
                        transformOrigin: 'top',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingTop: 'var(--vm-space-1)' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--vm-font-heading)',
                      fontSize: 'var(--vm-h4)',
                      color: 'var(--vm-text-on-light)',
                      marginBottom: 'var(--vm-space-2)',
                      lineHeight: 'var(--vm-leading-snug)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--vm-font-body)',
                      fontSize: 'var(--vm-text-base)',
                      lineHeight: 'var(--vm-leading-relaxed)',
                      color: 'var(--vm-text-on-light-secondary)',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              marginTop: 'var(--vm-space-8)',
              paddingTop: 'var(--vm-space-8)',
              borderTop: '1px solid var(--vm-border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--vm-space-4)',
              alignItems: 'flex-start',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-base)',
                color: 'var(--vm-text-on-light-secondary)',
                lineHeight: 'var(--vm-leading-relaxed)',
                maxWidth: '480px',
              }}
            >
              Pronto para começar? Fale com a nossa equipe e receba um orçamento
              detalhado para o seu projeto.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
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
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
