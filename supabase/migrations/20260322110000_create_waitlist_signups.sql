create extension if not exists pgcrypto;

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null default 'website',
  label text not null default 'header_waitlist',
  status text not null default 'active',
  utm_source text,
  utm_campaign text,
  utm_medium text,
  notes text,
  created_at timestamptz not null default timezone('utc', now()),
  constraint waitlist_signups_email_unique unique (email),
  constraint waitlist_signups_email_normalized check (email = lower(btrim(email))),
  constraint waitlist_signups_email_format check (
    email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
  ),
  constraint waitlist_signups_source_not_blank check (char_length(btrim(source)) > 0),
  constraint waitlist_signups_label_not_blank check (char_length(btrim(label)) > 0),
  constraint waitlist_signups_status_not_blank check (char_length(btrim(status)) > 0)
);

alter table public.waitlist_signups enable row level security;

revoke all on public.waitlist_signups from anon, authenticated;
