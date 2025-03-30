
/**
 * Team-related utility functions
 */
import { TeamColor, UserTeam } from '@/types/user';

/**
 * Get the display color for a team
 * @param team Team identifier
 * @returns CSS color class
 */
export function getTeamColor(team: UserTeam | string): string {
  switch (team) {
    case 'red':
      return 'text-red-500';
    case 'blue':
      return 'text-blue-500';
    case 'green':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
}

/**
 * Get the border color for a team
 * @param team Team identifier
 * @returns CSS border color class
 */
export function getTeamBorderColor(team: UserTeam | string): string {
  switch (team) {
    case 'red':
      return 'border-red-500';
    case 'blue':
      return 'border-blue-500';
    case 'green':
      return 'border-green-500';
    default:
      return 'border-gray-500';
  }
}

/**
 * Get the background color for a team
 * @param team Team identifier
 * @returns CSS background color class
 */
export function getTeamBackgroundColor(team: UserTeam | string): string {
  switch (team) {
    case 'red':
      return 'bg-red-500/10';
    case 'blue':
      return 'bg-blue-500/10';
    case 'green':
      return 'bg-green-500/10';
    default:
      return 'bg-gray-500/10';
  }
}

/**
 * Get the display name for a team
 * @param team Team identifier
 * @returns Human-readable team name
 */
export function getTeamName(team: UserTeam | string): string {
  switch (team) {
    case 'red':
      return 'Crimson Crown';
    case 'blue':
      return 'Azure Knights';
    case 'green':
      return 'Emerald Empire';
    default:
      return 'Unaligned';
  }
}

/**
 * Get historical lore note for a team
 * @param team Team identifier
 * @returns Historical note about the team
 */
export function getTeamHistoricalNote(team: TeamColor): string {
  switch (team) {
    case 'red':
      return 'The Crimson Crown, descendants of the ancient royal bloodline, known for their fierce loyalty and determination to restore monarchic rule.';
    case 'blue':
      return 'The Azure Knights, guardians of wisdom and tradition, believe true nobility comes from enlightenment and justice rather than bloodlines.';
    case 'green':
      return 'The Emerald Empire, merchants and innovators who rose from common roots, advocate for meritocracy where wealth and contribution determine status.';
    default:
      return 'Those who have yet to pledge allegiance to a noble house in the struggle for the throne.';
  }
}

/**
 * Get a gendered title based on user preference
 * @param gender User gender preference
 * @returns Appropriate title
 */
export function getGenderTitle(gender: string): string {
  switch (gender?.toLowerCase()) {
    case 'male':
      return 'Lord';
    case 'female':
      return 'Lady';
    case 'neutral':
    case 'nonbinary':
      return 'Noble';
    default:
      return 'Noble';
  }
}

/**
 * Get emoji representation for gender
 * @param gender User gender preference
 * @returns Emoji character
 */
export function getGenderEmoji(gender: string): string {
  switch (gender?.toLowerCase()) {
    case 'male':
      return '♂️';
    case 'female':
      return '♀️';
    case 'neutral':
    case 'nonbinary':
      return '⚧️';
    default:
      return '';
  }
}

/**
 * Get initials from a name
 * @param name Full name
 * @param maxLength Maximum number of initials
 * @returns String of initials
 */
export function getInitials(name: string, maxLength = 2): string {
  if (!name) return '';
  
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .slice(0, maxLength)
    .join('');
}
