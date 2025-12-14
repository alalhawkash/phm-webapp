// Authentication Logic

let currentUser = null;
let userProfile = null;

// Check if user is logged in
async function checkAuth() {
    try {
        // Give Supabase time to restore session from storage
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
            console.error('Session error:', error);
            showLogin();
            return;
        }
        
        if (session && session.user) {
            currentUser = session.user;
            await loadUserProfile();
            showApp();
        } else {
            showLogin();
        }
    } catch (err) {
        console.error('Auth check error:', err);
        showLogin();
    }
}

// Load user profile from app_users table
async function loadUserProfile() {
    console.log('🔍 loadUserProfile() started');
    
    try {
        // Get the current session to ensure we have the latest user info
        const { data: { session } } = await supabase.auth.getSession();
        console.log('🔍 Got session:', session ? 'Yes' : 'No');
        
        if (!session) {
            console.error('No active session');
            return;
        }
        
        console.log('🔍 Querying app_users for user:', session.user.id);
        
        const { data, error } = await supabase
            .from('app_users')
            .select('*')
            .eq('id', session.user.id)
            .single();
        
        console.log('🔍 Query result:', { data, error });
        
        if (error) {
            console.error('❌ Error loading user profile:', error);
            console.error('Error details:', error.message, error.code, error.details);
            
            // If user profile doesn't exist, show an alert
            if (error.code === 'PGRST116') {
                alert('User profile not found. Please contact an administrator.');
            }
            return;
        }
        
        userProfile = data;
        console.log('🔍 User profile set:', userProfile);
        
        // Check if user is active
        if (!userProfile.active) {
            await supabase.auth.signOut();
            alert('Your account has been disabled. Please contact an administrator.');
            showLogin();
            return;
        }
        
        // Store user scope in localStorage for the dashboard to use
        localStorage.setItem('userScope', JSON.stringify({
            scope: userProfile.scope,
            zone_id: userProfile.zone_id,
            phc_id: userProfile.phc_id,
            is_admin: userProfile.is_admin
        }));
        
        console.log('✅ User profile loaded successfully!', userProfile);
    } catch (err) {
        console.error('❌ Exception in loadUserProfile:', err);
    }
}

// Handle login with email and password
async function handleLogin(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });
    
    if (error) {
        return { success: false, error: error.message };
    }
    
    return { success: true };
}

// Handle logout
async function handleLogout() {
    await supabase.auth.signOut();
    currentUser = null;
    userProfile = null;
    showLogin();
}

// Show login screen
function showLogin() {
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('app-screen').style.display = 'none';
    
    // Reset login button
    const loginBtn = document.querySelector('#login-screen button[type="submit"]');
    if (loginBtn) {
        loginBtn.textContent = 'Login';
        loginBtn.disabled = false;
    }
    
    // Clear any error messages
    const errorMsg = document.getElementById('login-error');
    if (errorMsg) {
        errorMsg.style.display = 'none';
    }
}

// Show app screen
function showApp() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app-screen').style.display = 'flex';
    
    // Show/hide admin button
    if (userProfile && userProfile.is_admin) {
        document.getElementById('admin-button').style.display = 'block';
    } else {
        document.getElementById('admin-button').style.display = 'none';
    }
    
    // Display user info
    if (userProfile) {
        document.getElementById('user-email-display').textContent = userProfile.email;
        document.getElementById('user-scope-display').textContent = 
            userProfile.scope === 'cluster' ? 'Full Access' :
            userProfile.scope === 'zone' ? `Zone: ${userProfile.zone_id || 'N/A'}` :
            `PHC: ${userProfile.phc_id || 'N/A'}`;
    }
}

// Listen for auth state changes
supabase.auth.onAuthStateChange(async (event, session) => {
    console.log('Auth state changed:', event);
    
    if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
        if (session && session.user) {
            console.log('📱 Session detected, loading profile...');
            currentUser = session.user;
            await loadUserProfile();
            console.log('📱 Profile loaded, showing app...');
            showApp();
            console.log('📱 showApp() called!');
        } else {
            console.log('⚠️ No session, showing login');
            showLogin();
        }
    } else if (event === 'SIGNED_OUT') {
        currentUser = null;
        userProfile = null;
        localStorage.removeItem('userScope');
        showLogin();
    }
});

// Initialize - let onAuthStateChange handle everything
document.addEventListener('DOMContentLoaded', () => {
    console.log('App loading... waiting for session check');
    // Don't call checkAuth - onAuthStateChange will handle it automatically
});

