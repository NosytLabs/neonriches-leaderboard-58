
// This file consolidates team-related types from multiple files
import { TeamColor } from './mockery-types';

export type { TeamColor };
export type TeamType = TeamColor; // Alias for backward compatibility

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  memberCount: number;
  logo?: string;
  logoUrl?: string;
  totalContribution?: number;
  totalSpent?: number;
  rank?: number;
  previousRank?: number;
  leader?: string;
  leaderUsername?: string;
  leaderUserId?: string;
  leaderId?: string;
  leaderName?: string;
  motto?: string;
  icon?: string;
  benefits?: string[];
  
  // Optional extended properties
  isActive?: boolean;
  isPublic?: boolean;
  isFeatured?: boolean;
  members?: any[];
  bannerImage?: string;
  slogan?: string;
  code?: string;
  rankBonusMultiplier?: number;
  leaderboardPosition?: number;
  created?: string;
  achievements?: string[];
  challenges?: string[];
  totalVictories?: number;
  featuredMembers?: TeamMember[];
  securityGuarantee?: string;
  absurdStat?: string;
  historicalNote?: string;
  nftJoke?: string;
  cryptoRoast?: string;
}

export interface TeamMember {
  id?: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  joinDate?: string;
  joinedAt?: string;
  contribution?: number;
  rank?: number;
  role?: string;
  isActive?: boolean;
  isLeader?: boolean;
  tier?: string;
  spentAmount?: number;
}

export interface TeamStats {
  totalMembers: number;
  activeMembers: number;
  totalContribution?: number;
  totalSpending?: number;
  totalSpent?: number;
  averageContribution?: number;
  averageRank?: number;
  leaderboardPosition?: number;
  contributionChange?: number;
  weeklyGrowth?: number;
  growthRate?: number;
  victories?: number;
  defeats?: number;
  rankHistory?: number[];
  wins?: number;
  losses?: number;
  longestWinStreak?: number;
  currentWinStreak?: number;
  highestRanking?: number;
  lowestRanking?: number;
}

export interface TeamLeaderboardEntry {
  id: string;
  name: string;
  color: TeamColor;
  memberCount: number;
  totalContribution?: number;
  totalSpent?: number;
  rank?: number;
  previousRank?: number;
  logo?: string;
  logoUrl?: string;
  position?: number;
  teamId?: string;
  teamName?: string;
  teamColor?: TeamColor;
  team?: TeamColor;
  avgSpent?: number;
}

export interface TeamRole {
  id: string;
  name: string;
  color?: string;
  permissions: string[];
  isDefault?: boolean;
  description?: string;
  icon?: string;
}

// Note: This file is a consolidation point for team-related types
// Consider migrating to this file gradually as you refactor components
