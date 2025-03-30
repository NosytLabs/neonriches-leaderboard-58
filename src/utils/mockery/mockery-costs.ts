
import { MockeryAction } from '@/types/mockery';

export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<string, number> = {
    tomatoes: 5,
    eggs: 10,
    putridEggs: 15,
    stocks: 20,
    dunce: 25,
    silence: 30,
    courtJester: 35,
    smokeBomb: 40,
    glitterBomb: 45,
    jester: 50,
    taunt: 15,
    ridicule: 25,
    shame: 30,
    mock: 10,
    humiliate: 35,
    expose: 40,
    guillotine: 50,
    dungeons: 45,
    removal: 30,
    royalPie: 20,
    jokeCrown: 30,
    memeFrame: 25
  };
  
  return costs[action] || 10;
};

export const getMockeryCooldown = (action: MockeryAction): number => {
  // Return cooldown in milliseconds (24 hours by default)
  return 24 * 60 * 60 * 1000;
};

export const getMockeryDuration = (action: MockeryAction): number => {
  // Return duration in milliseconds (1 hour by default)
  return 60 * 60 * 1000;
};

export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};
