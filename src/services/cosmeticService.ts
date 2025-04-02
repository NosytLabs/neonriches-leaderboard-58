import { CosmeticItem, CosmeticCategory, CosmeticRarity, CosmeticType } from '@/types/cosmetics';

// Mock data for cosmetics
const mockCosmetics: Record<string, CosmeticItem[]> = {
  border: [
    { id: 'border1', name: 'Gold Trim', description: 'A shiny gold border', category: 'border', rarity: 'rare', price: 500, imageUrl: '/assets/cosmetics/border1.png' },
    { id: 'border2', name: 'Silver Trim', description: 'A cool silver border', category: 'border', rarity: 'uncommon', price: 300, imageUrl: '/assets/cosmetics/border2.png' },
    { id: 'border3', name: 'Bronze Trim', description: 'A classic bronze border', category: 'border', rarity: 'common', price: 100, imageUrl: '/assets/cosmetics/border3.png' },
    { id: 'border4', name: 'Royal Trim', description: 'A shiny royal border', category: 'border', rarity: 'royal', price: 1000, imageUrl: '/assets/cosmetics/border4.png' },
  ],
  color: [
    { id: 'color1', name: 'Royal Blue', description: 'A deep blue color', category: 'color', rarity: 'rare', price: 400, imageUrl: '/assets/cosmetics/color1.png' },
    { id: 'color2', name: 'Crimson Red', description: 'A vibrant red color', category: 'color', rarity: 'uncommon', price: 250, imageUrl: '/assets/cosmetics/color2.png' },
    { id: 'color3', name: 'Forest Green', description: 'A natural green color', category: 'color', rarity: 'common', price: 80, imageUrl: '/assets/cosmetics/color3.png' },
    { id: 'color4', name: 'Gold', description: 'A shiny gold color', category: 'color', rarity: 'royal', price: 800, imageUrl: '/assets/cosmetics/color4.png' },
  ],
  font: [
    { id: 'font1', name: 'Royal Script', description: 'An elegant script font', category: 'font', rarity: 'rare', price: 600, imageUrl: '/assets/cosmetics/font1.png' },
    { id: 'font2', name: 'Modern Sans', description: 'A clean sans-serif font', category: 'font', rarity: 'uncommon', price: 350, imageUrl: '/assets/cosmetics/font2.png' },
    { id: 'font3', name: 'Classic Serif', description: 'A traditional serif font', category: 'font', rarity: 'common', price: 120, imageUrl: '/assets/cosmetics/font3.png' },
    { id: 'font4', name: 'Bold Impact', description: 'A bold and impactful font', category: 'font', rarity: 'royal', price: 1200, imageUrl: '/assets/cosmetics/font4.png' },
  ],
  emoji: [
    { id: 'emoji1', name: 'Royal Crown', description: 'A majestic crown emoji', category: 'emoji', rarity: 'rare', price: 700, imageUrl: '/assets/cosmetics/emoji1.png' },
    { id: 'emoji2', name: 'Thumbs Up', description: 'A positive thumbs up emoji', category: 'emoji', rarity: 'uncommon', price: 400, imageUrl: '/assets/cosmetics/emoji2.png' },
    { id: 'emoji3', name: 'Smiley Face', description: 'A cheerful smiley face emoji', category: 'emoji', rarity: 'common', price: 150, imageUrl: '/assets/cosmetics/emoji3.png' },
    { id: 'emoji4', name: 'Money Bag', description: 'A bag full of money emoji', category: 'emoji', rarity: 'royal', price: 1400, imageUrl: '/assets/cosmetics/emoji4.png' },
  ],
  title: [
    { id: 'title1', name: 'Royal Majesty', description: 'A title fit for royalty', category: 'title', rarity: 'rare', price: 800, imageUrl: '/assets/cosmetics/title1.png' },
    { id: 'title2', name: 'Elite Member', description: 'A title for elite members', category: 'title', rarity: 'uncommon', price: 450, imageUrl: '/assets/cosmetics/title2.png' },
    { id: 'title3', name: 'Valued User', description: 'A title for valued users', category: 'title', rarity: 'common', price: 200, imageUrl: '/assets/cosmetics/title3.png' },
     { id: 'title4', name: 'Cash King', description: 'A title for cash kings', category: 'title', rarity: 'royal', price: 1600, imageUrl: '/assets/cosmetics/title4.png' },
  ],
  background: [
    { id: 'background1', name: 'Royal Palace', description: 'A background of a royal palace', category: 'background', rarity: 'rare', price: 900, imageUrl: '/assets/cosmetics/background1.png' },
    { id: 'background2', name: 'Cityscape', description: 'A background of a cityscape', category: 'background', rarity: 'uncommon', price: 500, imageUrl: '/assets/cosmetics/background2.png' },
    { id: 'background3', name: 'Nature Scene', description: 'A background of a nature scene', category: 'background', rarity: 'common', price: 250, imageUrl: '/assets/cosmetics/background3.png' },
    { id: 'background4', name: 'Gold Bars', description: 'A background of gold bars', category: 'background', rarity: 'royal', price: 1800, imageUrl: '/assets/cosmetics/background4.png' },
  ],
  effect: [
    { id: 'effect1', name: 'Royal Sparkles', description: 'A sparkling effect', category: 'effect', rarity: 'rare', price: 1000, imageUrl: '/assets/cosmetics/effect1.png' },
    { id: 'effect2', name: 'Cool Waves', description: 'A wave effect', category: 'effect', rarity: 'uncommon', price: 550, imageUrl: '/assets/cosmetics/effect2.png' },
    { id: 'effect3', name: 'Gentle Breeze', description: 'A breeze effect', category: 'effect', rarity: 'common', price: 300, imageUrl: '/assets/cosmetics/effect3.png' },
    { id: 'effect4', name: 'Cash Shower', description: 'A shower of cash effect', category: 'effect', rarity: 'royal', price: 2000, imageUrl: '/assets/cosmetics/effect4.png' },
  ],
  badge: [
    { id: 'badge1', name: 'Royal Supporter', description: 'A badge for royal supporters', category: 'badge', rarity: 'rare', price: 1100, imageUrl: '/assets/cosmetics/badge1.png' },
    { id: 'badge2', name: 'Elite Contributor', description: 'A badge for elite contributors', category: 'badge', rarity: 'uncommon', price: 600, imageUrl: '/assets/cosmetics/badge2.png' },
    { id: 'badge3', name: 'Active Member', description: 'A badge for active members', category: 'badge', rarity: 'common', price: 350, imageUrl: '/assets/cosmetics/badge3.png' },
    { id: 'badge4', name: 'Cash Magnet', description: 'A badge for cash magnets', category: 'badge', rarity: 'royal', price: 2200, imageUrl: '/assets/cosmetics/badge4.png' },
  ],
  theme: [
    { id: 'theme1', name: 'Royal Theme', description: 'A theme fit for royalty', category: 'theme', rarity: 'rare', price: 1200, imageUrl: '/assets/cosmetics/theme1.png' },
    { id: 'theme2', name: 'Dark Theme', description: 'A sleek dark theme', category: 'theme', rarity: 'uncommon', price: 650, imageUrl: '/assets/cosmetics/theme2.png' },
    { id: 'theme3', name: 'Light Theme', description: 'A clean light theme', category: 'theme', rarity: 'common', price: 400, imageUrl: '/assets/cosmetics/theme3.png' },
    { id: 'theme4', name: 'Cash Theme', description: 'A theme for cash lovers', category: 'theme', rarity: 'royal', price: 2400, imageUrl: '/assets/cosmetics/theme4.png' },
  ]
};

