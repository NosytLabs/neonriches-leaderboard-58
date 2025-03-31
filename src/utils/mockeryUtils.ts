
// A unified export file to simplify import statements and avoid circular dependencies
import { 
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryDuration,
  getMockeryActionIcon,
  getActiveMockeryClass,
  // Aliased exports for backward compatibility
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIconColor
} from './mockery';

// Re-export everything
export {
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryDuration,
  getMockeryActionIcon,
  getActiveMockeryClass,
  // Aliased exports
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIconColor
};

// Export a mockery registry to make sure there's a centralized place for types
export type { MockeryAction, MockeryTier } from '@/types/mockery';

// Add weekly discount functions - simplified
export const hasWeeklyDiscount = (action: string): boolean => {
  // Weekly discounted actions (for simplicity, just eggs)
  return action === 'eggs';
};

export const getWeeklyDiscountedAction = (): string => {
  // For fixed content, always return eggs as the discounted action
  return 'eggs';
};

export const getDiscountedShamePrice = (action: string): number => {
  const originalPrice = typeof action === 'string' ? 
    parseFloat(action) : 
    getShameActionPrice(action);
    
  // Apply a 50% discount
  return originalPrice * 0.5;
};

// Simplify to just our 4 core actions
export const getShameActionPrice = (action: string): number => {
  const prices: Record<string, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'crown': 1.00,
    'stocks': 0.50
  };
  
  return prices[action] || 0.25;
};

// Simplify messages to just our 4 core actions
export const getShameActionMessage = (action: string, username: string): string => {
  const messages: Record<string, string> = {
    'tomatoes': `You've pelted ${username} with rotten tomatoes!`,
    'eggs': `You've egged ${username}!`,
    'crown': `You've mocked ${username} with a ridiculous crown!`,
    'stocks': `You've placed ${username} in the stocks!`
  };
  
  return messages[action] || `You've publicly mocked ${username}!`;
};
