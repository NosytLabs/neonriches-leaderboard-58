
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'silver' | 'bronze' | 'neutral' | 'none' | 'crimson';

export interface Team {
  id: string;
  name: string;
  color: TeamColor;
  totalSpent: number;
  members: number;
  rank: number;
  previousRank: number;
  logoUrl: string;
  description: string;
}

export interface TeamMember {
  id: string;
  userId: string;
  teamId: string;
  joinedAt: string;
  role: 'member' | 'captain' | 'admin';
  contribution: number;
  username: string;
  displayName?: string;
  profileImage?: string;
}

export interface TeamStats {
  totalSpent: number;
  memberCount: number;
  averageSpent: number;
  topContributor: {
    username: string;
    contribution: number;
  };
  recentActivity: {
    username: string;
    action: string;
    amount: number;
    timestamp: string;
  }[];
}

// Export alias for compatibility
export type TeamType = TeamColor;
