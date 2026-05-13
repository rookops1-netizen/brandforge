import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Kit — BrandForge',
  description:
    'View your complete brand kit with logo concepts, color palettes, taglines, and domain/social availability.',
  openGraph: {
    title: 'Brand Kit — BrandForge',
    description:
      'View your complete brand kit with logo concepts, color palettes, taglines, and domain/social availability.',
    url: 'https://brandforge-phi-pearl.vercel.app/brand-kit',
  },
}

export default function BrandKitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}