// =====================================================
// PHM Authentication System - Complete JavaScript
// =====================================================

// =====================================================
// SUPABASE CONNECTION
// =====================================================

const SUPABASE_URL = 'https://zobmqwncusqkbmyzmvxi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvYm1xd25jdXNxa2JteXptdnhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NTA1MjcsImV4cCI6MjA4MTIyNjUyN30.dISVd9GJ6ITsfIt-41b4lRtO2oYs9XSS768bdATLoVk';

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

console.log('✅ Supabase client initialized');

// =====================================================
// AUTHENTICATION LOGIC
// =====================================================

let currentUser = null;
let userProfile = null;

// Check if user is logged in
async function checkAuth() {
    try {
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
            console.error('Session error:', error);
            showLogin();
            return;
        }
        
        if (session && session.user) {
            currentUser = session.user;
            await loadUserProfile(session);
            showApp();
        } else {
            showLogin();
        }
    } catch (err) {
        console.error('Auth check error:', err);
        showLogin();
    }
}

// Load user profile
async function loadUserProfile(session) {
    try {
        // Try localStorage cache first (fast!)
        const cachedScope = localStorage.getItem('userScope');
        if (cachedScope) {
            try {
                const scopeData = JSON.parse(cachedScope);
                userProfile = {
                    id: session.user.id,
                    email: session.user.email,
                    scope: scopeData.scope,
                    zone_id: scopeData.zone_id,
                    phc_id: scopeData.phc_id,
                    is_admin: scopeData.is_admin,
                    active: true
                };
                console.log('✅ User profile loaded');
                return;
            } catch (e) {
                // Cache error, load from database
            }
        }
        
        // Load from database
        const { data, error } = await supabase
            .from('app_users')
            .select('*')
            .eq('id', session.user.id)
            .single();
        
        if (error) {
            console.error('Error loading user profile:', error);
            if (error.code === 'PGRST116') {
                alert('User profile not found. Please contact an administrator.');
            }
            return;
        }
        
        userProfile = data;
        
        // Check if user is active
        if (!userProfile.active) {
            await supabase.auth.signOut();
            alert('Your account has been disabled. Please contact an administrator.');
            showLogin();
            return;
        }
        
        // Cache for next time
        localStorage.setItem('userScope', JSON.stringify({
            scope: userProfile.scope,
            zone_id: userProfile.zone_id,
            phc_id: userProfile.phc_id,
            is_admin: userProfile.is_admin
        }));
        
        console.log('✅ User profile loaded');
    } catch (err) {
        console.error('Error in loadUserProfile:', err);
    }
}

// Handle login
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
    
    const loginBtn = document.querySelector('#login-screen button[type="submit"]');
    if (loginBtn) {
        loginBtn.textContent = 'Login';
        loginBtn.disabled = false;
    }
    
    const errorMsg = document.getElementById('login-error');
    if (errorMsg) {
        errorMsg.style.display = 'none';
    }
}

// Show app screen
function showApp() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app-screen').style.display = 'flex';
    
    // Ensure sidebar is closed by default
    document.getElementById('app-screen').classList.remove('sidebar-open');
    
    if (userProfile && userProfile.is_admin) {
        document.getElementById('admin-button-sidebar').style.display = 'block';
    } else {
        document.getElementById('admin-button-sidebar').style.display = 'none';
    }
    
    if (userProfile) {
        // Update sidebar user info
        document.getElementById('user-email-sidebar').textContent = userProfile.email;
        const scopeText = userProfile.scope === 'cluster' ? 'Full Access' :
            userProfile.scope === 'zone' ? `Zone: ${userProfile.zone_id || 'N/A'}` :
            `PHC: ${userProfile.phc_id || 'N/A'}`;
        document.getElementById('user-scope-sidebar').textContent = scopeText;
    }
}

// Listen for auth state changes
supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
        if (session && session.user) {
            currentUser = session.user;
            await loadUserProfile(session);
            showApp();
        } else {
            showLogin();
        }
    } else if (event === 'SIGNED_OUT') {
        currentUser = null;
        userProfile = null;
        localStorage.removeItem('userScope');
        showLogin();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // onAuthStateChange handles session check automatically
});

