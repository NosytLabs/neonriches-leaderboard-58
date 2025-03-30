
export type EventType = 'tournament' | 'sale' | 'challenge' | 'team' | 'shame' | 'treasure';
export type EventStatus = 'upcoming' | 'active' | 'completed' | 'cancelled';

export interface Event {
  id: string;
  name: string;
  title: string; 
  description: string;
  type: EventType;
  startDate: string;
  endDate: string;
  status: EventStatus;
  imageUrl: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  rewards?: EventReward[];
}

export interface EventStats {
  id: string;
  eventId: string;
  participantsCount: number;
  totalSpent: number;
  topContribution: number;
  avgContribution: number;
  medianContribution: number;
  minContribution: number;
  maxContribution: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface EventParticipant {
  id: string;
  eventId: string;
  userId: string;
  username: string;
  amount: number;
  rank: number;
  joined: string;
  rewards?: EventReward[];
}

export interface EventDetails {
  id: string;
  eventId: string;
  description: string;
  rules: string[];
  prizes?: string[];
  prizePool: number;
  startDate: string;
  endDate: string;
  status: EventStatus;
  createdAt?: string;
  updatedAt?: string;
  rewards?: EventReward[];
}

export interface EventReward {
  id: string;
  eventId: string;
  name: string;
  description: string;
  type: string;
  tier: string;
  value: number;
  imageUrl?: string;
  minRank?: number;
  maxRank?: number;
}
