
// Re-export all shame-related utilities from the mockery utilities
import { 
  getWeeklyDiscountedAction,
  hasWeeklyDiscount,
  getDiscountedShamePrice
} from '@/utils/mockery/shame-discount-utils';

import { getMockeryCost as getShameActionPrice } from '@/utils/mockery/mockery-costs';

export {
  getWeeklyDiscountedAction,
  hasWeeklyDiscount,
  getShameActionPrice,
  getDiscountedShamePrice
};
