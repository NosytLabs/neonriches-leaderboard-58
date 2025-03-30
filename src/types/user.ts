
export interface User {
  id: string;
  email: string;
  username: string;
  displayName?: string;
  walletBalance: number;
  rank: number;
  team?: 'red' | 'green' | 'blue' | null;
  joined: Date;
  spentTotal: number;
  profileImage?: string;
  bio?: string;
}

export type UserProfile = User;
