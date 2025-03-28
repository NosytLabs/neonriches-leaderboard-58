
import { UserProfile } from '@/types/user';

/**
 * Updates user profile boosts by adding a new boost
 */
export const addProfileBoost = (
  user: UserProfile, 
  days: number = 1, 
  level: number = 1
): UserProfile['profileBoosts'] => {
  const boostId = `boost_${Date.now()}`;
  const boost = {
    id: boostId,
    effectId: `boost_level_${level}`,
    startTime: new Date().toISOString(),
    endTime: Date.now() + days * 24 * 60 * 60 * 1000, // Convert days to ms
    type: 'profile_boost',
    strength: level,
    appliedBy: user.id,
  };
  
  const currentBoosts = user.profileBoosts || [];
  return [...currentBoosts, boost];
};

/**
 * Updates user cosmetics by adding a new cosmetic item
 */
export const addCosmetic = (
  user: UserProfile,
  cosmeticId: string,
  category: string
): UserProfile['cosmetics'] => {
  const cosmetics = user.cosmetics || {
    borders: [],
    colors: [],
    fonts: [],
    emojis: [],
    titles: [],
    backgrounds: [],
    effects: [],
    badges: [],
    themes: [],
  };
  
  const categoryItems = cosmetics[category as keyof typeof cosmetics] || [];
  
  if (!Array.isArray(categoryItems)) {
    return cosmetics;
  }
  
  if (categoryItems.includes(cosmeticId)) {
    return cosmetics;
  }
  
  return {
    ...cosmetics,
    [category]: [...categoryItems, cosmeticId],
  };
};
