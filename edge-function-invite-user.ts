// Edge Function: invite-user
// This function invites a new user via email and creates their profile

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client with service role (has admin privileges)
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    // Create regular client for checking the requester
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        },
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        }
      }
    )

    // Get the requesting user
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser()
    
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 401 }
      )
    }

    // Check if requester is admin
    const { data: requesterProfile, error: profileError } = await supabaseClient
      .from('app_users')
      .select('is_admin')
      .eq('id', user.id)
      .single()

    if (profileError || !requesterProfile?.is_admin) {
      return new Response(
        JSON.stringify({ error: 'Only admins can invite users' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 403 }
      )
    }

    // Parse request body
    const { email, scope, zone_id, phc_id, is_admin } = await req.json()

    // Validate input
    if (!email || !scope) {
      return new Response(
        JSON.stringify({ error: 'Email and scope are required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    if (!['cluster', 'zone', 'phc'].includes(scope)) {
      return new Response(
        JSON.stringify({ error: 'Invalid scope. Must be cluster, zone, or phc' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    if (scope === 'zone' && !zone_id) {
      return new Response(
        JSON.stringify({ error: 'zone_id is required for zone scope' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    if (scope === 'phc' && !phc_id) {
      return new Response(
        JSON.stringify({ error: 'phc_id is required for phc scope' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Invite user via admin API (sends magic link email)
    const { data: inviteData, error: inviteError } = await supabaseAdmin.auth.admin.inviteUserByEmail(
      email,
      {
        redirectTo: `${Deno.env.get('APP_URL') || 'http://localhost:3000'}`
      }
    )

    if (inviteError) {
      console.error('Invite error:', inviteError)
      return new Response(
        JSON.stringify({ error: inviteError.message }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Create or update user profile in app_users
    const { error: upsertError } = await supabaseAdmin
      .from('app_users')
      .upsert({
        id: inviteData.user.id,
        email: email,
        is_admin: is_admin || false,
        scope: scope,
        zone_id: scope === 'zone' || scope === 'phc' ? zone_id : null,
        phc_id: scope === 'phc' ? phc_id : null,
        active: true
      }, {
        onConflict: 'id'
      })

    if (upsertError) {
      console.error('Upsert error:', upsertError)
      return new Response(
        JSON.stringify({ error: upsertError.message }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'User invited successfully',
        user_id: inviteData.user.id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})

