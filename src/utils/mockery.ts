
import { MockeryAction } from '@/types/mockery';

/**
 * Get the name of a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Rotten Tomatoes';
    case 'eggs':
      return 'Egg Barrage';
    case 'putridEggs':
      return 'Putrid Eggs';
    case 'stocks':
      return 'Public Stocks';
    case 'crown':
      return 'Crown Theft';
    case 'jester':
      return 'Jester Humiliation';
    case 'courtJester':
      return 'Court Jester';
    case 'smokeBomb':
      return 'Smoke Bomb';
    case 'silence':
      return 'Royal Silencing';
    case 'shame':
      return 'Walk of Shame';
    case 'protection':
      return 'Royal Protection';
    case 'taunt':
      return 'Royal Taunt';
    case 'mock':
      return 'Public Mockery';
    case 'challenge':
      return 'Challenge';
    case 'joust':
      return 'Joust';
    case 'duel':
      return 'Duel';
    default:
      return 'Unknown Mockery';
  }
};

/**
 * Get the description of a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw rotten tomatoes at a noble.';
    case 'eggs':
      return 'Pelt a noble with eggs.';
    case 'putridEggs':
      return 'Throw putrid eggs that leave a lasting stench.';
    case 'crown':
      return 'Temporarily steal a noble\'s crown.';
    case 'stocks':
      return 'Put a noble in the public stocks.';
    case 'jester':
      return 'Force a noble to dress as a jester.';
    case 'courtJester':
      return 'Make the noble your personal court jester.';
    case 'smokeBomb':
      return 'Temporarily obscure a noble\'s profile with smoke.';
    case 'silence':
      return 'Prevent a noble from speaking in public forums.';
    case 'shame':
      return 'Force a noble on a public walk of shame.';
    case 'protection':
      return 'Shield yourself from mockery.';
    case 'taunt':
      return 'Publicly taunt another noble.';
    case 'mock':
      return 'Mock another noble publicly.';
    case 'challenge':
      return 'Challenge a noble to a contest.';
    case 'joust':
      return 'Challenge a noble to a joust.';
    case 'duel':
      return 'Challenge a noble to a duel.';
    default:
      return 'A mysterious form of mockery.';
  }
};
