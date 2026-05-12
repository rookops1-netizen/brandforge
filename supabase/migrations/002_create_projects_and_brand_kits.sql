-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  industry TEXT,
  description TEXT,
  keywords TEXT[],
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'archived', 'deleted')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own projects" ON projects FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own projects" ON projects FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own projects" ON projects FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own projects" ON projects FOR DELETE USING (auth.uid() = user_id);
CREATE POLICY "Service role full access on projects" ON projects FOR ALL USING (auth.role() = 'service_role') WITH CHECK (auth.role() = 'service_role');

-- Create brand_kits table
CREATE TABLE IF NOT EXISTS brand_kits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  generation_id UUID NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  business_name TEXT NOT NULL,
  logo_concept TEXT,
  color_palette JSONB,
  tagline TEXT,
  domain_available BOOLEAN,
  social_handles JSONB,
  font_suggestions JSONB DEFAULT '[]',
  domain_availability JSONB DEFAULT '{}',
  social_availability JSONB DEFAULT '{}',
  is_paid BOOLEAN DEFAULT FALSE,
  stripe_session_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_brand_kits_user_id ON brand_kits(user_id);
CREATE INDEX IF NOT EXISTS idx_brand_kits_stripe_session ON brand_kits(stripe_session_id);

ALTER TABLE brand_kits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own brand kits" ON brand_kits FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own brand kits" ON brand_kits FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own brand kits" ON brand_kits FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own brand kits" ON brand_kits FOR DELETE USING (auth.uid() = user_id);
CREATE POLICY "Service role full access on brand kits" ON brand_kits FOR ALL USING (auth.role() = 'service_role') WITH CHECK (auth.role() = 'service_role');

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER brand_kits_updated_at BEFORE UPDATE ON brand_kits FOR EACH ROW EXECUTE FUNCTION update_updated_at();