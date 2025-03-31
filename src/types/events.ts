
import { TeamColor } from './user';

export type EventType = 
  | 'tournament'
  | 'sale'
  | 'challenge'
  | 'special'
  | 'seasonal'
  | 'reward'
  | 'competition';

export type EventStatus =
  | 'upcoming'
  | 'active'
  | 'ended'
  | 'cancelled';

export interface EventDetails {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  type: EventType;
  status: EventStatus;
  imageUrl: string;
  team?: TeamColor;
  rewards: string[];
  prizes?: string[];
  rules?: string[];
  participants?: number;
  minRank?: number;
  maxRank?: number;
  requiredTier?: string;
  find?: (detail: any) => boolean; // For compatibility
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  type: EventType;
  status: EventStatus;
  imageUrl: string;
  rewards: string[];
  participants?: number;
}

export interface EventStats {
  totalParticipants: number;
  totalPrizes: number;
  averageEngagement: number;
  leaderboard: {
    userId: string;
    username: string;
    score: number;
    position: number;
  }[];
  totalRewards: number;
}
