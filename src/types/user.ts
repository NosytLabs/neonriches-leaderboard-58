
import { UserCosmetics } from './cosmetics';

export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'none' | 'neutral';
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'neutral' | 'unspecified' | 'king' | 'queen' | 'jester';

export type UserTier = 
  | 'free'
  | 'basic'
  | 'pro'
  | 'premium'
  | 'royal'
  | 'founder'
  | 'platinum'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'vip'
  | 'whale'
  | 'standard'
  | 'elite'
  | 'legendary';

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
  type?: string;
}

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

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  joinDate: string;
  joinedAt?: string;
  joinedDate?: string;
  createdAt?: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent?: number; // For backward compatibility
  spentAmount?: number; // For backward compatibility
  walletBalance?: number;
  isFounder: boolean;
  isVerified?: boolean;
  isVIP?: boolean;
  isProtected?: boolean;
  isAdmin?: boolean;
  spendStreak?: number;
  lastActive?: string;
  lastLogin?: string;
  following?: string[] | number;
  followers?: string[] | number;
  cosmetics: UserCosmetics;
  settings: UserSettings;
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[] | Record<string, string>;
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  subscription?: any;
  subscriptionTier?: string;
  role?: string;
  activeTitle?: string;
  gender?: Gender;
  profileImages?: ProfileImage[];
  teamRank?: number; // Adding teamRank property
  certificateNFT?: {
    id?: string;
    mintAddress?: string;
    imageUrl?: string;
    dateIssued?: string;
    type?: string;
    isVerified?: boolean;
  };
  avatarUrl?: string; // For backward compatibility
}

export interface User extends UserProfile {}

export type ProfileLink = SocialLink;

// For compatibility with AuthContext
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
