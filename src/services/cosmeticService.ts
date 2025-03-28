
import { User, UserProfile } from '@/types';

// Types for cosmetic items
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: string;
  rarity: CosmeticRarity;
  previewImage?: string;
  price?: number;
}

// Mock cosmetic items for development
const mockCosmetics: CosmeticItem[] = [
  {
    id: 'border_gold',
    name: 'Royal Gold Border',
    description: 'A luxurious gold border for your profile.',
    category: 'borders',
    rarity: 'rare',
    previewImage: '/images/cosmetics/borders/gold.png',
    price: 5
  },
  {
    id: 'color_royal_purple',
    name: 'Royal Purple',
    description: 'Decorate your profile with royal purple colors.',
    category: 'colors',
    rarity: 'uncommon',
    previewImage: '/images/cosmetics/colors/purple.png',
    price: 2
  },
  {
    id: 'font_gothic',
    name: 'Gothic Script',
    description: 'An elegant gothic font for your profile text.',
    category: 'fonts',
    rarity: 'rare',
    previewImage: '/images/cosmetics/fonts/gothic.png',
    price: 5
  },
  // Add more mock items as needed
];

// Get all available cosmetic items
export const getAllCosmetics = (): CosmeticItem[] => {
  // In a real app, this would be an API call
  return mockCosmetics;
};

// Get cosmetic items by category
export const getCosmeticsByCategory = (category: string): CosmeticItem[] => {
  // In a real app, this would be an API call
  return mockCosmetics.filter(item => item.category === category);
};

// Get a specific cosmetic item by ID
export const getCosmeticById = (id: string): CosmeticItem | undefined => {
  // In a real app, this would be an API call
  return mockCosmetics.find(item => item.id === id);
};

// Award a random cosmetic to a user based on their wish amount
export const awardRandomCosmetic = (
  user: User | UserProfile,
  wishAmount: number,
  preferredCategory?: string
): { cosmeticItem: CosmeticItem | null; rarity: CosmeticRarity | null } => {
  try {
    // In a real app, this would be an API call
    
    // Filter by preferred category if specified
    let availableCosmetics = preferredCategory
      ? mockCosmetics.filter(item => item.category === preferredCategory)
      : mockCosmetics;
    
    // Filter out cosmetics the user already owns
    if (user.cosmetics) {
      availableCosmetics = availableCosmetics.filter(item => {
        const categoryItems = user.cosmetics?.[item.category as keyof typeof user.cosmetics] || [];
        return !categoryItems.includes(item.id);
      });
    }
    
    if (availableCosmetics.length === 0) {
      return { cosmeticItem: null, rarity: null };
    }
    
    // Determine rarity based on wish amount
    const rarityChances: Record<CosmeticRarity, number> = {
      common: Math.max(40 - (wishAmount >= 10 ? 15 : wishAmount >= 5 ? 10 : wishAmount >= 2 ? 5 : 0), 25),
      uncommon: 30 + (wishAmount >= 10 ? -10 : wishAmount >= 5 ? -5 : wishAmount >= 2 ? 2 : 0),
      rare: 20 + (wishAmount >= 10 ? 5 : wishAmount >= 5 ? 5 : wishAmount >= 2 ? 2 : 0),
      epic: 8 + (wishAmount >= 10 ? 10 : wishAmount >= 5 ? 5 : wishAmount >= 2 ? 1 : 0),
      legendary: 2 + (wishAmount >= 10 ? 10 : wishAmount >= 5 ? 5 : 0)
    };
    
    // Determine the rarity first
    const rarityRoll = Math.random() * 100;
    let selectedRarity: CosmeticRarity = 'common';
    let cumulativeChance = 0;
    
    for (const [rarity, chance] of Object.entries(rarityChances) as [CosmeticRarity, number][]) {
      cumulativeChance += chance;
      if (rarityRoll <= cumulativeChance) {
        selectedRarity = rarity;
        break;
      }
    }
    
    // Filter cosmetics by the selected rarity
    const rarityCosmetics = availableCosmetics.filter(item => item.rarity === selectedRarity);
    
    // If no cosmetics are available for this rarity, fall back to any rarity
    const finalCosmeticPool = rarityCosmetics.length > 0 ? rarityCosmetics : availableCosmetics;
    
    // Select a random cosmetic from the pool
    const randomIndex = Math.floor(Math.random() * finalCosmeticPool.length);
    const selectedCosmetic = finalCosmeticPool[randomIndex];
    
    return {
      cosmeticItem: selectedCosmetic || null,
      rarity: selectedCosmetic?.rarity || null
    };
  } catch (error) {
    console.error('Error awarding random cosmetic:', error);
    return { cosmeticItem: null, rarity: null };
  }
};

// Get styling information for rarities
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    default: return 'text-gray-300';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'bg-gray-800';
    case 'uncommon': return 'bg-green-900';
    case 'rare': return 'bg-blue-900';
    case 'epic': return 'bg-purple-900';
    case 'legendary': return 'bg-amber-900';
    default: return 'bg-gray-800';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'border-gray-600';
    case 'uncommon': return 'border-green-600';
    case 'rare': return 'border-blue-600';
    case 'epic': return 'border-purple-600';
    case 'legendary': return 'border-royal-gold';
    default: return 'border-gray-600';
  }
};
