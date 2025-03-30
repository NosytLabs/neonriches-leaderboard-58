
// User related types

export type GenderType = 'male' | 'female' | 'other' | 'king' | 'queen' | 'neutral' | 'jester' | 'noble';

export type UserRole = 'user' | 'admin' | 'moderator' | 'royal' | 'supporter' | 'developer' | 'founder';

export type UserStatus = 'active' | 'inactive' | 'banned' | 'pending' | 'suspended';

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

export type TeamType = 'Red' | 'Green' | 'Blue' | 'red' | 'green' | 'blue' | 'none';
export type UserTeam = TeamType;
export type Team = TeamType;

export interface SocialLink {
  id?: string;
  url: string;
  platform?: string;
  label?: string;
  clicks?: number;
  username?: string;
  isVerified?: boolean;
  isPublic?: boolean;
}

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary?: boolean;
  type?: string;
  uploadedAt?: string;
  caption?: string;
  alt?: string;
}

export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  clicks?: number;
  isActive?: boolean;
  platform?: string;
  icon?: string;
  order?: number;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails?: boolean;
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
  allowMessages?: boolean;
  showRank: boolean;
  showSpending: boolean;
  showWallet?: boolean;
  showTeam: boolean;
  showSpent?: boolean;
  newFollowerAlerts?: boolean;
  publicProfile?: boolean;
  marketingNotifications?: boolean;
  achievementNotifications?: boolean;
  rankChangeNotifications?: boolean;
  depositNotifications?: boolean;
  challengeNotifications?: boolean;
  newFollowerNotifications?: boolean;
  messageNotifications?: boolean;
  darkMode?: boolean;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  startDate: string;
  endDate: string;
  status: 'active' | 'cancelled' | 'expired';
  cancelAtPeriodEnd: boolean;
  currentPeriodEnd: string;
  price: number;
  interval: 'month' | 'year';
  plan?: string;
  autoRenew?: boolean;
  paymentMethod?: string;
  features?: string[];
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
  themes?: string[];
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
  socialLinks?: Record<string, string>;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startTime?: string | Date;
  endTime?: string | Date;
  startDate?: string;
  endDate?: string;
  duration: number;
  isActive: boolean;
  level: number;
  type: string;
  strength?: number;
  appliedBy?: string;
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
  website?: string;
  socialLinks?: Record<string, string> | SocialLink[];
  links?: ProfileLink[];
  team?: TeamType;
  tier?: UserTier;
  amountSpent?: number;
  totalSpent?: number;
  spentAmount?: number;
  walletBalance?: number;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  lastLogin?: string | Date;
  isVerified?: boolean;
  isActive?: boolean;
  cosmetics?: UserCosmetics;
  activeTitle?: string;
  settings?: UserSettings;
  gender?: GenderType;
  referralCode?: string;
  referredBy?: string;
  referralCount?: number;
  profileBoosts?: ProfileBoost[];
  subscription?: UserSubscription;
  joinedAt?: string | Date;
  joinDate?: string;
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  lastActive?: string | Date;
  rank?: number;
  previousRank?: number;
  certificateNFT?: { mintAddress: string; mintedAt?: string; tokenId?: string; };
  role?: UserRole;
  purchasedFeatures?: string[];
  isAdmin?: boolean;
  isVIP?: boolean;
  lastMocked?: string;
}

export interface User extends UserProfile {
  // Additional fields needed for backward compatibility
  id: string;
  username: string;
  email: string;
  walletBalance: number;
  rank: number;
  team: TeamType | null;
  tier: UserTier;
  totalSpent: number;
  spentAmount: number;
  amountSpent: number;
  joinDate: string;
}
