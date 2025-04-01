
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { getMockeryActionPrice } from '@/utils/mockeryUtils';

// Check if there is a weekly discount
export const hasWeeklyDiscount = (): boolean => {
  // In a real application, this might be based on the current week/day or fetched from an API
  // For now, we'll just return a static value
  return true;
};

// Get the weekly discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // In a real application, this might rotate weekly or be fetched from an API
  // For now, we'll just return a static value
  return 'tomatoes';
};

// Get the price for a shame action
export const getShameActionPrice = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

// Get the discounted price for a shame action
export const getDiscountedShamePrice = (action: MockeryAction, tier: string = 'basic'): number => {
  const basePrice = getShameActionPrice(action);
  
  // Apply different discount rates based on tier
  const discountRate = tier === 'premium' || tier === 'royal' ? 0.5 :
                       tier === 'pro' ? 0.3 :
                       0.2; // Basic tier or unknown
  
  return Math.floor(basePrice * (1 - discountRate));
};

// Calculate bulk discount for shame actions
export const getBulkDiscount = (quantity: number): number => {
  if (quantity >= 10) return 0.25;
  if (quantity >= 5) return 0.15;
  if (quantity >= 3) return 0.1;
  return 0;
};

// Get discounted bulk price
export const getBulkPrice = (action: MockeryAction, quantity: number): number => {
  const unitPrice = getShameActionPrice(action);
  const discount = getBulkDiscount(quantity);
  const totalPrice = unitPrice * quantity * (1 - discount);
  return Math.floor(totalPrice);
};

// Get additional discount based on VIP status
export const getVIPDiscount = (isVIP: boolean): number => {
  return isVIP ? 0.15 : 0;
};

// Get tier-specific discount rates
export const getTierDiscountRates = (): Partial<Record<MockeryTier | string, number>> => {
  return {
    'common': 0.05,
    'uncommon': 0.1,
    'rare': 0.15,
    'epic': 0.2,
    'legendary': 0.25,
    'royal': 0.3,
    'basic': 0.1,
    'premium': 0.2
  };
};

// Get preferred target discount (for targets frequently shamed by this user)
export const getPreferredTargetDiscount = (targetUserId: string, shameCount: number): number => {
  if (shameCount >= 10) return 0.2;
  if (shameCount >= 5) return 0.1;
  if (shameCount >= 3) return 0.05;
  return 0;
};

// Get time-based discounts (happy hour, etc.)
export const getTimeBasedDiscount = (): number => {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  
  // Happy hour: 8pm-10pm
  if (hour >= 20 && hour < 22) return 0.2;
  
  // Weekend discount
  if (day === 0 || day === 6) return 0.1;
  
  return 0;
};

// Calculate final shame price with all applicable discounts
export const getFinalShamePrice = (
  action: MockeryAction,
  quantity: number = 1,
  tier: string = 'basic',
  isVIP: boolean = false,
  targetShameCount: number = 0
): number => {
  const basePrice = getShameActionPrice(action);
  const tierDiscountRates = getTierDiscountRates();
  const tierDiscount = tierDiscountRates[tier as MockeryTier] || 0;
  const vipDiscount = getVIPDiscount(isVIP);
  const bulkDiscount = getBulkDiscount(quantity);
  const preferredDiscount = getPreferredTargetDiscount('', targetShameCount);
  const timeDiscount = getTimeBasedDiscount();
  
  // Max discount can't exceed 60%
  const totalDiscountRate = Math.min(
    0.6,
    tierDiscount + vipDiscount + bulkDiscount + preferredDiscount + timeDiscount
  );
  
  const finalPrice = basePrice * quantity * (1 - totalDiscountRate);
  return Math.max(1, Math.floor(finalPrice)); // Minimum price of 1
};
