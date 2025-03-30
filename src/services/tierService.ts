
import { UserTier, TierDetails } from "@/types/tier";
import { tiers } from "@/data/tierData";

/**
 * Determines a user's tier based on their spending amount
 * @param spend - The user's total spending amount
 * @returns The appropriate tier for the user
 */
export const getUserTier = (spend: number): UserTier => {
  const tier = tiers.find(tier => {
    return spend >= tier.minSpend && (tier.maxSpend === null || spend <= tier.maxSpend);
  });
  
  return tier ? tier.name : 'bronze';
};

/**
 * Retrieves the detailed information for a specific tier
 * @param tierName - The name of the tier to retrieve
 * @returns The tier details or bronze tier details as fallback
 */
export const getTierDetails = (tierName: UserTier): TierDetails => {
  const tier = tiers.find(t => t.name === tierName);
  return tier || tiers[0]; // Default to bronze if tier not found
};

/**
 * Gets the details of the next tier after the user's current tier
 * @param currentSpend - The user's current spending amount
 * @returns The next tier details or null if already at highest tier
 */
export const getNextTierDetails = (currentSpend: number): TierDetails | null => {
  const currentTier = getUserTier(currentSpend);
  const currentTierIndex = tiers.findIndex(tier => tier.name === currentTier);
  
  if (currentTierIndex >= tiers.length - 1) {
    return null; // Already at the highest tier
  }
  
  return tiers[currentTierIndex + 1];
};

/**
 * Calculates the user's progress towards the next tier
 * @param currentSpend - The user's current spending amount
 * @returns A percentage representing progress to the next tier
 */
export const getProgressToNextTier = (currentSpend: number): number => {
  const currentTier = getUserTier(currentSpend);
  const currentTierDetails = getTierDetails(currentTier);
  const nextTierDetails = getNextTierDetails(currentSpend);
  
  if (!nextTierDetails) {
    return 100; // Already at max tier
  }
  
  const rangeSize = nextTierDetails.minSpend - currentTierDetails.minSpend;
  const progress = ((currentSpend - currentTierDetails.minSpend) / rangeSize) * 100;
  
  return Math.min(Math.max(0, progress), 100); // Clamp between 0-100
};

/**
 * Gets the amount needed to reach the next tier
 * @param currentSpend - The user's current spending amount
 * @returns The amount needed or 0 if at max tier
 */
export const getAmountToNextTier = (currentSpend: number): number => {
  const nextTierDetails = getNextTierDetails(currentSpend);
  
  if (!nextTierDetails) {
    return 0; // Already at max tier
  }
  
  return Math.max(0, nextTierDetails.minSpend - currentSpend);
};

/**
 * Gets all tiers for displaying in UI components
 * @returns Array of all tier details
 */
export const getAllTiers = (): TierDetails[] => {
  return [...tiers];
};
