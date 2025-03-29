
import { User } from './user';
import { CosmeticItem, CosmeticRarity } from './cosmetics';

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<boolean>;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  updateUserProfile: (newUserData: Partial<User>) => Promise<boolean>;
  awardCosmetic: (id: string, category: string, rarity: CosmeticRarity, source: string) => Promise<boolean>;
}
