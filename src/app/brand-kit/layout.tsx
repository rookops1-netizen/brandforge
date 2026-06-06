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
                name: 'Brand Kit',
                description: 'Your complete brand kit with logo concepts, color palettes, taglines, typography, and domain/social availability checks.',
                url: 'https://brandforge-phi-pearl.vercel.app/brand-kit',
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
                  { '@type': 'ListItem', position: 2, name: 'Brand Kit', item: 'https://brandforge-phi-pearl.vercel.app/brand-kit' },
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