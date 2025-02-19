import { Hero } from "@/components/Hero"
import { Problems } from "@/components/Problems"
import { Features } from "@/components/Features"
import { Footer } from "@/components/Footer"
import { CaseStudy } from "@/components/CaseStudy"
import { DevelopmentProcess } from '@/components/DevelopmentProcess'
import { FloatingCTA } from '@/components/common/FloatingCTA'
import { AIDevelopmentProof } from '@/components/AIDevelopmentProof'
import { QualityAssurance } from '@/components/QualityAssurance'
import { Vision } from '@/components/Vision'
import { PainPoints } from '@/components/PainPoints'



export default function Home() {
  return (
    <main>
      <Hero />
      <AIDevelopmentProof />
      <PainPoints />
      <Problems />
      <Features />
      <CaseStudy />
      <QualityAssurance />
      <DevelopmentProcess />
      <FloatingCTA />
      <Footer />
    </main>
  )
}
