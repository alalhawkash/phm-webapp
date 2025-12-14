# 👥 How to Add New Users to Your PHM App

## 🎯 Quick 2-Step Process

### Step 1: Create User in Supabase (Get User ID)

1. **Open Supabase** in your browser
2. Go to **Authentication** (left sidebar)
3. Click **Users**
4. Click the green **"Add user"** button
5. Select **"Create new user"**
6. Fill in:
   - **Email:** user's email address
   - **Password:** create a password (remember it or write it down!)
   - Auto Confirm User: **Check this box** ✅ (important!)
7. Click **"Create user"**
8. **The user will appear in the list**
9. **Click on the user** to see details
10. **Copy the "ID"** (it looks like: `abc12345-6789-0123-4567-890abcdef123`)

---

### Step 2: Add User Profile in Your App

1. **Go to your app:** https://alalhawkash.github.io/phm-webapp/
2. **Log in** as admin
3. Click **"👤 User Management"**
4. You'll see the **"Invite New User"** form
5. Fill in:
   - **User ID:** Paste the ID you copied from Step 1
   - **Email:** Same email you used in Step 1
   - **Access Scope:** Choose one:
     - **Cluster** = Can see all data
     - **Zone** = Can see one zone only (select which zone)
     - **PHC** = Can see one PHC only (select which zone and PHC)
   - **Make Admin:** Check this if they should be an admin
6. Click **"Send Invitation"**
7. You'll see: **"✅ User profile created successfully!"**

---

## ✅ Done!

The user can now log in with:
- **Email:** The email you used
- **Password:** The password you created in Step 1

**Important:** Give the password to the user securely (phone call, in person, encrypted message, etc.)

---

## 📝 Example: Add a Zone Manager

Let's say you want to add Dr. Sarah who manages the North Zone.

### Step 1: Supabase
1. Go to Supabase → Authentication → Users → Add user
2. Email: `sarah@hospital.com`
3. Password: `TempPass123!` (write this down!)
4. Check "Auto Confirm User"
5. Create user
6. Click on user, copy ID: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`

### Step 2: Your App
1. Go to app → Login → User Management
2. Fill form:
   - User ID: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
   - Email: `sarah@hospital.com`
   - Scope: **Zone**
   - Zone: **North Zone** (zone-1)
   - Make Admin: Leave unchecked
3. Click "Send Invitation"

### Step 3: Give Password
1. Call Dr. Sarah
2. Tell her: "Your login is sarah@hospital.com, password is TempPass123!"
3. She can log in at: https://alalhawkash.github.io/phm-webapp/

---

## 🔧 Edit Existing Users

1. Go to app → User Management
2. Find the user in the **"All Users"** table
3. Click the **"Edit"** button
4. Change their:
   - Access Scope (cluster/zone/phc)
   - Zone or PHC assignment
   - Admin status
   - Active status (uncheck to disable their account)
5. Click **"Save Changes"**

---

## 🚫 Disable a User

1. User Management → Find user → Edit
2. **Uncheck "Account Active"**
3. Save Changes
4. They can no longer log in

---

## 🔄 Re-enable a User

1. User Management → Find user → Edit
2. **Check "Account Active"**
3. Save Changes
4. They can log in again

---

## 📊 Available Access Levels

### Cluster Scope (Full Access)
- Can see ALL zones
- Can see ALL PHCs
- Typically for: Directors, Managers, Admins

### Zone Scope (Single Zone)
- Can see ONE zone only
- Can see ALL PHCs in that zone
- Typically for: Zone Coordinators, Zone Managers

### PHC Scope (Single PHC)
- Can see ONE PHC only
- Typically for: PHC Staff, Doctors, Nurses

---

## 💡 Tips

- **Always create passwords in Supabase first** - write them down!
- **Users can change their password** after first login (we can add this feature later)
- **Test new users** by logging in as them to verify access
- **Make backups** of important user lists
- **Keep track** of who has what access

---

## 🆘 Troubleshooting

**User can't log in:**
- Check they're using the correct email
- Check they're using the correct password
- Check "Account Active" is checked in User Management
- Check the user exists in both Supabase Auth AND app_users table

**User sees wrong data:**
- Check their scope is correct
- Check their zone/PHC assignment
- Edit and save their profile again

**"Error creating user profile":**
- Make sure you copied the full User ID (it's long!)
- Make sure the email matches exactly
- Make sure you selected a zone for zone/PHC scopes

---

## 🎓 Quick Reference

**Your App:** https://alalhawkash.github.io/phm-webapp/  
**Supabase Dashboard:** https://supabase.com  
**Your Admin Email:** alalhawkash@gmail.com  

**Zones:**
- zone-1 = North Zone
- zone-2 = South Zone
- zone-3 = East Zone
- zone-4 = West Zone

**PHCs:** See PROGRESS-SUMMARY.md for full list

---

**Questions? Just ask!** 😊

