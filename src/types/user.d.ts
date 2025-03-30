
export type TeamType = 'red' | 'green' | 'blue' | 'none' | 'Red' | 'Green' | 'Blue';
export type UserTier = 'free' | 'basic' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'royal' | 'founder' | 'pro' | 'premium' | 'whale' | 'shark' | 'dolphin' | 'standard';
export type GenderType = 'king' | 'queen' | 'none' | 'noble' | 'other' | 'male' | 'female' | 'jester';

export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  fonts: string[];
  colors: string[];
  backgrounds: string[];
  themes?: string[];
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
  socialLinks?: Record<string, string>;
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

export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  icon?: string;
  order?: number;
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
  showRank?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
  newFollowerAlerts?: boolean;
  publicProfile?: boolean;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  status: string;
  startDate: string;
  endDate: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  price: number;
  interval: 'month' | 'year';
  plan?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  profileImages?: ProfileImage[];
  walletAddress?: string;
  walletBalance?: number;
  amountSpent?: number;
  totalSpent?: number;
  spentAmount?: number;
  rank?: number;
  previousRank?: number;
  team?: TeamType;
  tier?: UserTier;
  gender?: GenderType;
  bio?: string;
  joinedAt?: string | Date;
  lastLogin?: Date;
  spendStreak?: number;
  settings?: UserSettings;
  subscription?: UserSubscription;
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[];
  cosmetics?: UserCosmetics;
  isVerified?: boolean;
  activeTitle?: string;
  joinDate?: string;
  lastMocked?: string;
  role?: string;
  lastActive?: Date | string;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  isVIP?: boolean;
  purchasedFeatures?: string[];
  certificateNFT?: {
    mintAddress: string;
    mintedAt: string;
    tokenId: string;
  };
  createdAt?: string;
}

export interface ProfileImage {
  id?: string;
  url: string;
  alt?: string;
  type: string;
  isPrimary?: boolean;
  caption?: string;
}

export interface User extends UserProfile {
  id: string;
  username: string;
  email: string;
  displayName: string;
  profileImage: string;
  walletBalance: number;
  rank: number;
  team: TeamType | null;
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

export type UserRole = 'user' | 'admin' | 'moderator' | 'developer' | 'founder';
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'banned';
export type UserTeam = TeamType;
export type Team = UserTeam;
export type UserGender = GenderType;
