
import { CosmeticItem } from '@/types/cosmetics';
import { CosmeticCategory } from '@/types/cosmetics';

// Helper function to get cosmetic items by category
export const getCosmeticsByCategory = (items: CosmeticItem[], category: CosmeticCategory): CosmeticItem[] => {
  return items.filter(item => item.category === category);
};

// Helper function to get a cosmetic item by ID
export const getCosmeticById = (items: CosmeticItem[], id: string): CosmeticItem | undefined => {
  return items.find(item => item.id === id);
};

// Function to format cosmetic price
export const formatCosmeticPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

// Function to check if user owns a cosmetic
export const userOwnsCosmetic = (userCosmetics: string[] | undefined, cosmeticId: string): boolean => {
  if (!userCosmetics) return false;
  return userCosmetics.includes(cosmeticId);
};

// Function to get style class for a cosmetic preview
export const getCosmeticPreviewStyle = (item: CosmeticItem): string => {
  if (item.cssClass) {
    return item.cssClass;
  }
  return '';
};

// Award a random cosmetic to a user
export const awardRandomCosmetic = (
  allCosmetics: CosmeticItem[], 
  userCosmetics: string[] = [], 
  categoryFilter?: CosmeticCategory,
  rarityFilter?: string[]
): CosmeticItem | null => {
  // Filter cosmetics based on criteria
  let availableCosmetics = allCosmetics.filter(item => !userCosmetics.includes(item.id));
  
  // Apply category filter if provided
  if (categoryFilter) {
    availableCosmetics = availableCosmetics.filter(item => item.category === categoryFilter);
  }
  
  // Apply rarity filter if provided
  if (rarityFilter && rarityFilter.length > 0) {
    availableCosmetics = availableCosmetics.filter(item => rarityFilter.includes(item.rarity));
  }
  
  // If no cosmetics available after filtering, return null
  if (availableCosmetics.length === 0) {
    return null;
  }
  
  // Return a random cosmetic from the filtered list
  const randomIndex = Math.floor(Math.random() * availableCosmetics.length);
  return availableCosmetics[randomIndex];
};
