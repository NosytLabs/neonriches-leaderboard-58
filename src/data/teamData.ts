
import { TeamColor, TeamData } from '@/types/team';
import { 
  getTeamName, 
  getTeamMotto 
} from '@/utils/team/teamInfo';
import { 
  getTeamBenefit, 
  getTeamSecurityGuarantee 
} from '@/utils/team/teamBenefits';
import { 
  getTeamHistoricalNote, 
  getTeamAbsurdStat 
} from '@/utils/team/teamLore';
import { 
  getTeamNFTJoke, 
  getTeamCryptoRoast 
} from '@/utils/team/teamJokes';
import { getTeamColor } from '@/utils/team/teamColors';

// Create mock team data
export const teams: Record<TeamColor, TeamData> = {
  'red': {
    id: 'red',
    name: getTeamName('red'),
    color: 'red',
    description: 'The Crimson Knights are known for their aggressive spending strategies and bold declarations of wealth.',
    members: 1254,
    totalContribution: 842650,
    rank: 2,
    emblemUrl: '/assets/emblems/red-emblem.png',
    motto: getTeamMotto('red'),
    benefits: getTeamBenefit('red'),
    securityGuarantee: getTeamSecurityGuarantee('red'),
    absurdStat: getTeamAbsurdStat('red'),
    historicalNote: getTeamHistoricalNote('red'),
    nftJoke: getTeamNFTJoke('red'),
    cryptoRoast: getTeamCryptoRoast('red')
  },
  'blue': {
    id: 'blue',
    name: getTeamName('blue'),
    color: 'blue',
    description: 'The Azure Guardians approach spending with intellectual precision, analyzing every dollar for maximum rank efficiency.',
    members: 1876,
    totalContribution: 925430,
    rank: 1,
    emblemUrl: '/assets/emblems/blue-emblem.png',
    motto: getTeamMotto('blue'),
    benefits: getTeamBenefit('blue'),
    securityGuarantee: getTeamSecurityGuarantee('blue'),
    absurdStat: getTeamAbsurdStat('blue'),
    historicalNote: getTeamHistoricalNote('blue'),
    nftJoke: getTeamNFTJoke('blue'),
    cryptoRoast: getTeamCryptoRoast('blue')
  },
  'green': {
    id: 'green',
    name: getTeamName('green'),
    color: 'green',
    description: 'The Emerald Seekers believe in sustainable spending, focusing on steady rank growth through consistent contributions.',
    members: 1432,
    totalContribution: 683200,
    rank: 3,
    emblemUrl: '/assets/emblems/green-emblem.png',
    motto: getTeamMotto('green'),
    benefits: getTeamBenefit('green'),
    securityGuarantee: getTeamSecurityGuarantee('green'),
    absurdStat: getTeamAbsurdStat('green'),
    historicalNote: getTeamHistoricalNote('green'),
    nftJoke: getTeamNFTJoke('green'),
    cryptoRoast: getTeamCryptoRoast('green')
  },
  'gold': {
    id: 'gold',
    name: getTeamName('gold'),
    color: 'gold',
    description: 'The Golden Crown represents the aristocracy of spending, where status and visible opulence are paramount.',
    members: 876,
    totalContribution: 576890,
    rank: 4,
    emblemUrl: '/assets/emblems/gold-emblem.png',
    motto: getTeamMotto('gold'),
    benefits: getTeamBenefit('gold'),
    securityGuarantee: getTeamSecurityGuarantee('gold'),
    absurdStat: getTeamAbsurdStat('gold'),
    historicalNote: getTeamHistoricalNote('gold'),
    nftJoke: getTeamNFTJoke('gold'),
    cryptoRoast: getTeamCryptoRoast('gold')
  },
  'purple': {
    id: 'purple',
    name: getTeamName('purple'),
    color: 'purple',
    description: 'The Royal Purple is an exclusive team of elite spenders who value creativity and flair in their contributions.',
    members: 643,
    totalContribution: 512340,
    rank: 5,
    emblemUrl: '/assets/emblems/purple-emblem.png',
    motto: getTeamMotto('purple'),
    benefits: getTeamBenefit('purple'),
    securityGuarantee: getTeamSecurityGuarantee('purple'),
    absurdStat: getTeamAbsurdStat('purple'),
    historicalNote: getTeamHistoricalNote('purple'),
    nftJoke: getTeamNFTJoke('purple'),
    cryptoRoast: getTeamCryptoRoast('purple')
  },
  'none': {
    id: 'none',
    name: getTeamName('none'),
    color: 'none',
    description: 'Independent spenders who choose to forge their own path without team allegiance.',
    members: 2345,
    totalContribution: 432180,
    rank: 6,
    emblemUrl: '/assets/emblems/neutral-emblem.png',
    motto: getTeamMotto('none'),
    benefits: getTeamBenefit('none'),
    securityGuarantee: getTeamSecurityGuarantee('none'),
    absurdStat: getTeamAbsurdStat('none'),
    historicalNote: getTeamHistoricalNote('none'),
    nftJoke: getTeamNFTJoke('none'),
    cryptoRoast: getTeamCryptoRoast('none')
  },
  'neutral': {
    id: 'neutral',
    name: getTeamName('neutral'),
    color: 'neutral',
    description: 'Neutral spenders who have yet to choose a team allegiance.',
    members: 2345,
    totalContribution: 432180,
    rank: 6,
    emblemUrl: '/assets/emblems/neutral-emblem.png',
    motto: getTeamMotto('neutral'),
    benefits: getTeamBenefit('neutral'),
    securityGuarantee: getTeamSecurityGuarantee('neutral'),
    absurdStat: getTeamAbsurdStat('neutral'),
    historicalNote: getTeamHistoricalNote('neutral'),
    nftJoke: getTeamNFTJoke('neutral'),
    cryptoRoast: getTeamCryptoRoast('neutral')
  }
};

/**
 * Get team data by id
 * @param teamId The team id to look up
 * @returns The team data
 */
export function getTeamById(teamId: TeamColor): TeamData {
  return teams[teamId] || teams.neutral;
}

/**
 * Get all available teams
 * @returns Array of team data
 */
export function getAllTeams(): TeamData[] {
  return Object.values(teams);
}

export default {
  teams,
  getTeamById,
  getAllTeams
};
