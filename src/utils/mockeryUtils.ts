
import { Tomato, Egg, Wrench } from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/types/mockery';

/**
 * Get the appropriate mockery tier based on the action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
      return 'common';
    case 'eggs':
      return 'uncommon';
    case 'stocks':
      return 'rare';
    default:
      return 'common';
  }
};

/**
 * Get the color class for the mockery tier
 */
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'text-red-500';
    case 'uncommon':
      return 'text-yellow-500';
    case 'rare':
      return 'text-amber-700';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return 'text-gray-500';
  }
};

/**
 * Get the appropriate icon component for the mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return Tomato;
    case 'eggs':
      return Egg;
    case 'stocks':
      return Wrench;
    default:
      return Tomato;
  }
};

/**
 * Get the display name for the mockery action
 */
export const getMockeryActionName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Eggs';
    case 'stocks':
      return 'Put in Stocks';
    default:
      return 'Mock';
  }
};

/**
 * Get the CSS class for the mockery action effect
 */
export const getMockeryEffectClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'shame-effect-tomatoes';
    case 'eggs':
      return 'shame-effect-eggs';
    case 'stocks':
      return 'shame-effect-stocks';
    default:
      return '';
  }
};

/**
 * Get the active CSS class for the mockery action
 */
export const getMockeryActiveClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'shame-active-tomatoes';
    case 'eggs':
      return 'shame-active-eggs';
    case 'stocks':
      return 'shame-active-stocks';
    default:
      return '';
  }
};
