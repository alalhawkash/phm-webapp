-- =====================================================
-- ROW LEVEL SECURITY POLICIES
-- Copy and paste this into Supabase SQL Editor
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

-- =====================================================
-- POLICIES FOR YOUR DATA TABLE
-- Replace 'your_data_table' with your actual table name
-- =====================================================

-- IMPORTANT: Your data table must have zone_id and phc_id columns
-- for these policies to work. Adjust column names if different.

-- Policy: Cluster scope users can see all data
CREATE POLICY "Cluster scope users can see all data"
ON public.your_data_table
FOR SELECT
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.app_users
        WHERE id = auth.uid() 
        AND active = TRUE
        AND scope = 'cluster'
    )
);

-- Policy: Zone scope users can see their zone's data
CREATE POLICY "Zone scope users can see their zone data"
ON public.your_data_table
FOR SELECT
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.app_users
        WHERE id = auth.uid() 
        AND active = TRUE
        AND scope = 'zone'
        AND zone_id = your_data_table.zone_id
    )
);

-- Policy: PHC scope users can see their PHC's data
CREATE POLICY "PHC scope users can see their PHC data"
ON public.your_data_table
FOR SELECT
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.app_users
        WHERE id = auth.uid() 
        AND active = TRUE
        AND scope = 'phc'
        AND phc_id = your_data_table.phc_id
    )
);

-- =====================================================
-- NOTES:
-- =====================================================
-- 1. If your data table has different column names for zone/phc,
--    replace zone_id and phc_id in the policies above
--
-- 2. If you have multiple data tables, repeat the data table
--    policies for each table
--
-- 3. The active = TRUE check ensures disabled users can't access data
--
-- 4. These policies stack - if a user matches ANY policy, they get access
--
-- 5. Test thoroughly: try to access data via API as different user types

COMMIT;

