
import { UserTier } from '@/types/user-consolidated';

/**
 * Get the icon name for a user tier
 */
export const getTierIcon = (tier: UserTier): string => {
  switch (tier) {
    case 'free':
      return 'User';
    case 'basic':
      return 'Badge';
    case 'premium':
      return 'Crown';
    case 'royal':
      return 'Crown';
    case 'legendary':
      return 'Award';
    case 'founder':
      return 'Star';
    case 'noble':
      return 'Shield';
    case 'knight':
      return 'Shield';
    case 'baron':
      return 'Crown';
    case 'viscount':
      return 'Crown';
    case 'earl':
      return 'Crown';
    case 'duke':
      return 'Crown';
    case 'prince':
      return 'Crown';
    case 'king':
      return 'Crown';
    case 'emperor':
      return 'Globe';
    case 'whale':
      return 'TrendingUp';
    default:
      return 'User';
  }
};

/**
 * Get tier color class
 */
export const getTierColorClass = (tier: UserTier): string => {
  switch (tier) {
    case 'free':
      return 'text-gray-400';
    case 'basic':
      return 'text-blue-400';
    case 'premium':
      return 'text-purple-400';
    case 'royal':
      return 'text-royal-gold';
    case 'legendary':
      return 'text-amber-500';
    case 'founder':
      return 'text-green-500';
    case 'noble':
      return 'text-indigo-400';
    case 'knight':
      return 'text-cyan-400';
    case 'baron':
      return 'text-pink-400';
    case 'viscount':
      return 'text-rose-400';
    case 'earl':
      return 'text-amber-400';
    case 'duke':
      return 'text-emerald-400';
    case 'prince':
      return 'text-violet-400';
    case 'king':
      return 'text-yellow-500';
    case 'emperor':
      return 'text-royal-gold';
    case 'whale':
      return 'text-blue-500';
    default:
      return 'text-gray-400';
  }
};

/**
 * Get next tier for a user
 */
export const getNextTier = (currentTier: UserTier): UserTier | null => {
  const tierProgression: UserTier[] = [
    'free',
    'basic',
    'premium',
    'royal',
    'legendary',
    'noble',
    'knight',
    'baron',
    'viscount',
    'earl',
    'duke',
    'prince',
    'king',
    'emperor'
  ];
  
  const currentIndex = tierProgression.indexOf(currentTier);
  
  if (currentIndex === -1 || currentIndex === tierProgression.length - 1) {
    return null;
  }
  
  return tierProgression[currentIndex + 1];
};

/**
 * Get the cost to upgrade to the next tier
 */
export const getUpgradeCost = (currentTier: UserTier): number => {
  const tierCosts: Record<UserTier, number> = {
    'free': 9.99,
    'basic': 19.99,
    'premium': 49.99,
    'royal': 99.99,
    'legendary': 199.99,
    'founder': 0,
    'noble': 299.99,
    'knight': 499.99,
    'baron': 799.99,
    'viscount': 1299.99,
    'earl': 1999.99,
    'duke': 2999.99,
    'prince': 4999.99,
    'king': 9999.99,
    'emperor': 0,
    'whale': 0
  };
  
  const nextTier = getNextTier(currentTier);
  if (!nextTier) return 0;
  
  return tierCosts[nextTier];
};

/**
 * Format tier name for display
 */
export const formatTierName = (tier: UserTier): string => {
  // Capitalize first letter and replace hyphens with spaces
  return tier.charAt(0).toUpperCase() + tier.slice(1).replace(/-/g, ' ');
};
