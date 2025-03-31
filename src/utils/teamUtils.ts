
import { TeamColor } from '@/types/user-consolidated';

/**
 * Convert a string to a TeamColor type if valid, otherwise return a default
 * @param team The team string to convert
 * @returns A valid TeamColor value
 */
export const asTeamColor = (team: TeamColor | string | null): TeamColor => {
  const validTeams: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
  
  if (team && validTeams.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  return 'neutral';
};

/**
 * Get the text and background color for a team
 * @param team The team to get color for
 * @returns CSS classes for the team color
 */
export const getTeamColor = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'text-red-400 bg-red-500/20',
    'blue': 'text-blue-400 bg-blue-500/20',
    'green': 'text-green-400 bg-green-500/20',
    'gold': 'text-yellow-400 bg-yellow-500/20',
    'purple': 'text-purple-400 bg-purple-500/20',
    'none': 'text-gray-400 bg-gray-500/20',
    'neutral': 'text-gray-400 bg-gray-500/20'
  };
  
  return teamMap[team as string] || 'text-gray-400 bg-gray-500/20';
};

/**
 * Get the display name for a team
 * @param team The team to get name for
 * @returns The display name for the team
 */
export const getTeamName = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'Crimson',
    'blue': 'Azure',
    'green': 'Emerald',
    'gold': 'Gold',
    'purple': 'Royal',
    'none': 'Neutral',
    'neutral': 'Neutral'
  };
  
  return teamMap[team as string] || 'Neutral';
};

/**
 * Get the display name for a team
 * @param team The team to get name for
 * @returns The display name for the team
 */
export const getTeamDisplayName = getTeamName;

/**
 * Get the color class for a team
 * @param team The team to get color class for
 * @returns CSS class for the team color
 */
export const getTeamColorClass = getTeamColor;

/**
 * Get the border color for a team
 * @param team The team to get border color for
 * @returns CSS border color class for the team
 */
export const getTeamBorderColor = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'border-red-500/30',
    'blue': 'border-blue-500/30',
    'green': 'border-green-500/30',
    'gold': 'border-yellow-500/30',
    'purple': 'border-purple-500/30',
    'none': 'border-gray-500/30',
    'neutral': 'border-gray-500/30'
  };
  
  return teamMap[team as string] || 'border-gray-500/30';
};

/**
 * Get a team motto
 * @param team The team to get motto for
 * @returns The motto for the team
 */
export const getTeamMotto = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'Blood and Gold Above All',
    'blue': 'Honor Through Knowledge and Service',
    'green': 'Fortune Favors the Bold',
    'gold': 'Glory Through Golden Prosperity',
    'purple': 'Power Through Royal Bloodlines',
    'none': 'Status Through Spending',
    'neutral': 'Status Through Spending'
  };
  
  return teamMap[team as string] || 'Status Through Spending';
};

/**
 * Get a benefit for the team
 * @param team The team to get benefit for
 * @returns The benefit description
 */
export const getTeamBenefit = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': '+5% Bonus on direct spend-to-rank conversion',
    'blue': '+10% Visibility boosts on leaderboard',
    'green': '+3% Chance of bonus rewards from spending',
    'gold': 'Access to exclusive gold team cosmetics',
    'purple': 'Royal titles and special badges',
    'none': 'No team-specific benefits',
    'neutral': 'No team-specific benefits'
  };
  
  return teamMap[team as string] || 'No team-specific benefits';
};

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

/**
 * Get an NFT-related joke for the team
 * @param team The team to get joke for
 * @returns The NFT joke
 */
export const getTeamNFTJoke = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'Our NFTs are literally on fire (this is not financial advice)',
    'blue': 'We've proven mathematically that our NFTs will be worth more (peer review pending)',
    'green': 'Our NFTs have a 50% chance of being worth something someday!',
    'gold': 'Gold team NFTs are backed by digital gold (which is backed by nothing)',
    'purple': 'Royal NFTs come with a certificate of authenticity (also an NFT)',
    'none': 'No team? No problem! Solo NFTs are also completely worthless',
    'neutral': 'No team? No problem! Solo NFTs are also completely worthless'
  };
  
  return teamMap[team as string] || 'No team? No problem! Solo NFTs are also completely worthless';
};

/**
 * Get a cryptocurrency roast for the team
 * @param team The team to get roast for
 * @returns The crypto roast
 */
export const getTeamCryptoRoast = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'Red team: putting the "burning" in burning through crypto since 2023',
    'blue': 'Blue team thinks a white paper makes their spending intellectually superior',
    'green': 'Green team: gambling their crypto away faster than a faulty smart contract',
    'gold': 'Gold team: converting real gold into fake gold since inception',
    'purple': 'Royal team believes their crypto has divine right to rule your wallet',
    'none': 'No team is the crypto equivalent of "I'm just holding for the technology"',
    'neutral': 'No team is the crypto equivalent of "I'm just holding for the technology"'
  };
  
  return teamMap[team as string] || 'No team is the crypto equivalent of "I'm just holding for the technology"';
};
