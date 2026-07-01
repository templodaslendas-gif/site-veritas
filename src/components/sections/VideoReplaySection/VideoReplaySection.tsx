'use client'

import { VideoPlayer } from '@/components/shared/VideoPlayer'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const CONTAINER = {
  maxWidth: 'var(--vm-container-xl)',
  marginInline: 'auto',
  paddingInline: 'clamp(1rem, 3vw, 3rem)',
  paddingBlock: 'clamp(3rem, 6vw, 6rem)',
}

export function VideoReplaySection() {
  return (
    <section
      aria-label="Construção completa em Steel Frame — do início ao fim"
      style={{ background: 'var(--vm-bg-primary)' }}
    >
      <div style={CONTAINER}>
        <ScrollReveal>
          <div
            style={{
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
                src="/videos/steel-frame/construcao-completa.mp4"
                autoPlay={true}
                loop={true}
                muted={true}
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
