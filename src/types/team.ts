
import { TeamColor } from "./mockery-types";

export type TeamRole = 'member' | 'moderator' | 'leader' | 'founder';

export interface TeamMember {
  id: string;
  username: string;
  profileImage: string;
  role: TeamRole;
  joinedAt: string;
  contribution: number;
  rank?: number;
}

export interface TeamStats {
  memberCount: number;
  totalSpent: number;
  rank: number;
  previousRank: number;
  averageSpentPerMember: number;
  weeklyGrowth: number;
}

export interface TeamBenefits {
  discounts: number;
  boosts: number;
  rewards: number;
  protections: number;
}

export interface TeamInvite {
  id: string;
  teamId: string;
  userId: string;
  invitedBy: string;
  invitedAt: string;
  status: 'pending' | 'accepted' | 'declined';
}

export interface TeamDataCompat {
  color: TeamColor;
  name: string;
  description: string;
  members: number;
  id: string;
  logoUrl: string;
  totalContribution: number;
  rank: number;
  previousRank: number;
  benefits: string[];
}

// Re-export TeamColor as TeamType for backward compatibility
export type TeamType = TeamColor;
