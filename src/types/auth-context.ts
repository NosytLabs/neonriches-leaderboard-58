
import { UserProfile } from './user';

export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<boolean>;
  awardCosmetic: (category: string, itemId: string, notify?: boolean) => Promise<boolean>;
  signIn?: (email: string, password: string) => Promise<boolean>;
  signOut?: () => Promise<void>;
  updateUser?: (userData: Partial<UserProfile>) => Promise<boolean>;
}
