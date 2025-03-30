
import { MockeryAction } from '@/types/mockery';

export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'eggs':
    case 'putridEggs':
      return 'mockery-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'dunce':
      return 'mockery-dunce';
    case 'silence':
      return 'mockery-silence';
    case 'courtJester':
      return 'mockery-jester';
    case 'jester':
      return 'mockery-jester';
    case 'royalPie':
      return 'mockery-pie';
    case 'jokeCrown':
      return 'mockery-joke-crown';
    case 'memeFrame':
      return 'mockery-meme';
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
    case 'shame':
      return 'mockery-shame';
    case 'taunt':
      return 'mockery-taunt';
    case 'guillotine':
      return 'mockery-guillotine';
    case 'dungeons':
      return 'mockery-dungeon';
    case 'removal':
      return 'mockery-removal';
    default:
      return 'mockery-default';
  }
};
