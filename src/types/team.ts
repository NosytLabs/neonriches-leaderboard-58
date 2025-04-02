
// Define TeamColor types
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' | 'silver' | 'bronze' | 'crimson';

// For backward compatibility
export type TeamType = TeamColor;

// Team data interface
export interface Team {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  members: number;
  contribution: number;
  rank: number;
  previousRank: number;
  logo: string;
  banner?: string;
  motto?: string;
  benefits: string[];
  leader?: string;
  foundedDate?: string;
}

// Team member data
export interface TeamMember {
  id: string;
  userId: string;
  username: string;
  profileImage?: string;
  joinDate: string;
  contribution: number;
  rank: number;
  badges?: string[];
  isLeader?: boolean;
  role?: string;
}

// Team stats
export interface TeamStats {
  totalMembers: number;
  activeMembers: number;
  totalContribution: number;
  weeklyGrowth: number;
  monthlyGrowth: number;
  winStreak: number;
  rank: number;
  previousRank: number;
  victories: number;
  defeats: number;
}

// For compatibility with default exports
export interface TeamData {
  id: string;
  color: TeamColor;
  name: string;
  description: string;
  logoUrl: string;
  benefits: string[];
  members: number;
  totalContribution: number;
  rank: number;
  previousRank: number;
}

export interface TeamRole {
  id: string;
  name: string;
  permissions: string[];
}

export interface TeamBenefits {
  id: string;
  name: string;
  description: string;
}

export interface TeamInvite {
  id: string;
  teamId: string;
  userId: string;
  expiresAt: string;
}
