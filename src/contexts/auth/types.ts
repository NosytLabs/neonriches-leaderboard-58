
// Auth context types

export type UserTier = 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'elite' 
  | 'legendary' 
  | 'founder';

export type TeamType = 'red' | 'blue' | 'green';
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
  [key: string]: any;
}

export interface UserCosmetics {
  border?: string[];
  color?: string[];
  font?: string[];
  emoji?: string[];
  title?: string[];
  background?: string[];
  effect?: string[];
  badge?: string[];
  theme?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
}

export interface UserCosmeticState {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  activeBorder: string;
  activeColor: string;
  activeFont: string;
  activeEmoji: string;
  activeTitle: string;
  activeBackground: string;
  activeEffect: string;
  activeBadge: string;
  activeTheme: string;
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId?: string;
  type: string;
  strength: number;
  appliedBy: string;
  isActive: boolean;
  status?: string;
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

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
  isPublic?: boolean;
}
