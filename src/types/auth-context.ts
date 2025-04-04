
import { UserProfile } from './user-consolidated';

export type UserTier = 
  | 'free' | 'basic' | 'premium' | 'royal' | 'legendary'
  | 'founder' | 'noble' | 'knight' | 'baron' | 'viscount' 
  | 'earl' | 'duke' | 'prince' | 'king' | 'emperor' | 'whale'
  | 'pro' | 'standard' | 'elite' | 'silver' | 'gold' 
  | 'platinum' | 'diamond' | 'bronze' | 'vip';

export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (userData: Partial<UserProfile>) => Promise<boolean>;
  updateUserProfile: (userData: Partial<UserProfile>) => Promise<boolean>;
  awardCosmetic: (category: string, itemId: string, notify?: boolean) => Promise<boolean>;
}

export interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthAction {
  type: string;
  payload?: any;
}
