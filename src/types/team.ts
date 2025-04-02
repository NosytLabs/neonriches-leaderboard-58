
/**
 * Team type definitions
 */

import { TeamColor as MockeryTeamColor, TeamData as MockeryTeamData } from './mockery-types';

// Re-export TeamData for backward compatibility
export type { MockeryTeamData as TeamData };

// Export TeamColor - this is critical for fixing many errors
export type TeamColor = MockeryTeamColor;

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
