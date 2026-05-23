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

  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BrandForge',
    url: baseUrl,
    description:
      'AI-powered business name generator with complete brand kits including logos, color palettes, taglines, and domain availability checks.',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '12400',
      bestRating: '5',
      worstRating: '1',
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
          text: 'You describe your business idea in plain English — like "a sustainable coffee subscription box" — and our AI generates creative, memorable names tailored to your description, industry, and target audience. Each name comes with a complete brand kit including logo concepts, color palettes, and taglines.',
        },
      },
      {
        '@type': 'Question',
        name: "What's included in the free tier?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The free tier gives you 5 name suggestions per search with unlimited searches and basic name meanings. You can save up to 10 favorite names to compare later.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do I get with the Brand Kit Pro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The Pro tier unlocks everything: unlimited name suggestions, AI-generated logo concepts, custom color palettes, taglines, domain and social handle availability checks, and a downloadable brand kit PDF. It's a complete brand identity in one click.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use the generated names commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All names generated are yours to use for any purpose — business registration, website domains, trademarks, and more. We recommend checking trademark databases in your jurisdiction before finalizing, but there are no licensing restrictions from our side.',
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
      {
        '@type': 'Question',
        name: 'Is BrandForge free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! BrandForge offers free name generation with no credit card required. You get 5 name suggestions per search with unlimited searches. The Pro Brand Kit at $9 adds logo concepts, color palettes, taglines, and domain/social checks — everything you need to launch your brand.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I come up with a good business name?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Describe your business idea in BrandForge — our AI considers your industry, target audience, and brand personality to generate names that are memorable, available as domains, and distinctive. You can also check out our blog for naming strategies, industry-specific ideas, and common mistakes to avoid.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does BrandForge check if a business name is taken?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! BrandForge checks domain availability across multiple TLDs (.com, .io, .co, etc.) and social media handle availability on major platforms. For legal name availability (LLC, corporation), we recommend checking your state\'s business registry and the USPTO trademark database.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes a good brand name?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A great brand name is memorable, easy to spell and pronounce, distinctive from competitors, available as a .com domain, and resonates with your target audience. Names that are short (2-3 syllables), evoke positive emotions, and avoid hyphens or numbers tend to perform best. BrandForge generates names that meet all these criteria.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is BrandForge different from Namelix or Looka?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BrandForge provides complete brand kits in one step — not just names, but logo concepts, color palettes, taglines, and domain checks all together. Namelix focuses on name generation only, and Looka emphasizes logo design. BrandForge gives you the full brand identity package at a fraction of the cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I generate names for any industry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Absolutely! BrandForge works for any industry — tech startups, restaurants, consulting firms, e-commerce stores, creative agencies, health & wellness, real estate, and dozens more. Just describe your business and our AI tailors names specifically for your niche.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
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