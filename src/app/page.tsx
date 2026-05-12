import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { HowItWorks } from '@/components/HowItWorks'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
import { CancelBanner } from '@/components/CancelBanner'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <CancelBanner />
      </Suspense>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}