import { IntroSection } from '@/components/sections/IntroSection/IntroSection'
import { HeroSection } from '@/components/sections/HeroSection/HeroSection'
import { FutureSection } from '@/components/sections/FutureSection/FutureSection'
import { SteelFrameSection } from '@/components/sections/SteelFrameSection/SteelFrameSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection/HowItWorksSection'
import { VideoReplaySection } from '@/components/sections/VideoReplaySection/VideoReplaySection'
import { ComparisonSection } from '@/components/sections/ComparisonSection/ComparisonSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection/BenefitsSection'
import { StructureSection } from '@/components/sections/StructureSection/StructureSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection/ProjectsSection'
import { DifferentialsSection } from '@/components/sections/DifferentialsSection/DifferentialsSection'
import { DrywallSection } from '@/components/sections/DrywallSection/DrywallSection'
import { MetalStructuresSection } from '@/components/sections/MetalStructuresSection/MetalStructuresSection'
import { FAQSection } from '@/components/sections/FAQSection/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection/FinalCTASection'
import { ContactSection } from '@/components/sections/ContactSection/ContactSection'

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
      <ComparisonSection />
      <BenefitsSection />
      <StructureSection />

      {/* ATO 4 — PORTFÓLIO */}
      <ProjectsSection />
      <DifferentialsSection />

      {/* ATO 5 — SOLUÇÃO COMPLETA */}
      <DrywallSection />
      <MetalStructuresSection />

      {/* ATO 6 — CONVERSÃO */}
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
    </main>
  )
}
