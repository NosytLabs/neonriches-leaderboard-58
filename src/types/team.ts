
import { UserProfile } from './user-consolidated';

// Export TeamColor as a type
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

// Export TeamData interface
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  motto: string;
  members: number;
  rank: number;
  totalSpent: number;
  benefits: string[];
  maxMembers: number;
  leaderId?: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  role: TeamRole;
  joinDate: string;
  contribution: number;
  rank: number;
  status: 'active' | 'inactive' | 'pending';
}

export interface TeamRole {
  id: string;
  name: string;
  permissions: string[];
  isAdmin: boolean;
}

export interface TeamStats {
  totalMembers: number;
  totalSpent: number;
  averageSpent: number;
  rank: number;
  previousRank: number;
  highestRank: number;
  events: number;
  victories: number;
}

export interface TeamBenefits {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  requiredSpending: number;
}

export interface TeamInvite {
  id: string;
  teamId: string;
  teamName: string;
  teamColor: TeamColor;
  inviterId: string;
  inviterName: string;
  inviteeId: string;
  inviteeEmail: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  createdAt: string;
  expiresAt: string;
}

// For compatibility with existing code
export interface TeamDataCompat {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  members: number;
}
