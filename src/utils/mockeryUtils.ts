
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

/**
 * Get a color based on mockery action tier
 */
export const getMockeryActionColor = (action: MockeryAction): string => {
  const tier = getMockeryTier(action);
  switch (tier) {
    case 'legendary':
      return 'text-royal-gold';
    case 'epic':
      return 'text-purple-500';
    case 'rare':
      return 'text-blue-500';
    case 'uncommon':
      return 'text-green-500';
    case 'common':
      return 'text-gray-400';
    default:
      return 'text-white';
  }
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (action === 'dunce' || action === 'courtJester') {
    return 'legendary';
  } else if (action === 'stocks' || action === 'silence') {
    return 'epic';
  } else if (action === 'putridEggs') {
    return 'rare';
  } else if (action === 'eggs' || action === 'protection') {
    return 'uncommon';
  } else {
    return 'common';
  }
};

/**
 * Get price for a mockery action
 */
export const getMockeryPrice = (action: MockeryAction): number => {
  switch (getMockeryTier(action)) {
    case 'legendary':
      return 500;
    case 'epic':
      return 200;
    case 'rare':
      return 100;
    case 'uncommon':
      return 50;
    case 'common':
    default:
      return 20;
  }
};

/**
 * Get description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw virtual tomatoes at this user\'s profile';
    case 'putridEggs':
      return 'Throw extremely smelly eggs at this user';
    case 'stocks':
      return 'Place this user in the public stocks for ridicule';
    case 'silence':
      return 'Silence this user from the chat for 30 minutes';
    case 'courtJester':
      return 'Force this user to wear the Court Jester outfit for 24 hours';
    case 'dunce':
      return 'Place a dunce cap on this user\'s avatar for 24 hours';
    case 'smokeBomb':
      return 'Make this user\'s profile smoky and hard to see for 12 hours';
    case 'eggs':
      return 'Throw eggs at this user\'s profile';
    case 'jester':
      return 'Mark this user as a Jester for 24 hours';
    case 'protection':
      return 'Protect yourself from mockery for 12 hours';
    default:
      return 'Mock this user in a very visible way';
  }
};

/**
 * Get title for a mockery action
 */
export const getMockeryTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'putridEggs':
      return 'Putrid Eggs';
    case 'stocks':
      return 'Place in Stocks';
    case 'silence':
      return 'Royal Silence';
    case 'courtJester':
      return 'Make Court Jester';
    case 'dunce':
      return 'Dunce Cap of Shame';
    case 'smokeBomb':
      return 'Smoke Bomb';
    case 'eggs':
      return 'Throw Eggs';
    case 'jester':
      return 'Jester Label';
    case 'protection':
      return 'Royal Protection';
    default:
      return 'Royal Mockery';
  }
};

// Define cooldowns for mockery actions
export const MOCKERY_COOLDOWNS: Partial<Record<MockeryAction, number>> = {
  tomatoes: 1 * 60 * 60 * 1000, // 1 hour
  eggs: 2 * 60 * 60 * 1000, // 2 hours
  putridEggs: 12 * 60 * 60 * 1000, // 12 hours
  stocks: 24 * 60 * 60 * 1000, // 24 hours
  silence: 12 * 60 * 60 * 1000, // 12 hours
  courtJester: 48 * 60 * 60 * 1000, // 48 hours
  dunce: 24 * 60 * 60 * 1000 // 24 hours
};

/**
 * Check if a mockery action is a shame action
 */
export const isShameAction = (action: MockeryAction): action is ShameAction => {
  const shameActions: ShameAction[] = [
    'ridicule', 'humiliate', 'expose', 'mock', 'tomatoes', 
    'stocks', 'eggs', 'silence', 'courtJester', 'dunce', 
    'smokeBomb', 'shame', 'jester', 'putridEggs', 'protection'
  ];
  return shameActions.includes(action as ShameAction);
};

/**
 * Get active mockery CSS class
 */
export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'dunce':
      return 'mockery-dunce';
    case 'courtJester':
      return 'mockery-jester';
    case 'smokeBomb':
      return 'mockery-smoke';
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'eggs':
      return 'mockery-eggs';
    case 'putridEggs':
      return 'mockery-putrid';
    case 'stocks':
      return 'mockery-stocks';
    default:
      return '';
  }
};

/**
 * Map mockery tiers to rarity
 */
export const getMockeryRarity = (tier: MockeryTier): CosmeticRarity => {
  switch (tier) {
    case 'legendary':
      return 'legendary';
    case 'epic':
      return 'epic';
    case 'rare':
      return 'rare';
    case 'uncommon':
      return 'uncommon';
    case 'common':
    default:
      return 'common';
  }
};
