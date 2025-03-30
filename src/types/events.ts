
/**
 * Event types for the platform events system
 */

export type EventType = 'tournament' | 'mockery' | 'auction' | 'team' | 'treasure' | 'shame';
export type EventStatus = 'upcoming' | 'active' | 'completed' | 'cancelled';

export interface Event {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  type: EventType;
  status: EventStatus;
  image?: string;
  title?: string;
  imageUrl?: string;
  createdAt?: string; // Add missing property
}

export interface EventReward {
  id: string;
  name: string;
  description: string;
  type: string;
  tier: string;
  imageUrl?: string; // Add missing property
  rarity?: string; // Add missing property
}

export interface EventDetails extends Event {
  rules: string[];
  prizes: Array<{
    rank: string;
    reward: string;
  }>;
  rewards?: EventReward[];
  type: EventType;
  startDate: string;
  endDate: string;
  status: EventStatus;
  createdAt?: string; // Add missing property
}

export interface EventParticipant {
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  contribution: number;
  joinDate: string;
  team?: string;
}

export interface EventStats {
  id?: string; // Add missing property
  usersParticipating: number;
  totalContributed: number;
  topContributor: string;
  daysRemaining: number;
  teamsParticipating: number;
  leadingTeam: string;
  prizePool?: number; // Add missing property
  totalPrizes?: number; // Add missing property
  participantsCount?: number; // Add missing property
  participantCount?: number; // Add missing property
  totalPokes?: number; // Add missing property
  totalSpent?: number; // Add missing property
  mostPoked?: Array<{ // Add missing property
    username: string;
    pokeCount: number;
  }>;
}

export interface EventRegistration {
  userId: string;
  eventId: string;
  registrationDate: string;
  status: 'pending' | 'approved' | 'rejected';
  teamId?: string;
}

export interface EventResult {
  userId: string;
  eventId: string;
  rank: number;
  score: number;
  reward?: string;
  rewardId?: string;
}
