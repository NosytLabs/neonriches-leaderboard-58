
import { MockeryAction, MockeryTier, MockeryEffect } from '../hooks/useMockery';

// Define the base prices for each tier
const tierPrices: Record<MockeryTier, { min: number, max: number }> = {
  common: { min: 0.5, max: 2 },
  uncommon: { min: 2, max: 5 },
  rare: { min: 5, max: 10 },
  epic: { min: 10, max: 20 },
  legendary: { min: 20, max: 50 }
};

// Define durations for each tier in hours
const tierDurations: Record<MockeryTier, number> = {
  common: 24,      // 1 day
  uncommon: 48,     // 2 days
  rare: 72,        // 3 days
  epic: 120,       // 5 days
  legendary: 168    // 7 days
};

// Define all mockery effects
export const mockeryEffects: Record<MockeryAction, MockeryEffect> = {
  // Basic shame options (Common Tier)
  tomatoes: {
    type: 'tomatoes',
    tier: 'common',
    duration: tierDurations.common,
    price: 0.5,
    visualEffect: 'tomato-overlay',
    description: 'Pelt your target with rotten tomatoes. A classic form of public ridicule (visual effect only).',
    emoji: '🍅'
  },
  eggs: {
    type: 'eggs',
    tier: 'common',
    duration: tierDurations.common,
    price: 1.00,
    visualEffect: 'egg-overlay',
    description: 'Hurl rotten eggs at your target. The visual stench will follow them for a day.',
    emoji: '🥚'
  },
  stocks: {
    type: 'stocks',
    tier: 'common',
    duration: tierDurations.common,
    price: 2.00,
    visualEffect: 'stocks-overlay',
    description: 'Place your target in the public stocks. The ultimate medieval humiliation.',
    emoji: '🪵'
  },

  // Original mockery options (Uncommon Tier)
  jester: {
    type: 'jester',
    tier: 'uncommon',
    duration: tierDurations.uncommon,
    price: 2.50,
    visualEffect: 'jester-overlay',
    description: 'Crown your target as the kingdom\'s jester with a jester\'s hat and bells.',
    emoji: '🃏'
  },
  dunce: {
    type: 'dunce',
    tier: 'uncommon',
    duration: tierDurations.uncommon,
    price: 3.00,
    visualEffect: 'dunce-overlay',
    description: 'Award your target the dunce cap of shame for all to see.',
    emoji: '🎓'
  },
  roast: {
    type: 'roast',
    tier: 'uncommon',
    duration: tierDurations.uncommon,
    price: 3.50,
    visualEffect: 'roast-overlay',
    description: 'Subject your target to a royal roasting with flames of mockery.',
    emoji: '🔥'
  },
  ridicule: {
    type: 'ridicule',
    tier: 'uncommon',
    duration: tierDurations.uncommon,
    price: 2.75,
    visualEffect: 'ridicule-overlay',
    description: 'Publicly ridicule your target with jokes and insults.',
    emoji: '😂'
  },
  taunt: {
    type: 'taunt',
    tier: 'uncommon',
    duration: tierDurations.uncommon,
    price: 2.25,
    visualEffect: 'taunt-overlay',
    description: 'Taunt your target with medieval flair and insulting gestures.',
    emoji: '🗯️'
  },

  // New royal-themed options (Rare Tier)
  courtJester: {
    type: 'courtJester',
    tier: 'rare',
    duration: tierDurations.rare,
    price: 5.50,
    visualEffect: 'court-jester-overlay',
    description: 'Appoint your target as the Court Jester, forced to entertain the kingdom with foolish antics.',
    emoji: '🃏'
  },
  dethroned: {
    type: 'dethroned',
    tier: 'rare',
    duration: tierDurations.rare,
    price: 7.50,
    visualEffect: 'dethroned-overlay',
    description: 'Dethrone your target from their position of power, a humiliating fall from grace.',
    emoji: '👑'
  },
  royalFool: {
    type: 'royalFool',
    tier: 'rare',
    duration: tierDurations.rare,
    price: 6.00,
    visualEffect: 'royal-fool-overlay',
    description: 'Declare your target the Royal Fool, an official position of mockery in the kingdom.',
    emoji: '🤡'
  },

  // New medieval punishment options (Epic Tier)
  pillory: {
    type: 'pillory',
    tier: 'epic',
    duration: tierDurations.epic,
    price: 12.00,
    visualEffect: 'pillory-overlay',
    description: 'Lock your target in the pillory where citizens may mock them freely.',
    emoji: '🪵'
  },
  dunkingChair: {
    type: 'dunkingChair',
    tier: 'epic',
    duration: tierDurations.epic,
    price: 15.00,
    visualEffect: 'dunking-chair-overlay',
    description: 'Sentence your target to the dunking chair, repeatedly submerged for all to laugh at.',
    emoji: '💺'
  },
  tarAndFeathers: {
    type: 'tarAndFeathers',
    tier: 'epic',
    duration: tierDurations.epic,
    price: 18.00,
    visualEffect: 'tar-feathers-overlay',
    description: 'Tar and feather your target, a humiliating spectacle that marks them as disgraced.',
    emoji: '🪶'
  },

  // Modern mockery options (Legendary Tier)
  memeGenerator: {
    type: 'memeGenerator',
    tier: 'legendary',
    duration: tierDurations.legendary,
    price: 25.00,
    visualEffect: 'meme-overlay',
    description: 'Turn your target into a royal meme that spreads across the entire kingdom.',
    emoji: '🤣'
  },
  socialRoast: {
    type: 'socialRoast',
    tier: 'legendary',
    duration: tierDurations.legendary,
    price: 30.00,
    visualEffect: 'social-roast-overlay',
    description: 'Initiate a kingdom-wide roast of your target with citizens joining in.',
    emoji: '🔥'
  },
  royalDecreeOfShame: {
    type: 'royalDecreeOfShame',
    tier: 'legendary',
    duration: tierDurations.legendary,
    price: 50.00,
    visualEffect: 'royal-decree-overlay',
    description: 'Issue an official Royal Decree of Shame against your target, the ultimate public humiliation.',
    emoji: '📜'
  }
};

