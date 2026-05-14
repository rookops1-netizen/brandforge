import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — BrandForge',
  description:
    'Learn how BrandForge collects, uses, and protects your personal information. Our privacy policy explains our data practices.',
  openGraph: {
    title: 'Privacy Policy — BrandForge',
    description:
      'Learn how BrandForge collects, uses, and protects your personal information.',
    url: 'https://brandforge-phi-pearl.vercel.app/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}