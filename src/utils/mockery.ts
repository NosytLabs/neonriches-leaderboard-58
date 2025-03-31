
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Icon } from '@/components/ui/icon';
import React from 'react';

// Simplified mockery actions
export const mockeryActions: MockeryAction[] = [
  'tomatoes',
  'eggs',
  'crown',
  'jester'
];

// Get the cost of a mockery action
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 10;
    case 'eggs':
      return 15;
    case 'crown':
      return 25;
    case 'jester':
      return 20;
    default:
      return 10;
  }
};

// Get the icon for a mockery action
export const getMockeryActionIcon = (action: MockeryAction) => {
  // Return a fixed icon name for each mockery action
  switch (action) {
    case 'tomatoes':
      return 'Tomato';
    case 'eggs':
      return 'Egg';
    case 'crown':
      return 'Crown';
    case 'jester':
      return 'Theater';
    default:
      return 'Target';
  }
};

// Get the color for a mockery action icon
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'text-red-500';
    case 'eggs':
      return 'text-yellow-500';
    case 'crown':
      return 'text-royal-gold';
    case 'jester':
      return 'text-purple-500';
    default:
      return 'text-white';
  }
};

// Get the title for a mockery action
export const getMockeryActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Eggs';
    case 'crown':
      return 'Mock with Crown';
    case 'jester':
      return 'Mark as Jester';
    default:
      return 'Mock User';
  }
};

// Get the description for a mockery action
export const getMockeryActionDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Pelt this user with rotten tomatoes for all to see.';
    case 'eggs':
      return 'Throw eggs at this user, leaving a visual mess on their profile.';
    case 'crown':
      return 'Place a ridiculous crown on their head to mock their royal aspirations.';
    case 'jester':
      return 'Mark them as the court jester, subjecting them to ridicule.';
    default:
      return 'Subject this user to public mockery';
  }
};

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
      return 'common';
    case 'eggs':
      return 'uncommon';
    case 'crown':
      return 'rare';
    case 'jester':
      return 'uncommon';
    default:
      return 'common';
  }
};

// Get the tier color class for a mockery action
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'text-gray-400';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return 'text-gray-400';
  }
};

// Get the duration for a mockery action in hours
export const getMockeryActionDuration = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 12;
    case 'eggs':
      return 24;
    case 'crown':
      return 48;
    case 'jester':
      return 36;
    default:
      return 24;
  }
};

// Get the active mockery class for styling
export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'eggs':
      return 'mockery-eggs';
    case 'crown':
      return 'mockery-crown';
    case 'jester':
      return 'mockery-jester';
    default:
      return '';
  }
};

// For backward compatibility
export const getMockeryName = getMockeryActionTitle;
export const getMockeryDescription = getMockeryActionDescription;
export const getMockeryCost = getMockeryActionPrice;

// Export all mockery utility functions
export default {
  mockeryActions,
  getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionDuration,
  getActiveMockeryClass,
  getMockeryName,
  getMockeryDescription,
  getMockeryCost
};
