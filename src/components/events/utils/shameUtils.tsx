
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { ShieldAlert, Ban, Music2, UserX, CloudFog, UserRoundX, Crown, Skull } from 'lucide-react';
import { MockeryAction, ShameAction as ShameActionType } from '@/types/mockery';

/**
 * Get the appropriate icon for a shame action
 */
export const getShameActionIcon = (action: MockeryAction): LucideIcon => {
  switch (action) {
    case 'tomatoes':
      return Ban;
    case 'eggs':
      return ShieldAlert;
    case 'dungeons':
      return UserX;
    case 'jester':
      return Music2;
    case 'witch':
      return CloudFog;
    case 'crown':
      return Crown;
    case 'skeleton':
    case 'ghost':
      return Skull;
    default:
      return UserRoundX;
  }
};

/**
 * Render a shame action icon with the given size
 */
export const renderShameActionIcon = (action: MockeryAction, size: 'sm' | 'md' | 'lg' = 'md') => {
  const IconComponent = getShameActionIcon(action);
  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  return (
    <span className={cn(sizeClass[size])}>
      {IconComponent && <IconComponent />}
    </span>
  );
};

// Pricing and discount utilities
const DISCOUNT_PERCENTAGE = 0.5; // 50% discount
const WEEKLY_DISCOUNTED_ACTION: MockeryAction = 'tomatoes'; // Example discounted action

/**
 * Checks if an action has a weekly discount
 */
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === WEEKLY_DISCOUNTED_ACTION;
};

/**
 * Get the current weekly discounted action
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  return WEEKLY_DISCOUNTED_ACTION;
};

/**
 * Get the shame action price
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    stocks: 1.00,
    shame: 0.75
  };
  
  return prices[action] || 0.25;
};

/**
 * Get the discounted price for an action
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const basePrice = getShameActionPrice(action);
  return basePrice * (1 - DISCOUNT_PERCENTAGE);
};

/**
 * Get a custom message for shame actions
 */
export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<string, string> = {
    tomatoes: `${username} has been pelted with rotten tomatoes!`,
    eggs: `${username} has been pelted with rotten eggs!`,
    shame: `${username} has been rung with the bell of shame!`,
    stocks: `${username} has been locked in the stocks for public ridicule!`
  };
  
  return messages[action] || `${username} has been mocked!`;
};

export default {
  getShameActionIcon,
  renderShameActionIcon,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getShameActionPrice,
  getDiscountedShamePrice,
  getShameActionMessage
};
