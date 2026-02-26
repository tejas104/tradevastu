-- Run this SQL in your Supabase SQL Editor

-- Leads table: captures all CTA form submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  source TEXT NOT NULL DEFAULT 'general', -- which CTA triggered it
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Support proposals table: for Managed Support page
CREATE TABLE IF NOT EXISTS support_proposals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  requirements TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_proposals ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form submissions)
CREATE POLICY "Allow public inserts on leads" ON leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts on support_proposals" ON support_proposals
  FOR INSERT WITH CHECK (true);
