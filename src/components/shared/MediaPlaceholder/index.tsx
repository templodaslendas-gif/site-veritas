interface MediaPlaceholderProps {
  label: string
  sublabel?: string
  dark?: boolean
  aspectRatio?: string
}

// Placeholder premium para mídia ainda não disponível.
// Nunca referencia arquivos inexistentes — layout permanece íntegro.
export function MediaPlaceholder({
  label,
  sublabel,
  dark = false,
  aspectRatio = '56.25%',
}: MediaPlaceholderProps) {
  const bg = dark
    ? 'linear-gradient(150deg, var(--vm-surface) 0%, var(--vm-charcoal) 60%, var(--vm-black) 100%)'
    : 'linear-gradient(150deg, #FFFFFF 0%, #F0F0EC 60%, #E9E9E4 100%)'
  const gridColor = dark ? 'rgba(255,255,255,0.04)' : 'rgba(26,26,26,0.05)'
  const labelColor = dark ? 'var(--vm-text-secondary)' : 'var(--vm-text-on-light-secondary)'
  const sublabelColor = dark ? 'var(--vm-text-muted)' : 'var(--vm-text-on-light-muted)'
  const border = dark ? '1px solid var(--vm-border)' : '1px solid var(--vm-border-light)'

  return (
    <div
      role="img"
      aria-label={label}
      style={{
        position: 'relative',
        paddingBottom: aspectRatio,
        borderRadius: 'var(--vm-radius-xl)',
        overflow: 'hidden',
        border,
        background: bg,
      }}
    >
      {/* Malha técnica sutil — linguagem de engenharia */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `repeating-linear-gradient(0deg, ${gridColor} 0 1px, transparent 1px 48px), repeating-linear-gradient(90deg, ${gridColor} 0 1px, transparent 1px 48px)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--vm-space-3)',
          padding: 'var(--vm-space-6)',
          textAlign: 'center',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--vm-copper)"
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ width: '44px', height: '44px', opacity: 0.9 }}
        >
          <rect x="2.5" y="5" width="19" height="14" rx="2" />
          <path d="M10 9.5v5l4.5-2.5L10 9.5z" />
        </svg>
        <p
          style={{
            fontFamily: 'var(--vm-font-body)',
            fontSize: 'var(--vm-text-sm)',
            letterSpacing: 'var(--vm-tracking-label)',
            textTransform: 'uppercase',
            color: labelColor,
          }}
        >
          {label}
        </p>
        {sublabel && (
          <p
            style={{
              fontFamily: 'var(--vm-font-body)',
              fontSize: 'var(--vm-text-xs)',
              color: sublabelColor,
              maxWidth: '320px',
            }}
          >
            {sublabel}
          </p>
        )}
      </div>
    </div>
  )
}
