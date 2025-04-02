
import { MockeryAction } from '@/types/mockery-types';
import { UserTier } from '@/types/user-types';

/**
 * Returns a discounted price for a mockery action based on the target's tier
 * @param action The mockery action
 * @param targetTier The tier of the target user
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (action: MockeryAction, targetTier?: string): number => {
  // Get base price
  const basePrice = getShameActionPrice(action);
  
  // Calculate discount based on target tier
  let discount = 0;
  
  if (targetTier) {
    switch(targetTier) {
      case 'basic':
        discount = 0.1; // 10% discount
        break;
      case 'premium':
        discount = 0.2; // 20% discount
        break;
      case 'elite':
        discount = 0.3; // 30% discount
        break;
      case 'royal':
        discount = 0.5; // 50% discount
        break;
      case 'founder':
        discount = 0.75; // 75% discount
        break;
      default:
        discount = 0; // No discount
    }
  }
  
  // Apply discount and round to nearest integer
  return Math.round(basePrice * (1 - discount));
};

/**
 * Returns the price for a mockery action
 * @param action The mockery action
 * @returns The price in currency units
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  switch(action) {
    case 'tomatoes': return 5;
    case 'eggs': return 10;
    case 'confetti': return 15;
    case 'flowers': return 20;
    case 'shame': return 25;
    case 'crown': return 30;
    case 'carrot': return 10;
    case 'fish': return 15;
    default: return 10;
  }
};
