
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
    default:
      return 10;
  }
};

export default getMockeryActionPrice;
