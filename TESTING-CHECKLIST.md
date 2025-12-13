# 🧪 Testing Checklist

Use this checklist to verify everything works correctly.

---

## Phase 1: Basic Authentication

- [ ] **Test 1.1**: Admin can login
  - Go to your app
  - Enter admin email
  - Click "Send Magic Link"
  - Check email
  - Click magic link
  - Verify: You're logged in and see dashboard

- [ ] **Test 1.2**: Admin sees User Management button
  - After login, look at top-right corner
  - Verify: You see a green "👤 User Management" button

- [ ] **Test 1.3**: Admin can logout
  - Click "Logout" button
  - Verify: You're back to login screen

---

## Phase 2: User Invitation

- [ ] **Test 2.1**: Invite a Zone-level user
  - Login as admin
  - Click "User Management"
  - Fill in:
    - Email: `test-zone@example.com`
    - Scope: Zone
    - Zone: North Zone
  - Click "Send Invitation"
  - Verify: Success message appears

- [ ] **Test 2.2**: Check invited user receives email
  - Check the test email inbox
  - Verify: Email received with magic link

- [ ] **Test 2.3**: Invited user can login
  - Logout from admin
  - Click the magic link from test email
  - Verify: User is logged in
  - Verify: User sees "Zone: zone-1" in top-right corner
  - Verify: User does NOT see "User Management" button

---

## Phase 3: User Management

- [ ] **Test 3.1**: View all users
  - Login as admin
  - Click "User Management"
  - Verify: You see the users table
  - Verify: Both admin and test-zone user appear

- [ ] **Test 3.2**: Edit user scope
  - Click "Edit" button on test-zone user
  - Change scope from Zone to PHC
  - Select: PHC-1
  - Click "Save Changes"
  - Verify: Success message
  - Verify: User list updates

- [ ] **Test 3.3**: Disable a user
  - Click "Edit" on test-zone user
  - Uncheck "Account Active"
  - Click "Save Changes"
  - Logout
  - Try to login as disabled user
  - Verify: User cannot access (gets disabled message)

- [ ] **Test 3.4**: Re-enable a user
  - Login as admin
  - Edit the disabled user
  - Check "Account Active"
  - Save
  - Verify: User can login again

---

## Phase 4: Data Access Control (RLS)

⚠️ **IMPORTANT**: Replace `your_data_table` with your actual table name in rls-policies.sql before these tests

- [ ] **Test 4.1**: Cluster scope sees all data
  - Login as admin (cluster scope)
  - Open browser console (F12)
  - Run:
    ```javascript
    const { data } = await supabase.from('your_data_table').select('*');
    console.log('Cluster data:', data);
    ```
  - Verify: Returns all rows from all zones/PHCs

- [ ] **Test 4.2**: Zone scope sees only their zone
  - Login as zone-scoped user
  - Open browser console
  - Run:
    ```javascript
    const { data } = await supabase.from('your_data_table').select('*');
    console.log('Zone data:', data);
    ```
  - Verify: Returns only rows matching user's zone_id
  - Verify: Does NOT return rows from other zones

- [ ] **Test 4.3**: PHC scope sees only their PHC
  - Login as PHC-scoped user
  - Open browser console
  - Run:
    ```javascript
    const { data } = await supabase.from('your_data_table').select('*');
    console.log('PHC data:', data);
    ```
  - Verify: Returns only rows matching user's phc_id
  - Verify: Does NOT return rows from other PHCs

- [ ] **Test 4.4**: Disabled user cannot access data
  - Disable a user (as admin)
  - Try to login as that user
  - Verify: Cannot login or gets access denied

---

## Phase 5: Security Tests

- [ ] **Test 5.1**: Non-admin cannot access admin functions
  - Login as regular user (not admin)
  - Open browser console
  - Try to call invite function:
    ```javascript
    const { data, error } = await supabase.functions.invoke('invite-user', {
      body: { email: 'hacker@test.com', scope: 'cluster' }
    });
    console.log('Error:', error); // Should show "Only admins can invite"
    ```
  - Verify: Gets "Only admins can invite users" error

- [ ] **Test 5.2**: User cannot read other users' profiles
  - Login as regular user
  - Open browser console
  - Run:
    ```javascript
    const { data, error } = await supabase.from('app_users').select('*');
    console.log('Users:', data);
    ```
  - Verify: Only sees their own profile, not all users

- [ ] **Test 5.3**: Service role key not in browser
  - Open browser console
  - Check all .js files in Sources tab
  - Verify: No file contains service_role key
  - Verify: Only anon key is visible

---

## Phase 6: Edge Cases

- [ ] **Test 6.1**: Invite existing user (should update profile)
  - Invite an email that already exists
  - Verify: Updates their profile instead of creating duplicate

- [ ] **Test 6.2**: Invalid email format
  - Try to invite: `not-an-email`
  - Verify: Shows validation error

- [ ] **Test 6.3**: Zone scope without zone selected
  - Try to invite with scope=zone but no zone selected
  - Verify: Shows error "Please select a zone"

- [ ] **Test 6.4**: Multiple admin users
  - Create second admin user
  - Verify: Both admins can manage users
  - Verify: One admin can edit the other admin

---

## 🎯 Success Criteria

All tests should pass for the system to be production-ready:

✅ Authentication works  
✅ Email invites are sent  
✅ Users can login with magic links  
✅ Admin panel is visible only to admins  
✅ RLS correctly filters data by scope  
✅ Disabled users cannot access system  
✅ Security: service_role key is never exposed  
✅ Security: non-admins cannot invite users  
✅ Security: users can only see their own profile  

---

## 🐛 If Something Fails

1. Check browser console for errors (F12 → Console tab)
2. Check Supabase logs:
   - Go to: Edge Functions → Select function → Logs
3. Check if RLS is enabled on all tables:
   - Go to: Table Editor → Select table → RLS is ON
4. Verify API keys are correct in supabaseClient.js
5. Verify edge functions are deployed:
   - Go to: Edge Functions → Should see both functions

---

## 📝 Notes for Production

Before going live:

- [ ] Enable "Confirm email" in Authentication settings
- [ ] Set up proper email templates (Authentication → Email Templates)
- [ ] Add your production domain to Redirect URLs
- [ ] Set strong RLS policies on ALL data tables
- [ ] Test with multiple real users
- [ ] Set up monitoring and alerts
- [ ] Review and customize email templates
- [ ] Add proper error handling in UI
- [ ] Add loading states for all async operations
- [ ] Test on mobile devices
- [ ] Run security audit

---

Need help with any failing test? Just let me know which test number failed!

