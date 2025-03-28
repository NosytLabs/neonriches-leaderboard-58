
export type EventType = 
  | 'shame' 
  | 'team' 
  | 'treasure'
  | 'poke'
  | 'boost'
  | 'sale';

export type EventStatus = 
  | 'upcoming' 
  | 'active' 
  | 'completed' 
  | 'cancelled';

export interface EventStats {
  prizePool: number;
  participantsCount: number;
  totalPokes: number;
  mostPoked: {
    username: string;
    pokeCount: number;
  };
}

export interface Event {
  id: string;
  title: string;
  name?: string; // For backward compatibility
  description: string;
  image?: string;
  imageUrl?: string;
  startDate: string;
  endDate: string;
  type: EventType;
  status: EventStatus;
  createdAt: string;
}

export interface EventDetails extends Event {
  rewardTypes: string[];
  eligibility: string;
  participationRequirements: string[];
  specialRules: string[];
}
