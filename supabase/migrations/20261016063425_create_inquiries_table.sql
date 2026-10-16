/*
# Create inquiries table for contact form submissions

1. New Tables
- `inquiries`
- `id` (uuid, primary key)
- `full_name` (text, not null) — name of the person submitting the inquiry
- `email` (text, not null) — business email for contact
- `phone` (text, not null) — phone number
- `org_type` (text, not null) — organization type: Startup / SME / Enterprise / Student Project
- `service_required` (text, not null) — service: Web / App / Custom Software / Sponsorship
- `project_brief` (text) — optional project description
- `status` (text, default 'new') — inquiry status for tracking
- `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `inquiries`.
- This is a no-auth public contact form, so anon + authenticated can INSERT.
- No SELECT/UPDATE/DELETE from the frontend — only inserts are allowed from the public form.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  org_type text NOT NULL,
  service_required text NOT NULL,
  project_brief text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
ON inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
