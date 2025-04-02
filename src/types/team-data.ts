
import { TeamColor } from './mockery-types';

// Use TeamData interface here to avoid circular references
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
