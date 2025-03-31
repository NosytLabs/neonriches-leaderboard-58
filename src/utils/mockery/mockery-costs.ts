
import { MockeryAction } from '@/types/mockery';

// Define prices for each mockery action
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
    tomatoes: 10,
    eggs: 15,
    shame: 25,
    dungeons: 50,
    immune: 75,
    crown: 100,
    stocks: 20,
    dunce: 25,
    jester: 30,
    // For backward compatibility, include other actions even if not in the type
    troll: 40,
    peasant: 45,
    rat: 50,
    ghost: 60,
    skeleton: 65,
    zombie: 70,
    witch: 75,
    monster: 80,
    demon: 85,
    dragon: 90,
    king: 100,
    queen: 100,
    knight: 80,
    bishop: 85,
    rook: 75,
    pawn: 50,
    target: 60,
    challenge: 75
  };
  
  return prices[action] || 25; // Default price
};

// For backward compatibility
export const getMockeryCost = getMockeryActionPrice;
