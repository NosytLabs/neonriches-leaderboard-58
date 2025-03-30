
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { Target, Shield, Crown, Egg, Lock, MessageSquareOff, Cloud, Flame, Sparkles, Smile, Scissors, Trash, Eye, Zap } from 'lucide-react';
import React from 'react';

// Get mockery name
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Rotten Tomatoes';
    case 'eggs': return 'Rotten Eggs';
    case 'putridEggs': return 'Putrid Eggs';
    case 'stocks': return 'Public Stocks';
    case 'dunce': return 'Dunce Cap';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    case 'smokeBomb': return 'Smoke Bomb';
    case 'protection': return 'Royal Protection';
    case 'immune': return 'Royal Immunity';
    case 'glitterBomb': return 'Glitter Bomb';
    case 'royalPie': return 'Royal Pie';
    case 'jokeCrown': return 'Joke Crown';
    case 'memeFrame': return 'Meme Frame';
    case 'jester': return 'Jester Hat';
    case 'roast': return 'Royal Roast';
    case 'ridicule': return 'Public Ridicule';
    case 'humiliate': return 'Humiliation';
    case 'expose': return 'Exposure';
    case 'mock': return 'Mockery';
    case 'shame': return 'Shame';
    case 'taunt': return 'Taunt';
    case 'guillotine': return 'Guillotine';
    case 'dungeons': return 'Dungeons';
    case 'removal': return 'Removal';
    case 'target': return 'Target';
    case 'challenge': return 'Challenge';
    case 'crown': return 'Crown';
    case 'jest': return 'Jest';
    case 'defeat': return 'Defeat';
    default: return action;
  }
};

// Get mockery description
export const getMockeryDescription = (action: MockeryAction, username = 'the target'): string => {
  switch (action) {
    case 'tomatoes':
      return `Splatter ${username} with rotten tomatoes, leaving them marked with shame for 24 hours.`;
    case 'eggs':
      return `Pelt ${username} with eggs, causing them embarrassment for 12 hours.`;
    case 'putridEggs':
      return `Bombard ${username} with putrid eggs that leave a lingering stench for 48 hours.`;
    case 'stocks':
      return `Place ${username} in the public stocks for 72 hours of humiliation.`;
    case 'dunce':
      return `Force ${username} to wear a dunce cap for 36 hours.`;
    case 'silence':
      return `Silence ${username} for 24 hours, preventing them from speaking in public forums.`;
    case 'courtJester':
      return `Make ${username} the court jester for 48 hours, forced to entertain others.`;
    case 'smokeBomb':
      return `Drop a smoke bomb that obscures ${username} temporarily for 6 hours.`;
    case 'protection':
      return `Protect yourself from mockery for 7 days.`;
    case 'immune':
      return `Grant yourself royal immunity from mockery for 30 days.`;
    case 'glitterBomb':
      return `Cover ${username} in glitter they can't wash off for 12 hours.`;
    case 'royalPie':
      return `Splat a royal pie in ${username}'s face for 24 hours of sticky embarrassment.`;
    case 'jokeCrown':
      return `Crown ${username} as the kingdom's fool for 72 hours.`;
    case 'memeFrame':
      return `Frame ${username}'s profile in ridiculous memes for 48 hours.`;
    case 'jester':
      return `Force ${username} to wear a jester hat and bells for 48 hours of ridicule.`;
    case 'roast':
      return `Publicly roast ${username} with witty insults for 24 hours.`;
    case 'ridicule':
      return `Subject ${username} to public ridicule for 48 hours.`;
    case 'humiliate':
      return `Humiliate ${username} in front of the entire kingdom for 72 hours.`;
    case 'expose':
      return `Expose ${username}'s embarrassing moments for all to see for 48 hours.`;
    case 'mock':
      return `Mock ${username}'s appearance and mannerisms for 24 hours.`;
    case 'shame':
      return `Bring shame upon ${username} for 36 hours.`;
    case 'taunt':
      return `Taunt ${username} with jeers and insults for 12 hours.`;
    case 'guillotine':
      return `Subject ${username} to a symbolic guillotine for 72 hours.`;
    case 'dungeons':
      return `Send ${username} to the digital dungeons for 48 hours.`;
    case 'removal':
      return `Remove ${username} from public view for 24 hours.`;
    case 'target':
      return `Make ${username} a target for ridicule.`;
    case 'challenge':
      return `Challenge ${username} to a duel of wits.`;
    case 'crown':
      return `Bestow a mocking crown upon ${username}.`;
    case 'jest':
      return `Make a jest of ${username}.`;
    case 'defeat':
      return `Declare public defeat of ${username}.`;
    default:
      return `Apply this mysterious action to ${username}.`;
  }
};

// Get mockery cost
export const getMockeryCost = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 5;
    case 'eggs': return 10;
    case 'putridEggs': return 25;
    case 'stocks': return 50;
    case 'dunce': return 35;
    case 'silence': return 75;
    case 'courtJester': return 100;
    case 'smokeBomb': return 20;
    case 'protection': return 150;
    case 'immune': return 500;
    case 'glitterBomb': return 35;
    case 'royalPie': return 50;
    case 'jokeCrown': return 75;
    case 'memeFrame': return 100;
    case 'jester': return 45;
    case 'roast': return 30;
    case 'ridicule': return 40;
    case 'humiliate': return 60;
    case 'expose': return 55;
    case 'mock': return 25;
    case 'shame': return 35;
    case 'taunt': return 15;
    case 'guillotine': return 85;
    case 'dungeons': return 70;
    case 'removal': return 40;
    case 'target': return 5;
    case 'challenge': return 10;
    case 'crown': return 50;
    case 'jest': return 20;
    case 'defeat': return 25;
    default: return 10;
  }
};

