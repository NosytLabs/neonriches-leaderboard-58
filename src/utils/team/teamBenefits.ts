
import { TeamColor } from '@/types/team';

/**
 * Get a benefit for the team
 * @param team The team to get benefit for
 * @returns The benefit description
 */
export const getTeamBenefit = (team: TeamColor | string | null): string[] => {
  const teamMap: Record<string, string[]> = {
    'red': [
      '+5% Bonus on direct spend-to-rank conversion',
      'Exclusive crimson profile frames',
      'Access to special fire-themed effects'
    ],
    'blue': [
      '+10% Visibility boosts on leaderboard',
      'Sapphire profile decorations',
      'Water-themed animation effects'
    ],
    'green': [
      '+3% Chance of bonus rewards from spending',
      'Nature-themed custom emojis',
      'Emerald crown cosmetic item'
    ],
    'gold': [
      'Access to exclusive gold team cosmetics',
      'Golden profile frames',
      'Special golden name effects'
    ],
    'purple': [
      'Royal titles and special badges',
      'Purple-themed profile highlights',
      'Special throne room access'
    ],
    'none': [
      'No team-specific benefits',
      'Independent progression bonuses',
      'Freedom from team politics'
    ],
    'neutral': [
      'No team-specific benefits',
      'Independent progression bonuses',
      'Freedom from team politics'
    ]
  };
  
  return teamMap[team as string] || teamMap['none'];
};

/**
 * Get a security guarantee for the team
 * @param team The team to get security guarantee for
 * @returns The security guarantee
 */
export const getTeamSecurityGuarantee = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'Protected by the Crimson Guard, our elite spending enforcers',
    'blue': 'Safeguarded by Azure Protocols, the most secure spending algorithm',
    'green': 'Fortune favors the bold, but we still use 256-bit encryption',
    'gold': 'Your gold is secured in our digital treasury vaults',
    'purple': 'Royal protection extends to all your transactions',
    'none': 'Standard platform security applies',
    'neutral': 'Standard platform security applies'
  };
  
  return teamMap[team as string] || 'Standard platform security applies';
};
