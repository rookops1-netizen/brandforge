import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryPageSchema } from '@/components/IndustryPageSchema'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Education Name Generator — AI-Powered Course, Tutoring & EdTech Business Names',
  description: 'Generate creative education business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'education name generator',
    'course name ideas',
    'tutoring business names',
    'education brand names',
    'EdTech company names',
    'online course name generator',
    'learning platform names',
    'academy name ideas',
    'teaching business names',
    'tutoring name generator',
    'education startup names',
    'course brand names',
    'online academy names',
    'how to name an education business',
    'education naming guide',
  ],
  openGraph: {
    title: 'Free Education Name Generator — AI-Powered Course, Tutoring & EdTech Business Names',
    description: 'Generate creative education business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge.app/education-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Education Name Generator — AI-Powered Course & EdTech Names',
    description: 'Generate creative education business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge.app/education-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Luminary Academy', tagline: 'Light the path to mastery', style: 'Premium & Aspirational', domain: 'luminaryacademy.com', color: '#4F46E5' },
  { name: 'Cleverpath', tagline: 'The smart way forward', style: 'Modern & Clean', domain: 'cleverpath.com', color: '#0891B2' },
  { name: 'Sage & Scaffold', tagline: 'Knowledge built to last', style: 'Warm & Structured', domain: 'sageandscaffold.com', color: '#065F46' },
  { name: 'Waymark Learning', tagline: 'Signposts on your learning journey', style: 'Guiding & Trustworthy', domain: 'waymarklearning.com', color: '#7C3AED' },
  { name: 'Brightforge Institute', tagline: 'Where understanding takes shape', style: 'Authoritative & Inspiring', domain: 'brightforgeinstitute.com', color: '#D97706' },
  { name: 'KinetiQ', tagline: 'Learning in motion', style: 'Short & Dynamic', domain: 'ketiq.com', color: '#DC2626' },
]

const CATEGORIES = [
  { name: 'Online Courses & E-Learning', desc: 'Scalable, memorable names for digital course platforms' },
  { name: 'Tutoring & Test Prep', desc: 'Trustworthy, results-oriented names for 1:1 and group tutoring' },
  { name: 'EdTech & Learning Platforms', desc: 'Tech-forward, innovative names for educational software' },
  { name: 'Academies & Institutes', desc: 'Prestigious, structured names for formal learning brands' },
  { name: 'Language & ESL Schools', desc: 'Global, welcoming names for language learning businesses' },
  { name: 'STEM & Coding Bootcamps', desc: 'Sharp, technical names for science and technology education' },
  { name: 'Creative & Arts Education', desc: 'Expressive, inspiring names for art, music, and design schools' },
  { name: 'Corporate & Professional Training', desc: 'Polished, authoritative names for workplace learning' },
]

