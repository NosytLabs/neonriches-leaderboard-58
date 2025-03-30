
import { TeamType } from './user';

export interface Team {
  id: TeamType;
  name: string;
  description: string;
  color: string;
  image: string;
  members: number;
  totalSpent: number;
  ranking: number;
}

export interface TeamStats {
  totalMembers: number;
  averageSpending: number;
  topContributor: string;
  recentActivity: TeamActivity[];
}

export interface TeamActivity {
  userId: string;
  username: string;
  action: 'joined' | 'spent' | 'left';
  amount?: number;
  timestamp: string;
}

export interface TeamRankings {
  rankings: {
    team: TeamType;
    rank: number;
    members: number;
    totalSpent: number;
  }[];
  lastUpdated: string;
}