// =====================================================
// ADMIN USER MANAGEMENT
// =====================================================

let allUsers = [];
let zones = [];
let phcs = [];

// Load zones and PHCs for dropdowns
async function loadZonesAndPHCs() {
    const { data: zonesData, error: zonesError } = await supabase
        .from('zones')
        .select('*')
        .order('name');
    
    if (zonesError) {
        console.error('Error loading zones:', zonesError);
    } else {
        zones = zonesData || [];
    }
    
    const { data: phcsData, error: phcsError } = await supabase
        .from('phcs')
        .select('*')
        .order('name');
    
    if (phcsError) {
        console.error('Error loading PHCs:', phcsError);
    } else {
        phcs = phcsData || [];
    }
    
    populateZoneDropdowns();
    populatePHCDropdowns();
}

// Populate zone dropdowns
function populateZoneDropdowns() {
    const selects = document.querySelectorAll('.zone-select');
    selects.forEach(select => {
        select.innerHTML = '<option value="">Select Zone</option>';
        zones.forEach(zone => {
            select.innerHTML += `<option value="${zone.id}">${zone.name}</option>`;
        });
    });
}

// Populate PHC dropdowns
function populatePHCDropdowns() {
    const selects = document.querySelectorAll('.phc-select');
    selects.forEach(select => {
        select.innerHTML = '<option value="">Select PHC</option>';
        phcs.forEach(phc => {
            select.innerHTML += `<option value="${phc.id}">${phc.name} (Zone: ${phc.zone_id})</option>`;
        });
    });
}

// Filter PHCs by zone
function filterPHCsByZone(zoneId, phcSelectId) {
    const phcSelect = document.getElementById(phcSelectId);
    phcSelect.innerHTML = '<option value="">Select PHC</option>';
    
    const filteredPHCs = phcs.filter(phc => phc.zone_id === zoneId);
    filteredPHCs.forEach(phc => {
        phcSelect.innerHTML += `<option value="${phc.id}">${phc.name}</option>`;
    });
}

// Show/hide fields based on scope (invite form)
function updateInviteScopeFields() {
    const scope = document.getElementById('invite-scope').value;
    const zoneField = document.getElementById('invite-zone-field');
    const phcField = document.getElementById('invite-phc-field');
    
    if (scope === 'cluster') {
        zoneField.style.display = 'none';
        phcField.style.display = 'none';
    } else if (scope === 'zone') {
        zoneField.style.display = 'block';
        phcField.style.display = 'none';
    } else if (scope === 'phc') {
        zoneField.style.display = 'block';
        phcField.style.display = 'block';
    }
}

// Show/hide fields based on scope (edit form)
function updateEditScopeFields() {
    const scope = document.getElementById('edit-scope').value;
    const zoneField = document.getElementById('edit-zone-field');
    const phcField = document.getElementById('edit-phc-field');
    
    if (scope === 'cluster') {
        zoneField.style.display = 'none';
        phcField.style.display = 'none';
    } else if (scope === 'zone') {
        zoneField.style.display = 'block';
        phcField.style.display = 'none';
    } else if (scope === 'phc') {
        zoneField.style.display = 'block';
        phcField.style.display = 'block';
    }
}

// Load all users
async function loadAllUsers() {
    const { data, error } = await supabase
        .from('app_users')
        .select('*')
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error('Error loading users:', error);
        alert('Error loading users: ' + error.message);
        return;
    }
    
    allUsers = data || [];
    displayUsersList();
}

// Display users list
function displayUsersList() {
    const tbody = document.getElementById('users-list-tbody');
    tbody.innerHTML = '';
    
    if (allUsers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 20px; color: #999;">No users found</td></tr>';
        return;
    }
    
    allUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.email}</td>
            <td><span class="badge badge-${user.is_admin ? 'admin' : 'user'}">${user.is_admin ? 'Admin' : 'User'}</span></td>
            <td><span class="badge badge-scope">${user.scope}</span></td>
            <td>${user.zone_id || '-'}</td>
            <td>${user.phc_id || '-'}</td>
            <td><span class="badge badge-${user.active ? 'active' : 'inactive'}">${user.active ? 'Active' : 'Disabled'}</span></td>
            <td>
                <button onclick="openEditUserModal('${user.id}')" class="btn-small btn-primary">Edit</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Show admin panel
