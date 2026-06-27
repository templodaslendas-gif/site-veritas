export type MotionVariant = {
  hidden: Record<string, unknown>
  visible: Record<string, unknown>
}

export type ScrollRevealPreset = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale'

export type MotionDuration =
  | 'instant'
  | 'fast'
  | 'normal'
  | 'medium'
  | 'slow'
  | 'cinematic'
  | 'intro'

export type MotionEase = 'smooth' | 'spring' | 'out' | 'in' | 'inout'

export const MOTION_DURATION_MS: Record<MotionDuration, number> = {
  instant: 80,
  fast: 150,
  normal: 300,
  medium: 500,
  slow: 800,
  cinematic: 1200,
  intro: 3500,
}

export const FRAMER_VARIANTS: Record<string, MotionVariant> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
}
