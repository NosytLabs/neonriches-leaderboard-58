
import { TeamType, GenderType } from '@/types/user';

/**
 * Get the color class for a team
 */
export const getTeamColor = (team: TeamType | null): string => {
  switch (team) {
    case 'red':
      return 'text-red-500';
    case 'green':
      return 'text-green-500';
    case 'blue':
      return 'text-blue-500';
    default:
      return 'text-gray-400';
  }
};

/**
 * Get the border color class for a team
 */
export const getTeamBorderColor = (team: TeamType | null): string => {
  switch (team) {
    case 'red':
      return 'border-red-500';
    case 'green':
      return 'border-green-500';
    case 'blue':
      return 'border-blue-500';
    default:
      return 'border-gray-400';
  }
};

/**
 * Get the display name for a team
 */
export const getTeamName = (team: TeamType | null): string => {
  switch (team) {
    case 'red':
      return 'Purple Dynasty';
    case 'green':
      return 'Gold Dominion';
    case 'blue':
      return 'Azure Order';
    default:
      return 'Unaligned';
  }
};

/**
 * Get the initials for a username
 */
export const getInitials = (username: string): string => {
  if (!username) return '';
  
  const parts = username.split(/[^a-zA-Z0-9]/);
  const filteredParts = parts.filter(part => part.length > 0);
  
  if (filteredParts.length === 0) return '';
  if (filteredParts.length === 1) {
    return filteredParts[0].substring(0, 2).toUpperCase();
  }
  
  return (filteredParts[0].charAt(0) + filteredParts[1].charAt(0)).toUpperCase();
};

/**
 * Get the title for a gender
 */
export const getGenderTitle = (gender: GenderType | null): string => {
  switch (gender) {
    case 'king':
      return 'His Royal Highness';
    case 'queen':
      return 'Her Royal Highness';
    case 'jester':
      return 'The Court Jester';
    default:
      return 'Noble';
  }
};

/**
 * Get the emoji for a gender
 */
export const getGenderEmoji = (gender: GenderType | null): string => {
  switch (gender) {
    case 'king':
      return '👑';
    case 'queen':
      return '👸';
    case 'jester':
      return '🃏';
    default:
      return '🏰';
  }
};

/**
 * Get the team motto
 */
export const getTeamMotto = (team: TeamType | null): string => {
  switch (team) {
    case 'red':
      return "Wealth is power, and power is our destiny.";
    case 'green':
      return "Golden opportunities await those who pay their way.";
    case 'blue':
      return "In spending we trust, in wealth we prosper.";
    default:
      return "All wealth flows to those who embrace the system.";
  }
};

/**
 * Get the team benefit description
 */
export const getTeamBenefit = (team: TeamType | null): string => {
  switch (team) {
    case 'red':
      return "Access to exclusive digital titles and premium profile effects.";
    case 'green':
      return "Enhanced visibility on the leaderboard and special animations.";
    case 'blue':
      return "Priority access to limited-time spending opportunities.";
    default:
      return "Basic platform access with standard features.";
  }
};

/**
 * Get an absurd stat about the team
 */
export const getTeamAbsurdStat = (team: TeamType | null): string => {
  switch (team) {
    case 'red':
      return "Members of the Purple Dynasty have collectively spent enough to buy a small island nation.";
    case 'green':
      return "Gold Dominion users average 17.3 hours staring at their rank position daily.";
    case 'blue':
      return "Azure Order members believe their spending directly influences global financial markets.";
    default:
      return "Unaligned users are 73% more likely to eventually surrender to the allure of spending.";
  }
};

/**
 * Get a joke about the team's NFT
 */
export const getTeamNFTJoke = (team: TeamType | null): string => {
  switch (team) {
    case 'red':
      return "Our exclusive Purple Crown NFT is absolutely worthless, but it costs more than your car!";
    case 'green':
      return "Own a piece of digital nothing with our Golden Coin NFT - only $10,000!";
    case 'blue':
      return "Our Azure Seal NFT is guaranteed to be unique, just like the other 10,000 we minted!";
    default:
      return "Join a team to unlock the privilege of buying overpriced digital assets!";
  }
};

/**
 * Get the team's fake security guarantee
 */
export const getTeamSecurityGuarantee = (team: TeamType | null): string => {
  switch (team) {
    case 'red':
      return "Your funds are secured by our proprietary 'Trust Us' technology.";
    case 'green':
      return "128-bit encryption that definitely won't be obsolete by the time you read this.";
    case 'blue':
      return "Security audited by our cousin who once read a book about computers.";
    default:
      return "We promise not to lose your money (terms and conditions apply).";
  }
};

/**
 * Get a crypto roast for the team
 */
export const getTeamCryptoRoast = (team: TeamType | null): string => {
  switch (team) {
    case 'red':
      return "Just like our crypto investments, your rank will be worth nothing in a few years!";
    case 'green':
      return "Our blockchain is so efficient it only wastes the electricity of a small country!";
    case 'blue':
      return "We're just three market crashes away from profitability!";
    default:
      return "Crypto: Making gambling seem like a sensible investment strategy since 2009.";
  }
};
