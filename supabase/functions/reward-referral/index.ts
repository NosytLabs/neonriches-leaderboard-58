
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
    
    const { referralId, depositAmount } = await req.json()
    
    if (!referralId || !depositAmount) {
      return new Response(
        JSON.stringify({ error: 'Missing referralId or depositAmount' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    console.log(`Processing reward for referral: ${referralId}, amount: ${depositAmount}`)
    
    // Find the referral
    const { data: referral, error: referralError } = await supabase
      .from('referrals')
      .select('*')
      .eq('id', referralId)
      .single()
    
    if (referralError || !referral) {
      console.error('Referral not found:', referralError)
      return new Response(
        JSON.stringify({ error: 'Invalid referral ID' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    // Check if referral is already rewarded
    if (referral.status === 'rewarded') {
      return new Response(
        JSON.stringify({ error: 'Referral already rewarded' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    // Get referrer's current tier for bonus calculation
    const { data: tierData, error: tierError } = await supabase
      .rpc('get_user_referral_tier', { user_uuid: referral.referrer_id })
    
    if (tierError) {
      console.error('Error getting tier:', tierError)
      return new Response(
        JSON.stringify({ error: 'Failed to get referrer tier' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    const tier = tierData[0]
    const bonusMultiplier = tier?.bonus_multiplier || 1.0
    
    // Calculate rewards
    const baseReward = depositAmount * 0.1 // 10% of first deposit
    const totalReward = baseReward * bonusMultiplier // Apply tier bonus
    
    // Create a reward for the referrer
    const { data: reward, error: rewardError } = await supabase
      .from('referral_rewards')
      .insert({
        referrer_id: referral.referrer_id,
        referred_id: referral.referred_id,
        referral_id: referral.id,
        reward_type: 'deposit_bonus',
        reward_amount: totalReward
      })
      .select()
      .single()
    
    if (rewardError) {
      console.error('Error creating reward:', rewardError)
      return new Response(
        JSON.stringify({ error: 'Failed to create reward' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    // Update the referral
    const { error: updateError } = await supabase
      .from('referrals')
      .update({
        status: 'rewarded',
        first_deposit_amount: depositAmount,
        completed_at: new Date().toISOString()
      })
      .eq('id', referral.id)
    
    if (updateError) {
      console.error('Error updating referral:', updateError)
      return new Response(
        JSON.stringify({ error: 'Failed to update referral' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    // Add the reward amount to the referrer's wallet
    const { error: depositError } = await supabase
      .from('deposits')
      .insert({
        user_id: referral.referrer_id,
        amount: totalReward,
        transaction_signature: `referral_bonus_${referral.id}`
      })
    
    if (depositError) {
      console.error('Error adding deposit:', depositError)
      return new Response(
        JSON.stringify({ error: 'Failed to add deposit' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        reward: {
          id: reward.id,
          amount: totalReward,
          referrerId: referral.referrer_id,
          referredId: referral.referred_id,
          bonusMultiplier
        }
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Processing error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