function showAdminPanel() {
    document.getElementById('admin-panel').style.display = 'block';
    loadAllUsers();
    loadZonesAndPHCs();
}

// Hide admin panel
function hideAdminPanel() {
    document.getElementById('admin-panel').style.display = 'none';
}

// Invite new user
async function inviteUser(event) {
    event.preventDefault();
    
    const userId = document.getElementById('invite-user-id').value.trim();
    const email = document.getElementById('invite-email').value.trim();
    const scope = document.getElementById('invite-scope').value;
    const zoneId = document.getElementById('invite-zone').value || null;
    const phcId = document.getElementById('invite-phc').value || null;
    const isAdmin = document.getElementById('invite-is-admin').checked;
    
    if (!userId) {
        alert('Please enter the User ID from Supabase');
        return;
    }
    
    if (!email) {
        alert('Please enter an email address');
        return;
    }
    
    if (!scope) {
        alert('Please select a scope');
        return;
    }
    
    if (scope === 'zone' && !zoneId) {
        alert('Please select a zone');
        return;
    }
    
    if (scope === 'phc' && !phcId) {
        alert('Please select a PHC');
        return;
    }
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Creating Profile...';
    submitBtn.disabled = true;
    
    try {
        const { data, error } = await supabase.rpc('create_user_profile', {
            p_user_id: userId,
            p_email: email,
            p_scope: scope,
            p_zone_id: zoneId,
            p_phc_id: phcId,
            p_is_admin: isAdmin
        });
        
        if (error) throw error;
        
        if (!data || !data.success) {
            throw new Error(data?.error || 'Unknown error occurred');
        }
        
        alert('✅ User profile created successfully! The user can now log in with their email and password.');
        
        document.getElementById('invite-form').reset();
        updateInviteScopeFields();
        loadAllUsers();
        
    } catch (error) {
        console.error('Error creating user profile:', error);
        alert('Error: ' + error.message);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Open edit user modal
function openEditUserModal(userId) {
    const user = allUsers.find(u => u.id === userId);
    if (!user) return;
    
    document.getElementById('edit-user-id').value = user.id;
    document.getElementById('edit-email-display').textContent = user.email;
    document.getElementById('edit-scope').value = user.scope;
    document.getElementById('edit-zone').value = user.zone_id || '';
    document.getElementById('edit-phc').value = user.phc_id || '';
    document.getElementById('edit-is-admin').checked = user.is_admin;
    document.getElementById('edit-active').checked = user.active;
    
    updateEditScopeFields();
    document.getElementById('edit-user-modal').style.display = 'flex';
}

// Close edit user modal
function closeEditUserModal() {
    document.getElementById('edit-user-modal').style.display = 'none';
}

// Update user role
async function updateUserRole(event) {
    event.preventDefault();
    
    const userId = document.getElementById('edit-user-id').value;
    const scope = document.getElementById('edit-scope').value;
    const zoneId = document.getElementById('edit-zone').value || null;
    const phcId = document.getElementById('edit-phc').value || null;
    const isAdmin = document.getElementById('edit-is-admin').checked;
    const active = document.getElementById('edit-active').checked;
    
    if (scope === 'zone' && !zoneId) {
        alert('Please select a zone');
        return;
    }
    
    if (scope === 'phc' && !phcId) {
        alert('Please select a PHC');
        return;
    }
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Updating...';
    submitBtn.disabled = true;
    
    try {
        const { data, error } = await supabase.rpc('update_user_profile', {
            p_user_id: userId,
            p_scope: scope,
            p_zone_id: zoneId,
            p_phc_id: phcId,
            p_is_admin: isAdmin,
            p_active: active
        });
        
        if (error) throw error;
        
        if (!data || !data.success) {
            throw new Error(data?.error || 'Unknown error occurred');
        }
        
        alert('✅ User updated successfully!');
        
        closeEditUserModal();
        loadAllUsers();
        
    } catch (error) {
        console.error('Error updating user:', error);
        alert('Error: ' + error.message);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

