import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Brand Kit — BrandForge',
  description:
    'View your complete brand kit with logo concepts, color palettes, taglines, and domain/social availability.',
  openGraph: {
    title: 'Brand Kit — BrandForge',
    description:
      'View your complete brand kit with logo concepts, color palettes, taglines, and domain/social availability.',
    url: `${SITE_URL}/brand-kit`,
    siteName: 'BrandForge',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/brand-kit` },
}

export default function BrandKitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseUrl = SITE_URL

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
                url: `${baseUrl}/brand-kit`,
                isPartOf: {
                  '@type': 'WebSite',
                  name: 'BrandForge',
                  url: baseUrl,
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
                  { '@type': 'ListItem', position: 2, name: 'Brand Kit', item: `${baseUrl}/brand-kit` },
                ],
              },
              {
                '@type': 'SoftwareApplication',
                name: 'BrandForge Brand Kit',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web',
                description: 'Complete brand identity kit with AI-generated logo concepts, color palettes, taglines, typography, domain and social handle availability checks.',
                url: `${baseUrl}/brand-kit`,
                offers: [
                  { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free tier — 5 name suggestions per search' },
                  { '@type': 'Offer', price: '9', priceCurrency: 'USD', description: 'Brand Kit Pro — complete brand identity per name' },
                ],
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  ratingCount: '12400',
                  bestRating: '5',
                  worstRating: '1',
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}