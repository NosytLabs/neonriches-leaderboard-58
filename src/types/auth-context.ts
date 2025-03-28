
import { CosmeticRarity } from '@/types/cosmetics';
import { UserProfile } from '@/types/user';

export interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signOut: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  boostProfile?: (days?: number, level?: number) => Promise<boolean>;
  awardCosmetic?: (cosmeticId: string, category: string, rarity: string, source: string) => Promise<boolean>;
}
