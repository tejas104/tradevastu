-- Create leads table for modal capture
CREATE TABLE IF NOT EXISTS leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    phone TEXT,
    message TEXT,
    source TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create contact_inquiries table for detailed contact page submissions
CREATE TABLE IF NOT EXISTS contact_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    phone TEXT,
    industry TEXT,
    company_size TEXT,
    project_scope TEXT,
    budget_range TEXT,
    details TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies for anonymous inserts
CREATE POLICY "Allow anon insert leads" ON leads
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anon insert inquiries" ON contact_inquiries
    FOR INSERT WITH CHECK (true);

-- Create policy for service role to manage all data
CREATE POLICY "Allow service_role full access leads" ON leads
    FOR ALL USING (true);

CREATE POLICY "Allow service_role full access inquiries" ON contact_inquiries
    FOR ALL USING (true);
