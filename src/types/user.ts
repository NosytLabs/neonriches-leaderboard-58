
export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email: string;
  profileImage: string;
  amountSpent: number;
  spentAmount: number;
  rank: number;
  walletBalance?: number;
  tier: 'free' | 'pro' | 'royal';
  team?: 'red' | 'green' | 'blue' | null;
  spendingStreak?: number;
  gender?: 'king' | 'queen' | 'neutral' | 'jester' | 'noble';
  bio?: string;
  joinDate?: string;
  joinedAt: string;
  lastActive?: string;
  badges?: string[];
  profileBoosts?: Array<{
    id: string;
    effectId: string;
    startTime: number;
    endTime: number;
  }>;
}

export interface SocialLink {
  platform: string;
  url: string;
  clicks: number;
}

export interface ProfileLink {
  id: number;
  url: string;
  label: string;
  clicks?: number;
}

export interface ProfileImage {
  id: number;
  url: string;
  caption: string;
  isPrimary?: boolean;
}

export interface UserStats {
  totalSpent: number;
  rankHistory: Array<{ date: string; rank: number }>;
  longestStreak: number;
  currentStreak: number;
  achievements: number;
  pokesSent: number;
  pokesReceived: number;
  teamContributions: number;
}
