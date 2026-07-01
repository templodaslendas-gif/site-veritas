'use client'

import { useState } from 'react'
import { cn } from '@/lib/cn'

interface VideoSource {
  src: string
  type: string
}

interface VideoPlayerProps {
  src?: string
  sources?: VideoSource[]
  poster?: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  preload?: 'none' | 'metadata' | 'auto'
}

function VideoFallback({ className, failedSrc }: { className?: string; failedSrc?: string }) {
  const isDev = process.env.NODE_ENV === 'development'
  return (
    <div
      className={cn('flex min-h-[400px] flex-col items-center justify-center gap-2', className)}
      style={{ background: 'var(--vm-surface)' }}
      aria-label="Vídeo em breve"
      role="img"
    >
      <span
        style={{
          color: 'var(--vm-text-muted)',
          fontSize: 'var(--vm-text-sm)',
          fontFamily: 'var(--vm-font-body)',
        }}
      >
        Vídeo em breve
      </span>
      {isDev && failedSrc && (
        <span
          style={{
            color: '#ef4444',
            fontSize: '0.7rem',
            fontFamily: 'monospace',
            opacity: 0.8,
          }}
        >
          [DEV] falhou: {failedSrc}
        </span>
      )}
    </div>
  )
}

export function VideoPlayer({
  src,
  sources,
  poster,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  preload = 'none',
}: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false)

  const hasSrc = src || (sources && sources.length > 0)
  const failedSrc = src ?? sources?.[0]?.src

  if (!hasSrc || hasError) {
    return <VideoFallback className={className} failedSrc={hasError ? failedSrc : undefined} />
  }

  return (
    <video
      className={cn('h-full w-full object-cover', className)}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      preload={preload}
      onError={() => setHasError(true)}
      {...(!sources && src ? { src } : {})}
    >
      {sources?.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
      {!sources && src && <source src={src} />}
    </video>
  )
}
