
export interface Referral {
  id: string;
  referrer_id: string;
  referred_id: string;
  referral_code: string;
  status: 'pending' | 'completed' | 'rewarded';
  created_at: string;
  completed_at: string | null;
  first_deposit_amount: number | null;
}

export interface ReferralReward {
  id: string;
  referrer_id: string;
  referred_id: string;
  referral_id: string;
  reward_type: string;
  reward_amount: number;
  created_at: string;
}

export interface ReferralTier {
  id: string;
  tier_name: string;
  min_referrals: number;
  bonus_multiplier: number;
  created_at: string;
}

export interface ReferralStats {
  total_referrals: number;
  pending_referrals: number;
  completed_referrals: number;
  total_rewards: number;
  current_tier: ReferralTier;
}
