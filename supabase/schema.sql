-- HellaK9s database schema
-- Run this in the Supabase SQL editor (Project -> SQL Editor -> New query)

create extension if not exists "pgcrypto";

-- Contact form submissions
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  topic text
);

-- Franchise information requests
create table if not exists public.franchise_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text,
  email text not null,
  phone text not null,
  desired_location text,
  message text
);

-- Trainer applications
create table if not exists public.trainer_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text,
  email text not null,
  phone text not null,
  address text,
  city text,
  state text,
  country text,
  postal_code text,
  dog_experience text,
  certifications text,
  why_join text
);

alter table public.contact_messages enable row level security;
alter table public.franchise_inquiries enable row level security;
alter table public.trainer_applications enable row level security;

-- All inserts happen from server-side API routes using the service role key,
-- so no public insert/select policies are required. Service role bypasses RLS.
