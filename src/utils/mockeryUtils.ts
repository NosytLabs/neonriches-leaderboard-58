
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Standard costs for mockery actions
export const MOCKERY_COSTS: Record<MockeryAction, number> = {
  'tomatoes': 5,
  'eggs': 10,
  'putridEggs': 15,
  'stocks': 25,
  'silence': 50,
  'courtJester': 100,
  'dunce': 15,
  'smokeBomb': 20,
  'jester': 40,
  'ridicule': 5,
  'humiliate': 15,
  'expose': 20,
  'mock': 10,
  'shame': 12,
  'immune': 75,
  'protection': 60,
  'glitterBomb': 35,
  'royalPie': 45,
  'jokeCrown': 75,
  'memeFrame': 40,
  'roast': 30,
  'taunt': 8,
  'guillotine': 150,
  'dungeons': 100,
  'removal': 200
};

// Duration in milliseconds for each mockery type
export const MOCKERY_DURATIONS: Record<MockeryAction, number> = {
  'tomatoes': 1000 * 60 * 60 * 2, // 2 hours
  'eggs': 1000 * 60 * 60 * 4, // 4 hours
  'putridEggs': 1000 * 60 * 60 * 6, // 6 hours
  'stocks': 1000 * 60 * 60 * 12, // 12 hours
  'silence': 1000 * 60 * 60 * 24, // 1 day
  'courtJester': 1000 * 60 * 60 * 48, // 2 days
  'dunce': 1000 * 60 * 60 * 8, // 8 hours
  'smokeBomb': 1000 * 60 * 60 * 1, // 1 hour
  'jester': 1000 * 60 * 60 * 24, // 1 day
  'ridicule': 1000 * 60 * 30, // 30 minutes
  'humiliate': 1000 * 60 * 60 * 3, // 3 hours
  'expose': 1000 * 60 * 60 * 5, // 5 hours
  'mock': 1000 * 60 * 60 * 1, // 1 hour
  'shame': 1000 * 60 * 60 * 2, // 2 hours
  'immune': 1000 * 60 * 60 * 72, // 3 days
  'protection': 1000 * 60 * 60 * 48, // 2 days
  'glitterBomb': 1000 * 60 * 60 * 3, // 3 hours
  'royalPie': 1000 * 60 * 60 * 6, // 6 hours
  'jokeCrown': 1000 * 60 * 60 * 24, // 1 day
  'memeFrame': 1000 * 60 * 60 * 12, // 12 hours
  'roast': 1000 * 60 * 60 * 4, // 4 hours
  'taunt': 1000 * 60 * 60 * 1, // 1 hour
  'guillotine': 1000 * 60 * 60 * 72, // 3 days
  'dungeons': 1000 * 60 * 60 * 48, // 2 days
  'removal': 1000 * 60 * 60 * 24 * 7 // 7 days
};

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const costTiers: Record<MockeryTier, number[]> = {
    'common': [0, 10],
    'uncommon': [11, 20],
    'rare': [21, 40],
    'epic': [41, 70],
    'legendary': [71, 120],
    'premium': [121, 200],
    'basic': [0, 15],
    'royal': [201, 1000],
    'elite': [1001, Infinity]
  };
  
  const cost = MOCKERY_COSTS[action];
  
  for (const [tier, [min, max]] of Object.entries(costTiers)) {
    if (cost >= min && cost <= max) {
      return tier as MockeryTier;
    }
  }
  
  return 'common';
};

// Get the CSS class for a mockery action
export const getMockeryCssClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'mockery-tomatoes';
    case 'eggs': return 'mockery-eggs';
    case 'putridEggs': return 'mockery-putrid-eggs';
    case 'stocks': return 'mockery-stocks';
    case 'silence': return 'mockery-silence';
    case 'courtJester': return 'mockery-court-jester';
    case 'protection': return 'mockery-protection';
    case 'immune': return 'mockery-immune';
    default: return `mockery-${action.toLowerCase()}`;
  }
};

// Check if a mockery action is protective
export const isProtectiveAction = (action: MockeryAction): boolean => {
  return action === 'protection' || action === 'immune';
};

// Format the remaining time for a mockery effect
export const formatMockeryTimeRemaining = (expiresAt: string | Date): string => {
  const now = new Date();
  const expiry = new Date(expiresAt);
  const diff = expiry.getTime() - now.getTime();
  
  if (diff <= 0) return 'Expired';
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (hours > 24) {
    const days = Math.floor(hours / 24);
    return `${days}d ${hours % 24}h`;
  }
  
  return `${hours}h ${minutes}m`;
};
