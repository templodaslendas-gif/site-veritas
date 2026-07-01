import { IntroSection } from '@/components/sections/IntroSection/IntroSection'
import { HeroSection } from '@/components/sections/HeroSection/HeroSection'
import { FutureSection } from '@/components/sections/FutureSection/FutureSection'
import { SteelFrameSection } from '@/components/sections/SteelFrameSection/SteelFrameSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection/HowItWorksSection'
import { VideoReplaySection } from '@/components/sections/VideoReplaySection/VideoReplaySection'

export default function Home() {
  return (
    <main id="main-content">
      {/* ATO 1 — IMPACTO */}
      <IntroSection />
      <HeroSection />

      {/* ATO 2 — EDUCAÇÃO */}
      <FutureSection />
      <SteelFrameSection />
      <HowItWorksSection />
      <VideoReplaySection />

      {/* ATO 3 — COMPROVAÇÃO */}
      <section id="comparativo" aria-label="Comparativo Steel Frame vs Construção Convencional" />
      <section id="beneficios" aria-label="Benefícios do Steel Frame" />
      <section id="conheca-estrutura" aria-label="Conheça a Estrutura" />

      {/* ATO 4 — PORTFÓLIO */}
      <section id="projetos" aria-label="Projetos Realizados" />
      <section id="diferenciais" aria-label="Diferenciais Veritas Metal" />

      {/* ATO 5 — SOLUÇÃO COMPLETA */}
      <section id="drywall" aria-label="Drywall" />
      <section id="estruturas" aria-label="Estruturas Metálicas" />

      {/* ATO 6 — CONVERSÃO */}
      <section id="faq" aria-label="Perguntas Frequentes" />
      <section id="cta-final" aria-label="Solicite seu Orçamento" />
      <section id="contato" aria-label="Entre em Contato" />
    </main>
  )
}
