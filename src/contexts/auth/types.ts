
// Auth context types
import { UserCosmetics, ProfileBoost, SocialLink } from '@/types/user-types';

export type UserTier = 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'elite' 
  | 'legendary' 
  | 'founder'
  | 'free'
  | 'pro'
  | 'vip'
  | 'standard'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'bronze';

export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';
export type TeamColor = TeamType;

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  rank?: number;
  previousRank?: number;
  totalSpent?: number;
  walletBalance?: number;
  tier: UserTier;
  team?: TeamColor;
  joinDate?: string;
  lastActive?: string;
  isAdmin?: boolean;
  isVerified?: boolean;
  cosmetics?: UserCosmetics;
  achievements?: Achievement[];
  stats?: UserStats;
  profileBoosts?: ProfileBoost[];
  referralCode?: string;
  referredBy?: string;
  settings?: Record<string, any>;
  socialLinks?: SocialLink[];
  [key: string]: any;
}

export interface UserStats {
  totalSpent: number;
  highestRank: number;
  currentRank: number;
  daysActive: number;
  totalMockeries: number;
  mockeryReceived: number;
  achievementsUnlocked: number;
  referrals: number;
  teamContribution: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  image?: string;
  unlockedAt: string;
  progress?: number;
  maxProgress?: number;
  tier?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<boolean>;
  refreshUser: () => Promise<void>;
  forgotPassword: (email: string) => Promise<boolean>;
  resetPassword: (token: string, password: string) => Promise<boolean>;
  verifyEmail: (token: string) => Promise<boolean>;
  loginWithProvider: (provider: string) => Promise<boolean>;
  awardCosmetic: (itemId: string, category: string) => Promise<boolean>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export type AuthAction = 
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: UserProfile }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'REGISTER_START' }
  | { type: 'REGISTER_SUCCESS'; payload: UserProfile }
  | { type: 'REGISTER_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'REFRESH_USER_START' }
  | { type: 'REFRESH_USER_SUCCESS'; payload: UserProfile }
  | { type: 'REFRESH_USER_FAILURE'; payload: string }
  | { type: 'UPDATE_PROFILE_SUCCESS'; payload: UserProfile }
  | { type: 'CLEAR_ERROR' };

export interface LoginResponse {
  success: boolean;
  user?: UserProfile;
  error?: string;
  token?: string;
}
