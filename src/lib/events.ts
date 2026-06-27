type EventName =
  | 'whatsapp_click'
  | 'section_view'
  | 'cta_click'
  | 'video_play'
  | 'form_submit'

type EventParams = Record<string, string | number | boolean>

export function trackEvent(name: EventName, params?: EventParams) {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
