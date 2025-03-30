
import { MockeryAction } from '@/types/mockery';

/**
 * Get the cost of a mockery action
 */
export const getMockeryCost = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 5;
    case 'eggs': return 10;
    case 'putridEggs': return 20;
    case 'stocks': return 25;
    case 'dunce': return 30;
    case 'silence': return 35;
    case 'courtJester': return 40;
    case 'smokeBomb': return 45;
    case 'protection': return 50;
    case 'jest': return 60;
    case 'glitterBomb': return 75;
    case 'defeat': return 100;
    case 'immune': return 150;
    case 'guillotine': return 75;
    case 'dungeons': return 100;
    case 'removal': return 200;
    case 'roast': return 50;
    case 'royalPie': return 25;
    case 'jokeCrown': return 100;
    case 'memeFrame': return 40;
    case 'crown': return 150;
    case 'challenge': return 200;
    case 'target': return 175;
    default: return 10;
  }
};

/**
 * Get price for a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};

/**
 * Get the duration in days for a mockery effect
 */
export const getMockeryDuration = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
      return 1; // 1 day
    case 'putridEggs':
    case 'stocks':
    case 'dunce':
      return 2; // 2 days
    case 'silence':
    case 'courtJester':
    case 'smokeBomb':
      return 3; // 3 days
    case 'jest':
    case 'glitterBomb':
    case 'royalPie':
    case 'memeFrame':
      return 5; // 5 days
    case 'defeat':
    case 'guillotine':
    case 'dungeons':
    case 'roast':
    case 'jokeCrown':
      return 7; // 7 days
    case 'crown':
    case 'challenge':
    case 'target':
      return 10; // 10 days
    case 'removal':
      return 1; // 1 day
    case 'protection':
      return 7; // 7 days
    case 'immune':
      return 30; // 30 days
    default:
      return 3; // 3 days
  }
};

/**
 * Get the cooldown in hours before a user can be mocked again
 */
export const getMockeryCooldown = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
      return 6; // 6 hours
    case 'putridEggs':
    case 'stocks':
    case 'dunce':
      return 12; // 12 hours
    case 'silence':
    case 'courtJester':
    case 'smokeBomb':
      return 24; // 24 hours
    case 'jest':
    case 'glitterBomb':
    case 'royalPie':
    case 'memeFrame':
      return 48; // 48 hours
    case 'defeat':
    case 'guillotine':
    case 'dungeons':
    case 'roast':
    case 'jokeCrown':
      return 72; // 72 hours
    case 'crown':
    case 'challenge':
    case 'target':
      return 96; // 96 hours
    case 'removal':
      return 168; // 168 hours (7 days)
    default:
      return 24; // 24 hours
  }
};

export { getMockeryCost, getMockeryActionPrice, getMockeryDuration, getMockeryCooldown };
