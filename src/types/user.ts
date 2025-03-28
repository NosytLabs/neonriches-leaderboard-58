
// Let's extend or create the user types

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
  activeBadge?: string;
  activeTheme?: string;
}

export interface ProfileBoost {
  id: string;
  effectId: string;
  startTime: number;
  endTime: number;
}

export interface AnalyticsData {
  views: number;
  clicks: number;
  follows: number;
  shareCount: number;
  sources: Record<string, number>;
  referrers: Record<string, number>;
  history: Array<{
    type: string;
    timestamp: Date;
    source?: string;
    referrer?: string;
  }>;
  viewsOverTime: Array<{
    date: string;
    count: number;
  }>;
}

export type UserTeam = 'red' | 'green' | 'blue' | null;
export type UserTier = 'crab' | 'octopus' | 'fish' | 'dolphin' | 'shark' | 'whale' | 'free' | 'pro';
export type UserGender = 'king' | 'queen' | 'neutral' | 'jester' | 'noble';

export interface SocialLink {
  platform: string;
  url: string;
  clicks?: number;
}

export interface UserSettings {
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  visibility: 'public' | 'private' | 'friends';
  marketingConsent: boolean;
  accountVisibility: 'public' | 'anonymous';
  linkSharing: boolean;
  analyticsSharing: boolean;
  showRank?: boolean;
  showSpending?: boolean;
  showTeam?: boolean;
  profileVisibility?: 'public' | 'private' | 'friends';
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  emailNotifications?: boolean;
  rankChangeAlerts?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
}

export interface UserSubscription {
  id: string;
  status: 'active' | 'canceled' | 'past_due' | 'trialing';
  tier: 'free' | 'pro';
  interval: 'monthly' | 'quarterly' | 'yearly';
  currentPeriodEnd: number;
  cancelAtPeriodEnd: boolean;
}

export interface ProfileLink {
  id: number;
  url: string;
  label: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  bio?: string;
  avatar?: string;
  banner?: string;
  profileImage?: string;
  profileImages?: Array<{ id: number; url: string; caption: string; }>;
  team?: UserTeam;
  spentAmount: number;
  amountSpent: number; // Keeping both for compatibility
  walletBalance?: number;
  rank: number;
  joinedAt: string;
  joinDate?: string | Date; // Keeping both for compatibility
  lastActive?: string;
  isVerified?: boolean;
  activeTitle?: string;
  gender?: UserGender;
  tier?: UserTier;
  role?: string;
  spendStreak?: number;
  profileBoosts?: ProfileBoost[];
  cosmetics?: UserCosmetics;
  socialLinks?: SocialLink[];
  settings?: UserSettings;
  subscription?: UserSubscription;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
}
