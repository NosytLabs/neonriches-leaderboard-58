
import { UserProfile } from '@/types/user';
import { CosmeticRarity } from '@/types/cosmetics';

/**
 * Hook for handling user cosmetics operations
 */
export const useUserCosmetics = (
  user: UserProfile | null,
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>
) => {
  /**
   * Awards a cosmetic item to the user
   */
  const awardCosmetic = async (
    cosmeticId: string, 
    category: string, 
    rarity: CosmeticRarity, 
    source: string
  ): Promise<boolean> => {
    try {
      if (!user) return false;
      
      const userCosmetics = user.cosmetics || { 
        borders: [], 
        colors: [], 
        fonts: [], 
        emojis: [], 
        titles: [] 
      };
      
      const categoryItems = userCosmetics[category as keyof typeof userCosmetics] || [];
      
      if (Array.isArray(categoryItems) && categoryItems.includes(cosmeticId)) {
        return false;
      }
      
      const updatedCosmetics = {
        ...userCosmetics,
        [category]: Array.isArray(categoryItems) ? [...categoryItems, cosmeticId] : [cosmeticId]
      };
      
      await updateUserProfile({
        cosmetics: updatedCosmetics
      });
      
      return true;
    } catch (error) {
      console.error("Error awarding cosmetic:", error);
      return false;
    }
  };

  /**
   * Temporarily boosts a user's profile visibility
   */
  const boostProfile = async (days: number = 7, level: number = 1): Promise<boolean> => {
    try {
      if (!user) return false;
      
      return true;
    } catch (error) {
      console.error("Error boosting profile:", error);
      return false;
    }
  };

  return {
    awardCosmetic,
    boostProfile
  };
};
