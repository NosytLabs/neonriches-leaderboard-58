
// Re-export all team utility functions from their respective files
import { TeamColor } from '@/types/team';
import { asTeamColor, getTeamColor, getTeamBorderColor } from './team/teamColors';
import { getTeamName, getTeamDisplayName, getTeamMotto } from './team/teamInfo';
import { getTeamBenefit, getTeamSecurityGuarantee } from './team/teamBenefits';
import { getTeamHistoricalNote, getTeamAbsurdStat } from './team/teamLore';
import { getTeamNFTJoke, getTeamCryptoRoast } from './team/teamJokes';

// Export all team utilities
export {
  asTeamColor,
  getTeamColor,
  getTeamBorderColor,
  getTeamName,
  getTeamDisplayName,
  getTeamMotto,
  getTeamBenefit,
  getTeamSecurityGuarantee,
  getTeamHistoricalNote,
  getTeamAbsurdStat,
  getTeamNFTJoke,
  getTeamCryptoRoast
};

// Backwards compatibility: Export the color class getter (same as getTeamColor)
export const getTeamColorClass = getTeamColor;
