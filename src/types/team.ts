
// Define TeamColor as a union type of possible team colors
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

// Legacy alias for TeamColor
export type TeamType = TeamColor;

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  members: number;
  totalContribution: number;
  rank: number;
  previousRank: number;
  logoUrl: string;
  benefits?: string[];
}

export interface TeamMember {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  joinDate: string;
  contribution: number;
  rank: number;
  isLeader: boolean;
}

export interface TeamStats {
  totalMembers: number;
  activeMembers: number;
  totalContribution: number;
  averageContribution: number;
  leaderboardPosition: number;
  contributionChange: number;
  weeklyGrowth: number;
}

// Add these types for module imports
export interface TeamRole {
  id: string;
  name: string;
  color: string;
  permissions: string[];
  isDefault?: boolean;
}

export interface TeamBenefits {
  id: string;
  name: string;
  description: string;
  tier: string;
  isActive: boolean;
}

export interface TeamInvite {
  id: string;
  teamId: string;
  inviterId: string;
  inviteeId?: string;
  email?: string;
  status: 'pending' | 'accepted' | 'rejected' | 'expired';
  createdAt: string;
  expiresAt: string;
  code: string;
}
