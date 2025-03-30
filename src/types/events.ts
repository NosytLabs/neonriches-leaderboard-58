
export type EventType = 'social' | 'competition' | 'giveaway' | 'exclusive' | 'seasonal' | 'team' | 'shame' | 'treasure' | 'tournament' | 'mockery' | 'auction';
export type EventStatus = 'upcoming' | 'active' | 'completed' | 'cancelled' | 'canceled';

export interface Event {
  id: string;
  name: string;
  title?: string;
  description: string;
  type: EventType;
  startDate: Date | string;
  endDate: Date | string;
  imageUrl: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  status?: EventStatus;
  rewards?: string[] | EventReward[];
  maxParticipants?: number;
  currentParticipants?: number;
  teamEvent?: boolean;
  requiredTier?: string;
}

export interface EventDetails extends Event {
  longDescription?: string;
  rules: string[];
  prizes?: any[];
  eventId?: string;
  schedule?: {date: Date | string; title: string}[];
  rewards?: EventReward[];
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
  // Added for consistency
  prizePool: number;
  totalPokes?: number;
  mostPoked?: { username: string; pokeCount: number }[];
  totalPrizes?: number;
  teamParticipation?: Record<string, number>;
  activeEvents?: number;
  upcomingEvents?: number;
  pastEvents?: number;
  totalParticipation?: number;
  popularEvent?: string;
  totalRewardsDistributed?: number;
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
  tier?: string;
  type: string;
  value: number;
  imageUrl: string;
  rarity: string;
}

// Remove the .d.ts file's redundant export
// export type { EventType, EventStatus, Event, EventStats, EventParticipant, EventDetails, EventReward };
