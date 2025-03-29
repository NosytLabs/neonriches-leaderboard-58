
import { ShameAction } from '@/types/mockery';
import { 
  Target, 
  Egg, 
  Shield, 
  AlertCircle, 
  MessageSquareOff,
  Crown
} from 'lucide-react';

// Weekly discount configuration
const WEEKLY_DISCOUNT_PERCENTAGE = 0.5; // 50% discount
let currentWeekDiscount: ShameAction = 'tomatoes'; // Changes weekly

// Get weekly discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  // In a real app, this would be determined server-side or based on the current week
  return currentWeekDiscount;
};

// Check if an action has a weekly discount
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  return action === currentWeekDiscount;
};

// Get the regular price of a shame action
export const getShameActionPrice = (action: ShameAction): number => {
  switch (action) {
    case 'tomatoes': return 0.25;
    case 'eggs': return 0.50;
    case 'stocks': return 1.00;
    case 'silence': return 1.50;
    case 'courtJester': return 2.00;
    default: return 0.25;
  }
};

// Get discounted price of a shame action
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const originalPrice = getShameActionPrice(action);
  return originalPrice * (1 - WEEKLY_DISCOUNT_PERCENTAGE);
};

// Get icon for shame action
export const getShameActionIcon = (action: ShameAction) => {
  switch (action) {
    case 'tomatoes': return Target;
    case 'eggs': return Egg;
    case 'stocks': return Shield;
    case 'silence': return MessageSquareOff;
    case 'courtJester': return Crown;
    default: return AlertCircle;
  }
};

// Get title for shame action
export const getShameActionTitle = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Rotten Eggs';
    case 'stocks': return 'Place in Stocks';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    default: return 'Mock';
  }
};

// Get description for shame action
export const getShameActionDescription = (action: ShameAction, username?: string): string => {
  const target = username ? username : 'your target';
  
  switch (action) {
    case 'tomatoes':
      return `Pelt ${target} with rotten tomatoes. A classic form of public ridicule (visual effect only).`;
    case 'eggs':
      return `Hurl rotten eggs at ${target}. The visual stench will follow them for a day.`;
    case 'stocks':
      return `Place ${target} in the public stocks. The ultimate medieval visual humiliation.`;
    case 'silence':
      return `Silence ${target} with a royal decree. They'll appear muted in public forums for 24 hours.`;
    case 'courtJester':
      return `Appoint ${target} as the court jester. They'll be adorned with a jester's hat and bells for all to see.`;
    default:
      return `Publicly shame ${target} with unknown consequences.`;
  }
};
