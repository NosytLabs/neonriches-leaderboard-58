
import { MockeryAction, MockeryTier } from "@/types/mockery-types";
import { UserTier } from "@/types/user";

/**
 * Get the base price for a mockery action
 */
export const getShameBasePrice = (action: MockeryAction): number => {
  const basePrices: Record<MockeryAction, number> = {
    tomatoes: 5,
    eggs: 10,
    putridEggs: 15,
    crown: 25,
    stocks: 30,
    jester: 35,
    courtJester: 40,
    shame: 50,
    silence: 75,
    smokeBomb: 20,
    protection: 100,
    taunt: 15,
    mock: 25,
    challenge: 50,
    joust: 75,
    duel: 100
  };

  return basePrices[action] || 10;
};

/**
 * Get the discounted price for a user based on their tier and the shame action
 */
export const getDiscountedShamePrice = (action: MockeryAction, tier: UserTier): number => {
  const basePrice = getShameBasePrice(action);
  
  // Apply tier-based discount
  const tierDiscount = getTierDiscount(tier);
  const discountedPrice = basePrice * (1 - tierDiscount);
  
  // Ensure the price is never below 1
  return Math.max(1, Math.round(discountedPrice));
};

/**
 * Get the discount percentage based on user tier (0-1)
 */
export const getTierDiscount = (tier: string): number => {
  const tierDiscounts: Partial<Record<string, number>> = {
    'basic': 0,
    'standard': 0.05,
    'pro': 0.1,
    'premium': 0.15,
    'royal': 0.2,
    'founder': 0.25,
    'legendary': 0.3
  };

  return tierDiscounts[tier] || 0;
};

/**
 * Check if the user can afford the shame action
 */
export const canAffordShame = (
  action: MockeryAction,
  walletBalance: number,
  userTier: UserTier
): boolean => {
  const price = getDiscountedShamePrice(action, userTier);
  return walletBalance >= price;
};

/**
 * Get recommended shame actions based on budget
 */
export const getRecommendedShameActions = (
  budget: number,
  userTier: UserTier
): MockeryAction[] => {
  const allActions: MockeryAction[] = [
    'tomatoes', 'eggs', 'putridEggs', 'crown', 'stocks',
    'jester', 'courtJester', 'shame', 'silence', 'smokeBomb',
    'protection', 'taunt', 'mock', 'challenge', 'joust', 'duel'
  ];

  return allActions.filter(action => {
    const price = getDiscountedShamePrice(action, userTier);
    return price <= budget;
  });
};

/**
 * Get tier-based premium shame actions
 */
export const getPremiumShameActions = (userTier: UserTier): MockeryAction[] => {
  const tierActionMap: Record<string, MockeryAction[]> = {
    'basic': ['tomatoes', 'eggs'],
    'standard': ['tomatoes', 'eggs', 'putridEggs', 'jester'],
    'pro': ['tomatoes', 'eggs', 'putridEggs', 'jester', 'crown', 'stocks'],
    'premium': ['tomatoes', 'eggs', 'putridEggs', 'jester', 'crown', 'stocks', 'courtJester', 'smokeBomb'],
    'royal': ['tomatoes', 'eggs', 'putridEggs', 'jester', 'crown', 'stocks', 'courtJester', 'smokeBomb', 'shame', 'silence'],
    'legendary': ['tomatoes', 'eggs', 'putridEggs', 'jester', 'crown', 'stocks', 'courtJester', 'smokeBomb', 'shame', 'silence', 'protection'],
    'founder': ['tomatoes', 'eggs', 'putridEggs', 'jester', 'crown', 'stocks', 'courtJester', 'smokeBomb', 'shame', 'silence', 'protection', 'taunt', 'mock', 'challenge', 'joust', 'duel']
  };

  return tierActionMap[String(userTier)] || ['tomatoes', 'eggs'];
};

/**
 * Get shame tier prices 
 */
export const getShameTierPrices = (action: MockeryAction): Partial<Record<MockeryTier, number>> => {
  // Base price for the action
  const basePrice = getShameBasePrice(action);
  
  // Tier multipliers
  return {
    'common': basePrice,
    'uncommon': basePrice * 1.5,
    'rare': basePrice * 2,
    'epic': basePrice * 3,
    'legendary': basePrice * 5
  };
};

/**
 * Get shame user tier prices
 */
export const getShameUserTierPrices = (action: MockeryAction): Partial<Record<string, number>> => {
  // Base price for the action
  const basePrice = getShameBasePrice(action);
  
  // Target user tier multipliers (higher tier users cost more to shame)
  return {
    'basic': basePrice,
    'standard': basePrice * 1.1,
    'pro': basePrice * 1.25,
    'premium': basePrice * 1.5,
    'royal': basePrice * 2,
    'legendary': basePrice * 3,
    'founder': basePrice * 5
  };
};
