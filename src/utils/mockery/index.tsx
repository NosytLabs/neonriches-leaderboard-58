
// Export all utilities from the organized structure
export * from './mockery-names';
export * from './mockery-descriptions';
export * from './mockery-costs';
export * from './mockery-icons';
export * from './mockery-tiers';
export * from './mockery-effects';
export * from './mockery-durations';

// Export types from the types file
export type { 
  MockeryAction,
  MockeryTier,
  ExtendedMockeryAction,
  MockedUser,
  MockeryEvent,
  MockeryEffectData,
  TeamColor,
  ShameAction
} from '@/types/mockery-types';

// Create a helper function to render mockery icons with React
import React from 'react';
import { getMockeryActionIcon } from './mockery-icons';
import { MockeryAction } from '@/types/mockery-types';

/**
 * Render a mockery action icon with the given size and className
 */
export const renderMockeryIcon = (action: MockeryAction, className: string = "h-4 w-4") => {
  const IconComponent = getMockeryActionIcon(action);
  return <IconComponent className={className} />;
};
