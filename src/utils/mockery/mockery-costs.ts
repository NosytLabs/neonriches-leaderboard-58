
import { MockeryAction } from '@/types/mockery';

/**
 * Get the cost for a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 10;
    case 'eggs':
      return 15;
    case 'stocks':
      return 25;
    case 'dunce':
      return 35;
    case 'jester':
      return 50;
    case 'crown':
      return 75;
    case 'taunt':
      return 100;
    case 'shame':
      return 150;
    case 'putridEggs':
      return 200;
    case 'silence':
      return 250;
    case 'courtJester':
      return 60;
    case 'smokeBomb':
      return 70;
    case 'protection':
      return 100;
    case 'jest':
      return 45;
    case 'glitterBomb':
      return 80;
    case 'royalPie':
      return 90;
    case 'jokeCrown':
      return 85;
    case 'memeFrame':
      return 95;
    case 'roast':
      return 110;
    case 'ridicule':
      return 120;
    case 'humiliate':
      return 140;
    case 'expose':
      return 160;
    case 'mock':
      return 105;
    case 'guillotine':
      return 180;
    case 'dungeons':
      return 190;
    case 'removal':
      return 220;
    case 'challenge':
      return 120;
    case 'target':
      return 130;
    case 'defeat':
      return 160;
    case 'immune':
      return 240;
    default:
      return 10;
  }
};

export const getMockeryCost = getMockeryActionPrice;

export default getMockeryActionPrice;
