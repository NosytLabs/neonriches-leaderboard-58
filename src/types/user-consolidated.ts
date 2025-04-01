
import { MockeryAction } from '@/types/mockery';

/**
 * User tier types for the application
 */
export type UserTier = 
  | 'free' 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'legendary'
  | 'founder' 
  | 'noble'
  | 'knight' 
  | 'baron' 
  | 'viscount' 
  | 'earl' 
  | 'duke' 
  | 'prince' 
  | 'king' 
  | 'emperor' 
  | 'whale' 
  | 'pro' 
  | 'standard' 
  | 'elite' 
  | 'silver' 
  | 'gold' 
  | 'platinum' 
  | 'diamond' 
  | 'bronze' 
  | 'vip';

/**
 * TeamColor for the application
 */
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none' 
  | 'neutral'
  | 'silver'
  | 'bronze';

/**
 * User settings interface
 */
export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  showTeam: boolean;
  showSpending: boolean;
  showBadges: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  language?: string;
  publicProfile?: boolean;
  shameAlerts?: boolean;
  allowMessages?: boolean;
}

/**
 * User cosmetics interface
 */
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

/**
 * Profile boost interface
 */
export interface ProfileBoost {
  id: string;
  type: string;
  level?: number;
  startDate: string;
  endDate: string;
  appliedBy?: string;
  strength?: number;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
  isActive: boolean;
  effectId?: string;
}

/**
 * User profile interface
 */
export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  joinedDate?: string;
  joinDate?: string;
  joinedAt?: string;
  createdAt?: string;
  totalSpent: number;
  amountSpent?: number;  // Legacy field - use totalSpent instead
  spentAmount?: number;  // Legacy field - use totalSpent instead
  walletBalance?: number;
  rank?: number;
  previousRank?: number;
  tier: UserTier | string;
  team?: TeamColor | string | null;
  isVerified?: boolean;
  isFounder?: boolean;
  isVIP?: boolean;
  isProtected?: boolean;
  role?: string;
  activeTitle?: string;
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  profileBoosts?: ProfileBoost[];
  cosmetics?: UserCosmetics;
  subscription?: any;
  settings?: UserSettings;
  gender?: string;
  followers?: number | string[];
  following?: number | string[];
  badges?: string[];
  rankChange?: number;
  spendChange?: number;
  lastSeen?: string;
  achievements?: string[];
  lastActive?: string;
  isOnline?: boolean;
  isPro?: boolean;
  teamRank?: number;
  isFollowing?: boolean;
  purchasedFeatures?: string[];
  certificateNFT?: {
    id?: string;
    mintAddress?: string;
    imageUrl?: string;
    dateIssued?: string;
    type?: string;
    isVerified?: boolean;
  };
  socialLinks?: any[] | Record<string, string>;
  profileImages?: any[];
}

/**
 * Auth context type definition
 */
export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (updates: Partial<UserProfile>) => Promise<boolean>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<boolean>;
  awardCosmetic: (category: string, itemId: string, notify?: boolean) => Promise<boolean>;
}

// Re-export User for compatibility
export type User = UserProfile;

// Re-export SocialLink and ProfileImage for components that need them
export interface SocialLink {
  id?: string | number;
  platform?: string;
  url: string;
  username?: string;
  display?: string;
  icon?: string;
  verified?: boolean;
  primary?: boolean;
  clicks?: number;
  title?: string;
  label?: string;
  type?: string;
}

export interface ProfileImage {
  id?: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
}

export type ProfileLink = SocialLink;

// Gender type
export type Gender = 
  | 'male' 
  | 'female' 
  | 'other' 
  | 'prefer-not-to-say'
  | 'king'
  | 'queen'
  | 'jester'
  | 'noble';

/**
 * Mockery stats
 */
export interface MockeryStats {
  received: Record<MockeryAction, number>;
  deployed: Record<MockeryAction, number>;
  [key: string]: any;
}
