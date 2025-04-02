
import { TeamColor } from './team';

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  motto: string;
  icon: string;
  memberCount: number;
  totalSpent: number;
  position: number;
  banner?: string;
  founder?: string;
  benefits?: string[];
  history?: string;
}

export interface TeamLeader {
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  totalSpent: number;
  rank: number;
  tier: string;
}

export interface TeamMember {
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  totalSpent: number;
  rank: number;
  tier: string;
  joinedDate: string;
}

export interface TeamStats {
  totalSpent: number;
  memberCount: number;
  averageSpent: number;
  position: number;
  growthRate: number;
  weeklyChange: number;
}
