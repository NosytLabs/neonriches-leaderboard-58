
import { TeamColor } from './user';

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

export interface TeamStanding {
  teamId: string;
  teamName: string;
  teamColor: TeamColor;
  position: number;
  totalSpent: number;
  memberCount: number;
  weeklyChange: number;
}

export interface TeamJoinRequest {
  userId: string;
  username: string;
  teamId: string;
  requestDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export { TeamColor };
