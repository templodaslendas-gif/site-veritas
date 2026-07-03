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

// Carrossel automático de fotos com crossfade suave.
// - autoplay pausado fora do viewport, com aba oculta e com reduced-motion
// - object-fit cover + object-position center — enquadramento correto em
//   qualquer proporção de origem
// - fallback premium (MediaPlaceholder) quando não há imagens
// - dots acessíveis para navegação manual
export function ImageCarousel({
  images,
  label,
  aspectRatio = '4 / 3',
  dark = false,
  intervalMs = 4200,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  fallbackLabel = 'Fotos em breve',
  fallbackSublabel,
}: ImageCarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [inView, setInView] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || reduced || images.length < 2) return
    const id = window.setInterval(() => {
      if (!document.hidden) {
        setIndex((current) => (current + 1) % images.length)
      }
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [inView, reduced, images.length, intervalMs])

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
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === index ? 1 : 0,
            transition: 'opacity 900ms var(--vm-ease-smooth)',
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            className="object-cover"
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
