
import { UserCosmetics, UserCosmeticState } from './cosmetics';

// Define team colors
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

// Define user tiers
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

// Define gender type
export type Gender = 'king' | 'queen' | 'neutral' | 'jester' | 'noble';

// Define social link type
export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  icon?: string;
  clicks?: number;
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
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  showTeam: boolean;
  showSpending: boolean;
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
  profileImages?: ProfileImage[];
  lastActive?: string;
  followers?: number;
  following?: number;
  isFollowing?: boolean;
  roleLevel?: number;
  activeTitle?: string;
  gender?: Gender;
  role?: string;
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
