
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
  | 'mockery';

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
}

export interface EventLeaderboard {
  eventId: string;
  participants: EventParticipant[];
  lastUpdated: string;
}
