
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type CosmeticCategory = 'border' | 'background' | 'badge' | 'title' | 'effect' | 'emote' | 'color' | 'font' | 'emoji' | 'theme';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  cost: number;
  price?: number; // Backward compatibility with existing code
  imageSrc?: string;
  animationData?: any;
  colors?: string[];
  cssClass?: string;
}

export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'text-gray-300';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return 'text-white';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-600/30';
    case 'uncommon':
      return 'bg-green-900/30';
    case 'rare':
      return 'bg-blue-900/30';
    case 'epic':
      return 'bg-purple-900/30';
    case 'legendary':
      return 'bg-amber-900/30';
    default:
      return 'bg-gray-800/30';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-gray-400/30';
    case 'uncommon':
      return 'border-green-400/30';
    case 'rare':
      return 'border-blue-400/30';
    case 'epic':
      return 'border-purple-400/30';
    case 'legendary':
      return 'border-royal-gold/30';
    default:
      return 'border-white/10';
  }
};

// Properly export getRandomCosmetic function
export const getRandomCosmetic = (
  amount: number,
  preferredCategory?: string
): CosmeticRarity => {
  // Base probabilities
  let commonChance = 40;   // 40%
  let uncommonChance = 30; // 30%
  let rareChance = 20;     // 20%
  let epicChance = 8;      // 8% 
  let legendaryChance = 2; // 2%
  
  // Adjust probabilities based on amount spent
  if (amount >= 10) {
    // Higher amount, better chances for rare items
    commonChance -= 15;
    uncommonChance -= 10;
    rareChance += 5;
    epicChance += 10;
    legendaryChance += 10;
  } else if (amount >= 5) {
    // Medium amount
    commonChance -= 10;
    uncommonChance -= 5;
    rareChance += 5;
    epicChance += 5;
    legendaryChance += 5;
  } else if (amount >= 2) {
    // Low-medium amount
    commonChance -= 5;
    uncommonChance += 2;
    rareChance += 2;
    epicChance += 1;
    legendaryChance = Math.max(2, legendaryChance);
  }
  
  // Ensure probabilities make sense
  commonChance = Math.max(25, commonChance);
  uncommonChance = Math.max(20, uncommonChance);
  rareChance = Math.max(15, rareChance);
  epicChance = Math.max(5, epicChance);
  legendaryChance = Math.max(1, legendaryChance);
  
  // Normalize to ensure they sum to 100
  const total = commonChance + uncommonChance + rareChance + epicChance + legendaryChance;
  commonChance = Math.floor((commonChance / total) * 100);
  uncommonChance = Math.floor((uncommonChance / total) * 100);
  rareChance = Math.floor((rareChance / total) * 100);
  epicChance = Math.floor((epicChance / total) * 100);
  legendaryChance = 100 - commonChance - uncommonChance - rareChance - epicChance;
  
  // Random roll from 1-100
  const roll = Math.floor(Math.random() * 100) + 1;
  
  // Determine rarity based on roll
  if (roll <= legendaryChance) {
    return 'legendary';
  } else if (roll <= legendaryChance + epicChance) {
    return 'epic';
  } else if (roll <= legendaryChance + epicChance + rareChance) {
    return 'rare';
  } else if (roll <= legendaryChance + epicChance + rareChance + uncommonChance) {
    return 'uncommon';
  } else {
    return 'common';
  }
};

// Add new utility functions for better animation and effects
export const getCosmeticPreviewStyle = (
  rarity: CosmeticRarity,
  animate: boolean = true
): string => {
  const baseClasses = getRarityBgColor(rarity) + ' ' + getRarityBorderColor(rarity);
  
  if (!animate) return baseClasses;
  
  switch (rarity) {
    case 'legendary':
      return `${baseClasses} animate-pulse-slow`;
    case 'epic':
      return `${baseClasses} animate-border-pulse-flame`;
    case 'rare':
      return `${baseClasses} animate-royal-pulse`;
    default:
      return baseClasses;
  }
};

export const getCosmeticDisplayName = (cosmetic: CosmeticItem): string => {
  if (!cosmetic) return '';
  
  let prefix = '';
  
  switch (cosmetic.rarity) {
    case 'legendary':
      prefix = '★ Legendary';
      break;
    case 'epic':
      prefix = '✦ Epic';
      break;
    case 'rare':
      prefix = '♦ Rare';
      break;
    case 'uncommon':
      prefix = '◆ Uncommon';
      break;
    default:
      prefix = 'Common';
  }
  
  return `${prefix} ${cosmetic.name}`;
};
