
import { TeamColor } from '@/types/team';

/**
 * Convert a string to a valid TeamColor
 * This helps with type safety when working with team values
 */
export function toTeamColor(team: string | null | undefined): TeamColor | undefined {
  if (!team) return undefined;
  
  // Check if the string is a valid TeamColor
  const validTeams: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze'];
  
  if (validTeams.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  // Return a default value if not valid
  return 'neutral';
}

/**
 * Safely convert any team value to a team color for UI display
 */
export function getTeamColorClass(team: string | null | undefined): string {
  if (!team) return 'text-gray-400';
  
  switch(team.toLowerCase()) {
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    case 'green': return 'text-green-500';
    case 'gold': return 'text-yellow-500';
    case 'purple': return 'text-purple-500';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-700';
    default: return 'text-gray-400';
  }
}

/**
 * Ensure a value is converted to a string ID
 */
export function ensureStringId(id: string | number | undefined): string {
  if (id === undefined) return '';
  return String(id);
}

/**
 * Convert any value to a string safely
 */
export function safeToString(value: any): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value);
    } catch (e) {
      return String(value);
    }
  }
  return String(value);
}
