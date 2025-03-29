export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  bio?: string;
  profileImage?: string;
  joinedAt: string;
  createdAt: string;
  tier: 'basic' | 'premium' | 'royal';
  team?: string;
  role?: string;
  rank?: number;
  walletBalance?: number;
  totalSpent?: number;
  followers?: number;
  following?: number;
  lastActive?: string;
  activeTitle?: string | null;
  cosmetics?: UserCosmetics;
  spendStreak?: number;
  amountSpent?: number;
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
  effectId: string;
  level: number;
  strength: number;
  appliedBy: string;
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
  activeBorder?: string | null;
  activeColor?: string | null;
  activeFont?: string | null;
  foundersPass?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
}

export interface ProfileImage {
  url: string;
  isPrimary?: boolean;
  caption?: string;
}
