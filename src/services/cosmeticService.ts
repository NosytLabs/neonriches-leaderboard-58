
import { CosmeticItem } from '@/types/cosmetics';

// Mock cosmetic items database
const cosmeticItems: CosmeticItem[] = [
  {
    id: 'border-1',
    name: 'Royal Gold Border',
    description: 'A luxurious gold border fit for royalty',
    category: 'border',
    type: 'profile',
    rarity: 'legendary',
    cost: 25.00,
    cssClass: 'border-royal-gold animate-border-glow'
  },
  {
    id: 'border-2',
    name: 'Crimson Flame Border',
    description: 'A border that flickers with the passion of crimson flames',
    category: 'border',
    type: 'profile',
    rarity: 'epic',
    cost: 15.00,
    cssClass: 'border-royal-crimson animate-border-flicker'
  },
  {
    id: 'bg-1',
    name: 'Royal Throne Background',
    description: 'Show your status with an opulent throne room background',
    category: 'background',
    type: 'profile',
    rarity: 'legendary',
    cost: 50.00,
    imageSrc: '/throne-assets/royal-throne-bg.jpg'
  },
  {
    id: 'title-1',
    name: 'Sovereign',
    description: 'The highest title in the realm, reserved for true royalty',
    category: 'title',
    type: 'prefix',
    rarity: 'legendary',
    cost: 100.00
  },
  {
    id: 'effect-1',
    name: 'Golden Aura',
    description: 'Surround your profile with a shimmering golden aura',
    category: 'effect',
    type: 'profile',
    rarity: 'legendary',
    cost: 75.00,
    cssClass: 'golden-aura-effect'
  }
];

// Get all cosmetic items
export const getAllCosmetics = (): CosmeticItem[] => {
  return cosmeticItems;
};

// Get cosmetics by category
export const getCosmeticsByCategory = (category: string): CosmeticItem[] => {
  return cosmeticItems.filter(item => item.category === category);
};

// Get cosmetic by ID
export const getCosmeticById = (id: string): CosmeticItem | undefined => {
  return cosmeticItems.find(item => item.id === id);
};

// Get cosmetics by rarity
export const getCosmeticsByRarity = (rarity: string): CosmeticItem[] => {
  return cosmeticItems.filter(item => item.rarity === rarity);
};

// Purchase a cosmetic (mock function)
export const purchaseCosmetic = async (
  userId: string,
  cosmeticId: string
): Promise<{ success: boolean; message: string }> => {
  // In a real app, this would interact with a backend
  const cosmetic = getCosmeticById(cosmeticId);
  
  if (!cosmetic) {
    return {
      success: false,
      message: 'Cosmetic not found'
    };
  }
  
  // Simulate a successful purchase
  return {
    success: true,
    message: `Successfully purchased ${cosmetic.name}`
  };
};

export default {
  getAllCosmetics,
  getCosmeticsByCategory,
  getCosmeticById,
  getCosmeticsByRarity,
  purchaseCosmetic
};
