import { Hero } from '@/components/Hero'
import { IndustryQuickLinks } from '@/components/IndustryQuickLinks'
import { SocialProof } from '@/components/SocialProof'
import { HowItWorks } from '@/components/HowItWorks'
import { Features } from '@/components/Features'
import dynamic from 'next/dynamic'
import { CTA } from '@/components/CTA'
import { CancelBanner } from '@/components/CancelBanner'
import { JsonLd } from '@/components/JsonLd'
import { Suspense } from 'react'

// Below-the-fold heavy components — lazy loaded for faster FCP/LCP
const BrandKitPreview = dynamic(
  () => import('@/components/BrandKitPreview').then((mod) => mod.BrandKitPreview),
  { loading: () => <section className="py-20 sm:py-28 bg-slate-50" /> }
)
const UseCases = dynamic(
  () => import('@/components/UseCases').then((mod) => mod.UseCases),
  { loading: () => <section className="py-20 sm:py-28 bg-white" /> }
)
const Comparison = dynamic(
  () => import('@/components/Comparison').then((mod) => mod.Comparison),
  { loading: () => <section className="py-20 sm:py-28 bg-white" /> }
)
const Pricing = dynamic(
  () => import('@/components/Pricing').then((mod) => mod.Pricing),
  { loading: () => <section className="py-20 sm:py-28 bg-white" /> }
)
const FAQ = dynamic(
  () => import('@/components/FAQ').then((mod) => mod.FAQ),
  { loading: () => <section className="py-20 sm:py-28 bg-slate-50" /> }
)
const NewsletterCta = dynamic(
  () => import('@/components/NewsletterCta').then((mod) => mod.NewsletterCta),
  { loading: () => <section className="py-16" /> }
)

export default function Home() {
  return (
    <>
      <JsonLd />
      <Suspense fallback={null}>
        <CancelBanner />
      </Suspense>
      <Hero />
      <IndustryQuickLinks />
      <SocialProof />
      <HowItWorks />
      <Features />
      <BrandKitPreview />
      <UseCases />
      <Comparison />
      <Pricing />
      <FAQ />
      <NewsletterCta />
      <CTA />
    </>
  )
}