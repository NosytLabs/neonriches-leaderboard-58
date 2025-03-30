
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
  createdAt?: string;
}

export interface EventReward {
  id: string;
  name: string;
  description: string;
  type: string;
  tier: string;
  rarity?: string;
  imageUrl?: string;
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
  usersParticipating: number;
  totalContributed: number;
  topContributor: string;
  daysRemaining: number;
  teamsParticipating: number;
  leadingTeam: string;
  totalPokes?: number;
  mostPoked?: string;
  prizePool?: number;
  totalPrizes?: number;
  totalSpent?: number;
  participantCount?: number;
  participantsCount?: number;
  id?: string;
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
