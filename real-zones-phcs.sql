-- =====================================================
-- REAL ZONES AND PHCs DATA
-- Replace sample data with actual Najran Health Cluster data
-- =====================================================

-- First, clear zone_id and phc_id from users to avoid foreign key conflicts
UPDATE public.app_users SET zone_id = NULL, phc_id = NULL WHERE zone_id IS NOT NULL OR phc_id IS NOT NULL;

-- Clear existing sample data
DELETE FROM public.phcs;
DELETE FROM public.zones;

-- Insert real zones (Hospitals)
INSERT INTO public.zones (id, name) VALUES
    ('BGH', 'Bader Aljanoob General Hospital'),
    ('HGH', 'Hubona General Hospital'),
    ('KGH', 'Khubash General Hospital'),
    ('KKH', 'King Khaled Hospital'),
    ('MCH', 'Maternity and Children Hospital'),
    ('WNH', 'West Najran General Hospital'),
    ('NNGH', 'New Najran General Hospital'),
    ('SGH', 'Sharourah General Hospital'),
    ('TGH', 'Thar General Hospital'),
    ('YGH', 'Yaddamah General Hospital');

-- Insert real PHCs (using clean display names)
-- BGH Zone PHCs
INSERT INTO public.phcs (id, name, zone_id) VALUES
    ('AL- qarn', 'AL- qarn', 'BGH'),
    ('Hadadah health center', 'Hadadah', 'BGH'),
    ('Primary Care Alkhaniq', 'Al Khaniq', 'BGH'),
    ('alrehab Primary care center', 'Al Rehab', 'BGH'),
    ('bader aljanoob primary health care', 'Bader Al Janoob', 'BGH'),
    ('maleha public health center', 'Al Maleha', 'BGH'),

-- HGH Zone PHCs
    ('AL JAFFAH PHCC', 'Al Jaffah', 'HGH'),
    ('ALMONTSHER  PHCC', 'Al Montsher', 'HGH'),
    ('Habuna primary Health Care Center', 'Habuna', 'HGH'),
    ('al harshar phcc', 'Al Harshaf', 'HGH'),
    ('dekah', 'Al Dekah', 'HGH'),
    ('majma', 'Al Majma', 'HGH'),

-- KGH Zone PHCs
    ('AL-SHARAA', 'Al Kharaa', 'KGH'),
    ('KHUBASH Health center', 'Khubash', 'KGH'),
    ('Primary Health Care Center GOILLA', 'Goilla', 'KGH'),
    ('junoob matar', 'Junoob Al Matar', 'KGH'),
    ('mishaliya', 'Mishaliya', 'KGH'),
    ('taslal health center', 'Taslal', 'KGH'),

-- KKH Zone PHCs
    ('ALDUBAT PHCC', 'Al Dubat', 'KKH'),
    ('Al Faisaliah Health Center', 'Al Faisaliah', 'KKH'),
    ('Aqfah phcc', 'Aqfah', 'KKH'),
    ('Biraskar phcc', 'Bir Askar', 'KKH'),
    ('Primary Health Care Center DIYAFA', 'Al Diyafah', 'KKH'),
    ('al contub', 'al contub', 'KKH'),
    ('khaldiya health center', 'Al Khaldiah', 'KKH'),
    ('primary health care center north', 'Al Fahad Alshimaly', 'KKH'),
    ('prince mishal health center', 'Prince Mishal', 'KKH'),

-- MCH Zone PHCs
    ('al fahad al janubi phcc', 'Al Fahad Al Janubi', 'MCH'),
    ('atheabah phcc', 'Al Athaibah', 'MCH'),

-- WNH Zone PHCs
    ('Al Safa Health Center', 'Al Safa', 'WNH'),
    ('Al muratah phcc', 'Al Muratah', 'WNH'),
    ('Alhadan PHCC', 'Alhadan', 'WNH'),
    ('Health Center algabil', 'Al Gabil', 'WNH'),
    ('Health center in aljurbah', 'Al Jurbah', 'WNH'),
    ('PHCC Abasoud', 'Aba Saoud', 'WNH'),
    ('albalad', 'Albalad', 'WNH'),
    ('dahada helth center', 'Dahada', 'WNH'),
    ('eam phcc reer', 'Rir', 'WNH'),
    ('health center al mufja', 'Al Mufja', 'WNH'),
    ('Primary Health Care Center in Nhogah', 'Nhogah', 'WNH'),
    ('Shebhan phcc', 'Shabhan', 'WNH'),

-- NNGH Zone PHCs
    ('Al Arisa Health Center', 'Al Arisa Health Center', 'NNGH'),
    ('Alhamar phcc', 'Al Hamar', 'NNGH'),
    ('HUSSAINIAH PHCC', 'Al Hussainiah', 'NNGH'),
    ('RIJLA PHcc', 'Rijla', 'NNGH'),
    ('primary health care center barrk', 'Berrk', 'NNGH'),
    ('primary health care center of shurfa', 'Al Shurfah', 'NNGH'),
    ('Wadi Riman Health Center', 'Wadi Riman', 'NNGH'),

-- SGH Zone PHCs
    ('Alakashim Health Center', 'Al Akhashim', 'SGH'),
    ('Aziziyah PHCC Sharoora', 'Aziziyah', 'SGH'),
    ('RAWDAH phcc Sharoora', 'Rawdah', 'SGH'),
    ('Security Forces PHCC Sharoora', 'Security Forces', 'SGH'),
    ('Sultanaa PHCC Sharoora', 'Sultanah', 'SGH'),
    ('Tamani phcc Sharoura', 'Tamani phcc Sharoura', 'SGH'),
    ('alwadia phcc sharoora', 'Alwadia', 'SGH'),
    ('khaldiya sharoorah health center', 'Khaldiya', 'SGH'),

-- TGH Zone PHCs
    ('hema phcc', 'Hema', 'TGH'),
    ('naiwan phcc', 'Na''wan', 'TGH'),
    ('qattan phcc', 'Qattan', 'TGH'),
    ('suffah phcc', 'Suffah', 'TGH'),
    ('talham phcc', 'Talham', 'TGH'),
    ('thar phcc', 'Thar', 'TGH'),
    ('tilah phcc', 'Tila''h', 'TGH'),

-- YGH Zone PHCs
    ('legam primary health care center', 'Lejam', 'YGH'),
    ('mohammadia phcc', 'Mohammadia', 'YGH'),
    ('sultana primaryhealth care center', 'Sultana', 'YGH'),
    ('wadi wasat', 'Wadi Wasat', 'YGH'),
    ('yadama primary health care center', 'Yaddamah', 'YGH');

COMMIT;

