const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = 'https://owuahvmckhcyruggxuxx.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseServiceKey) {
  console.error('❌ ERROR: SUPABASE_SERVICE_ROLE_KEY not set in .env file');
  console.error('   Create a .env file with: SUPABASE_SERVICE_ROLE_KEY=your_key_here');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function addAdminUser() {
  const email = 'Alalhawkash@gmail.com';
  const password = process.argv[2]; // Get password from command line

  if (!password) {
    console.error('❌ ERROR: Password required');
    console.error('   Usage: node add-admin.js <password>');
    console.error('   Example: node add-admin.js mypassword123');
    process.exit(1);
  }

  try {
    console.log(`Creating admin user: ${email}...\n`);

    // Check if user already exists
    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
    
    if (listError) {
      console.error('❌ Error listing users:', listError.message);
      process.exit(1);
    }

    let existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (existingUser) {
      console.log(`✓ User ${email} already exists in Supabase Auth`);
      console.log(`  ID: ${existingUser.id}\n`);

      // Update password if needed
      const { error: updateError } = await supabase.auth.admin.updateUserById(
        existingUser.id,
        { password: password }
      );

      if (updateError) {
        console.error('⚠️  Could not update password:', updateError.message);
      } else {
        console.log('✓ Password updated');
      }
    } else {
      // Create new user
      const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true
      });

      if (authError) {
        console.error('❌ Error creating user:', authError.message);
        process.exit(1);
      }

      console.log(`✓ User created in Supabase Auth`);
      console.log(`  ID: ${authData.user.id}\n`);
      existingUser = { id: authData.user.id, email: email };
    }

    // Link to users table
    const { error: dbError } = await supabase
      .from('users')
      .upsert({
        id: existingUser.id,
        email: email,
        role: 'admin',
        zone: null,
        phc_name: null
      }, { onConflict: 'id' });

    if (dbError) {
      console.error('❌ Error linking to users table:', dbError.message);
      console.error('   Make sure the users table exists in Supabase');
      process.exit(1);
    }

    console.log('✅ Admin user setup complete!');
    console.log(`   Email: ${email}`);
    console.log(`   Role: admin`);
    console.log(`   Password: ${'*'.repeat(password.length)}`);
    console.log('\n   You can now log in with this email and password.');

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

addAdminUser();

