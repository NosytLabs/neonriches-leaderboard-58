
import React from 'react';
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { getMockeryActionIcon, getMockeryActionIconColor } from './mockery/mockery-icons';

// Get the display name for a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<string, string> = {
    'tomatoes': 'Rotten Tomatoes',
    'eggs': 'Rotten Eggs',
    'crown': 'Fool\'s Crown',
    'stocks': 'Public Stocks',
    'jester': 'Court Jester',
    'protection': 'Royal Protection',
    'shame': 'Royal Shame',
    'target': 'Royal Target',
    'putridEggs': 'Putrid Eggs',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'immune': 'Royal Immunity',
    'dunce': 'Dunce Cap',
    'glitterBomb': 'Glitter Bomb',
    'royalPie': 'Royal Pie',
    'jokeCrown': 'Joke Crown',
    'memeFrame': 'Meme Frame',
    'roast': 'Royal Roast',
    'ridicule': 'Public Ridicule',
    'humiliate': 'Royal Humiliation',
    'expose': 'Public Exposure',
    'mock': 'Royal Mockery',
    'taunt': 'Royal Taunt',
    'guillotine': 'Royal Guillotine',
    'dungeons': 'Royal Dungeons',
    'removal': 'Royal Removal',
    'troll': 'Royal Troll',
    'peasant': 'Make Peasant',
    'rat': 'Royal Rat',
    'ghost': 'Royal Ghost',
    'skeleton': 'Royal Skeleton',
    'zombie': 'Royal Zombie',
    'witch': 'Royal Witch',
    'monster': 'Royal Monster',
    'dragon': 'Royal Dragon',
    'jest': 'Royal Jest',
    'challenge': 'Royal Challenge',
    'defeat': 'Royal Defeat',
    'laughing': 'Royal Laughing'
  };
  
  return names[action] || 'Unknown Mockery';
};

// Get the description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    'tomatoes': 'Throw rotten tomatoes at this user',
    'eggs': 'Pelt this user with rotten eggs',
    'crown': 'Place a ridiculous crown on their profile',
    'stocks': 'Lock them in the public stocks',
    'jester': 'Make them wear the jester\'s hat',
    'protection': 'Protect yourself from mockery',
    'shame': 'Publicly shame this user',
    'target': 'Mark this user as a target',
    'putridEggs': 'Throw especially putrid eggs',
    'silence': 'Silence this user',
    'courtJester': 'Make them the court jester',
    'smokeBomb': 'Deploy a smoke bomb',
    'immune': 'Grant immunity from mockery',
    'dunce': 'Make them wear a dunce cap',
    'glitterBomb': 'Throw a glitter bomb',
    'royalPie': 'Throw a royal pie',
    'jokeCrown': 'Place a joke crown',
    'memeFrame': 'Frame them in a meme',
    'roast': 'Roast this user',
    'ridicule': 'Ridicule this user',
    'humiliate': 'Humiliate this user',
    'expose': 'Expose this user',
    'mock': 'Mock this user',
    'taunt': 'Taunt this user',
    'guillotine': 'Send to the guillotine',
    'dungeons': 'Send to the dungeons',
    'removal': 'Remove from the kingdom',
    'troll': 'Troll this user',
    'peasant': 'Demote to peasant',
    'rat': 'Turn into a rat',
    'ghost': 'Turn into a ghost',
    'skeleton': 'Turn into a skeleton',
    'zombie': 'Turn into a zombie',
    'witch': 'Call them a witch',
    'monster': 'Call them a monster',
    'dragon': 'Call them a dragon',
    'jest': 'Make a jest of them',
    'challenge': 'Challenge to a duel',
    'defeat': 'Declare defeat',
    'laughing': 'Laugh at them'
  };
  
  return descriptions[action] || 'A mysterious form of mockery';
};

