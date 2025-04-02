
import { TeamColor } from './mockery-types';

export interface TeamData {
  id?: string;
  color: TeamColor;
  name: string;
  icon?: string;
  motto?: string;
  description?: string;
  benefits?: string[];
  ranking?: number;
  memberCount?: number;
  teamId?: string;
}

// Team-related interfaces for import compatibility
export interface TeamMember {
  id: string;
  userId: string;
  username: string;
  profileImage?: string;
  role: string;
  joinedDate: string;
  contribution: number;
  rank?: number;
  isActive: boolean;
}

export interface TeamRole {
  id: string;
  name: string;
  permissions: string[];
  color?: string;
  icon?: string;
}

export interface TeamStats {
  totalSpent: number;
  memberCount: number;
  avgSpent: number;
  ranking: number;
  previousRanking: number;
  createdAt: string;
}

export interface TeamBenefits {
  name: string;
  description: string;
  icon?: string;
  unlocked: boolean;
  requiredLevel?: number;
}

export interface TeamInvite {
  id: string;
  teamId: string;
  email: string;
  username?: string;
  status: 'pending' | 'accepted' | 'rejected' | 'expired';
  createdAt: string;
  expiresAt: string;
  invitedBy: string;
}

export type { TeamColor };
