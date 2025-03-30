
import { UserTier } from '@/contexts/auth/types';

/**
 * Get badge element for user tier
 * @param tier User tier
 * @returns Element or string representing the tier badge
 */
export const getTierBadge = (tier: UserTier): JSX.Element | string => {
  switch (tier) {
    case 'free':
      return 'Free';
    case 'bronze':
      return 'Bronze';
    case 'silver':
      return 'Silver';
    case 'gold':
      return 'Gold';
    case 'platinum':
      return 'Platinum';
    case 'pro':
      return 'Pro';
    default:
      return 'Free';
  }
};

/**
 * Get color for user tier
 * @param tier User tier
 * @returns CSS color class for the tier
 */
export const getTierColor = (tier: UserTier): string => {
  switch (tier) {
    case 'free':
      return 'text-white/70';
    case 'bronze':
      return 'text-amber-600';
    case 'silver':
      return 'text-gray-300';
    case 'gold':
      return 'text-royal-gold';
    case 'platinum':
      return 'text-blue-300';
    case 'pro':
      return 'text-royal-purple';
    default:
      return 'text-white/70';
  }
};

/**
 * Get background color for user tier
 * @param tier User tier
 * @returns CSS background color class for the tier
 */
export const getTierBgColor = (tier: UserTier): string => {
  switch (tier) {
    case 'free':
      return 'bg-gray-700';
    case 'bronze':
      return 'bg-amber-900';
    case 'silver':
      return 'bg-gray-600';
    case 'gold':
      return 'bg-royal-gold/20';
    case 'platinum':
      return 'bg-blue-900';
    case 'pro':
      return 'bg-royal-purple/20';
    default:
      return 'bg-gray-700';
  }
};
