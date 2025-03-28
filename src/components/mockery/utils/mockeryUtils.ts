
import { ExtendedMockeryAction, MockeryAction, MockeryTier } from '@/types/mockery';

// Helper function to get an appropriate icon based on mockery action
export const getMockeryActionIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return '🍅';
    case 'eggs': return '🥚';
    case 'stocks': return '🪵';
    case 'silence': return '🔇';
    case 'courtJester': return '🃏';
    case 'protected': return '🛡️';
    case 'immune': return '👑';
    case 'jester': return '🎭';
    case 'dunce': return '📝';
    case 'roast': return '🔥';
    case 'ridicule': return '😂';
    case 'taunt': return '👋';
    case 'drama': return '🎭';
    default: return '❓';
  }
};

// Function to get mockery action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Rotten Tomatoes';
    case 'eggs': return 'Egg Pelting';
    case 'stocks': return 'Public Stocks';
    case 'silence': return 'Royal Silencing';
    case 'courtJester': return 'Court Jester';
    case 'protected': return 'Royal Protection';
    case 'immune': return 'Royal Immunity';
    case 'jester': return 'Jester Hat';
    case 'dunce': return 'Dunce Cap';
    case 'roast': return 'Royal Roast';
    case 'ridicule': return 'Public Ridicule';
    case 'taunt': return 'Royal Taunt';
    case 'drama': return 'Drama Swirl';
    default: return 'Unknown Action';
  }
};

// Function to get mockery action description
export const getMockeryActionDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Cover the user\'s profile with splattered tomatoes for 24 hours.';
    case 'eggs': return 'Pelt the user\'s profile with eggs for 24 hours.';
    case 'stocks': return 'Place the user in the public stocks, visible on their profile for 48 hours.';
    case 'silence': return 'Prevent the user from posting comments for 12 hours.';
    case 'courtJester': return 'Force the user to wear a jester outfit on their profile for 72 hours.';
    case 'protected': return 'Protect yourself from mockery for 24 hours.';
    case 'immune': return 'Grant yourself immunity from all mockery for 1 week.';
    case 'jester': return 'Add a jester hat to the user\'s profile picture for 48 hours.';
    case 'dunce': return 'Make the user wear a dunce cap on their profile for 24 hours.';
    case 'roast': return 'Display a witty roast message on the user\'s profile for 24 hours.';
    case 'ridicule': return 'Add laugh emojis that follow the user\'s cursor on their profile for 48 hours.';
    case 'taunt': return 'Display a taunting gesture animation on the user\'s profile for 24 hours.';
    case 'drama': return 'Add dramatic swirls and effects to the user\'s profile for 72 hours.';
    default: return 'This action has an unknown effect.';
  }
};

// Function to get mockery action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 0.5;
    case 'eggs': return 1;
    case 'stocks': return 3;
    case 'silence': return 5;
    case 'courtJester': return 10;
    case 'protected': return 15;
    case 'immune': return 50;
    case 'jester': return 2;
    case 'dunce': return 2.5;
    case 'roast': return 1.5;
    case 'ridicule': return 2;
    case 'taunt': return 1;
    case 'drama': return 7.5;
    default: return 1;
  }
};

// Check if there's a discount on mockery actions
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // This would typically check against a database or config to see
  // if there's a current weekly discount on this action
  const featuredActions: MockeryAction[] = ['tomatoes', 'eggs', 'taunt'];
  return featuredActions.includes(action);
};

// Get the discounted price of a mockery action
export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  if (!hasWeeklyDiscount(action)) return getMockeryActionPrice(action);
  
  const originalPrice = getMockeryActionPrice(action);
  return Math.round((originalPrice * 0.7) * 100) / 100; // 30% discount, rounded to 2 decimal places
};

// Get the tier of a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'taunt':
      return 'common';
    case 'jester':
    case 'dunce':
    case 'roast':
    case 'ridicule':
      return 'uncommon';
    case 'stocks':
    case 'drama':
      return 'rare';
    case 'silence':
    case 'courtJester':
      return 'epic';
    case 'protected':
    case 'immune':
      return 'legendary';
    default:
      return 'common';
  }
};

// Get the tier color
export const getMockeryTierColor = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    default: return 'text-white';
  }
};

// Get the tier label
export const getMockeryTierLabel = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'Common';
    case 'uncommon': return 'Uncommon';
    case 'rare': return 'Rare';
    case 'epic': return 'Epic';
    case 'legendary': return 'Legendary';
    default: return 'Unknown';
  }
};

// Get all mockery actions with their metadata
export const getAllMockeryActions = (): ExtendedMockeryAction[] => {
  const actions: MockeryAction[] = [
    'tomatoes', 'eggs', 'stocks', 'silence', 'courtJester', 
    'jester', 'dunce', 'roast', 'ridicule', 'taunt', 'drama',
    'protected', 'immune'
  ];
  
  return actions.map(action => ({
    action,
    tier: getMockeryTier(action),
    price: getMockeryActionPrice(action),
    duration: action === 'immune' ? 168 : action === 'courtJester' || action === 'drama' ? 72 : action === 'stocks' || action === 'jester' || action === 'ridicule' ? 48 : 24,
    cooldown: action === 'immune' ? 336 : action === 'protected' ? 48 : 24,
    text: action === 'roast' ? 'This user has been royally roasted!' : undefined,
    border: action === 'courtJester' ? 'jester-border' : action === 'stocks' ? 'stocks-border' : undefined,
    effect: action === 'ridicule' ? 'laugh-emojis' : action === 'drama' ? 'dramatic-swirls' : undefined
  }));
};

// Get action by name
export const getMockeryActionByName = (actionName: MockeryAction): ExtendedMockeryAction | undefined => {
  return getAllMockeryActions().find(a => a.action === actionName);
};

// Mock function to check if a user can be mocked
export const canUserBeMocked = (userId: string): boolean => {
  // In a real implementation, this would check against a database to see
  // if the user has active protection or immunity
  return true;
};

// Get mockery action label
export const getMockeryActionLabel = (action: MockeryAction): string => {
  return getMockeryActionTitle(action);
};
