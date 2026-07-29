import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Business Name Generator — Free, Instant Results | BrandForge',
  description: 'Generate unique business names in seconds with AI. Describe your idea, get tailored name suggestions with brand kits — logo concepts, colors, taglines, and domain availability. Free to start.',
  keywords: [
    'business name generator',
    'AI name generator',
    'brand name generator',
    'company name generator',
    'startup name generator',
    'free business name generator',
    'generate business names',
    'business name ideas',
    'name my business',
    'business naming tool',
    'AI brand name generator',
    'random business name generator',
    'creative business name generator',
  ],
  openGraph: {
    title: 'AI Business Name Generator — Free, Instant Results',
    description: 'Describe your business idea and get AI-generated name suggestions with complete brand kits. Free, instant, no signup required.',
    url: 'https://brandforge.app/generate',
    siteName: 'BrandForge',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'BrandForge AI Business Name Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Business Name Generator — Free, Instant Results | BrandForge',
    description: 'Describe your idea, get tailored business names with brand kits in seconds. Free to start.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/generate',
  },
  robots: { index: true, follow: true },
}

export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}