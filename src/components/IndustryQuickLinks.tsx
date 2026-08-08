import Link from 'next/link'

const industries = [
  { name: 'Startup', slug: 'startup-name-generator', shortName: 'Startup' },
  { name: 'Restaurant', slug: 'restaurant-name-generator', shortName: 'Restaurant' },
  { name: 'Fitness', slug: 'fitness-brand-name-generator', shortName: 'Fitness' },
  { name: 'Real Estate', slug: 'real-estate-name-generator', shortName: 'Real Estate' },
  { name: 'Photography', slug: 'photography-name-generator', shortName: 'Photography' },
  { name: 'Beauty', slug: 'beauty-name-generator', shortName: 'Beauty' },
  { name: 'Fashion', slug: 'fashion-name-generator', shortName: 'Fashion' },
  { name: 'Food Truck', slug: 'food-truck-name-generator', shortName: 'Food Truck' },
  { name: 'Tech & SaaS', slug: 'tech-name-generator', shortName: 'Tech & SaaS' },
  { name: 'Consulting', slug: 'consulting-name-generator', shortName: 'Consulting' },
  { name: 'Podcast', slug: 'podcast-name-generator', shortName: 'Podcast' },
  { name: 'Coaching', slug: 'coaching-name-generator', shortName: 'Coaching' },
  { name: 'Nonprofit', slug: 'nonprofit-name-generator', shortName: 'Nonprofit' },
  { name: 'Craft & Handmade', slug: 'craft-name-generator', shortName: 'Craft' },
  { name: 'Education', slug: 'education-name-generator', shortName: 'Education' },
  { name: 'Yoga & Wellness', slug: 'yoga-name-generator', shortName: 'Yoga' },
  { name: 'Coffee Shop', slug: 'coffee-name-generator', shortName: 'Coffee' },
  { name: 'Music', slug: 'music-name-generator', shortName: 'Music' },
  { name: 'Wedding', slug: 'wedding-name-generator', shortName: 'Wedding' },
  { name: 'Cleaning', slug: 'cleaning-business-name-generator', shortName: 'Cleaning' },
  { name: 'Pet Business', slug: 'pet-name-generator', shortName: 'Pet' },
  { name: 'Landscaping', slug: 'landscaping-name-generator', shortName: 'Landscaping' },
  { name: 'Salon', slug: 'salon-name-generator', shortName: 'Salon' },
  { name: 'Construction', slug: 'construction-name-generator', shortName: 'Construction' },
  { name: 'Marketing Agency', slug: 'marketing-agency-name-generator', shortName: 'Marketing' },
  { name: 'Florist', slug: 'florist-name-generator', shortName: 'Florist' },
  { name: 'Domain', slug: 'domain-name-generator', shortName: 'Domain' },
  { name: 'Catering', slug: 'catering-name-generator', shortName: 'Catering' },
]

export function IndustryQuickLinks() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-sm font-semibold text-brand-600 tracking-wider uppercase">
            Name Generators by Industry
          </p>
          <h2 className="mt-1 text-lg sm:text-xl font-bold text-slate-900">
            Find the perfect name for your business
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/${industry.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 hover:shadow-sm"
            >
              {industry.shortName}
              <svg className="h-3 w-3 opacity-40" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          28 industry-specific name generators — each with AI-powered suggestions, domain checks, and brand kits
        </p>
      </div>
    </section>
  )
}