
import { MockeryAction, MockeryTier } from '../hooks/useMockery';

// Get mockery action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'jester':
      return 'Crown as Jester';
    case 'roast':
      return 'Royal Roast';
    case 'stocks':
      return 'Place in Stocks';
    default:
      return 'Unknown Action';
  }
};

// Get mockery action description
export const getMockeryActionDescription = (action: MockeryAction, username?: string): string => {
  const target = username || 'target';
  switch (action) {
    case 'tomatoes':
      return `Pelt ${target} with rotten tomatoes. A classic form of public ridicule.`;
    case 'jester':
      return `Crown ${target} as the realm's fool with a jester's hat and bells.`;
    case 'roast':
      return `Subject ${target} to a royal roasting with flames of mockery.`;
    case 'stocks':
      return `Place ${target} in the public stocks. The ultimate medieval humiliation.`;
    default:
      return 'Apply a humorous effect to shame your target.';
  }
};

// Get mockery action icon emoji
export const getMockeryActionIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return '🍅';
    case 'jester':
      return '🃏';
    case 'roast':
      return '🔥';
    case 'stocks':
      return '🪵';
    default:
      return '❓';
  }
};

// Get mockery action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 0.50;
    case 'jester':
      return 1.00;
    case 'roast':
      return 2.00;
    case 'stocks':
      return 3.00;
    default:
      return 0.50;
  }
};

// Check if an action has a weekly discount
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // Get current weekly discounted actions
  const discountedActions = getWeeklyDiscountedActions();
  return discountedActions.includes(action);
};

// Get discounted mockery price (30% off)
export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  const regularPrice = getMockeryActionPrice(action);
  return regularPrice * 0.7; // 30% off
};

// Get weekly discounted actions (changes weekly based on a deterministic algorithm)
export const getWeeklyDiscountedActions = (): MockeryAction[] => {
  // Simplified example - in production this would rotate based on the current week
  const now = new Date();
  const weekOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));
  
  // Rotate the discounted action based on week of year
  const allActions: MockeryAction[] = ['tomatoes', 'jester', 'roast', 'stocks'];
  const index = weekOfYear % allActions.length;
  
  return [allActions[index]];
};

// Get the single weekly discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  return getWeeklyDiscountedActions()[0];
};

// Check if current month is a fire sale month
export const isFireSaleMonth = (): boolean => {
  const now = new Date();
  // Example: Fire sale months are January, April, July, October
  const fireSaleMonths = [0, 3, 6, 9]; // JavaScript months are 0-based
  return fireSaleMonths.includes(now.getMonth());
};

// Get fire sale featured categories for the current month
export const getFireSaleFeaturedCategories = (): string[] => {
  const now = new Date();
  const month = now.getMonth();
  
  // Example logic to determine featured categories
  switch (month) {
    case 0: // January
      return ['Humiliation', 'Medieval'];
    case 3: // April
      return ['Food', 'Comedy'];
    case 6: // July
      return ['Royal', 'Jester'];
    case 9: // October
      return ['Spooky', 'Haunted'];
    default:
      return ['Classic', 'Popular'];
  }
};

// Get color based on mockery tier
export const getMockeryTierColor = (tier: MockeryTier) => {
  switch (tier) {
    case 'common':
      return {
        text: 'text-gray-400',
        border: 'border-gray-400',
        bg: 'bg-gray-400/10'
      };
    case 'uncommon':
      return {
        text: 'text-green-500',
        border: 'border-green-500',
        bg: 'bg-green-500/10'
      };
    case 'rare':
      return {
        text: 'text-blue-500',
        border: 'border-blue-500',
        bg: 'bg-blue-500/10'
      };
    case 'epic':
      return {
        text: 'text-purple-500',
        border: 'border-purple-500',
        bg: 'bg-purple-500/10'
      };
    case 'legendary':
      return {
        text: 'text-yellow-500',
        border: 'border-yellow-500',
        bg: 'bg-yellow-500/10'
      };
    default:
      return {
        text: 'text-white',
        border: 'border-white',
        bg: 'bg-white/10'
      };
  }
};

// Get mockery tier label
export const getMockeryTierLabel = (tier: MockeryTier): string => {
  return tier.charAt(0).toUpperCase() + tier.slice(1);
};

// Get mockery leaderboard message
export const getMockeryLeaderboardMessage = (): string => {
  return "Mockery effects are purely cosmetic and visual. They do not affect leaderboard rankings or user status. Spend money on mockery simply for the fun of publicly ridiculing other users.";
};

// Get mockery action color classes
export const getMockeryActionColor = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return {
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        text: 'text-red-500'
      };
    case 'jester':
      return {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-500'
      };
    case 'roast':
      return {
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        text: 'text-orange-500'
      };
    case 'stocks':
      return {
        bg: 'bg-amber-800/10',
        border: 'border-amber-800/30',
        text: 'text-amber-800'
      };
    default:
      return {
        bg: 'bg-white/10',
        border: 'border-white/30',
        text: 'text-white'
      };
  }
};

// Get mockery actions by tier
export const getMockeryActionsByTier = (tier: MockeryTier) => {
  // In a real app this would be fetched from a database
  const mockeryOptions = [
    // Common tier
    { type: 'tomatoes', tier: 'common', price: 0.50, emoji: '🍅', description: 'Pelt with rotten tomatoes' },
    { type: 'eggs', tier: 'common', price: 0.75, emoji: '🥚', description: 'Throw rotten eggs' },
    
    // Uncommon tier
    { type: 'jester', tier: 'uncommon', price: 1.00, emoji: '🃏', description: 'Crown as court jester' },
    { type: 'dunce', tier: 'uncommon', price: 1.25, emoji: '🎓', description: 'Award a dunce cap' },
    
    // Rare tier
    { type: 'stocks', tier: 'rare', price: 2.00, emoji: '🪵', description: 'Place in the stocks' },
    { type: 'roast', tier: 'rare', price: 2.50, emoji: '🔥', description: 'Royal roasting' },
    
    // Epic tier
    { type: 'ridicule', tier: 'epic', price: 5.00, emoji: '😂', description: 'Public ridicule' },
    { type: 'taunt', tier: 'epic', price: 7.50, emoji: '🗯️', description: 'Medieval taunt' },
    
    // Legendary tier
    { type: 'royalDecreeOfShame', tier: 'legendary', price: 15.00, emoji: '📜', description: 'Royal Decree of Shame' },
    { type: 'tarAndFeathers', tier: 'legendary', price: 20.00, emoji: '🪶', description: 'Tar and feathers' }
  ];
  
  return mockeryOptions.filter(option => option.tier === tier);
};

// Get mockery bundles
export const getMockeryBundles = () => {
  // In a real app this would be fetched from a database
  return [
    {
      id: 'bundle1',
      name: 'Shame Pack',
      actions: ['tomatoes', 'eggs', 'jester'],
      originalPrice: 2.25,
      bundlePrice: 1.50,
      description: 'A bundle of classic mockery options'
    },
    {
      id: 'bundle2',
      name: 'Royal Humiliation',
      actions: ['jester', 'roast', 'stocks'],
      originalPrice: 5.50,
      bundlePrice: 3.75,
      description: 'Premium mockery for serious shaming'
    },
    {
      id: 'bundle3',
      name: 'Ultimate Shame',
      actions: ['stocks', 'ridicule', 'taunt', 'royalDecreeOfShame'],
      originalPrice: 14.50,
      bundlePrice: 9.99,
      description: 'The ultimate mockery experience'
    }
  ];
};

