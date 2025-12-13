// Admin User Management Logic

let allUsers = [];
let zones = [];
let phcs = [];

// Load zones and PHCs for dropdowns
async function loadZonesAndPHCs() {
    // Load zones
    const { data: zonesData, error: zonesError } = await supabase
        .from('zones')
        .select('*')
        .order('name');
    
    if (zonesError) {
        console.error('Error loading zones:', zonesError);
    } else {
        zones = zonesData || [];
    }
    
    // Load PHCs
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

// Show/hide zone and PHC fields based on scope
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

// Update edit scope fields
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

// Load all users (admin only)
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
    
    const email = document.getElementById('invite-email').value.trim();
    const scope = document.getElementById('invite-scope').value;
    const zoneId = document.getElementById('invite-zone').value || null;
    const phcId = document.getElementById('invite-phc').value || null;
    const isAdmin = document.getElementById('invite-is-admin').checked;
    
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
    
    // Show loading
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Call edge function to invite user
        const { data, error } = await supabase.functions.invoke('invite-user', {
            body: { email, scope, zone_id: zoneId, phc_id: phcId, is_admin: isAdmin }
        });
        
        if (error) throw error;
        
        alert('✅ Invitation sent successfully! The user will receive an email with a magic link to sign in.');
        
        // Reset form
        document.getElementById('invite-form').reset();
        updateInviteScopeFields();
        
        // Reload users list
        loadAllUsers();
        
    } catch (error) {
        console.error('Error inviting user:', error);
        alert('Error inviting user: ' + error.message);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Open edit user modal
function openEditUserModal(userId) {
    const user = allUsers.find(u => u.id === userId);
    if (!user) return;
    
    // Fill form
    document.getElementById('edit-user-id').value = user.id;
    document.getElementById('edit-email-display').textContent = user.email;
    document.getElementById('edit-scope').value = user.scope;
    document.getElementById('edit-zone').value = user.zone_id || '';
    document.getElementById('edit-phc').value = user.phc_id || '';
    document.getElementById('edit-is-admin').checked = user.is_admin;
    document.getElementById('edit-active').checked = user.active;
    
    updateEditScopeFields();
    
    // Show modal
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
    
    // Show loading
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Updating...';
    submitBtn.disabled = true;
    
    try {
        // Call edge function to update user
        const { data, error } = await supabase.functions.invoke('update-user-role', {
            body: { 
                user_id: userId, 
                scope, 
                zone_id: zoneId, 
                phc_id: phcId, 
                is_admin: isAdmin,
                active 
            }
        });
        
        if (error) throw error;
        
        alert('✅ User updated successfully!');
        
        // Close modal
        closeEditUserModal();
        
        // Reload users list
        loadAllUsers();
        
    } catch (error) {
        console.error('Error updating user:', error);
        alert('Error updating user: ' + error.message);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

