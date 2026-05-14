import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — BrandForge',
  description:
    'Read the terms and conditions for using BrandForge, our AI-powered business name generator and brand kit tool.',
  openGraph: {
    title: 'Terms of Service — BrandForge',
    description:
      'Read the terms and conditions for using BrandForge, our AI-powered business name generator and brand kit tool.',
    url: 'https://brandforge-phi-pearl.vercel.app/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}