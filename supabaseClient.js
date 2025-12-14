// Supabase Client Initialization
// Replace YOUR_SUPABASE_URL and YOUR_ANON_KEY with your actual values from Supabase Dashboard

const SUPABASE_URL = 'https://zobmqwncusqkbmyzmvxi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvYm1xd25jdXNxa2JteXptdnhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NTA1MjcsImV4cCI6MjA4MTIyNjUyN30.dISVd9GJ6ITsfIt-41b4lRtO2oYs9XSS768bdATLoVk';

// Initialize Supabase client with better session persistence
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storage: window.localStorage,
        storageKey: 'supabase.auth.token',
        flowType: 'pkce'
    }
});

console.log('✅ Supabase client initialized with enhanced session persistence');

