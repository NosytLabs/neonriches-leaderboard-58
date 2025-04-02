
import { MockeryAction } from '@/types/mockery-types';

export const getMockeryActionName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomato: 'Tomato Throw',
    egg: 'Rotten Egg',
    putridEgg: 'Putrid Egg',
    crown: 'Crown Bestow',
    thumbsDown: 'Royal Disapproval',
    mock: 'Public Mockery',
    stocks: 'Stocks Punishment',
    jester: 'Jester Mock',
    courtJester: 'Court Jester',
    silence: 'Royal Silence',
    taunt: 'Public Taunt',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection',
    flame: 'Flame Roast',
    heart: 'Heart Award',
    skull: 'Death Stare',
    laugh: 'Royal Laughter'
  };

  return names[action] || action;
};