/**
 * Fetches all cosmetics for a given category
 */
export const getCosmeticsByCategory = async (category: CosmeticType): Promise<CosmeticItem[]> => {
  // Type guard to ensure the category is a valid CosmeticType
  const isValidCosmeticType = (cat: string): cat is CosmeticType => {
    const validTypes: CosmeticType[] = [
      'border', 'color', 'font', 'emoji', 'title', 'background', 'effect', 'badge', 'theme'
    ];
    return validTypes.includes(cat as CosmeticType);
  };

  // Convert category if needed
  const mappedCategory = isValidCosmeticType(category) ? category : 'badge';

  return mockCosmetics[mappedCategory] || [];
};

/**
 * Fetches a single cosmetic item by ID
 */
export const getCosmeticById = async (id: string, category: CosmeticCategory): Promise<CosmeticItem | undefined> => {
  const cosmetics = await getCosmeticsByCategory(category);
  return cosmetics.find(cosmetic => cosmetic.id === id);
};

/**
 * Purchases a cosmetic item
 */
export const purchaseCosmetic = async (id: string, category: CosmeticCategory): Promise<boolean> => {
  // In a real application, this would make a call to the backend
  // to handle the purchase and update the user's inventory
  console.log(`Purchasing cosmetic ${id} in category ${category}`);
  return true;
};

/**
 * Gets the price of a cosmetic item
 */
export const getCosmeticPrice = async (id: string, category: CosmeticCategory): Promise<number | undefined> => {
  const cosmetic = await getCosmeticById(id, category);
  return cosmetic?.price;
};

/**
 * Gets the rarity of a cosmetic item
 */
export const getCosmeticRarity = async (id: string, category: CosmeticCategory): Promise<CosmeticRarity | undefined> => {
  const cosmetic = await getCosmeticById(id, category);
  return cosmetic?.rarity;
};

/**
 * Gets the image URL of a cosmetic item
 */
export const getCosmeticImageUrl = async (id: string, category: CosmeticCategory): Promise<string | undefined> => {
  const cosmetic = await getCosmeticById(id, category);
  return cosmetic?.imageUrl;
};

export default {
  getCosmeticsByCategory,
  getCosmeticById,
  purchaseCosmetic,
  getCosmeticPrice,
  getCosmeticRarity,
  getCosmeticImageUrl
};
