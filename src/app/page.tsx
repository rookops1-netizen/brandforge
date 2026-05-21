import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { HowItWorks } from '@/components/HowItWorks'
import { Features } from '@/components/Features'
import { BrandKitPreview } from '@/components/BrandKitPreview'
import { UseCases } from '@/components/UseCases'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { NewsletterCta } from '@/components/NewsletterCta'
import { CTA } from '@/components/CTA'
import { CancelBanner } from '@/components/CancelBanner'
import { JsonLd } from '@/components/JsonLd'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <JsonLd />
      <Suspense fallback={null}>
        <CancelBanner />
      </Suspense>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <BrandKitPreview />
      <UseCases />
      <Pricing />
      <FAQ />
      <NewsletterCta />
      <CTA />
    </>
  )
}