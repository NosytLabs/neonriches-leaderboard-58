
export type EventType = 
  | "firesale" 
  | "tournament" 
  | "challenge" 
  | "promotion" 
  | "special"
  | "mockery"
  | "seasonal"
  | "leaderboard"
  | "treasure"
  | "shame"
  | "team";

export type EventStatus = "upcoming" | "active" | "completed" | "cancelled";

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  status: EventStatus;
  startDate: string;
  endDate: string;
  rules?: string;
  prizes?: string[];
  imageUrl?: string;
  image?: string;
  name?: string;
  participants?: string[];
  maxParticipants?: number;
  createdAt: string;
  updatedAt: string;
}

export interface EventDetails {
  id?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  image?: string;
  name?: string;
  participants: number;
  maxParticipants: number;
  type: EventType;
  status: EventStatus;
  rewardTypes?: string[];
  eligibility?: string;
  participationRequirements?: string[];
  specialRules?: string[];
}

export interface EventStats {
  totalParticipants: number;
  topPrize: number;
  totalPrizes: number;
  daysRemaining: number;
  hoursRemaining: number;
  prizePool?: number;
  participantsCount?: number;
  totalPokes?: number;
  mostPoked?: string;
}
