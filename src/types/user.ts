
// User profile types
export type Team = 'red' | 'green' | 'blue' | null;
export type UserTier = 'free' | 'pro' | 'royal' | 'founder' | 'basic' | 'crab' | 'whale' | 'shark' | 'dolphin';
export type UserGender = 'king' | 'queen' | 'neutral' | 'jester' | 'noble';

export interface ProfileImage {
  id: string | number;
  url: string;
  caption?: string;
  isPrimary?: boolean;
}

export interface ProfileLink {
  id: string;
  url: string;
  label: string;
}

export interface SocialLink {
  id: number | string;
  platform: string;
  url: string;
  icon?: string;
  clicks?: number;
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

export interface UserSubscription {
  status: 'active' | 'cancelled' | 'past_due' | 'trialing';
  tier: UserTier;
  interval: 'monthly' | 'quarterly' | 'yearly';
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  features: string[];
}

// User profile data
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  bio?: string;
  gender?: UserGender;
  tier: UserTier;
  team?: Team;
  rank: number;
  previousRank?: number;
  joinedAt: string;
  joinDate: string;
  amountSpent?: number;
  spentAmount?: number;
  spendStreak?: number;
  walletBalance?: number;
  isVerified?: boolean;
  isVIP?: boolean;
  profileImage?: string;
  profileImages?: ProfileImage[];
  profileViews?: number;
  profileClicks?: number;
  socialLinks?: SocialLink[];
  followers?: number;
  following?: number;
  activeTitle?: string;
  cosmetics?: UserCosmetics;
  profileBoosts?: Array<{
    id: string;
    effectId: string;
    startTime: string;
    endTime: number;
    type: string;
    strength: number;
    appliedBy: string;
  }>;
  subscription?: UserSubscription;
  badges?: string[];
  settings?: {
    showRank: boolean;
    showTeam: boolean;
    showSpending: boolean;
    publicProfile: boolean;
    allowMessages: boolean;
    emailNotifications: boolean;
    darkMode: boolean;
    soundEffects: boolean;
    profileVisibility?: boolean;
    allowProfileLinks?: boolean;
    showEmailOnProfile?: boolean;
    rankChangeAlerts?: boolean;
    shameAlerts?: boolean;
    newFollowerAlerts?: boolean;
  };
}

export type RoyalButtonVariant = 
  | 'royal' 
  | 'royalGold' 
  | 'royalPurple' 
  | 'royalNavy' 
  | 'royalCrimson' 
  | 'glass' 
  | 'outline' 
  | 'goldOutline' 
  | 'crimsonOutline' 
  | 'navyOutline'
  | 'mahogany';

export type RoyalDividerVariant = 
  | 'line' 
  | 'crown' 
  | 'sword' 
  | 'shield' 
  | 'scroll' 
  | 'double' 
  | 'quill' 
  | 'treasure'
  | 'ornate';
