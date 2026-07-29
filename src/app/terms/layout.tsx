import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — BrandForge',
  description:
    'Read the terms and conditions for using BrandForge, our AI-powered business name generator and brand kit tool.',
  openGraph: {
    title: 'Terms of Service — BrandForge',
    description:
      'Read the terms and conditions for using BrandForge, our AI-powered business name generator and brand kit tool.',
    url: 'https://brandforge.app/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                name: 'Terms of Service',
                description: 'Terms and conditions for using BrandForge, the AI-powered business name generator and brand kit tool.',
                url: 'https://brandforge.app/terms',
                publisher: {
                  '@type': 'Organization',
                  name: 'BrandForge',
                  url: 'https://brandforge.app',
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brandforge.app' },
                  { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: 'https://brandforge.app/terms' },
                ],
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}