
import { MockeryAction } from '@/types/mockery';

// Define prices for each mockery action
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const costs: Record<string, number> = {
    tomatoes: 0.99,
    eggs: 1.49,
    shame: 0.99,
    dungeons: 3.99,
    immune: 9.99,
    crown: 4.99,
    stocks: 2.99,
    dunce: 1.99,
    jester: 3.99,
    troll: 1.99,
    peasant: 2.99,
    rat: 1.99,
    ghost: 3.99,
    skeleton: 3.99,
    zombie: 5.99,
    witch: 3.99,
    monster: 5.99,
    demon: 5.99,
    dragon: 9.99,
    king: 7.99,
    queen: 7.99,
    knight: 4.99,
    bishop: 6.99,
    rook: 4.99,
    pawn: 1.99,
    target: 3.99,
    challenge: 6.99
  };
  
  return costs[action] || 1.99;
};

// For backward compatibility
export const getMockeryCost = getMockeryActionPrice;

export default getMockeryCost;
