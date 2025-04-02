
import { UserProfile } from './user';

export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none';

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  logo: string;
  memberCount: number;
  totalContribution: number;
  ranking: number;
  members?: UserProfile[];
  leader?: UserProfile;
  motto?: string;
  isJoinable: boolean;
  requiresApplication: boolean;
  statistics: TeamStatistics;
  rewards: TeamReward[];
  createdAt: string;
  updatedAt: string;
}

export interface TeamStatistics {
  totalMembers: number;
  activeMembers: number;
  totalContribution: number;
  averageRank: number;
  weeklyGrowth: number;
  monthlyGrowth: number;
  wins: number;
  losses: number;
  longestWinStreak: number;
  currentWinStreak: number;
  highestRanking: number;
  lowestRanking: number;
}

export interface TeamReward {
  id: string;
  name: string;
  description: string;
  image: string;
  requiredContribution: number;
  unlockedAt?: string;
  type: 'cosmetic' | 'boost' | 'badge' | 'title';
}

export interface TeamEvent {
  id: string;
  teamId: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  reward: TeamReward;
  participants: string[];
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
}

export interface TeamMember {
  userId: string;
  teamId: string;
  joinedAt: string;
  contribution: number;
  role: 'leader' | 'officer' | 'member' | 'recruit';
  lastActive: string;
  badges: string[];
}

export interface TeamLeaderboardEntry {
  id: string;
  name: string;
  color: TeamColor;
  logo: string;
  memberCount: number;
  totalContribution: number;
  ranking: number;
  weeklyChange: number;
}
