
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
 * Team color enum for the application
 */
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none' 
  | 'neutral';

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
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  showTeam: boolean;
  showSpending: boolean;
  showBadges: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
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
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  profileBoosts?: any[];
  cosmetics?: any;
  subscription?: any;
  settings?: UserSettings;
  gender?: string;
  joinDate?: string;
  followers?: number;
  following?: number;
  badges?: string[];
  rankChange?: number;
  spendChange?: number;
  lastSeen?: string;
  achievements?: string[];
  lastActive?: string;
  isOnline?: boolean;
  isPro?: boolean;
  isVIP?: boolean;
  isProtected?: boolean;
  avatarUrl?: string;
  role?: string;
  activeTitle?: string;
  teamRank?: number;
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
  purchasedFeatures?: string[];
  boostCount?: number;
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

export type ProfileLink = SocialLink;
