ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS notes text;

GRANT SELECT, UPDATE ON public.leads TO anon;
GRANT SELECT, UPDATE ON public.leads TO authenticated;

CREATE POLICY "Public can view leads"
ON public.leads FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Public can update leads"
ON public.leads FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);