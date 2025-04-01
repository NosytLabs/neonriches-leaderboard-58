
import { TeamColor } from '@/types/team';

/**
 * Converts a string to a valid TeamColor enum value
 * @param value The string value to convert
 * @returns A valid TeamColor enum value
 */
export function toTeamColor(value: string | TeamColor): TeamColor {
  // Create array of valid team colors
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 'none', 
    'neutral', 'silver', 'bronze'
  ];
  
  // Check if value is already a valid TeamColor
  if (typeof value === 'string' && validTeamColors.includes(value as TeamColor)) {
    return value as TeamColor;
  }
  
  // Default to 'none' if invalid
  return 'none';
}

/**
 * Type guard to check if a value is a valid TeamColor
 * @param value The value to check
 * @returns True if the value is a valid TeamColor
 */
export function isTeamColor(value: any): value is TeamColor {
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 'none', 
    'neutral', 'silver', 'bronze'
  ];
  
  return typeof value === 'string' && validTeamColors.includes(value as TeamColor);
}
