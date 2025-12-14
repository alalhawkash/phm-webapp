-- =====================================================
-- DASHBOARD DATA TABLE (Simple Version)
-- Creates table and function only
-- =====================================================

-- Create table to store dashboard data
CREATE TABLE IF NOT EXISTS public.dashboard_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    data_content TEXT NOT NULL,
    uploaded_by UUID REFERENCES auth.users(id),
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_dashboard_data_active ON public.dashboard_data(is_active, uploaded_at DESC);

-- Enable RLS
ALTER TABLE public.dashboard_data ENABLE ROW LEVEL SECURITY;

-- Function to deactivate old data and insert new
CREATE OR REPLACE FUNCTION public.upload_new_dashboard_data(
    p_data_content TEXT
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
    
    -- Only admins can upload data
    IF NOT v_is_requesting_admin THEN
        RETURN json_build_object(
            'success', false,
            'error', 'Only admins can upload dashboard data'
        );
    END IF;
    
    -- Deactivate all existing data
    UPDATE public.dashboard_data SET is_active = FALSE WHERE is_active = TRUE;
    
    -- Insert new data
    INSERT INTO public.dashboard_data (data_content, uploaded_by, is_active)
    VALUES (p_data_content, v_requesting_user_id, TRUE);
    
    RETURN json_build_object(
        'success', true,
        'message', 'Dashboard data uploaded successfully'
    );
EXCEPTION
    WHEN OTHERS THEN
        RETURN json_build_object(
            'success', false,
            'error', SQLERRM
        );
END;
$$;

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION public.upload_new_dashboard_data TO authenticated;

COMMIT;

