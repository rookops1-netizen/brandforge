export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          user_id: string | null
          name: string
          industry: string | null
          description: string | null
          keywords: string[] | null
          status: 'active' | 'archived' | 'deleted'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          name: string
          industry?: string | null
          description?: string | null
          keywords?: string[] | null
          status?: 'active' | 'archived' | 'deleted'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          name?: string
          industry?: string | null
          description?: string | null
          keywords?: string[] | null
          status?: 'active' | 'archived' | 'deleted'
          created_at?: string
          updated_at?: string
        }
      }
      brand_kits: {
        Row: {
          id: string
          generation_id: string
          user_id: string
          business_name: string
          logo_concept: string | null
          color_palette: Json | null
          tagline: string | null
          domain_available: boolean | null
          social_handles: Json | null
          font_suggestions: Json | null
          domain_availability: Json | null
          social_availability: Json | null
          is_paid: boolean
          stripe_session_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          generation_id: string
          user_id: string
          business_name: string
          logo_concept?: string | null
          color_palette?: Json | null
          tagline?: string | null
          domain_available?: boolean | null
          social_handles?: Json | null
          font_suggestions?: Json | null
          domain_availability?: Json | null
          social_availability?: Json | null
          is_paid?: boolean
          stripe_session_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          generation_id?: string
          user_id?: string
          business_name?: string
          logo_concept?: string | null
          color_palette?: Json | null
          tagline?: string | null
          domain_available?: boolean | null
          social_handles?: Json | null
          font_suggestions?: Json | null
          domain_availability?: Json | null
          social_availability?: Json | null
          is_paid?: boolean
          stripe_session_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      purchases: {
        Row: {
          id: string
          user_id: string | null
          stripe_session_id: string
          stripe_payment_intent_id: string | null
          business_name: string
          amount_cents: number
          status: 'pending' | 'completed' | 'failed' | 'refunded'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          stripe_session_id: string
          stripe_payment_intent_id?: string | null
          business_name: string
          amount_cents?: number
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          stripe_session_id?: string
          stripe_payment_intent_id?: string | null
          business_name?: string
          amount_cents?: number
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          created_at?: string
          updated_at?: string
        }
      }
      generations: {
        Row: {
          id: string
          user_id: string
          description: string
          industry: string | null
          names: Json
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          description: string
          industry?: string | null
          names?: Json
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          description?: string
          industry?: string | null
          names?: Json
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          free_generations_used: number
          free_generations_limit: number
          stripe_customer_id: string | null
          subscription_status: string | null
          created_at: string
        }
        Insert: {
          id: string
          email: string
          free_generations_used?: number
          free_generations_limit?: number
          stripe_customer_id?: string | null
          subscription_status?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          free_generations_used?: number
          free_generations_limit?: number
          stripe_customer_id?: string | null
          subscription_status?: string | null
          created_at?: string
        }
      }
    }
  }
}