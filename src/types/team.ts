
// Team related types

// Team colors available in the system
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'none';

// Team data structure
export interface TeamData {
  id: TeamColor;
  name: string;
  color: string;
  members: number;
  totalSpent: number;
  description: string;
  motto: string;
  icon: string;
  rank?: number;
  logo?: string;
  memberCount?: number;
}

// Team invitation
export interface TeamInvite {
  id: string;
  teamId: TeamColor;
  inviterId: string;
  inviteeId: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
  expiresAt?: string;
}

// Team benefits
export interface TeamBenefits {
  id: TeamColor;
  name: string;
  benefits: string[];
}
