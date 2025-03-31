
import { MockeryAction } from '@/types/mockery-types';

export function getMockeryCost(action: MockeryAction): number {
  const costs: Record<string, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    crown: 1.00,
    stocks: 2.00,
    jester: 3.00,
    protection: 5.00,
    shame: 0.75,
    target: 0.50,
    challenge: 1.50,
    ghost: 2.50,
    putridEggs: 1.25,
    silence: 3.50,
    courtJester: 4.00,
    smokeBomb: 2.75
  };
  
  return costs[action] || 1.00;
}
