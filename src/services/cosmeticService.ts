
import { CosmeticItem, CosmeticRarity } from '@/types/cosmetics';
import { UserProfile } from '@/types/user';
import { allCosmetics, getCosmeticsByCategory, getCosmeticById } from '@/data/cosmeticsData';

/**
 * Get all cosmetics that a user owns
 */
export const getUserCosmetics = (user: UserProfile | null): CosmeticItem[] => {
  if (!user || !user.cosmetics) return [];
  
  const userCosmeticIds: string[] = [];
  
  // Collect all cosmetic IDs from user profile
  Object.keys(user.cosmetics).forEach(category => {
    if (Array.isArray(user.cosmetics?.[category as keyof typeof user.cosmetics])) {
      const items = user.cosmetics?.[category as keyof typeof user.cosmetics];
      if (Array.isArray(items)) {
        userCosmeticIds.push(...items);
      }
    }
  });
  
  // Get the actual cosmetic items by ID
  return allCosmetics.filter(item => userCosmeticIds.includes(item.id));
};

/**
 * Check if a user owns a cosmetic
 */
export const userOwnsCosmetic = (user: UserProfile | null, cosmeticId: string): boolean => {
  if (!user || !user.cosmetics) return false;
  
  // Check all cosmetic categories
  for (const category of Object.keys(user.cosmetics)) {
    const items = user.cosmetics[category as keyof typeof user.cosmetics];
    if (Array.isArray(items) && items.includes(cosmeticId)) {
      return true;
    }
  }
  
  return false;
};

/**
 * Award a random cosmetic to a user based on wish amount
 */
export const awardRandomCosmetic = (
  user: UserProfile | null, 
  amount: number,
  preferredCategory?: string
): { cosmeticItem: CosmeticItem | null, rarity: CosmeticRarity } => {
  if (!user) return { cosmeticItem: null, rarity: 'common' };
  
  // Calculate rarity chances based on amount
  const rarityChances = {
    legendary: Math.min(2 + amount * 0.5, 15), // 2-15%
    epic: Math.min(8 + amount * 0.8, 25),      // 8-25%
    rare: Math.min(20 + amount * 0.5, 35),     // 20-35%
    uncommon: Math.min(30 + amount * 0.2, 40), // 30-40%
    common: 50 - amount * 0.5                  // 50-40%
  };
  
  // Determine rarity based on random roll
  const roll = Math.random() * 100;
  let selectedRarity: CosmeticRarity = 'common';
  let cumulativeChance = 0;
  
  for (const [rarity, chance] of Object.entries(rarityChances)) {
    cumulativeChance += chance;
    if (roll <= cumulativeChance) {
      selectedRarity = rarity as CosmeticRarity;
      break;
    }
  }
  
  // Get all cosmetics of the determined rarity
  let eligibleCosmetics = allCosmetics.filter(item => item.rarity === selectedRarity);
  
  // Apply category filter if specified
  if (preferredCategory) {
    const categoryCosmetics = eligibleCosmetics.filter(item => item.category === preferredCategory);
    // Only use preferred category if it has cosmetics of the selected rarity
    if (categoryCosmetics.length > 0) {
      eligibleCosmetics = categoryCosmetics;
    }
  }
  
  // Filter out cosmetics the user already owns
  const userCosmetics = getUserCosmetics(user);
  const userCosmeticIds = userCosmetics.map(item => item.id);
  const newCosmetics = eligibleCosmetics.filter(item => !userCosmeticIds.includes(item.id));
  
  // If user already owns all cosmetics of this rarity, return null
  if (newCosmetics.length === 0) {
    return { cosmeticItem: null, rarity: selectedRarity };
  }
  
  // Select a random cosmetic from the filtered list
  const randomIndex = Math.floor(Math.random() * newCosmetics.length);
  return { cosmeticItem: newCosmetics[randomIndex], rarity: selectedRarity };
};

/**
 * Get user's active cosmetics
 */
export const getUserActiveCosmetics = (user: UserProfile | null): Record<string, CosmeticItem | null> => {
  if (!user || !user.cosmetics) {
    return {
      border: null,
      color: null,
      font: null,
      emoji: null,
      theme: null,
      badge: null,
      title: null
    };
  }
  
  return {
    border: user.cosmetics.activeBorder ? getCosmeticById(user.cosmetics.activeBorder) || null : null,
    color: user.cosmetics.activeColor ? getCosmeticById(user.cosmetics.activeColor) || null : null,
    font: user.cosmetics.activeFont ? getCosmeticById(user.cosmetics.activeFont) || null : null,
    emoji: user.cosmetics.activeEmoji ? getCosmeticById(user.cosmetics.activeEmoji) || null : null,
    theme: user.cosmetics.activeTheme ? getCosmeticById(user.cosmetics.activeTheme) || null : null,
    badge: user.cosmetics.activeBadge ? getCosmeticById(user.cosmetics.activeBadge) || null : null,
    title: user.activeTitle ? getCosmeticById(user.activeTitle) || null : null
  };
};

/**
 * Get CSS classes for user's active cosmetics
 */
export const getUserCosmeticClasses = (user: UserProfile | null): string => {
  if (!user || !user.cosmetics) return '';
  
  const activeCosmetics = getUserActiveCosmetics(user);
  const classes: string[] = [];
  
  if (activeCosmetics.border && activeCosmetics.border.cssClass) {
    classes.push(activeCosmetics.border.cssClass);
  }
  
  if (activeCosmetics.color && activeCosmetics.color.cssClass) {
    classes.push(activeCosmetics.color.cssClass);
  }
  
  if (activeCosmetics.font && activeCosmetics.font.cssClass) {
    classes.push(activeCosmetics.font.cssClass);
  }
  
  if (activeCosmetics.theme && activeCosmetics.theme.cssClass) {
    classes.push(activeCosmetics.theme.cssClass);
  }
  
  return classes.join(' ');
};
