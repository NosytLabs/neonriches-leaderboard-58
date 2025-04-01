
import { MockeryAction } from '@/types/mockery-types';
import { UserTier } from '@/types/user-types';

/**
 * Get shame action price based on mockery action
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    tomatoes: 50,
    eggs: 100,
    stocks: 250,
    jester: 500,
    crown: 1000,
    shame: 2000,
    protection: 5000,
    derank: 10000,
    gift: 25000,
    humiliate: 50000,
    praise: 100000,
    bribe: 250000
  };
  
  return prices[action] || 100;
};

/**
 * Get shame tier prices
 */
export const getShameTierPrices = (tier: UserTier | string): number => {
  const tierPrices: Record<string, number> = {
    'free': 50,
    'basic': 100,
    'premium': 200,
    'pro': 300,
    'royal': 500,
    'legendary': 1000
  };
  
  return tierPrices[tier] || 100;
};
