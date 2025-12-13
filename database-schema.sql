-- =====================================================
-- SUPABASE DATABASE SCHEMA
-- Copy and paste this into Supabase SQL Editor
-- =====================================================

-- 1. Create zones table (if you don't have it already)
CREATE TABLE IF NOT EXISTS public.zones (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create phcs table (if you don't have it already)
CREATE TABLE IF NOT EXISTS public.phcs (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    zone_id TEXT REFERENCES zones(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create app_users table (your user management table)
CREATE TABLE IF NOT EXISTS public.app_users (
    id UUID PRIMARY KEY DEFAULT auth.uid(),
    email TEXT NOT NULL UNIQUE,
    is_admin BOOLEAN DEFAULT FALSE,
    scope TEXT NOT NULL CHECK (scope IN ('cluster', 'zone', 'phc')),
    zone_id TEXT REFERENCES zones(id),
    phc_id TEXT REFERENCES phcs(id),
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Create trigger to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_app_users_updated_at 
    BEFORE UPDATE ON app_users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 5. Insert sample zones (optional - customize to your needs)
INSERT INTO public.zones (id, name) VALUES
    ('zone-1', 'North Zone'),
    ('zone-2', 'South Zone'),
    ('zone-3', 'East Zone'),
    ('zone-4', 'West Zone')
ON CONFLICT (id) DO NOTHING;

-- 6. Insert sample PHCs (optional - customize to your needs)
INSERT INTO public.phcs (id, name, zone_id) VALUES
    ('phc-1', 'Central PHC', 'zone-1'),
    ('phc-2', 'Downtown PHC', 'zone-1'),
    ('phc-3', 'Riverside PHC', 'zone-2'),
    ('phc-4', 'Hillside PHC', 'zone-2'),
    ('phc-5', 'Eastview PHC', 'zone-3'),
    ('phc-6', 'Greenfield PHC', 'zone-3'),
    ('phc-7', 'Westend PHC', 'zone-4'),
    ('phc-8', 'Lakeside PHC', 'zone-4')
ON CONFLICT (id) DO NOTHING;

-- 7. Enable Row Level Security on all tables
ALTER TABLE public.zones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.phcs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_users ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- If you have an existing data table, replace 'your_data_table' 
-- with your actual table name and uncomment:
-- =====================================================
-- ALTER TABLE public.your_data_table ENABLE ROW LEVEL SECURITY;

COMMIT;

