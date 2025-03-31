
import { UserCosmetics } from './cosmetics';
import { ProfileBoost } from './boost';

// Common user tiers used throughout the application
export type UserTier = 
  | 'basic' 
  | 'standard'
  | 'premium'
  | 'royal'
  | 'elite'
  | 'legendary'
  | 'founder'
  | 'pro'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'free'
  | 'platinum'
  | 'vip'
  | 'whale';

// Team types definition that will be used across the app
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';
export type TeamColor = TeamType;
export type Team = TeamType;

// Gender types with "neutral" added
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'unspecified' | 'neutral' | 'king' | 'queen' | 'jester' | 'noble';

// Social link interface
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

// Profile image interface
export interface ProfileImage {
  id?: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  type?: string;
}

// User settings interface
export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  showRank: boolean;
  darkMode?: boolean; // For backward compatibility
  language?: string;
  shameAlerts?: boolean;
  publicProfile?: boolean;
  showTeam: boolean;
  showSpending: boolean;
  allowMessages?: boolean;
  showBadges?: boolean; // Added property for showing badges
}

// User profile interface - consolidated from multiple sources
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
  joinedAt?: string;
  joinedDate?: string;
  createdAt?: string;
  lastActive?: string;
  lastLogin?: string;
  isAdmin?: boolean;
  isVerified?: boolean;
  isBanned?: boolean;
  isFounder?: boolean;
  isVIP?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  achievements?: string[];
  cosmetics?: UserCosmetics;
  settings?: UserSettings;
  referralCode?: string;
  referredBy?: string;
  referralCount?: number;
  socialLinks?: SocialLink[] | Record<string, string>;
  profileViews?: number;
  profileClicks?: number;
  followers?: string[] | number;
  following?: string[] | number;
  profileBoosts?: ProfileBoost[];
  teamRank?: number;
  amountSpent?: number; // For backward compatibility
  spentAmount?: number; // For backward compatibility
  gender?: Gender;
  avatarUrl?: string; // For backward compatibility
  role?: string;
  activeTitle?: string;
  profileImages?: ProfileImage[];
  purchasedFeatures?: string[];
  subscription?: any;
  subscriptionTier?: string;
  certificateNFT?: {
    id?: string;
    mintAddress?: string;
    imageUrl?: string;
    dateIssued?: string;
    type?: string;
    isVerified?: boolean;
  };
}

// Export aliases for backward compatibility
export type User = UserProfile;
export type ProfileLink = SocialLink;

// For compatibility with AuthContext
export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signIn?: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  signOut?: () => Promise<void> | void;
  updateUser?: (updates: Partial<UserProfile>) => Promise<boolean>;
  updateUserProfile?: (updates: Partial<UserProfile>) => Promise<boolean>;
  awardCosmetic?: (category: string, itemId: string, notify?: boolean) => Promise<boolean>;
}
