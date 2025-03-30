
export type TeamType = 'red' | 'green' | 'blue' | null;
export type GenderType = 'king' | 'queen' | 'jester' | null;
export type UserTier = 'free' | 'premium' | 'royal';

export interface User {
  id: string;
  username: string;
  email?: string;
  profileImage?: string;
  amountSpent: number;
  walletBalance?: number;
  rank: number;
  previousRank?: number;
  spendStreak?: number;
  tier?: UserTier;
  team?: TeamType;
  gender?: GenderType;
  joinedAt?: string;
  socialLinks?: ProfileLink[];
  createdAt?: string;
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  isVerified?: boolean;
  lastLogin?: string;
  activeTitle?: string;
  cosmetics?: UserCosmetics;
}

export interface ProfileLink {
  id: string;
  type: string;
  url: string;
  title?: string;
  icon?: string;
}

export interface UserProfile extends User {
  bio?: string;
  bannerImage?: string;
  badges?: Badge[];
  achievements?: Achievement[];
  boosts?: ProfileBoost[];
  subscriptions?: UserSubscription[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color?: string;
  earnedAt?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  earnedAt?: string;
  category?: string;
}

export interface ProfileBoost {
  id: string;
  name: string;
  description: string;
  icon?: string;
  effects?: string[];
  startDate?: string;
  endDate?: string;
  tier?: string;
  level?: number;
  strength?: number;
}

export interface UserCosmetics {
  borders?: CosmeticItem[];
  colors?: CosmeticItem[];
  fonts?: CosmeticItem[];
  emojis?: CosmeticItem[];
  titles?: CosmeticItem[];
  backgrounds?: CosmeticItem[];
  effects?: CosmeticItem[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
}

export interface LeaderboardUser {
  id: string;
  username: string;
  amountSpent: number;
  rank: number;
  team: TeamType;
  tier?: UserTier;
  profileImage?: string;
  gender?: GenderType;
  avatarUrl?: string;
}
