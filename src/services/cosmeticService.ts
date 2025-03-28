export const getCosmeticById = (id: string) => {
  // Mock implementation
  return {
    id,
    name: `Cosmetic ${id}`,
    category: 'borders',
    rarity: 'rare',
    description: 'A beautiful cosmetic item',
    previewUrl: '/assets/cosmetics/borders/rare.png'
  };
};

export const awardRandomCosmetic = (
  user: any, 
  spentAmount: number,
  preferredCategory?: string
) => {
  // Mock implementation
  const rarities = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
  const categories = ['borders', 'colors', 'fonts', 'emojis', 'titles', 'backgrounds', 'effects'];
  
  // Determine rarity based on amount spent
  let rarityWeights = [
    { rarity: 'common', chance: 40 }, 
    { rarity: 'uncommon', chance: 30 },
    { rarity: 'rare', chance: 20 },
    { rarity: 'epic', chance: 8 },
    { rarity: 'legendary', chance: 2 }
  ];
  
  // Adjust chances based on spent amount
  if (spentAmount >= 10) {
    rarityWeights = [
      { rarity: 'common', chance: 25 }, 
      { rarity: 'uncommon', chance: 20 },
      { rarity: 'rare', chance: 25 },
      { rarity: 'epic', chance: 18 },
      { rarity: 'legendary', chance: 12 }
    ];
  } else if (spentAmount >= 5) {
    rarityWeights = [
      { rarity: 'common', chance: 30 }, 
      { rarity: 'uncommon', chance: 25 },
      { rarity: 'rare', chance: 25 },
      { rarity: 'epic', chance: 13 },
      { rarity: 'legendary', chance: 7 }
    ];
  } else if (spentAmount >= 2) {
    rarityWeights = [
      { rarity: 'common', chance: 35 }, 
      { rarity: 'uncommon', chance: 32 },
      { rarity: 'rare', chance: 22 },
      { rarity: 'epic', chance: 9 },
      { rarity: 'legendary', chance: 2 }
    ];
  }
  
  // Randomly select rarity based on weights
  const totalWeight = rarityWeights.reduce((sum, item) => sum + item.chance, 0);
  let random = Math.random() * totalWeight;
  let selectedRarity = 'common';
  
  for (const item of rarityWeights) {
    if (random <= item.chance) {
      selectedRarity = item.rarity;
      break;
    }
    random -= item.chance;
  }
  
  // Select category (respect preferred if provided)
  const selectedCategory = preferredCategory || categories[Math.floor(Math.random() * categories.length)];
  
  // Generate a random cosmetic item
  const cosmeticId = `cosmetic_${Date.now()}`;
  const randomNames = [
    'Royal Glory', 'Golden Crown', 'Emerald Shine', 'Ruby Sparkle', 'Sapphire Glow',
    'Diamond Edge', 'Platinum Aura', 'Crimson Flame', 'Azure Mist', 'Violet Haze'
  ];
  
  const cosmeticItem = {
    id: cosmeticId,
    name: randomNames[Math.floor(Math.random() * randomNames.length)],
    category: selectedCategory,
    rarity: selectedRarity,
    description: `A ${selectedRarity} ${selectedCategory.slice(0, -1)} effect.`,
    previewUrl: `/assets/cosmetics/${selectedCategory}/${selectedRarity}.png`
  };
  
  return { cosmeticItem, rarity: selectedRarity };
};
