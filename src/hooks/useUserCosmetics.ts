
import { UserProfile } from '@/types/user';
import { UserCosmetics, CosmeticRarity } from '@/types/cosmetics';

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
      
      // Cast to our defined UserCosmetics type with required fields
      const userCosmetics: UserCosmetics = user.cosmetics || { 
        border: [], 
        color: [], 
        font: [], 
        emoji: [], 
        title: [],
        background: [],
        effect: [],
        badge: [],
        theme: []
      };
      
      // Map legacy category names to the current property names
      const categoryMap: Record<string, keyof UserCosmetics> = {
        'borders': 'border',
        'colors': 'color',
        'fonts': 'font',
        'emojis': 'emoji',
        'titles': 'title',
        'backgrounds': 'background',
        'effects': 'effect',
        'badges': 'badge',
        'themes': 'theme'
      };
      
      // Get the correct property name
      const propertyName = categoryMap[category] || category as keyof UserCosmetics;
      
      const items = userCosmetics[propertyName] || [];
      
      // Check if cosmetic already exists
      if (Array.isArray(items) && items.includes(cosmeticId)) {
        return false;
      }
      
      // Create a new cosmetics object with the updated array
      const updatedCosmetics = {
        ...userCosmetics,
        [propertyName]: Array.isArray(items) ? [...items, cosmeticId] : [cosmeticId]
      } as UserCosmetics;
      
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
      
      // Create the boost object with required properties
      const newBoost = {
        id: boostId,
        startDate: new Date().toISOString(),
        endDate: new Date(endTime).toISOString(),
        level,
        type: 'visibility',
        strength: level,
        appliedBy: user.id,
        isActive: true
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
