
// Re-export all mockery utility functions from the organized structure
export * from './mockery-names';
export * from './mockery-descriptions';
export * from './mockery-costs';
export * from './mockery-icons';
export * from './mockery-tiers';
export * from './mockery-effects';
export * from './mockery-durations';
export * from './shame-discount-utils';

// Import types from our consolidated type definition
import { MockeryAction, MockeryTier, ExtendedMockeryAction } from '@/types/mockery-types';

// Helper function to get mockery cooldown in seconds
export const getMockeryCooldown = (action: MockeryAction, tier?: MockeryTier): number => {
  // Basic cooldowns by tier
  const tierCooldowns: Record<MockeryTier, number> = {
    'basic': 60, // 1 minute
    'premium': 300, // 5 minutes
    'royal': 600, // 10 minutes
    'legendary': 1800, // 30 minutes
    'rare': 300,
    'epic': 600,
    'common': 60,
    'uncommon': 120,
    'silver': 180,
    'bronze': 240
  };
  
  // Action-specific cooldowns (overrides tier cooldowns)
  const actionCooldowns: Partial<Record<MockeryAction, number>> = {
    'protection': 86400, // 24 hours
    'crown': 3600, // 1 hour
    'guillotine': 7200, // 2 hours
    'removal': 7200, // 2 hours
    'dragon': 3600, // 1 hour
    'demon': 3600 // 1 hour
  };
  
  // Return action-specific cooldown if available, otherwise tier cooldown
  return actionCooldowns[action] || tierCooldowns[tier || 'basic'] || 60;
};

// Re-export types for consuming components
export type { MockeryAction, MockeryTier, ExtendedMockeryAction };

// Create a helper function to render mockery icons with React
import React from 'react';
import { getMockeryActionIcon } from './mockery-icons';

/**
 * Render a mockery action icon with the given size and className
 */
export const renderMockeryIcon = (action: MockeryAction, className: string = "h-4 w-4") => {
  const IconComponent = getMockeryActionIcon(action);
  return React.createElement(IconComponent, { className });
};
