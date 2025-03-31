
import { MockeryAction, MockeryTier } from '@/types/mockery-types'; 

/**
 * Get display name for a mockery action
 */
export function getMockeryName(action: MockeryAction): string {
  const names: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    crown: 'Mock Crown',
    stocks: 'Public Stocks',
    jester: 'Court Jester',
    protection: 'Royal Protection',
    shame: 'Public Shame',
    target: 'Target',
    challenge: 'Challenge',
    ghost: 'Ghost',
    putridEggs: 'Putrid Eggs',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb'
  };
  
  return names[action] || 'Unknown Mockery';
}

/**
 * Get description for a mockery action
 */
export function getMockeryDescription(action: MockeryAction): string {
  const descriptions: Record<string, string> = {
    tomatoes: 'Throw rotten tomatoes at this user to humiliate them publicly.',
    eggs: 'Throw rotten eggs at this user to make them stink of shame.',
    crown: 'Place a ridiculous crown on their head to mock their achievements.',
    stocks: 'Lock them in the royal stocks for public ridicule.',
    jester: 'Force them to wear the court jester outfit for all to see.',
    protection: 'Buy protection against mockery for yourself.',
    shame: 'Publicly shame this user for all to see.',
    target: 'Mark this user as a target for others.',
    challenge: 'Challenge this user to a mockery duel.',
    ghost: 'Make this user appear as a ghost.',
    putridEggs: 'Throw extra putrid eggs for maximum stench.',
    silence: 'Silence this user from the public court.',
    courtJester: 'Make them the official court jester.',
    smokeBomb: 'Throw a smoke bomb to temporarily hide their profile.'
  };
  
  return descriptions[action] || 'A mysterious form of mockery.';
}

/**
 * Get price for a mockery action
 */
export function getMockeryCost(action: MockeryAction): number {
  const costs: Record<string, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    crown: 1.00,
    stocks: 2.00,
    jester: 3.00,
    protection: 5.00,
    shame: 0.75,
    target: 0.50,
    challenge: 1.50,
    ghost: 2.50,
    putridEggs: 1.25,
    silence: 3.50,
    courtJester: 4.00,
    smokeBomb: 2.75
  };
  
  return costs[action] || 1.00;
}

/**
 * Get the mockery tier
 */
export function getMockeryTier(action: MockeryAction): MockeryTier {
  const tiers: Record<string, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    crown: 'uncommon',
    stocks: 'common',
    jester: 'uncommon',
    protection: 'legendary',
    shame: 'common',
    target: 'common',
    challenge: 'rare',
    ghost: 'epic',
    putridEggs: 'uncommon',
    silence: 'epic',
    courtJester: 'rare',
    smokeBomb: 'legendary'
  };
  
  return tiers[action] || 'common';
}

/**
 * Get color class for a mockery tier
 */
export function getMockeryTierColorClass(tier: MockeryTier): string {
  const colors: Record<string, string> = {
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-yellow-400',
    royal: 'text-yellow-300',
    basic: 'text-white',
    premium: 'text-indigo-400',
    silver: 'text-gray-300',
    bronze: 'text-amber-600'
  };
  
  return colors[tier] || 'text-white';
}

/**
 * Get the active mockery CSS class
 */
export function getActiveMockeryClass(action: MockeryAction): string {
  const classes: Record<string, string> = {
    tomatoes: 'tomato-stain',
    eggs: 'egg-stain',
    crown: 'mock-crown',
    stocks: 'in-stocks',
    jester: 'jester-outfit',
    protection: 'royal-protection',
    shame: 'public-shame',
    target: 'bullseye-target',
    challenge: 'challenge-banner',
    ghost: 'ghostly-appearance',
    putridEggs: 'putrid-stain',
    silence: 'silenced-effect',
    courtJester: 'court-jester',
    smokeBomb: 'smoke-effect'
  };
  
  return classes[action] || '';
}

// Compatibility aliases
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;

// Weekly discount helpers
export function hasWeeklyDiscount(action: MockeryAction): boolean {
  const discountedAction = getWeeklyDiscountedAction();
  return action === discountedAction;
}

export function getWeeklyDiscountedAction(): MockeryAction {
  // In a real app, this might come from an API or be date-based
  // For now, let's just return a fixed action
  return 'tomatoes';
}

export function getDiscountedShamePrice(action: MockeryAction): number {
  const originalPrice = getShameActionPrice(action);
  return originalPrice * 0.75; // 25% discount
}

export function getShameActionPrice(action: MockeryAction): number {
  return getMockeryCost(action);
}

export function getShameActionMessage(action: MockeryAction, username: string): string {
  const messages: Record<string, string> = {
    tomatoes: `${username} has been pelted with rotten tomatoes!`,
    eggs: `${username} stinks of rotten eggs!`,
    crown: `${username} wears a fool's crown!`,
    stocks: `${username} has been locked in the public stocks!`,
    jester: `${username} has been dressed as the court jester!`,
    protection: `${username} is now protected from mockery.`,
    shame: `${username} has been publicly shamed!`,
    target: `${username} has been marked as a target!`,
    challenge: `${username} has been challenged to a mockery duel!`,
    ghost: `${username} now appears as a ghost!`,
    putridEggs: `${username} reeks of putrid eggs!`,
    silence: `${username} has been silenced from the court!`,
    courtJester: `${username} is now the official court jester!`,
    smokeBomb: `${username}'s profile is engulfed in smoke!`
  };
  
  return messages[action] || `${username} has been mocked!`;
}
