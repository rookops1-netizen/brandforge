import { SITE_URL } from '@/lib/site-config'

interface HowToStep {
  name: string
  text: string
  imageUrl?: string
}

interface HowToSchemaProps {
  /** The name of the how-to guide, e.g. "How to Choose a Brand Name" */
  name: string
  /** Short description of the overall process */
  description: string
  /** The steps in order */
  steps: HowToStep[]
  /** Total time estimate, e.g. "PT30M" for 30 minutes */
  totalTime?: string
  /** Estimated cost, e.g. "$0" */
  estimatedCost?: string
  /** URL of the page this schema is on */
  url: string
}

/**
 * JSON-LD HowTo schema component for blog posts with step-by-step processes.
 *
 * Google displays HowTo rich snippets in search results with numbered steps,
 * which significantly increases CTR for instructional content.
 *
 * Time format: PT{H}H{M}M (ISO 8601 duration)
 * Examples: PT5M = 5 minutes, PT30M = 30 minutes, PT1H = 1 hour
 */
export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  url,
}: HowToSchemaProps) {
  const baseUrl = SITE_URL

  const howTo: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url: url.startsWith('http') ? url : `${baseUrl}${url}`,
    ...(totalTime && { totalTime }),
    ...(estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: estimatedCost.replace('$', ''),
      },
    }),
    step: steps.map((step, index) => {
      const stepObj: Record<string, unknown> = {
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      }
      if (step.imageUrl) {
        stepObj.image = {
          '@type': 'ImageObject',
          url: step.imageUrl.startsWith('http') ? step.imageUrl : `${baseUrl}${step.imageUrl}`,
        }
      }
      return stepObj
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
    />
  )
}