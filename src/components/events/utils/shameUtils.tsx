
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { ShieldAlert, Ban, Music2, UserX, CloudFog, UserRoundX, Crown, Skull } from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';
import { 
  getShameActionPrice, 
  getDiscountedShamePrice, 
  getShameActionMessage 
} from '@/utils/mockery/shame-discount-utils';
import { 
  getMockeryActionTitle, 
  getMockeryActionDescription,
  getMockeryActionIcon
} from '@/utils/mockery';

// Re-export for compatibility
export { 
  getShameActionPrice, 
  getDiscountedShamePrice, 
  getShameActionMessage,
  getMockeryActionTitle as getShameActionTitle,
  getMockeryActionDescription as getShameActionDescription
};

/**
 * Get the appropriate icon for a shame action
 */
export const getShameActionIcon = (action: MockeryAction): LucideIcon => {
  return getMockeryActionIcon(action);
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

export default {
  getShameActionIcon,
  renderShameActionIcon,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getShameActionPrice,
  getDiscountedShamePrice,
  getShameActionMessage,
  getShameActionTitle: getMockeryActionTitle,
  getShameActionDescription: getMockeryActionDescription
};
