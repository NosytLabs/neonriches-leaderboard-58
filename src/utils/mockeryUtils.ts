
import { MockeryAction } from '@/types/mockery';

/**
 * Get the price for a mockery action
 * @param action The mockery action
 * @returns The price in USD
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    tomatoes: 1,
    eggs: 2,
    putridEggs: 3,
    crown: 5,
    stocks: 7,
    jester: 10,
    shame: 15,
    silence: 20,
    courtJester: 25,
    smokeBomb: 30,
    protection: 35,
    taunt: 5,
    mock: 7,
    challenge: 10,
    joust: 15,
    duel: 20
  };
  
  return prices[action] || 5;
};

/**
 * Check if there's currently a weekly discount active
 * @returns Whether there's a discount active
 */
export const hasWeeklyDiscount = (): boolean => {
  // For this example, we'll just return true
  // In production, this would check against the backend
  return true;
};

/**
 * Get the currently discounted mockery action for the week
 * @returns The discounted mockery action
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // For this example, we'll just return a fixed action
  // In production, this would fetch from the backend
  return 'crown';
};

/**
 * Get a discounted price for a shame action
 * @param action The mockery action
 * @param userTier The user's tier
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (action: MockeryAction, userTier: string): number => {
  const originalPrice = getMockeryActionPrice(action);
  
  if (!hasWeeklyDiscount() || getWeeklyDiscountedAction() !== action) {
    return originalPrice;
  }
  
  // Apply different discount rates based on tier
  const discountRates: Record<string, number> = {
    free: 0.1, // 10% discount
    basic: 0.15, // 15% discount
    premium: 0.25, // 25% discount
    royal: 0.33, // 33% discount
    founder: 0.50, // 50% discount
  };
  
  const discountRate = discountRates[userTier.toLowerCase()] || 0.1;
  
  return Math.max(0.5, originalPrice * (1 - discountRate));
};

/**
 * Get the user-friendly name for a mockery action
 * @param action The mockery action
 * @returns The display name
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Throw Tomatoes',
    eggs: 'Throw Eggs',
    putridEggs: 'Throw Putrid Eggs',
    crown: 'Shameful Crown',
    stocks: 'Public Stocks',
    jester: 'Make a Jester',
    shame: 'Public Shame',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection',
    taunt: 'Taunt',
    mock: 'Mock',
    challenge: 'Challenge',
    joust: 'Joust',
    duel: 'Duel'
  };
  
  return names[action] || 'Unknown Action';
};

/**
 * Get the description for a mockery action
 * @param action The mockery action
 * @returns The description
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw virtual tomatoes at someone to show your disapproval.',
    eggs: 'Egg someone virtually to express your displeasure.',
    putridEggs: 'Throw the foulest eggs at your target.',
    crown: 'Place a crown of shame upon someone\'s profile.',
    stocks: 'Lock someone in the public stocks for all to see.',
    jester: 'Turn someone into the court jester for a day.',
    shame: 'Publicly shame someone for their actions.',
    silence: 'Silence someone from certain channels temporarily.',
    courtJester: 'Make someone the official court jester.',
    smokeBomb: 'Deploy a smoke bomb to disappear from view.',
    protection: 'Grant royal protection against mockery actions.',
    taunt: 'Issue a formal taunt to challenge someone.',
    mock: 'Mock someone with formalized ridicule.',
    challenge: 'Formally challenge someone to a contest.',
    joust: 'Challenge someone to a virtual joust for honor.',
    duel: 'Demand satisfaction through a gentlemanly duel.'
  };
  
  return descriptions[action] || 'No description available.';
};

/**
 * Get all available mockery actions
 * @returns Array of all mockery actions
 */
export const getAllMockeryActions = (): MockeryAction[] => {
  return [
    'tomatoes',
    'eggs',
    'putridEggs',
    'crown',
    'stocks',
    'jester',
    'shame',
    'silence',
    'courtJester',
    'smokeBomb',
    'protection',
    'taunt',
    'mock',
    'challenge',
    'joust',
    'duel'
  ];
};
