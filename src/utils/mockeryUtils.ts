
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { Target, Shield, Crown, Egg, Lock, MessageSquareOff, Cloud, Flame, Sparkles, Smile, Scissors, Trash, Eye, Zap } from 'lucide-react';
import React from 'react';

// Get mockery name
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'tomatoes': 'Rotten Tomatoes',
    'eggs': 'Rotten Eggs',
    'putridEggs': 'Putrid Eggs',
    'stocks': 'Public Stocks',
    'dunce': 'Dunce Cap',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Royal Protection',
    'immune': 'Royal Immunity',
    'glitterBomb': 'Glitter Bomb',
    'royalPie': 'Royal Pie',
    'jokeCrown': 'Joke Crown',
    'memeFrame': 'Meme Frame',
    'jester': 'Jester Hat',
    'roast': 'Royal Roast',
    'ridicule': 'Public Ridicule',
    'humiliate': 'Humiliation',
    'expose': 'Exposure',
    'mock': 'Mockery',
    'shame': 'Shame',
    'taunt': 'Taunt',
    'guillotine': 'Guillotine',
    'dungeons': 'Dungeons',
    'removal': 'Removal',
    'target': 'Target',
    'challenge': 'Challenge',
    'crown': 'Crown',
    'jest': 'Jest',
    'defeat': 'Defeat'
  };
  
  return names[action] || action;
};

// Get mockery description
export const getMockeryDescription = (action: MockeryAction, username = 'the target'): string => {
  const descriptions: Record<MockeryAction, string> = {
    'tomatoes': `Splatter ${username} with rotten tomatoes, leaving them marked with shame for 24 hours.`,
    'eggs': `Pelt ${username} with eggs, causing them embarrassment for 12 hours.`,
    'putridEggs': `Bombard ${username} with putrid eggs that leave a lingering stench for 48 hours.`,
    'stocks': `Place ${username} in the public stocks for 72 hours of humiliation.`,
    'dunce': `Force ${username} to wear a dunce cap for 36 hours.`,
    'silence': `Silence ${username} for 24 hours, preventing them from speaking in public forums.`,
    'courtJester': `Make ${username} the court jester for 48 hours, forced to entertain others.`,
    'smokeBomb': `Drop a smoke bomb that obscures ${username} temporarily for 6 hours.`,
    'protection': `Protect yourself from mockery for 7 days.`,
    'immune': `Grant yourself royal immunity from mockery for 30 days.`,
    'glitterBomb': `Cover ${username} in glitter they can't wash off for 12 hours.`,
    'royalPie': `Splat a royal pie in ${username}'s face for 24 hours of sticky embarrassment.`,
    'jokeCrown': `Crown ${username} as the kingdom's fool for 72 hours.`,
    'memeFrame': `Frame ${username}'s profile in ridiculous memes for 48 hours.`,
    'jester': `Force ${username} to wear a jester hat and bells for 48 hours of ridicule.`,
    'roast': `Publicly roast ${username} with witty insults for 24 hours.`,
    'ridicule': `Subject ${username} to public ridicule for 48 hours.`,
    'humiliate': `Humiliate ${username} in front of the entire kingdom for 72 hours.`,
    'expose': `Expose ${username}'s embarrassing moments for all to see for 48 hours.`,
    'mock': `Mock ${username}'s appearance and mannerisms for 24 hours.`,
    'shame': `Bring shame upon ${username} for 36 hours.`,
    'taunt': `Taunt ${username} with jeers and insults for 12 hours.`,
    'guillotine': `Subject ${username} to a symbolic guillotine for 72 hours.`,
    'dungeons': `Send ${username} to the digital dungeons for 48 hours.`,
    'removal': `Remove ${username} from public view for 24 hours.`,
    'target': `Make ${username} a target for ridicule.`,
    'challenge': `Challenge ${username} to a duel of wits.`,
    'crown': `Bestow a mocking crown upon ${username}.`,
    'jest': `Make a jest of ${username}.`,
    'defeat': `Declare public defeat of ${username}.`
  };
  
  return descriptions[action] || `Apply this mysterious action to ${username}.`;
};

// Get mockery cost
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    'tomatoes': 5,
    'eggs': 10,
    'putridEggs': 25,
    'stocks': 50,
    'dunce': 35,
    'silence': 75,
    'courtJester': 100,
    'smokeBomb': 20,
    'protection': 150,
    'immune': 500,
    'glitterBomb': 35,
    'royalPie': 50,
    'jokeCrown': 75,
    'memeFrame': 100,
    'jester': 45,
    'roast': 30,
    'ridicule': 40,
    'humiliate': 60,
    'expose': 55,
    'mock': 25,
    'shame': 35,
    'taunt': 15,
    'guillotine': 85,
    'dungeons': 70,
    'removal': 40,
    'target': 5,
    'challenge': 10,
    'crown': 50,
    'jest': 20,
    'defeat': 25
  };
  
  return costs[action] || 10;
};

