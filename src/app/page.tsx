import { Hero } from "@/components/Hero"
import { Problems } from "@/components/Problems"
import { Features } from "@/components/Features"
import { Footer } from "@/components/Footer"
import { CaseStudy } from "@/components/CaseStudy"
import { Advantages } from "@/components/Advantages"
import { DevelopmentProcess } from '@/components/DevelopmentProcess'
import { Contact } from '@/components/Contact'
import { RiskComparison } from '@/components/RiskComparison'
import { FloatingCTA } from '@/components/common/FloatingCTA'
import { AIDevelopmentProof } from '@/components/AIDevelopmentProof'
import { QualityAssurance } from '@/components/QualityAssurance'

export default function Home() {
  return (
    <main>
      <Hero />
      <AIDevelopmentProof />
      <Problems />
      <Features />
      <Advantages />
      <CaseStudy />
      <QualityAssurance />
      <DevelopmentProcess />
      <RiskComparison /> 
      <Contact />
      <FloatingCTA />
      <Footer />
    </main>
  )
}
