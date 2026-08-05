import { SITE_URL } from '@/lib/site-config'

interface IndustryPageSchemaProps {
  /** Page title, e.g. "Startup Name Generator" */
  name: string
  /** URL path, e.g. "/startup-name-generator" */
  path: string
  /** Short description for SoftwareApplication */
  description: string
  /** FAQ items — each has a question (q) and answer (a) */
  faqItems: { q: string; a: string }[]
}

/**
 * Reusable JSON-LD structured data component for industry landing pages.
 *
 * Outputs a single `<script type="application/ld+json">` with an `@graph`
 * containing:
 *   - WebPage            (NEW — helps Google understand the page)
 *   - SoftwareApplication (rich snippet eligibility)
 *   - FAQPage             (FAQ rich results)
 *   - BreadcrumbList      (breadcrumb trail in SERPs)
 *
 * All URLs use the SITE_URL constant instead of hardcoded strings.
 */
export function IndustryPageSchema({
  name,
  path,
  description,
  faqItems,
}: IndustryPageSchemaProps) {
  const baseUrl = SITE_URL
  const pageUrl = `${baseUrl}${path}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name,
        description,
        url: pageUrl,
        isPartOf: {
          '@type': 'WebSite',
          name: 'BrandForge',
          url: baseUrl,
        },
        about: {
          '@type': 'SoftwareApplication',
          name: `BrandForge ${name}`,
          url: pageUrl,
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: `BrandForge ${name}`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description,
        url: pageUrl,
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
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name, item: pageUrl },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}