
export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  joinedAt: string;
  createdAt?: string;
  tier: UserTier;
  team?: UserTeam;
  rank?: number;
  walletBalance?: number;
  amountSpent?: number;
  gender?: UserGender;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  lastActive?: string;
  totalSpent?: number;
  role?: UserRole;
  cosmetics?: UserCosmetics;
  activeTitle?: string;
  spendStreak?: number;
  settings?: UserSettings;
}

export type UserTier = 'free' | 'premium' | 'royal' | 'basic';
export type UserTeam = 'red' | 'green' | 'blue';
export type UserRole = 'user' | 'admin' | 'moderator';
export type UserGender = 'male' | 'female' | 'neutral' | 'other';
export type UserStatus = 'online' | 'offline' | 'away' | 'busy';

export interface UserCosmetics {
  border?: string;
  color?: string;
  font?: string;
  emoji?: string;
  title?: string;
  background?: string;
  effect?: string;
  borders?: string[];
  colors?: string[];
  titles?: string[];
  emojis?: string[];
  fonts?: string[];
  backgrounds?: string[];
  effects?: string[];
}

export interface UserSettings {
  notifications: {
    email: boolean;
    push: boolean;
    rankChanges: boolean;
    mockery: boolean;
  };
  privacy: {
    showProfile: boolean;
    showSpending: boolean;
  };
  display: {
    theme: string;
    showRank?: boolean;
  };
}

export interface ProfileLink {
  id: string;
  type: string;
  url: string;
  title: string;
  icon?: string;
}

export interface ProfileBoost {
  id: string;
  type: string;
  duration: number;
  startDate?: string;
  endDate?: string;
  effects: string[];
  level?: number;
  strength?: number;
  effectId?: string;
}

export interface Team {
  id: string;
  name: UserTeam;
  displayName: string;
  description: string;
  memberCount: number;
  color: string;
  icon: string;
  benefits: string[];
}

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  avatarUrl?: string;
  profileImage?: string;
  rank?: number;
  tier?: string;
  team?: string;
  amountSpent?: number;
  lastMocked?: string;
  mockeryCount?: number;
}
