import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Terms of Service — BrandForge',
  description:
    'Read the terms and conditions for using BrandForge, our AI-powered business name generator and brand kit tool.',
  openGraph: {
    title: 'Terms of Service — BrandForge',
    description:
      'Read the terms and conditions for using BrandForge, our AI-powered business name generator and brand kit tool.',
    url: `${SITE_URL}/terms`,
  },
}

export default function TermsLayout({
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
                name: 'Terms of Service',
                description: 'Terms and conditions for using BrandForge, the AI-powered business name generator and brand kit tool.',
                url: `${baseUrl}/terms`,
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
                  { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: `${baseUrl}/terms` },
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