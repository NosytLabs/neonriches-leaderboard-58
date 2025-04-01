
/**
 * Team color options
 */
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'silver' | 'bronze' | 'neutral' | 'none';

/**
 * Team data interface
 */
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  memberCount: number;
  totalSpent: number;
  leaderUsername: string;
  leaderProfileImage?: string;
  rank: number;
  previousRank?: number;
}
