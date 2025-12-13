-- Create users table for PHM Dashboard
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS users (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'cluster', 'zone', 'phc')),
  zone TEXT,
  phc_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Admins can read all users" ON users;
DROP POLICY IF EXISTS "Service role can manage users" ON users;

-- Allow users to read their own data (required for login)
CREATE POLICY "Users can read own data" ON users
  FOR SELECT 
  USING (auth.uid() = id);

-- Create function to check admin role (avoids recursion)
CREATE OR REPLACE FUNCTION is_admin_user()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM users
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$;

-- Allow admins to read all users (for settings panel)
CREATE POLICY "Admins can read all users" ON users
  FOR SELECT 
  USING (is_admin_user());

-- Allow service role to manage all users (for setup scripts)
CREATE POLICY "Service role can manage users" ON users
  FOR ALL 
  USING (auth.role() = 'service_role');

-- Verify table was created
SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename = 'users';

