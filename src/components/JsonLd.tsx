export function JsonLd() {
  const baseUrl = 'https://brandforge-phi-pearl.vercel.app'

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BrandForge',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      'AI-powered business name generator with complete brand kits including logos, color palettes, taglines, and domain availability checks.',
    sameAs: [],
  }

  const webApplication = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'BrandForge',
    url: baseUrl,
    description:
      'Generate unique business names with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Powered by AI.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free name generation, paid brand kits starting at $9',
    },
    featureList: [
      'AI business name generation',
      'Logo concept generation',
      'Color palette creation',
      'Tagline generation',
      'Domain availability checking',
      'Social handle availability checking',
      'Complete brand kits',
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BrandForge',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/generate?desc={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}