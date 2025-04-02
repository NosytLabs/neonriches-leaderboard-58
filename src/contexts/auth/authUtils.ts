
import { UserProfile } from '@/types/user-consolidated';
import { ProfileBoost } from '@/types/boost';
import { UserCosmetics } from '@/types/cosmetics';
import { TeamColor } from '@/types/team';

/**
 * Add a profile boost with duration in days
 * @param user The user to add the boost to
 * @param boostType The type of boost to add
 * @param durationDays The duration in days
 * @returns The updated user profile
 */
export const addProfileBoostWithDays = (
  user: UserProfile,
  boostType: string,
  durationDays: number = 30
): UserProfile => {
  if (!user) return user;

  const now = new Date();
  const endDate = new Date();
  endDate.setDate(now.getDate() + durationDays);

  const newBoost: ProfileBoost = {
    id: `boost-${boostType}-${Date.now()}`,
    type: boostType,
    startDate: now.toISOString(),
    endDate: endDate.toISOString(),
    level: 1,
    isActive: true,
    strength: 1,
    appliedBy: 'system',
    // Added fields for compatibility
    userId: user.id,
    effectId: boostType,
    startTime: now.toISOString(),
    endTime: endDate.toISOString(),
    active: true
  };

  const existingBoosts = user.profileBoosts || [];
  
  return {
    ...user,
    profileBoosts: [...existingBoosts, newBoost]
  };
};

/**
 * Add a cosmetic item by category and ID
 * @param user The user to add the cosmetic to
 * @param category The cosmetic category
 * @param itemId The cosmetic item ID
 * @returns The updated user profile
 */
export const addCosmeticByCategoryString = (
  user: UserProfile,
  category: string,
  itemId: string
): UserProfile => {
  if (!user) return user;

  // Initialize cosmetics if it doesn't exist
  const userCosmetics: UserCosmetics = user.cosmetics || {
    border: [],
    color: [],
    font: [],
    emoji: [],
    title: [],
    background: [],
    effect: [],
    badge: [],
    theme: []
  };
  
  // Ensure the category exists
  if (!userCosmetics[category]) {
    userCosmetics[category] = [];
  }
  
  // Only add if it doesn't already exist
  if (!userCosmetics[category].includes(itemId)) {
    userCosmetics[category] = [...userCosmetics[category], itemId];
  }
  
  return {
    ...user,
    cosmetics: userCosmetics
  };
};

/**
 * Set the user's team
 * @param user The user to update
 * @param team The team to set
 * @returns The updated user profile
 */
export const setUserTeam = (
  user: UserProfile,
  team: TeamColor
): UserProfile => {
  if (!user) return user;
  
  return {
    ...user,
    team
  };
};

export default {
  addProfileBoostWithDays,
  addCosmeticByCategoryString,
  setUserTeam
};