// Get mockery cooldown
export const getMockeryCooldown = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 12 * 60 * 60 * 1000; // 12 hours
    case 'eggs': return 6 * 60 * 60 * 1000; // 6 hours
    case 'putridEggs': return 24 * 60 * 60 * 1000; // 24 hours
    case 'stocks': return 36 * 60 * 60 * 1000; // 36 hours
    case 'dunce': return 18 * 60 * 60 * 1000; // 18 hours
    case 'silence': return 12 * 60 * 60 * 1000; // 12 hours
    case 'courtJester': return 24 * 60 * 60 * 1000; // 24 hours
    case 'smokeBomb': return 3 * 60 * 60 * 1000; // 3 hours
    case 'protection': return 0; // No cooldown
    case 'immune': return 0; // No cooldown
    case 'glitterBomb': return 6 * 60 * 60 * 1000; // 6 hours
    case 'royalPie': return 12 * 60 * 60 * 1000; // 12 hours
    case 'jokeCrown': return 36 * 60 * 60 * 1000; // 36 hours
    case 'memeFrame': return 24 * 60 * 60 * 1000; // 24 hours
    case 'jester': return 24 * 60 * 60 * 1000; // 24 hours
    case 'roast': return 12 * 60 * 60 * 1000; // 12 hours
    case 'ridicule': return 18 * 60 * 60 * 1000; // 18 hours
    case 'humiliate': return 30 * 60 * 60 * 1000; // 30 hours
    case 'expose': return 24 * 60 * 60 * 1000; // 24 hours
    case 'mock': return 12 * 60 * 60 * 1000; // 12 hours
    case 'shame': return 18 * 60 * 60 * 1000; // 18 hours
    case 'taunt': return 6 * 60 * 60 * 1000; // 6 hours
    case 'guillotine': return 36 * 60 * 60 * 1000; // 36 hours
    case 'dungeons': return 24 * 60 * 60 * 1000; // 24 hours
    case 'removal': return 18 * 60 * 60 * 1000; // 18 hours
    case 'target': return 6 * 60 * 60 * 1000;
    case 'challenge': return 12 * 60 * 60 * 1000;
    case 'crown': return 24 * 60 * 60 * 1000;
    case 'jest': return 6 * 60 * 60 * 1000;
    case 'defeat': return 12 * 60 * 60 * 1000;
    default: return 12 * 60 * 60 * 1000;
  }
};

// Get mockery tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (action === 'tomatoes' || action === 'eggs' || action === 'smokeBomb' || action === 'target' || action === 'jest') {
    return 'common';
  }
  
  if (action === 'putridEggs' || action === 'dunce' || action === 'glitterBomb' || 
      action === 'mock' || action === 'roast' || 
      action === 'challenge' || action === 'defeat') {
    return 'uncommon';
  }
  
  if (action === 'stocks' || action === 'silence' || 
      action === 'protection' || action === 'removal') {
    return 'rare';
  }
  
  if (action === 'courtJester' || action === 'crown') {
    return 'epic';
  }
  
  if (action === 'immune') {
    return 'legendary';
  }
  
  return 'common';
};

// Get the tier color class
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'bronze': return 'text-amber-700';
    case 'silver': return 'text-gray-300';
    case 'gold': return 'text-amber-400';
    case 'platinum': return 'text-gray-200';
    case 'diamond': return 'text-blue-300';
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-amber-400';
    default: return 'text-white';
  }
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
      return Crown;
    case 'smokeBomb':
      return Cloud;
    case 'protection':
    case 'immune':
      return Shield;
    case 'glitterBomb':
      return Sparkles;
    case 'target':
      return Target;
    case 'crown':
      return Crown;
    case 'jest':
      return Smile;
    case 'defeat':
      return Trash;
    case 'challenge':
      return Zap;
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
export const getMockeryDuration = getMockeryCooldown;

// Mockery descriptions, names, and costs for direct access
export const MOCKERY_DESCRIPTIONS = {
  tomatoes: "Pelt with rotten tomatoes for all to see.",
  eggs: "Hurl rotten eggs, covering them in putrid yolk.",
  putridEggs: "Bombard with particularly foul eggs.",
  stocks: "Place in the public stocks for a day of humiliation.",
  dunce: "Force to wear a dunce cap for all to see.",
  silence: "Prevent from speaking in public forums.",
  courtJester: "Make the court jester for your amusement.",
  protection: "Shield yourself from mockery attacks."
};

export const MOCKERY_NAMES = {
  tomatoes: "Rotten Tomatoes",
  eggs: "Rotten Eggs",
  putridEggs: "Putrid Eggs",
  stocks: "Public Stocks",
  dunce: "Dunce Cap",
  silence: "Royal Silence",
  courtJester: "Court Jester",
  protection: "Royal Protection"
};

export const MOCKERY_COSTS = {
  tomatoes: 5,
  eggs: 10,
  putridEggs: 25,
  stocks: 50,
  dunce: 35,
  silence: 75,
  courtJester: 100,
  protection: 150
};
