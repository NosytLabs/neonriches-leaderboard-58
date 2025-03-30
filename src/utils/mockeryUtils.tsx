
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { getActiveMockeryClass } from '@/utils/mockery/mockery-effects';
import { getMockeryTier } from '@/utils/mockery/mockery-tiers';
import { getMockeryActionPrice } from '@/utils/mockery/mockery-costs';
import { renderMockeryIcon } from '@/utils/mockeryIcons';

/**
 * Render the appropriate icon component for a mockery action
 */
export const renderMockeryIcon = (iconName: string, className: string = "h-4 w-4"): React.ReactNode => {
  return renderMockeryIcon(iconName, className);
};

/**
 * Get the appropriate icon for a mockery action as a React component
 */
export const getMockeryActionIconComponent = (action: MockeryAction, className: string = "h-4 w-4"): React.ReactNode => {
  // Import the getMockeryActionIcon from mockery-icons to get the icon name
  const iconName = getMockeryActionIcon(action);
  // Then use renderMockeryIcon to render the component
  return renderMockeryIcon(iconName, className);
};

/**
 * Get the icon name for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Tomato';
    case 'eggs': return 'Egg';
    case 'stocks': return 'TrendingDown';
    case 'dunce': 
    case 'silence': return 'AlertCircle';
    case 'jester': 
    case 'courtJester': return 'Feather';
    case 'smokeBomb': 
    case 'glitterBomb': return 'Bomb';
    case 'protection': return 'Shield';
    case 'guillotine': 
    case 'dungeons': return 'Skull';
    case 'crown': 
    case 'target': 
    case 'challenge': return 'Crown';
    default: return 'ThumbsDown';
  }
};

// Re-export other mockery utils for convenience
export { 
  getActiveMockeryClass,
  getMockeryTier,
  getMockeryActionPrice
};
