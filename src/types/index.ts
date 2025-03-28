
export interface User {
  id: string;
  username: string;
  email: string;
  profileImage?: string;
  walletBalance?: number;
  team?: string;
  tier?: 'free' | 'pro';
  spendStreak?: number;
}
