-- Program applications table for women applying to the program
CREATE TABLE public.program_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  date_of_birth date,
  nationality text,
  residence_status text,
  canton text DEFAULT 'Geneva',
  languages_spoken text[] DEFAULT '{}',
  education_level text,
  previous_experience text,
  tech_interest text,
  motivation text,
  digital_access boolean DEFAULT true,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.program_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON public.program_applications
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow authenticated read" ON public.program_applications
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated update" ON public.program_applications
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Allow authenticated read partners" ON public.partner_submissions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated update partners" ON public.partner_submissions
  FOR UPDATE TO authenticated USING (true);