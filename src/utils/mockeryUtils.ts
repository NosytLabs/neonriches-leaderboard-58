
import { Egg, Drumstick, Bone, Flame, Skull, Trash2, Frown, SkullIcon } from 'lucide-react';

/**
 * Utilities for mockery-related functions
 */

export type MockeryAction = 
  | 'tomato' 
  | 'egg' 
  | 'stocks' 
  | 'roast' 
  | 'bone' 
  | 'flame' 
  | 'shame'
  | 'disgrace';

/**
 * Get icon component for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomato':
      return Trash2;
    case 'egg':
      return Egg;
    case 'stocks':
      return Frown;
    case 'roast':
      return Drumstick;
    case 'bone':
      return Bone;
    case 'flame':
      return Flame;
    case 'shame':
    case 'disgrace':
      return SkullIcon;
    default:
      return Trash2;
  }
};

/**
 * Get color for mockery action icon
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomato':
      return 'text-red-500';
    case 'egg':
      return 'text-yellow-200';
    case 'stocks':
      return 'text-gray-400';
    case 'roast':
      return 'text-amber-500';
    case 'bone':
      return 'text-gray-300';
    case 'flame':
      return 'text-orange-500';
    case 'shame':
    case 'disgrace':
      return 'text-purple-400';
    default:
      return 'text-gray-500';
  }
};

/**
 * Get display name for mockery action
 */
export const getMockeryActionName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomato':
      return 'Throw Tomatoes';
    case 'egg':
      return 'Throw Eggs';
    case 'stocks':
      return 'Put in Stocks';
    case 'roast':
      return 'Public Roast';
    case 'bone':
      return 'Throw Bones';
    case 'flame':
      return 'Flame Online';
    case 'shame':
      return 'Ring Bell of Shame';
    case 'disgrace':
      return 'Mark as Disgrace';
    default:
      return 'Mock';
  }
};

/**
 * Get description for mockery action
 */
export const getMockeryActionDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomato':
      return 'Throw virtual tomatoes at this user's profile';
    case 'egg':
      return 'Egg this user's profile page';
    case 'stocks':
      return 'Put this user in the virtual stocks for public ridicule';
    case 'roast':
      return 'Publicly roast this user with medieval-themed jokes';
    case 'bone':
      return 'Throw virtual bones at this user's profile';
    case 'flame':
      return 'Publicly flame this user online';
    case 'shame':
      return 'Ring the bell of shame on this user's profile';
    case 'disgrace':
      return 'Mark this user with the symbol of disgrace';
    default:
      return 'Mock this user publicly';
  }
};

/**
 * Get animation effect for mockery action
 */
export const getMockeryActionEffect = (action: MockeryAction): string => {
  switch (action) {
    case 'tomato':
      return 'shame-effect-tomatoes';
    case 'egg':
      return 'shame-effect-eggs';
    case 'stocks':
      return 'shame-effect-stocks';
    case 'roast':
      return 'shame-effect-tomatoes';
    case 'bone':
      return 'shame-effect-eggs';
    case 'flame':
      return 'shame-effect-tomatoes';
    case 'shame':
    case 'disgrace':
      return 'shame-effect-stocks';
    default:
      return 'shame-effect-tomatoes';
  }
};

export default {
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getMockeryActionName,
  getMockeryActionDescription,
  getMockeryActionEffect
};
