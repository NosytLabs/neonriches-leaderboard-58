
import { ShameAction } from '@/types/mockery-types';
import { 
  hasWeeklyDiscount as baseHasWeeklyDiscount,
  getWeeklyDiscountedAction as baseGetWeeklyDiscountedAction,
  getDiscountedShamePrice as baseGetDiscountedPrice,
  getShameActionPrice as baseGetShamePrice,
  getShameActionMessage as baseGetShameMessage
} from '@/utils/mockery';

// We can simply re-export these utilities with type safety
export const hasWeeklyDiscount = (action: ShameAction): boolean => 
  baseHasWeeklyDiscount(action);

export const getWeeklyDiscountedAction = (): ShameAction => 
  baseGetWeeklyDiscountedAction() as ShameAction;

export const getDiscountedShamePrice = (action: ShameAction): number => 
  baseGetDiscountedPrice(action);

export const getShameActionPrice = (action: ShameAction): number => 
  baseGetShamePrice(action);

export const getShameActionMessage = (action: ShameAction, username: string): string => 
  baseGetShameMessage(action, username);

// Import Lucide icons for shame actions
import { AlertCircle, Egg, Crown, Lock, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { TomatoIcon, getMockeryActionIcon } from '@/utils/mockery';

// Get icon for a shame action
export const getShameActionIcon = (action: ShameAction): LucideIcon | React.FC<{ className?: string; size?: number }> => {
  return getMockeryActionIcon(action);
};

// Get title for a shame action
export const getShameActionTitle = (action: ShameAction): string => {
  const titles: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    crown: 'Mock Crown',
    stocks: 'Public Stocks',
    jester: 'Court Jester',
    protection: 'Royal Protection',
    shame: 'Public Shame'
  };
  
  return titles[action] || 'Unknown Mockery';
};

// Get description for a shame action
export const getShameActionDescription = (action: ShameAction): string => {
  const descriptions: Record<string, string> = {
    tomatoes: 'Throw rotten tomatoes at this user to humiliate them publicly.',
    eggs: 'Throw rotten eggs at this user to make them stink of shame.',
    crown: 'Place a ridiculous crown on their head to mock their achievements.',
    stocks: 'Lock them in the royal stocks for public ridicule.',
    jester: 'Force them to wear the court jester outfit for all to see.',
    protection: 'Buy protection against mockery for yourself.',
    shame: 'Publicly shame this user for all to see.'
  };
  
  return descriptions[action] || 'A mysterious form of mockery.';
};
