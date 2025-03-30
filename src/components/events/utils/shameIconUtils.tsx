
import React from 'react';
import { ShameAction, MockeryAction } from '@/types/mockery';
import { renderMockeryIcon } from '@/utils/mockeryIcons';

/**
 * Render the appropriate icon component for a shame action
 */
export const renderShameActionIcon = (action: ShameAction | MockeryAction, className: string = "h-4 w-4") => {
  const iconName = getShameActionIconName(action);
  return renderMockeryIcon(iconName, className);
};

/**
 * Get the name of the icon to use for a shame action
 */
export const getShameActionIconName = (action: ShameAction | MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Tomato';
    case 'eggs': return 'Egg';
    case 'stocks': return 'TrendingDown';
    default: return 'Crown';
  }
};

export default renderShameActionIcon;
