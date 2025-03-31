
import { MockeryAction } from '@/types/mockery-types';

// Get description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw rotten tomatoes at this user to humiliate them publicly.',
    eggs: 'Throw rotten eggs at this user to make them stink of shame.',
    crown: 'Place a ridiculous crown on their head to mock their achievements.',
    stocks: 'Lock them in the public stocks for all to ridicule.',
    jester: 'Turn them into the court jester, mocked by all.',
    protection: 'Protect yourself from mockery with royal immunity.',
    shame: 'Publicly shame this user for all to see.'
  };
  
  return descriptions[action] || 'A mysterious form of mockery.';
};

// For backward compatibility
export const getMockeryActionDescription = getMockeryDescription;
