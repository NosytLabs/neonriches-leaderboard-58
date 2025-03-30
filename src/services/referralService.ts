
import { Referral, ReferralReward, ReferralTier, ReferralStats } from '@/types/referral';
import { supabase } from '@/integrations/supabase/client';

export const generateReferralCode = async (userId: string): Promise<string> => {
  const { data, error } = await supabase
    .rpc('generate_referral_code', { user_uuid: userId });
  
  if (error) {
    console.error('Error generating referral code:', error);
    throw error;
  }
  
  return data as string;
};

export const getUserReferralCode = async (userId: string): Promise<string> => {
  // Check if user already has a referral code
  const { data, error } = await supabase
    .from('referrals')
    .select('referral_code')
    .eq('referrer_id', userId)
    .limit(1);
  
  if (error) {
    console.error('Error fetching referral code:', error);
    throw error;
  }
  
  // If user has a code, return it, otherwise generate a new one
  if (data.length > 0) {
    return data[0].referral_code;
  } else {
    const code = await generateReferralCode(userId);
    
    // Save the new code
    const { error: insertError } = await supabase
      .from('referrals')
      .insert({
        referrer_id: userId,
        referred_id: userId, // Temporary self-reference, will be updated when used
        referral_code: code,
        status: 'pending'
      });
    
    if (insertError) {
      console.error('Error saving referral code:', insertError);
      throw insertError;
    }
    
    return code;
  }
};

export const getUserReferrals = async (userId: string): Promise<Referral[]> => {
  const { data, error } = await supabase
    .from('referrals')
    .select('*')
    .eq('referrer_id', userId)
    .neq('referred_id', userId) // Exclude self-reference placeholders
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching user referrals:', error);
    throw error;
  }
  
  return data as Referral[];
};

export const getUserReferralRewards = async (userId: string): Promise<ReferralReward[]> => {
  const { data, error } = await supabase
    .from('referral_rewards')
    .select('*')
    .eq('referrer_id', userId)
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching user referral rewards:', error);
    throw error;
  }
  
  return data as ReferralReward[];
};

export const getReferralTiers = async (): Promise<ReferralTier[]> => {
  const { data, error } = await supabase
    .from('referral_tiers')
    .select('*')
    .order('min_referrals', { ascending: true });
  
  if (error) {
    console.error('Error fetching referral tiers:', error);
    throw error;
  }
  
  return data as ReferralTier[];
};

export const getUserReferralTier = async (userId: string): Promise<ReferralTier | null> => {
  const { data, error } = await supabase
    .rpc('get_user_referral_tier', { user_uuid: userId });
  
  if (error) {
    console.error('Error fetching user referral tier:', error);
    throw error;
  }
  
  return data.length > 0 ? data[0] as ReferralTier : null;
};

export const getUserReferralStats = async (userId: string): Promise<ReferralStats> => {
  const referrals = await getUserReferrals(userId);
  const rewards = await getUserReferralRewards(userId);
  const currentTier = await getUserReferralTier(userId) || {
    id: '',
    tier_name: 'Royal Messenger',
    min_referrals: 0,
    bonus_multiplier: 1.0,
    created_at: new Date().toISOString()
  };
  
  return {
    total_referrals: referrals.length,
    pending_referrals: referrals.filter(r => r.status === 'pending').length,
    completed_referrals: referrals.filter(r => r.status === 'completed' || r.status === 'rewarded').length,
    total_rewards: rewards.reduce((sum, reward) => sum + reward.reward_amount, 0),
    current_tier: currentTier
  };
};

export const claimReferral = async (referralCode: string, userId: string): Promise<boolean> => {
  // Find the referral
  const { data, error } = await supabase
    .from('referrals')
    .select('*')
    .eq('referral_code', referralCode)
    .single();
  
  if (error) {
    console.error('Error finding referral code:', error);
    throw error;
  }
  
  // Update the referral with the new user ID
  const { error: updateError } = await supabase
    .from('referrals')
    .update({
      referred_id: userId
    })
    .eq('id', data.id);
  
  if (updateError) {
    console.error('Error claiming referral:', updateError);
    throw updateError;
  }
  
  return true;
};
