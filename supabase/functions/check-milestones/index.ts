
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
    
    const { userId } = await req.json()
    
    if (!userId) {
      return new Response(
        JSON.stringify({ error: 'Missing userId' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    console.log(`Checking milestones for user: ${userId}`)
    
    // Call the stored function to check and award milestones
    const { data: milestoneIds, error } = await supabase
      .rpc('check_and_award_milestones', { user_uuid: userId })
    
    if (error) {
      console.error('Error checking milestones:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to check milestones' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    // If any new milestones were awarded, fetch their details
    let newMilestones = []
    if (milestoneIds && milestoneIds.length > 0) {
      const { data: milestones, error: milestonesError } = await supabase
        .from('user_milestones')
        .select(`
          *,
          milestone:milestone_id(*)
        `)
        .in('id', milestoneIds)
      
      if (milestonesError) {
        console.error('Error fetching milestone details:', milestonesError)
      } else {
        newMilestones = milestones
      }
    }
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        milestoneIds,
        newMilestones
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
