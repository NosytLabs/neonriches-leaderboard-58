
import { MockeryAction } from '@/types/mockery';

/**
 * Get the appropriate icon name for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'tomato';
    case 'eggs':
      return 'egg';
    case 'stocks':
      return 'lock';
    case 'dunce':
      return 'hat';
    case 'jester':
      return 'jester';
    case 'crown':
      return 'crown';
    case 'taunt':
      return 'message';
    case 'shame':
      return 'thumbs-down';
    case 'putridEggs':
      return 'egg-rotten';
    case 'silence':
      return 'no-speak';
    default:
      return 'question';
  }
};

export default getMockeryActionIcon;
