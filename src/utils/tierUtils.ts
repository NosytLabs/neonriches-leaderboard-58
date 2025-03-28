
import { UserTier } from '@/types/user';

/**
 * Get the badge color for a tier
 * @param tier The user tier
 * @returns CSS class for badge color
 */
export const getTierBadgeColor = (tier: UserTier): string => {
  switch (tier) {
    case 'basic': 
      return 'bg-slate-700 text-slate-100';
    case 'premium': 
      return 'bg-purple-700 text-purple-100';
    case 'royal': 
      return 'bg-amber-700 text-amber-100';
    case 'legendary': 
      return 'bg-red-700 text-red-100';
    case 'pro': 
      return 'bg-blue-700 text-blue-100';
    case 'free': 
    default:
      return 'bg-gray-700 text-gray-100';
  }
};

/**
 * Get the color scheme for a tier
 * @param tier The user tier
 * @returns CSS color class
 */
export const getTierTextColor = (tier: UserTier): string => {
  switch (tier) {
    case 'basic': 
      return 'text-slate-400';
    case 'premium': 
      return 'text-purple-400';
    case 'royal': 
      return 'text-amber-400';
    case 'legendary': 
      return 'text-red-400';
    case 'pro': 
      return 'text-blue-400';
    case 'free': 
    default:
      return 'text-gray-400';
  }
};

export default {
  getTierBadgeColor,
  getTierTextColor
};
