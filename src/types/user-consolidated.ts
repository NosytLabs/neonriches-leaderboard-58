
import { UserCosmetics, UserCosmeticState } from './cosmetics';

// Define team colors - updated to include hex values as proper TeamColor types
export type TeamColor = 
  | 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' 
  | '#dc2626' | '#2563eb' | '#16a34a' | '#eab308' | '#9333ea' | '#6b7280'; // Add hex values to fix teamData.ts

export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

// Define user tiers - add 'noble' and all other needed values
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
  | 'vip'
  | 'all'; // Add 'all' as a valid filter value

// Define gender type
export type Gender = 'king' | 'queen' | 'neutral' | 'jester' | 'noble' | 'male' | 'female';

// Define social link type
export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  icon?: string;
  clicks?: number;
  title?: string;  // Added to fix LinksEditor issues
  label?: string;  // Added to fix LinksEditor issues
}

// Define profile image type
export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  type: string;
}

// Define profile boost type
export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  type: string;
  strength: number;
  appliedBy: string;
  isActive: boolean;
}

// Define user settings
export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank?: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  showTeam: boolean;
  showSpending: boolean;
  showEmailOnProfile?: boolean;
  publicProfile?: boolean;
  allowMessages?: boolean;
  rankChangeAlerts?: boolean;
  language?: string;
  shameAlerts?: boolean;
  showBadges?: boolean; // For CombinedLeaderboard.tsx
}

// Define profile link type (alias for SocialLink to fix editor import errors)
export interface ProfileLink extends SocialLink {}

// Define the certificate NFT type
export interface CertificateNFT {
  id?: string;
  mintAddress?: string;
  imageUrl?: string;
  dateIssued?: string;
  type?: string;
  isVerified?: boolean;
  isMinted?: boolean; // Added for certificate repository
  createdAt?: string; // Added for certificate repository
}

// Define the user profile properties
export interface UserProfile {
  id: string | number;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  joinedDate?: string;
  joinedAt?: string; // Added for components that use this
  joinDate?: string; // Added for backward compatibility
  createdAt?: string; // Added for profile data
  rank?: number;
  amountSpent?: number;
  totalSpent?: number;
  walletBalance?: number;
  tier: UserTier;
  team?: TeamColor | null;
  isVerified?: boolean;
  isVIP?: boolean;
  cosmetics?: UserCosmetics | UserCosmeticState | Record<string, string[] | string | Record<string, string>>;
  settings?: UserSettings;
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[] | Record<string, string>;
  profileLinks?: ProfileLink[]; // Added for LinksEditor.tsx
  profileImages?: ProfileImage[];
  lastActive?: string;
  followers?: number;
  following?: number;
  isFollowing?: boolean;
  roleLevel?: number;
  activeTitle?: string;
  gender?: Gender;
  role?: string;
  previousRank?: number;
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  subscription?: any;
  purchasedFeatures?: string[];
  teamRank?: number;
  spentAmount?: number;
  certificateNFT?: CertificateNFT;
  boostCount?: number; // Add missing property for KingmakerFeature.tsx
  // Add rankChange and spendChange for components that use them
  rankChange?: number;
  spendChange?: number;
  isProtected?: boolean; // Added for LeaderboardItem
}

// Legacy User interface for backward compatibility
export type User = UserProfile;

// Define auth context type
export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<boolean>;
  signIn?: (email: string, password: string) => Promise<boolean>;
  signOut?: () => Promise<void>;
  updateUser?: (userData: Partial<UserProfile>) => Promise<boolean>;
  awardCosmetic: (category: string, itemId: string, notify?: boolean) => Promise<boolean>;
}

// Export everything from this file as the main user types
export * from './user';
