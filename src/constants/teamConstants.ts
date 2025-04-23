
import { TeamColor } from '@/types/team';

export const TEAM_DISPLAY_NAMES: Record<TeamColor, string> = {
  'red': 'Royal Order of Reckless Spending',
  'blue': 'Cobalt Credit Cartel',
  'green': 'Emerald Exchequer Cabaret',
  'gold': 'Golden Dynasty',
  'purple': 'Purple Reign',
  'silver': 'Silver Society',
  'bronze': 'Bronze Brigade',
  'neutral': 'Unaffiliated',
  'none': 'No Team'
};

export const TEAM_ABBREVIATIONS: Record<TeamColor, string> = {
  'red': 'RORS',
  'blue': 'CCC',
  'green': 'EEC',
  'gold': 'GD',
  'purple': 'PR',
  'silver': 'SS',
  'bronze': 'BB',
  'neutral': 'UN',
  'none': 'NT'
};

export const TEAM_MOTTOS: Record<string, string> = {
  'red': 'Glory through Spending!',
  'green': 'Wealth is Power!',
  'blue': 'Strategic Extravagance!',
  'gold': 'All that glitters is gold!',
  'purple': 'Royalty in every transaction!',
  'default': 'Choose your path to glory!'
};
