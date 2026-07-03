'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MediaPlaceholder } from '@/components/shared/MediaPlaceholder'

export interface CarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: readonly CarouselImage[]
  label: string
  aspectRatio?: string
  dark?: boolean
  intervalMs?: number
  sizes?: string
  fallbackLabel?: string
  fallbackSublabel?: string
}

// Carrossel automático de fotos com crossfade + Ken Burns sutil.
//
// O autoplay usa UM único setInterval criado no mount (dependências estáveis:
// images.length, intervalMs) que lê refs a cada tick — nunca é recriado por
// mudanças de estado. A primeira versão deste componente recriava o interval
// sempre que `inView` (vindo de IntersectionObserver) mudava; em layouts
// desktop com sticky/parallax e o scroll suave do Lenis recalculando a
// posição a cada frame, a razão de interseção oscilava perto do threshold e
// derrubava o interval antes de completar um ciclo — o carrossel nunca
// avançava. Pausa por viewport/hover/aba oculta/reduced-motion agora é lida
// por refs no tick, não mais um gatilho de recriação do timer.
export function ImageCarousel({
  images,
  label,
  aspectRatio = '4 / 3',
  dark = false,
  intervalMs = 3400,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  fallbackLabel = 'Fotos em breve',
  fallbackSublabel,
}: ImageCarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const inViewRef = useRef(true)
  const hoverPausedRef = useRef(false)
  const reducedRef = useRef(false)
  const hoverCapableRef = useRef(false)

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    hoverCapableRef.current = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (images.length < 2) return
    const id = window.setInterval(() => {
      if (
        !document.hidden &&
        inViewRef.current &&
        !hoverPausedRef.current &&
        !reducedRef.current
      ) {
        setIndex((current) => (current + 1) % images.length)
      }
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [images.length, intervalMs])

  if (images.length === 0) {
    return (
      <MediaPlaceholder label={fallbackLabel} sublabel={fallbackSublabel} dark={dark} />
    )
  }

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
      onMouseEnter={() => {
        if (hoverCapableRef.current) hoverPausedRef.current = true
      }}
      onMouseLeave={() => {
        if (hoverCapableRef.current) hoverPausedRef.current = false
      }}
      style={{
        position: 'relative',
        aspectRatio,
        borderRadius: 'var(--vm-radius-xl)',
        overflow: 'hidden',
        border: dark ? '1px solid var(--vm-border)' : '1px solid var(--vm-border-light)',
        boxShadow: dark ? 'var(--vm-shadow-xl)' : 'var(--vm-shadow-light-lg)',
        background: dark ? 'var(--vm-surface)' : '#EDEDE9',
      }}
    >
      {images.map((image, i) => (
        <div
          key={image.src}
          aria-hidden={i !== index}
          className={i === index ? 'vm-carousel-slide is-active' : 'vm-carousel-slide'}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            className="object-cover vm-carousel-img"
            style={{ objectPosition: 'center' }}
          />
        </div>
      ))}

      {/* Gradiente sutil para legibilidade dos dots */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          insetInline: 0,
          bottom: 0,
          height: '72px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(8,8,8,0.35) 100%)',
          pointerEvents: 'none',
        }}
      />

      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            insetInline: 0,
            bottom: 'var(--vm-space-3)',
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--vm-space-1)',
          }}
        >
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Ver foto ${i + 1} de ${images.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              style={{
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: i === index ? '18px' : '7px',
                  height: '7px',
                  borderRadius: 'var(--vm-radius-full)',
                  background:
                    i === index ? 'var(--vm-copper)' : 'rgba(245,242,237,0.65)',
                  transition:
                    'width var(--vm-dur-normal) var(--vm-ease-out), background-color var(--vm-dur-normal) var(--vm-ease-out)',
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
