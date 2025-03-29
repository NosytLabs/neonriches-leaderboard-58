
import { ReactNode } from 'react';

export type UserTier = 'free' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'pro';
export type UserGender = 'male' | 'female' | 'other' | 'prefer-not-to-say';
export type TeamType = 'red' | 'green' | 'blue' | 'none';

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  title: string;
  clicks: number;
  label: string;
}

export interface ProfileBoost {
  id: string;
  type: string;
  name: string;
  startDate: string;
  endDate: string;
  active: boolean;
}

export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  boosts?: ProfileBoost[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  foundersPass?: boolean;
  socialLinks?: any;
}

export interface UserSubscription {
  tier: UserTier;
  startDate: string;
  endDate: string | null;
  autoRenew: boolean;
  price: number;
  status?: 'active' | 'canceled' | 'expired' | 'pending';
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  totalSpent: number;
  amountSpent?: number;
  walletBalance?: number;
  rank?: number;
  previousRank?: number;
  team?: TeamType;
  tier: UserTier;
  gender?: UserGender;
  joinedAt: string;
  lastLogin?: string;
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  socialLinks?: SocialLink[];
  profileBoosts?: ProfileBoost[];
  walletAddress?: string;
  activeTitle?: string;
}

export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  updateUser: (userData: Partial<UserProfile>) => Promise<boolean>;
  updateUserProfile: (userData: Partial<UserProfile>) => Promise<boolean>;
  signIn: (username: string, password: string) => Promise<boolean>;
  signOut: () => void;
  awardCosmetic: (category: string, itemId: string, notify?: boolean) => Promise<boolean>;
}

export interface AuthProviderProps {
  children: ReactNode;
}
