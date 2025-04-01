
import { MockeryAction, MockeryEvent, MockeryActionType } from '@/types/mockery';

// Icons by mockery action type
const mockeryActionIcons: Record<MockeryAction, string> = {
  tomato: 'Tomato',
  egg: 'Egg',
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
  medieval_protection: 'Protection'
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
    tomato: 'red',
    egg: 'yellow',
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
    medieval_protection: 'green'
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
    tomato: 5,
    egg: 10,
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
    medieval_protection: 60
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
    tomato: 'Throw a tomato at this user',
    egg: 'Throw an egg at this user',
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
    medieval_protection: 'Protect yourself from mockery for 24 hours'
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
    tomato: 'Tomato',
    egg: 'Egg',
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
    medieval_protection: 'Protection'
  };
  
  return nameMap[action] || action;
};

/**
 * Gets a discounted price for shame actions
 * @param action The mockery action
 * @param userTier The user's tier
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (action: MockeryAction, userTier: string): number => {
  const basePrice = getMockeryActionPrice(action);
  const discountRate = getDiscountRateByTier(userTier);
  
  return Math.floor(basePrice * (1 - discountRate));
};

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
  return 'tomato';
};

/**
 * Format a mockery event for display
 * @param event The mockery event to format
 * @returns A formatted string
 */
export const formatMockeryEvent = (event: MockeryEvent): string => {
  const actionName = getMockeryActionDisplayName(event.action);
  
  if (event.fromUserId === event.toUserId) {
    return `You used ${actionName} on yourself!`;
  }
  
  return `${event.fromUsername || 'Someone'} used ${actionName} on ${event.toUsername || 'you'}`;
};
