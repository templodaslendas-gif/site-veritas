import { IntroSection } from '@/components/sections/IntroSection/IntroSection'
import { HeroSection } from '@/components/sections/HeroSection/HeroSection'
import { FutureSection } from '@/components/sections/FutureSection/FutureSection'
import { SteelFrameSection } from '@/components/sections/SteelFrameSection/SteelFrameSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection/HowItWorksSection'

export default function Home() {
  return (
    <main id="main-content">
      <IntroSection />
      <HeroSection />
      <FutureSection />
      <SteelFrameSection />
      <HowItWorksSection />
    </main>
  )
}
