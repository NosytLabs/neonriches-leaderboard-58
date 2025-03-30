export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  rank?: number;
  tier?: string;
  amountSpent?: number;
  walletBalance?: number;
  team?: string | null;
  joinedAt?: string;
  lastActive?: string;
  followers?: number;
  following?: number;
  spendStreak?: number;
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  isProtected?: boolean;
  totalSpent?: number;
  lastMocked?: string;
  mockeryCount?: number;
  isVerified?: boolean;
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
