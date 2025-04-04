
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Get the name of a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const mockeryNames: Record<MockeryAction, string> = {
    tomato: 'Throw Tomato',
    egg: 'Throw Egg',
    putridEgg: 'Throw Putrid Egg',
    rotten_egg: 'Throw Rotten Egg',
    crown: 'Royal Crown',
    thumbsDown: 'Thumbs Down',
    thumbs_down: 'Thumbs Down',
    mock: 'Public Mockery',
    stocks: 'Put in Stocks',
    jester: 'Jester Hat',
    courtJester: 'Court Jester',
    silence: 'Silence',
    taunt: 'Royal Taunt',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection',
    flame: 'Flame',
    heart: 'Heart',
    skull: 'Skull',
    laugh: 'Laugh',
    shame: 'Shame',
    rotten_tomato: 'Throw Rotten Tomato',
    royal_decree: 'Royal Decree',
    public_mockery: 'Public Mockery',
    challenge: 'Challenge',
    joust: 'Joust',
    duel: 'Duel'
  };

  return mockeryNames[action] || 'Unknown Action';
};

// Get the description of a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomato: 'Throw a tomato at this user, showing your disapproval.',
    egg: 'Throw an egg at this user\'s profile.',
    putridEgg: 'Throw a putrid egg for maximum embarrassment.',
    rotten_egg: 'Throw a rotten egg for maximum embarrassment.',
    crown: 'Bestow a crown upon this user, a symbol of respect.',
    thumbsDown: 'Express your disapproval with a thumbs down.',
    thumbs_down: 'Express your disapproval with a thumbs down.',
    mock: 'Publicly mock this user with a custom message.',
    stocks: 'Put this user in the stocks for public shame.',
    jester: 'Make this user wear a jester hat for 24 hours.',
    courtJester: 'Appoint this user as your court jester.',
    silence: 'Silence this user temporarily in public chats.',
    taunt: 'Send a royal taunt to this user.',
    smokeBomb: 'Drop a smoke bomb to escape the situation.',
    protection: 'Grant royal protection from mockery.',
    flame: 'Send flames of disapproval.',
    heart: 'Send a heart to show approval.',
    skull: 'Send a threatening skull symbol.',
    laugh: 'Laugh at this user publicly.',
    shame: 'Shame this user publicly.',
    rotten_tomato: 'Throw a rotten tomato for maximum effect.',
    royal_decree: 'Issue a royal decree against this user.',
    public_mockery: 'Subject this user to public mockery.',
    challenge: 'Challenge this user to a spending contest.',
    joust: 'Challenge this user to a royal joust.',
    duel: 'Challenge this user to a spending duel.'
  };

  return descriptions[action] || 'No description available.';
};

// Get the cost of a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costMap: Record<MockeryAction, number> = {
    tomato: 10,
    egg: 25,
    putridEgg: 50,
    rotten_egg: 50,
    crown: 100,
    thumbsDown: 5,
    thumbs_down: 5,
    mock: 15,
    stocks: 75,
    jester: 60,
    courtJester: 150,
    silence: 200,
    taunt: 30,
    smokeBomb: 40,
    protection: 500,
    flame: 20,
    heart: 15,
    skull: 35,
    laugh: 10,
    shame: 50,
    rotten_tomato: 40,
    royal_decree: 1000,
    public_mockery: 100,
    challenge: 250,
    joust: 500,
    duel: 1000
  };

  return costMap[action] || 50;
};

// Get the tier of a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tierMap: Record<MockeryAction, MockeryTier> = {
    tomato: 'common',
    egg: 'common',
    putridEgg: 'uncommon',
    rotten_egg: 'uncommon',
    crown: 'rare',
    thumbsDown: 'basic',
    thumbs_down: 'basic',
    mock: 'basic',
    stocks: 'uncommon',
    jester: 'uncommon',
    courtJester: 'rare',
    silence: 'epic',
    taunt: 'common',
    smokeBomb: 'uncommon',
    protection: 'legendary',
    flame: 'common',
    heart: 'basic',
    skull: 'uncommon',
    laugh: 'basic',
    shame: 'uncommon',
    rotten_tomato: 'uncommon',
    royal_decree: 'legendary',
    public_mockery: 'rare',
    challenge: 'epic',
    joust: 'legendary',
    duel: 'legendary'
  };

  return tierMap[action] || 'common';
};

// Get the action icon
export const getMockeryActionIcon = (action: MockeryAction): string => {
  // This would typically return different icon names based on the action
  return action;
};

// Get color for mockery tier
export const getMockeryTierColor = (tier: MockeryTier): string => {
  const colorMap: Record<MockeryTier, string> = {
    basic: 'text-gray-400',
    common: 'text-green-500',
    uncommon: 'text-blue-500',
    rare: 'text-purple-500',
    epic: 'text-orange-500',
    legendary: 'text-yellow-400',
    advanced: 'text-blue-600',
    royal: 'text-royal-purple'
  };

  return colorMap[tier] || 'text-gray-400';
};

// Get the mockery action name (alias for consistency)
export const getMockeryActionName = getMockeryName;
