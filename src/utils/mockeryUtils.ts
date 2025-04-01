
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

/**
 * Get the name of a mockery action
 * @param action The mockery action type
 * @returns The human-readable name for the action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const actionNames: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Eggs',
    putridEggs: 'Putrid Eggs',
    crown: 'Crown',
    stocks: 'Stocks',
    jester: 'Jester Hat',
    shame: 'Walk of Shame',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection',
    taunt: 'Royal Taunt',
    mock: 'Public Mockery',
    challenge: 'Royal Challenge',
    joust: 'Royal Joust',
    duel: 'Royal Duel'
  };
  
  return actionNames[action] || 'Unknown';
};

/**
 * Get the description of a mockery action
 * @param action The mockery action type
 * @returns The description for the action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const actionDescriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw rotten tomatoes at a user, adding a red mess to their profile.',
    eggs: 'Throw eggs at a user, leaving a sticky mess on their profile.',
    putridEggs: 'Throw putrid eggs at a user, leaving a smelly mess on their profile.',
    crown: 'Grant a mock crown to a user, making them the target of jokes.',
    stocks: 'Put a user in the virtual stocks for public mockery.',
    jester: 'Make a user wear a jester hat, marking them as the court jester.',
    shame: 'Send a user on a walk of shame, adding shame bells to their profile.',
    silence: 'Silence a user, preventing them from appearing in public spaces.',
    courtJester: 'Appoint a user as the Court Jester for public entertainment.',
    smokeBomb: 'Throw a smoke bomb to temporarily obscure a user\'s profile.',
    protection: 'Protect your profile from mockery for a period of time.',
    taunt: 'Send a public taunt to challenge another user.',
    mock: 'Add mockery elements to another user\'s profile.',
    challenge: 'Challenge another user to a duel of spending.',
    joust: 'Engage in a virtual joust with another user.',
    duel: 'Challenge a user to a spending duel.'
  };
  
  return actionDescriptions[action] || 'An unknown mockery action';
};

/**
 * Get the price for a shame action
 * @param action The mockery action
 * @returns The price in royal coins
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    tomatoes: 10,
    eggs: 15,
    putridEggs: 25,
    crown: 50,
    stocks: 75,
    jester: 100,
    shame: 150,
    silence: 200,
    courtJester: 250,
    smokeBomb: 300,
    protection: 500,
    taunt: 50,
    mock: 75,
    challenge: 100,
    joust: 200,
    duel: 500
  };
  
  return prices[action] || 100;
};

/**
 * Get tier for a mockery action
 * @param action The mockery action
 * @returns The tier of the mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    putridEggs: 'uncommon',
    crown: 'rare',
    stocks: 'rare',
    jester: 'uncommon',
    shame: 'epic',
    silence: 'epic',
    courtJester: 'legendary',
    smokeBomb: 'uncommon',
    protection: 'royal',
    taunt: 'common',
    mock: 'uncommon',
    challenge: 'rare',
    joust: 'epic',
    duel: 'legendary'
  };
  
  return tiers[action] || 'common';
};

/**
 * Get the cost for a mockery action
 * @param action The mockery action
 * @returns The cost in royal coins
 */
export const getMockeryCost = (action: MockeryAction): number => {
  // This is an alias for getShameActionPrice for backward compatibility
  return getShameActionPrice(action);
};

/**
 * Get the CSS class for a mockery tier
 * @param tier The mockery tier
 * @returns The CSS class name
 */
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<MockeryTier, string> = {
    common: 'text-gray-400 border-gray-400',
    uncommon: 'text-green-400 border-green-400',
    rare: 'text-blue-400 border-blue-400',
    epic: 'text-purple-400 border-purple-400',
    legendary: 'text-orange-400 border-orange-400',
    royal: 'text-royal-gold border-royal-gold',
    basic: 'text-gray-300 border-gray-300',
    premium: 'text-amber-400 border-amber-400',
    silver: 'text-gray-300 border-gray-300',
    bronze: 'text-amber-700 border-amber-700'
  };
  
  return colorClasses[tier] || 'text-gray-400 border-gray-400';
};

/**
 * Check if a mockery action has a weekly discount
 * @returns Whether there's a weekly discount
 */
export const hasWeeklyDiscount = (): boolean => {
  // Just a mock function that returns true 30% of the time
  return Math.random() < 0.3;
};

/**
 * Get the weekly discounted action
 * @returns The discounted action
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // Return a random action
  const actions: MockeryAction[] = [
    'tomatoes', 'eggs', 'putridEggs', 'crown', 'stocks',
    'jester', 'shame', 'silence', 'courtJester', 'smokeBomb'
  ];
  
  return actions[Math.floor(Math.random() * actions.length)];
};

/**
 * Get discounted price for the shame action
 * @param action The mockery action
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const originalPrice = getShameActionPrice(action);
  // 50% discount
  return Math.round(originalPrice * 0.5);
};

/**
 * Get icon component for a mockery action
 * This function would return a React component in a real implementation
 * Here we return a string for simplicity
 */
export const getMockeryActionIcon = (action: MockeryAction): string => {
  const icons: Record<MockeryAction, string> = {
    tomatoes: '🍅',
    eggs: '🥚',
    putridEggs: '🥚',
    crown: '👑',
    stocks: '🔒',
    jester: '🤡',
    shame: '🔔',
    silence: '🤐',
    courtJester: '🎭',
    smokeBomb: '💨',
    protection: '🛡️',
    taunt: '👋',
    mock: '😜',
    challenge: '⚔️',
    joust: '🏇',
    duel: '🎯'
  };
  
  return icons[action] || '❓';
};

/**
 * Get the color for a mockery action icon
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<MockeryAction, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-200',
    putridEggs: 'text-green-300',
    crown: 'text-royal-gold',
    stocks: 'text-gray-600',
    jester: 'text-purple-500',
    shame: 'text-red-400',
    silence: 'text-blue-300',
    courtJester: 'text-indigo-400',
    smokeBomb: 'text-gray-400',
    protection: 'text-emerald-400',
    taunt: 'text-orange-400',
    mock: 'text-pink-400',
    challenge: 'text-red-500',
    joust: 'text-amber-500',
    duel: 'text-royal-crimson'
  };
  
  return colors[action] || 'text-gray-400';
};
