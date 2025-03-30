
export type UserRole = 'user' | 'admin' | 'moderator' | 'developer' | 'founder';
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'banned';
export type GenderType = 'male' | 'female' | 'other' | 'none' | 'noble';
export type UserTier = 'royal' | 'gold' | 'basic' | 'bronze' | 'silver' | 'platinum' | 'diamond' | 'founder' | 'pro' | 'premium' | 'whale' | 'shark' | 'dolphin' | 'standard';
export type UserTeam = 'red' | 'green' | 'blue' | 'Red' | 'Green' | 'Blue' | 'none';
export type TeamType = UserTeam;

export interface UserCosmetics {
  borders: string[];
  colors: string[];
  fonts: string[];
  emojis: string[];
  titles: string[];
  backgrounds: string[];
  effects: string[];
  badges: string[];
  themes?: string[];
  socialLinks?: Record<string, string>;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
  foundersPass?: boolean;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username: string;
  isVerified: boolean;
  isPublic: boolean;
  clicks?: number;
}

export interface ProfileImage {
  url: string;
  alt?: string;
  type: string;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startDate?: string;
  endDate?: string;
  startTime?: Date;
  endTime?: Date;
  duration: number;
  isActive: boolean;
  level: number;
  type: string;
  strength?: number;
  appliedBy: string;
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
  profileVisibility: 'public' | 'private' | 'friends';
  newFollowerAlerts?: boolean;
}

export interface UserSubscription {
  id: string;
  status: 'active' | 'canceled' | 'expired' | 'trialing';
  startDate: string;
  endDate: string;
  plan?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  displayName?: string;
  profileImage?: string;
  profileImages?: ProfileImage[];
  walletBalance?: number;
  rank?: number;
  previousRank?: number;
  team?: UserTeam;
  tier?: UserTier;
  amountSpent?: number;
  spentAmount?: number;
  totalSpent?: number;
  joinedAt?: Date | string;
  bio?: string;
  gender?: GenderType;
  role?: UserRole;
  cosmetics?: UserCosmetics;
  activeTitle?: string;
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  isVIP?: boolean;
  lastActive?: Date | string;
  settings?: UserSettings;
  profileBoosts?: ProfileBoost[];
  subscription?: UserSubscription;
  purchasedFeatures?: string[];
}

export interface User extends UserProfile {
  id: string;
  username: string;
  email: string;
  displayName: string;
  profileImage: string;
  walletBalance: number;
  rank: number;
  team: UserTeam | null;
  tier: UserTier;
  totalSpent: number;
  spentAmount: number;
  amountSpent: number;
  joinDate: string;
  createdAt: string;
  updatedAt: string;
  isVerified: boolean;
  cosmetics: UserCosmetics;
  activeTitle: string;
  spendStreak: number;
  gender: GenderType;
  profileViews: number;
  profileClicks: number;
  followers: number;
  following: number;
  isVIP: boolean;
  settings: UserSettings;
  profileBoosts: ProfileBoost[];
}
