# 👥 How to Add New Users to Your PHM App

## 🎯 Quick 2-Step Process

### Step 1: Create User in Supabase (Get User ID)

1. **Open Supabase** in your browser: https://supabase.com
2. Go to **Authentication** (left sidebar)
3. Click **Users**
4. Click the green **"Add user"** button
5. Select **"Create new user"**
6. Fill in:
   - **Email:** user's email address
   - **Password:** create a password (write it down!)
   - **Auto Confirm User:** Check this box ✅ (important!)
7. Click **"Create user"**
8. **The user will appear in the list**
9. **Click on the user** to see details
10. **Copy the "ID"** (UUID like: `abc12345-6789-0123-4567-890abcdef123`)

---

### Step 2: Add User Profile in Your App

1. **Go to your app:** https://alalhawkash.github.io/phm-webapp/
2. **Log in** as admin (alalhawkash@gmail.com)
3. Click **"👤 User Management"**
4. Scroll to **"📧 Invite New User"** form
5. Fill in:
   - **User ID:** Paste the ID from Step 1
   - **Email:** Same email from Step 1
   - **Access Scope:** Choose:
     - **Cluster** = Full access (all zones and PHCs)
     - **Zone** = Single zone only
     - **PHC** = Single PHC only
   - **Zone:** Select if scope is Zone or PHC
   - **PHC:** Select if scope is PHC
   - **Make Admin:** Check if they should manage users
6. Click **"Send Invitation"**
7. Success message appears! ✅

---

## ✅ Done!

The user can now log in at https://alalhawkash.github.io/phm-webapp/ with:
- **Email:** The email you used
- **Password:** The password from Step 1

**Important:** Give the password to the user securely.

---

## 📝 Example: Add a Zone Manager for BGH

**Scenario:** Add Dr. Ahmed who manages Bader Aljanoob General Hospital zone.