const NAMING_TIPS = [
  {
    title: 'Signal transformation, not just information',
    description: 'The best education names promise growth: "Luminary" (becoming brighter), "Cleverpath" (finding the smart way), "Brightforge" (shaping understanding). Learners don\'t want information — they want transformation. Name the outcome, not the input.',
  },
  {
    title: 'Think about the learner\'s journey',
    description: 'Words like "Path," "Way," "Ascent," and "Scaffold" evoke the process of learning. These metaphors are powerful because every learner sees themselves on a journey. BrandForge generates names that make students feel like they\'re heading somewhere meaningful.',
  },
  {
    title: 'Match your audience\'s formality level',
    description: 'A corporate training brand needs gravitas ("Brightforge Institute") while a kids\' coding camp needs energy ("KinetiQ"). Name formality should match your learner\'s expectations — too casual for executives or too stiff for kids creates a mismatch before lesson one.',
  },
  {
    title: 'Check domain extensions (.academy, .learn, .edu)',
    description: 'Education businesses have great domain options beyond .com. Consider .academy, .learn, .education, and .institute. BrandForge checks all education-friendly extensions in real-time, so you can find the perfect match even if the .com is taken.',
  },
  {
    title: 'Avoid generic education words',
    description: '"Smart Learning," "Elite Academy," and "Knowledge First" are overused to the point of invisibility. Stand out with distinctive constructions — compound words ("Cleverpath"), metaphors ("Sage & Scaffold"), or abstract marks that feel scholarly without saying "learning" outright.',
  },
  {
    title: 'Test it on a syllabus or certificate',
    description: 'Your name will appear on course completion certificates, email signatures, and LinkedIn profiles. Imagine "Completed Data Analytics at [Your Name]." Does it sound credible? Does it look good in a professional context? The best education names pass the credential test.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the education name generator work?',
    a: 'Describe your education business — your focus (online courses, tutoring, EdTech, academy, language school, STEM, creative education, corporate training), your audience (K-12, college students, professionals, lifelong learners), and brand personality (authoritative, friendly, innovative, warm). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the education name generator free?',
    a: 'Yes! You can generate education name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good education business name?',
    a: 'A great education name signals transformation and growth while feeling credible and trustworthy. Words like "Academy," "Path," "Luminary," and "Forge" convey learning without being generic. The name should look authoritative on a certificate and approachable on a landing page.',
  },
  {
    q: 'Should I use "Academy" or "Institute" in my name?',
    a: 'It depends on your audience and offering. "Academy" works well for skill-based learning (coding, design, marketing) and feels approachable. "Institute" carries more weight and formality — better for corporate training or advanced professional education. Both can work; just make sure the rest of the name matches that energy.',
  },
  {
    q: 'Can I use these names for my course, tutoring business, or EdTech startup?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, online course branding, app launches, social media, and marketing materials. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific education niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s SAT prep, coding bootcamps, language immersion, Montessori, executive coaching, guitar lessons, or data science — BrandForge tailors suggestions to your exact subject, audience, and brand positioning.',
  },
  {
    q: 'How important is a matching domain for education businesses?',
    a: 'Critical. Your domain is your classroom door, and students need to find it easily. Education has great alternative extensions — .academy, .learn, .education, and .institute are all trusted by learners. BrandForge checks domain availability across all education-relevant extensions in real-time.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function EducationNameGeneratorPage() {
  return (
    <>
      <IndustryPageSchema name="Education Name Generator" path="/education-name-generator" description="AI-powered education name generator with complete brand kits including logos, colors, taglines, and domain availability." faqItems={FAQ_ITEMS} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-blue-700 to-teal-600" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a60.44 60.44 0 01-.497-3.496A60.44 60.44 0 0112 .68a60.44 60.44 0 019.98 5.969m-15.482 0L12 12m8.232-6.028a60.44 60.44 0 01.497 3.496" />
            </svg>
            AI-Powered Education Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Education Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Generate education business names with AI. Describe your course, tutoring, or EdTech business, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Education Names
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/examples"
              className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              See Examples
            </a>
          </div>
          <p className="mt-4 text-sm text-blue-200">Free • No credit card required • Results in seconds</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Education Niche
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From online courses to coding bootcamps — we generate names that inspire learning and build trust.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-slate-900 mb-1">{cat.name}</h3>
                <p className="text-sm text-slate-500">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Names */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Education Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white font-bold text-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.name[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.style}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 italic mb-3">&ldquo;{item.tagline}&rdquo;</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-2.5 py-0.5 text-xs font-medium">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6L19.5 4.5" /></svg>
                    {item.domain}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            These are real examples — your results will be tailored to your specific education business.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Education Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your education business', desc: 'Tell us your focus — online courses, tutoring, EdTech, academy, language school, STEM bootcamp, creative education, or corporate training. Describe your audience (K-12, college, professionals, lifelong learners) and brand personality (authoritative, friendly, innovative, warm).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique education names per search, each with a matching tagline, color palette, and logo concept. Every name signals transformation and credibility — no generic "Smart Learning" here.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .academy, .learn, .education, .institute, and more — plus LinkedIn, YouTube, and social media handle availability. Essential for education brands that need professional credibility.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your website, course materials, and certificates.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-white font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naming Tips */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Tips for Naming Your Education Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In education, your name appears on certificates, LinkedIn profiles, and course platforms. Here&apos;s how to make it credible and memorable.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-200 transition-colors">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="group rounded-xl border border-slate-200 bg-slate-50">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-blue-600">
                  {item.q}
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-800 to-teal-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Education Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your course or platform. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-indigo-800 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Education Names
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>


      {/* Blog Links */}
      <IndustryBlogLinks industry="education-name-generator" />
      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-slate-900 mb-6">More Name Generators</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              📊 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              💡 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              🧶 Craft Name Generator
            </Link>
            <Link href="/yoga-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              🧘 Yoga Name Generator
            </Link>
            <Link href="/coffee-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              ☕ Coffee Name Generator
            </Link>
                        <Link href="/music-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🎵 Music Name Generator
            </Link>
            <Link href="/wedding-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💍 Wedding Name Generator
            </Link>
            <Link href="/cleaning-business-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🧹 Cleaning Business Name Generator
            </Link>
            <Link href="/pet-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🐾 Pet Name Generator
            </Link>
            <Link href="/landscaping-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🌿 Landscaping Name Generator
            </Link>
            <Link href="/salon-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              💇 Salon Name Generator
            </Link>
            <Link href="/construction-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              Construction Name Generator
            </Link>
            <Link href="/marketing-agency-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📈 Marketing Agency Name Generator
            </Link>
<Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>          </div>
        </div>
      </section>
    </>
  )
}