
import { MockeryAction } from '@/types/mockery-types';
import { 
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage,
  getMockeryActionIcon,
  getMockeryActionIconColor
} from '@/utils/mockeryUtils';

// Re-export these utilities with type safety
export const getShameActionIcon = getMockeryActionIcon;
export const getShameIconColor = getMockeryActionIconColor;

// We can simply re-export these utilities with type safety
export { 
  hasWeeklyDiscount, 
  getWeeklyDiscountedAction, 
  getDiscountedShamePrice, 
  getShameActionPrice, 
  getShameActionMessage 
};

// Get title for a shame action
export const getShameActionTitle = (action: MockeryAction): string => {
  const titles: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    crown: 'Mock Crown',
    stocks: 'Public Stocks',
    jester: 'Court Jester',
    protection: 'Royal Protection',
    shame: 'Public Shame'
  };
  
  return titles[action] || 'Unknown Mockery';
};

// Get description for a shame action
export const getShameActionDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    tomatoes: 'Throw rotten tomatoes at this user to humiliate them publicly.',
    eggs: 'Throw rotten eggs at this user to make them stink of shame.',
    crown: 'Place a ridiculous crown on their head to mock their achievements.',
    stocks: 'Lock them in the royal stocks for public ridicule.',
    jester: 'Force them to wear the court jester outfit for all to see.',
    protection: 'Buy protection against mockery for yourself.',
    shame: 'Publicly shame this user for all to see.'
  };
  
  return descriptions[action] || 'A mysterious form of mockery.';
};
