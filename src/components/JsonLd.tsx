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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does the name generator work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You describe your business idea in plain English — like "a sustainable coffee subscription box" — and our AI generates creative, memorable names tailored to your description, industry, and target audience.',
        },
      },
      {
        '@type': 'Question',
        name: "What's included in the free tier?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The free tier gives you 5 name suggestions per search with unlimited searches and basic name meanings. You can save up to 10 favorite names.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do I get with the Brand Kit Pro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Pro tier unlocks everything: unlimited name suggestions, AI-generated logo concepts, custom color palettes, taglines, domain and social handle availability checks, and a downloadable brand kit PDF.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use the generated names commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All names generated are yours to use. We recommend checking trademark databases in your jurisdiction before finalizing, but there are no licensing restrictions from our side.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is the domain availability check?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We query real-time domain registries to give you up-to-the-minute availability for .com, .io, .co, and other popular TLDs. We recommend registering quickly — good domains go fast.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get a refund?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Absolutely. If you're not satisfied with your brand kit, contact us within 14 days for a full refund — no questions asked.",
        },
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}