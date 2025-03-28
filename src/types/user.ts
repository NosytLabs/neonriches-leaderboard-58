
export type UserTier = 
  | 'crab' 
  | 'octopus' 
  | 'fish' 
  | 'dolphin' 
  | 'shark' 
  | 'whale'
  | 'pro'
  | 'royal'
  | 'free';

export type UserGender = 'king' | 'queen' | 'neutral' | 'noble' | 'jester';

export type Team = 'red' | 'green' | 'blue' | null;

export interface ProfileImage {
  id: number;
  url: string;
  caption?: string;
}

export interface ProfileLink {
  id: number;
  url: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  clicks: number;
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
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTheme?: string;
  activeBadge?: string;
  foundersPass?: boolean;
}

export interface UserSettings {
  notifications?: {
    email?: boolean;
    push?: boolean;
    rankChanges?: boolean;
  };
  privacy?: {
    showSpending?: boolean;
    showStats?: boolean;
    publicProfile?: boolean;
  };
  display?: {
    darkMode?: boolean;
    animations?: boolean;
    showRankInProfile?: boolean;
    compactView?: boolean;
  };
  profileVisibility?: 'public' | 'private' | 'followers';
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  emailNotifications?: boolean;
  rankChangeAlerts?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
  showRank?: boolean;
  showSpending?: boolean;
  showTeam?: boolean;
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

export interface ProfileBoost {
  id: string;
  effectId: string;
  startTime: string;
  endTime: number;
  type: string;
  strength: number;
  appliedBy: string;
}

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode;
  bonusText: string;
  cssClass: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  bio?: string;
  profileImage?: string;
  amountSpent?: number;
  spentAmount?: number;
  walletBalance?: number;
  rank: number;
  previousRank?: number; // Added this property
  tier: UserTier;
  team?: 'red' | 'green' | 'blue';
  gender?: UserGender;
  joinedAt: string;
  joinDate: string;
  lastActive?: string;
  isVerified?: boolean;
  isVIP?: boolean; // Added this property
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  activeTitle?: string;
  subscription?: UserSubscription;
  cosmetics?: UserCosmetics;
  socialLinks?: SocialLink[];
  profileImages?: ProfileImage[];
  settings?: UserSettings;
  badges?: string[];
  profileBoosts?: ProfileBoost[];
}
