
import { CosmeticRarity, CosmeticCategory } from '@/types/cosmetics';

/**
 * Get the color class for a specific rarity
 */
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary':
      return 'text-orange-400';
    case 'epic':
      return 'text-purple-400';
    case 'rare':
      return 'text-blue-400';
    case 'uncommon':
      return 'text-green-400';
    case 'common':
    default:
      return 'text-gray-400';
  }
};

/**
 * Get the background color class for a specific rarity
 */
export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary':
      return 'bg-orange-400/10';
    case 'epic':
      return 'bg-purple-400/10';
    case 'rare':
      return 'bg-blue-400/10';
    case 'uncommon':
      return 'bg-green-400/10';
    case 'common':
    default:
      return 'bg-gray-400/10';
  }
};

/**
 * Get the border color class for a specific rarity
 */
export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary':
      return 'border-orange-400/20';
    case 'epic':
      return 'border-purple-400/20';
    case 'rare':
      return 'border-blue-400/20';
    case 'uncommon':
      return 'border-green-400/20';
    case 'common':
    default:
      return 'border-gray-400/20';
  }
};

/**
 * Convert a cosmetic category to display name
 */
export const getCategoryDisplayName = (category: CosmeticCategory): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

/**
 * Get appropriate CSS class for a cosmetic type
 */
export const getCosmeticClassForType = (type: CosmeticCategory, value: string): string => {
  switch (type) {
    case 'border':
      return `border-2 border-${value}`;
    case 'color':
      return `text-${value}`;
    case 'background':
      return `bg-${value}`;
    case 'font':
      return `font-${value}`;
    default:
      return '';
  }
};

/**
 * Check if a cosmetic is unlocked for the user
 */
export const isCosmeticUnlocked = (
  cosmeticId: string, 
  cosmeticType: CosmeticCategory, 
  userCosmetics: Record<string, any>
): boolean => {
  const unlockedKey = `unlocked${cosmeticType.charAt(0).toUpperCase() + cosmeticType.slice(1)}s`;
  const legacyKey = `${cosmeticType}s`;
  
  return (
    (Array.isArray(userCosmetics[unlockedKey]) && userCosmetics[unlockedKey].includes(cosmeticId)) ||
    (Array.isArray(userCosmetics[legacyKey]) && userCosmetics[legacyKey].includes(cosmeticId))
  );
};

export default {
  getRarityColor,
  getRarityBgColor,
  getRarityBorderColor,
  getCategoryDisplayName,
  getCosmeticClassForType,
  isCosmeticUnlocked
};
