import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Free AI Business Name Generator & $9 Brand Kit | BrandForge',
  description: 'Try BrandForge free — generate business names instantly, no credit card required. Upgrade to Brand Kit Pro for $9 per brand kit with logo concepts, color palettes, taglines, domain checks, and PDF export.',
  keywords: [
    'brand kit pricing',
    'business name generator pricing',
    'AI name generator cost',
    'brand kit creator price',
    'free business name generator',
    'brand identity pricing',
    'logo generator pricing',
    'brand kit pro',
    'brand name generator free',
    'affordable brand kit',
    'brand identity cost',
  ],
  openGraph: {
    title: 'BrandForge Pricing — Free Name Generation, $9 Brand Kit Pro',
    description: 'Generate business names for free. Unlock a complete brand kit — logo, colors, tagline, domain check — for just $9. No subscription required.',
    url: 'https://brandforge-phi-pearl.vercel.app/pricing',
    siteName: 'BrandForge',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'BrandForge Pricing — Free Name Generation, $9 Brand Kit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandForge Pricing — Free Name Generation, $9 Brand Kit Pro',
    description: 'Try BrandForge free. Upgrade to a complete brand kit for just $9 — logo, colors, tagline, domain, and PDF export. No subscription.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/pricing',
  },
  robots: { index: true, follow: true },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}