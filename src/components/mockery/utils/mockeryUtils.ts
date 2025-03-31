
import { 
  MockeryAction, 
  MockeryTier 
} from '@/types/mockery';
import { 
  getMockeryActionTitle, 
  getMockeryActionDescription, 
  getMockeryActionPrice,
  getActiveMockeryClass
} from '@/utils/mockery';

// Export for easy access
export {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getActiveMockeryClass
};

// Add any component-specific utility functions here
export const getMockeryDisplayInfo = (action: MockeryAction) => {
  return {
    title: getMockeryActionTitle(action),
    description: getMockeryActionDescription(action),
    price: getMockeryActionPrice(action)
  };
};
