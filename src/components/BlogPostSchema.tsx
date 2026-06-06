interface BlogPostSchemaProps {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  authorName?: string
  imageUrl?: string
  keywords?: string[]
}

export function BlogPostSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = 'BrandForge Team',
  imageUrl,
  keywords,
}: BlogPostSchemaProps) {
  const baseUrl = 'https://brandforge-phi-pearl.vercel.app'

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BrandForge',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(imageUrl && { image: imageUrl }),
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(', ') }),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: url,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

interface BreadcrumbSchemaProps {
  items: { name: string; href: string }[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const baseUrl = 'https://brandforge-phi-pearl.vercel.app'

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: item.href.startsWith('http') ? item.href : `${baseUrl}${item.href}`,
      })),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  )
}

interface OrganizationSchemaProps {
  /** If true, include extra detail (founder, founding date, etc.) */
  detailed?: boolean
}

export function OrganizationSchema({ detailed = false }: OrganizationSchemaProps) {
  const baseUrl = 'https://brandforge-phi-pearl.vercel.app'

  const organization: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BrandForge',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      'AI-powered business name generator with complete brand kits including logos, color palettes, taglines, and domain availability checks.',
    sameAs: [],
  }

  if (detailed) {
    organization.foundingDate = '2025'
    organization.founder = {
      '@type': 'Person',
      name: 'Daniel',
      jobTitle: 'Founder',
    }
    organization.knowsAbout = [
      'Business Naming',
      'Brand Identity',
      'AI Name Generation',
      'Brand Kits',
      'Domain Availability',
      'Logo Design',
    ]
    organization.areaServed = 'Worldwide'
    organization.contactPoint = {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${baseUrl}/about`,
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  )
}

interface BlogIndexSchemaProps {
  /** Number of blog posts */
  postCount?: number
}

export function BlogIndexSchema({ postCount }: BlogIndexSchemaProps) {
  const baseUrl = 'https://brandforge-phi-pearl.vercel.app'

  const blog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'BrandForge Blog',
    description:
      'Expert advice on choosing the perfect business name, building your brand identity, and leveraging AI for creative branding.',
    url: `${baseUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'BrandForge',
      url: baseUrl,
    },
    ...(postCount && { blogPostCount: postCount }),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blog) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}