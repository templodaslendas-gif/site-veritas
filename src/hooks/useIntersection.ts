'use client'

import { useEffect, useRef, useState } from 'react'

type UseIntersectionOptions = {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersection<T extends Element>(
  options: UseIntersectionOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const ref = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          if (triggerOnce) observer.disconnect()
        } else if (!triggerOnce) {
          setIsIntersecting(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isIntersecting }
}
