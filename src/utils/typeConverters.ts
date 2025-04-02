
import { TeamColor } from '@/types/mockery-types';

/**
 * Convert a string to a valid TeamColor
 * @param color The string to convert
 * @returns A valid TeamColor or 'none' if the input is invalid
 */
export const toTeamColor = (color: string | undefined | null): TeamColor => {
  if (!color) return 'none';
  
  const validColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 
    'none', 'neutral', 'silver', 'bronze', 'crimson'
  ];
  
  const normalizedColor = color.toLowerCase() as TeamColor;
  
  if (validColors.includes(normalizedColor)) {
    return normalizedColor;
  }
  
  return 'none';
};

/**
 * Convert a string to a valid UserTier
 * @param tier The string to convert
 * @returns A valid UserTier or 'basic' if the input is invalid
 */
export const toUserTier = (tier: string | undefined | null): string => {
  if (!tier) return 'basic';
  
  const validTiers = [
    'free', 'basic', 'premium', 'elite', 'royal', 
    'founder', 'pro', 'gold', 'silver', 'bronze',
    'platinum', 'diamond', 'vip', 'whale', 'shark',
    'dolphin', 'noble', 'standard', 'legendary'
  ];
  
  const normalizedTier = tier.toLowerCase();
  
  if (validTiers.includes(normalizedTier)) {
    return normalizedTier;
  }
  
  return 'basic';
};

/**
 * Convert a string to a valid CosmeticType
 * @param type The string to convert
 * @returns A valid CosmeticType or 'cosmetic' if the input is invalid
 */
export const toCosmeticType = (type: string | undefined | null): string => {
  if (!type) return 'cosmetic';
  
  const validTypes = [
    'border', 'color', 'font', 'emoji', 'title',
    'badge', 'background', 'effect', 'theme', 
    'profile', 'appearance', 'interaction', 'animation',
    'premium', 'standard', 'exclusive', 'aura', 
    'cosmetic', 'feature'
  ];
  
  const normalizedType = type.toLowerCase();
  
  if (validTypes.includes(normalizedType)) {
    return normalizedType;
  }
  
  return 'cosmetic';
};

export default {
  toTeamColor,
  toUserTier,
  toCosmeticType
};
