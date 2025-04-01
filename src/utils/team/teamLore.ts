
import { TeamColor } from '@/types/team';

/**
 * Get a historical note for the team
 * @param team The team to get historical note for
 * @returns The historical note
 */
export const getTeamHistoricalNote = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'Founded by the first spenders who believed might makes right',
    'blue': 'Established by scholars who saw wealth as a means to enlightenment',
    'green': 'Created by risk-takers who gambled their fortunes for glory',
    'gold': 'The oldest team, founded by the original aristocrats of the platform',
    'purple': 'A secretive cabal formed by the platform\'s earliest investors',
    'none': 'Those who walk their own path, free from team politics',
    'neutral': 'Those who walk their own path, free from team politics'
  };
  
  return teamMap[team as string] || 'Those who walk their own path, free from team politics';
};

/**
 * Get an absurd statistic for the team
 * @param team The team to get statistic for
 * @returns The absurd statistic
 */
export const getTeamAbsurdStat = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'Members spend an average of 3.7x their monthly rent on digital status',
    'blue': 'Collectively written 42 academic papers justifying their spending',
    'green': 'Has won 73% of all team spending competitions through sheer luck',
    'gold': 'Members have spent enough to buy a small island nation',
    'purple': 'Royal members own 87% of all premium cosmetic items',
    'none': 'Independent spenders save 0% by not being in a team',
    'neutral': 'Independent spenders save 0% by not being in a team'
  };
  
  return teamMap[team as string] || 'Independent spenders save 0% by not being in a team';
};
