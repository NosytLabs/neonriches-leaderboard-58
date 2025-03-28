
import { CosmeticItem } from '@/types/ui-types';
import { CosmeticRarity } from '@/types/cosmetics';

// Mock cosmetic items
const cosmeticItems: CosmeticItem[] = [
  {
    id: "badge-royal-1",
    name: "Royal Badge",
    description: "A prestigious badge for loyal members",
    category: "badges",
    rarity: "rare",
    cost: 100,
    type: "badge",
    imageSrc: "/throne-assets/badges/royal-badge.png",
    cssClass: "badge-royal"
  },
  {
    id: "border-gold-1",
    name: "Golden Border",
    description: "A luxurious golden border for your profile",
    category: "borders",
    rarity: "epic",
    cost: 250,
    type: "border",
    cssClass: "border-gold"
  }
];

// User's owned cosmetics (mock data)
let userCosmetics: string[] = ["badge-royal-1"];

// Service functions
export const getAllCosmetics = (): CosmeticItem[] => {
  return cosmeticItems;
};

export const getUserCosmetics = (): CosmeticItem[] => {
  return cosmeticItems.filter(item => userCosmetics && userCosmetics.includes(item.id));
};

export const isItemOwned = (itemId: string): boolean => {
  if (!userCosmetics || !Array.isArray(userCosmetics)) {
    return false;
  }
  return userCosmetics.includes(itemId);
};

export const isItemEquipped = (itemId: string, itemType: string): boolean => {
  // Mock implementation for equipped items
  if (!userCosmetics || !Array.isArray(userCosmetics)) {
    return false;
  }
  
  // This is a mock implementation that should be replaced with actual logic
  const equippedItems: Record<string, string> = {
    badge: "badge-royal-1",
    border: "border-gold-1"
  };
  
  return equippedItems[itemType] === itemId;
};

export const purchaseCosmetic = (itemId: string): { success: boolean; message: string } => {
  // Mock purchase implementation
  if (isItemOwned(itemId)) {
    return { success: false, message: "You already own this item." };
  }
  
  // Add to owned items
  userCosmetics.push(itemId);
  
  return { success: true, message: "Item purchased successfully!" };
};

export const equipCosmetic = (itemId: string): { success: boolean; message: string } => {
  // Mock equip implementation
  if (!isItemOwned(itemId)) {
    return { success: false, message: "You don't own this item." };
  }
  
  // Equip logic would go here
  
  return { success: true, message: "Item equipped successfully!" };
};

// Add missing functions needed by WishingWell component
export const awardRandomCosmetic = (
  user: any, 
  amount: number, 
  preferredCategory?: string
): { cosmeticItem: CosmeticItem | null; rarity: CosmeticRarity } => {
  // Mock implementation for random cosmetic award
  const availableCosmetics = cosmeticItems.filter(
    item => !isItemOwned(item.id) && 
    (!preferredCategory || item.category === preferredCategory)
  );
  
  if (availableCosmetics.length === 0) {
    return { cosmeticItem: null, rarity: 'common' };
  }
  
  // Determine rarity based on amount spent
  let rarity: CosmeticRarity = 'common';
  
  const rarityRoll = Math.random() * 100;
  
  if (amount >= 10) {
    // Higher amount, better chance for rare items
    if (rarityRoll < 12) rarity = 'legendary';
    else if (rarityRoll < 30) rarity = 'epic';
    else if (rarityRoll < 55) rarity = 'rare';
    else if (rarityRoll < 80) rarity = 'uncommon';
    else rarity = 'common';
  } else if (amount >= 5) {
    // Medium amount
    if (rarityRoll < 7) rarity = 'legendary';
    else if (rarityRoll < 20) rarity = 'epic';
    else if (rarityRoll < 45) rarity = 'rare';
    else if (rarityRoll < 75) rarity = 'uncommon';
    else rarity = 'common';
  } else if (amount >= 2) {
    // Lower amount
    if (rarityRoll < 2) rarity = 'legendary';
    else if (rarityRoll < 10) rarity = 'epic';
    else if (rarityRoll < 30) rarity = 'rare';
    else if (rarityRoll < 65) rarity = 'uncommon';
    else rarity = 'common';
  } else {
    // Minimum amount
    if (rarityRoll < 2) rarity = 'legendary';
    else if (rarityRoll < 8) rarity = 'epic';
    else if (rarityRoll < 20) rarity = 'rare';
    else if (rarityRoll < 40) rarity = 'uncommon';
    else rarity = 'common';
  }
  
  // Filter items by rarity, or fall back to any rarity if none found
  let matchingItems = availableCosmetics.filter(item => item.rarity === rarity);
  
  if (matchingItems.length === 0) {
    matchingItems = availableCosmetics;
  }
  
  // Pick a random item from the matching items
  const randomIndex = Math.floor(Math.random() * matchingItems.length);
  const selectedItem = matchingItems[randomIndex];
  
  return { cosmeticItem: selectedItem, rarity };
};

export const getCosmeticById = (id: string): CosmeticItem | null => {
  return cosmeticItems.find(item => item.id === id) || null;
};
