
import { CosmeticItem, CosmeticRarity, CosmeticCategory } from '@/types/cosmetics';

export const getCosmeticById = (id: string): CosmeticItem => {
  // Mock implementation
  return {
    id,
    name: `Cosmetic ${id}`,
    category: 'border', // Updated to match allowed CosmeticCategory values
    type: 'profile',
    rarity: 'rare',
    description: 'A beautiful cosmetic item',
    imageUrl: '/assets/cosmetics/borders/rare.png',
    imageSrc: '/assets/cosmetics/borders/rare.png',
    cssClass: 'border-royal-gold',
    cost: 50,
    price: 50, // Required field now
    enabled: true // Add required field
  };
};

export const awardRandomCosmetic = (
  user: any, 
  spentAmount: number,
  preferredCategory?: string
): { cosmeticItem: CosmeticItem, rarity: CosmeticRarity } => {
  // Mock implementation
  const rarities: CosmeticRarity[] = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
  const categories: CosmeticCategory[] = ['border', 'color', 'font', 'emoji', 'title', 'background', 'effect', 'badge', 'theme'];
  
  // Determine rarity based on amount spent
  let rarityWeights = [
    { rarity: 'common' as CosmeticRarity, chance: 40 }, 
    { rarity: 'uncommon' as CosmeticRarity, chance: 30 },
    { rarity: 'rare' as CosmeticRarity, chance: 20 },
    { rarity: 'epic' as CosmeticRarity, chance: 8 },
    { rarity: 'legendary' as CosmeticRarity, chance: 2 }
  ];
  
  // Adjust chances based on spent amount
  if (spentAmount >= 10) {
    rarityWeights = [
      { rarity: 'common' as CosmeticRarity, chance: 25 }, 
      { rarity: 'uncommon' as CosmeticRarity, chance: 20 },
      { rarity: 'rare' as CosmeticRarity, chance: 25 },
      { rarity: 'epic' as CosmeticRarity, chance: 18 },
      { rarity: 'legendary' as CosmeticRarity, chance: 12 }
    ];
  } else if (spentAmount >= 5) {
    rarityWeights = [
      { rarity: 'common' as CosmeticRarity, chance: 30 }, 
      { rarity: 'uncommon' as CosmeticRarity, chance: 25 },
      { rarity: 'rare' as CosmeticRarity, chance: 25 },
      { rarity: 'epic' as CosmeticRarity, chance: 13 },
      { rarity: 'legendary' as CosmeticRarity, chance: 7 }
    ];
  } else if (spentAmount >= 2) {
    rarityWeights = [
      { rarity: 'common' as CosmeticRarity, chance: 35 }, 
      { rarity: 'uncommon' as CosmeticRarity, chance: 32 },
      { rarity: 'rare' as CosmeticRarity, chance: 22 },
      { rarity: 'epic' as CosmeticRarity, chance: 9 },
      { rarity: 'legendary' as CosmeticRarity, chance: 2 }
    ];
  }
  
  // Randomly select rarity based on weights
  const totalWeight = rarityWeights.reduce((sum, item) => sum + item.chance, 0);
  let random = Math.random() * totalWeight;
  let selectedRarity: CosmeticRarity = 'common';
  
  for (const item of rarityWeights) {
    if (random <= item.chance) {
      selectedRarity = item.rarity;
      break;
    }
    random -= item.chance;
  }
  
  // Select category (respect preferred if provided)
  const validCategory = preferredCategory && categories.includes(preferredCategory as CosmeticCategory) 
    ? preferredCategory as CosmeticCategory 
    : categories[Math.floor(Math.random() * categories.length)];
  
  // Generate a unique ID based on category and rarity
  const uniqueId = `${validCategory}_${selectedRarity}_${Date.now()}`;
  
  // Return a mock cosmetic item
  return {
    cosmeticItem: {
      id: uniqueId,
      name: `${selectedRarity.charAt(0).toUpperCase() + selectedRarity.slice(1)} ${validCategory}`,
      description: `A ${selectedRarity} cosmetic item for your profile`,
      category: validCategory,
      type: validCategory, // Use category as type
      rarity: selectedRarity,
      price: selectedRarity === 'legendary' ? 100 : 
             selectedRarity === 'epic' ? 75 :
             selectedRarity === 'rare' ? 50 :
             selectedRarity === 'uncommon' ? 30 : 20,
      cost: selectedRarity === 'legendary' ? 100 : 
            selectedRarity === 'epic' ? 75 :
            selectedRarity === 'rare' ? 50 :
            selectedRarity === 'uncommon' ? 30 : 20,
      cssClass: `${selectedRarity}-${validCategory}-item`,
      enabled: true
    },
    rarity: selectedRarity
  };
};
