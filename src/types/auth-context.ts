
import { UserProfile } from './user';

export interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signIn?: (email: string, password: string) => Promise<void>;
  signOut?: () => Promise<void>;
  updateUserProfile?: (updatedProfile: Partial<UserProfile>) => Promise<void>;
  awardCosmetic?: (cosmeticId: string, category: string) => Promise<boolean>;
  updateUser?: (userData: Partial<UserProfile>) => Promise<boolean>;
}
