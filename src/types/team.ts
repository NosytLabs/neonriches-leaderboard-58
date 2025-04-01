
/**
 * Team-related type definitions
 */

// TeamColor defines the available team colors in the system
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

// TeamType is an alias for backward compatibility
export type TeamType = TeamColor;

// TeamData represents information about a team
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  members: number;
  totalSpent: number;
  description: string;
  icon: string;
  leaderUsername?: string;
  leaderId?: string;
  crest?: string;
  motto?: string;
  achievements?: string[];
  rank?: number;
  theme?: TeamTheme;
}

// TeamTheme represents theme information for a team
export interface TeamTheme {
  primary: string;
  text: string;
  background: string;
  accent: string;
  secondary?: string;
}

// TeamStats represents statistical information about a team
export interface TeamStats {
  totalMembers: number;
  activeMembers: number;
  totalSpent: number;
  avgSpent: number;
  rank: number;
  wins: number;
  achievements: number;
}

// TeamMember represents a member of a team
export interface TeamMember {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  joinedAt: string;
  contribution: number;
  rank: number;
  role?: 'leader' | 'officer' | 'member';
}
