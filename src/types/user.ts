
// Define the user tiers in the application
export type UserTier = 
  | 'basic' 
  | 'bronze'
  | 'silver' 
  | 'gold' 
  | 'platinum' 
  | 'royal' 
  | 'founder'
  | 'premium'
  | 'pro'
  | 'free'
  | 'vip'
  | 'diamond'
  | 'whale'; // Add missing tier

// Define the team colors available
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none'
  | 'neutral'; // Added neutral for compatibility with CertificateTeam

// For backwards compatibility
export type TeamType = TeamColor;
export type Team = TeamColor; // Updated to make Team directly use TeamColor

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  title: string;
  icon: string;
  clicks: number;
  username?: string;
  display?: string;
  verified?: boolean;
  primary?: boolean;
  label?: string;
}

export interface ProfileLink {
  id: string;
  title: string;
  url: string;
  icon: string;
  clicks: number;
  platform?: string;
  label?: string;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  soundEffects: boolean;
  showRank: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  darkMode: boolean;
  showTeam: boolean;
  showSpending: boolean;
  showEmailOnProfile: boolean;
  publicProfile?: boolean;
  shameAlerts?: boolean;
  allowMessages?: boolean;
  language?: string;
  showBalance?: boolean;
  showAchievements?: boolean;
  showBadges?: boolean;
}

export interface CertificateNFT {
  mintAddress: string;
  mintedAt?: string;
  tokenId?: string;
  network?: string;
}

export interface UserSubscription {
  id?: string;
  active: boolean;
  tier: string;
  startDate: string;
  endDate: string;
  nextBillingDate: string;
  plan: string;
  autoRenew?: boolean;
  cancelAtPeriodEnd?: boolean;
  price?: number;
  interval?: 'monthly' | 'yearly' | 'quarterly';
  features?: string[];
  status?: string; // Add missing property
}

export interface ProfileBoost {
  id: string;
  type: string;
  userId?: string;
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
  duration?: number;
  price?: number;
  cssClass?: string;
  tier?: string;
  level?: number;
  strength?: number;
  appliedBy?: string;
  effectId?: string; // Add missing property
}

export type BoostEffectType = 
  | 'aura' 
  | 'halo' 
  | 'shine' 
  | 'pulse' 
  | 'border' 
  | 'background'
  | 'crown'  // Add missing types
  | 'sparkle'
  | 'glow';

export interface ProfileBoostData {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  type: BoostEffectType;
  tier: string;
  icon: string;
  startDate?: string; // Add missing property
}

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  type: string;
  tier: string;
  icon: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  profileImages?: ProfileImage[];
  bio: string;
  joinDate: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  totalSpent: number;
  amountSpent: number;
  walletBalance: number;
  settings: UserSettings;
  cosmetics: UserCosmeticState;
  profileBoosts?: ProfileBoost[];
  isFounder: boolean;
  isVerified: boolean;
  subscription?: UserSubscription | string;
  purchasedFeatures?: string[];
  previousRank?: number;
  followers?: number;
  following?: number;
  activeTitle?: string;
  isVIP?: boolean;
  role?: string;
  lastActive?: string;
  gender?: string;
  certificateNFT?: CertificateNFT;
  createdAt?: string;
  joinedAt?: string;
  avatarUrl?: string;
  socialLinks?: SocialLink[];
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  isProtected?: boolean;
  isAdmin?: boolean;
  isStaff?: boolean;
  isContributor?: boolean;
  isOnline?: boolean;
  walletAddress?: string;
  spentAmount?: number;
  userTeam?: UserTeam;
  lastLogin?: string; // Add missing property
}

export interface UserTeam {
  id: string;
  name: string;
  type: TeamType;
  joinDate?: string;
  contribution?: number;
  rank?: number;
}

// For compatibility
export type User = UserProfile;
