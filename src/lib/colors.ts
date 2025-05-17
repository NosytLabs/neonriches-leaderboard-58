
/**
 * Get the background color class for a team
 */
export const getTeamBgColor = (team: string): string => {
  switch (team.toLowerCase()) {
    case 'red':
      return 'bg-team-red';
    case 'green':
      return 'bg-team-green';
    case 'blue':
      return 'bg-team-blue';
    case 'gold':
      return 'bg-royal-gold/20';
    case 'crimson':
      return 'bg-royal-crimson/20';
    case 'navy':
      return 'bg-royal-navy/20';
    default:
      return 'bg-white/10';
  }
};

/**
 * Get the text color class for a team
 */
export const getTeamTextColor = (team: string): string => {
  switch (team.toLowerCase()) {
    case 'red':
      return 'text-team-red';
    case 'green':
      return 'text-team-green';
    case 'blue':
      return 'text-team-blue';
    case 'gold':
      return 'text-royal-gold';
    case 'crimson':
      return 'text-royal-crimson';
    case 'navy':
      return 'text-royal-navy';
    default:
      return 'text-white';
  }
};

/**
 * Get the text color class for a rank
 */
export const getRankTextColor = (rank: number): string => {
  switch (rank) {
    case 1:
      return 'text-royal-gold';
    case 2:
      return 'text-gray-300';
    case 3:
      return 'text-amber-700';
    default:
      return 'text-white/70';
  }
};
