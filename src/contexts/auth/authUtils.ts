
import { User, UserProfile, ProfileBoost, UserCosmetics } from '@/types/user';

/**
 * Adds a profile boost with a specific duration in days
 * @param user User to update
 * @param days Duration in days
 * @param level Boost level (1-3)
 * @returns Updated profileBoosts array
 */
export const addProfileBoostWithDays = (
  user: User, 
  days: number = 1, 
  level: number = 1
): ProfileBoost[] => {
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + days);
  
  const newBoost: ProfileBoost = {
    id: `boost-${Date.now()}`,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    level,
    type: 'profile_boost',
    effectId: `boost-effect-${level}`,
  };
  
  const currentBoosts = user.profileBoosts || [];
  return [...currentBoosts, newBoost];
};

/**
 * Adds a cosmetic to the user's collection in the specified category
 * @param user User to update
 * @param cosmeticId ID of the cosmetic to add
 * @param category Category of the cosmetic (borders, colors, etc.)
 * @returns Updated UserCosmetics object
 */
export const addCosmeticByCategoryString = (
  user: User, 
  cosmeticId: string, 
  category: string
): UserCosmetics => {
  const currentCosmetics = user.cosmetics || {
    borders: [],
    colors: [],
    fonts: [],
    emojis: [],
    titles: [],
    backgrounds: [],
    effects: [],
    badges: [],
    themes: []
  };
  
  // Check if category exists in cosmetics
  if (category in currentCosmetics) {
    const updatedCosmetics = { ...currentCosmetics };
    const categoryItems = updatedCosmetics[category as keyof UserCosmetics] as string[];
    
    if (!categoryItems.includes(cosmeticId)) {
      updatedCosmetics[category as keyof UserCosmetics] = [...categoryItems, cosmeticId] as any;
    }
    
    return updatedCosmetics;
  }
  
  return currentCosmetics;
};

/**
 * Activates a specific cosmetic
 * @param user User to update
 * @param cosmeticId ID of the cosmetic to activate
 * @param category Category of the cosmetic (borders, colors, etc.)
 * @returns Updated UserCosmetics object
 */
export const activateCosmetic = (
  user: User, 
  cosmeticId: string, 
  category: 'border' | 'color' | 'font'
): UserCosmetics => {
  const currentCosmetics = user.cosmetics || {
    borders: [],
    colors: [],
    fonts: [],
    emojis: [],
    titles: [],
    backgrounds: [],
    effects: [],
    badges: [],
    themes: []
  };
  
  const mappings = {
    border: 'activeBorder',
    color: 'activeColor',
    font: 'activeFont'
  };
  
  const propertyToUpdate = mappings[category];
  
  if (propertyToUpdate) {
    return {
      ...currentCosmetics,
      [propertyToUpdate]: cosmeticId
    };
  }
  
  return currentCosmetics;
};

/**
 * Creates an empty user profile with default values
 * @returns Default user profile
 */
export const createEmptyUserProfile = (): UserProfile => {
  return {
    id: `user-${Date.now()}`,
    username: 'anonymous',
    email: 'anonymous@example.com',
    createdAt: new Date().toISOString(),
    displayName: 'Anonymous',
    walletBalance: 0,
    amountSpent: 0,
    spentAmount: 0,
    team: null,
    rank: 999999,
    joinDate: new Date().toISOString(),
    joinedAt: new Date().toISOString(),
    profileViews: 0,
    profileClicks: 0,
    followers: 0,
    following: 0,
    spendStreak: 0,
    profileBoosts: [],
    cosmetics: {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: []
    },
    tier: 'basic'
  };
};
