export const NAV_ITEMS = [
  { label: 'Steel Frame', href: '#steel-frame' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Drywall', href: '#drywall' },
  { label: 'Estruturas', href: '#estruturas' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
] as const

function activateLink(el: HTMLAnchorElement, scrolled: boolean) {
  el.style.color = scrolled ? 'var(--vm-text-on-light)' : 'var(--vm-text-primary)'
  const underline = el.querySelector<HTMLSpanElement>('[data-underline]')
  if (underline) underline.style.transform = 'scaleX(1)'
}

function deactivateLink(el: HTMLAnchorElement, scrolled: boolean) {
  el.style.color = scrolled ? 'var(--vm-text-on-light-secondary)' : 'var(--vm-text-secondary)'
  const underline = el.querySelector<HTMLSpanElement>('[data-underline]')
  if (underline) underline.style.transform = 'scaleX(0)'
}

export function NavDesktop({ scrolled = false }: { scrolled?: boolean }) {
  return (
    <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="group relative"
          style={{
            fontFamily: 'var(--vm-font-body)',
            fontSize: 'var(--vm-text-xs)',
            letterSpacing: 'var(--vm-tracking-label)',
            color: scrolled ? 'var(--vm-text-on-light-secondary)' : 'var(--vm-text-secondary)',
            textTransform: 'uppercase' as const,
            textDecoration: 'none',
            paddingBottom: '3px',
            transition: `color var(--vm-dur-fast) var(--vm-ease-out)`,
          }}
          onMouseEnter={(e) => activateLink(e.currentTarget, scrolled)}
          onMouseLeave={(e) => deactivateLink(e.currentTarget, scrolled)}
          onFocus={(e) => activateLink(e.currentTarget, scrolled)}
          onBlur={(e) => deactivateLink(e.currentTarget, scrolled)}
        >
          {item.label}
          <span
            data-underline
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'var(--vm-copper)',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: `transform var(--vm-dur-fast) var(--vm-ease-out)`,
            }}
          />
        </a>
      ))}
    </nav>
  )
}
