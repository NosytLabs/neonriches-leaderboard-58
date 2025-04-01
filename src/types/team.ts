
/**
 * Team color options available in the application
 */
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

/**
 * Team theme properties
 */
export interface TeamTheme {
  primary: string;
  text: string;
  border: string;
  background: string;
  accent: string;
  hover: string;
  gradient: string;
}

/**
 * Team data structure
 */
export interface Team {
  id: string;
  name: string;
  color: TeamColor;
  displayName: string;
  slogan: string;
  description: string;
  icon: string;
  memberCount: number;
  totalSpent: number;
  theme: TeamTheme;
  foundedDate: string;
  leaderUsername?: string;
  insignia?: string;
}

/**
 * Team leaderboard entry
 */
export interface TeamLeaderboardEntry {
  teamId: string;
  teamName: string;
  teamColor: TeamColor;
  totalSpent: number;
  rank: number;
  memberCount: number;
  weeklyChange: number;
}

/**
 * Team stats
 */
export interface TeamStats {
  totalSpent: number;
  memberCount: number;
  avgSpendPerMember: number;
  weeklyGrowth: number;
  rank: number;
}
