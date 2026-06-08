/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable gzip compression for all responses
  compress: true,

  // Remove X-Powered-By header for security + slight perf win
  poweredByHeader: false,

  // Security + caching headers for static assets
  async headers() {
    return [
      {
        // Cache static assets aggressively — fonts, JS, CSS have content hashes
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache the sitemap and robots for 1 day
        source: '/(sitemap|robots)\\.(xml|txt)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ]
  },
}

export default nextConfig