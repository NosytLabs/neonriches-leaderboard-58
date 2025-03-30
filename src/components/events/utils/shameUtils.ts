
import { MockeryAction } from '@/types/mockery';

/**
 * Get the icon name for a shame action
 */
export const getShameActionIconName = (action: MockeryAction | string): string => {
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

/**
 * Get the display name for a shame action
 */
export const getShameActionDisplayName = (action: MockeryAction | string): string => {
  switch (action) {
    case 'tomatoes':
      return 'Rotten Tomatoes';
    case 'eggs':
      return 'Eggs';
    case 'stocks':
      return 'Stocks';
    case 'dunce':
      return 'Dunce Cap';
    case 'jester':
      return 'Court Jester';
    case 'crown':
      return 'Fake Crown';
    case 'taunt':
      return 'Royal Taunt';
    case 'shame':
      return 'Public Shame';
    case 'putridEggs':
      return 'Putrid Eggs';
    case 'silence':
      return 'Royal Silence';
    default:
      return 'Unknown Action';
  }
};

/**
 * Get the price for a shame action
 */
export const getShameActionPrice = (action: MockeryAction | string): number => {
  switch (action) {
    case 'tomatoes':
      return 5;
    case 'eggs':
      return 10;
    case 'stocks':
      return 25;
    case 'dunce':
      return 50;
    case 'jester':
      return 75;
    case 'crown':
      return 100;
    case 'taunt':
      return 150;
    case 'shame':
      return 200;
    case 'putridEggs':
      return 250;
    case 'silence':
      return 500;
    default:
      return 10;
  }
};
