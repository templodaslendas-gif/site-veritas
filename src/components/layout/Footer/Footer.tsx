import Link from 'next/link'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'
import { FooterLinkGroup } from './FooterLinks'

const NAV_LINKS = [
  { label: 'Steel Frame', href: '#steel-frame' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Drywall', href: '#drywall' },
  { label: 'Estruturas Metálicas', href: '#estruturas' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

const LEGAL_LINKS = [
  { label: 'Política de Privacidade', href: '/politica-privacidade' },
  { label: 'Política de Cookies', href: '/politica-privacidade#cookies' },
]

const CONTACT_LINKS = [
  {
    label: 'WhatsApp: (45) 9200-2510',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.footer)}`,
    external: true,
  },
  {
    label: '@veritas_metal',
    href: 'https://instagram.com/veritas_metal',
    external: true,
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--vm-black)',
        borderTop: '1px solid var(--vm-border)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--vm-container-xl)',
          marginInline: 'auto',
          paddingInline: 'var(--vm-gutter)',
          paddingBlock: 'var(--vm-space-16)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'var(--vm-space-10)',
            marginBottom: 'var(--vm-space-12)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 'var(--vm-space-4)' }}>
            <Link
              href="/"
              aria-label="Veritas Metal — Página inicial"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              <span
                style={{
                  fontFamily: 'var(--vm-font-display)',
                  fontSize: '1.75rem',
                  letterSpacing: 'var(--vm-tracking-display)',
                  color: 'var(--vm-text-primary)',
                  lineHeight: 1,
                }}
              >
                VERITAS METAL
              </span>
            </Link>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-sm)',
                color: 'var(--vm-text-muted)',
                lineHeight: 'var(--vm-leading-relaxed)',
                maxWidth: '220px',
              }}
            >
              Construção Inteligente.{' '}
              <br />
              Engenharia Moderna.
            </p>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-xs)',
                color: 'var(--vm-text-muted)',
              }}
            >
              Marechal Cândido Rondon — PR
            </p>
          </div>

          <FooterLinkGroup title="Serviços" links={NAV_LINKS} />
          <FooterLinkGroup title="Contato" links={CONTACT_LINKS} />
          <FooterLinkGroup title="Legal" links={LEGAL_LINKS} />
        </div>

        <div
          style={{
            borderTop: '1px solid var(--vm-border)',
            paddingTop: 'var(--vm-space-6)',
            display: 'flex',
            flexWrap: 'wrap' as const,
            gap: 'var(--vm-space-4)',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--vm-font-body)',
              fontSize: 'var(--vm-text-xs)',
              color: 'var(--vm-text-muted)',
            }}
          >
            © {year} Veritas Metal. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: 'var(--vm-font-body)',
              fontSize: 'var(--vm-text-xs)',
              color: 'var(--vm-text-muted)',
            }}
          >
            Steel Frame · Drywall · Estruturas Metálicas
          </p>
        </div>
      </div>
    </footer>
  )
}
