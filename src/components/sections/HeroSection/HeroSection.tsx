'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { VideoPlayer } from '@/components/shared/VideoPlayer'
import { HeroScrollIndicator } from './HeroScrollIndicator'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const HERO_VIDEO = {
  sources: [{ src: '/videos/hero-veritas.mp4', type: 'video/mp4' }],
  poster: undefined,
}

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.hero)}`

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0, 0, 0.2, 1] },
  },
}

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionWrapper
      className="overflow-hidden"
      style={{ height: '100dvh', minHeight: '600px' }}
    >
      {/* Video background */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <VideoPlayer
          sources={HERO_VIDEO.sources}
          poster={HERO_VIDEO.poster}
          preload="metadata"
        />
      </div>

      {/* Primary gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(160deg, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.78) 50%, rgba(8,8,8,0.55) 100%)',
        }}
      />

      {/* Bottom vignette — smooths transition to next section */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '220px',
          zIndex: 1,
          background: 'linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
          paddingBottom: '5rem',
        }}
      >
        <div style={{ maxWidth: '740px' }}>
          <motion.div
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.p
              variants={shouldReduceMotion ? undefined : itemVariants}
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-xs)',
                letterSpacing: 'var(--vm-tracking-label)',
                color: 'var(--vm-copper)',
                textTransform: 'uppercase',
                marginBottom: 'var(--vm-space-4)',
              }}
            >
              Marechal Cândido Rondon · Oeste do Paraná
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={shouldReduceMotion ? undefined : itemVariants}
              style={{
                fontFamily: 'var(--vm-font-display)',
                fontSize: 'clamp(2.25rem, 7vw, 5rem)',
                lineHeight: 'var(--vm-leading-tight)',
                letterSpacing: 'var(--vm-tracking-display)',
                color: 'var(--vm-text-primary)',
                textTransform: 'uppercase',
                marginBottom: 'var(--vm-space-6)',
                textShadow: '0 2px 24px rgba(0,0,0,0.7)',
              }}
            >
              Construção Inteligente.
              <br />
              Engenharia Moderna.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={shouldReduceMotion ? undefined : itemVariants}
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)',
                lineHeight: 'var(--vm-leading-relaxed)',
                color: 'var(--vm-text-secondary)',
                marginBottom: 'var(--vm-space-3)',
                maxWidth: '560px',
                textShadow: '0 1px 12px rgba(0,0,0,0.6)',
              }}
            >
              Steel Frame, Drywall e Estruturas Metálicas para Marechal Rondon e região.
            </motion.p>

            {/* Reinforcement */}
            <motion.p
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="mx-auto lg:mx-0"
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-sm)',
                lineHeight: 'var(--vm-leading-relaxed)',
                color: 'var(--vm-text-muted)',
                marginBottom: 'var(--vm-space-10)',
                maxWidth: '500px',
                textShadow: '0 1px 8px rgba(0,0,0,0.5)',
              }}
            >
              Do projeto à entrega, com acompanhamento técnico, equipe qualificada e garantia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="flex flex-col items-center gap-3 sm:flex-row lg:items-start"
            >
              {/* Primary CTA — WhatsApp */}
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
                  transition: `background-color var(--vm-dur-fast) var(--vm-ease-out), border-color var(--vm-dur-fast) var(--vm-ease-out), transform var(--vm-dur-fast) var(--vm-ease-out)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--vm-copper-light)'
                  e.currentTarget.style.borderColor = 'var(--vm-copper-light)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--vm-copper)'
                  e.currentTarget.style.borderColor = 'var(--vm-copper)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Solicitar orçamento
              </a>

              {/* Secondary CTA — anchor */}
              <a
                href="#steel-frame"
                className="w-full sm:w-auto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingInline: '2rem',
                  paddingBlock: '0.9rem',
                  background: 'transparent',
                  color: 'var(--vm-text-primary)',
                  fontFamily: 'var(--vm-font-body)',
                  fontSize: 'var(--vm-text-sm)',
                  fontWeight: 500,
                  letterSpacing: 'var(--vm-tracking-label)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: 'var(--vm-radius-sm)',
                  border: '1px solid var(--vm-border-strong)',
                  whiteSpace: 'nowrap',
                  transition: `border-color var(--vm-dur-fast) var(--vm-ease-out), color var(--vm-dur-fast) var(--vm-ease-out), transform var(--vm-dur-fast) var(--vm-ease-out)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--vm-copper)'
                  e.currentTarget.style.color = 'var(--vm-copper-light)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--vm-border-strong)'
                  e.currentTarget.style.color = 'var(--vm-text-primary)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Entenda o Steel Frame
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <HeroScrollIndicator />
    </SectionWrapper>
  )
}