// Weekly discount configuration (in a real app, would come from backend)
const weeklyDiscountConfig = {
  discountedActions: ['tomatoes', 'courtJester', 'pillory'] as MockeryAction[],
  discountPercentage: 50,
  isFireSaleMonth: true,
  fireSaleDiscountPercentage: 30,
  fireSaleFeaturedCategories: ['jester', 'ridicule', 'taunt', 'royalFool']
};

// Get all mockery actions of a specific tier
export const getMockeryActionsByTier = (tier: MockeryTier): MockeryEffect[] => {
  return Object.values(mockeryEffects).filter(effect => effect.tier === tier);
};

// Get base price for mockery action
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return mockeryEffects[action]?.price || 0.5;
};

// Check if the action has weekly discount
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return weeklyDiscountConfig.discountedActions.includes(action) || 
    (weeklyDiscountConfig.isFireSaleMonth && 
     weeklyDiscountConfig.fireSaleFeaturedCategories.includes(action));
};

// Get mockery action by ID
export const getMockeryActionById = (actionId: MockeryAction): MockeryEffect | undefined => {
  return mockeryEffects[actionId];
};

// Get discounted price
export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  const basePrice = getMockeryActionPrice(action);
  const discountPercentage = weeklyDiscountConfig.discountedActions.includes(action)
    ? weeklyDiscountConfig.discountPercentage 
    : weeklyDiscountConfig.fireSaleDiscountPercentage;
  
  return basePrice * (1 - (discountPercentage / 100));
};

// Get mockery action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  const actionNames: Record<MockeryAction, string> = {
    tomatoes: 'Throw Tomatoes',
    eggs: 'Throw Rotten Eggs',
    stocks: 'Place in Stocks',
    jester: 'Crown as Jester',
    dunce: 'Award Dunce Cap',
    roast: 'Royal Roast',
    ridicule: 'Public Ridicule',
    taunt: 'Medieval Taunt',
    courtJester: 'Court Jester',
    dethroned: 'Dethrone Noble',
    royalFool: 'Royal Fool',
    pillory: 'Pillory Punishment',
    dunkingChair: 'Dunking Chair',
    tarAndFeathers: 'Tar & Feathers',
    memeGenerator: 'Royal Meme Generator',
    socialRoast: 'Kingdom-wide Roast',
    royalDecreeOfShame: 'Royal Decree of Shame'
  };
  
  return actionNames[action] || 'Mock Royally';
};

// Get mockery tier label
export const getMockeryTierLabel = (tier: MockeryTier): string => {
  const tierLabels: Record<MockeryTier, string> = {
    common: 'Common',
    uncommon: 'Uncommon',
    rare: 'Rare',
    epic: 'Epic',
    legendary: 'Legendary'
  };
  
  return tierLabels[tier];
};

