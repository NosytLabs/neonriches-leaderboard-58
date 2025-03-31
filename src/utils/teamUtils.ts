
import { TeamColor } from '@/types/team';

/**
 * Get the display name for a team
 * @param team The team color/id
 * @returns The human-readable team name
 */
export function getTeamName(team: TeamColor): string {
  const teamNames: Record<string, string> = {
    'red': 'Crimson Order',
    '#dc2626': 'Crimson Order',
    'blue': 'Azure Legion',
    '#2563eb': 'Azure Legion',
    'green': 'Emerald Dynasty',
    '#16a34a': 'Emerald Dynasty',
    'gold': 'Golden Empire',
    '#eab308': 'Golden Empire',
    'purple': 'Royal Court',
    '#9333ea': 'Royal Court',
    'none': 'Unaligned',
    '#6b7280': 'Unaligned',
    'neutral': 'Neutral'
  };

  return teamNames[team] || 'Neutral';
}

/**
 * Get the CSS color class for a team
 * @param team The team color/id
 * @returns CSS class for the team color
 */
export function getTeamColor(team: TeamColor): string {
  const colorClasses: Record<string, string> = {
    'red': 'text-red-600',
    '#dc2626': 'text-red-600',
    'blue': 'text-blue-600',
    '#2563eb': 'text-blue-600', 
    'green': 'text-green-600',
    '#16a34a': 'text-green-600',
    'gold': 'text-yellow-500',
    '#eab308': 'text-yellow-500',
    'purple': 'text-purple-600',
    '#9333ea': 'text-purple-600',
    'none': 'text-gray-400',
    '#6b7280': 'text-gray-400',
    'neutral': 'text-gray-400'
  };

  return colorClasses[team] || 'text-gray-400';
}

/**
 * Get the CSS border color class for a team
 * @param team The team color/id
 * @returns CSS class for the team border
 */
export function getTeamBorderColor(team: TeamColor): string {
  const borderClasses: Record<string, string> = {
    'red': 'border-red-600/70',
    '#dc2626': 'border-red-600/70',
    'blue': 'border-blue-600/70',
    '#2563eb': 'border-blue-600/70',
    'green': 'border-green-600/70',
    '#16a34a': 'border-green-600/70',
    'gold': 'border-yellow-500/70',
    '#eab308': 'border-yellow-500/70',
    'purple': 'border-purple-600/70',
    '#9333ea': 'border-purple-600/70',
    'none': 'border-gray-400/70',
    '#6b7280': 'border-gray-400/70',
    'neutral': 'border-gray-400/70'
  };

  return borderClasses[team] || 'border-gray-400/70';
}

/**
 * Get the raw color value for a team
 * @param team The team color/id
 * @returns HEX color code
 */
export function getTeamRawColor(team: TeamColor): string {
  const rawColors: Record<string, string> = {
    'red': '#dc2626',
    '#dc2626': '#dc2626',
    'blue': '#2563eb',
    '#2563eb': '#2563eb',
    'green': '#16a34a',
    '#16a34a': '#16a34a',
    'gold': '#eab308',
    '#eab308': '#eab308',
    'purple': '#9333ea',
    '#9333ea': '#9333ea',
    'none': '#6b7280',
    '#6b7280': '#6b7280',
    'neutral': '#6b7280'
  };

  return rawColors[team] || '#6b7280';
}

export default {
  getTeamName,
  getTeamColor,
  getTeamBorderColor,
  getTeamRawColor
};
