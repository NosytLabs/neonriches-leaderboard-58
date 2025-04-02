
import { TeamColor } from './team';

export interface TeamData {
  id: string;
  color: TeamColor;
  name: string;
  description: string;
  logoUrl: string;
  benefits: string[];
  members: number; // Changed from memberCount to members
  totalContribution: number;
  rank: number;
  previousRank: number;
}

// Re-export TeamColor for convenience
export type { TeamColor };
// For backwards compatibility
export type TeamType = TeamColor;
