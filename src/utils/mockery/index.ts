
export { getMockeryName } from './mockery-names';
export { getMockeryDescription } from './mockery-descriptions';
export { getMockeryCost } from './mockery-costs';
export { getMockeryTier, getMockeryTierColorClass } from './mockery-tiers';
export { getMockeryDuration } from './mockery-durations';
export { 
  TomatoIcon, 
  getMockeryActionIcon, 
  getMockeryActionIconColor 
} from './mockery-icons';

// Re-export from mockery-effects
export { getActiveMockeryClass } from './mockery-effects';

// Re-export from mockery-utils
export {
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage
} from '../mockeryUtils';

// Helper function to render mockery icon with proper color
export const renderMockeryIcon = (action: string, size = 16, className = '') => {
  const IconComponent = getMockeryActionIcon(action as any);
  const colorClass = getMockeryActionIconColor(action as any);
  
  return <IconComponent size={size} className={`${colorClass} ${className}`} />;
};
