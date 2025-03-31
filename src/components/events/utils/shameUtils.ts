
import { 
  MockeryAction, 
  MockeryTier 
} from '@/types/mockery';
import { 
  hasWeeklyDiscount as checkWeeklyDiscount,
  getWeeklyDiscountedAction as getDiscountAction,
  getDiscountedShamePrice as getDiscountPrice,
  getShameActionPrice as getActionPrice,
  getShameActionMessage as getActionMessage,
  getMockeryActionTitle as getMockeryName,
  getMockeryActionDescription as getMockeryDescription,
  getMockeryActionIcon as getMockeryIcon,
  getMockeryTier as getActionTier,
  getMockeryTierColorClass as getTierColorClass,
  getActiveMockeryClass as getActiveClass
} from '@/utils/mockery';

export const getShameActionIcon = getMockeryIcon;
export const getShameActionTitle = getMockeryName;
export const getShameActionDescription = getMockeryDescription;
export const getShameActionTier = getActionTier;
export const hasWeeklyDiscount = checkWeeklyDiscount;
export const getWeeklyDiscountedAction = getDiscountAction;
export const getDiscountedShamePrice = getDiscountPrice;
export const getShameActionPrice = getActionPrice;
export const getShameActionMessage = getActionMessage;
export const getMockeryTierColorClass = getTierColorClass;
export const getActiveMockeryClass = getActiveClass;

// Define available mockery actions
export const availableShameActions: MockeryAction[] = [
  'tomatoes',
  'eggs',
  'shame',
  'stocks',
  'dunce',
  'jester'
];

// Weekly discounted items rotation
export const weeklyDiscountedActions: MockeryAction[] = [
  'tomatoes',
  'eggs',
  'stocks'
];
