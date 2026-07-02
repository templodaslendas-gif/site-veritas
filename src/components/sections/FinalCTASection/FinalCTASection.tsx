'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.orcamento)}`

const CONTAINER = {
  maxWidth: 'var(--vm-container-lg)',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
  paddingBlock: 'clamp(5rem, 10vw, 10rem)',
  textAlign: 'center' as const,
}

export function FinalCTASection() {
  return (
    <SectionWrapper
      id="cta-final"
      aria-label="Solicite seu Orçamento"
      style={{ background: 'var(--vm-black)' }}
    >
      <div style={CONTAINER}>
        {/* Linha copper animada */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '64px',
            height: '2px',
            background: 'var(--vm-copper)',
            marginInline: 'auto',
            marginBottom: 'var(--vm-space-8)',
            transformOrigin: 'center',
          }}
        />

        <ScrollReveal>
          <h2
            style={{
              fontFamily: 'var(--vm-font-display)',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              letterSpacing: 'var(--vm-tracking-display)',
              color: 'var(--vm-text-primary)',
              textTransform: 'uppercase',
              lineHeight: 'var(--vm-leading-tight)',
              marginBottom: 'var(--vm-space-6)',
            }}
          >
            Construa certo desde o primeiro dia.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            style={{
              fontFamily: 'var(--vm-font-body)',
              fontSize: 'var(--vm-text-lg)',
              lineHeight: 'var(--vm-leading-relaxed)',
              color: 'var(--vm-text-secondary)',
              maxWidth: '540px',
              marginInline: 'auto',
              marginBottom: 'var(--vm-space-10)',
            }}
          >
            Fale agora com a Veritas Metal e receba uma proposta para o seu projeto
            em Steel Frame — sem compromisso, direto no WhatsApp.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--vm-space-3)',
              paddingInline: '2.75rem',
              paddingBlock: '1.1rem',
              background: 'var(--vm-copper)',
              color: 'var(--vm-black)',
              fontFamily: 'var(--vm-font-body)',
              fontSize: 'var(--vm-text-base)',
              fontWeight: 600,
              letterSpacing: 'var(--vm-tracking-label)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 'var(--vm-radius-sm)',
              border: '1px solid var(--vm-copper)',
              transition: `background-color var(--vm-dur-fast) var(--vm-ease-out), transform var(--vm-dur-fast) var(--vm-ease-out), box-shadow var(--vm-dur-fast) var(--vm-ease-out)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--vm-copper-light)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(196,128,62,0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--vm-copper)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              style={{ width: '20px', height: '20px' }}
            >
              <path d="M12 2a9.9 9.9 0 00-8.5 15.1L2 22l5-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.2-.4.6-1.3.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" />
            </svg>
            Chamar no WhatsApp
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p
            style={{
              fontFamily: 'var(--vm-font-body)',
              fontSize: 'var(--vm-text-sm)',
              color: 'var(--vm-text-muted)',
              marginTop: 'var(--vm-space-8)',
            }}
          >
            Atendemos Marechal Cândido Rondon e toda a região Oeste do Paraná.
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
