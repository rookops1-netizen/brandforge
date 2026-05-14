import { LegalPage } from '@/components/LegalPage'

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="May 14, 2026">
      <p>
        This Cookie Policy explains how BrandForge (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
        uses cookies and similar tracking technologies when you visit our website. This policy should
        be read alongside our{' '}
        <a href="/privacy" className="text-brand-600 hover:text-brand-700 underline">
          Privacy Policy
        </a>.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device (computer, tablet, or mobile) when you
        visit a website. They help the website remember your preferences, improve performance, and
        provide analytics to the website owner.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>We use cookies for the following purposes:</p>

      <h3>Essential Cookies</h3>
      <p>
        These cookies are necessary for the website to function properly. They cannot be disabled.
      </p>
      <ul>
        <li>
          <strong>Session cookies:</strong> Maintain your login session and authentication state
        </li>
        <li>
          <strong>CSRF protection:</strong> Help prevent cross-site request forgery attacks
        </li>
        <li>
          <strong>Security tokens:</strong> Used by our authentication provider (Supabase) to keep you
          logged in securely
        </li>
      </ul>

      <h3>Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website so we can improve it.
      </p>
      <ul>
        <li>
          <strong>Page views and navigation:</strong> Which pages you visit and how you move through the site
        </li>
        <li>
          <strong>Feature usage:</strong> Which features and tools you use most
        </li>
        <li>
          <strong>Device and browser data:</strong> Browser type, screen resolution, and device type to
          ensure compatibility
        </li>
        <li>
          <strong>Performance metrics:</strong> Page load times and error rates
        </li>
      </ul>

      <h3>Functional Cookies</h3>
      <p>These cookies enable enhanced functionality and personalization:</p>
      <ul>
        <li>
          <strong>Preferences:</strong> Remember your settings and customizations
        </li>
        <li>
          <strong>Favorites:</strong> Store your saved name suggestions across sessions
        </li>
      </ul>

      <h2>3. Third-Party Cookies</h2>
      <p>
        We use the following third-party services that may set their own cookies:
      </p>
      <ul>
        <li>
          <strong>Stripe:</strong> For secure payment processing. Stripe may set cookies to prevent
          fraud and ensure payment security. See{' '}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline">
            Stripe&apos;s Privacy Policy
          </a>.
        </li>
        <li>
          <strong>Supabase:</strong> Our authentication and database provider. Supabase sets cookies
          for session management. See{' '}
          <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline">
            Supabase&apos;s Privacy Policy
          </a>.
        </li>
        <li>
          <strong>Vercel:</strong> Our hosting provider. Vercel may set cookies for performance and
          security. See{' '}
          <a href="https://vercel.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline">
            Vercel&apos;s Privacy Policy
          </a>.
        </li>
      </ul>

      <h2>4. Managing Cookies</h2>
      <p>
        Most web browsers allow you to control cookies through their settings. You can typically:
      </p>
      <ul>
        <li>View what cookies are stored on your device</li>
        <li>Delete some or all cookies</li>
        <li>Block cookies from specific or all websites</li>
        <li>Block third-party cookies while allowing first-party cookies</li>
        <li>Clear all cookies when you close your browser</li>
      </ul>
      <p>
        Please note that disabling certain cookies may affect the functionality of our Service.
        Essential cookies cannot be disabled as they are required for the Service to operate.
      </p>

      <h2>5. Do Not Track</h2>
      <p>
        Some browsers offer a &quot;Do Not Track&quot; (DNT) feature. Because there is not yet a
        common understanding of how DNT signals should be interpreted, we do not currently respond
        to DNT signals.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. Changes will be posted on this page with
        an updated &quot;Last updated&quot; date. Continued use of our Service after changes constitutes
        acceptance.
      </p>

      <h2>7. Contact</h2>
      <p>
        If you have questions about our use of cookies, please contact us at:{' '}
        <a href="mailto:hello@brandforge.ai" className="text-brand-600 hover:text-brand-700 underline">
          hello@brandforge.ai
        </a>
      </p>
    </LegalPage>
  )
}