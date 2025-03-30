
import React from 'react';
import { ShameAction, MockeryAction } from '@/types/mockery';
import { renderMockeryIcon } from '@/utils/mockeryIcons';
import { getShameActionIcon } from '@/components/events/utils/shameUtils';

/**
 * Render the appropriate icon component for a shame action
 */
export const renderShameActionIcon = (action: ShameAction | MockeryAction, className: string = "h-4 w-4") => {
  const iconName = getShameActionIcon(action);
  return renderMockeryIcon(iconName, className);
};

export default renderShameActionIcon;
