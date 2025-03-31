
/**
 * This file serves as a re-export file for backward compatibility
 * All functionality has been moved to the mockery/ directory
 */

import {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getMockeryTier,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  getMockeryEffectClass,
  getMockeryEffectDuration,
  getMockeryCooldown,
  getMockeryDuration,
  getMockeryPrice,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getShameActionPrice,
  getDiscountedShamePrice,
  getShameActionMessage,
  renderMockeryIcon
} from './mockery/index';

// Re-export all functions for backward compatibility
export {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getMockeryTier,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  getMockeryEffectClass,
  getMockeryEffectDuration,
  getMockeryCooldown,
  getMockeryDuration,
  getMockeryPrice,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getShameActionPrice,
  getDiscountedShamePrice,
  getShameActionMessage,
  renderMockeryIcon
};

// Provide legacy function names for backward compatibility
export const getMockeryName = getMockeryActionTitle;
export const getMockeryDescription = getMockeryActionDescription;
export const getMockeryCost = getMockeryActionPrice;

// Re-export types
import { MockeryAction, MockeryTier, ExtendedMockeryAction } from '@/types/mockery-types';
export type { MockeryAction, MockeryTier, ExtendedMockeryAction };

// React specific exports
import React from 'react';
import type { LucideIcon } from 'lucide-react';

/**
 * Get the appropriate icon component for a mockery action and render it
 */
export const getMockeryActionIconComponent = (action: MockeryAction | ExtendedMockeryAction, className: string = "h-4 w-4") => {
  const IconComponent = getMockeryActionIcon(action as MockeryAction);
  return React.createElement(IconComponent, { className });
};
