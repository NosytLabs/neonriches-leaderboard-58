
import { MockeryAction } from '@/types/mockery-types';
import { ensureMockeryAction } from '@/utils/mockeryNormalizer';

// Get discounted price for a mockery action
export function getDiscountedShamePrice(action: MockeryAction): number {
  const normalizedAction = ensureMockeryAction(action);
  const originalPrice = getMockeryCost(normalizedAction);
  return Math.floor(originalPrice * 0.75); // 25% discount
}

// Get the cost for a mockery action
export function getMockeryCost(action: MockeryAction): number {
  const costs: Record<string, number> = {
    'tomato': 5,
    'egg': 10,
    'putridEgg': 15,
    'crown': 100,
    'thumbsDown': 1,
    'mock': 2,
    'stocks': 25,
    'jester': 20,
    'courtJester': 30,
    'silence': 15,
    'taunt': 3,
    'smokeBomb': 8,
    'protection': 50,
    'shame': 20,
    'challenge': 15,
    'joust': 30,
    'duel': 50,
    'royal_decree': 200,
    'flame': 5,
    'heart': 2,
    'skull': 10,
    'thumbs_down': 1,
    'laugh': 2,
    'rotten_egg': 12
  };
  
  return costs[action] || 5;
}
