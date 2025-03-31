
/**
 * Team types definition file
 */

// Team color options
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

// Team type is an alias of TeamColor for backward compatibility
export type TeamType = TeamColor;

// Team data structure
export interface TeamData {
  id: TeamColor;
  name: string;
  motto: string;
  color: string;
  benefits: string[];
  securityGuarantee: string;
  absurdStat: string;
  historicalNote: string;
  nftJoke: string;
  cryptoRoast: string;
}

// Team theme interface for styling
export interface TeamTheme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  border: string;
  background: string;
}
