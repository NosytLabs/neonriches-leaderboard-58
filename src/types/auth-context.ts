
import { CosmeticRarity } from '@/types/cosmetics';
import { UserProfile, UserSubscription } from '@/types/user';

export interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signOut: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  subscription?: UserSubscription;
  awardCosmetic?: (cosmeticId: string, category: string, rarity: CosmeticRarity, source: string) => Promise<boolean>;
  boostProfile?: (days?: number, level?: number) => Promise<boolean>;
}
