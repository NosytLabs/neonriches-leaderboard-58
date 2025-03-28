
export type Team = 'red' | 'green' | 'blue' | null;
export type UserTier = 'basic' | 'pro' | 'royal' | 'whale' | 'crab' | 'octopus' | 'fish' | 'dolphin' | 'shark' | 'free';
export type UserGender = 'king' | 'queen' | 'neutral' | 'jester' | 'noble';
export type RoyalButtonVariant = 'royal' | 'royalGold' | 'royalCrimson' | 'royalNavy' | 'royalPurple' | 'outline' | 'glass' | 'goldOutline' | 'crimsonOutline' | 'navyOutline' | 'mahogany';
export type RoyalDividerVariant = 'line' | 'ornate' | 'crown' | 'simple' | 'scroll' | 'quill' | 'treasure';

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
  icon: string;
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

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  bio?: string;
  profileImage?: string;
  rank: number;
  previousRank?: number;
  joinedAt: string;
  joinDate: string;
  amountSpent?: number;
  spentAmount?: number;
  walletBalance?: number;
  team?: Team;
  tier?: UserTier;
  spendStreak?: number;
  isVerified?: boolean;
  isVIP?: boolean;
  gender?: UserGender;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  activeTitle?: string;
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  profileBoosts?: Array<{
    id: string;
    effectId: string;
    startTime: string;
    endTime: number;
    type: string;
    strength: number;
    appliedBy: string;
  }>;
  profileImages?: ProfileImage[];
  socialLinks?: SocialLink[];
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
    notifications?: {
      email: boolean;
      push: boolean;
      in_app: boolean;
      rankChanges?: boolean;
    };
  };
}

export interface ProfileLink {
  id: string;
  label: string;
  url: string;
  icon?: string;
  clicks?: number;
}
