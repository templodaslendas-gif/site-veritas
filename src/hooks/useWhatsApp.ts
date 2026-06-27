'use client'

import { useCallback } from 'react'
import { WHATSAPP_NUMBER } from '@/lib/messages'

type WhatsAppOptions = {
  message: string
  utm?: {
    source?: string
    medium?: string
    campaign?: string
  }
}

export function useWhatsApp() {
  const open = useCallback(({ message, utm }: WhatsAppOptions) => {
    const params = new URLSearchParams()
    if (utm?.source) params.set('utm_source', utm.source)
    if (utm?.medium) params.set('utm_medium', utm.medium)
    if (utm?.campaign) params.set('utm_campaign', utm.campaign)

    const queryString = params.toString()
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}${queryString ? `&${queryString}` : ''}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  return { open }
}
