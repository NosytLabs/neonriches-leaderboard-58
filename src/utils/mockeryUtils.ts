
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Get class name for active mockery effect
export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
    case 'shame':
    case 'taunt':
      return 'mockery-tomatoes';
    case 'putridEggs':
    case 'eggs':
      return 'mockery-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'silence':
      return 'mockery-silence';
    case 'courtJester':
    case 'jester':
      return 'mockery-jester';
    case 'dunce':
      return 'mockery-dunce';
    case 'smokeBomb':
      return 'mockery-smoke-bomb';
    case 'glitterBomb':
      return 'mockery-glitter-bomb';
    case 'royalPie':
      return 'mockery-royal-pie';
    case 'jokeCrown':
      return 'mockery-joke-crown';
    case 'memeFrame':
      return 'mockery-meme-frame';
    case 'roast':
      return 'mockery-roast';
    case 'ridicule':
      return 'mockery-ridicule';
    case 'humiliate':
      return 'mockery-humiliate';
    case 'mock':
      return 'mockery-mock';
    case 'guillotine':
      return 'mockery-guillotine';
    case 'dungeons':
      return 'mockery-dungeons';
    case 'removal':
      return 'mockery-removal';
    case 'immune':
      return 'mockery-immune';
    case 'protection':
      return 'mockery-protection';
    case 'crown':
      return 'mockery-crown';
    case 'challenge':
      return 'mockery-challenge';
    case 'defeat':
      return 'mockery-defeat';
    case 'jest':
      return 'mockery-jest';
    default:
      return '';
  }
};

// Get the description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Plaster the profile with rotten tomatoes';
    case 'putridEggs':
    case 'eggs':
      return 'Shower the profile with putrid eggs';
    case 'stocks':
      return 'Lock the user in medieval stocks';
    case 'silence':
      return 'Silence the user with a royal decree';
    case 'courtJester':
    case 'jester':
      return 'Make the user wear a court jester outfit';
    case 'dunce':
      return 'Place a dunce cap on the user';
    case 'smokeBomb':
      return 'Deploy a royal smoke bomb effect';
    case 'glitterBomb':
      return 'Shower the profile with glitter';
    case 'royalPie':
      return 'Splatter the profile with a royal pie';
    case 'jokeCrown':
      return 'Place a joke crown on the user';
    case 'memeFrame':
      return 'Frame the profile with memes';
    case 'protection':
      return 'Shield yourself from mockery';
    default:
      return 'Apply a mockery effect';
  }
};

// Get the cost of a mockery action
export const getMockeryCost = (action: MockeryAction, tier?: MockeryTier): number => {
  const costMap: Record<MockeryAction, number> = {
    'tomatoes': 10,
    'eggs': 15,
    'putridEggs': 15,
    'stocks': 25,
    'silence': 50,
    'courtJester': 75,
    'jester': 75,
    'dunce': 20,
    'smokeBomb': 100,
    'glitterBomb': 80,
    'royalPie': 65,
    'jokeCrown': 90,
    'memeFrame': 45,
    'roast': 30,
    'ridicule': 35,
    'humiliate': 60,
    'mock': 20,
    'guillotine': 150,
    'dungeons': 125,
    'removal': 200,
    'protection': 50,
    'shame': 15,
    'taunt': 10,
    'jest': 20,
    'crown': 75,
    'challenge': 40,
    'defeat': 50,
    'immune': 60
  };

  return costMap[action] || 20;
};

// Get the tier of a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (
    action === 'tomatoes' ||
    action === 'eggs' ||
    action === 'smokeBomb' ||
    action === 'jest'
  ) {
    return 'common';
  } else if (
    action === 'putridEggs' ||
    action === 'dunce' ||
    action === 'glitterBomb' ||
    action === 'jester' ||
    action === 'mock' ||
    action === 'roast'
  ) {
    return 'uncommon';
  } else if (
    action === 'stocks' ||
    action === 'silence' ||
    action === 'royalPie' ||
    action === 'memeFrame' ||
    action === 'shame' ||
    action === 'ridicule' ||
    action === 'taunt' ||
    action === 'removal'
  ) {
    return 'rare';
  } else if (
    action === 'courtJester' ||
    action === 'jokeCrown' ||
    action === 'humiliate' ||
    action === 'dungeons' ||
    action === 'challenge' ||
    action === 'defeat'
  ) {
    return 'epic';
  } else if (
    action === 'immune' ||
    action === 'guillotine' ||
    action === 'crown' ||
    action === 'protection'
  ) {
    return 'legendary';
  }

  return 'common';
};
