import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — BrandForge',
  description:
    'Understand how BrandForge uses cookies and similar tracking technologies on our website.',
  openGraph: {
    title: 'Cookie Policy — BrandForge',
    description:
      'Understand how BrandForge uses cookies and similar tracking technologies on our website.',
    url: 'https://brandforge-phi-pearl.vercel.app/cookies',
  },
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}