-- =====================================================
-- ROW LEVEL SECURITY POLICIES (Basic Version)
-- This version only includes policies for user management tables
-- =====================================================

-- =====================================================
-- POLICIES FOR app_users TABLE
-- =====================================================

-- Policy: Users can read their own profile
CREATE POLICY "Users can read own profile"
ON public.app_users
FOR SELECT
USING (auth.uid() = id);

-- Policy: Admins can read all users
CREATE POLICY "Admins can read all users"
ON public.app_users
FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM public.app_users
        WHERE id = auth.uid() AND is_admin = TRUE
    )
);

-- Policy: Users can update their own profile (limited fields)
CREATE POLICY "Users can update own profile"
ON public.app_users
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Policy: Admins can update all users
CREATE POLICY "Admins can update all users"
ON public.app_users
FOR UPDATE
USING (
    EXISTS (
        SELECT 1 FROM public.app_users
        WHERE id = auth.uid() AND is_admin = TRUE
    )
);

-- Policy: Admins can insert users
CREATE POLICY "Admins can insert users"
ON public.app_users
FOR INSERT
WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.app_users
        WHERE id = auth.uid() AND is_admin = TRUE
    )
);

-- =====================================================
-- POLICIES FOR zones TABLE
-- =====================================================

-- Policy: All authenticated users can read zones (needed for dropdowns)
CREATE POLICY "Authenticated users can read zones"
ON public.zones
FOR SELECT
TO authenticated
USING (true);

-- =====================================================
-- POLICIES FOR phcs TABLE
-- =====================================================

-- Policy: All authenticated users can read PHCs (needed for dropdowns)
CREATE POLICY "Authenticated users can read phcs"
ON public.phcs
FOR SELECT
TO authenticated
USING (true);

COMMIT;

