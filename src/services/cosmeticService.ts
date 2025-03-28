
import { CosmeticItem } from '@/types/ui-types';

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
  return cosmeticItems.filter(item => userCosmetics.includes(item.id));
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
  const equippedItems = {
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
