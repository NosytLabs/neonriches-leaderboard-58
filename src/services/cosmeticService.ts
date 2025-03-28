
import { CosmeticItem, CosmeticRarity } from '@/types/cosmetics';
import { UserProfile } from '@/types/user';

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

// Award a random cosmetic
export const awardRandomCosmetic = (
  user: UserProfile,
  amount: number,
  preferredCategory?: string
): { cosmeticItem: CosmeticItem | null; rarity: CosmeticRarity } => {
  // Calculate rarity based on the amount spent
  let rarityChances = {
    common: Math.max(40 - (amount >= 10 ? 15 : amount >= 5 ? 10 : amount >= 2 ? 5 : 0), 25),
    uncommon: 30 + (amount >= 10 ? -10 : amount >= 5 ? -5 : amount >= 2 ? 2 : 0),
    rare: 20 + (amount >= 10 ? 5 : amount >= 5 ? 5 : amount >= 2 ? 2 : 0),
    epic: 8 + (amount >= 10 ? 10 : amount >= 5 ? 5 : amount >= 2 ? 1 : 0),
    legendary: 2 + (amount >= 10 ? 10 : amount >= 5 ? 5 : 0)
  };
  
  // Normalize chances
  const total = Object.values(rarityChances).reduce((acc, val) => acc + val, 0);
  Object.keys(rarityChances).forEach((key) => {
    rarityChances[key as CosmeticRarity] = rarityChances[key as CosmeticRarity] / total * 100;
  });
  
  // Determine rarity based on weighted random
  const rand = Math.random() * 100;
  let cumulativeChance = 0;
  let selectedRarity: CosmeticRarity = 'common';
  
  for (const [rarity, chance] of Object.entries(rarityChances)) {
    cumulativeChance += chance;
    if (rand <= cumulativeChance) {
      selectedRarity = rarity as CosmeticRarity;
      break;
    }
  }
  
  // Filter eligible cosmetics by rarity and optional category
  let eligibleItems = cosmeticItems.filter(item => 
    item.rarity === selectedRarity && 
    (!preferredCategory || item.category === preferredCategory)
  );
  
  // Check if user already has all items of this rarity
  const userCosmetics = user.cosmetics || {
    borders: [], colors: [], fonts: [], emojis: [], titles: [], backgrounds: [], effects: [], badges: [], themes: []
  };
  
  const userCosmeticIds = [
    ...userCosmetics.borders,
    ...userCosmetics.colors,
    ...userCosmetics.fonts,
    ...userCosmetics.emojis,
    ...userCosmetics.titles,
    ...userCosmetics.backgrounds,
    ...userCosmetics.effects,
    ...userCosmetics.badges,
    ...userCosmetics.themes
  ];
  
  eligibleItems = eligibleItems.filter(item => !userCosmeticIds.includes(item.id));
  
  // If no eligible items, try a lower rarity
  if (eligibleItems.length === 0) {
    const rarities: CosmeticRarity[] = ['legendary', 'epic', 'rare', 'uncommon', 'common'];
    const currentRarityIndex = rarities.indexOf(selectedRarity);
    
    for (let i = currentRarityIndex + 1; i < rarities.length; i++) {
      const fallbackRarity = rarities[i];
      eligibleItems = cosmeticItems.filter(item => 
        item.rarity === fallbackRarity && 
        (!preferredCategory || item.category === preferredCategory) &&
        !userCosmeticIds.includes(item.id)
      );
      
      if (eligibleItems.length > 0) {
        selectedRarity = fallbackRarity;
        break;
      }
    }
  }
  
  // If still no eligible items, return null
  if (eligibleItems.length === 0) {
    return { cosmeticItem: null, rarity: selectedRarity };
  }
  
  // Pick a random item from the eligible ones
  const randomIndex = Math.floor(Math.random() * eligibleItems.length);
  return { cosmeticItem: eligibleItems[randomIndex], rarity: selectedRarity };
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
  purchaseCosmetic,
  awardRandomCosmetic
};
