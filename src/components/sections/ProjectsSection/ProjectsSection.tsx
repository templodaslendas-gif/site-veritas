'use client'

import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.projetos)}`

// Estrutura pronta para receber mídia real: preencher `media` com o caminho
// da foto/vídeo quando o asset existir em /public/projetos/.
interface ProjectItem {
  id: string
  category: string
  title: string
  location: string
  media?: string
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'residencia-terrea',
    category: 'Residencial',
    title: 'Residência térrea em Steel Frame',
    location: 'Marechal Cândido Rondon — PR',
  },
  {
    id: 'sobrado',
    category: 'Residencial',
    title: 'Sobrado com fachada contemporânea',
    location: 'Oeste do Paraná',
  },
  {
    id: 'comercial',
    category: 'Comercial',
    title: 'Espaço comercial de execução rápida',
    location: 'Marechal Cândido Rondon — PR',
  },
  {
    id: 'ampliacao',
    category: 'Ampliação',
    title: 'Ampliação sem quebra-quebra',
    location: 'Região Oeste — PR',
  },
  {
    id: 'estrutura-metalica',
    category: 'Estrutura Metálica',
    title: 'Cobertura e estrutura metálica',
    location: 'Oeste do Paraná',
  },
  {
    id: 'interiores',
    category: 'Drywall',
    title: 'Interiores em Drywall',
    location: 'Marechal Cândido Rondon — PR',
  },
]

const GRADIENTS = [
  'linear-gradient(160deg, #1E1E1E 0%, #111111 55%, #0A0A0A 100%)',
  'linear-gradient(200deg, #232323 0%, #141414 60%, #0A0A0A 100%)',
  'linear-gradient(140deg, #1A1A1A 0%, #101010 50%, #0C0C0C 100%)',
]

const CONTAINER = {
  maxWidth: 'var(--vm-container-xl)',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
  paddingBlock: 'clamp(4rem, 8vw, 8rem)',
}

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projetos"
      aria-label="Projetos Realizados"
      style={{ background: 'var(--vm-charcoal)' }}
    >
      <div style={CONTAINER}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: 'var(--vm-space-16)', maxWidth: '640px' }}>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-xs)',
                letterSpacing: 'var(--vm-tracking-label)',
                color: 'var(--vm-copper)',
                textTransform: 'uppercase',
                marginBottom: 'var(--vm-space-4)',
              }}
            >
              Portfólio
            </p>
            <h2
              style={{
                fontFamily: 'var(--vm-font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: 'var(--vm-tracking-display)',
                color: 'var(--vm-text-primary)',
                textTransform: 'uppercase',
                lineHeight: 'var(--vm-leading-tight)',
                marginBottom: 'var(--vm-space-6)',
              }}
            >
              Projetos que saíram do papel.
            </h2>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-lg)',
                lineHeight: 'var(--vm-leading-relaxed)',
                color: 'var(--vm-text-secondary)',
              }}
            >
              Residências, comércios e estruturas executadas com padrão técnico em
              Marechal Cândido Rondon e região. Registros fotográficos em breve.
            </p>
          </div>
        </ScrollReveal>

        {/* Galeria */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.id} delay={Math.min(i * 0.08, 0.4)} direction="up">
              <article
                style={{
                  position: 'relative',
                  borderRadius: 'var(--vm-radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--vm-border)',
                  background: GRADIENTS[i % GRADIENTS.length],
                  aspectRatio: '4 / 3',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 'var(--vm-space-6)',
                  cursor: 'default',
                  transition: `border-color var(--vm-dur-normal) var(--vm-ease-out), transform var(--vm-dur-normal) var(--vm-ease-out)`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--vm-copper-dark)'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--vm-border)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                {/* Malha técnica de fundo */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 40px)',
                  }}
                />
                {/* Badge "em breve" */}
                <span
                  style={{
                    position: 'absolute',
                    top: 'var(--vm-space-4)',
                    right: 'var(--vm-space-4)',
                    fontFamily: 'var(--vm-font-body)',
                    fontSize: '0.65rem',
                    letterSpacing: 'var(--vm-tracking-label)',
                    textTransform: 'uppercase',
                    color: 'var(--vm-text-muted)',
                    border: '1px solid var(--vm-border)',
                    borderRadius: 'var(--vm-radius-full)',
                    paddingInline: 'var(--vm-space-3)',
                    paddingBlock: 'var(--vm-space-1)',
                    background: 'rgba(8,8,8,0.5)',
                  }}
                >
                  Fotos em breve
                </span>
                <div style={{ position: 'relative' }}>
                  <p
                    style={{
                      fontFamily: 'var(--vm-font-body)',
                      fontSize: 'var(--vm-text-xs)',
                      letterSpacing: 'var(--vm-tracking-label)',
                      textTransform: 'uppercase',
                      color: 'var(--vm-copper)',
                      marginBottom: 'var(--vm-space-2)',
                    }}
                  >
                    {project.category}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--vm-font-heading)',
                      fontSize: 'var(--vm-h4)',
                      color: 'var(--vm-text-primary)',
                      lineHeight: 'var(--vm-leading-snug)',
                      marginBottom: 'var(--vm-space-1)',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--vm-font-body)',
                      fontSize: 'var(--vm-text-xs)',
                      color: 'var(--vm-text-muted)',
                    }}
                  >
                    {project.location}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              marginTop: 'var(--vm-space-12)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--vm-space-6)',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid var(--vm-border)',
              paddingTop: 'var(--vm-space-8)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-base)',
                color: 'var(--vm-text-secondary)',
                lineHeight: 'var(--vm-leading-relaxed)',
                maxWidth: '460px',
              }}
            >
              Quer ver seu projeto nesta galeria? Conte para a nossa equipe o que
              você planeja construir.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingInline: '2rem',
                paddingBlock: '0.9rem',
                background: 'var(--vm-copper)',
                color: 'var(--vm-black)',
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-sm)',
                fontWeight: 600,
                letterSpacing: 'var(--vm-tracking-label)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: 'var(--vm-radius-sm)',
                border: '1px solid var(--vm-copper)',
                whiteSpace: 'nowrap',
                transition: `background-color var(--vm-dur-fast) var(--vm-ease-out), transform var(--vm-dur-fast) var(--vm-ease-out)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--vm-copper-light)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--vm-copper)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Falar sobre meu projeto
            </a>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
