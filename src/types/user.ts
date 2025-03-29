
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
  team?: TeamType | null;
  joinedAt: string;
  joinDate?: string;
  createdAt?: string;
  walletBalance?: number;
  tier?: UserTier;
  gender?: UserGender;
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
  subscription?: UserSubscription;
  boosts?: ProfileBoost[];
  walletAddress?: string;
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
  banners?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  foundersPass?: boolean;
}

export interface SocialLink {
  id: string | number;
  platform?: string;
  url: string;
  title?: string;
  label?: string;
  clicks?: number;
  icon?: string;
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
  boostId?: string;
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
  profileVisibility?: boolean;
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
  theme?: string;
}

export interface ProfileLink {
  id: string | number;
  url: string;
  title: string;
  icon?: string;
  clicks: number;
  label?: string;
  platform?: string;
}

export interface LeaderboardEntry {
  id: string;
  username: string;
  displayName: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team?: TeamType;
  hasRoyalStatus: boolean;
}

export interface UserSubscription {
  status: SubscriptionStatus;
  tier: UserTier;
  interval: SubscriptionInterval;
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  features: string[];
}

export type User = UserProfile;
export type UserTeam = 'red' | 'green' | 'blue' | null;
export type Team = UserTeam;
export type TeamType = 'red' | 'green' | 'blue';
export type UserGender = 'king' | 'queen' | 'neutral' | 'jester' | 'noble';
export type UserRole = 'admin' | 'moderator' | 'user';
export type UserStatus = 'active' | 'inactive' | 'banned';
export type UserTier = 'free' | 'pro' | 'royal' | 'bronze' | 'silver' | 'gold' | 'platinum';
export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing' | 'unpaid' | 'incomplete';
export type SubscriptionInterval = 'monthly' | 'quarterly' | 'annual';
