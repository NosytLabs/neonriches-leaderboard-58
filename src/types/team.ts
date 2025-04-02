
import { TeamColor } from './mockery-types';

export interface TeamData {
  id?: string;
  name: string;
  color: TeamColor | string;
  ranking?: number;
  memberCount?: number;
  icon?: string;
  motto?: string;
  description?: string;
  benefits?: string[];
}

export interface TeamMember {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  joinedAt: string;
  role: TeamRole;
  contributions?: number;
  isActive: boolean;
  lastActive?: string;
}

export interface TeamRole {
  id: string;
  name: string;
  description?: string;
  permissions: string[];
  color?: string;
  icon?: string;
}

export interface TeamStats {
  totalMembers: number;
  activeMembers: number;
  totalSpent: number;
  averageSpent: number;
  ranking: number;
  previousRanking?: number;
  winStreak?: number;
  victories?: number;
  defeats?: number;
}

export interface TeamBenefits {
  name: string;
  description: string;
  unlocked: boolean;
  icon?: string;
  unlockedAt?: string;
}

export interface TeamInvite {
  id: string;
  teamId: string;
  userId?: string;
  email?: string;
  code: string;
  expiresAt: string;
  createdBy: string;
  createdAt: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
}
