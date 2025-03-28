
import { 
  MockeryAction, 
  MockeryTier, 
  asMockeryAction, 
  asMockeryTier 
} from '@/types/mockery';
import { 
  getMockeryTierColor, 
  getMockeryTierText, 
  getMockeryTierLabel,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionIcon,
  getMockeryActionPrice
} from '@/components/mockery/utils/mockeryUtils';

// This helper file acts as a bridge to safely access mockery utils with proper type conversion

// Get the color information for a mockery tier
export const getMockeryColor = (action: MockeryAction | string) => {
  const tier = getMockeryTier(asMockeryAction(action.toString()));
  return getMockeryTierColor(tier);
};

// Get the display text for a mockery action
export const getMockeryText = (action: MockeryAction | string) => {
  return getMockeryActionTitle(asMockeryAction(action.toString()));
};

// Get the description for a mockery action
export const getMockeryDescription = (action: MockeryAction | string) => {
  return getMockeryActionDescription(asMockeryAction(action.toString()));
};

// Get the icon for a mockery action
export const getMockeryIcon = (action: MockeryAction | string) => {
  return getMockeryActionIcon(asMockeryAction(action.toString()));
};

// Get the cost for a mockery action
export const getMockeryCost = (action: MockeryAction | string) => {
  return getMockeryActionPrice(asMockeryAction(action.toString()));
};

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction | string): MockeryTier => {
  switch (asMockeryAction(action.toString())) {
    case 'tomatoes': return 'common';
    case 'eggs': return 'uncommon';
    case 'stocks': return 'rare';
    case 'silence': return 'epic';
    case 'courtJester': return 'legendary';
    case 'jester': return 'rare';
    case 'dunce': return 'uncommon';
    case 'roast': return 'rare';
    case 'ridicule': return 'uncommon';
    case 'taunt': return 'common';
    case 'drama': return 'epic';
    default: return 'common';
  }
};

// Get label for a mockery tier
export const safeMockeryTierLabel = (tier: string) => {
  return getMockeryTierLabel(asMockeryTier(tier));
};

// Get color for a mockery tier
export const safeMockeryTierColor = (tier: string) => {
  return getMockeryTierColor(asMockeryTier(tier));
};
