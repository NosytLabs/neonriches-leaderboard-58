
export type EventType = 'treasure' | 'shame' | 'team' | string;

export interface Event {
  id: string;
  name: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  type: EventType;
}

export interface EventDetails extends Event {
  rewardTypes: string[];
  eligibility: string;
  participationRequirements: string[];
  specialRules: string[];
}

export interface EventStats {
  prizePool: number;
  participantsCount: number;
  totalPokes: number;
  mostPoked: {
    username: string;
    pokeCount: number;
  };
}
