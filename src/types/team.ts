
/**
 * Unified team types to ensure consistency across the application
 */

/**
 * TeamColor for the application - the primary team type used throughout the app
 */
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none' 
  | 'neutral'
  | 'silver'
  | 'bronze';

/**
 * Team interface representing a team entity
 */
export interface Team {
  id: string;
  name: string;
  color: TeamColor;
  members: number;
  leader?: string;
  totalSpent?: number;
  rank?: number;
  description?: string;
}

/**
 * TeamData interface with additional properties for team details
 */
export interface TeamData {
  id: string;
  name: string;
  description: string;
  color: string | TeamColor;
  members: number;
  emblemUrl?: string;
  motto?: string;
  benefits?: string[];
  securityGuarantee?: string;
  historicalNote?: string;
  absurdStat?: string;
  nftJoke?: string;
  cryptoRoast?: string;
  rank?: number;
  memberCount?: number;
  totalContribution?: number;
}

// Backwards compatibility exports
export type TeamType = TeamColor;
