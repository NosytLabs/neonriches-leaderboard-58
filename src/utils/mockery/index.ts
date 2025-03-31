
// Re-export all mockery utility functions from the organized structure
export * from './mockery-names';
export * from './mockery-descriptions';
export * from './mockery-costs';
export * from './mockery-icons';
export * from './mockery-tiers';
export * from './mockery-effects';
export * from './shame-discount-utils';

// Import types
import { MockeryAction, ExtendedMockeryAction, MockeryTier, ShameAction } from '@/types/mockery-types';

// Re-export types
export type { MockeryAction, ExtendedMockeryAction, MockeryTier, ShameAction };

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
