
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

// Constants for mockery functionality
export const MOCKERY_DURATION = {
  'tomatoes': 24 * 60 * 60 * 1000, // 24 hours
  'eggs': 12 * 60 * 60 * 1000, // 12 hours
  'putridEggs': 48 * 60 * 60 * 1000, // 48 hours
  'stocks': 72 * 60 * 60 * 1000, // 72 hours
  'dunce': 36 * 60 * 60 * 1000, // 36 hours
  'silence': 24 * 60 * 60 * 1000, // 24 hours
  'courtJester': 48 * 60 * 60 * 1000, // 48 hours
  'smokeBomb': 6 * 60 * 60 * 1000, // 6 hours
  'protection': 7 * 24 * 60 * 60 * 1000, // 7 days
  'immune': 30 * 24 * 60 * 60 * 1000, // 30 days
  'jester': 48 * 60 * 60 * 1000, // 48 hours
  'glitterBomb': 12 * 60 * 60 * 1000, // 12 hours
  'royalPie': 24 * 60 * 60 * 1000, // 24 hours
  'jokeCrown': 72 * 60 * 60 * 1000, // 72 hours
  'memeFrame': 48 * 60 * 60 * 1000, // 48 hours
};

export const getMockeryDuration = (action: MockeryAction): number => {
  return MOCKERY_DURATION[action] || 24 * 60 * 60 * 1000; // Default 24 hours
};

export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Partial<Record<MockeryAction, number>> = {
    'tomatoes': 5,
    'eggs': 10,
    'putridEggs': 25,
    'stocks': 50,
    'dunce': 35,
    'silence': 75,
    'courtJester': 100,
    'smokeBomb': 20,
    'protection': 150,
    'immune': 500,
    'glitterBomb': 35,
    'royalPie': 50,
    'jokeCrown': 75,
    'memeFrame': 100,
  };
  
  return costs[action] || 25; // Default cost
};

export const getMockeryName = (action: MockeryAction): string => {
  const names: Partial<Record<MockeryAction, string>> = {
    'tomatoes': 'Rotten Tomatoes',
    'eggs': 'Rotten Eggs',
    'putridEggs': 'Putrid Eggs',
    'stocks': 'Public Stocks',
    'dunce': 'Dunce Cap',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Royal Protection',
    'immune': 'Royal Immunity',
    'glitterBomb': 'Glitter Bomb',
    'royalPie': 'Royal Pie',
    'jokeCrown': 'Joke Crown',
    'memeFrame': 'Meme Frame',
    'jester': 'Jester Hat',
  };
  
  return names[action] || action;
};

export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Partial<Record<MockeryAction, string>> = {
    'tomatoes': 'Splatter the target with rotten tomatoes, leaving them marked with shame for 24 hours.',
    'eggs': 'Pelt the target with eggs, causing them embarrassment for 12 hours.',
    'putridEggs': 'Bombard the target with putrid eggs that leave a lingering stench for 48 hours.',
    'stocks': 'Place the target in the public stocks for 72 hours of humiliation.',
    'dunce': 'Force the target to wear a dunce cap for 36 hours.',
    'silence': 'Silence the target for 24 hours, preventing them from speaking in public forums.',
    'courtJester': 'Make the target the court jester for 48 hours, forced to entertain others.',
    'smokeBomb': 'Drop a smoke bomb that obscures the target temporarily for 6 hours.',
    'protection': 'Protect yourself from mockery for 7 days.',
    'immune': 'Grant yourself royal immunity from mockery for 30 days.',
    'glitterBomb': 'Cover the target in glitter they can\'t wash off for 12 hours.',
    'royalPie': 'Splat a royal pie in the target\'s face for 24 hours of sticky embarrassment.',
    'jokeCrown': 'Crown the target as the kingdom\'s fool for 72 hours.',
    'memeFrame': 'Frame the target\'s profile in ridiculous memes for 48 hours.',
    'jester': 'Force the target to wear a jester hat and bells for 48 hours of ridicule.',
  };
  
  return descriptions[action] || `Apply the ${action} effect to the target.`;
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Partial<Record<MockeryAction, MockeryTier>> = {
    'tomatoes': 'common',
    'eggs': 'common',
    'putridEggs': 'uncommon',
    'stocks': 'rare',
    'dunce': 'uncommon',
    'silence': 'rare',
    'courtJester': 'epic',
    'smokeBomb': 'common',
    'protection': 'rare',
    'immune': 'legendary',
    'glitterBomb': 'uncommon',
    'royalPie': 'rare',
    'jokeCrown': 'epic',
    'memeFrame': 'rare',
    'jester': 'uncommon',
  };
  
  return tiers[action] || 'common';
};

