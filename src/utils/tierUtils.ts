
import { UserTier } from '@/types/user';

// Get tier display name
export const getTierName = (tier: UserTier): string => {
  switch (tier) {
    case 'free':
      return 'Free';
    case 'basic':
      return 'Basic';
    case 'royal':
      return 'Royal';
    case 'premium':
      return 'Premium';
    case 'pro':
      return 'Pro';
    case 'founder':
      return 'Founder';
    case 'whale':
      return 'Whale';
    case 'shark':
      return 'Shark';
    case 'dolphin':
      return 'Dolphin';
    default:
      return 'Unknown';
  }
};

// Get tier badge component
export const getTierBadge = (tier: UserTier): JSX.Element => {
  const tierColors: Record<UserTier, string> = {
    'free': 'bg-gray-700 text-gray-300',
    'basic': 'bg-gray-600 text-gray-200',
    'royal': 'bg-royal-gold/20 text-royal-gold',
    'premium': 'bg-purple-800/30 text-purple-300',
    'pro': 'bg-royal-crimson/20 text-royal-crimson',
    'founder': 'bg-royal-navy/20 text-royal-navy',
    'whale': 'bg-blue-900/30 text-blue-300',
    'shark': 'bg-blue-800/30 text-blue-300',
    'dolphin': 'bg-blue-700/30 text-blue-300'
  };
  
  const className = `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${tierColors[tier] || 'bg-gray-700 text-gray-300'}`;
  
  return (
    <span className={className}>
      {getTierName(tier)}
    </span>
  );
};

// Determine if a tier has a certain feature
export const tierHasFeature = (tier: UserTier, featureKey: string): boolean => {
  const tierFeatures: Record<UserTier, string[]> = {
    'free': ['basic_profile', 'leaderboard_view'],
    'basic': ['basic_profile', 'leaderboard_view', 'chat_access'],
    'royal': ['basic_profile', 'leaderboard_view', 'chat_access', 'profile_customization', 'no_ads'],
    'premium': ['basic_profile', 'leaderboard_view', 'chat_access', 'profile_customization', 'no_ads', 'priority_support'],
    'pro': ['basic_profile', 'leaderboard_view', 'chat_access', 'profile_customization', 'no_ads', 'priority_support', 'exclusive_cosmetics'],
    'founder': ['basic_profile', 'leaderboard_view', 'chat_access', 'profile_customization', 'no_ads', 'priority_support', 'exclusive_cosmetics', 'founder_badge', 'council_access'],
    'whale': ['basic_profile', 'leaderboard_view', 'chat_access', 'profile_customization', 'no_ads', 'priority_support', 'exclusive_cosmetics', 'whale_badge', 'council_access', 'private_chat'],
    'shark': ['basic_profile', 'leaderboard_view', 'chat_access', 'profile_customization', 'no_ads', 'priority_support', 'exclusive_cosmetics', 'council_access'],
    'dolphin': ['basic_profile', 'leaderboard_view', 'chat_access', 'profile_customization', 'no_ads', 'priority_support']
  };
  
  return tierFeatures[tier]?.includes(featureKey) || false;
};

// Compare tiers
export const compareTiers = (tierA: UserTier, tierB: UserTier): number => {
  const tierValues: Record<UserTier, number> = {
    'free': 0,
    'basic': 1,
    'royal': 2,
    'premium': 3,
    'pro': 4,
    'dolphin': 5,
    'shark': 6,
    'whale': 7,
    'founder': 8
  };
  
  return tierValues[tierA] - tierValues[tierB];
};

// Get tier requirement text
export const getTierRequirement = (tier: UserTier): string => {
  switch (tier) {
    case 'royal':
      return 'Spend $50+ to unlock';
    case 'premium':
      return 'Spend $100+ to unlock';
    case 'pro':
      return 'Spend $250+ to unlock';
    case 'dolphin':
      return 'Spend $500+ to unlock';
    case 'shark':
      return 'Spend $1,000+ to unlock';
    case 'whale':
      return 'Spend $5,000+ to unlock';
    case 'founder':
      return 'Exclusive early supporter tier';
    default:
      return '';
  }
};
