
-- Rotate hardcoded admin password to a random secret (admin must use password reset flow)
UPDATE auth.users
SET encrypted_password = crypt(encode(gen_random_bytes(32), 'hex'), gen_salt('bf'))
WHERE email = 'testadmin@gmail.com';

-- Restrict SECURITY DEFINER function execution
REVOKE EXECUTE ON FUNCTION public.auto_confirm_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon;

-- Hide tables from GraphQL/REST anonymous discovery; INSERT still works via RLS
REVOKE SELECT ON public.partner_submissions FROM anon, authenticated;
REVOKE SELECT ON public.program_applications FROM anon, authenticated;
REVOKE SELECT ON public.user_roles FROM anon;

-- Re-grant SELECT to authenticated where admin RLS policies need it
GRANT SELECT ON public.partner_submissions TO authenticated;
GRANT SELECT ON public.program_applications TO authenticated;
GRANT SELECT ON public.user_roles TO authenticated;
