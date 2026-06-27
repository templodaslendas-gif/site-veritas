import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de privacidade e proteção de dados da Veritas Metal, conforme a LGPD.',
  robots: { index: true, follow: false },
}

export default function PoliticaPrivacidadePage() {
  return (
    <main id="main-content" style={{ padding: '4rem 2rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--vm-font-heading)', color: 'var(--vm-text-primary)' }}>
        Política de Privacidade
      </h1>
      <p style={{ color: 'var(--vm-text-secondary)', marginTop: '1rem' }}>
        Conteúdo a ser implementado na Fase 6 — LGPD e documentação legal.
      </p>
    </main>
  )
}
