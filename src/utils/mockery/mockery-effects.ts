
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
    case 'putridEggs':
      return 'mockery-putrid-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'dunce':
      return 'mockery-dunce';
    case 'silence':
      return 'mockery-silence';
    case 'courtJester':
      return 'mockery-jester';
    case 'smokeBomb':
      return 'mockery-smoke';
    case 'protection':
      return 'mockery-protected';
    case 'jest':
      return 'mockery-jest';
    case 'glitterBomb':
      return 'mockery-glitter';
    case 'defeat':
      return 'mockery-defeated';
    case 'immune':
      return 'mockery-immune';
    case 'guillotine':
      return 'mockery-guillotine';
    case 'dungeons':
      return 'mockery-dungeons';
    case 'removal':
      return 'mockery-removed';
    case 'roast':
      return 'mockery-roasted';
    case 'royalPie':
      return 'mockery-pied';
    case 'jokeCrown':
      return 'mockery-joke-crown';
    case 'memeFrame':
      return 'mockery-meme';
    case 'crown':
      return 'mockery-crowned';
    case 'challenge':
      return 'mockery-challenged';
    case 'target':
      return 'mockery-targeted';
    default:
      return 'mockery-default';
  }
};

export { getActiveMockeryClass };