// Get mockery tier color classes
export const getMockeryTierColor = (tier: MockeryTier): { bg: string, text: string, border: string } => {
  const tierColors: Record<MockeryTier, { bg: string, text: string, border: string }> = {
    common: {
      bg: 'bg-gray-500/20',
      text: 'text-gray-300',
      border: 'border-gray-500/30'
    },
    uncommon: {
      bg: 'bg-green-500/20',
      text: 'text-green-400',
      border: 'border-green-500/30'
    },
    rare: {
      bg: 'bg-blue-500/20',
      text: 'text-blue-400',
      border: 'border-blue-500/30'
    },
    epic: {
      bg: 'bg-purple-500/20',
      text: 'text-purple-400',
      border: 'border-purple-500/30'
    },
    legendary: {
      bg: 'bg-royal-gold/20',
      text: 'text-royal-gold',
      border: 'border-royal-gold/30'
    }
  };
  
  return tierColors[tier];
};

// Get mockery action description
export const getMockeryActionDescription = (action: MockeryAction, username: string): string => {
  const baseDescription = mockeryEffects[action]?.description || '';
  return baseDescription.replace('your target', username);
};

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): string => {
  return mockeryEffects[action]?.emoji || '📜';
};

// Get mockery action color
export const getMockeryActionColor = (action: MockeryAction): { bg: string, text: string, border: string } => {
  const actionEffect = mockeryEffects[action];
  if (!actionEffect) {
    return {
      bg: 'bg-white/10',
      text: 'text-white/80',
      border: 'border-white/20'
    };
  }
  
  return getMockeryTierColor(actionEffect.tier);
};

// Get weekly discounted actions
export const getWeeklyDiscountedActions = (): MockeryAction[] => {
  return weeklyDiscountConfig.discountedActions;
};

// Get weekly discount percentage
export const getWeeklyDiscountPercentage = (): number => {
  return weeklyDiscountConfig.discountPercentage;
};

// Check if it's a fire sale month
export const isFireSaleMonth = (): boolean => {
  return weeklyDiscountConfig.isFireSaleMonth;
};

// Get fire sale discount percentage
export const getFireSaleDiscountPercentage = (): number => {
  return weeklyDiscountConfig.fireSaleDiscountPercentage;
};

// Get fire sale featured categories
export const getFireSaleFeaturedCategories = (): MockeryAction[] => {
  return weeklyDiscountConfig.fireSaleFeaturedCategories as MockeryAction[];
};

// Get info message about mockery vs leaderboard
export const getMockeryLeaderboardMessage = (): string => {
  return "Remember: Mockery is purely visual and cosmetic. It does not affect actual leaderboard rankings, which are determined solely by funds deposited to your SpendThrone account.";
};

// Get mockery protection price
export const getMockeryProtectionPrice = (): number => {
  return 5.00; // Base price for 24 hour mockery protection
};

// Get enhanced mockery protection price
export const getEnhancedMockeryProtectionPrice = (durationHours: number): number => {
  const basePrice = 5.00;
  const days = durationHours / 24;
  // Discount for longer durations
  const discount = days > 7 ? 0.3 : days > 3 ? 0.2 : days > 1 ? 0.1 : 0;
  return basePrice * days * (1 - discount);
};

// Get mockery effect explanation
export const getMockeryEffectExplanation = (): string => {
  return "All mockery effects are purely cosmetic and visual. These humorous embellishments have no impact on leaderboard rankings or account status.";
};

// Get mockery purchase bundle options
export const getMockeryBundles = (): { id: string, name: string, actions: MockeryAction[], originalPrice: number, bundlePrice: number }[] => {
  return [
    {
      id: 'basic-shame',
      name: 'Basic Shame Pack',
      actions: ['tomatoes', 'eggs', 'stocks'],
      originalPrice: getMockeryActionPrice('tomatoes') + getMockeryActionPrice('eggs') + getMockeryActionPrice('stocks'),
      bundlePrice: 2.99
    },
    {
      id: 'royal-mockery',
      name: 'Royal Mockery Pack',
      actions: ['courtJester', 'dethroned', 'royalFool'],
      originalPrice: getMockeryActionPrice('courtJester') + getMockeryActionPrice('dethroned') + getMockeryActionPrice('royalFool'),
      bundlePrice: 15.99
    },
    {
      id: 'medieval-punishment',
      name: 'Medieval Punishment Pack',
      actions: ['pillory', 'dunkingChair', 'tarAndFeathers'],
      originalPrice: getMockeryActionPrice('pillory') + getMockeryActionPrice('dunkingChair') + getMockeryActionPrice('tarAndFeathers'),
      bundlePrice: 39.99
    },
    {
      id: 'ultimate-shame',
      name: 'Ultimate Shame Pack',
      actions: ['memeGenerator', 'socialRoast', 'royalDecreeOfShame'],
      originalPrice: getMockeryActionPrice('memeGenerator') + getMockeryActionPrice('socialRoast') + getMockeryActionPrice('royalDecreeOfShame'),
      bundlePrice: 89.99
    }
  ];
};
