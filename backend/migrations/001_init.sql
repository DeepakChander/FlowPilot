-- Initial FlowPilot schema
-- users_meta: store user metadata from Supabase Auth
CREATE TABLE IF NOT EXISTS users_meta (
  id uuid PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  display_name text,
  onboarding_complete boolean DEFAULT false
);

-- tasks: top-level automation tasks
CREATE TABLE IF NOT EXISTS tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- audit_events: for logs, traces, timestamps, and debugging
CREATE TABLE IF NOT EXISTS audit_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id uuid,
  user_id uuid,
  event_type text NOT NULL,
  data jsonb,
  created_at timestamptz DEFAULT now()
);
