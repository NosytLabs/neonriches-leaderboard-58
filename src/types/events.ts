
export type EventType = 'tournament' | 'sale' | 'promotion' | 'challenge' | 'mockery' | 'leaderboard' | 'treasure' | 'shame' | 'team';
export type EventStatus = 'active' | 'upcoming' | 'completed' | 'cancelled';

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  status: EventStatus;
  startDate: string;
  endDate: string;
  imageUrl?: string;
  image?: string; // For backward compatibility
  name?: string; // For backward compatibility
  participants?: string[];
  createdBy?: string;
  createdAt: string;
}

export interface EventStats {
  prizePool: number;
  participantsCount: number;
  totalPokes: number;
  mostPoked?: {
    username: string;
    pokeCount: number;
  };
}

export interface EventDetails extends Event {
  rewardTypes: string[];
  eligibility: string;
  participationRequirements: string[];
  specialRules: string[];
}
