
import { CosmeticItem, CosmeticRarity, CosmeticCategory, CosmeticType } from '@/types/cosmetics';

export const getCosmeticById = (id: string): CosmeticItem => {
  // Mock implementation
  return {
    id,
    name: `Cosmetic ${id}`,
    category: 'borders' as CosmeticCategory,
    type: 'profile' as CosmeticType,
    rarity: 'rare' as CosmeticRarity,
    description: 'A beautiful cosmetic item',
    imageUrl: '/assets/cosmetics/borders/rare.png',
    imageSrc: '/assets/cosmetics/borders/rare.png', // For backward compatibility
    cssClass: 'border-royal-gold', // For backward compatibility
    cost: 0
  };
};

export const awardRandomCosmetic = (
  user: any, 
  spentAmount: number,
  preferredCategory?: string
): { cosmeticItem: CosmeticItem, rarity: CosmeticRarity } => {
  // Mock implementation
  const rarities: CosmeticRarity[] = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
  const categories: CosmeticCategory[] = ['borders', 'colors', 'fonts', 'emojis', 'titles', 'backgrounds', 'effects'];
  
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
  const selectedCategory = (preferredCategory as CosmeticCategory) || categories[Math.floor(Math.random() * categories.length)];
  
  // Generate a random cosmetic item
  const cosmeticId = `cosmetic_${Date.now()}`;
  const randomNames = [
    'Royal Glory', 'Golden Crown', 'Emerald Shine', 'Ruby Sparkle', 'Sapphire Glow',
    'Diamond Edge', 'Platinum Aura', 'Crimson Flame', 'Azure Mist', 'Violet Haze'
  ];
  
  const cosmeticItem: CosmeticItem = {
    id: cosmeticId,
    name: randomNames[Math.floor(Math.random() * randomNames.length)],
    category: selectedCategory,
    type: 'profile' as CosmeticType,
    rarity: selectedRarity,
    description: `A ${selectedRarity} ${selectedCategory.slice(0, -1)} effect.`,
    imageUrl: `/assets/cosmetics/${selectedCategory}/${selectedRarity}.png`,
    imageSrc: `/assets/cosmetics/${selectedCategory}/${selectedRarity}.png`, // For backward compatibility
    cssClass: `${selectedRarity}-${selectedCategory.slice(0, -1)}`, // For backward compatibility
    cost: 0
  };
  
  return { cosmeticItem, rarity: selectedRarity };
};
