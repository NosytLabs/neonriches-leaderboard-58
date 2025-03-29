
export interface User {
  id: string;
  email: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  walletBalance: number;
  rank: number;
  team?: 'red' | 'green' | 'blue' | null;
  joined: Date;
  spentTotal: number;
  amountSpent: number;
  spendStreak?: number;
  tier?: 'basic' | 'premium' | 'elite' | 'royal';
}

export type UserProfile = User;
