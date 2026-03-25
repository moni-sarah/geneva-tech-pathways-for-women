-- Create table for partner submissions
CREATE TABLE public.partner_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  org_name TEXT NOT NULL,
  website TEXT,
  org_type TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_role TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  partnership_types TEXT[] NOT NULL DEFAULT '{}',
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.partner_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form)
CREATE POLICY "Anyone can submit a partner inquiry"
  ON public.partner_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated admins could read (for now, block all reads from client)
CREATE POLICY "No public reads"
  ON public.partner_submissions
  FOR SELECT
  TO authenticated
  USING (false);