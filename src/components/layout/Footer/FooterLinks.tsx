'use client'

interface FooterLinkGroupProps {
  title: string
  links: Array<{ label: string; href: string; external?: boolean }>
}

export function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 'var(--vm-space-3)' }}>
      <p
        style={{
          fontFamily: 'var(--vm-font-body)',
          fontSize: 'var(--vm-text-xs)',
          letterSpacing: 'var(--vm-tracking-label)',
          textTransform: 'uppercase' as const,
          color: 'var(--vm-text-muted)',
          fontWeight: 600,
          marginBottom: 'var(--vm-space-1)',
        }}
      >
        {title}
      </p>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          style={{
            fontFamily: 'var(--vm-font-body)',
            fontSize: 'var(--vm-text-sm)',
            color: 'var(--vm-text-secondary)',
            textDecoration: 'none',
            transition: `color var(--vm-dur-fast) var(--vm-ease-out)`,
            lineHeight: 'var(--vm-leading-normal)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--vm-copper-light)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--vm-text-secondary)'
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
