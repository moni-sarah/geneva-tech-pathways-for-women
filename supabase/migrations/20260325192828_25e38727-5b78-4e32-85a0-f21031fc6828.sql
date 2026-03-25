
-- Drop old permissive policies on program_applications
DROP POLICY IF EXISTS "Allow authenticated read" ON public.program_applications;
DROP POLICY IF EXISTS "Allow authenticated update" ON public.program_applications;

-- Recreate with admin-only access
CREATE POLICY "Admins can read applications"
ON public.program_applications FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update applications"
ON public.program_applications FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop old permissive policies on partner_submissions
DROP POLICY IF EXISTS "Allow authenticated read partners" ON public.partner_submissions;
DROP POLICY IF EXISTS "Allow authenticated update partners" ON public.partner_submissions;
DROP POLICY IF EXISTS "No public reads" ON public.partner_submissions;

-- Recreate with admin-only access
CREATE POLICY "Admins can read partners"
ON public.partner_submissions FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update partners"
ON public.partner_submissions FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
