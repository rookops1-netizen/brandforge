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
                url: 'https://brandforge-phi-pearl.vercel.app/privacy',
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
                  { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://brandforge-phi-pearl.vercel.app/privacy' },
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