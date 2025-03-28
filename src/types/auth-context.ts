
import { CosmeticRarity } from '@/types/cosmetics';
import { UserProfile, UserSubscription } from '@/types/user';

export interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  error: Error | null;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  signOut: () => void; // Add signOut method
  subscription?: UserSubscription;
  awardCosmetic?: (cosmeticId: string, category: string, rarity: CosmeticRarity, source: string) => Promise<boolean>;
  boostProfile?: (days?: number, level?: number) => Promise<boolean>;
}
