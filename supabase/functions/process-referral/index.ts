
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.3"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || ''
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    const { referralCode, userId } = await req.json()
    
    if (!referralCode || !userId) {
      return new Response(
        JSON.stringify({ error: 'Missing referralCode or userId' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    console.log(`Processing referral: ${referralCode} for user ${userId}`)
    
    // Find the referral
    const { data: referral, error: referralError } = await supabase
      .from('referrals')
      .select('*')
      .eq('referral_code', referralCode)
      .single()
    
    if (referralError || !referral) {
      console.error('Referral not found:', referralError)
      return new Response(
        JSON.stringify({ error: 'Invalid referral code' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    // Check if this is a placeholder referral (self-reference)
    if (referral.referrer_id === referral.referred_id) {
      // Update the referral with the new user ID
      const { error: updateError } = await supabase
        .from('referrals')
        .update({
          referred_id: userId
        })
        .eq('id', referral.id)
      
      if (updateError) {
        console.error('Error updating referral:', updateError)
        return new Response(
          JSON.stringify({ error: 'Failed to process referral' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      
      return new Response(
        JSON.stringify({ success: true, referrerId: referral.referrer_id }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } else {
      // Referral already has a different referred user
      return new Response(
        JSON.stringify({ error: 'Referral code already used' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
  } catch (error) {
    console.error('Processing error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
