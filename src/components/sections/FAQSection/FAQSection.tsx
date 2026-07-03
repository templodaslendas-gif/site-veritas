'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'
import type { FAQItem } from '@/types'

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.faq)}`

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'durabilidade',
    question: 'Casa em Steel Frame dura quanto tempo?',
    answer:
      'Mais de 100 anos, segundo estudos internacionais. O aço galvanizado é protegido contra corrosão e não sofre com cupins, fungos ou apodrecimento. A estrutura é dimensionada por norma ABNT com responsabilidade técnica.',
  },
  {
    id: 'resistencia',
    question: 'A estrutura aguenta vento forte, chuva e granizo?',
    answer:
      'Sim. O projeto estrutural considera as cargas de vento da região, e o sistema é usado em países com furacões e nevascas. O fechamento em OSB + membrana hidrófuga protege contra chuva e umidade.',
  },
  {
    id: 'conforto',
    question: 'Steel Frame é quente? E o barulho?',
    answer:
      'É o contrário: o isolamento termoacústico dentro das paredes torna a casa mais confortável que a alvenaria — mais fresca no verão, mais quente no inverno e com muito menos ruído externo.',
  },
  {
    id: 'custo',
    question: 'Quanto custa comparado à alvenaria?',
    answer:
      'O custo por metro quadrado é competitivo, e o custo final costuma ser menor: fundação mais barata, obra até 60% mais rápida, quase zero desperdício e nenhum retrabalho. Você economiza também em aluguel e financiamento durante a obra.',
  },
  {
    id: 'prazo',
    question: 'Em quanto tempo a casa fica pronta?',
    answer:
      'Uma residência típica leva de 4 a 6 meses, do início da fundação à entrega das chaves — cerca de metade a um terço do prazo da construção convencional.',
  },
  {
    id: 'financiamento',
    question: 'Consigo financiamento bancário para Steel Frame?',
    answer:
      'Sim. O sistema é normatizado (ABNT) e aceito pelos principais bancos, incluindo a Caixa Econômica Federal. Fornecemos toda a documentação técnica necessária para a aprovação.',
  },
  {
    id: 'paredes',
    question: 'Posso pendurar TV, armários e prateleiras nas paredes?',
    answer:
      'Pode. Com buchas específicas para drywall ou reforços previstos em projeto nos pontos de carga (armários suspensos, TV, aquecedores), as paredes suportam o uso normal de qualquer residência.',
  },
  {
    id: 'cupim-ferrugem',
    question: 'E cupim? E ferrugem?',
    answer:
      'O aço é imune a cupins. Contra corrosão, os perfis são galvanizados — revestidos com zinco — com vida útil centenária em uso residencial. É justamente por isso que o sistema substituiu a madeira em vários países.',
  },
  {
    id: 'pavimentos',
    question: 'Dá para construir sobrado em Steel Frame?',
    answer:
      'Sim. O sistema atende com folga residências de até dois pavimentos, e projetos maiores podem combinar Steel Frame com estruturas metálicas — solução que também executamos.',
  },
  {
    id: 'manutencao',
    question: 'Como funciona manutenção e reforma depois de pronta?',
    answer:
      'Mais simples que na alvenaria: as instalações passam por dentro das paredes com acesso planejado, sem quebra-quebra. Ampliações são rápidas e limpas — o sistema foi feito para evoluir com a família.',
  },
]

const CONTAINER = {
  maxWidth: 'var(--vm-container-lg)',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
  paddingBlock: 'clamp(3.25rem, 6.5vw, 6rem)',
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)
  const prefersReduced = useReducedMotion()

  return (
    <SectionWrapper
      id="faq"
      aria-label="Perguntas Frequentes"
      style={{ background: 'var(--vm-bg-secondary)' }}
    >
      <div style={CONTAINER}>
        {/* Header */}
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tudo o que perguntam antes de construir."
          description="Respostas diretas para as dúvidas mais comuns sobre Steel Frame."
          maxWidth="640px"
        />

        {/* Accordion */}
        <div>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openId === item.id
            return (
              <ScrollReveal key={item.id} delay={Math.min(i * 0.04, 0.25)}>
                <div
                  style={{
                    background: 'var(--vm-card-bg)',
                    border: `1px solid ${isOpen ? 'var(--vm-copper)' : 'var(--vm-border-light)'}`,
                    borderRadius: 'var(--vm-radius-md)',
                    marginBottom: 'var(--vm-space-3)',
                    boxShadow: isOpen ? 'var(--vm-shadow-light-md)' : 'var(--vm-shadow-light-sm)',
                    transition: `border-color var(--vm-dur-normal) var(--vm-ease-out), box-shadow var(--vm-dur-normal) var(--vm-ease-out)`,
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    id={`faq-button-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 'var(--vm-space-4)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      paddingInline: 'var(--vm-space-6)',
                      paddingBlock: 'var(--vm-space-5)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--vm-font-heading)',
                        fontSize: 'var(--vm-h5)',
                        color: 'var(--vm-text-on-light)',
                        lineHeight: 'var(--vm-leading-snug)',
                      }}
                    >
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: prefersReduced ? 0 : 0.25, ease: [0, 0, 0.2, 1] }}
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--vm-copper)',
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        style={{ width: '18px', height: '18px' }}
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-button-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: prefersReduced ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          style={{
                            fontFamily: 'var(--vm-font-body)',
                            fontSize: 'var(--vm-text-base)',
                            lineHeight: 'var(--vm-leading-relaxed)',
                            color: 'var(--vm-text-on-light-secondary)',
                            paddingInline: 'var(--vm-space-6)',
                            paddingBottom: 'var(--vm-space-6)',
                            maxWidth: '720px',
                          }}
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.15}>
          <p
            style={{
              fontFamily: 'var(--vm-font-body)',
              fontSize: 'var(--vm-text-base)',
              color: 'var(--vm-text-on-light-secondary)',
              marginTop: 'var(--vm-space-10)',
            }}
          >
            Não achou sua resposta?{' '}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vm-link-copper"
              style={{
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Pergunte direto no WhatsApp <span data-arrow aria-hidden="true">→</span>
            </a>
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
