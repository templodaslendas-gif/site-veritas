import { gsap } from 'gsap'

export const EASE = {
  smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  out: 'power3.out',
  inOut: 'power2.inOut',
  expo: 'expo.out',
} as const

export function fadeUp(
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) {
  return gsap.from(targets, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: EASE.expo,
    ...options,
  })
}

export function fadeIn(
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) {
  return gsap.from(targets, {
    opacity: 0,
    duration: 0.6,
    ease: EASE.out,
    ...options,
  })
}

export function revealLine(
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) {
  return gsap.from(targets, {
    yPercent: 110,
    duration: 0.9,
    ease: EASE.expo,
    ...options,
  })
}

export function staggerFadeUp(
  targets: gsap.TweenTarget,
  stagger = 0.08,
  options: gsap.TweenVars = {}
) {
  return gsap.from(targets, {
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: EASE.expo,
    stagger,
    ...options,
  })
}

export function scaleIn(
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) {
  return gsap.from(targets, {
    scale: 0.92,
    opacity: 0,
    duration: 0.8,
    ease: EASE.smooth,
    ...options,
  })
}
