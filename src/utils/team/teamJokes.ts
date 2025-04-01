
import { TeamColor } from '@/types/team';

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
