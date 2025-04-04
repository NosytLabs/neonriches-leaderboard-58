
// Team related types

// Team colors available in the system
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'none'
  | 'purple'  // Added purple
  | 'silver'  // Added silver
  | 'bronze'  // Added bronze
  | 'crimson' // Added crimson
  | 'neutral'; // Added neutral

// Team data structure
export interface TeamData {
  id: string | TeamColor;
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
  benefits?: string[];
  ranking?: number;
}

// Team invitation
export interface TeamInvite {
  id: string;
  teamId: TeamColor | string;
  inviterId: string;
  inviteeId: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
  expiresAt?: string;
}

// Team benefits
export interface TeamBenefits {
  id: TeamColor | string;
  name: string;
  benefits: string[];
}

// Ensure TeamColor is exported from user-consolidated
export { TeamColor };
