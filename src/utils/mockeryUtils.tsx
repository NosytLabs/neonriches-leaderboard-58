
import React from 'react';
import { 
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier, 
  getMockeryTierColorClass,
  getActiveMockeryClass,
  renderMockeryIcon,
  getMockeryActionIcon
} from '@/utils/mockery';
import { MockeryAction } from '@/types/mockery-types';

// Re-export mockery utilities
export { 
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getActiveMockeryClass,
  getMockeryTier,
  getMockeryTierColorClass,
  renderMockeryIcon,
  getMockeryActionIcon
};

// Re-export with alternate names for backwards compatibility
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;

// Get mockery action icon color
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  // Default colors for different mockery actions
  const colors: Record<string, string> = {
    'tomatoes': 'text-red-500',
    'eggs': 'text-yellow-500',
    'crown': 'text-yellow-400',
    'stocks': 'text-gray-500',
    'jester': 'text-purple-500',
    'protection': 'text-green-500',
    'shame': 'text-red-500'
  };
  
  return colors[action] || 'text-gray-400';
};

// Export with alternate name for backwards compatibility
export const getMockeryIconColor = getMockeryActionIconColor;
