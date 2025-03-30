
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
    default:
      return 'text-gray-400';
  }
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (action === 'dunce' || action === 'courtJester' || action === 'smokeBomb') {
    return 'legendary';
  } else if (action === 'stocks' || action === 'silence' || action === 'glitterBomb') {
    return 'epic';
  } else if (action === 'putridEggs' || action === 'jokeCrown') {
    return 'rare';
  } else if (action === 'eggs' || action === 'protection' || action === 'jester' || action === 'royalPie') {
    return 'uncommon';
  } else {
    return 'common';
  }
};

/**
 * Get price for a mockery action
 */
export const getMockeryPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
    tomatoes: 20,
    eggs: 50,
    putridEggs: 100,
    stocks: 200,
    silence: 200,
    courtJester: 500,
    dunce: 35,
    smokeBomb: 300,
    jester: 75,
    protection: 100,
    glitterBomb: 250,
    royalPie: 150,
    jokeCrown: 200,
    memeFrame: 100,
    roast: 15,
    ridicule: 20
  };
  
  return prices[action] || 10;
};

/**
 * Get description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    tomatoes: 'Throw virtual tomatoes at this user\'s profile',
    putridEggs: 'Throw extremely smelly eggs at this user',
    stocks: 'Place this user in the public stocks for ridicule',
    silence: 'Silence this user from the chat for 30 minutes',
    courtJester: 'Force this user to wear the Court Jester outfit for 24 hours',
    dunce: 'Place a dunce cap on this user\'s avatar for 24 hours',
    smokeBomb: 'Make this user\'s profile smoky and hard to see for 12 hours',
    eggs: 'Throw eggs at this user\'s profile',
    jester: 'Mark this user as a Jester for 24 hours',
    protection: 'Protect yourself from mockery for 12 hours',
    glitterBomb: 'Cover this user\'s profile in sparkly glitter',
    royalPie: 'Hit this user with a cream pie',
    jokeCrown: 'Force this user to wear a joke crown',
    memeFrame: 'Frame this user\'s avatar in memes'
  };
  
  return descriptions[action] || 'Mock this user in a very visible way';
};

/**
 * Get title for a mockery action
 */
export const getMockeryTitle = (action: MockeryAction): string => {
  const titles: Record<string, string> = {
    tomatoes: 'Throw Tomatoes',
    putridEggs: 'Putrid Eggs',
    stocks: 'Place in Stocks',
    silence: 'Royal Silence',
    courtJester: 'Make Court Jester',
    dunce: 'Dunce Cap of Shame',
    smokeBomb: 'Smoke Bomb',
    eggs: 'Throw Eggs',
    jester: 'Jester Label',
    protection: 'Royal Protection',
    glitterBomb: 'Glitter Bomb',
    royalPie: 'Royal Pie',
    jokeCrown: 'Joke Crown',
    memeFrame: 'Meme Frame'
  };
  
  return titles[action] || 'Royal Mockery';
};

// Define cooldowns for mockery actions
export const MOCKERY_COOLDOWNS: Partial<Record<MockeryAction, number>> = {
  tomatoes: 1 * 60 * 60 * 1000, // 1 hour
  eggs: 2 * 60 * 60 * 1000, // 2 hours
  putridEggs: 12 * 60 * 60 * 1000, // 12 hours
  stocks: 24 * 60 * 60 * 1000, // 24 hours
  silence: 12 * 60 * 60 * 1000, // 12 hours
  courtJester: 48 * 60 * 60 * 1000, // 48 hours
  dunce: 24 * 60 * 60 * 1000, // 24 hours
  smokeBomb: 8 * 60 * 60 * 1000, // 8 hours
  glitterBomb: 48 * 60 * 60 * 1000, // 48 hours
  royalPie: 36 * 60 * 60 * 1000, // 36 hours
  jokeCrown: 72 * 60 * 60 * 1000 // 72 hours
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
    case 'glitterBomb':
      return 'mockery-glitter';
    case 'royalPie':
      return 'mockery-pie';
    case 'jokeCrown':
      return 'mockery-joke-crown';
    case 'memeFrame':
      return 'mockery-meme-frame';
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
