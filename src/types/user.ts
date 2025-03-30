
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username?: string;
  isVerified?: boolean;
  lastUpdated?: string;
  isPublic?: boolean;
  clicks?: number;
}

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  type: 'avatar' | 'banner' | 'gallery';
  uploadedAt: string;
  alt?: string;
  caption?: string;
}

export type TeamType = 'red' | 'green' | 'blue' | 'Red' | 'Green' | 'Blue' | 'none';
export type UserTeam = TeamType;
export type Team = TeamType;

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

export type GenderType = 'king' | 'queen' | 'none' | 'noble' | 'other' | 'male' | 'female' | 'jester';
export type UserGender = GenderType;

export type UserRole = 'user' | 'admin' | 'moderator' | 'developer' | 'founder';
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'banned';

export interface UserCosmetics {
  badges?: string[];
  titles?: string[];
  borders?: string[];
  effects?: string[];
  emojis?: string[];
  fonts?: string[];
  colors?: string[];
  backgrounds?: string[];
  themes?: string[];
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
  socialLinks?: Record<string, string>;
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
  darkMode?: boolean;
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
  autoRenew?: boolean;
  paymentMethod?: string;
  features?: string[];
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
  startTime: string;
  endTime: string;
  duration: number;
  isActive: boolean;
  level: number;
  type: string;
  strength?: number;
  appliedBy: string;
  startDate?: string;
  endDate?: string;
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
  joinedAt?: string;
  lastLogin?: Date | string;
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
    mintedAt?: string;
    tokenId?: string;
  };
  createdAt?: string;
  updatedAt?: string;
  isAuthenticated?: boolean;
  isAdmin?: boolean;
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
