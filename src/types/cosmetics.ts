
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rarity: CosmeticRarity;
  category: 'border' | 'color' | 'font' | 'emoji' | 'effect' | 'badge' | 'frame' | 'background';
  previewImage?: string;
  unlockRequirement?: string;
  isLimited?: boolean;
  isNew?: boolean;
}

export const RARITY_COLORS = {
  common: {
    text: 'text-gray-300',
    bg: 'bg-gray-700/40',
    border: 'border-gray-500/50',
    glow: 'shadow-gray-500/20'
  },
  uncommon: {
    text: 'text-green-300',
    bg: 'bg-green-700/40',
    border: 'border-green-500/50',
    glow: 'shadow-green-500/20'
  },
  rare: {
    text: 'text-blue-300',
    bg: 'bg-blue-700/40',
    border: 'border-blue-500/50',
    glow: 'shadow-blue-500/30'
  },
  epic: {
    text: 'text-purple-300',
    bg: 'bg-purple-700/40',
    border: 'border-purple-500/50',
    glow: 'shadow-purple-500/30'
  },
  legendary: {
    text: 'text-amber-300',
    bg: 'bg-amber-700/40',
    border: 'border-amber-500/50',
    glow: 'shadow-amber-500/40'
  }
};

export const RARITY_CHANCES = {
  common: 0.60, // 60% chance
  uncommon: 0.25, // 25% chance
  rare: 0.10, // 10% chance 
  epic: 0.04, // 4% chance
  legendary: 0.01 // 1% chance
};

export const RARITY_DROP_RATES = {
  // Drop rates based on spent amount
  LOW_TIER: {
    common: 0.70,
    uncommon: 0.20,
    rare: 0.08,
    epic: 0.02,
    legendary: 0.00
  },
  MID_TIER: {
    common: 0.55,
    uncommon: 0.30,
    rare: 0.10,
    epic: 0.04,
    legendary: 0.01
  },
  HIGH_TIER: {
    common: 0.40,
    uncommon: 0.35,
    rare: 0.15,
    epic: 0.07,
    legendary: 0.03
  },
  WHALE_TIER: {
    common: 0.30,
    uncommon: 0.30,
    rare: 0.20,
    epic: 0.15,
    legendary: 0.05
  }
};

export const getRarityTier = (amount: number) => {
  if (amount >= 50) return 'WHALE_TIER';
  if (amount >= 25) return 'HIGH_TIER';
  if (amount >= 10) return 'MID_TIER';
  return 'LOW_TIER';
};

export const getRandomCosmetic = (amount: number, category?: string): CosmeticRarity => {
  const tier = getRarityTier(amount);
  const rates = RARITY_DROP_RATES[tier];
  
  const random = Math.random();
  let cumulativeProbability = 0;
  
  for (const [rarity, probability] of Object.entries(rates)) {
    cumulativeProbability += probability;
    if (random <= cumulativeProbability) {
      return rarity as CosmeticRarity;
    }
  }
  
  return 'common'; // Fallback
};
