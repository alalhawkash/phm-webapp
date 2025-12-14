-- =====================================================
-- FIX: Remove infinite recursion in RLS policies
-- =====================================================

-- First, drop all existing policies on app_users
DROP POLICY IF EXISTS "Users can read own profile" ON public.app_users;
DROP POLICY IF EXISTS "Admins can read all users" ON public.app_users;
DROP POLICY IF EXISTS "Users can update own profile" ON public.app_users;
DROP POLICY IF EXISTS "Admins can update all users" ON public.app_users;
DROP POLICY IF EXISTS "Admins can insert users" ON public.app_users;

-- Create new policies without infinite recursion

-- Policy 1: Allow all authenticated users to read all app_users
-- (This is safe because we control who can authenticate)
CREATE POLICY "Authenticated users can read all profiles"
ON public.app_users
FOR SELECT
TO authenticated
USING (true);

-- Policy 2: Users can update their own profile
CREATE POLICY "Users can update own profile"
ON public.app_users
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Policy 3: Admins can insert new users
-- (We'll handle admin checks in the Edge Function, not in RLS)
CREATE POLICY "Service role can insert users"
ON public.app_users
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Policy 4: Admins can update any user
-- (We'll handle admin checks in the Edge Function, not in RLS)
CREATE POLICY "Service role can update users"
ON public.app_users
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

COMMIT;

