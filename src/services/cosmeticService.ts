
import { CosmeticItem, CosmeticRarity, getRandomCosmetic } from '@/types/cosmetics';
import { UserProfile } from '@/contexts/AuthContext';

// Simplified database of cosmetic items
const COSMETIC_DATABASE: CosmeticItem[] = [
  // Borders
  {
    id: 'border-purple-glow',
    name: 'Purple Glow',
    description: 'A subtle purple glow around your profile',
    price: 15,
    rarity: 'common',
    category: 'border'
  },
  {
    id: 'border-royal-frame',
    name: 'Royal Frame',
    description: 'An ornate golden frame fit for royalty',
    price: 25,
    rarity: 'uncommon',
    category: 'border'
  },
  {
    id: 'border-neon-pulse',
    name: 'Neon Pulse',
    description: 'A pulsating neon border that draws attention',
    price: 50,
    rarity: 'rare',
    category: 'border'
  },
  {
    id: 'border-galaxy-aura',
    name: 'Galaxy Aura',
    description: 'A cosmic border with swirling galaxy effects',
    price: 100,
    rarity: 'epic',
    category: 'border'
  },
  {
    id: 'border-kings-decree',
    name: "King's Decree",
    description: 'The ultimate border reserved for those who truly pay to win',
    price: 250,
    rarity: 'legendary',
    category: 'border'
  },
  
  // Colors
  {
    id: 'color-royal-purple',
    name: 'Royal Purple',
    description: 'The classic color of nobility',
    price: 10,
    rarity: 'common',
    category: 'color'
  },
  {
    id: 'color-golden-hue',
    name: 'Golden Hue',
    description: 'A rich gold tone that speaks of wealth',
    price: 20,
    rarity: 'uncommon',
    category: 'color'
  },
  {
    id: 'color-rainbow-shift',
    name: 'Rainbow Shift',
    description: 'A color that shifts through the rainbow spectrum',
    price: 45,
    rarity: 'rare',
    category: 'color'
  },
  {
    id: 'color-diamond-sparkle',
    name: 'Diamond Sparkle',
    description: 'A shimmering diamond-like color effect',
    price: 90,
    rarity: 'epic',
    category: 'color'
  },
  {
    id: 'color-void-nexus',
    name: 'Void Nexus',
    description: 'A mysterious shifting void with ethereal colors',
    price: 200,
    rarity: 'legendary',
    category: 'color'
  },
  
  // Fonts
  {
    id: 'font-elegant-serif',
    name: 'Elegant Serif',
    description: 'A refined serif font for the discerning user',
    price: 12,
    rarity: 'common',
    category: 'font'
  },
  {
    id: 'font-gothic-script',
    name: 'Gothic Script',
    description: 'A medieval-inspired script font',
    price: 22,
    rarity: 'uncommon',
    category: 'font'
  },
  {
    id: 'font-digital-future',
    name: 'Digital Future',
    description: 'A futuristic font with digital embellishments',
    price: 40,
    rarity: 'rare',
    category: 'font'
  },
  {
    id: 'font-mystic-runes',
    name: 'Mystic Runes',
    description: 'A font inspired by ancient magical runes',
    price: 85,
    rarity: 'epic',
    category: 'font'
  },
  {
    id: 'font-sovereign-decree',
    name: 'Sovereign Decree',
    description: 'The font used by digital royalty',
    price: 180,
    rarity: 'legendary',
    category: 'font'
  },
  
  // Emojis
  {
    id: 'emoji-money-bag',
    name: 'Money Bag',
    description: 'Show off your wealth with this custom emoji',
    price: 8,
    rarity: 'common',
    category: 'emoji'
  },
  {
    id: 'emoji-diamond-hands',
    name: 'Diamond Hands',
    description: 'Never let go of your status',
    price: 18,
    rarity: 'uncommon',
    category: 'emoji'
  },
  {
    id: 'emoji-golden-throne',
    name: 'Golden Throne',
    description: 'A throne fit for digital royalty',
    price: 35,
    rarity: 'rare',
    category: 'emoji'
  },
  {
    id: 'emoji-money-rain',
    name: 'Money Rain',
    description: 'An animated emoji of raining money',
    price: 75,
    rarity: 'epic',
    category: 'emoji'
  },
  {
    id: 'emoji-crown-jewel',
    name: 'Crown Jewel',
    description: 'The ultimate symbol of your pay-to-win status',
    price: 150,
    rarity: 'legendary',
    category: 'emoji'
  }
];

// Get all cosmetic items
export const getAllCosmetics = (): CosmeticItem[] => {
  return COSMETIC_DATABASE;
};

// Get cosmetic items by category
export const getCosmeticsByCategory = (category: string): CosmeticItem[] => {
  return COSMETIC_DATABASE.filter(item => item.category === category);
};

// Get cosmetic items by rarity
export const getCosmeticsByRarity = (rarity: CosmeticRarity): CosmeticItem[] => {
  return COSMETIC_DATABASE.filter(item => item.rarity === rarity);
};

// Get a cosmetic item by ID
export const getCosmeticById = (id: string): CosmeticItem | undefined => {
  return COSMETIC_DATABASE.find(item => item.id === id);
};

// Check if user owns a cosmetic
export const userOwnsCosmetic = (user: UserProfile, cosmeticId: string): boolean => {
  if (!user.cosmetics) return false;
  
  // Find the category that contains this cosmetic
  for (const [category, items] of Object.entries(user.cosmetics)) {
    if (items && items.includes(cosmeticId)) {
      return true;
    }
  }
  
  return false;
};

// Award a random cosmetic based on wish amount
export const awardRandomCosmetic = (
  user: UserProfile, 
  amount: number,
  preferredCategory?: string
): { 
  cosmeticItem: CosmeticItem | null;
  rarity: CosmeticRarity;
} => {
  // Determine the rarity based on amount spent
  const rarity = getRandomCosmetic(amount, preferredCategory);
  
  // Filter items by rarity and optionally by category
  let eligibleItems = COSMETIC_DATABASE.filter(item => item.rarity === rarity);
  
  if (preferredCategory) {
    const categoryItems = eligibleItems.filter(item => item.category === preferredCategory);
    // If there are items in the preferred category, use those, otherwise use all items of that rarity
    if (categoryItems.length > 0) {
      eligibleItems = categoryItems;
    }
  }
  
  // Filter out items the user already owns
  const unownedItems = eligibleItems.filter(item => !userOwnsCosmetic(user, item.id));
  
  // If user owns all items of this rarity/category, try to give them any item they don't have
  const itemPool = unownedItems.length > 0 ? unownedItems : COSMETIC_DATABASE.filter(item => !userOwnsCosmetic(user, item.id));
  
  // If somehow user owns absolutely everything, return null
  if (itemPool.length === 0) {
    return { cosmeticItem: null, rarity };
  }
  
  // Pick a random item from the pool
  const randomIndex = Math.floor(Math.random() * itemPool.length);
  return { cosmeticItem: itemPool[randomIndex], rarity };
};
