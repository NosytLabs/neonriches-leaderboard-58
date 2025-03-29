
// You'll need to add this file if it doesn't exist or update it
// with the new purchasedFeatures field

export type UserTier = 'free' | 'standard' | 'premium' | 'royal';

export interface UserProfile {
  id: string;
  username?: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  email?: string;
  tier?: UserTier;
  team?: string;
  rank?: number;
  amountSpent?: number;
  totalSpent?: number;
  walletBalance?: number;
  joinedAt?: string;
  lastActive?: string;
  subscription?: UserSubscription;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  profileBoosts?: ProfileBoost[];
  cosmetics?: UserCosmetics;
  activeTitle?: string;
  purchasedFeatures?: string[]; // Array of feature IDs that the user has purchased individually
  gender?: string;
}

export interface User extends UserProfile {
  uid: string;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  status: 'active' | 'canceled' | 'past_due' | 'trialing';
  currentPeriodEnd?: string;
  cancelAtPeriodEnd?: boolean;
}

export interface ProfileBoost {
  id: string;
  level: number;
  startDate: string;
  endDate: string;
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
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  foundersPass?: boolean;
}
