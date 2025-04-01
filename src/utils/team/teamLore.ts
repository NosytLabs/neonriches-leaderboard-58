
import { TeamColor } from '@/types/team';
import { asTeamColor } from './teamColors';

/**
 * Get a historical note for a team
 * @param team The team to get historical note for
 * @returns The historical note
 */
export function getTeamHistoricalNote(team: TeamColor | string | null | undefined): string {
  const teamColor = asTeamColor(team as TeamColor);
  
  const noteMap: Record<TeamColor, string> = {
    'red': 'Founded by a wealthy merchant who believed aggression in spending led to wealth dominance.',
    'blue': 'Established by a consortium of academics who realized money speaks louder than knowledge.',
    'green': 'Created by visionary investors who saw potential in sustainable spending practices.',
    'gold': 'Formed by royalty who wanted to ensure the aristocracy always topped the leaderboards.',
    'purple': 'A secret society of elites who emerged from the shadows to claim their rightful place.',
    'none': 'The path of the independent has existed since the dawn of commerce itself.',
    'neutral': 'The path of the independent has existed since the dawn of commerce itself.'
  };
  
  return noteMap[teamColor];
}

/**
 * Get an absurd statistic for a team
 * @param team The team to get absurd stat for
 * @returns The absurd statistic
 */
export function getTeamAbsurdStat(team: TeamColor | string | null | undefined): string {
  const teamColor = asTeamColor(team as TeamColor);
  
  const statMap: Record<TeamColor, string> = {
    'red': '93% of Crimson Knights members have accidentally set fire to money while trying to spend it faster.',
    'blue': 'Azure Guardians members spend an average of 42 minutes analyzing the optimal time to click the "deposit" button.',
    'green': 'Emerald Seekers have collectively grown enough virtual trees to offset the carbon footprint of all cryptocurrency mining.',
    'gold': 'Golden Crown members have spent more on golden toilet paper than most countries' annual GDP.',
    'purple': 'Royal Purple members practice spending in their sleep and report 37% more spending-related dreams.',
    'none': 'Independent spenders are 76% more likely to claim they "meant to do that" after accidental purchases.',
    'neutral': 'Independent spenders are 76% more likely to claim they "meant to do that" after accidental purchases.'
  };
  
  return statMap[teamColor];
}

export default {
  getTeamHistoricalNote,
  getTeamAbsurdStat
};
