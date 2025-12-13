# Supabase Edge Function: Create User

This Edge Function allows admin users to create new users directly from the dashboard UI.

## Deployment Instructions

### Prerequisites
1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Login to Supabase:
   ```bash
   supabase login
   ```

3. Link your project:
   ```bash
   supabase link --project-ref owuahvmckhcyruggxuxx
   ```

### Deploy the Function

1. Navigate to the project root:
   ```bash
   cd /Users/alhaalha/Desktop/test-auth
   ```

2. Deploy the function:
   ```bash
   supabase functions deploy create-user
   ```

3. Set environment variables (if not already set):
   ```bash
   supabase secrets set SUPABASE_URL=https://owuahvmckhcyruggxuxx.supabase.co
   supabase secrets set SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```

   Replace `your_service_role_key_here` with your actual service role key from the `.env` file.

### Alternative: Deploy via Supabase Dashboard

1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/owuahvmckhcyruggxuxx
2. Navigate to **Edge Functions** in the left sidebar
3. Click **Create a new function**
4. Name it `create-user`
5. Copy the contents of `supabase/functions/create-user/index.ts` into the editor
6. Set the environment variables:
   - `SUPABASE_URL`: `https://owuahvmckhcyruggxuxx.supabase.co`
   - `SUPABASE_SERVICE_ROLE_KEY`: Your service role key (from `.env` file)
7. Click **Deploy**

## Testing

After deployment, you can test the function by:
1. Logging in as an admin user
2. Opening the Settings modal
3. Clicking the "Create User" tab
4. Filling in the form and submitting

## Troubleshooting

- **"Function not found"**: Make sure the function is deployed and the name matches exactly (`create-user`)
- **"Only admin users can create new users"**: Ensure you're logged in as an admin user
- **"Invalid authentication"**: Check that your session is valid and you're logged in

