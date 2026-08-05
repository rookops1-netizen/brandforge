import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy — BrandForge',
  description:
    'Learn how BrandForge collects, uses, and protects your personal information. Our privacy policy explains our data practices.',
  openGraph: {
    title: 'Privacy Policy — BrandForge',
    description:
      'Learn how BrandForge collects, uses, and protects your personal information.',
    url: `${SITE_URL}/privacy`,
  },
}

export default function PrivacyLayout({
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
                name: 'Privacy Policy',
                description: 'Learn how BrandForge collects, uses, and protects your personal information.',
                url: `${baseUrl}/privacy`,
                publisher: {
                  '@type': 'Organization',
                  name: 'BrandForge',
                  url: baseUrl,
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
                  { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${baseUrl}/privacy` },
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