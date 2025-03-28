
/**
 * Get the appropriate badge color for a user tier
 * @param tier User tier
 * @returns CSS color class string
 */
export const getTierBadgeColor = (tier: string): string => {
  switch (tier) {
    case 'basic':
      return 'bg-white/10 text-white/80';
    case 'premium':
      return 'bg-royal-gold/10 text-royal-gold';
    case 'royal':
      return 'bg-purple-500/20 text-purple-300';
    case 'legendary':
      return 'bg-gradient-to-r from-red-500/20 to-amber-500/20 text-amber-300';
    case 'common':
      return 'bg-white/10 text-white/80';
    case 'uncommon':
      return 'bg-green-500/20 text-green-400';
    case 'rare':
      return 'bg-blue-500/20 text-blue-400';
    case 'epic':
      return 'bg-purple-500/20 text-purple-300';
    default:
      return 'bg-white/10 text-white/80';
  }
};

/**
 * Get a display name for a specific tier
 * @param tier User tier
 * @returns Formatted tier name
 */
export const getTierName = (tier: string): string => {
  switch (tier) {
    case 'basic':
      return 'Commoner';
    case 'premium':
      return 'Noble';
    case 'royal':
      return 'Royal';
    case 'legendary':
      return 'Legendary';
    case 'common':
      return 'Commoner';
    case 'uncommon':
      return 'Squire';
    case 'rare':
      return 'Knight';
    case 'epic':
      return 'Duke/Duchess';
    default:
      return 'Commoner';
  }
};

export default {
  getTierBadgeColor,
  getTierName
};
