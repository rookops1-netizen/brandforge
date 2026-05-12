import { NextRequest, NextResponse } from 'next/server'
import type { GeneratedName } from '@/types'

const NAMES_PROMPT = `You are a creative business naming expert. Generate 5 unique business names based on the user's description and industry.

For each name, provide:
- name: The business name (creative, memorable, brandable)
- meaning: A brief explanation of why this name works and what it evokes (1-2 sentences)
- style: The naming style category (e.g. "Compound Word", "Portmanteau", "Abstract", "Descriptive", "Metaphorical")
- domainSuggestion: The ideal .com domain for this name

Respond ONLY with a JSON array of exactly 5 objects. No markdown, no explanation, just the JSON array.

Example format:
[{"name":"BrandForge","meaning":"Combines the ideas of brand creation and forging something strong and lasting","style":"Compound Word","domainSuggestion":"brandforge.com"}]`

export async function POST(req: NextRequest) {
  try {
    const { description, industry } = await req.json()

    if (!description || typeof description !== 'string' || description.trim().length < 3) {
      return NextResponse.json(
        { error: 'Please provide a business description (at least 3 characters)' },
        { status: 400 }
      )
    }

    // Use OpenAI-compatible API (works with OpenAI, Ollama, etc.)
    const apiBase = process.env.OPENAI_API_BASE || 'https://api.openai.com/v1'
    const apiKey = process.env.OPENAI_API_KEY || ''

    if (!apiKey) {
      // Fallback: generate deterministic names when no API key
      return NextResponse.json({ names: generateMockNames(description.trim(), industry) })
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
          { role: 'system', content: NAMES_PROMPT },
          { role: 'user', content: `Business description: ${description.trim()}${industry ? `\nIndustry: ${industry}` : ''}` },
        ],
        temperature: 0.9,
        max_tokens: 1000,
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('LLM API error:', response.status, errText)
      // Fallback on API error
      return NextResponse.json({ names: generateMockNames(description.trim(), industry) })
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content || ''

    // Parse the JSON array from the response
    let names: GeneratedName[]
    try {
      // Try to extract JSON from the response (it might have markdown wrapping)
      const jsonMatch = content.match(/\[[\s\S]*\]/)
      if (!jsonMatch) throw new Error('No JSON array found')
      names = JSON.parse(jsonMatch[0])
    } catch {
      console.error('Failed to parse LLM response:', content)
      return NextResponse.json({ names: generateMockNames(description.trim(), industry) })
    }

    // Validate and limit to 5 names (free tier)
    const validatedNames: GeneratedName[] = names.slice(0, 5).map((n: any) => ({
      name: String(n.name || ''),
      meaning: String(n.meaning || ''),
      style: String(n.style || ''),
      domainSuggestion: String(n.domainSuggestion || `${String(n.name || '').toLowerCase().replace(/[^a-z0-9]/g, '')}.com`),
    })).filter((n) => n.name.length > 0)

    if (validatedNames.length === 0) {
      return NextResponse.json({ names: generateMockNames(description.trim(), industry) })
    }

    return NextResponse.json({ names: validatedNames })
  } catch (error: any) {
    console.error('Generate error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}

function generateMockNames(description: string, industry?: string): GeneratedName[] {
  const words = description.toLowerCase().split(/\s+/).filter(w => w.length > 3)
  const prefixes = ['Nova', 'Luma', 'Aura', 'Peak', 'Vine', 'Bloom', 'Swift', 'Bold']
  const suffixes = ['ify', 'ly', 'hub', 'forge', 'lab', 'co', 'works', 'studio']
  const styles = ['Compound Word', 'Portmanteau', 'Abstract', 'Descriptive', 'Metaphorical']

  const names: GeneratedName[] = []
  for (let i = 0; i < 5; i++) {
    const prefix = prefixes[i % prefixes.length]
    const word = words[i % Math.max(words.length, 1)] || 'venture'
    const suffix = suffixes[i % suffixes.length]

    let name: string
    if (i % 3 === 0) {
      name = prefix + word.charAt(0).toUpperCase() + word.slice(1)
    } else if (i % 3 === 1) {
      name = word.charAt(0).toUpperCase() + word.slice(1) + suffix
    } else {
      name = prefix + suffix.charAt(0).toUpperCase() + suffix.slice(1)
    }

    names.push({
      name,
      meaning: `A distinctive name that captures the essence of ${description.split(' ').slice(0, 5).join(' ')}...`,
      style: styles[i],
      domainSuggestion: `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
    })
  }
  return names
}