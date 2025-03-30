
import { UserTier, TierDetails } from '@/types/tier';
import { tiers } from '@/data/tierData';
import { memoize } from '@/utils/cacheUtils';

/**
 * Get all available tiers
 * @returns Array of tier details
 */
export const getAllTiers = memoize((): TierDetails[] => {
  return [...tiers];
}, { maxSize: 1 });

/**
 * Get user tier based on spend amount
 * @param amount - The total amount spent by user
 * @returns User tier
 */
export const getUserTier = memoize((amount: number): UserTier => {
  // Handle edge cases
  if (amount === undefined || amount === null) return 'bronze';
  
  // Find the tier based on the spend amount
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (amount >= tiers[i].minSpend) {
      return tiers[i].name;
    }
  }
  
  // Default to bronze if no tier matches (should not happen)
  return 'bronze';
}, { maxSize: 100 });

/**
 * Get tier details for a specific tier
 * @param tier - The tier to get details for
 * @returns Tier details object
 */
export const getTierDetails = memoize((tier: UserTier): TierDetails => {
  const tierDetails = tiers.find(t => t.name === tier);
  
  if (!tierDetails) {
    console.warn(`Tier "${tier}" not found, defaulting to bronze`);
    return tiers[0]; // Default to bronze
  }
  
  return tierDetails;
}, { maxSize: 10 });

/**
 * Get details of the next tier based on spend amount
 * @param amount - The total amount spent by user
 * @returns Next tier details or null if user is at max tier
 */
export const getNextTierDetails = memoize((amount: number): TierDetails | null => {
  // Get all tiers in ascending order by minSpend
  const sortedTiers = [...tiers].sort((a, b) => a.minSpend - b.minSpend);
  
  // Find the next tier
  for (const tier of sortedTiers) {
    if (tier.minSpend > amount) {
      return tier;
    }
  }
  
  // User is at max tier
  return null;
}, { maxSize: 100 });

/**
 * Calculate progress to next tier as percentage
 * @param amount - The total amount spent by user
 * @returns Progress percentage (0-100)
 */
export const getProgressToNextTier = memoize((amount: number): number => {
  const currentTier = getUserTier(amount);
  const currentTierDetails = getTierDetails(currentTier);
  const nextTierDetails = getNextTierDetails(amount);
  
  // If at max tier, return 100% progress
  if (!nextTierDetails) {
    return 100;
  }
  
  // Calculate progress percentage
  const tierRange = nextTierDetails.minSpend - currentTierDetails.minSpend;
  const userProgress = amount - currentTierDetails.minSpend;
  
  const progressPercentage = (userProgress / tierRange) * 100;
  
  // Ensure progress is between 0 and 100
  return Math.max(0, Math.min(100, progressPercentage));
}, { maxSize: 100 });

/**
 * Calculate amount needed to reach next tier
 * @param amount - The total amount spent by user
 * @returns Amount needed in currency units
 */
export const getAmountToNextTier = memoize((amount: number): number => {
  const nextTierDetails = getNextTierDetails(amount);
  
  // If at max tier, return 0
  if (!nextTierDetails) {
    return 0;
  }
  
  // Calculate amount needed
  return nextTierDetails.minSpend - amount;
}, { maxSize: 100 });

/**
 * Check if a user is eligible for a tier upgrade
 * @param currentTier - Current user tier
 * @param newAmount - New total spend amount
 * @returns New tier if eligible for upgrade, or null
 */
export const checkTierUpgrade = memoize(
  (currentTier: UserTier, newAmount: number): UserTier | null => {
    const newTier = getUserTier(newAmount);
    
    if (newTier !== currentTier) {
      // Tier changed
      const currentIndex = tiers.findIndex(t => t.name === currentTier);
      const newIndex = tiers.findIndex(t => t.name === newTier);
      
      // Only return if it's an upgrade (higher tier)
      if (newIndex > currentIndex) {
        return newTier;
      }
    }
    
    return null;
  },
  { maxSize: 100 }
);

/**
 * Get tier benefits summary
 * @param tier - The tier to get benefits for
 * @returns Array of benefit strings
 */
export const getTierBenefits = memoize((tier: UserTier): string[] => {
  const tierDetails = getTierDetails(tier);
  return tierDetails.benefits;
}, { maxSize: 10 });

/**
 * Compare two tiers to determine which is higher
 * @param tierA - First tier to compare
 * @param tierB - Second tier to compare
 * @returns 1 if tierA is higher, -1 if tierB is higher, 0 if equal
 */
export const compareTiers = memoize((tierA: UserTier, tierB: UserTier): number => {
  const tierADetails = getTierDetails(tierA);
  const tierBDetails = getTierDetails(tierB);
  
  if (tierADetails.minSpend > tierBDetails.minSpend) return 1;
  if (tierADetails.minSpend < tierBDetails.minSpend) return -1;
  return 0;
}, { maxSize: 25 });

/**
 * Get available tier upgrades for a user
 * @param currentSpend - Current user spend amount
 * @returns Array of possible tier upgrades with cost
 */
export const getAvailableTierUpgrades = memoize((currentSpend: number): Array<{
  tier: UserTier;
  name: string;
  cost: number;
  benefits: string[];
}> => {
  const currentTier = getUserTier(currentSpend);
  const currentIndex = tiers.findIndex(t => t.name === currentTier);
  
  // Get all tiers higher than current
  return tiers
    .filter((_, index) => index > currentIndex)
    .map(tier => ({
      tier: tier.name,
      name: tier.label,
      cost: tier.minSpend - currentSpend,
      benefits: tier.benefits
    }));
}, { maxSize: 50 });
