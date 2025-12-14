-- =====================================================
-- SIMPLE DATABASE FUNCTIONS
-- These replace Edge Functions with simpler alternatives
-- =====================================================

-- Function 1: Create or update user profile
-- This is called when you "invite" a user
CREATE OR REPLACE FUNCTION public.create_user_profile(
    p_user_id UUID,
    p_email TEXT,
    p_scope TEXT,
    p_zone_id TEXT DEFAULT NULL,
    p_phc_id TEXT DEFAULT NULL,
    p_is_admin BOOLEAN DEFAULT FALSE
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_requesting_user_id UUID;
    v_is_requesting_admin BOOLEAN;
BEGIN
    -- Get the requesting user's ID
    v_requesting_user_id := auth.uid();
    
    -- Check if requesting user is admin
    SELECT is_admin INTO v_is_requesting_admin
    FROM public.app_users
    WHERE id = v_requesting_user_id;
    
    -- Only admins can create user profiles
    IF NOT v_is_requesting_admin THEN
        RETURN json_build_object(
            'success', false,
            'error', 'Only admins can create user profiles'
        );
    END IF;
    
    -- Validate scope
    IF p_scope NOT IN ('cluster', 'zone', 'phc') THEN
        RETURN json_build_object(
            'success', false,
            'error', 'Invalid scope. Must be cluster, zone, or phc'
        );
    END IF;
    
    -- Validate zone_id for zone scope
    IF p_scope = 'zone' AND p_zone_id IS NULL THEN
        RETURN json_build_object(
            'success', false,
            'error', 'zone_id is required for zone scope'
        );
    END IF;
    
    -- Validate phc_id for phc scope
    IF p_scope = 'phc' AND p_phc_id IS NULL THEN
        RETURN json_build_object(
            'success', false,
            'error', 'phc_id is required for phc scope'
        );
    END IF;
    
    -- Insert or update user profile
    INSERT INTO public.app_users (id, email, is_admin, scope, zone_id, phc_id, active)
    VALUES (
        p_user_id,
        p_email,
        p_is_admin,
        p_scope,
        CASE WHEN p_scope IN ('zone', 'phc') THEN p_zone_id ELSE NULL END,
        CASE WHEN p_scope = 'phc' THEN p_phc_id ELSE NULL END,
        TRUE
    )
    ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        is_admin = EXCLUDED.is_admin,
        scope = EXCLUDED.scope,
        zone_id = EXCLUDED.zone_id,
        phc_id = EXCLUDED.phc_id,
        updated_at = NOW();
    
    RETURN json_build_object(
        'success', true,
        'message', 'User profile created successfully'
    );
EXCEPTION
    WHEN OTHERS THEN
        RETURN json_build_object(
            'success', false,
            'error', SQLERRM
        );
END;
$$;

-- Function 2: Update user role
-- This is called when you edit a user
CREATE OR REPLACE FUNCTION public.update_user_profile(
    p_user_id UUID,
    p_scope TEXT,
    p_zone_id TEXT DEFAULT NULL,
    p_phc_id TEXT DEFAULT NULL,
    p_is_admin BOOLEAN DEFAULT FALSE,
    p_active BOOLEAN DEFAULT TRUE
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_requesting_user_id UUID;
    v_is_requesting_admin BOOLEAN;
BEGIN
    -- Get the requesting user's ID
    v_requesting_user_id := auth.uid();
    
    -- Check if requesting user is admin
    SELECT is_admin INTO v_is_requesting_admin
    FROM public.app_users
    WHERE id = v_requesting_user_id;
    
    -- Only admins can update user profiles
    IF NOT v_is_requesting_admin THEN
        RETURN json_build_object(
            'success', false,
            'error', 'Only admins can update user profiles'
        );
    END IF;
    
    -- Validate scope
    IF p_scope NOT IN ('cluster', 'zone', 'phc') THEN
        RETURN json_build_object(
            'success', false,
            'error', 'Invalid scope. Must be cluster, zone, or phc'
        );
    END IF;
    
    -- Update user profile
    UPDATE public.app_users SET
        scope = p_scope,
        zone_id = CASE WHEN p_scope IN ('zone', 'phc') THEN p_zone_id ELSE NULL END,
        phc_id = CASE WHEN p_scope = 'phc' THEN p_phc_id ELSE NULL END,
        is_admin = p_is_admin,
        active = p_active,
        updated_at = NOW()
    WHERE id = p_user_id;
    
    RETURN json_build_object(
        'success', true,
        'message', 'User profile updated successfully'
    );
EXCEPTION
    WHEN OTHERS THEN
        RETURN json_build_object(
            'success', false,
            'error', SQLERRM
        );
END;
$$;

-- Grant execute permissions to authenticated users
GRANT EXECUTE ON FUNCTION public.create_user_profile TO authenticated;
GRANT EXECUTE ON FUNCTION public.update_user_profile TO authenticated;

COMMIT;

