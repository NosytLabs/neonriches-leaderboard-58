
import { TeamColor } from './mockery-types';

// Updated TeamData interface with all necessary properties
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  members: number;
  benefits: string[];
  leader: string;
  joinFee: number;
  icon: string;
  // Additional properties for TeamLeaderboard component
  logoUrl?: string;
  totalContribution?: number;
  totalSpent?: number;
  rank?: number;
  previousRank?: number;
}

export type TeamType = TeamColor;

export interface TeamMember {
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  role: string;
  joinDate: string;
  spentAmount: number;
  rank: number;
}

export interface TeamStats {
  totalMembers: number;
  totalSpending: number;
  averageRank: number;
  leaderboardPosition: number;
  growthRate: number;
}
