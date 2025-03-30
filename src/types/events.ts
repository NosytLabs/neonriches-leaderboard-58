
export type EventType = 'social' | 'competition' | 'giveaway' | 'exclusive' | 'seasonal' | 'team' | 'shame' | 'treasure' | 'tournament';
export type EventStatus = 'upcoming' | 'active' | 'completed' | 'cancelled' | 'canceled'; // Added 'cancelled' and 'canceled'

export interface Event {
  id: string;
  name: string;
  title?: string;
  description: string;
  type: EventType;
  startDate: string;
  endDate: string;
  imageUrl: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  status?: EventStatus;
  rewards?: EventReward[];
}

export interface EventDetails extends Event {
  rules: string[];
  prizes?: any[];
  eventId?: string;
}

export interface EventStats {
  id: string;
  eventId: string;
  participantsCount: number;
  totalSpent: number;
  topContributors: string[];
  participantCount?: number; // Alias for participantsCount
  averageSpend: number;
  highestSpend: number;
  lowestSpend: number;
  duration: number;
  topContribution?: number;
  // Added missing properties
  prizePool: number;
  totalPokes?: number;
  mostPoked?: { username: string; pokeCount: number }[];
  totalPrizes?: number; // For backward compatibility
}

export interface EventParticipant {
  id: string;
  eventId: string;
  userId: string;
  joinedAt: string;
  contribution: number;
  rank: number;
  rewards: EventReward[];
}

export interface EventReward {
  id: string;
  name: string;
  description: string;
  type: string;
  value: number;
  imageUrl: string;
  rarity: string;
}

// Use export type for re-exports
export type { EventType, EventStatus, Event, EventStats, EventParticipant, EventDetails, EventReward };
