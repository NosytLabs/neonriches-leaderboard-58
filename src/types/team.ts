
export type TeamColor = 
  | 'red' | 'green' | 'blue' | 'gold' | 'purple' | 'none' | 'neutral';

export interface Team {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  members: number;
  totalContribution: number;
  rank: number;
  emblemUrl: string;
}

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  members: number;
  totalContribution: number;
  rank: number;
  emblemUrl: string;
  motto?: string;
  leader?: string;
  benefits?: string[];
  securityGuarantee?: string;
  absurdStat?: string;
  historicalNote?: string;
  nftJoke?: string;
  cryptoRoast?: string;
}

export interface TeamTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  primary?: string; // Added for backward compatibility
  text?: string; // Added for backward compatibility
  background?: string; // Added for backward compatibility
}

// Alias for backward compatibility
export type TeamType = TeamColor;

/**
 * Convert a string to a TeamColor type if valid, otherwise return a default
 * @param input The team string to convert
 * @returns A valid TeamColor value
 */
export function asTeamColor(input: string | TeamColor | undefined | null): TeamColor {
  const validColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
  
  if (!input) return 'neutral';
  
  const normalized = input.toLowerCase() as TeamColor;
  return validColors.includes(normalized) ? normalized : 'neutral';
}

// Export as a default object to fix 'Team' value reference
export default {
  asTeamColor
};
