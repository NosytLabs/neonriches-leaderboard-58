
import { TeamColor } from '@/types/mockery-types';

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  rank: number;
  previousRank?: number;
  memberCount: number;
  members?: string[];
  totalContribution: number;
  logoUrl: string;
  leaderboardPosition?: number;
  leaderId?: string;
  leaderName?: string;
  created?: string;
  motto?: string;
  bannerImage?: string;
  achievements?: string[];
  challenges?: string[];
  isFeatured?: boolean;
  isPublic?: boolean;
  totalVictories?: number;
  featuredMembers?: TeamMember[];
}

export interface TeamMember {
  id: string;
  username: string;
  profileImage: string;
  contribution: number;
  joinDate: string;
  rank?: number;
  role?: string;
}

export interface TeamStats {
  id: string;
  teamId: string;
  totalSpent: number;
  memberCount: number;
  activeMembers: number;
  victories: number;
  defeats: number;
  rankHistory: number[];
  weeklyGrowth: number;
}

export interface TeamLeaderboardEntry {
  id: string;
  name: string;
  color: TeamColor;
  rank: number;
  previousRank: number;
  memberCount: number;
  totalContribution: number;
  logoUrl: string;
}

export type TeamLeaderboardFilter = {
  timeframe: 'day' | 'week' | 'month' | 'year' | 'all-time';
  limit: number;
  sort: 'rank' | 'totalContribution' | 'memberCount' | 'growth';
  order: 'asc' | 'desc';
};
