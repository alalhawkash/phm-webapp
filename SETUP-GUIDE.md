# 🚀 Supabase Authentication + RBAC Setup Guide

This guide will walk you through setting up your app step by step. After each step, **STOP** and tell me "done" before moving to the next step.

---

## ✅ STEP 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"** or **"Sign in"** (if you have an account)
3. Click **"New Project"**
4. Fill in:
   - **Name**: PHM App (or any name you want)
   - **Database Password**: Create a strong password and **SAVE IT** somewhere safe
   - **Region**: Choose closest to you
5. Click **"Create new project"**
6. Wait 1-2 minutes for the project to be created

### ⏸️ **STOP HERE - Tell me "done" when your project is created**

---

## ✅ STEP 2: Get Your API Keys

1. In your Supabase project, look at the **left sidebar**
2. Click on **"Project Settings"** (it's at the bottom, has a gear icon ⚙️)
3. Click on **"API"** (in the left menu)
4. You will see two keys:
   - **Project URL** (starts with `https://`)
   - **anon public** key (long string starting with `eyJ...`)
5. **Copy both of these** - you'll need them in the next step

### ⏸️ **STOP HERE - Tell me "done" when you have copied both the URL and anon key**

---

## ✅ STEP 3: Update Your Code with API Keys

1. Open the file **`supabaseClient.js`** (it's in your project folder)
2. Find these two lines near the top:
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';
   ```
3. Replace `YOUR_SUPABASE_URL` with the Project URL you copied
4. Replace `YOUR_ANON_KEY` with the anon public key you copied
5. **Save the file**

Example:
```javascript
const SUPABASE_URL = 'https://abcdefghijk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwMDAwMDAsImV4cCI6MTk5NTU3NjAwMH0.abcd1234';
```

### ⏸️ **STOP HERE - Tell me "done" when you've updated the file**

---

## ✅ STEP 4: Enable Email Authentication

1. In Supabase, go to **"Authentication"** in the left sidebar
2. Click on **"Providers"**
3. You should see **"Email"** - it's usually enabled by default
4. If it's not enabled, click on it and toggle **"Enable Email provider"**
5. Scroll down and make sure **"Confirm email"** is **OFF** (for easier testing)
6. Click **"Save"** if you made any changes

### ⏸️ **STOP HERE - Tell me "done" when email is enabled**

---

## ✅ STEP 5: Configure Redirect URLs

1. Still in **"Authentication"**, click on **"URL Configuration"** (in the left menu)
2. Under **"Redirect URLs"**, add your app URL:
   - If testing locally: `http://localhost:3000` or `http://localhost:8000` (whatever port you use)
   - If deployed: your actual website URL
3. Click **"Save"**

### ⏸️ **STOP HERE - Tell me "done" when you've added your URL**

---

## ✅ STEP 6: Create Database Tables

1. In Supabase, go to **"SQL Editor"** (in the left sidebar)
2. Click **"New query"** button
3. Open the file **`database-schema.sql`** from your project folder
4. **Copy ALL the contents** of that file
5. **Paste** it into the SQL Editor in Supabase
6. Click **"Run"** button (or press Ctrl/Cmd + Enter)
7. You should see a green success message

### ⏸️ **STOP HERE - Tell me "done" when the SQL ran successfully**

---

## ✅ STEP 7: Create RLS Policies

1. In Supabase, still in **"SQL Editor"**
2. Click **"New query"** button again
3. Open the file **`rls-policies.sql`** from your project folder
4. **Copy ALL the contents** of that file
5. **Paste** it into the SQL Editor
6. **IMPORTANT**: If you have an existing data table:
   - Find all occurrences of `your_data_table` in the pasted SQL
   - Replace it with your actual table name
7. Click **"Run"**
8. You should see a green success message

### ⏸️ **STOP HERE - Tell me "done" when RLS policies are created**

---

## ✅ STEP 8: Create Your First Admin User

1. In Supabase, go to **"Authentication"** in the left sidebar
2. Click on **"Users"**
3. Click **"Add user"** button (green button)
4. Choose **"Create new user"**
5. Enter your email address
6. Enter a password (or use auto-generate)
7. Click **"Create user"**
8. **Copy the User ID** (it looks like: `abc12345-6789-...`)

Now we need to make this user an admin:

9. Go to **"SQL Editor"**
10. Click **"New query"**
11. Paste this (replace YOUR_USER_ID with the ID you copied):
    ```sql
    INSERT INTO public.app_users (id, email, is_admin, scope, active)
    VALUES (
      'YOUR_USER_ID',
      'your-email@example.com',
      TRUE,
      'cluster',
      TRUE
    );
    ```
12. Click **"Run"**

### ⏸️ **STOP HERE - Tell me "done" when you've created your admin user**

---

## ✅ STEP 9: Create Edge Functions

Now we need to create two serverless functions. First, install Supabase CLI:

### Option A: If you have Homebrew (Mac)
1. Open Terminal
2. Run: `brew install supabase/tap/supabase`

### Option B: If you have npm
1. Run: `npm install -g supabase`

### After installation:
1. In Terminal, navigate to your project folder
2. Run: `supabase login`
3. It will open a browser - click **"Authorize"**

### ⏸️ **STOP HERE - Tell me "done" when Supabase CLI is installed and you're logged in**

---

## ✅ STEP 10: Link Your Project and Deploy Functions

1. In Terminal (in your project folder), run:
   ```bash
   supabase link --project-ref YOUR_PROJECT_REF
   ```
   - To find YOUR_PROJECT_REF: In Supabase dashboard, go to **Project Settings** → **General** → look for **Reference ID**

2. Create the invite-user function:
   ```bash
   supabase functions new invite-user
   ```

3. Replace the content of the created file with **`edge-function-invite-user.ts`** from your project

4. Create the update-user-role function:
   ```bash
   supabase functions new update-user-role
   ```

5. Replace the content with **`edge-function-update-user-role.ts`**

6. Deploy both functions:
   ```bash
   supabase functions deploy invite-user
   supabase functions deploy update-user-role
   ```

### ⏸️ **STOP HERE - Tell me "done" when functions are deployed**

---

## ✅ STEP 11: Set Environment Variables for Functions

1. In Supabase dashboard, go to **"Edge Functions"** (in left sidebar)
2. Click on **"invite-user"** function
3. Go to **"Settings"** tab
4. Under **"Environment Variables"**, add:
   - Variable: `APP_URL`
   - Value: Your app URL (e.g., `http://localhost:3000`)
5. Click **"Add"**

Repeat for **"update-user-role"** function.

### ⏸️ **STOP HERE - Tell me "done" when env vars are set**

---

## ✅ STEP 12: Test Your App!

1. Open **`index.html`** in your browser (or start your local server)
2. You should see the login screen
3. Enter your admin email
4. Click **"Send Magic Link"**
5. Check your email inbox
6. Click the magic link in the email
7. You should be logged in and see the app dashboard!

### ⏸️ **STOP HERE - Tell me "done" when you've successfully logged in**

---

## 🎯 Acceptance Tests

Once everything is set up, test these scenarios:

- [ ] ✅ Admin can log in
- [ ] ✅ Admin sees "User Management" button
- [ ] ✅ Admin can invite a new user (sends email)
- [ ] ✅ New user receives email and can log in
- [ ] ✅ New user appears in Users List
- [ ] ✅ Admin can edit user's scope
- [ ] ✅ Admin can disable a user
- [ ] ✅ Disabled user cannot log in
- [ ] ✅ Zone user can only see their zone's data
- [ ] ✅ PHC user can only see their PHC's data

---

## 📍 Where to Find Buttons in Supabase

Here's a quick reference for all the menu locations:

| Task | Left Sidebar Path |
|------|------------------|
| Get API keys | **Project Settings** (⚙️ at bottom) → **API** |
| Enable email auth | **Authentication** → **Providers** |
| Set redirect URLs | **Authentication** → **URL Configuration** |
| Run SQL | **SQL Editor** → **New query** |
| View tables | **Table Editor** |
| Create users | **Authentication** → **Users** |
| View functions | **Edge Functions** |
| Project settings | **Project Settings** (⚙️ at bottom) |
| View logs | **Edge Functions** → Select function → **Logs** |

---

## 🆘 Troubleshooting

### "User not found" error
- Make sure you created the admin user in both Authentication and app_users table

### "Invalid API key" error
- Double-check you copied the anon key correctly in supabaseClient.js

### "Function not found" error
- Make sure you deployed the edge functions successfully

### Magic link doesn't work
- Check Authentication → URL Configuration has your correct URL
- Check your spam folder

---

## 🎉 You're All Set!

Once you complete all steps, your app will have:
- ✅ Secure authentication with email magic links
- ✅ Role-based access control (Admin, Cluster, Zone, PHC)
- ✅ Admin panel to manage users
- ✅ Row-level security protecting your data
- ✅ Server-side user invitation system

Need help? Just ask!

