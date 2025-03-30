
export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
  team?: 'red' | 'green' | 'blue' | null;
  tier?: string;
  totalSpent: number;
  spendStreak?: number;
}

export interface LeaderboardEntry extends LeaderboardUser {
  position: number;
  previousRank?: number;
  dailyChange?: number;
  weeklyChange?: number;
}
