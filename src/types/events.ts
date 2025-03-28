
export type EventType = 'tournament' | 'sale' | 'promotion' | 'challenge' | 'mockery' | 'leaderboard';
export type EventStats = 'active' | 'upcoming' | 'completed' | 'cancelled';

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  status: EventStats;
  startDate: string;
  endDate: string;
  imageUrl?: string;
  participants?: string[];
  createdBy?: string;
  createdAt: string;
}
