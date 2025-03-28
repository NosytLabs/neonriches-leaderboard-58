
import { UserProfile } from '@/types/user';
import { CosmeticRarity } from '@/types/cosmetics';
import { BoostEffectType, ProfileBoost } from '@/hooks/use-profile-boost';

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
        titles: [],
        backgrounds: [],
        effects: [],
        badges: [],
        themes: []
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
      
      // Calculate end time for the boost effect
      const currentTime = Date.now();
      const endTime = currentTime + (days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
      
      // Generate a unique ID for this boost
      const boostId = `boost_${Date.now()}`;
      
      // Select a boost effect based on the level
      let effectId: BoostEffectType;
      switch (level) {
        case 3:
          effectId = 'crown';
          break;
        case 2:
          effectId = 'sparkle';
          break;
        case 1:
        default:
          effectId = 'glow';
          break;
      }
      
      // Create the boost object with required properties for ProfileBoost type
      const newBoost: ProfileBoost = {
        id: boostId,
        effectId: effectId,
        startTime: currentTime,
        endTime: endTime,
        type: 'visibility',
        strength: level,
        appliedBy: user.id
      };
      
      // Get existing boosts or initialize empty array
      const currentBoosts = user.profileBoosts || [];
      
      // Add the new boost
      const updatedBoosts = [...currentBoosts, newBoost];
      
      // Update user profile
      await updateUserProfile({
        profileBoosts: updatedBoosts
      });
      
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

export default useUserCosmetics;
