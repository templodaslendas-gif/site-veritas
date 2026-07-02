'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { VideoPlayer } from '@/components/shared/VideoPlayer'
import { AnimatedNumber } from '@/components/shared/AnimatedNumber'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.comparativo)}`

const ROWS = [
  {
    criterion: 'Tempo de obra',
    steelFrame: '4 a 6 meses, cronograma real',
    conventional: '12 a 18 meses, prazos incertos',
  },
  {
    criterion: 'Desperdício',
    steelFrame: 'Cerca de 5% de resíduos',
    conventional: 'Até 30% de material perdido',
  },
  {
    criterion: 'Peso da estrutura',
    steelFrame: 'Até 5x mais leve, fundação enxuta',
    conventional: 'Estrutura pesada, fundação robusta',
  },
  {
    criterion: 'Precisão',
    steelFrame: 'Milimétrica, peças industrializadas',
    conventional: 'Variável, depende da mão de obra',
  },
  {
    criterion: 'Limpeza do canteiro',
    steelFrame: 'Obra seca, canteiro organizado',
    conventional: 'Entulho e umidade constantes',
  },
  {
    criterion: 'Isolamento',
    steelFrame: 'Termoacústico integrado às paredes',
    conventional: 'Exige soluções adicionais caras',
  },
  {
    criterion: 'Manutenção',
    steelFrame: 'Instalações acessíveis, sem quebrar',
    conventional: 'Reparos exigem quebra-quebra',
  },
  {
    criterion: 'Sustentabilidade',
    steelFrame: 'Aço 100% reciclável, baixo consumo de água',
    conventional: 'Alto consumo de água, areia e cimento',
  },
] as const

const STATS = [
  { value: 60, suffix: '%', label: 'mais rápido que a obra convencional' },
  { value: 90, suffix: '%', label: 'menos resíduos no canteiro' },
  { value: 5, suffix: 'x', label: 'mais leve que a alvenaria' },
] as const

const CONTAINER = {
  maxWidth: 'var(--vm-container-xl)',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 5vw, 5rem)',
  paddingBlock: 'clamp(4rem, 8vw, 8rem)',
}

const CELL_TEXT = {
  fontFamily: 'var(--vm-font-body)',
  fontSize: 'var(--vm-text-sm)',
  lineHeight: 'var(--vm-leading-relaxed)',
} as const

export function ComparisonSection() {
  return (
    <SectionWrapper
      id="comparativo"
      aria-label="Comparativo Steel Frame vs Construção Convencional"
      style={{ background: 'var(--vm-black)' }}
    >
      <div style={CONTAINER}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)', maxWidth: '680px' }}>
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
              Comparativo
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
              Steel Frame × Construção convencional.
            </h2>
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-lg)',
                lineHeight: 'var(--vm-leading-relaxed)',
                color: 'var(--vm-text-secondary)',
              }}
            >
              Os números não mentem. Veja lado a lado por que o sistema
              industrializado supera o método tradicional em cada etapa da obra.
            </p>
          </div>
        </ScrollReveal>

        {/* Vídeo comparativo — destaque principal. Fonte é vertical (9:16);
            enquadrado no próprio formato nativo para nunca cortar a imagem. */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              maxWidth: 'clamp(260px, 60vw, 420px)',
              marginInline: 'auto',
              marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
            }}
          >
            <div
              style={{
                position: 'relative',
                aspectRatio: '9 / 16',
                borderRadius: 'var(--vm-radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--vm-border)',
                boxShadow: 'var(--vm-shadow-xl)',
                background: 'var(--vm-black)',
              }}
            >
              <div style={{ position: 'absolute', inset: 0 }}>
                <VideoPlayer
                  src="/steel-frame/comparativo.mp4"
                  autoPlay
                  loop
                  muted
                  preload="none"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats animados */}
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
          style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}
        >
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div
                style={{
                  borderLeft: '2px solid var(--vm-copper)',
                  paddingLeft: 'var(--vm-space-6)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--vm-font-display)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    letterSpacing: 'var(--vm-tracking-display)',
                    color: 'var(--vm-copper)',
                    lineHeight: 'var(--vm-leading-tight)',
                  }}
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p
                  style={{
                    fontFamily: 'var(--vm-font-body)',
                    fontSize: 'var(--vm-text-sm)',
                    color: 'var(--vm-text-secondary)',
                    lineHeight: 'var(--vm-leading-normal)',
                    marginTop: 'var(--vm-space-2)',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tabela comparativa premium */}
        <div role="table" aria-label="Tabela comparativa Steel Frame versus construção convencional">
          {/* Cabeçalho — visível apenas em telas médias+ */}
          <ScrollReveal>
            <div
              role="row"
              className="hidden lg:grid lg:grid-cols-[1.1fr_1fr_1fr]"
              style={{
                gap: 'var(--vm-space-4)',
                paddingInline: 'var(--vm-space-6)',
                paddingBlock: 'var(--vm-space-4)',
              }}
            >
              <span
                role="columnheader"
                style={{
                  ...CELL_TEXT,
                  letterSpacing: 'var(--vm-tracking-label)',
                  textTransform: 'uppercase',
                  fontSize: 'var(--vm-text-xs)',
                  color: 'var(--vm-text-muted)',
                }}
              >
                Critério
              </span>
              <span
                role="columnheader"
                style={{
                  ...CELL_TEXT,
                  letterSpacing: 'var(--vm-tracking-label)',
                  textTransform: 'uppercase',
                  fontSize: 'var(--vm-text-xs)',
                  color: 'var(--vm-copper)',
                }}
              >
                Steel Frame
              </span>
              <span
                role="columnheader"
                style={{
                  ...CELL_TEXT,
                  letterSpacing: 'var(--vm-tracking-label)',
                  textTransform: 'uppercase',
                  fontSize: 'var(--vm-text-xs)',
                  color: 'var(--vm-text-muted)',
                }}
              >
                Convencional
              </span>
            </div>
          </ScrollReveal>

          {ROWS.map((row, i) => (
            <ScrollReveal key={row.criterion} delay={Math.min(i * 0.05, 0.3)}>
              <div
                role="row"
                className="grid grid-cols-1 gap-2 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-4"
                style={{
                  background: 'var(--vm-surface)',
                  border: '1px solid var(--vm-border)',
                  borderRadius: 'var(--vm-radius-md)',
                  paddingInline: 'var(--vm-space-6)',
                  paddingBlock: 'var(--vm-space-5)',
                  marginBottom: 'var(--vm-space-3)',
                  transition: 'border-color var(--vm-dur-normal) var(--vm-ease-out)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--vm-copper-dark)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--vm-border)'
                }}
              >
                <span
                  role="cell"
                  style={{
                    ...CELL_TEXT,
                    fontWeight: 600,
                    color: 'var(--vm-text-primary)',
                  }}
                >
                  {row.criterion}
                </span>
                <span role="cell" style={{ ...CELL_TEXT, color: 'var(--vm-copper-light)' }}>
                  <span className="lg:hidden" style={{ color: 'var(--vm-text-muted)' }}>
                    Steel Frame:{' '}
                  </span>
                  {row.steelFrame}
                </span>
                <span role="cell" style={{ ...CELL_TEXT, color: 'var(--vm-text-muted)' }}>
                  <span className="lg:hidden">Convencional: </span>
                  {row.conventional}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Linha animada + CTA */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, var(--vm-copper) 0%, transparent 100%)',
            transformOrigin: 'left',
            marginTop: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: 'var(--vm-space-8)',
          }}
        />
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p
              style={{
                fontFamily: 'var(--vm-font-body)',
                fontSize: 'var(--vm-text-base)',
                color: 'var(--vm-text-secondary)',
                lineHeight: 'var(--vm-leading-relaxed)',
                maxWidth: '460px',
              }}
            >
              Ainda em dúvida entre Steel Frame e alvenaria? Fale com quem constrói
              nos dois sistemas e recebe a resposta certa para o seu caso.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
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
                flexShrink: 0,
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
              Tirar minhas dúvidas
            </a>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
