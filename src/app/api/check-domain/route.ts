import { NextRequest, NextResponse } from 'next/server'

/**
 * Check domain availability by attempting DNS resolution.
 * Uses multiple DNS-over-HTTPS providers for reliability.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const domain = searchParams.get('domain')

  if (!domain) {
    return NextResponse.json({ error: 'Domain parameter is required' }, { status: 400 })
  }

  // Normalize: ensure .com suffix if no TLD provided
  const normalizedDomain = domain.includes('.') ? domain.toLowerCase().trim() : `${domain.toLowerCase().trim()}.com`

  try {
    // Strategy: check DNS resolution. If DNS records exist, domain is almost certainly taken.
    // If DNS resolution fails, domain is likely available (not guaranteed but good heuristic).
    const available = await checkDomainAvailability(normalizedDomain)

    return NextResponse.json({
      domain: normalizedDomain,
      available,
    })
  } catch (error: any) {
    console.error('Domain check error:', error)
    return NextResponse.json({
      domain: normalizedDomain,
      available: false,
      error: error.message || 'Domain check failed',
    })
  }
}

async function checkDomainAvailability(domain: string): Promise<boolean> {
  // Use Cloudflare DNS-over-HTTPS to check if domain has DNS records
  const dnsProviders = [
    `https://cloudflare-dns.com/dns-query?name=${domain}&type=A`,
    `https://cloudflare-dns.com/dns-query?name=${domain}&type=NS`,
  ]

  for (const url of dnsProviders) {
    try {
      const response = await fetch(url, {
        headers: { 'Accept': 'application/dns-json' },
        signal: AbortSignal.timeout(5000),
      })

      if (!response.ok) continue

      const data = await response.json()

      // If we get an authoritative answer with records, domain is taken
      // Status 3 = NXDOMAIN (domain doesn't exist) = available
      if (data.Status === 3) {
        return true // Domain likely available
      }

      // If we get answers, domain resolves = taken
      if (data.Answer && data.Answer.length > 0) {
        return false // Domain has records = taken
      }

      // If Authority section says SOA exists, domain is taken
      if (data.Authority && data.Authority.length > 0) {
        // Check if the SOA record indicates the domain is in a zone
        const hasSoa = data.Authority.some(
          (r: any) => r.type === 6 || r.type === 'SOA'
        )
        if (hasSoa) {
          return false // Domain is in a zone but may or may not have records
        }
      }
    } catch (err) {
      console.error(`DNS check failed for ${domain}:`, err)
      continue
    }
  }

  // Try RDAP/WHOIS as a fallback — check if domain has registrar
  try {
    const whoisResponse = await fetch(
      `https://rdap.org/domain/${domain}`,
      {
        signal: AbortSignal.timeout(5000),
        headers: { Accept: 'application/rdap+json' },
      }
    )

    if (whoisResponse.status === 404) {
      return true // Domain not found in RDAP = available
    }

    if (whoisResponse.ok) {
      // Domain found in RDAP = registered = taken
      return false
    }
  } catch {
    // RDAP failed, rely on DNS result only
  }

  // Default: assume not available if we can't confirm
  return false
}