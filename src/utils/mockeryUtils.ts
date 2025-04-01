
import { MockeryAction } from '@/types/mockery';

// Icons by mockery action type
const mockeryActionIcons: Record<MockeryAction, string> = {
  tomatoes: 'Tomato',
  eggs: 'Egg',
  rotten_tomato: 'RottenTomato',
  jester_hat: 'JesterHat',
  royal_insult: 'RoyalInsult',
  shame: 'ShameIcon',
  taunt: 'TauntIcon',
  mock: 'MockIcon',
  challenge: 'ChallengeIcon',
  joust: 'JoustIcon',
  duel: 'DuelIcon',
  crown_jewel: 'CrownJewel',
  silent_treatment: 'SilentTreatment',
  smoke_bomb: 'SmokeBomb',
  medieval_protection: 'Protection',
  // Add missing actions from error logs
  crown: 'Crown',
  stocks: 'Stocks',
  putridEggs: 'PutridEggs',
  courtJester: 'CourtJester',
  silence: 'Silence',
  protection: 'Protection'
};

/**
 * Gets an icon for a mockery action
 * @param action The mockery action
 * @returns The icon component name
 */
export const getMockeryActionIcon = (action: MockeryAction): string => {
  return mockeryActionIcons[action] || 'Tomato';
};

/**
 * Get the color associated with a mockery action
 * @param action The mockery action
 * @returns A color string
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colorMap: Record<MockeryAction, string> = {
    tomatoes: 'red',
    eggs: 'yellow',
    rotten_tomato: 'green',
    jester_hat: 'purple',
    royal_insult: 'crimson',
    shame: 'crimson',
    taunt: 'orange',
    mock: 'blue',
    challenge: 'teal',
    joust: 'indigo',
    duel: 'red',
    crown_jewel: 'gold',
    silent_treatment: 'gray',
    smoke_bomb: 'black',
    medieval_protection: 'green',
    // Add missing actions
    crown: 'gold',
    stocks: 'brown',
    putridEggs: 'green',
    courtJester: 'purple',
    silence: 'gray',
    protection: 'blue'
  };
  
  return colorMap[action] || 'gray';
};

/**
 * Gets the base price for a mockery action
 * @param action The mockery action
 * @returns The price in gold coins
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const priceMap: Record<MockeryAction, number> = {
    tomatoes: 5,
    eggs: 10,
    rotten_tomato: 15,
    jester_hat: 25,
    royal_insult: 50,
    shame: 100,
    taunt: 20,
    mock: 30,
    challenge: 40,
    joust: 75,
    duel: 150,
    crown_jewel: 200,
    silent_treatment: 30,
    smoke_bomb: 45,
    medieval_protection: 60,
    // Add missing actions
    crown: 80,
    stocks: 65,
    putridEggs: 20,
    courtJester: 40,
    silence: 35,
    protection: 60
  };
  
  return priceMap[action] || 5;
};

/**
 * Gets a description for a mockery action
 * @param action The mockery action
 * @returns A description string
 */
export const getMockeryActionDescription = (action: MockeryAction): string => {
  const descriptionMap: Record<MockeryAction, string> = {
    tomatoes: 'Throw a tomato at this user',
    eggs: 'Throw an egg at this user',
    rotten_tomato: 'Throw a rotten tomato at this user',
    jester_hat: 'Make this user wear a jester hat for 1 hour',
    royal_insult: 'Display a royal insult on this user\'s profile for 4 hours',
    shame: 'Put this user in public shame for 8 hours',
    taunt: 'Taunt this user with a short message',
    mock: 'Mock this user\'s profile for 2 hours',
    challenge: 'Challenge this user to a duel',
    joust: 'Challenge this user to a joust',
    duel: 'Challenge this user to a duel to the death',
    crown_jewel: 'Steal a crown jewel from this user',
    silent_treatment: 'Prevent this user from commenting for 1 hour',
    smoke_bomb: 'Hide this user\'s profile for 30 minutes',
    medieval_protection: 'Protect yourself from mockery for 24 hours',
    // Add missing actions
    crown: 'Place a shameful crown on this user\'s profile',
    stocks: 'Put this user in the stocks for public ridicule',
    putridEggs: 'Throw rotten eggs for maximum embarrassment',
    courtJester: 'Appoint this user as the court jester',
    silence: 'Silence this user for a period of time',
    protection: 'Shield yourself from mockery attacks'
  };
  
  return descriptionMap[action] || 'Perform a mockery action';
};

