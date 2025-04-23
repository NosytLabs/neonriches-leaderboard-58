
import { MockeryAction } from './mockery-types';

export type EventType = 'spending' | 'rank' | 'team' | 'treasure' | 'shame' | 'mockery';

export type EventStatus = 'upcoming' | 'active' | 'completed' | 'cancelled';

export interface EventReward {
  id: string;
  name: string;
  description?: string;
  type: string;
  value?: number;
  iconUrl?: string;
}

export interface Event {
  id: string;
  name: string;
  title?: string;
  description?: string;
  type: EventType;
  startDate: string;
  endDate: string;
  status: EventStatus;
  imageUrl?: string;
  image?: string;
  rewards?: EventReward[] | string[];
  participantCount?: number;
}

export interface EventDetails extends Event {
  rules?: string;
  requirements?: string[];
  leaderboard?: any[];
  participants?: {
    id: string;
    username: string;
    profileImage?: string;
    score?: number;
  }[];
  actions?: MockeryAction[];
  isParticipating?: boolean;
}

export interface EventParticipation {
  userId: string;
  eventId: string;
  joinedAt: string;
  score?: number;
  rank?: number;
  rewards?: EventReward[];
  completedTasks?: string[];
}
