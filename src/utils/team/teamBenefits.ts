
import { TeamColor } from '@/types/team';
import { asTeamColor } from './teamColors';

/**
 * Get the benefits for a team
 * @param team The team to get benefits for
 * @returns Array of team benefits
 */
export function getTeamBenefit(team: TeamColor | string | null | undefined): string[] {
  const teamColor = asTeamColor(team as TeamColor);
  
  const benefitMap: Record<TeamColor, string[]> = {
    'red': [
      'Bonus rank points for aggressive spending',
      'Exclusive access to combat-themed mockery options',
      'Crimson profile badge and decorations',
      'Special discount on "Royal Duel" actions'
    ],
    'blue': [
      'Reduced cooling periods between mockery actions',
      'Access to special analytical spending tools',
      'Azure profile badge and decorations',
      'Special discount on "Royal Silence" actions'
    ],
    'green': [
      'Compound interest on rank points (5% annually)',
      'Special team-only investment packages',
      'Emerald profile badge and decorations',
      'Special discount on "Growth Promotion" actions'
    ],
    'gold': [
      'Royal exposure boost on the leaderboard',
      'Unique golden frame around profile picture',
      'Gold profile badge and decorations',
      'Special discount on "Crown" mockery actions'
    ],
    'purple': [
      'Ability to create special team challenges',
      'Exclusive purple royal aesthetic options',
      'Amethyst profile badge and decorations',
      'Special discount on "Court Jester" actions'
    ],
    'none': [
      'Complete independence from team politics',
      'Unique lone wolf profile indicators',
      'Special discount on "Rogue" actions',
      'Ability to join any team event as a mercenary'
    ],
    'neutral': [
      'Complete independence from team politics',
      'Unique lone wolf profile indicators',
      'Special discount on "Rogue" actions',
      'Ability to join any team event as a mercenary'
    ]
  };
  
  return benefitMap[teamColor];
}

/**
 * Get the security guarantee for a team
 * @param team The team to get security guarantee for
 * @returns The team security guarantee
 */
export function getTeamSecurityGuarantee(team: TeamColor | string | null | undefined): string {
  const teamColor = asTeamColor(team as TeamColor);
  
  const securityMap: Record<TeamColor, string> = {
    'red': 'Our security is as strong as our spending: relentless and unwavering.',
    'blue': 'Protected by the most intellectual encryption algorithms money can buy.',
    'green': 'Our security grows stronger with every contribution, like a well-tended garden.',
    'gold': 'Royal-grade protection that shines as bright as our golden coffers.',
    'purple': 'Security fit for royalty, with enough layers to make an onion jealous.',
    'none': 'Independent security systems tailored to the lone spender.',
    'neutral': 'Independent security systems tailored to the lone spender.'
  };
  
  return securityMap[teamColor];
}

export default {
  getTeamBenefit,
  getTeamSecurityGuarantee
};