/**
 * Gets the display name for a mockery action
 * @param action The mockery action
 * @returns A display name string
 */
export const getMockeryActionDisplayName = (action: MockeryAction): string => {
  const nameMap: Record<MockeryAction, string> = {
    tomatoes: 'Tomato',
    eggs: 'Egg',
    rotten_tomato: 'Rotten Tomato',
    jester_hat: 'Jester Hat',
    royal_insult: 'Royal Insult',
    shame: 'Public Shame',
    taunt: 'Taunt',
    mock: 'Mock',
    challenge: 'Challenge',
    joust: 'Joust',
    duel: 'Duel',
    crown_jewel: 'Crown Jewel',
    silent_treatment: 'Silent Treatment',
    smoke_bomb: 'Smoke Bomb',
    medieval_protection: 'Protection',
    // Add missing actions
    crown: 'Shameful Crown',
    stocks: 'Public Stocks',
    putridEggs: 'Putrid Eggs',
    courtJester: 'Court Jester',
    silence: 'Silence',
    protection: 'Royal Protection'
  };
  
  return nameMap[action] || action;
};

// Add missing function names from errors
export const getMockeryName = getMockeryActionDisplayName;
export const getMockeryDescription = getMockeryActionDescription;
export const getMockeryCost = getMockeryActionPrice;

/**
 * Gets the tier for a mockery action
 */
export const getMockeryTier = (action: MockeryAction): string => {
  const tierMap: Record<MockeryAction, string> = {
    tomatoes: 'common',
    eggs: 'common',
    rotten_tomato: 'uncommon',
    jester_hat: 'uncommon',
    royal_insult: 'rare',
    shame: 'epic',
    taunt: 'common',
    mock: 'uncommon',
    challenge: 'rare',
    joust: 'epic',
    duel: 'legendary',
    crown_jewel: 'legendary',
    silent_treatment: 'rare',
    smoke_bomb: 'epic',
    medieval_protection: 'epic',
    // Add missing actions
    crown: 'rare',
    stocks: 'epic',
    putridEggs: 'uncommon',
    courtJester: 'rare',
    silence: 'rare',
    protection: 'epic'
  };
  
  return tierMap[action] || 'common';
};

/**
 * Gets the color class for a mockery tier
 */
export const getMockeryTierColorClass = (tier: string): string => {
  const colorMap: Record<string, string> = {
    common: 'text-gray-300',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-royal-gold'
  };
  
  return colorMap[tier] || 'text-gray-300';
};

/**
 * Gets a discounted price for shame actions
 * @param action The mockery action
 * @param userTier The user's tier
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (action: MockeryAction, userTier: string = 'basic'): number => {
  const basePrice = getMockeryActionPrice(action);
  const discountRate = getDiscountRateByTier(userTier);
  
  return Math.floor(basePrice * (1 - discountRate));
};

// Alias for compatibility with ShameModal.tsx
export const getShameActionPrice = getMockeryActionPrice;

/**
 * Gets the discount rate based on user tier
 * @param tier The user's tier
 * @returns A discount rate (0-1)
 */
export const getDiscountRateByTier = (tier: string): number => {
  const discountMap: Record<string, number> = {
    'free': 0,
    'basic': 0.05,
    'premium': 0.1,
    'royal': 0.15,
    'gold': 0.2,
    'platinum': 0.25,
    'diamond': 0.3,
    'founder': 0.5
  };
  
  return discountMap[tier.toLowerCase()] || 0;
};

/**
 * Checks if a weekly discount is active for mockery actions
 */
export const hasWeeklyDiscount = (): boolean => {
  // Implementation would check if the current week has a special discount
  // For now, just return a static value
  return true;
};

/**
 * Gets this week's discounted mockery action
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // This would typically rotate weekly or be pulled from a config
  // For now, just return a static value
  return 'tomatoes';
};

/**
 * Format a mockery event for display
 * @param event The mockery event to format
 * @returns A formatted string
 */
export const formatMockeryEvent = (event: any): string => {
  const actionName = getMockeryActionDisplayName(event.action);
  
  if (event.fromUserId === event.toUserId) {
    return `You used ${actionName} on yourself!`;
  }
  
  return `${event.fromUsername || 'Someone'} used ${actionName} on ${event.toUsername || 'you'}`;
};
