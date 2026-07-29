import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { BreadcrumbSchema } from '@/components/BlogPostSchema'

export const metadata: Metadata = {
  title: 'Privacy Policy — BrandForge',
  description: 'BrandForge Privacy Policy. Learn how we collect, use, and protect your personal information when you use our AI business name generator and brand kit services.',
  openGraph: {
    title: 'Privacy Policy — BrandForge',
    description: 'Learn how BrandForge collects, uses, and protects your personal information.',
    url: 'https://brandforge.app/privacy',
    siteName: 'BrandForge',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://brandforge.app/privacy' },
}

export default function PrivacyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Privacy Policy',
        description: 'BrandForge Privacy Policy — how we collect, use, and protect your information.',
        url: 'https://brandforge.app/privacy',
        isPartOf: {
          '@type': 'WebSite',
          name: 'BrandForge',
          url: 'https://brandforge.app',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brandforge.app' },
          { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://brandforge.app/privacy' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LegalPage title="Privacy Policy" lastUpdated="May 14, 2026">
      <p>
        At BrandForge, we take your privacy seriously. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you visit our website and use our services.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Personal Information</h3>
      <p>
        When you create an account or use our services, we may collect personal information including:
      </p>
      <ul>
        <li>Email address</li>
        <li>Name (if provided)</li>
        <li>Payment information (processed securely through Stripe — we never store your full card details)</li>
        <li>Account preferences and settings</li>
      </ul>

      <h3>Usage Data</h3>
      <p>
        We automatically collect certain information when you use our service, including:
      </p>
      <ul>
        <li>Business descriptions and name generation requests you submit</li>
        <li>Pages visited and features used</li>
        <li>Referral source and browsing patterns</li>
        <li>Device information (browser type, operating system, screen size)</li>
        <li>IP address and general geographic location</li>
      </ul>

      <h3>Cookies and Tracking</h3>
      <p>
        We use cookies and similar tracking technologies to improve your experience. See our{' '}
        <a href="/cookies" className="text-brand-600 hover:text-brand-700 underline">
          Cookie Policy
        </a>{' '}
        for more details.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve our AI name generation and brand kit services</li>
        <li>Process payments and manage subscriptions</li>
        <li>Send you service-related communications (account verification, purchase receipts)</li>
        <li>Send marketing communications (with your consent; you can opt out anytime)</li>
        <li>Respond to your comments, questions, and support requests</li>
        <li>Monitor and analyze usage patterns to improve our product</li>
        <li>Detect, prevent, and address technical issues or fraud</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>We do <strong>not</strong> sell your personal information. We may share your information only in the following circumstances:</p>
      <ul>
        <li>
          <strong>Service Providers:</strong> We share information with third-party service providers who
          perform services on our behalf (e.g., Stripe for payments, Supabase for database hosting, analytics providers).
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, or legal process.
        </li>
        <li>
          <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.
        </li>
        <li>
          <strong>With Your Consent:</strong> We may share information when you have given us explicit permission.
        </li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement appropriate technical and organizational security measures to protect your personal
        information, including encryption in transit (HTTPS), secure authentication, and access controls.
        However, no method of transmission over the Internet is 100% secure, and we cannot guarantee
        absolute security.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain your account information for as long as your account is active. Generated names and
        brand kits are retained so you can access them. You may request deletion of your account and
        associated data at any time by contacting us.
      </p>

      <h2>6. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to processing of your data</li>
        <li>Data portability — receive your data in a structured format</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{' '}
        <a href="mailto:hello@brandforge.ai" className="text-brand-600 hover:text-brand-700 underline">
          hello@brandforge.ai
        </a>.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party sites. We are not responsible for the privacy practices
        or content of those sites. We encourage you to review the privacy policies of any third-party sites
        you visit.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        Our service is not directed to children under the age of 13. We do not knowingly collect personal
        information from children under 13. If we become aware that we have collected data from a child
        under 13, we will take steps to delete that information.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting
        the new policy on this page and updating the &quot;Last updated&quot; date. Your continued use of
        the service after changes constitutes acceptance of the updated policy.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our data practices, please contact us at:{' '}
        <a href="mailto:hello@brandforge.ai" className="text-brand-600 hover:text-brand-700 underline">
          hello@brandforge.ai
        </a>
      </p>
    </LegalPage>
    </>
  )
}