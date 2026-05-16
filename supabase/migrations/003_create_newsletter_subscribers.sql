-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (for newsletter signup)
CREATE POLICY "Allow insert for all"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Service role can do anything
CREATE POLICY "Service role full access"
  ON newsletter_subscribers FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- No one can read subscriber emails through the API
CREATE POLICY "Deny select for anon and authenticated"
  ON newsletter_subscribers FOR SELECT
  USING (auth.role() = 'service_role');