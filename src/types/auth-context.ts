
import { UserProfile } from './user-consolidated';

export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>; // Alias for login
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  signOut: () => Promise<void>; // Alias for logout
  updateUser: (updates: Partial<UserProfile>) => Promise<boolean>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<boolean>; // Alias for updateUser
  awardCosmetic: (category: string, itemId: string, notify?: boolean) => Promise<boolean>;
}
