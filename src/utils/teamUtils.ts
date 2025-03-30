
import { TeamType } from '@/types/user';

/**
 * Gets the color class associated with a team
 */
export const getTeamColor = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'text-royal-crimson';
    case 'green':
      return 'text-royal-gold';
    case 'blue':
      return 'text-royal-navy';
    default:
      return 'text-gray-500';
  }
};

/**
 * Gets the name of a team
 */
export const getTeamName = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'Crimson Court';
    case 'green':
      return 'Golden Order';
    case 'blue':
      return 'Royal Navy';
    default:
      return 'Unaligned';
  }
};

/**
 * Gets the background color class for a team
 */
export const getTeamBackgroundColor = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'bg-royal-crimson/10';
    case 'green':
      return 'bg-royal-gold/10';
    case 'blue':
      return 'bg-royal-navy/10';
    default:
      return 'bg-gray-500/10';
  }
};

/**
 * Gets an historical note about the team
 */
export const getTeamHistoricalNote = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'The Crimson Court, known for their extravagant displays of wealth, originated from the first great spending boom of the realm.';
    case 'green':
      return 'The Golden Order traces its lineage to the founders of the kingdom, who established the first economic principles of nobility through spending.';
    case 'blue':
      return 'The Royal Navy commands respect through calculated contributions, preferring steady strategic investments over flashy expenditures.';
    default:
      return 'Those who remain unaligned often do so by choice, observing the spending wars from the sidelines.';
  }
};

/**
 * Gets the icon name for a team
 */
export const getTeamIcon = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'crown';
    case 'green':
      return 'coins';
    case 'blue':
      return 'anchor';
    default:
      return 'users';
  }
};
