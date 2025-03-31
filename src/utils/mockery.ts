
import { MockeryAction } from '@/types/mockery-types';

// Get the cost of a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 10;
    case 'eggs':
      return 15;
    case 'stocks':
      return 25;
    case 'crown':
      return 50;
    case 'jester':
    case 'courtJester':
      return 35;
    case 'silence':
      return 30;
    case 'tarAndFeather':
      return 45;
    case 'guillotine':
      return 100;
    case 'putridEggs':
      return 20;
    default:
      return 25;
  }
};

// Get the icon for a mockery action
export const getMockeryIcon = (action: MockeryAction) => {
  // Return a fixed icon name for each mockery action
  switch (action) {
    case 'tomatoes':
      return 'Tomato';
    case 'eggs':
      return 'Egg';
    case 'stocks':
      return 'Lock';
    case 'crown':
      return 'Crown';
    case 'jester':
    case 'courtJester':
      return 'Theater';
    case 'silence':
      return 'VolumeX';
    case 'tarAndFeather':
      return 'Feather';
    case 'guillotine':
      return 'Axe';
    case 'putridEggs':
      return 'Egg';
    default:
      return 'Target';
  }
};

// Get the color for a mockery action icon
export const getMockeryIconColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'text-red-500';
    case 'eggs':
      return 'text-yellow-500';
    case 'stocks':
      return 'text-gray-500';
    case 'crown':
      return 'text-royal-gold';
    case 'jester':
    case 'courtJester':
      return 'text-purple-500';
    case 'silence':
      return 'text-blue-500';
    case 'tarAndFeather':
      return 'text-orange-500';
    case 'guillotine':
      return 'text-royal-crimson';
    case 'putridEggs':
      return 'text-green-500';
    default:
      return 'text-white';
  }
};

// Alias for backward compatibility
export const getMockeryActionIconColor = getMockeryIconColor;

// Export all mockery utility functions
export default {
  getMockeryCost,
  getMockeryIcon,
  getMockeryIconColor,
  getMockeryActionIconColor
};
