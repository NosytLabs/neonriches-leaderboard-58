
export type EventType = 
  | "firesale" 
  | "tournament" 
  | "challenge" 
  | "promotion" 
  | "special"
  | "mockery"
  | "seasonal"
  | "leaderboard";

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
  participants?: string[];
  maxParticipants?: number;
  createdAt: string;
  updatedAt: string;
}
