
// Extending the UserProfile interface to include all required properties
export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  totalSpent: number;
  amountSpent?: number;
  spentAmount?: number;
  rank: number;
  previousRank?: number;
  team?: 'red' | 'green' | 'blue' | null;
  joinedAt: string;
  joinDate?: string;
  createdAt?: string;
  walletBalance?: number;
  tier?: string;
  gender?: 'king' | 'queen' | 'neutral' | 'jester' | 'noble';
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  spendStreak?: number;
  cosmetics?: UserCosmetics;
  socialLinks?: SocialLink[];
  profileImages?: ProfileImage[];
  profileBoosts?: ProfileBoost[];
  badges?: string[];
  activeTitle?: string;
  settings?: UserSettings;
  isVIP?: boolean;
  certificateNFT?: any;
}

export interface UserCosmetics {
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
}

export interface SocialLink {
  id: string;
  platform?: string;
  url: string;
  title?: string;
  label?: string;
  clicks?: number;
}

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId?: string;
  startTime?: string;
  endTime?: number;
  type?: string;
  strength?: number;
  appliedBy?: string;
}

export interface UserSettings {
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  publicProfile: boolean;
  allowMessages: boolean;
  emailNotifications: boolean;
  darkMode: boolean;
  language: string;
}

export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  icon?: string;
  clicks: number;
}

export interface LeaderboardEntry {
  id: string;
  username: string;
  displayName: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team?: 'red' | 'green' | 'blue';
  hasRoyalStatus: boolean;
}

export type User = UserProfile;
export type UserTeam = 'red' | 'green' | 'blue' | null;
export type Team = UserTeam;
export type UserGender = 'king' | 'queen' | 'neutral' | 'jester' | 'noble';
export type UserRole = 'admin' | 'moderator' | 'user';
export type UserStatus = 'active' | 'inactive' | 'banned';
export type UserTier = 'free' | 'pro' | 'royal';
export type TeamType = 'red' | 'green' | 'blue';
