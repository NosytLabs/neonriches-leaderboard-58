import { UserCosmetics } from '@/types/cosmetics';

/**
 * Gets an icon for a user's cosmetic based on category and cosmetic id
 */
export const getCosmeticIcon = (cosmetics: UserCosmetics | undefined, category: string, id: string): string => {
  if (!cosmetics) return '';
  
  // Handle case where category doesn't exist
  if (!cosmetics[category]) return '';
  
  // Check if the user has this cosmetic
  const categoryItems = cosmetics[category];
  if (Array.isArray(categoryItems) && categoryItems.includes(id)) {
    // Return icon based on id and category
    return `/assets/cosmetics/${category}/${id}.png`;
  }
  
  return '';
};

/**
 * Checks if a user has a specific cosmetic
 */
export const hasCosmetic = (cosmetics: UserCosmetics | undefined, category: string, id: string): boolean => {
  if (!cosmetics) return false;
  
  // Handle case where category doesn't exist
  const categoryItems = cosmetics[category];
  if (!categoryItems) return false;
  
  // Check if the user has this cosmetic
  if (Array.isArray(categoryItems)) {
    return categoryItems.includes(id);
  }
  
  return false;
};
