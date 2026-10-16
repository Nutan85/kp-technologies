/*
# Create project_inquiries table for contact form and sponsorship applications

## Purpose
Stores all incoming project inquiries and tech sponsorship applications submitted
through the KP Technologies website contact form. Each record captures the submitter's
contact details, project scope, service category, and budget range.

## 1. New Tables
- `project_inquiries`
  - `id` (uuid, primary key, auto-generated) — unique identifier for each inquiry
  - `created_at` (timestamptz, default now()) — submission timestamp
  - `full_name` (text, not null) — name of the person submitting the inquiry
  - `email` (text, not null) — business email for follow-up
  - `phone` (text, not null) — phone number for direct contact
  - `company_name` (text, nullable) — optional company/organization name
  - `service_category` (text, nullable) — e.g. "Web App", "Industrial IoT/SCADA", "Mobile App", "Tech Sponsorship"
  - `budget_range` (text, nullable) — estimated project budget range
  - `project_description` (text, not null) — detailed project brief from the submitter
  - `status` (text, default 'new') — tracking status for pipeline management

## 2. Security
- Enable RLS on `project_inquiries`.
- This is a no-auth public contact form — the frontend uses the anon key.
- Only INSERT is allowed from the public frontend (anon + authenticated).
- No SELECT, UPDATE, or DELETE from the client — inquiries are managed server-side.

## 3. Important Notes
- The old `inquiries` table from a previous iteration still exists but is no longer used.
- This new table has an expanded schema with company_name, service_category, budget_range.
- All inserts are validated client-side before submission.
*/
CREATE TABLE IF NOT EXISTS project_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company_name text,
  service_category text,
  budget_range text,
  project_description text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE project_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_project_inquiries" ON project_inquiries;
CREATE POLICY "anon_insert_project_inquiries"
ON project_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_project_inquiries_created_at ON project_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_status ON project_inquiries(status);
