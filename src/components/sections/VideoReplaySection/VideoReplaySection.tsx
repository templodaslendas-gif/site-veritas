'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { VideoPlayer } from '@/components/shared/VideoPlayer'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const CONTAINER = {
  maxWidth: 'var(--vm-container-xl)',
  marginInline: 'auto',
  paddingInline: 'clamp(1rem, 3vw, 3rem)',
  paddingBlock: 'clamp(3rem, 6vw, 6rem)',
}

export function VideoReplaySection() {
  const videoRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <section
      aria-label="Construção completa em Steel Frame — do início ao fim"
      style={{ background: 'var(--vm-bg-primary)' }}
    >
      <div style={CONTAINER}>
        <ScrollReveal>
          <div style={{ marginBottom: 'var(--vm-space-10)', maxWidth: '720px' }}>
            <h2
              style={{
                fontFamily: 'var(--vm-font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: 'var(--vm-tracking-display)',
                color: 'var(--vm-text-on-light)',
                textTransform: 'uppercase',
                lineHeight: 'var(--vm-leading-tight)',
                marginBottom: 'var(--vm-space-4)',
              }}
            >
              Veja uma construção em Steel Frame nascer do zero.
            </h2>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-lg)',
                lineHeight: 'var(--vm-leading-relaxed)',
                color: 'var(--vm-text-on-light-secondary)',
              }}
            >
              Do projeto à estrutura, do fechamento ao acabamento final.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <motion.div
            ref={videoRef}
            style={{
              y: prefersReduced ? 0 : parallaxY,
              position: 'relative',
              paddingBottom: '56.25%',
              borderRadius: 'var(--vm-radius-xl)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)',
              border: '1px solid var(--vm-border-light)',
            }}
          >
            <div style={{ position: 'absolute', inset: 0 }}>
              <VideoPlayer
                src="/steel-frame/construcao-completa.mp4"
                autoPlay={true}
                loop={true}
                muted={true}
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
