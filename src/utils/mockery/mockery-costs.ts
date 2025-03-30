
import { MockeryAction } from '@/types/mockery';

export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomatoes: 10,
    eggs: 15,
    shame: 25,
    dungeons: 50,
    immune: 100,
    crown: 40,
    stocks: 30,
    dunce: 20,
    jester: 35,
    fool: 25,
    troll: 30,
    peasant: 25,
    rat: 20,
    ghost: 45,
    skeleton: 50,
    zombie: 55,
    witch: 60,
    monster: 65,
    demon: 75,
    dragon: 85,
    king: 90,
    queen: 90,
    knight: 70,
    bishop: 65,
    rook: 60,
    pawn: 40,
    target: 35,
    challenge: 45
  };
  
  return costs[action] || 25;
};
