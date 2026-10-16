/*
# Create contact_messages table for website inquiry form

## Purpose
Stores all contact form submissions from the KP Technologies website.
Each record captures the visitor's contact info, selected service, project type,
and their message. Emails are also dispatched via Web3Forms to tanushriraut045@gmail.com.

## 1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `created_at` (timestamptz, default now())
  - `full_name` (text, not null) — submitter's name
  - `email` (text, not null) — submitter's email
  - `phone` (text, not null) — submitter's phone number
  - `service_required` (text, nullable) — selected service from dropdown
  - `project_type` (text, nullable) — "General Inquiry" or "Tech Sponsorship"
  - `message` (text, not null) — the visitor's message
  - `status` (text, default 'new') — pipeline tracking status

## 2. Security
- Enable RLS on `contact_messages`.
- This is a no-auth public contact form — the frontend uses the anon key.
- Only INSERT is allowed from the public frontend (anon + authenticated).
- No SELECT, UPDATE, or DELETE from the client.

## 3. Important Notes
- Previous tables (`inquiries`, `project_inquiries`) are superseded by this one.
- The form also dispatches emails via Web3Forms API in parallel with the DB insert.
*/
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_required text,
  project_type text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
