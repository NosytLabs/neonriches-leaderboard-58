
import { MockeryAction, MockeryTier, ShameAction, ExtendedMockeryAction } from '@/types/mockery';

/**
 * Gets the display title for a mockery action
 */
export const getMockeryTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Rotten Tomatoes';
    case 'putridEggs':
      return 'Putrid Eggs';
    case 'stocks':
      return 'Stocks of Shame';
    case 'silence':
      return 'Gag Order';
    case 'courtJester':
      return 'Court Jester';
    case 'dunce':
      return 'Dunce Cap';
    case 'smokeBomb':
      return 'Smoke Bomb';
    default:
      return 'Unknown Action';
  }
};

/**
 * Gets the description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Cover their profile with rotten tomatoes for all to see.';
    case 'putridEggs':
      return 'Splatter rancid eggs on their profile page.';
    case 'stocks':
      return 'Lock them in the public stocks for shame.';
    case 'silence':
      return 'Prevent them from commenting for 24 hours.';
    case 'courtJester':
      return 'Force them to wear the royal jester outfit.';
    case 'dunce':
      return 'Make them wear a dunce cap on their profile.';
    case 'smokeBomb':
      return 'Temporarily hide their profile in a cloud of smoke.';
    default:
      return 'A mysterious effect.';
  }
};

/**
 * Gets the price for a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 10;
    case 'putridEggs':
      return 25;
    case 'stocks':
      return 50;
    case 'silence':
      return 100;
    case 'courtJester':
      return 150;
    case 'dunce':
      return 200;
    case 'smokeBomb':
      return 300;
    default:
      return 0;
  }
};

/**
 * Gets the tier for a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'putridEggs':
      return 'common';
    case 'stocks':
    case 'silence':
      return 'uncommon';
    case 'courtJester':
      return 'rare';
    case 'dunce':
      return 'epic';
    case 'smokeBomb':
      return 'legendary';
    default:
      return 'common';
  }
};

/**
 * Gets the icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return '🍅';
    case 'putridEggs':
      return '🥚';
    case 'stocks':
      return '🔒';
    case 'silence':
      return '🔇';
    case 'courtJester':
      return '🃏';
    case 'dunce':
      return '🎭';
    case 'smokeBomb':
      return '💨';
    default:
      return '❓';
  }
};

/**
 * Gets the CSS class for an active mockery
 */
export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'putridEggs':
      return 'mockery-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'silence':
      return 'mockery-silence';
    case 'courtJester':
      return 'mockery-jester';
    case 'dunce':
      return 'mockery-dunce';
    case 'smokeBomb':
      return 'mockery-smoke';
    default:
      return '';
  }
};

/**
 * Gets details for a mockery action
 */
export const getMockeryActionDetails = (action: MockeryAction): ExtendedMockeryAction => {
  return {
    title: getMockeryTitle(action),
    description: getMockeryDescription(action),
    price: getMockeryActionPrice(action),
    tier: getMockeryTier(action),
    icon: getMockeryActionIcon(action),
  };
};

/**
 * Compatible with ShameAction
 */
export const isValidShameAction = (action: ShameAction): boolean => {
  if (action === 'ridicule' || action === 'humiliate' || action === 'expose' || action === 'mock') {
    return true;
  }
  return isValidMockeryAction(action as MockeryAction);
};

/**
 * Validates mockery action
 */
export const isValidMockeryAction = (action: MockeryAction): boolean => {
  const validActions: MockeryAction[] = ['tomatoes', 'putridEggs', 'stocks', 'silence', 'courtJester', 'dunce', 'smokeBomb'];
  return validActions.includes(action);
};
