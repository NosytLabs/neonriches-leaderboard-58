
import { MockeryAction } from '@/types/mockery';

/**
 * Get CSS class for active mockery effect
 */
export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'eggs':
      return 'mockery-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'dunce':
      return 'mockery-dunce';
    case 'jester':
      return 'mockery-jester';
    case 'crown':
      return 'mockery-crown';
    case 'taunt':
      return 'mockery-taunt';
    case 'shame':
      return 'mockery-shame';
    case 'putridEggs':
      return 'mockery-putrid-eggs';
    case 'silence':
      return 'mockery-silence';
    default:
      return '';
  }
};

export default getActiveMockeryClass;
