// The type used by /api/generate response & generate page
export interface GeneratedName {
  name: string;
  meaning: string;
  style: string;
  domainSuggestion?: string;
}

export type AvailabilityStatus = 'available' | 'taken' | 'checking' | 'unknown';

// Extended version with favorite/availability state for the UI
export interface BusinessName extends GeneratedName {
  id: string;
  industry: string;
  domainAvailable: AvailabilityStatus;
  twitterAvailable: AvailabilityStatus;
  instagramAvailable: AvailabilityStatus;
  isFavorite: boolean;
}

// Color palette swatch (for the display component that renders arrays)
export interface ColorSwatch {
  hex: string;
  name: string;
  usage: string;
}

// Brand kit — full output from /api/brand-kit
export interface BrandKit {
  name: string;
  logoConcept: string;
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    name?: string;
  };
  tagline: string;
  domainAvailable: boolean;
  socialHandles: {
    twitter: { handle: string; available: boolean };
    instagram: { handle: string; available: boolean };
  };
  typography?: {
    heading: string;
    body: string;
  };
  fontSuggestion?: string;
}

export interface SavedFavorite {
  id: string;
  name: string;
  meaning: string;
  style: string;
  industry: string;
  savedAt: string;
}

// Stripe purchase record (from Supabase)
export interface Purchase {
  id: string;
  user_id: string | null;
  stripe_session_id: string;
  stripe_payment_intent_id: string | null;
  business_name: string;
  amount_cents: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  created_at: string;
  updated_at: string;
}