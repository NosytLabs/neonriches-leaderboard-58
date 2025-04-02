
import { MockeryAction } from '@/types/mockery-types';

/**
 * Returns the price for a mockery action
 * @param action The mockery action
 * @returns The price in currency units
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 5;
    case 'eggs':
      return 10;
    case 'confetti':
      return 15;
    case 'flowers':
      return 20;
    case 'shame':
      return 25;
    case 'crown':
      return 30;
    case 'mock':
      return 15;
    case 'jester':
      return 20;
    case 'praise':
      return 25;
    case 'thumbsDown':
      return 10;
    // Default price for any other action
    default:
      return 10;
  }
};

/**
 * Returns the description for a mockery action
 */
export const getMockeryActionDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw virtual tomatoes at this user';
    case 'eggs':
      return 'Pelt this user with virtual eggs';
    case 'confetti':
      return 'Celebrate this user with confetti';
    case 'flowers':
      return 'Show appreciation with virtual flowers';
    case 'shame':
      return 'Publicly shame this user';
    case 'crown':
      return 'Crown this user with a royal jester hat';
    case 'mock':
      return 'Mock this user for their spending habits';
    case 'jester':
      return 'Turn this user into a court jester';
    case 'praise':
      return 'Ironically praise this user';
    case 'thumbsDown':
      return 'Give this user a thumbs down';
    default:
      return 'Apply mockery to this user';
  }
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTierColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'red';
    case 'eggs':
      return 'yellow';
    case 'confetti':
      return 'blue';
    case 'flowers':
      return 'pink';
    case 'shame':
      return 'purple';
    case 'crown':
      return 'gold';
    case 'mock':
      return 'green';
    case 'jester':
      return 'orange';
    case 'praise':
      return 'cyan';
    case 'thumbsDown':
      return 'gray';
    default:
      return 'gray';
  }
};

/**
 * Aliases for older function names
 */
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Tomatoes';
    case 'eggs':
      return 'Eggs';
    case 'confetti':
      return 'Confetti';
    case 'flowers':
      return 'Flowers';
    case 'shame':
      return 'Public Shame';
    case 'crown':
      return 'Jester Crown';
    case 'mock':
      return 'Mockery';
    case 'jester':
      return 'Jester';
    case 'praise':
      return 'Ironic Praise';
    case 'thumbsDown':
      return 'Thumbs Down';
    default:
      return 'Mockery';
  }
};

export const getMockeryDescription = getMockeryActionDescription;
export const getMockeryTier = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'common';
    case 'eggs':
      return 'common';
    case 'confetti':
      return 'uncommon';
    case 'flowers':
      return 'uncommon';
    case 'shame':
      return 'rare';
    case 'crown':
      return 'epic';
    case 'mock':
      return 'common';
    case 'jester':
      return 'rare';
    case 'praise':
      return 'uncommon';
    case 'thumbsDown':
      return 'common';
    default:
      return 'common';
  }
};

export const getMockeryCost = getMockeryActionPrice;
export const getMockeryTierColorClass = (action: MockeryAction): string => {
  const tierColor = getMockeryTierColor(action);
  return `text-${tierColor}-500`;
};
