import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'BrandForge — AI Business Name Generator & Brand Kit'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: 'white',
            }}
          >
            BrandForge
          </span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          Name your business.{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Build your brand.
          </span>
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#94a3b8',
            marginTop: 24,
            textAlign: 'center',
            maxWidth: 700,
          }}
        >
          AI-powered business name generator with complete brand kits — logos, colors, taglines, and domain checks. Free to start.
        </div>
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 40,
          }}
        >
          {['5 Free Generations', 'Full Brand Kits', 'Domain Checks'].map((text) => (
            <div
              key={text}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 16px',
                borderRadius: 9999,
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                border: '1px solid rgba(99, 102, 241, 0.4)',
                color: '#c4b5fd',
                fontSize: 16,
              }}
            >
              ✦ {text}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}