
import { TeamColor } from './user-types';

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  logoUrl: string;
  members: number;
  totalContribution: number;
  rank?: number;
  previousRank?: number;
  description?: string;
}

// Additional team-related types
export interface TeamMember {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  joinedDate?: string;
  contribution?: number;
  role?: 'member' | 'captain' | 'leader' | 'admin';
}

export interface TeamStats {
  totalMembers: number;
  totalContribution: number;
  avgContributionPerMember: number;
  weeklyGrowth: number;
  monthlyGrowth: number;
}

// Export TeamData type to avoid conflicts
export type { TeamData };
