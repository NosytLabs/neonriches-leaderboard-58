
import { TeamColor } from './team';

export interface TeamData {
  id: string;
  color: TeamColor;
  name: string;
  description: string;
  logoUrl: string;
  benefits: string[];
  members: number;
  totalContribution: number;
  rank: number;
  previousRank: number;
}

// Re-export TeamColor from team.ts
export { TeamColor };
export type TeamType = TeamColor; // For backwards compatibility
