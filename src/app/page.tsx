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
import { DevelopmentComparison } from '@/components/DevelopmentComparison'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <Features />
  

      <Advantages />
      <CaseStudy />
      <DevelopmentProcess />
      <RiskComparison /> 
      <Contact />
      <FloatingCTA /> {/* 追加 */}

      <Footer />
    </main>
  )
}
