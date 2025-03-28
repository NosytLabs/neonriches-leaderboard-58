
import { CosmeticItem, CosmeticRarity, getRandomCosmetic } from '@/types/cosmetics';
import { UserProfile } from '@/contexts/AuthContext';

// Simplified database of cosmetic items with lower prices and medieval themes
const COSMETIC_DATABASE: CosmeticItem[] = [
  // Borders
  {
    id: 'border-parchment',
    name: 'Parchment Border',
    description: 'A simple yet elegant parchment-style border',
    price: 0.99,
    rarity: 'common',
    category: 'border'
  },
  {
    id: 'border-royal-frame',
    name: 'Royal Frame',
    description: 'An ornate golden frame fit for nobility',
    price: 2.50,
    rarity: 'uncommon',
    category: 'border'
  },
  {
    id: 'border-dragon-scales',
    name: 'Dragon Scales',
    description: 'A border of shimmering dragon scales',
    price: 5.00,
    rarity: 'rare',
    category: 'border'
  },
  {
    id: 'border-arcane-runes',
    name: 'Arcane Runes',
    description: 'Mysterious glowing runes encircle your profile',
    price: 8.50,
    rarity: 'epic',
    category: 'border'
  },
  {
    id: 'border-kings-decree',
    name: "King's Decree",
    description: 'The ultimate border reserved for those of true royal blood',
    price: 15.00,
    rarity: 'legendary',
    category: 'border'
  },
  
  // Colors
  {
    id: 'color-peasant-brown',
    name: 'Peasant Brown',
    description: 'The humble color of the common folk',
    price: 0.50,
    rarity: 'common',
    category: 'color'
  },
  {
    id: 'color-royal-purple',
    name: 'Royal Purple',
    description: 'The classic color of nobility',
    price: 1.50,
    rarity: 'common',
    category: 'color'
  },
  {
    id: 'color-golden-hue',
    name: 'Golden Hue',
    description: 'A rich gold tone that speaks of wealth',
    price: 2.50,
    rarity: 'uncommon',
    category: 'color'
  },
  {
    id: 'color-crusader-crimson',
    name: 'Crusader Crimson',
    description: 'The bold red of medieval knights',
    price: 3.50,
    rarity: 'rare',
    category: 'color'
  },
  {
    id: 'color-alchemist-azure',
    name: 'Alchemist Azure',
    description: 'The mystical blue of medieval scholars',
    price: 5.00,
    rarity: 'epic',
    category: 'color'
  },
  {
    id: 'color-dragon-emerald',
    name: 'Dragon Emerald',
    description: 'A shimmering green like a dragon\'s eye',
    price: 7.50,
    rarity: 'legendary',
    category: 'color'
  },
  
  // Fonts
  {
    id: 'font-scribe',
    name: 'Scribe Script',
    description: 'The careful handwriting of a medieval scribe',
    price: 0.75,
    rarity: 'common',
    category: 'font'
  },
  {
    id: 'font-gothic-script',
    name: 'Gothic Script',
    description: 'A medieval-inspired gothic font',
    price: 1.99,
    rarity: 'uncommon',
    category: 'font'
  },
  {
    id: 'font-calligraphy',
    name: 'Royal Calligraphy',
    description: 'Elegant flowing script for the elite',
    price: 3.50,
    rarity: 'rare',
    category: 'font'
  },
  {
    id: 'font-mystic-runes',
    name: 'Mystic Runes',
    description: 'A font inspired by ancient magical runes',
    price: 6.00,
    rarity: 'epic',
    category: 'font'
  },
  {
    id: 'font-sovereign-decree',
    name: 'Sovereign Decree',
    description: 'The font used by digital royalty',
    price: 10.00,
    rarity: 'legendary',
    category: 'font'
  },
  
  // Emojis
  {
    id: 'emoji-jester',
    name: 'Jester',
    description: 'A medieval court jester emoji',
    price: 0.50,
    rarity: 'common',
    category: 'emoji'
  },
  {
    id: 'emoji-goblet',
    name: 'Royal Goblet',
    description: 'A golden goblet fit for a feast',
    price: 1.50,
    rarity: 'uncommon',
    category: 'emoji'
  },
  {
    id: 'emoji-dragon',
    name: 'Dragon',
    description: 'A fearsome dragon emoji',
    price: 2.99,
    rarity: 'rare',
    category: 'emoji'
  },
  {
    id: 'emoji-castle',
    name: 'Castle',
    description: 'A grand medieval castle emoji',
    price: 4.50,
    rarity: 'epic',
    category: 'emoji'
  },
  {
    id: 'emoji-crown-jewel',
    name: 'Crown Jewel',
    description: 'The ultimate symbol of your royal status',
    price: 8.00,
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
    if (Array.isArray(items) && items.includes(cosmeticId)) {
      return true;
    }
  }
  
  return false;
};

// Calculate discount based on user tier/spending
export const getDiscountedPrice = (basePrice: number, amountSpent: number): number => {
  // Higher spenders get better discounts
  let discount = 0;
  
  if (amountSpent >= 100) {
    discount = 0.30; // 30% off for whales
  } else if (amountSpent >= 50) {
    discount = 0.20; // 20% off for high spenders
  } else if (amountSpent >= 25) {
    discount = 0.15; // 15% off for medium spenders
  } else if (amountSpent >= 10) {
    discount = 0.10; // 10% off for low spenders
  }
  
  // Calculate discounted price, round to 2 decimal places
  return Math.max(0.50, parseFloat((basePrice * (1 - discount)).toFixed(2)));
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
