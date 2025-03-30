
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';
import { User } from '@/types/user';
import { Egg, Laugh, Ban, Crown, Skull, Sparkles, Bomb, ThumbsDown } from 'lucide-react';

// Mockery costs
export const MOCKERY_COSTS: Partial<Record<MockeryAction, number>> = {
  tomatoes: 5,
  eggs: 10,
  putridEggs: 20,
  stocks: 30,
  silence: 50,
  courtJester: 100,
  dunce: 75,
  smokeBomb: 150,
  jester: 200,
  protection: 75,
  immune: 250,
  royalPie: 300,
  glitterBomb: 400,
  jokeCrown: 500,
  memeFrame: 350,
  roast: 50,
  ridicule: 75,
  humiliate: 100,
  expose: 150,
  mock: 50,
  shame: 200
};

// Mockery tier mapping
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (action === 'tomatoes' || action === 'eggs' || action === 'mock' || action === 'ridicule') {
    return 'common';
  }
  
  if (action === 'putridEggs' || action === 'stocks' || action === 'dunce' || action === 'roast' || action === 'humiliate') {
    return 'uncommon';
  }
  
  if (action === 'silence' || action === 'courtJester' || action === 'protection' || action === 'expose') {
    return 'rare';
  }
  
  if (action === 'smokeBomb' || action === 'jester' || action === 'royalPie' || action === 'memeFrame' || action === 'shame') {
    return 'epic';
  }
  
  if (action === 'immune' || action === 'glitterBomb' || action === 'jokeCrown') {
    return 'legendary';
  }
  
  return 'common';
};

// Mockery titles
export const MOCKERY_NAMES: Partial<Record<MockeryAction, string>> = {
  tomatoes: 'Rotten Tomatoes',
  eggs: 'Egg Shower',
  putridEggs: 'Putrid Eggs',
  stocks: 'Public Stocks',
  silence: 'Royal Silence',
  courtJester: 'Court Jester',
  dunce: 'Dunce Cap',
  smokeBomb: 'Smoke Bomb',
  jester: 'Jester Curse',
  protection: 'Royal Protection',
  immune: 'Immunity Scroll',
  royalPie: 'Royal Pie to the Face',
  glitterBomb: 'Glitter Bomb',
  jokeCrown: 'Joke Crown',
  memeFrame: 'Meme Frame',
  roast: 'Royal Roast',
  ridicule: 'Public Ridicule',
  humiliate: 'Royal Humiliation',
  expose: 'Exposed Secrets',
  mock: 'Mockery',
  shame: 'Walk of Shame'
};

// Mockery descriptions
export const MOCKERY_DESCRIPTIONS: Partial<Record<MockeryAction, string>> = {
  tomatoes: 'Pelt this user with rotten tomatoes, temporarily marking their profile with shame.',
  eggs: 'Shower this user with eggs, leaving their profile a sticky mess for all to see.',
  putridEggs: 'Assault this user with putrid eggs, leaving their profile reeking for days.',
  stocks: 'Lock this user in the public stocks for all to mock and ridicule.',
  silence: 'Silence this user by royal decree, preventing them from commenting for a period.',
  courtJester: 'Demote this user to court jester status, forcing them to wear the jester\'s cap.',
  dunce: 'Place a dunce cap on this user for their foolish spending habits.',
  smokeBomb: 'Deploy a smoke bomb that will obscure this user\'s profile in embarrassing smoke.',
  jester: 'Curse this user to appear as a jester to all who view their profile.',
  protection: 'Purchase royal protection to shield yourself from mockery for a period.',
  immune: 'Acquire an immunity scroll that protects you from all mockery for an extended period.',
  royalPie: 'Deliver a royal pie to the face, leaving a lasting impression on their dignity.',
  glitterBomb: 'Unleash a glitter bomb that will leave this user sparkling with shame.',
  jokeCrown: 'Crown this user with the Joke Crown, marking them as the official realm fool.',
  memeFrame: 'Surround this user\'s profile with an embarrassing meme frame visible to all.',
  roast: 'Deliver a burns-so-good royal roast that leaves a lasting mark.',
  ridicule: 'Subject this user to public ridicule throughout the kingdom.',
  humiliate: 'Cause this user to suffer the lasting effects of royal humiliation.',
  expose: 'Expose this user\'s darkest secrets to the public.',
  mock: 'Mock this user mercilessly for their poor life choices.',
  shame: 'Send this user on a public walk of shame for all to witness.'
};

// Mockery icon components
export const getMockeryIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return Egg;
    case 'eggs':
    case 'putridEggs':
      return Egg;
    case 'stocks':
      return Ban;
    case 'silence':
      return Ban;
    case 'courtJester':
    case 'jester':
      return Crown;
    case 'dunce':
      return Crown;
    case 'smokeBomb':
      return Bomb;
    case 'protection':
    case 'immune':
      return Sparkles;
    case 'royalPie':
      return Egg;
    case 'glitterBomb':
      return Sparkles;
    case 'jokeCrown':
      return Crown;
    case 'memeFrame':
      return Laugh;
    case 'roast':
      return Laugh;
    case 'ridicule':
      return Laugh;
    case 'humiliate':
      return ThumbsDown;
    case 'expose':
      return Skull;
    case 'mock':
      return Laugh;
    case 'shame':
      return ThumbsDown;
    default:
      return Egg;
  }
};

// Check if a user can be mocked
export const canBeMocked = (user: User): boolean => {
  // Users with VIP status cannot be mocked
  if (user.isVIP) {
    return false;
  }
  
  // Check for active protection
  const hasProtection = user.profileBoosts?.some(boost => 
    boost.active && 
    (boost.effectId === 'protection' || boost.effectId === 'immune')
  );
  
  return !hasProtection;
};

// Get mockery title
export const getMockeryTitle = (action: MockeryAction): string => {
  return MOCKERY_NAMES[action] || 'Unknown Mockery';
};

// Get mockery description
export const getMockeryDescription = (action: MockeryAction): string => {
  return MOCKERY_DESCRIPTIONS[action] || 'An unknown form of mockery';
};

// Get mockery cost
export const getMockeryCost = (action: MockeryAction): number => {
  return MOCKERY_COSTS[action] || 0;
};

// Check if action is a shame action
export const isShameAction = (action: MockeryAction): action is ShameAction => {
  const shameActions: ShameAction[] = ['ridicule', 'humiliate', 'expose', 'mock', 'tomatoes', 'stocks', 'eggs', 'silence', 'courtJester', 'dunce', 'smokeBomb', 'shame', 'jester', 'putridEggs'];
  return shameActions.includes(action as ShameAction);
};

// Get mockery action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryTitle(action);
};

// Get mockery action description
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};
