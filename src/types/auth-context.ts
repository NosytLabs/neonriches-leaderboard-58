
import { UserProfile } from './user';

export interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  error: Error | null;
  isAuthenticated?: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup?: (email: string, password: string, username: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signOut: () => Promise<void>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<void>;
  refreshUser?: () => Promise<void>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
  confirmPasswordReset?: (code: string, newPassword: string) => Promise<void>;
  boostProfile?: (duration: number) => Promise<boolean>;
  awardCosmetic?: (id: string, category: string, rarity: string, source: string) => Promise<boolean>;
  openAuthModal: () => void;
  closeAuthModal?: () => void;
}