// Get the cost for a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<string, number> = {
    'tomatoes': 1.00,
    'eggs': 1.25,
    'crown': 2.50,
    'stocks': 3.00,
    'jester': 5.00,
    'protection': 10.00,
    'shame': 1.50,
    'target': 2.00,
    'putridEggs': 2.50,
    'silence': 5.00,
    'courtJester': 7.50,
    'smokeBomb': 3.00,
    'immune': 15.00,
    'dunce': 2.00,
    'glitterBomb': 3.00,
    'royalPie': 4.00,
    'jokeCrown': 3.50,
    'memeFrame': 2.00,
    'roast': 2.50,
    'ridicule': 3.00,
    'humiliate': 5.00,
    'expose': 4.00,
    'mock': 1.50,
    'taunt': 1.00,
    'guillotine': 10.00,
    'dungeons': 7.50,
    'removal': 5.00,
    'troll': 2.00,
    'peasant': 3.00,
    'rat': 4.00,
    'ghost': 5.00,
    'skeleton': 6.00,
    'zombie': 7.00,
    'witch': 8.00,
    'monster': 9.00,
    'dragon': 10.00,
    'jest': 2.00,
    'challenge': 5.00,
    'defeat': 1.00,
    'laughing': 1.50
  };
  
  return costs[action] || 1.00;
};

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'common',
    'crown': 'uncommon',
    'stocks': 'common',
    'jester': 'uncommon',
    'protection': 'legendary',
    'shame': 'common',
    'target': 'common',
    'putridEggs': 'uncommon',
    'silence': 'rare',
    'courtJester': 'rare',
    'smokeBomb': 'uncommon',
    'immune': 'legendary',
    'dunce': 'common',
    'glitterBomb': 'uncommon',
    'royalPie': 'rare',
    'jokeCrown': 'uncommon',
    'memeFrame': 'common',
    'roast': 'common',
    'ridicule': 'uncommon',
    'humiliate': 'rare',
    'expose': 'rare',
    'mock': 'common',
    'taunt': 'common',
    'guillotine': 'epic',
    'dungeons': 'rare',
    'removal': 'rare',
    'troll': 'uncommon',
    'peasant': 'uncommon',
    'rat': 'rare',
    'ghost': 'rare',
    'skeleton': 'rare',
    'zombie': 'epic',
    'witch': 'epic',
    'monster': 'epic',
    'dragon': 'legendary',
    'jest': 'common',
    'challenge': 'rare',
    'defeat': 'common',
    'laughing': 'common'
  };
  
  return tiers[action] || 'common';
};

// Get the CSS class for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors: Record<string, string> = {
    'common': 'text-gray-400',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-yellow-400',
    'basic': 'text-gray-400',
    'premium': 'text-blue-400',
    'royal': 'text-yellow-400',
    'silver': 'text-gray-400',
    'bronze': 'text-amber-700'
  };
  
  return colors[tier] || 'text-gray-400';
};

// Get the rarity for a mockery tier
export const getMockeryTierRarity = (tier: MockeryTier): string => {
  const rarities: Record<string, string> = {
    'common': 'Common',
    'uncommon': 'Uncommon',
    'rare': 'Rare',
    'epic': 'Epic',
    'legendary': 'Legendary',
    'basic': 'Basic',
    'premium': 'Premium',
    'royal': 'Royal',
    'silver': 'Silver',
    'bronze': 'Bronze'
  };
  
  return rarities[tier] || 'Common';
};

// Get the duration for a mockery action in hours
export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Record<string, number> = {
    'tomatoes': 24,
    'eggs': 48,
    'crown': 72,
    'stocks': 24,
    'jester': 48,
    'protection': 168, // 7 days
    'shame': 24,
    'target': 24,
    'putridEggs': 48,
    'silence': 12,
    'courtJester': 72,
    'smokeBomb': 6,
    'immune': 168,
    'dunce': 24,
    'glitterBomb': 24,
    'royalPie': 48,
    'jokeCrown': 72,
    'memeFrame': 24,
    'roast': 24,
    'ridicule': 48,
    'humiliate': 72,
    'expose': 48,
    'mock': 24,
    'taunt': 12,
    'guillotine': 96,
    'dungeons': 72,
    'removal': 48,
    'troll': 24,
    'peasant': 48,
    'rat': 48,
    'ghost': 48,
    'skeleton': 48,
    'zombie': 72,
    'witch': 72,
    'monster': 72,
    'dragon': 96,
    'jest': 24,
    'challenge': 48,
    'defeat': 12,
    'laughing': 24
  };
  
  return durations[action] || 24;
};

// Check if there's a weekly discount for a mockery action
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === getWeeklyDiscountedAction();
};

// Get the weekly discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // This would normally be dynamic based on the current week,
  // but we'll use a fixed value for simplicity
  return 'eggs';
};

// Get the discounted price for a mockery action
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const basePrice = getMockeryCost(action);
  return basePrice * 0.75; // 25% discount
};

// Get the price for a shame action
export const getShameActionPrice = (action: MockeryAction): number => {
  return hasWeeklyDiscount(action) ? getDiscountedShamePrice(action) : getMockeryCost(action);
};

