
import { CosmeticRarity } from '@/types/cosmetics';

/**
 * Returns the CSS class for text color based on rarity
 */
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-yellow-400';
    case 'mythic': return 'text-pink-400';
    case 'unique': return 'text-orange-400';
    case 'royal': return 'text-royal-gold';
    default: return 'text-gray-300';
  }
};

/**
 * Returns the CSS class for background color based on rarity
 */
export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'bg-gray-700/50';
    case 'uncommon': return 'bg-green-900/50';
    case 'rare': return 'bg-blue-900/50';
    case 'epic': return 'bg-purple-900/50';
    case 'legendary': return 'bg-yellow-900/50';
    case 'mythic': return 'bg-pink-900/50';
    case 'unique': return 'bg-orange-900/50';
    case 'royal': return 'bg-royal-gold/20';
    default: return 'bg-gray-700/50';
  }
};

/**
 * Returns the CSS class for border color based on rarity
 */
export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'border-gray-500/50';
    case 'uncommon': return 'border-green-500/50';
    case 'rare': return 'border-blue-500/50';
    case 'epic': return 'border-purple-500/50';
    case 'legendary': return 'border-yellow-500/50';
    case 'mythic': return 'border-pink-500/50';
    case 'unique': return 'border-orange-500/50';
    case 'royal': return 'border-royal-gold/50';
    default: return 'border-gray-500/50';
  }
};

/**
 * Gets the probability of obtaining an item based on rarity
 */
export const getRarityProbability = (rarity: CosmeticRarity): number => {
  switch(rarity) {
    case 'common': return 0.50;
    case 'uncommon': return 0.25;
    case 'rare': return 0.15;
    case 'epic': return 0.07;
    case 'legendary': return 0.025;
    case 'mythic': return 0.005;
    case 'unique': return 0.001;
    case 'royal': return 0.0001;
    default: return 0;
  }
};