// Get mockery cooldown
export const getMockeryCooldown = (action: MockeryAction): number => {
  const cooldowns: Record<MockeryAction, number> = {
    'tomatoes': 12 * 60 * 60 * 1000, // 12 hours
    'eggs': 6 * 60 * 60 * 1000, // 6 hours
    'putridEggs': 24 * 60 * 60 * 1000, // 24 hours
    'stocks': 36 * 60 * 60 * 1000, // 36 hours
    'dunce': 18 * 60 * 60 * 1000, // 18 hours
    'silence': 12 * 60 * 60 * 1000, // 12 hours
    'courtJester': 24 * 60 * 60 * 1000, // 24 hours
    'smokeBomb': 3 * 60 * 60 * 1000, // 3 hours
    'protection': 0, // No cooldown
    'immune': 0, // No cooldown
    'glitterBomb': 6 * 60 * 60 * 1000, // 6 hours
    'royalPie': 12 * 60 * 60 * 1000, // 12 hours
    'jokeCrown': 36 * 60 * 60 * 1000, // 36 hours
    'memeFrame': 24 * 60 * 60 * 1000, // 24 hours
    'jester': 24 * 60 * 60 * 1000, // 24 hours
    'roast': 12 * 60 * 60 * 1000, // 12 hours
    'ridicule': 18 * 60 * 60 * 1000, // 18 hours
    'humiliate': 30 * 60 * 60 * 1000, // 30 hours
    'expose': 24 * 60 * 60 * 1000, // 24 hours
    'mock': 12 * 60 * 60 * 1000, // 12 hours
    'shame': 18 * 60 * 60 * 1000, // 18 hours
    'taunt': 6 * 60 * 60 * 1000, // 6 hours
    'guillotine': 36 * 60 * 60 * 1000, // 36 hours
    'dungeons': 24 * 60 * 60 * 1000, // 24 hours
    'removal': 18 * 60 * 60 * 1000, // 18 hours
    'target': 6 * 60 * 60 * 1000,
    'challenge': 12 * 60 * 60 * 1000,
    'crown': 24 * 60 * 60 * 1000,
    'jest': 6 * 60 * 60 * 1000,
    'defeat': 12 * 60 * 60 * 1000
  };
  
  return cooldowns[action] || 12 * 60 * 60 * 1000;
};

// Get mockery tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (action === 'tomatoes' || action === 'eggs' || action === 'smokeBomb' || action === 'taunt' || action === 'target' || action === 'jest') {
    return 'common';
  }
  
  if (action === 'putridEggs' || action === 'dunce' || action === 'glitterBomb' || 
      action === 'jester' || action === 'mock' || action === 'roast' || 
      action === 'shame' || action === 'challenge' || action === 'defeat') {
    return 'uncommon';
  }
  
  if (action === 'stocks' || action === 'silence' || action === 'royalPie' || 
      action === 'memeFrame' || action === 'protection' || action === 'ridicule' || 
      action === 'expose' || action === 'removal') {
    return 'rare';
  }
  
  if (action === 'courtJester' || action === 'jokeCrown' || action === 'humiliate' || 
      action === 'dungeons' || action === 'crown') {
    return 'epic';
  }
  
  if (action === 'immune' || action === 'guillotine') {
    return 'legendary';
  }
  
  return 'common';
};

// Get the tier color class
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  if (tier === 'bronze') return 'text-amber-700';
  if (tier === 'silver') return 'text-gray-300';
  if (tier === 'gold') return 'text-amber-400';
  if (tier === 'platinum') return 'text-gray-200';
  if (tier === 'diamond') return 'text-blue-300';
  if (tier === 'common') return 'text-gray-300';
  if (tier === 'uncommon') return 'text-green-400';
  if (tier === 'rare') return 'text-blue-400';
  if (tier === 'epic') return 'text-purple-400';
  if (tier === 'legendary') return 'text-amber-400';
  
  return 'text-white';
};

// Get the mockery action icon component
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return Flame;
    case 'eggs':
    case 'putridEggs':
      return Egg;
    case 'stocks':
      return Lock;
    case 'silence':
      return MessageSquareOff;
    case 'courtJester':
    case 'jester':
      return Crown;
    case 'smokeBomb':
      return Cloud;
    case 'protection':
    case 'immune':
      return Shield;
    case 'glitterBomb':
      return Sparkles;
    case 'royalPie':
      return Target;
    case 'jokeCrown':
      return Crown;
    case 'memeFrame':
      return Flame;
    case 'roast':
      return Flame;
    case 'ridicule':
      return Smile;
    case 'humiliate':
      return Flame;
    case 'expose':
      return Eye;
    case 'mock':
      return Smile;
    case 'shame':
      return Flame;
    case 'taunt':
      return Smile;
    case 'guillotine':
      return Scissors;
    case 'dungeons':
      return Lock;
    case 'removal':
      return Trash;
    case 'target':
      return Target;
    case 'challenge':
      return Zap;
    case 'crown':
      return Crown;
    case 'jest':
      return Smile;
    case 'defeat':
      return Trash;
    default:
      return Target;
  }
};

// Get active mockery class for UI styling
export const getActiveMockeryClass = (action: MockeryAction): string => {
  // Create CSS class names for different mockery effects
  switch (action) {
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'eggs':
      return 'mockery-eggs';
    case 'putridEggs':
      return 'mockery-putrid';
    case 'stocks':
      return 'mockery-stocks';
    case 'dunce':
      return 'mockery-dunce';
    case 'silence':
      return 'mockery-silence';
    default:
      return 'mockery-generic';
  }
};

// Export all the renamed functions to be backward compatible
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;