// Get a message for a shame action
export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<string, string> = {
    'tomatoes': `You've thrown rotten tomatoes at ${username}!`,
    'eggs': `You've pelted ${username} with rotten eggs!`,
    'crown': `You've placed a fool's crown on ${username}!`,
    'stocks': `You've locked ${username} in the public stocks!`,
    'jester': `You've made ${username} wear the jester's hat!`,
    'protection': `You've bought royal protection for yourself!`,
    'shame': `You've publicly shamed ${username}!`,
    'target': `You've targeted ${username}!`,
    'putridEggs': `You've thrown putrid eggs at ${username}!`,
    'silence': `You've silenced ${username}!`,
    'courtJester': `You've made ${username} the court jester!`,
    'smokeBomb': `You've thrown a smoke bomb at ${username}!`,
    'immune': `You've granted immunity to ${username}!`,
    'dunce': `You've made ${username} wear a dunce cap!`,
    'glitterBomb': `You've thrown a glitter bomb at ${username}!`,
    'royalPie': `You've thrown a royal pie at ${username}!`,
    'jokeCrown': `You've placed a joke crown on ${username}!`,
    'memeFrame': `You've framed ${username} in a meme!`,
    'roast': `You've roasted ${username}!`,
    'ridicule': `You've ridiculed ${username}!`,
    'humiliate': `You've humiliated ${username}!`,
    'expose': `You've exposed ${username}!`,
    'mock': `You've mocked ${username}!`,
    'taunt': `You've taunted ${username}!`,
    'guillotine': `You've sent ${username} to the guillotine!`,
    'dungeons': `You've sent ${username} to the dungeons!`,
    'removal': `You've removed ${username} from the kingdom!`,
    'troll': `You've trolled ${username}!`,
    'peasant': `You've demoted ${username} to peasant!`,
    'rat': `You've turned ${username} into a rat!`,
    'ghost': `You've turned ${username} into a ghost!`,
    'skeleton': `You've turned ${username} into a skeleton!`,
    'zombie': `You've turned ${username} into a zombie!`,
    'witch': `You've called ${username} a witch!`,
    'monster': `You've called ${username} a monster!`,
    'dragon': `You've called ${username} a dragon!`,
    'jest': `You've made a jest of ${username}!`,
    'challenge': `You've challenged ${username} to a duel!`,
    'defeat': `You've declared defeat to ${username}!`,
    'laughing': `You're laughing at ${username}!`
  };
  
  return messages[action] || `You've mocked ${username}!`;
};

// Get CSS class for active mockery
export const getActiveMockeryClass = (action?: MockeryAction): string => {
  const classes: Record<string, string> = {
    'tomatoes': 'mockery-tomatoes',
    'eggs': 'mockery-eggs',
    'crown': 'mockery-crown',
    'stocks': 'mockery-stocks',
    'jester': 'mockery-jester',
    'protection': 'mockery-protection',
    'shame': 'mockery-shame',
    'target': 'mockery-target',
    'putridEggs': 'mockery-putrid-eggs',
    'silence': 'mockery-silence',
    'courtJester': 'mockery-court-jester',
    'smokeBomb': 'mockery-smoke-bomb',
    'immune': 'mockery-immune',
    'dunce': 'mockery-dunce',
    'glitterBomb': 'mockery-glitter-bomb',
    'royalPie': 'mockery-royal-pie',
    'jokeCrown': 'mockery-joke-crown',
    'memeFrame': 'mockery-meme-frame',
    'roast': 'mockery-roast',
    'ridicule': 'mockery-ridicule',
    'humiliate': 'mockery-humiliate',
    'expose': 'mockery-expose',
    'mock': 'mockery-mock',
    'taunt': 'mockery-taunt',
    'guillotine': 'mockery-guillotine',
    'dungeons': 'mockery-dungeons',
    'removal': 'mockery-removal',
    'troll': 'mockery-troll',
    'peasant': 'mockery-peasant',
    'rat': 'mockery-rat',
    'ghost': 'mockery-ghost',
    'skeleton': 'mockery-skeleton',
    'zombie': 'mockery-zombie',
    'witch': 'mockery-witch',
    'monster': 'mockery-monster',
    'dragon': 'mockery-dragon',
    'jest': 'mockery-jest',
    'challenge': 'mockery-challenge',
    'defeat': 'mockery-defeat',
    'laughing': 'mockery-laughing'
  };
  
  return action ? (classes[action] || '') : '';
};

// Render mockery icon
export const renderMockeryIcon = (action: MockeryAction, size = 24): JSX.Element => {
  const Icon = getMockeryActionIcon(action);
  const color = getMockeryActionIconColor(action);
  
  return <Icon className={`${color}`} size={size} />;
};

// Additional exports to match component imports
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getShameActionPrice;
