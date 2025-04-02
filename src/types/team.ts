
/**
 * Team related type definitions
 */

// Basic team color types
export type TeamColor = 'red' | 'green' | 'blue' | 'gold' | 'purple' | 'none' | 
  'neutral' | 'silver' | 'bronze' | 'crimson';

// Team data structure
export interface TeamData {
  id: string;
  name: string;
  description: string;
  color: TeamColor;
  icon?: React.ReactNode;
  mottoShort?: string;
  benefits?: string[];
  memberCount?: number;
  totalSpent?: number;
}

// Additional team-related types
export interface TeamMember {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  role: TeamRole;
  joinedDate: string;
  contributions: number;
}

export type TeamRole = 'member' | 'moderator' | 'leader' | 'founder';

export interface TeamStats {
  totalMembers: number;
  totalSpent: number;
  avgSpentPerMember: number;
  leaderboardPosition: number;
  weeklyGrowth: number;
}

export interface TeamBenefits {
  name: string;
  description: string;
  icon?: React.ReactNode;
  unlocked: boolean;
  requiredLevel?: number;
}

export interface TeamInvite {
  id: string;
  teamId: string;
  invitedBy: string;
  invitedUserId?: string;
  invitedEmail?: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  created: string;
  expires: string;
}
