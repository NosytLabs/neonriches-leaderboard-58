
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rarity: CosmeticRarity;
  category: string;
  image?: string;
}

// Get rarity based on the wish amount
export const getRandomCosmetic = (
  amount: number,
  preferredCategory?: string
): CosmeticRarity => {
  // Base chances for each rarity tier
  let commonChance = 40;
  let uncommonChance = 30;
  let rareChance = 20;
  let epicChance = 8;
  let legendaryChance = 2;
  
  // Adjust chances based on amount spent
  if (amount >= 2) {
    commonChance -= 5;
    uncommonChance += 2;
    rareChance += 2;
    epicChance += 1;
  }
  
  if (amount >= 5) {
    commonChance -= 10;
    uncommonChance -= 5;
    rareChance += 5;
    epicChance += 5;
    legendaryChance += 5;
  }
  
  if (amount >= 10) {
    commonChance -= 15;
    uncommonChance -= 10;
    rareChance += 5;
    epicChance += 10;
    legendaryChance += 10;
  }
  
  // Roll for rarity
  const roll = Math.random() * 100;
  let currentThreshold = 0;
  
  currentThreshold += commonChance;
  if (roll < currentThreshold) return 'common';
  
  currentThreshold += uncommonChance;
  if (roll < currentThreshold) return 'uncommon';
  
  currentThreshold += rareChance;
  if (roll < currentThreshold) return 'rare';
  
  currentThreshold += epicChance;
  if (roll < currentThreshold) return 'epic';
  
  return 'legendary';
};

// Rarity colors
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

// Rarity background colors
export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-700/50';
    case 'uncommon':
      return 'bg-green-900/50';
    case 'rare':
      return 'bg-blue-900/50';
    case 'epic':
      return 'bg-purple-900/50';
    case 'legendary':
      return 'bg-yellow-900/50';
    default:
      return 'bg-gray-800/50';
  }
};

// Rarity border colors
export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-gray-500';
    case 'uncommon':
      return 'border-green-500';
    case 'rare':
      return 'border-blue-500';
    case 'epic':
      return 'border-purple-500';
    case 'legendary':
      return 'border-royal-gold';
    default:
      return 'border-gray-500';
  }
};
