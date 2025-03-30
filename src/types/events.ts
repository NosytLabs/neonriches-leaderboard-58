
// Event-related types
import { TeamType } from './team';

export type EventType = 
  | 'firesale' 
  | 'tournament' 
  | 'challenge' 
  | 'seasonal' 
  | 'special'
  | 'treasure'
  | 'shame'
  | 'team';

export type EventStatus = 
  | 'upcoming' 
  | 'active' 
  | 'completed' 
  | 'canceled';

export interface Event {
  id: string;
  title: string;
  name: string;
  description: string;
  image: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  type: EventType;
  status: EventStatus;
  createdAt: string;
  updatedAt: string;
}

export interface EventStats {
  id: string;
  eventId: string;
  participantsCount: number;
  totalSpent: number;
  totalPrizes: number;
  averageSpent: number;
  prizePool: number;
  totalPokes: number;
  mostPoked: { username: string; pokeCount: number; }[];
}

export interface EventParticipant {
  id: string;
  eventId: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  amountSpent: number;
  rank: number;
  team?: TeamType;
  joinedAt: string;
}

export interface EventDetails {
  id: string;
  title: string;
  name: string;
  description: string;
  image: string;
  longDescription: string;
  rules: string[];
  rewards: string[];
  rewardTypes: string[];
  eligibility: string[];
  participationRequirements: string[];
  specialRules: string[];
  startDate?: string;
  endDate?: string;
  createdAt?: string;
  type?: EventType;
}

export interface EventReward {
  id: string;
  eventId: string;
  name: string;
  description: string;
  image: string;
  value: number;
  rewardType: string;
  rankRequired?: number;
  teamRequired?: TeamType;
  amountRequired?: number;
}

// Export all types
export { EventType, EventStatus, Event, EventStats, EventParticipant, EventDetails, EventReward };
