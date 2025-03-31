
import { MockeryAction } from '@/types/mockery-types';

// Get display name for a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    crown: 'Mock Crown',
    stocks: 'Public Stocks',
    jester: 'Court Jester',
    protection: 'Royal Protection',
    shame: 'Public Shame'
  };
  
  return names[action] || 'Unknown Mockery';
};

// For backward compatibility
export const getMockeryActionTitle = getMockeryName;
