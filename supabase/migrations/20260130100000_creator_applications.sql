/*─────────────────────────────────────────────────────────────*
  CREATOR APPLICATIONS TABLE
  -----------------------------------------------------------
  – Stores creator application submissions from marketing site
  – Allows anonymous inserts for pre-signup applications
 *─────────────────────────────────────────────────────────────*/

/* 1 ─ ENUM TYPE FOR APPLICATION STATUS ──────────────────────*/
create type creator_application_status as enum (
  'pending',
  'approved',
  'rejected'
);

/* 2 ─ CREATOR APPLICATIONS TABLE ────────────────────────────*/
create table creator_applications (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null unique,
  niche text not null,
  social_link text not null,
  audience_size text not null,
  status creator_application_status not null default 'pending',
  updated_at timestamptz not null default now()
);

-- Add comment for documentation
comment on table creator_applications is 'Stores creator application submissions from the marketing site';

/* 3 ─ ROW-LEVEL SECURITY ────────────────────────────────────*/
alter table creator_applications enable row level security;

-- Allow anonymous users to insert applications (for pre-signup forms)
create policy creator_applications_insert
  on creator_applications
  for insert
  with check (true);

-- Only authenticated users with service role can read/update/delete
-- (handled by service role key in server actions)

/* 4 ─ INDEXES ───────────────────────────────────────────────*/
create index creator_applications_email_idx on creator_applications(email);
create index creator_applications_status_idx on creator_applications(status);
create index creator_applications_created_at_idx on creator_applications(created_at desc);

/*─────────────────────────────────────────────────────────────*
  END OF MIGRATION
 *─────────────────────────────────────────────────────────────*/
