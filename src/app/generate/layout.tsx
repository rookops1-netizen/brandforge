import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Generate Business Names — BrandForge',
  description:
    'Describe your business idea and get AI-generated name suggestions with meanings, styles, and domain availability. Free to use.',
  openGraph: {
    title: 'Generate Business Names — BrandForge',
    description:
      'Describe your business idea and get AI-generated name suggestions with meanings, styles, and domain availability.',
    url: 'https://brandforge-phi-pearl.vercel.app/generate',
  },
}

export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}