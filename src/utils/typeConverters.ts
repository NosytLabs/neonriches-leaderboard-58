
import { TeamColor } from '@/types/team';

/**
 * Safely converts any string to TeamColor type
 * This provides a safeguard for when we receive team values as strings
 */
export function toTeamColor(team: string | TeamColor): TeamColor {
  // Handle undefined or null values
  if (!team) return 'none';
  
  // Valid team colors
  const validTeamColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
  
  // If the team is already a valid TeamColor, return it
  if (validTeamColors.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  // Convert string to lowercase for case-insensitive matching
  const normalizedTeam = String(team).toLowerCase();
  
  // Try to match with valid colors
  const matchedTeam = validTeamColors.find(color => color === normalizedTeam);
  
  // Return matched team or default to 'none'
  return matchedTeam || 'none';
}
