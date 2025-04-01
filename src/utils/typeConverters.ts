
import { TeamColor } from '@/types/user';

/**
 * Converts a string value to a TeamColor
 * Ensures that the team color is valid according to the TeamColor type
 */
export const toTeamColor = (team: any): TeamColor | null => {
  // If team is null or undefined, return null
  if (team === null || team === undefined) {
    return null;
  }
  
  // If team is already a valid TeamColor, return it
  if (typeof team === 'string') {
    // Normalize to lowercase for comparison
    const normalizedTeam = team.toLowerCase();
    
    // Check if it's a valid TeamColor
    const validTeamColors: TeamColor[] = [
      'red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze'
    ];
    
    if (validTeamColors.includes(normalizedTeam as TeamColor)) {
      return normalizedTeam as TeamColor;
    }
    
    // Special case handling for legacy team values
    if (normalizedTeam === 'red' || normalizedTeam === 'Red') return 'red';
    if (normalizedTeam === 'blue' || normalizedTeam === 'Blue') return 'blue';
    if (normalizedTeam === 'green' || normalizedTeam === 'Green') return 'green';
    if (normalizedTeam === 'gold' || normalizedTeam === 'Gold') return 'gold';
    if (normalizedTeam === 'purple' || normalizedTeam === 'Purple') return 'purple';
  }
  
  // Default to null if no valid conversion
  return null;
};

/**
 * Ensures a value is a string ID
 * Converts numbers to strings if needed
 */
export const ensureStringId = (id: string | number | undefined): string => {
  if (id === undefined) return '';
  return String(id);
};

/**
 * Cast team string to valid TeamColor
 */
export const safeTeamColor = (team: string | null | undefined): TeamColor => {
  if (!team) return 'neutral';
  
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze'
  ];
  
  const normalizedTeam = team.toLowerCase() as TeamColor;
  
  if (validTeamColors.includes(normalizedTeam)) {
    return normalizedTeam;
  }
  
  return 'neutral';
};