export const getMockeryCss = (action: MockeryAction): string => {
  const cssClasses: Partial<Record<MockeryAction, string>> = {
    'tomatoes': 'mockery-tomatoes',
    'eggs': 'mockery-eggs',
    'putridEggs': 'mockery-putrid-eggs',
    'stocks': 'mockery-stocks',
    'dunce': 'mockery-dunce',
    'silence': 'mockery-silence',
    'courtJester': 'mockery-jester',
    'smokeBomb': 'mockery-smoke',
    'protection': 'mockery-protected',
    'immune': 'mockery-immune',
    'glitterBomb': 'mockery-glitter',
    'royalPie': 'mockery-pie',
    'jokeCrown': 'mockery-joke-crown',
    'memeFrame': 'mockery-meme-frame',
    'jester': 'mockery-jester-hat',
  };
  
  return cssClasses[action] || '';
};

export const getActiveMockeryClass = (action: MockeryAction): string => {
  const mockeryClasses: Record<string, string> = {
    'tomatoes': 'bg-red-800/30 border-red-600/30',
    'eggs': 'bg-yellow-800/30 border-yellow-600/30',
    'putridEggs': 'bg-green-900/30 border-green-700/30',
    'stocks': 'bg-stone-800/30 border-stone-600/30',
    'dunce': 'bg-gray-800/30 border-gray-600/30',
    'silence': 'bg-blue-900/30 border-blue-700/30',
    'courtJester': 'bg-purple-900/30 border-purple-700/30',
    'smokeBomb': 'bg-gray-900/40 border-gray-700/30',
    'protection': 'bg-royal-gold/10 border-royal-gold/20',
    'immune': 'bg-royal-gold/20 border-royal-gold/30',
    'jester': 'bg-purple-800/30 border-purple-600/30',
    'glitterBomb': 'bg-pink-800/30 border-pink-600/30',
    'royalPie': 'bg-royal-crimson/20 border-royal-crimson/30',
    'jokeCrown': 'bg-royal-navy/20 border-royal-navy/30',
    'memeFrame': 'bg-orange-800/30 border-orange-600/30',
  };
  
  return mockeryClasses[action] || 'bg-gray-800/30 border-gray-600/30';
};

export const getMockeryRarity = (action: MockeryAction): CosmeticRarity => {
  const rarityMap: Record<MockeryTier, CosmeticRarity> = {
    'common': 'common',
    'uncommon': 'uncommon',
    'rare': 'rare',
    'epic': 'epic',
    'legendary': 'legendary',
    'premium': 'legendary'
  };
  
  const tier = getMockeryTier(action);
  return rarityMap[tier];
};

// For shame actions specifically (subset of mockery)
export const isValidShameAction = (action: string): action is ShameAction => {
  const validShameActions: ShameAction[] = [
    'tomatoes', 
    'putridEggs', 
    'stocks', 
    'dunce', 
    'silence', 
    'courtJester',
    'smokeBomb',
    'eggs',
    'shame',
    'ridicule',
    'jester'
  ];
  
  return validShameActions.includes(action as ShameAction);
};