### Step 1: Supabase
1. Supabase → Authentication → Users → Add user
2. Email: `ahmed@bgh.sa`
3. Password: `Ahmed2025!` (write this down!)
4. Check "Auto Confirm User" ✅
5. Create user
6. Click on user → Copy ID: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`

### Step 2: Your App
1. Login → User Management → Invite New User
2. Fill form:
   - User ID: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
   - Email: `ahmed@bgh.sa`
   - Scope: **Zone (Single Zone)**
   - Zone: **BGH** (Bader Aljanoob General Hospital)
   - Make Admin: Unchecked
3. Click "Send Invitation"
4. Success! ✅

### Step 3: Notify User
- Call Dr. Ahmed
- Tell him: "Login at https://alalhawkash.github.io/phm-webapp/"
- Email: `ahmed@bgh.sa`
- Password: `Ahmed2025!`
- He'll see only BGH zone data

---

## 📝 Example: Add a PHC Staff Member

**Scenario:** Add Nurse Fatima at Hema PHC.

### Step 1: Supabase
1. Create user: `fatima@hema.sa`
2. Password: `Fatima2025!`
3. Copy User ID

### Step 2: Your App
1. User Management → Invite New User
2. Fill:
   - User ID: (paste)
   - Email: `fatima@hema.sa`
   - Scope: **PHC (Single PHC)**
   - Zone: **TGH** (Thar General Hospital)
   - PHC: **hema phcc**
   - Make Admin: Unchecked
3. Send Invitation
4. Done! ✅

**Result:** Fatima sees ONLY Hema PHC data, nothing else.

---

## 🔧 Edit Existing Users

1. Login → User Management
2. Find user in **"All Users"** table
3. Click **"Edit"**
4. Change:
   - Scope (Cluster/Zone/PHC)
   - Zone or PHC assignment
   - Admin status
   - Active status
5. Click **"Save Changes"**
6. User's access updates immediately!

---

## 🚫 Disable a User

1. User Management → Find user → Edit
2. **Uncheck "Account Active"**
3. Save
4. User cannot log in anymore
5. Their data is preserved (can re-enable later)

---

## 🔄 Re-enable a User

1. User Management → Find user → Edit
2. **Check "Account Active"**
3. Save
4. User can log in again

---

## 📊 Available Zones & PHCs

### **10 Zones (Hospitals):**
- **BGH** - Bader Aljanoob General Hospital (6 PHCs)
- **HGH** - Hubona General Hospital (6 PHCs)
- **KGH** - Khubash General Hospital (6 PHCs)
- **KKH** - King Khaled Hospital (9 PHCs)
- **MCH** - Maternity and Children Hospital (2 PHCs)
- **WNH** - West Najran General Hospital (12 PHCs)
- **NNGH** - New Najran General Hospital (7 PHCs)
- **SGH** - Sharourah General Hospital (8 PHCs)
- **TGH** - Thar General Hospital (7 PHCs)
- **YGH** - Yaddamah General Hospital (5 PHCs)

**Total: 73 PHCs**

---

## 📊 Access Levels Explained

### 🌍 Cluster Scope (Full Access)
- **Sees:** All 10 zones, all 73 PHCs
- **Typical users:** 
  - Health Cluster Director
  - Deputy Directors
  - Program Coordinators
  - System Admins

### 🏥 Zone Scope (Single Zone)
- **Sees:** One hospital zone + all its PHCs
- **Example:** User assigned to BGH sees:
  - ✅ BGH zone data
  - ✅ All 6 PHCs under BGH
  - ❌ Cannot see other zones
- **Typical users:**
  - Zone Managers
  - Hospital Directors
  - Zone Coordinators

### 🏪 PHC Scope (Single PHC)
- **Sees:** One PHC only
- **Example:** User assigned to "hema phcc" sees:
  - ✅ Only Hema PHC data
  - ❌ Cannot see other PHCs or zones
- **Typical users:**
  - PHC Directors
  - Doctors
  - Nurses
  - PHC Staff

---

## 💡 Best Practices

### Creating Passwords:
- ✅ Use strong passwords (mix letters, numbers, symbols)
- ✅ Write them down securely
- ✅ Give to users via phone/in-person (not email)
- ✅ Tell users to change password after first login

### Assigning Scopes:
- ✅ Start with most restrictive (PHC) unless they need more
- ✅ Test by logging in as the user to verify
- ✅ Can always edit and expand access later

### Managing Users:
- ✅ Regular audit of user list (who's active?)
- ✅ Disable users who leave or change roles
- ✅ Don't delete - just disable (preserves records)
- ✅ Document who has admin access

---

## 🆘 Troubleshooting

### User can't log in:
- ✅ Check email is correct (case-sensitive!)
- ✅ Check password is correct
- ✅ Check "Account Active" is checked in User Management
- ✅ Check user exists in BOTH:
  - Supabase Authentication → Users
  - Your app → User Management list

### User sees wrong data:
- ✅ Check their scope (User Management → Edit)
- ✅ Check zone/PHC assignment matches
- ✅ User must logout and login again for changes to apply
- ✅ Clear browser cache (Cmd+Shift+R)

### "Error creating user profile":
- ✅ Make sure User ID is complete (very long UUID)
- ✅ Email must match exactly
- ✅ Zone must be selected for Zone/PHC scopes
- ✅ PHC must be selected for PHC scope

### User sees all data (scope not working):
1. Check their profile in User Management
2. Verify scope is set correctly (not "cluster")
3. Verify zone_id and phc_id are set
4. Have user logout and login again
5. Clear browser cache

---

## 🎯 Quick Reference

**Your App:** https://alalhawkash.github.io/phm-webapp/  
**Supabase:** https://supabase.com  
**GitHub Repo:** https://github.com/alalhawkash/phm-webapp  
**Admin Email:** alalhawkash@gmail.com  

---

## 🔐 Security Notes

- ✅ Never share admin credentials
- ✅ Regularly review user access levels
- ✅ Disable users who no longer need access
- ✅ Use strong passwords always
- ✅ Keep Supabase dashboard password secure
- ✅ Don't share service_role key (never needed - it's server-side only)

---

## 📞 Need Help?

**Common Tasks:**
- Add user → Follow Step 1 & 2 above
- Edit user → User Management → Edit button
- Disable user → Edit → Uncheck "Account Active"
- Change scope → Edit → Select new scope → Save

**If stuck:**
- Check this guide
- Check console for errors (F12 → Console)
- Verify user exists in both Supabase and app

---

**Your PHM authentication system is ready to use!** 🚀

😊
