
export type UserGender = 'male' | 'female' | 'non-binary' | 'prefer-not-to-say' | 'king' | 'queen' | 'neutral' | 'jester' | 'noble';
export type UserTeam = 'red' | 'green' | 'blue' | null;
export type UserTier = 'basic' | 'premium' | 'royal' | 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing' | 'unpaid' | 'incomplete';
export type SubscriptionInterval = 'monthly' | 'quarterly' | 'annual' | 'yearly';
export type RoyalButtonVariant = 'default' | 'royal' | 'crimson' | 'navy' | 'gold' | 'purple' | 'green' | 'red' | 'blue';
export type RoyalDividerVariant = 'default' | 'royal' | 'crimson' | 'navy' | 'gold' | 'purple';
export type Team = 'red' | 'green' | 'blue' | null;

export interface ProfileBoost {
  id?: string;
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
  soundEffects?: boolean;
  profileVisibility?: boolean;
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
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

export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  clicks?: number;
}

export interface ProfileLink {
  id?: string;
  title: string;
  url: string;
  clicks?: number;
}

export interface ProfileImage {
  id?: string;
  url: string;
  alt?: string;
  isPrimary?: boolean;
}

export interface UserCosmetics {
  borders: string[];
  colors: string[];
  fonts: string[];
  emojis: string[];
  titles: string[];
  backgrounds: string[];
  effects: string[];
  badges: string[];
  themes: string[];
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTheme?: string;
  activeBadge?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  bio?: string;
  gender?: UserGender;
  team: UserTeam;
  profileImage?: string;
  profileImages?: ProfileImage[];
  walletAddress?: string;
  walletBalance: number;
  activeTitle?: string;
  amountSpent: number;
  spentAmount?: number;
  spendStreak?: number;
  tier: UserTier;
  rank: number;
  previousRank?: number;
  lastActive?: string;
  joinedAt: string;
  joinDate: string;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  isVerified?: boolean;
  isVIP?: boolean;
  profileBoosts?: ProfileBoost[];
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  settings?: UserSettings;
  socialLinks?: SocialLink[];
  badges?: string[];
  
  // New fields for NFT integration
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
    image: string;
    verified: boolean;
  };
  
  // On-chain verification
  onChainVerified?: boolean;
  solanaOnChainRank?: number;
}
