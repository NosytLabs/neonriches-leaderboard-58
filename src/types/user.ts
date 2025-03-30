
export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  walletBalance: number;
  amountSpent: number;
  rank: number;
  tier?: 'basic' | 'silver' | 'gold' | 'platinum' | 'diamond' | string;
  team?: 'red' | 'green' | 'blue' | 'none' | null;
  joinedAt: string;
  createdAt?: string;
  bio?: string;
  spendStreak?: number;
}

export interface UserProfile extends User {
  email: string;
  bio: string;
}
