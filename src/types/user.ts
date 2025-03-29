
export interface User {
  id: string;
  email: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  isAdmin?: boolean;
  createdAt: string;
  team?: string;
  tier?: string;
  walletBalance?: number;
  totalSpent?: number;
  amountSpent?: number;
  gender?: string;
  lastActive?: string;
  profileBoosts?: ProfileBoost[];
  cosmetics?: UserCosmetics;
  activeTitle?: string | null;
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  type: string;
  effectId: string;
  strength?: number;
  appliedBy?: string;
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
  activeBorder?: string | null;
  activeColor?: string | null;
  activeFont?: string | null;
  foundersPass?: boolean;
}

// For backward compatibility with existing code
export type UserProfile = User;
