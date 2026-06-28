import Link from 'next/link'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

export function HeaderCTA() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.orcamento)}`

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        paddingInline: 'var(--vm-space-5)',
        paddingBlock: 'var(--vm-space-3)',
        background: 'var(--vm-copper)',
        color: 'var(--vm-black)',
        fontFamily: 'var(--vm-font-body)',
        fontSize: 'var(--vm-text-xs)',
        fontWeight: 600,
        letterSpacing: 'var(--vm-tracking-label)',
        textTransform: 'uppercase' as const,
        textDecoration: 'none',
        borderRadius: 'var(--vm-radius-sm)',
        transition: `background var(--vm-dur-fast) var(--vm-ease-out), transform var(--vm-dur-fast) var(--vm-ease-out)`,
        whiteSpace: 'nowrap' as const,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--vm-copper-light)'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--vm-copper)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      Solicitar Orçamento
    </Link>
  )
}
