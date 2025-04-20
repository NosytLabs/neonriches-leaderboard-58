
export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  walletBalance?: number;
  rank?: number;
  tier?: UserTier;
  team?: TeamColor;
  joinedAt?: string;
  lastLoginAt?: string;
  cosmetics?: UserCosmetics;
  achievements?: Achievement[];
  stats?: UserStats;
}

export type UserTier = 'basic' | 'premium' | 'elite' | 'royal';
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple';

export interface UserStats {
  totalSpent: number;
  mockeries: number;
  mockeryReceived: number;
  purchasedItems: number;
}

export interface UserCosmetics {
  titles?: string[];
  badges?: string[];
  colors?: string[];
  decorations?: string[];
  emojis?: string[];
  fonts?: string[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}
