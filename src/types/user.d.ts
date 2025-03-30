
export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  rank?: number;
  tier?: UserTier;
  amountSpent?: number;
  walletBalance?: number;
  team?: TeamType | null;
  joinedAt?: string | Date;
  lastActive?: string | Date;
  followers?: number;
  following?: number;
  spendStreak?: number;
  gender?: GenderType;
  isProtected?: boolean;
  totalSpent?: number;
  lastMocked?: string;
  mockeryCount?: number;
  isVIP?: boolean;
  profileViews?: number;
  profileClicks?: number;
  spentAmount?: number;
  purchasedFeatures?: string[];
  role?: string;
  certificateNFT?: any;
  isAuthenticated?: boolean;
}

export type UserTier = 
  | 'royal' 
  | 'basic' 
  | 'bronze' 
  | 'silver' 
  | 'gold' 
  | 'platinum' 
  | 'diamond' 
  | 'founder' 
  | 'pro' 
  | 'premium' 
  | 'whale';

export type TeamType = 'red' | 'green' | 'blue' | 'none';

export type GenderType = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'neutral' | 'jester' | 'noble';

export type UserRole = 'user' | 'admin' | 'moderator' | 'vip';

export type UserStatus = 'active' | 'inactive' | 'banned' | 'pending';

export type UserTeam = TeamType | 'Red' | 'Green' | 'Blue' | 'None';

export interface Team {
  id: string;
  name: string;
  color: string;
  members: number;
  totalSpent: number;
  rank: number;
  logo?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  walletAddress?: string;
  walletBalance?: number;
  amountSpent?: number;
  totalSpent?: number;
  rank?: number;
  previousRank?: number;
  tier?: UserTier;
  team?: TeamType | null;
  joinedAt: Date | string;
  lastActive?: Date | string;
  gender?: GenderType;
  followers?: number;
  following?: number;
  spendStreak?: number;
  lastSpend?: Date | string;
  cosmetics?: UserCosmetics;
  settings?: UserSettings;
  socialLinks?: SocialLink[];
  achievements?: Achievement[];
  subscription?: UserSubscription;
  profileBoosts?: ProfileBoost[];
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  role?: string;
  isVIP?: boolean;
  spentAmount?: number;
  certificateNFT?: any;
}

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  uploadedAt?: string;
  isVerified?: boolean;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username: string;
  isVerified?: boolean;
  isPublic?: boolean;
  clicks?: number;
}

export interface ProfileLink extends SocialLink {}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  type: string;
  level: number;
  startDate?: string;
  endDate?: string;
  duration: number;
  isActive: boolean;
  strength?: number;
  appliedBy?: string;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  teamChangeAlerts: boolean;
  spendingAlerts: boolean;
  mockeryAlerts: boolean;
  shameAlerts: boolean;
  animationEffects: boolean;
  showStatusInLeaderboard: boolean;
  displayRankChanges: boolean;
  enableMockeryEffects: boolean;
  receiveRoyalAnnouncements: boolean;
  language: string;
  newFollowerAlerts?: boolean;
  showSpending?: boolean;
  showTeam?: boolean;
}

export interface UserSubscription {
  id: string;
  userId: string;
  tier: UserTier;
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  status: 'active' | 'cancelled' | 'expired' | 'pending';
  plan?: string;
  cancelAtPeriodEnd?: boolean;
}

export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  description: string;
  features: string[];
  color: string;
  maxLinks?: number;
  maxProfiles?: number;
  analyticsAccess?: boolean;
  customization?: boolean;
  protectionDuration?: number;
}

export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  fonts: string[];
  colors: string[];
  backgrounds: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeTitle?: string;
  activeBackground?: string;
  foundersPass?: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: 'royal' | 'rank' | 'deposit' | 'milestone' | 'streak';
  icon: string;
  tier: string;
  unlockedAt: string;
  amountSpent?: number;
}
