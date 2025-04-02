
/**
 * Team utility functions
 */

import { TeamColor } from '@/types/mockery-types';

/**
 * Get Tailwind background color class for a team color
 * @param team Team color
 * @returns Tailwind class string
 */
export const getTeamTailwindBgColor = (team: TeamColor | string | null): string => {
  switch (team) {
    case 'red':
      return 'bg-red-600';
    case 'blue':
      return 'bg-blue-600';
    case 'green':
      return 'bg-green-600';
    case 'gold':
      return 'bg-yellow-500';
    case 'purple':
      return 'bg-purple-600';
    case 'silver':
      return 'bg-gray-400';
    case 'bronze':
      return 'bg-amber-700';
    case 'crimson':
      return 'bg-red-800';
    case 'neutral':
      return 'bg-gray-600';
    case 'none':
      return 'bg-gray-800';
    default:
      return 'bg-gray-700';
  }
};

/**
 * Get team motto
 * @param team Team color
 * @returns Team motto
 */
export const getTeamMotto = (team: TeamColor | string | null): string => {
  switch (team) {
    case 'red':
      return 'Fortune Favors the Bold';
    case 'blue':
      return 'Loyalty Above All';
    case 'green':
      return 'Grow Together, Rise Together';
    case 'gold':
      return 'Excellence is Our Standard';
    case 'purple':
      return 'Wisdom and Power Combined';
    case 'silver':
      return 'Honor in All Things';
    case 'bronze':
      return 'Strength Through Persistence';
    case 'crimson':
      return 'Passion Fuels Progress';
    default:
      return 'Choose Your Path';
  }
};

/**
 * Get team benefits
 * @param team Team color
 * @returns Array of benefit descriptions
 */
export const getTeamBenefits = (team: TeamColor | string | null): string[] => {
  switch (team) {
    case 'red':
      return [
        'Bonus for aggressive spending',
        'Special red team cosmetics',
        'Access to Red Court events'
      ];
    case 'blue':
      return [
        'Discount on premium features',
        'Special blue team cosmetics',
        'Loyalty rewards for long-term members'
      ];
    case 'green':
      return [
        'Bonus for consistent daily spending',
        'Special green team cosmetics',
        'Team growth bonuses'
      ];
    case 'gold':
      return [
        'Increased visibility on leaderboards',
        'Exclusive gold cosmetics',
        'Access to elite community events'
      ];
    case 'purple':
      return [
        'Special mockery abilities',
        'Royal purple cosmetics',
        'Unique profile decorations'
      ];
    default:
      return [
        'Choose a team to view team benefits',
        'Each team offers unique advantages',
        'Team selection affects your experience'
      ];
  }
};

export default {
  getTeamTailwindBgColor,
  getTeamMotto,
  getTeamBenefits
};
