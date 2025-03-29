
import { ShameAction } from '@/types/mockery';
import { ReactNode } from 'react';
import { Egg, Flame, Crown, Gavel, Shield } from 'lucide-react';

// Get shame action price
export const getShameActionPrice = (action: ShameAction): number => {
  const prices: Record<string, number> = {
    tomatoes: 5,
    eggs: 10,
    stocks: 20,
    silence: 30,
    jester: 50,
    courtJester: 100,
    dunce: 40,
    roast: 25,
    ridicule: 15,
    protection: 50
  };
  
  return prices[action] || 10;
};

// Get shame action icon as component
export const getShameActionIcon = (action: ShameAction): ReactNode => {
  switch(action) {
    case 'tomatoes':
      return <Flame className="text-red-500" />;
    case 'eggs':
      return <Egg className="text-yellow-200" />;
    case 'stocks':
      return <Gavel className="text-amber-700" />;
    case 'jester':
    case 'courtJester':
      return <Crown className="text-emerald-500" />;
    case 'protection':
      return <Shield className="text-blue-400" />;
    default:
      return <Flame className="text-red-500" />;
  }
};

// Get shame action title
export const getShameActionTitle = (action: ShameAction): string => {
  const titles: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Egg Throwing',
    stocks: 'Public Stocks',
    silence: 'Royal Silencing',
    jester: 'Court Jester',
    courtJester: 'Royal Court Jester',
    dunce: 'Dunce Cap',
    roast: 'Royal Roast',
    ridicule: 'Public Ridicule',
    protection: 'Royal Protection'
  };
  
  return titles[action] || 'Shame';
};

// Get shame action description
export const getShameActionDescription = (action: ShameAction, username: string): string => {
  const descriptions: Record<string, string> = {
    tomatoes: `Pelt ${username} with virtual rotten tomatoes for 24 hours, marking them as an object of public scorn.`,
    eggs: `Throw virtual eggs at ${username} for 48 hours, leaving their reputation a sticky mess.`,
    stocks: `Place ${username} in the public stocks for 72 hours, allowing all to see their shame.`,
    silence: `Silence ${username} from all public communication for 48 hours by royal decree.`,
    jester: `Force ${username} to wear the jester's hat for 96 hours, making them the royal court's fool.`,
    courtJester: `Elevate ${username} to the position of Official Court Jester for a full 7 days.`,
    dunce: `Place a dunce cap on ${username} for 48 hours, marking their foolishness.`,
    roast: `Subject ${username} to a royal roasting for 72 hours, broadcasting their flaws to all.`,
    ridicule: `Make ${username} a subject of public ridicule for 24 hours.`,
    protection: `Protect ${username} from all shaming attempts for 7 days.`
  };
  
  return descriptions[action] || `Shame ${username} publicly.`;
};

// Check if there's a fire sale discount on mockeries
export const isFireSaleMonth = (): boolean => {
  const now = new Date();
  // Determine if current month is a fire sale month (e.g., January and July)
  return now.getMonth() === 0 || now.getMonth() === 6;
};

// Get fire sale discount percentage
export const getFireSaleDiscountPercentage = (): number => {
  if (isFireSaleMonth()) {
    return 20; // 20% discount during fire sale months
  }
  return 0;
};

// Determine if an action has a weekly discount
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  // Get a discount action based on the current date
  const discountedAction = getWeeklyDiscountedAction();
  return action === discountedAction;
};

// Get the weekly featured discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  const now = new Date();
  const weekNumber = Math.floor(now.getDate() / 7);
  
  // Rotate between different actions each week
  const weeklyActions: ShameAction[] = ['tomatoes', 'eggs', 'stocks', 'jester', 'ridicule'];
  return weeklyActions[weekNumber % weeklyActions.length];
};

// Get the discounted price for an action
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const originalPrice = getShameActionPrice(action);
  return Math.max(1, Math.round(originalPrice * 0.5)); // 50% discount
};

