
// User types for the application

export type UserRole = 'user' | 'admin' | 'moderator';
export type UserStatus = 'active' | 'inactive' | 'banned' | 'pending';
export type UserTier = 
  | 'free' 
  | 'basic'
  | 'royal' 
  | 'premium' 
  | 'pro' 
  | 'founder' 
  | 'whale' 
  | 'shark' 
  | 'dolphin'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'platinum'
  | 'diamond'
  | 'standard';

export type TeamType = 'red' | 'green' | 'blue' | 'none' | 'Red' | 'Green' | 'Blue';
export type UserTeam = TeamType;

export type GenderType = 'male' | 'female' | 'other' | 'none' | 'king' | 'queen' | 'jester';

export interface ProfileImage {
  url: string;
  id: string;
  isPrimary?: boolean;
  caption?: string;
}

export interface ProfileLink {
  id: string | number;
  url: string;
  platform?: string;
  title?: string;
  label?: string;
}

export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  icon?: string;
  clicks?: number;
}

export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  fonts?: string[];
  colors?: string[];
  backgrounds?: string[];
  emojis?: string[];
  socialLinks?: SocialLink[];
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startTime: Date;
  endTime: Date;
  level: number;
  type: string;
  duration: number;
  isActive: boolean;
  strength?: number;
  appliedBy?: string;
  startDate?: string;
  endDate?: string;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  showSpendingAmount: boolean;
  showBadges: boolean;
  showAchievements: boolean;
  soundEffects: boolean;
  animationEffects: boolean;
  language: string;
  timezone: string;
  dateFormat: string;
  currencyFormat: string;
  receiveMessages: boolean;
  newFollowerAlerts?: boolean;
  publicProfile?: boolean;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  startDate: Date;
  endDate?: Date;
  autoRenew: boolean;
  status: 'active' | 'canceled' | 'expired' | 'pending';
  paymentMethod: string;
  price: number;
  features: string[];
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  profileImages?: ProfileImage[];
  walletAddress?: string;
  bio?: string;
  rank?: number;
  tier?: UserTier;
  team?: UserTeam;
  amountSpent?: number;
  spentAmount?: number;
  totalSpent?: number;
  previousRank?: number;
  walletBalance?: number;
  joinedAt?: Date | string;
  isVerified?: boolean;
  isModerator?: boolean;
  isAdmin?: boolean;
  settings?: UserSettings;
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  achievements?: any[];
  badges?: string[];
  profileBoosts?: ProfileBoost[];
  activeTitle?: string;
  activeBorder?: string;
  activeEffect?: string;
  activeBackground?: string;
  spendStreak?: number;
  gender?: GenderType;
  lastActive?: Date;
  links?: ProfileLink[];
  socialLinks?: SocialLink[];
  certificates?: any[];
  certificateNFT?: {
    mintAddress: string;
    mintedAt: string;
    tokenId: string;
  };
  createdAt?: string;
}

// Extended User type that includes full details
export interface User extends UserProfile {
  createdAt: Date;
  updatedAt: Date;
}
