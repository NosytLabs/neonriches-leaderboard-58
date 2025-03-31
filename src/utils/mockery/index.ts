
// Central export file for all mockery utilities
export * from './mockery-names';
export * from './mockery-descriptions';
export * from './mockery-costs';
export * from './mockery-icons';
export * from './mockery-tiers';
export * from './mockery-effects';
export * from './mockery-durations';

import type { MockeryAction, MockeryTier, MockeryEvent, MockedUser } from '@/types/mockery-types';

// Re-export types for convenience
export type { MockeryAction, MockeryTier, MockeryEvent, MockedUser };

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
    'silver': 180
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
