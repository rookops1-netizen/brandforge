import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Cookie Policy — BrandForge',
  description:
    'Understand how BrandForge uses cookies and similar tracking technologies on our website.',
  openGraph: {
    title: 'Cookie Policy — BrandForge',
    description:
      'Understand how BrandForge uses cookies and similar tracking technologies on our website.',
    url: `${SITE_URL}/cookies`,
  },
}

export default function CookiesLayout({
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
                name: 'Cookie Policy',
                description: 'How BrandForge uses cookies and similar tracking technologies.',
                url: `${baseUrl}/cookies`,
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
                  { '@type': 'ListItem', position: 2, name: 'Cookie Policy', item: `${baseUrl}/cookies` },
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