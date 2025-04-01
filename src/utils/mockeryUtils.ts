
import { MockeryAction } from '@/types/mockery';

// Icons by mockery action type
const mockeryActionIcons: Record<MockeryAction, string> = {
  tomatoes: 'Tomato',
  eggs: 'Egg',
  putridEggs: 'PutridEggs',
  crown: 'Crown',
  stocks: 'Stocks',
  jester: 'JesterHat',
  courtJester: 'CourtJester',
  smokeBomb: 'SmokeBomb',
  silence: 'Silence',
  shame: 'ShameIcon',
  protection: 'Protection',
  taunt: 'TauntIcon',
  mock: 'MockIcon',
  challenge: 'ChallengeIcon',
  joust: 'JoustIcon',
  duel: 'DuelIcon'
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
    putridEggs: 'green',
    crown: 'gold',
    stocks: 'brown',
    jester: 'purple',
    courtJester: 'purple',
    smokeBomb: 'black',
    silence: 'gray',
    shame: 'crimson',
    protection: 'blue',
    taunt: 'orange',
    mock: 'blue',
    challenge: 'teal',
    joust: 'indigo',
    duel: 'red'
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
    putridEggs: 20,
    crown: 80,
    stocks: 65,
    jester: 25,
    courtJester: 40,
    smokeBomb: 45,
    silence: 35,
    shame: 100,
    protection: 60,
    taunt: 20,
    mock: 30,
    challenge: 40,
    joust: 75,
    duel: 150
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
    putridEggs: 'Throw rotten eggs for maximum embarrassment',
    crown: 'Place a shameful crown on this user\'s profile',
    stocks: 'Put this user in the stocks for public ridicule',
    jester: 'Make this user wear a jester hat for 1 hour',
    courtJester: 'Appoint this user as the court jester',
    smokeBomb: 'Hide this user\'s profile for 30 minutes',
    silence: 'Silence this user for a period of time',
    shame: 'Put this user in public shame for 8 hours',
    protection: 'Shield yourself from mockery attacks',
    taunt: 'Taunt this user with a short message',
    mock: 'Mock this user\'s profile for 2 hours',
    challenge: 'Challenge this user to a duel',
    joust: 'Challenge this user to a joust',
    duel: 'Challenge this user to a duel to the death'
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
    putridEggs: 'Putrid Eggs',
    crown: 'Shameful Crown',
    stocks: 'Public Stocks',
    jester: 'Jester Hat',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    silence: 'Silence',
    shame: 'Public Shame',
    protection: 'Royal Protection',
    taunt: 'Taunt',
    mock: 'Mock',
    challenge: 'Challenge',
    joust: 'Joust',
    duel: 'Duel'
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
    putridEggs: 'uncommon',
    crown: 'rare',
    stocks: 'epic',
    jester: 'uncommon',
    courtJester: 'rare',
    smokeBomb: 'epic',
    silence: 'rare',
    shame: 'epic',
    protection: 'epic',
    taunt: 'common',
    mock: 'uncommon',
    challenge: 'rare',
    joust: 'epic',
    duel: 'legendary'
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
