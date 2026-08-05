import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'

const BASE_URL = SITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/generate`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/brand-kit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/examples`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Blog articles — original 6
    {
      url: `${BASE_URL}/blog/how-to-choose-business-name`,
      lastModified: new Date('2025-05-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/ai-name-generator-vs-traditional`,
      lastModified: new Date('2025-05-10'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/brand-color-psychology`,
      lastModified: new Date('2025-05-05'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/domain-name-availability`,
      lastModified: new Date('2025-04-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/tagline-writing-guide`,
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/startup-naming-mistakes`,
      lastModified: new Date('2025-04-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Blog articles — new 4 (May 17)
    {
      url: `${BASE_URL}/blog/catchy-business-names`,
      lastModified: new Date('2025-05-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/business-name-ideas-by-industry`,
      lastModified: new Date('2025-05-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/creative-brand-names`,
      lastModified: new Date('2025-05-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/llc-naming-guide`,
      lastModified: new Date('2025-05-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Blog articles — May 18
    {
      url: `${BASE_URL}/blog/free-brand-name-generator`,
      lastModified: new Date('2025-05-18'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog articles — May 20
    {
      url: `${BASE_URL}/blog/company-name-checker`,
      lastModified: new Date('2025-05-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/unique-business-names`,
      lastModified: new Date('2025-05-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/product-naming-guide`,
      lastModified: new Date('2025-05-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Blog articles — May 25
    {
      url: `${BASE_URL}/blog/how-to-build-brand-identity`,
      lastModified: new Date('2026-05-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog articles — May 28
    {
      url: `${BASE_URL}/blog/cool-business-names`,
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Blog articles — June 7
    {
      url: `${BASE_URL}/blog/brand-name-generator`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — June 9
    {
      url: `${BASE_URL}/blog/small-business-name-generator`,
      lastModified: new Date('2026-06-09'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — June 10
    {
      url: `${BASE_URL}/blog/how-to-choose-brand-name`,
      lastModified: new Date('2026-06-10'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — June 12
    {
      url: `${BASE_URL}/blog/business-name-generator`,
      lastModified: new Date('2026-06-12'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 7
    {
      url: `${BASE_URL}/blog/company-name-generator`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 8
    {
      url: `${BASE_URL}/blog/brand-name-ideas`,
      lastModified: new Date('2026-07-08'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 12
    {
      url: `${BASE_URL}/blog/catchy-brand-names`,
      lastModified: new Date('2026-07-12'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 13
    {
      url: `${BASE_URL}/blog/app-name-generator`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 15
    {
      url: `${BASE_URL}/blog/startup-name-ideas`,
      lastModified: new Date('2026-07-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/product-name-generator`,
      lastModified: new Date('2026-07-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 17
    {
      url: `${BASE_URL}/blog/how-to-come-up-with-business-name`,
      lastModified: new Date('2026-07-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 19
    {
      url: `${BASE_URL}/blog/llc-name-generator`,
      lastModified: new Date('2026-07-19'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 21
    {
      url: `${BASE_URL}/blog/store-name-generator`,
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 25
    {
      url: `${BASE_URL}/blog/clothing-brand-name-generator`,
      lastModified: new Date('2026-07-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 26
    {
      url: `${BASE_URL}/blog/youtube-channel-name-generator`,
      lastModified: new Date('2026-07-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 26
    {
      url: `${BASE_URL}/blog/brand-name-availability-checker`,
      lastModified: new Date('2026-07-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 27
    {
      url: `${BASE_URL}/blog/blog-name-generator`,
      lastModified: new Date('2026-07-27'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 27
    {
      url: `${BASE_URL}/blog/podcast-name-generator`,
      lastModified: new Date('2026-07-27'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — July 28
    {
      url: `${BASE_URL}/blog/saas-name-generator`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — August 4
    {
      url: `${BASE_URL}/blog/brand-naming-guide`,
      lastModified: new Date('2026-08-04'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/nail-salon-name-generator`,
      lastModified: new Date('2026-08-04'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog articles — August 5
    {
      url: `${BASE_URL}/blog/bakery-name-generator`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Industry landing pages
    {
      url: `${BASE_URL}/domain-name-generator`,
      lastModified: new Date('2026-07-22'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/startup-name-generator`,
      lastModified: new Date('2026-05-29'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/restaurant-name-generator`,
      lastModified: new Date('2026-05-29'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/fitness-brand-name-generator`,
      lastModified: new Date('2026-05-29'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/real-estate-name-generator`,
      lastModified: new Date('2026-05-30'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/photography-name-generator`,
      lastModified: new Date('2026-05-30'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/beauty-name-generator`,
      lastModified: new Date('2026-05-31'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/fashion-name-generator`,
      lastModified: new Date('2026-05-31'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/food-truck-name-generator`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tech-name-generator`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/consulting-name-generator`,
      lastModified: new Date('2026-06-02'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/podcast-name-generator`,
      lastModified: new Date('2026-06-02'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/coaching-name-generator`,
      lastModified: new Date('2026-06-03'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nonprofit-name-generator`,
      lastModified: new Date('2026-06-03'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/craft-name-generator`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/education-name-generator`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/yoga-name-generator`,
      lastModified: new Date('2026-06-06'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/coffee-name-generator`,
      lastModified: new Date('2026-06-06'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/music-name-generator`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wedding-name-generator`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cleaning-business-name-generator`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pet-name-generator`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/landscaping-name-generator`,
      lastModified: new Date('2026-06-10'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/salon-name-generator`,
      lastModified: new Date('2026-06-11'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/construction-name-generator`,
      lastModified: new Date('2026-06-12'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/marketing-agency-name-generator`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Brand Kit export
    {
      url: `${BASE_URL}/export`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    // Testimonials
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Legal pages
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },

  ]
}