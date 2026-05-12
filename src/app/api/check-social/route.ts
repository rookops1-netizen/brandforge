import { NextRequest, NextResponse } from 'next/server'

/**
 * Check social media handle availability.
 * Uses best-effort HTTP requests to check if a handle exists on each platform.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const handle = searchParams.get('handle')
  const platform = searchParams.get('platform') // 'twitter' or 'instagram' or 'all'

  if (!handle) {
    return NextResponse.json({ error: 'Handle parameter is required' }, { status: 400 })
  }

  const normalizedHandle = handle.toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 15)

  if (platform === 'twitter' || platform === 'all' || !platform) {
    const twitterCheck = await checkTwitterHandle(normalizedHandle)
    
    if (platform === 'twitter') {
      return NextResponse.json({
        platform: 'twitter',
        handle: normalizedHandle,
        ...twitterCheck,
      })
    }
  }

  if (platform === 'instagram' || platform === 'all' || !platform) {
    const igCheck = await checkInstagramHandle(normalizedHandle)

    if (platform === 'instagram') {
      return NextResponse.json({
        platform: 'instagram',
        handle: normalizedHandle,
        ...igCheck,
      })
    }
  }

  // Return all platforms
  const [twitterResult, igResult] = await Promise.all([
    checkTwitterHandle(normalizedHandle),
    checkInstagramHandle(normalizedHandle),
  ])

  return NextResponse.json({
    handle: normalizedHandle,
    twitter: {
      handle: normalizedHandle,
      ...twitterResult,
    },
    instagram: {
      handle: normalizedHandle,
      ...igResult,
    },
  })
}

async function checkTwitterHandle(handle: string): Promise<{ available: boolean; checked: boolean }> {
  try {
    // Attempt to fetch the Twitter profile page. If we get a non-404,
    // the handle likely exists. This is best-effort.
    const response = await fetch(`https://x.com/${handle}`, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(5000),
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
    })

    // Twitter/X returns 200 for existing profiles, 302 redirect for suspended/deactivated
    // but may return 200 even for non-existent handles due to their SPA
    // Best-effort: if we get a redirect or error, we can't be sure
    if (response.status === 404) {
      return { available: true, checked: true }
    }

    // Twitter/X doesn't reliably return 404 for non-existent handles
    // since it's a SPA. We'll use a heuristic based on the response.
    // For MVP, we'll check if the page contains the handle in the title.
    if (response.status === 200) {
      const fullResponse = await fetch(`https://x.com/${handle}`, {
        signal: AbortSignal.timeout(5000),
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        },
      })
      const html = await fullResponse.text()
      // If the page mentions the handle, it likely exists
      if (html.includes(`@${handle}`) || html.includes(handle)) {
        return { available: false, checked: true }
      }
      return { available: true, checked: true }
    }

    return { available: true, checked: true }
  } catch {
    // If we can't check, report it as unknown
    return { available: false, checked: false }
  }
}

async function checkInstagramHandle(handle: string): Promise<{ available: boolean; checked: boolean }> {
  try {
    // Try to fetch Instagram profile. If it returns a page mentioning the handle, it's taken.
    const response = await fetch(`https://www.instagram.com/${handle}/`, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(5000),
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
    })

    // Instagram returns 404 for non-existent users, 200 for existing ones
    if (response.status === 404) {
      return { available: true, checked: true }
    }

    if (response.status === 200) {
      return { available: false, checked: true }
    }

    // Redirects or other status codes — can't determine
    return { available: false, checked: false }
  } catch {
    return { available: false, checked: false }
  }
}