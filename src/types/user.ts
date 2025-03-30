
export type UserTier = 'royal' | 'premium' | 'free' | 'pro' | 'basic' | 'bronze' | 'silver' | 'gold' | 'platinum';
export type TeamType = 'red' | 'green' | 'blue' | 'none';
export type GenderType = 'king' | 'queen' | 'neutral' | 'jester' | 'noble' | 'male' | 'female';

export interface SocialLink {
  id: string;
  url: string;
  label?: string;
  icon?: string;
  platform?: string;
}

export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  icon?: string;
  platform?: string;
}

export interface ProfileImage {
  id: string;
  url: string;
  type: 'avatar' | 'banner' | 'background';
  default?: boolean;
}

export interface UserSettings {
  theme: string;
  notifications: boolean;
  privacy: {
    profileVisibility: 'public' | 'private' | 'friends';
    showRank: boolean;
    showSpending: boolean;
  };
  marketing: {
    emailUpdates: boolean;
    featuredInShowcase: boolean;
  };
}

export interface UserCosmetics {
  borders: CosmeticItem[];
  colors: CosmeticItem[];
  fonts: CosmeticItem[];
  emojis: CosmeticItem[];
  titles: CosmeticItem[];
  backgrounds: CosmeticItem[];
  effects: CosmeticItem[];
  badges?: string[];
  themes?: CosmeticItem[];
  foundersPass?: boolean;
}

export interface UserTeam {
  id: string;
  name: string;
  color: string;
  members: number;
  rank: number;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  tier: UserTier;
  team: TeamType | null;
  rank: number;
  previousRank?: number;
  currency?: number;
  walletBalance?: number;
  amountSpent?: number;
  totalSpent?: number;
  spentAmount?: number;
  joinedAt: string;
  joinDate?: string;
  lastActive?: string;
  gender?: GenderType;
  socialLinks?: SocialLink[];
  profileLinks?: ProfileLink[];
  profileImages?: ProfileImage[];
  cosmetics?: UserCosmetics;
  subscription?: string;
  subscriptions?: string[];
  badges?: string[];
  settings?: UserSettings;
  achievements?: string[];
  isVIP?: boolean;
  role?: string;
  certificateNFT?: any;
  followers?: number;
  following?: number;
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  profileBoosts?: ProfileBoost[];
}

export interface User extends UserProfile {
  // Additional fields specific to users
}

export interface ProfileBoost {
  id: string;
  effectId: string;
  duration: number;
  startDate?: string;
  endDate?: string;
  active: boolean;
  level?: number;
  type?: string;
  effects?: string[];
}

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  icon: string;
  type?: string;
  cssClass?: string;
  minTier?: UserTier;
  allowStacking?: boolean;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  tier: string;
}
