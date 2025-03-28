
import { ShameAction } from '@/components/events/hooks/useShameEffect';

// Combined ExtendedMockeryAction type that includes all possible shame/mockery actions
export type ExtendedMockeryAction = ShameAction | 'public_shame' | 'royal_decree' | 'dishonor' | 'silence' | 'courtJester';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export const getMockeryActionPrice = (action: ExtendedMockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 0.50;
    case 'eggs':
      return 1.00;
    case 'stocks':
      return 5.00;
    case 'public_shame':
      return 10.00;
    case 'royal_decree':
      return 25.00;
    case 'dishonor':
      return 50.00;
    case 'silence':
      return 3.00;
    case 'courtJester':
      return 15.00;
    default:
      return 1.00;
  }
};

export const getMockeryActionLabel = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Rotten Eggs';
    case 'stocks':
      return 'Place in Stocks';
    case 'public_shame':
      return 'Public Shaming';
    case 'royal_decree':
      return 'Royal Decree of Shame';
    case 'dishonor':
      return 'Strip of Honors';
    case 'silence':
      return 'Silence';
    case 'courtJester':
      return 'Court Jester';
    default:
      return 'Shame';
  }
};

export const getMockeryActionIcon = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case "tomatoes":
      return "tomato";
    case "eggs":
      return "egg";
    case "stocks":
      return "stocks";
    case "public_shame":
      return "scroll";
    case "royal_decree":
      return "crown";
    case "dishonor":
      return "shield-off";
    case "silence":
      return "message-square-off";
    case "courtJester":
      return "drama";
    default:
      return "alert-circle";
  }
};

export const getMockeryActionDescription = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw tomatoes at this user. Their profile will display a tomato for 24 hours.';
    case 'eggs':
      return 'Throw rotten eggs at this user. Their profile will show egg stains for 48 hours.';
    case 'stocks':
      return 'Place this user in the stocks. They will be unable to shame others for 72 hours.';
    case 'public_shame':
      return 'Publicly shame this user. All their posts will have a shame badge for 48 hours.';
    case 'royal_decree':
      return 'Issue a royal decree of shame. The entire kingdom will be notified of their misdeeds.';
    case 'dishonor':
      return 'Strip this user of all honors and titles for one week.';
    case 'silence':
      return 'Silence this user. They will be unable to post for 24 hours.';
    case 'courtJester':
      return 'Make this user the court jester. They will be assigned a jester badge for 48 hours.';
    default:
      return 'Shame this user in public.';
  }
};

export const getMockeryActionDuration = (action: ExtendedMockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 24;
    case 'eggs':
      return 48;
    case 'stocks':
      return 72;
    case 'public_shame':
      return 48;
    case 'royal_decree':
      return 96;
    case 'dishonor':
      return 168; // 1 week in hours
    case 'silence':
      return 24;
    case 'courtJester':
      return 48;
    default:
      return 24;
  }
};

// Additional mockery utility functions
export const getMockeryActionColor = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'text-red-500';
    case 'eggs':
      return 'text-yellow-200';
    case 'stocks':
      return 'text-amber-700';
    case 'public_shame':
      return 'text-purple-500';
    case 'royal_decree':
      return 'text-royal-gold';
    case 'dishonor':
      return 'text-red-800';
    case 'silence':
      return 'text-blue-500';
    case 'courtJester':
      return 'text-emerald-500';
    default:
      return 'text-white/70';
  }
};

export const getMockeryActionTitle = (action: ExtendedMockeryAction): string => {
  return getMockeryActionLabel(action);
};

export const hasWeeklyDiscount = (action: ExtendedMockeryAction): boolean => {
  // Example implementation - perhaps certain actions have discounts on specific days
  return ['tomatoes', 'eggs'].includes(action as string);
};

export const getDiscountedMockeryPrice = (action: ExtendedMockeryAction, hasDiscount: boolean): number => {
  const price = getMockeryActionPrice(action);
  return hasDiscount ? price * 0.8 : price; // 20% discount
};

export const getMockeryTierColor = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'text-gray-300';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return 'text-white/70';
  }
};

export const getMockeryTierLabel = (tier: MockeryTier): string => {
  return tier.charAt(0).toUpperCase() + tier.slice(1);
};

export const convertToBasicAction = (action: string): ExtendedMockeryAction => {
  // Handle any string conversion to a valid ExtendedMockeryAction
  if (Object.keys(getMockeryActions()).includes(action)) {
    return action as ExtendedMockeryAction;
  }
  return 'tomatoes'; // Default fallback
};

export const getMockeryActions = () => {
  return {
    'tomatoes': {
      price: 0.50,
      label: 'Throw Tomatoes',
      description: 'Throw tomatoes at this user. Their profile will display a tomato for 24 hours.',
      icon: 'tomato',
      color: 'text-red-500',
      tier: 'common' as MockeryTier
    },
    'eggs': {
      price: 1.00,
      label: 'Throw Rotten Eggs',
      description: 'Throw rotten eggs at this user. Their profile will show egg stains for 48 hours.',
      icon: 'egg',
      color: 'text-yellow-200',
      tier: 'uncommon' as MockeryTier
    },
    'stocks': {
      price: 5.00,
      label: 'Place in Stocks',
      description: 'Place this user in the stocks. They will be unable to shame others for 72 hours.',
      icon: 'stocks',
      color: 'text-amber-700',
      tier: 'rare' as MockeryTier
    },
    'silence': {
      price: 3.00,
      label: 'Silence',
      description: 'Silence this user. They will be unable to post for 24 hours.',
      icon: 'message-square-off',
      color: 'text-blue-500',
      tier: 'rare' as MockeryTier
    },
    'courtJester': {
      price: 15.00,
      label: 'Court Jester',
      description: 'Make this user the court jester. They will be assigned a jester badge for 48 hours.',
      icon: 'drama',
      color: 'text-emerald-500',
      tier: 'epic' as MockeryTier
    },
    'public_shame': {
      price: 10.00,
      label: 'Public Shaming',
      description: 'Publicly shame this user. All their posts will have a shame badge for 48 hours.',
      icon: 'scroll',
      color: 'text-purple-500',
      tier: 'epic' as MockeryTier
    },
    'royal_decree': {
      price: 25.00,
      label: 'Royal Decree of Shame',
      description: 'Issue a royal decree of shame. The entire kingdom will be notified of their misdeeds.',
      icon: 'crown',
      color: 'text-royal-gold',
      tier: 'legendary' as MockeryTier
    },
    'dishonor': {
      price: 50.00,
      label: 'Strip of Honors',
      description: 'Strip this user of all honors and titles for one week.',
      icon: 'shield-off',
      color: 'text-red-800',
      tier: 'legendary' as MockeryTier
    }
  };
};
