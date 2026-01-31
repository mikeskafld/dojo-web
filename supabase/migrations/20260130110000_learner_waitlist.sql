/*─────────────────────────────────────────────────────────────*
  LEARNER WAITLIST TABLE
  -----------------------------------------------------------
  – Stores learner waitlist signups from marketing site
  – Allows anonymous inserts for pre-signup waitlist
 *─────────────────────────────────────────────────────────────*/

/* 1 ─ LEARNER WAITLIST TABLE ────────────────────────────────*/
create table learner_waitlist (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  email text not null unique,
  name text,
  interests text[] not null default '{}'
);

-- Add comment for documentation
comment on table learner_waitlist is 'Stores learner waitlist signups from the marketing site';

/* 2 ─ ROW-LEVEL SECURITY ────────────────────────────────────*/
alter table learner_waitlist enable row level security;

-- Allow anonymous users to insert signups (for pre-signup forms)
create policy learner_waitlist_insert
  on learner_waitlist
  for insert
  with check (true);

-- Only authenticated users with service role can read/update/delete
-- (handled by service role key in server actions)

/* 3 ─ INDEXES ───────────────────────────────────────────────*/
create index learner_waitlist_email_idx on learner_waitlist(email);
create index learner_waitlist_created_at_idx on learner_waitlist(created_at desc);

/*─────────────────────────────────────────────────────────────*
  END OF MIGRATION
 *─────────────────────────────────────────────────────────────*/
