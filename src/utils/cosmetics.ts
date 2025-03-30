
import { CosmeticRarity } from '@/types/cosmetics';

/**
 * Get color based on rarity
 */
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'text-gray-300';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    case 'royal':
      return 'text-royal-crimson';
    default:
      return 'text-white';
  }
};

/**
 * Get background color based on rarity
 */
export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-300/10';
    case 'uncommon':
      return 'bg-green-400/10';
    case 'rare':
      return 'bg-blue-400/10';
    case 'epic':
      return 'bg-purple-400/10';
    case 'legendary':
      return 'bg-royal-gold/10';
    case 'royal':
      return 'bg-royal-crimson/10';
    default:
      return 'bg-white/10';
  }
};

/**
 * Get border color based on rarity
 */
export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-gray-300/30';
    case 'uncommon':
      return 'border-green-400/30';
    case 'rare':
      return 'border-blue-400/30';
    case 'epic':
      return 'border-purple-400/30';
    case 'legendary':
      return 'border-royal-gold/30';
    case 'royal':
      return 'border-royal-crimson/30';
    default:
      return 'border-white/30';
  }
};
