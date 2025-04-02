
/**
 * Team type definitions
 */

import { TeamColor as MockeryTeamColor, TeamData as MockeryTeamData } from './mockery-types';

// Export the required types
export type TeamColor = MockeryTeamColor;
export type { MockeryTeamData as TeamData };

export interface TeamMember {
  id: string;
  userId: string;
  username: string;
  profileImage?: string;
  joinDate: string;
  rank: number;
  totalSpent: number;
  role: TeamRole;
}

export type TeamRole = 'member' | 'captain' | 'co-captain' | 'council';

export interface TeamStats {
  totalMembers: number;
  totalSpent: number;
  avgSpentPerMember: number;
  topSpender: {
    username: string;
    amount: number;
  };
  position: number;
  change: number;
  captainId?: string;
}

export interface TeamBenefits {
  name: string;
  description: string;
  unlocked: boolean;
  requiredSpending?: number;
  requiredMembers?: number;
}

export interface TeamInvite {
  id: string;
  teamId: string;
  userId: string;
  invitedBy: string;
  timestamp: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  expiresAt: string;
}

// Add compat properties for TeamData that were causing issues
export interface TeamDataCompat extends MockeryTeamData {
  members?: number;
  memberCount?: number;
  totalSpent?: number;
  totalContribution?: number;
  rank?: number;
  previousRank?: number;
  description?: string;
  bannerImage?: string;
  logoUrl?: string;
}
