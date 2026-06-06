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
                name: 'Cookie Policy',
                description: 'How BrandForge uses cookies and similar tracking technologies.',
                url: 'https://brandforge-phi-pearl.vercel.app/cookies',
                publisher: {
                  '@type': 'Organization',
                  name: 'BrandForge',
                  url: 'https://brandforge-phi-pearl.vercel.app',
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brandforge-phi-pearl.vercel.app' },
                  { '@type': 'ListItem', position: 2, name: 'Cookie Policy', item: 'https://brandforge-phi-pearl.vercel.app/cookies' },
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