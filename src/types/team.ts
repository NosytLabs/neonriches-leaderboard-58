
/**
 * Team related type definitions
 */

// Basic team color types
export type TeamColor = 'red' | 'green' | 'blue' | 'gold' | 'purple' | 'none' | 
  'neutral' | 'silver' | 'bronze' | 'crimson';

// Team data structure
export interface TeamData {
  id: string;
  name: string;
  description: string;
  color: TeamColor;
  icon?: React.ReactNode;
  mottoShort?: string;
  benefits?: string[];
  memberCount?: number;
  totalSpent?: number;
}
