
export type EventType = 
  | 'standard'
  | 'featured'
  | 'limited'
  | 'premium'
  | 'exclusive'
  | 'seasonal'
  | 'treasure'
  | 'shame'
  | 'team'
  | 'auction'
  | 'mockery'
  | 'tournament';

export type EventStatus = 
  | 'upcoming'
  | 'active'
  | 'past'
  | 'canceled'
  | 'completed';

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  type: EventType;
  status: EventStatus;
  prizes?: any[];
  rewards?: any[];
  imageUrl?: string;
  totalParticipants?: number;
  userParticipating?: boolean;
  leaderboardUrl?: string;
  participationCost?: number;
  maxParticipants?: number;
  createdAt?: string;
  
  // Additional properties for compatibility
  name?: string;
  image?: string;
  rarity?: string;
}

export interface EventParticipant {
  id: string;
  userId: string;
  eventId: string;
  joinedAt: string;
  status: 'active' | 'completed' | 'disqualified';
  username?: string;
  displayName?: string;
  profileImage?: string;
  score?: number;
  rank?: number;
  rewards?: any[];
  teamId?: string;
}

export interface EventStats {
  participantCount: number;
  totalSpent: number;
  averageSpent: number;
  highestSpender: {
    userId: string;
    username: string;
    amount: number;
  };
  activeTeams: {
    id: string;
    name: string;
    count: number;
  }[];
  
  // Additional properties for compatibility
  prizePool?: number;
  totalPrizes?: number;
  participantsCount?: number;
  totalPokes?: number;
  mostPoked?: {
    username: string;
    pokeCount: number;
  }[];
  id?: string;
  usersParticipating?: number;
  totalContributed?: number;
  topContributor?: string;
  daysRemaining?: number;
  teamsParticipating?: number;
  leadingTeam?: string;
}

export interface EventReward {
  id: string;
  name: string;
  description: string;
  type: string;
  value: number;
  imageUrl?: string;
  claimed?: boolean;
  claimedAt?: string;
  expiresAt?: string;
  rank?: {
    rank: string;
    reward: string;
  };
  tier?: string;
  rarity?: string;
}

export interface EventLeaderboard {
  eventId: string;
  participants: EventParticipant[];
  lastUpdated: string;
}

// Add EventDetails interface for compatibility
export interface EventDetails extends Event {
  rules: string[];
  prizes: Array<{
    rank: string;
    reward: string;
  }>;
  rewards?: EventReward[];
}
