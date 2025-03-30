
import { MockeryAction } from "@/types/mockery";

// Define mockery costs
export const MOCKERY_COSTS: Record<MockeryAction, number> = {
  tomatoes: 10,
  eggs: 15,
  putridEggs: 25,
  stocks: 50,
  silence: 75,
  courtJester: 100,
  dunce: 85,
  jester: 90,
  smokeBomb: 40,
  glitterBomb: 45,
  protection: 200,
  immune: 300,
  royalPie: 120,
  jokeCrown: 150,
  memeFrame: 60,
  roast: 30,
  ridicule: 35,
  humiliate: 70,
  expose: 65,
  mock: 20,
  shame: 40,
  taunt: 25,
  guillotine: 500,
  dungeons: 250,
  removal: 1000
};

// Get the CSS class for a mockery action
export function getActiveMockeryClass(action: MockeryAction): string {
  switch (action) {
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'putridEggs':
    case 'eggs':
      return 'mockery-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'silence':
      return 'mockery-silence';
    case 'courtJester':
    case 'jester':
      return 'mockery-jester';
    case 'dunce':
      return 'mockery-dunce';
    case 'smokeBomb':
      return 'mockery-smoke';
    case 'glitterBomb':
      return 'mockery-glitter';
    case 'jokeCrown':
      return 'mockery-joke-crown';
    case 'guillotine':
      return 'mockery-guillotine';
    case 'dungeons':
      return 'mockery-dungeons';
    default:
      return '';
  }
}

// Check if a mockery action is premium
export function isPremiumMockery(action: MockeryAction): boolean {
  return [
    'putridEggs',
    'stocks',
    'courtJester',
    'dunce',
    'immune',
    'royalPie',
    'jokeCrown',
    'guillotine',
    'dungeons',
    'removal'
  ].includes(action);
}

// Get the duration of a mockery effect in hours
export function getMockeryDuration(action: MockeryAction): number {
  switch (action) {
    case 'guillotine':
    case 'dungeons':
    case 'removal':
      return 72; // 3 days
    case 'immune':
    case 'protection':
      return 48; // 2 days
    case 'putridEggs':
    case 'stocks':
    case 'silence':
    case 'courtJester':
    case 'dunce':
    case 'royalPie':
    case 'jokeCrown':
      return 24; // 1 day
    default:
      return 12; // 12 hours
  }
}
