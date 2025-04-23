
/**
 * Team color options for user affiliation
 */
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'silver' 
  | 'bronze' 
  | 'neutral' 
  | 'none';

/**
 * Team details interface
 */
export interface Team {
  id: string;
  name: string;
  color: TeamColor;
  abbreviation: string;
  motto?: string;
  description?: string;
  memberCount?: number;
  totalSpent?: number;
  leaderboardPosition?: number;
  iconPath?: string;
  benefits?: string[];
}

/**
 * Team stats interface
 */
export interface TeamStats {
  teamId: string;
  memberCount: number;
  totalSpent: number;
  averageSpent: number;
  rank: number;
  weeklyChange?: number;
  monthlyChange?: number;
}

/**
 * Team member interface
 */
export interface TeamMember {
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
  amountSpent?: number;
  joinedAt: string;
}
