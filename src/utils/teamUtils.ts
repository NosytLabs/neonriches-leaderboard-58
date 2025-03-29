
import { UserTeam } from '@/types/user';

/**
 * Gets the color class for a team
 * @param team Team
 * @returns CSS class for team color
 */
export const getTeamColor = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'text-red-500 bg-red-500/20';
    case 'green':
      return 'text-green-500 bg-green-500/20';
    case 'blue':
      return 'text-blue-500 bg-blue-500/20';
    default:
      return 'text-white/70 bg-white/10';
  }
};

/**
 * Gets the gradient class for a team
 * @param team Team
 * @returns CSS class for team gradient
 */
export const getTeamGradient = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'bg-gradient-to-r from-red-700/30 to-red-500/10';
    case 'green':
      return 'bg-gradient-to-r from-green-700/30 to-green-500/10';
    case 'blue':
      return 'bg-gradient-to-r from-blue-700/30 to-blue-500/10';
    default:
      return 'bg-gradient-to-r from-white/10 to-transparent';
  }
};

/**
 * Gets the name of a team
 * @param team Team
 * @returns Team name
 */
export const getTeamName = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'Red Team';
    case 'green':
      return 'Green Team';
    case 'blue':
      return 'Blue Team';
    default:
      return 'No Team';
  }
};

/**
 * Gets the description of a team
 * @param team Team
 * @returns Team description
 */
export const getTeamDescription = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'The Flamboyant - Red Team nobles are known for their extravagant displays of wealth and status.';
    case 'green':
      return 'The Status Seekers - Green Team nobles are focused on climbing the social ladder through strategic spending.';
    case 'blue':
      return 'The Collectors - Blue Team nobles collect digital prestige like limited edition NFTs.';
    default:
      return 'Unaffiliated nobles have yet to pledge allegiance to a team.';
  }
};

/**
 * Gets the team motto
 * @param team Team
 * @returns Team motto
 */
export const getTeamMotto = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return '"If they can\'t see your wealth from space, you\'re not trying hard enough."';
    case 'green':
      return '"It\'s not how much you spend, but who sees you spending it."';
    case 'blue':
      return '"Every profile is a gallery, every purchase a masterpiece."';
    default:
      return '"Choose a side, or remain in obscurity."';
  }
};
