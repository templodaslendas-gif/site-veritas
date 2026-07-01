'use client'

import { VideoPlayer } from '@/components/shared/VideoPlayer'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const CONTAINER = {
  maxWidth: 'var(--vm-container-xl)',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
  paddingBlock: 'clamp(3rem, 6vw, 5rem)',
}

export function VideoReplaySection() {
  return (
    <section
      aria-label="Vídeo da construção em Steel Frame"
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
              boxShadow: 'var(--vm-shadow-light-lg)',
              border: '1px solid var(--vm-border-light)',
            }}
          >
            <div style={{ position: 'absolute', inset: 0 }}>
              <VideoPlayer
                src="/steel-frame/construcao-completa.mp4"
                autoPlay={true}
                loop={true}
                muted={true}
                preload="none"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
