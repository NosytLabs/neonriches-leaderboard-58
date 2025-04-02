
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

export default {
  TeamColor,
  TeamType,
  Team,
  TeamMember,
  TeamStats
};
