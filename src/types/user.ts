
export type Team = 'red' | 'green' | 'blue' | null;
export type UserTier = 'basic' | 'pro' | 'royal' | 'whale';

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
  gender?: 'king' | 'queen' | 'neutral' | 'jester' | 'noble';
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
}
