
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
}

export interface EventReward {
  id: string;
  name: string;
  description: string;
  type: string;
  tier: string;
}

export interface EventDetails extends Event {
  rules: string[];
  prizes: Array<{
    rank: string;
    reward: string;
  }>;
  rewards?: EventReward[];
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
