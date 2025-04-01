
import { TeamColor } from './team';
import { UserTier } from './tier';

export interface UserCosmetics {
  title?: string[] | string;
  border?: string[] | string;
  color?: string[] | string;
  font?: string[] | string;
  emoji?: string[] | string;
  background?: string[] | string;
  effect?: string[] | string;
  badge?: string[] | string;
  theme?: string[] | string;
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
  showBadges?: boolean;
}

export interface ProfileBoost {
  id: string;
  type: string;
  level: number;
  startDate: string;
  endDate: string;
  appliedBy: string;
  strength: number;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
  isActive: boolean;
}

export interface CertificateNFT {
  id?: string;
  mintAddress?: string;
  imageUrl?: string;
  dateIssued?: string;
  type?: string;
  isVerified?: boolean;
}

export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

export interface UserProfile {
  id: string | number;
  username: string;
  email?: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  walletBalance?: number;
  totalSpent?: number;
  amountSpent?: number;
  rank?: number;
  previousRank?: number;
  team?: TeamColor | string;
  tier?: UserTier | string;
  joinDate?: string;
  joinedDate?: string;
  joinedAt?: string;
  createdAt?: string;
  isVerified?: boolean;
  isVIP?: boolean;
  isProtected?: boolean;
  isAdmin?: boolean;
  isFounder?: boolean;
  lastActive?: string;
  spendStreak?: number;
  following?: string[];
  followers?: string[];
  cosmetics?: UserCosmetics;
  settings?: UserSettings;
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[] | Record<string, string>;
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  subscription?: any;
  gender?: Gender;
  profileImages?: ProfileImage[];
  achievements?: string[];
  badges?: string[];
  activeTitle?: string;
  certificateNFT?: CertificateNFT;
  boostCount?: number;
  teamRank?: number;
}

// Export TeamColor and UserTier for components that import it from here
export { TeamColor, UserTier };

// Re-export for backward compatibility
export interface User extends UserProfile {}
