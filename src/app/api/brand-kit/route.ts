import { NextRequest, NextResponse } from 'next/server'
import type { BrandKit } from '@/types'

const BRAND_KIT_PROMPT = `You are a brand identity expert. Given a business name and its meaning, create a complete brand kit.

Provide a JSON object with exactly these fields:
- name: The exact name provided
- logoConcept: A detailed description of a logo concept (visual elements, style, typography suggestions)
- colorPalette: Object with keys: primary (hex), secondary (hex), accent (hex), background (hex), text (hex), name (palette theme name)
- tagline: A memorable tagline for the business
- fontSuggestion: Typography recommendation (heading + body font pair)
- domainAvailable: true/false (suggest whether domain is likely available)
- socialHandles: Object with "twitter" and "instagram" keys, each an object with "handle" (string without @) and "available" (boolean)

Respond ONLY with valid JSON. No markdown, no explanation.`

export async function POST(req: NextRequest) {
  try {
    const { businessName, meaning, style } = await req.json()

    if (!businessName) {
      return NextResponse.json({ error: 'Business name is required' }, { status: 400 })
    }

    const apiBase = process.env.OPENAI_API_BASE || 'https://api.openai.com/v1'
    const apiKey = process.env.OPENAI_API_KEY || ''

    if (!apiKey) {
      return NextResponse.json({
        kit: generateMockKit(businessName, meaning, style),
      })
    }

    const response = await fetch(`${apiBase}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: [
          { role: 'system', content: BRAND_KIT_PROMPT },
          { role: 'user', content: `Business name: ${businessName}\nMeaning: ${meaning}\nStyle: ${style}` },
        ],
        temperature: 0.7,
        max_tokens: 1500,
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('LLM API error:', response.status, errText)
      return NextResponse.json({ error: 'Failed to generate brand kit' }, { status: 500 })
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content || ''

    let kit: BrandKit
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/)
      if (!jsonMatch) throw new Error('No JSON found')
      const parsed = JSON.parse(jsonMatch[0])
      // Normalize: LLM might return businessName or name
      kit = {
        ...parsed,
        name: parsed.name || parsed.businessName || businessName,
        socialHandles: {
          twitter: {
            handle: parsed.socialHandles?.twitter?.handle || businessName.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 15),
            available: parsed.socialHandles?.twitter?.available ?? true,
          },
          instagram: {
            handle: parsed.socialHandles?.instagram?.handle || businessName.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 15),
            available: parsed.socialHandles?.instagram?.available ?? true,
          },
        },
      }
    } catch {
      return NextResponse.json({
        kit: generateMockKit(businessName, meaning, style),
      })
    }

    return NextResponse.json({ kit })
  } catch (error: any) {
    console.error('Brand kit error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}

const PALETTES = [
  { primary: '#4F46E5', secondary: '#7C3AED', accent: '#F59E0B', background: '#F9FAFB', text: '#111827', name: 'Indigo Violet' },
  { primary: '#059669', secondary: '#0D9488', accent: '#F97316', background: '#F0FDF4', text: '#064E3B', name: 'Emerald Teal' },
  { primary: '#DC2626', secondary: '#EA580C', accent: '#FBBF24', background: '#FEF2F2', text: '#7F1D1D', name: 'Fiery Sunset' },
  { primary: '#2563EB', secondary: '#0891B2', accent: '#22D3EE', background: '#EFF6FF', text: '#1E3A5F', name: 'Ocean Depth' },
  { primary: '#7C3AED', secondary: '#C026D3', accent: '#F472B6', background: '#FAF5FF', text: '#3B0764', name: 'Purple Bloom' },
]

function generateMockKit(businessName: string, meaning: string, style: string): BrandKit {
  const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)]
  const handle = businessName.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 15)

  return {
    name: businessName,
    logoConcept: `A modern ${style || 'professional'} logo featuring the letter "${businessName.charAt(0)}" rendered in a clean sans-serif typeface, complemented by an abstract geometric mark that evokes growth and innovation. The primary color is ${palette.primary} with accents of ${palette.accent}.`,
    colorPalette: {
      primary: palette.primary,
      secondary: palette.secondary,
      accent: palette.accent,
      background: palette.background,
      text: palette.text,
      name: palette.name,
    },
    tagline: `${businessName} — Where vision becomes reality`,
    fontSuggestion: 'Inter or SF Pro — clean, modern, and readable across all sizes',
    typography: {
      heading: 'Inter Bold',
      body: 'Inter Regular',
    },
    domainAvailable: Math.random() > 0.5,
    socialHandles: {
      twitter: { handle: `${handle}`, available: handle.length >= 4 },
      instagram: { handle: `${handle}`, available: handle.length >= 3 },
    },
  }
}