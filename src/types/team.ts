
/**
 * Team related types
 */

// Define core TeamColor type
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple'
  | 'none'
  | 'neutral'
  | 'silver'
  | 'bronze'
  | 'crimson';

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

export interface TeamData {
  id: string;
  color: TeamColor;
  name: string;
  description: string;
  members: number;
  logoUrl: string;
  totalContribution: number;
  rank: number;
  previousRank: number;
  benefits: string[];
}

// Re-export TeamColor as TeamType for backward compatibility
export type TeamType = TeamColor;
