
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
    case 'courtJester':
      return 'mockery-court-jester';
    case 'smokeBomb':
      return 'mockery-smoke-bomb';
    case 'protection':
      return 'mockery-protection';
    case 'jest':
      return 'mockery-jest';
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
    case 'expose':
      return 'mockery-expose';
    case 'mock':
      return 'mockery-mock';
    case 'guillotine':
      return 'mockery-guillotine';
    case 'dungeons':
      return 'mockery-dungeons';
    case 'removal':
      return 'mockery-removal';
    case 'challenge':
      return 'mockery-challenge';
    case 'target':
      return 'mockery-target';
    case 'defeat':
      return 'mockery-defeat';
    case 'immune':
      return 'mockery-immune';
    default:
      return '';
  }
};

export default getActiveMockeryClass;
