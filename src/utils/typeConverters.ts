
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

/**
 * Safe conversion of any ID type to string
 * @param id The ID to convert
 * @returns A string representation of the ID
 */
export function ensureStringId(id: string | number | undefined | null): string {
  if (id === undefined || id === null) return '';
  return String(id);
}

/**
 * Converts a value to a valid TeamColor, similar to toTeamColor but with different fallback
 * @param value The value to convert
 * @returns A valid team color or null if conversion fails
 */
export function safeTeamColor(value: any): TeamColor | null {
  // Create array of valid team colors
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 'none', 
    'neutral', 'silver', 'bronze'
  ];
  
  // Check if value is already a valid TeamColor
  if (typeof value === 'string' && validTeamColors.includes(value as TeamColor)) {
    return value as TeamColor;
  }
  
  return null;
}

/**
 * Safely convert a string to a valid TeamColor for use in CSS classes
 */
export function teamColorToClass(value: string | TeamColor | null | undefined): string {
  const color = toTeamColor(value as string);
  return `team-${color}`;
}

/**
 * Safely convert any value to a string
 */
export function safeToString(value: any): string {
  if (value === null || value === undefined) return '';
  return String(value);
}
