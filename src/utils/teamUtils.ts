
import { UserTeam } from '@/types/user';

export const getTeamColor = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'text-red-500';
    case 'green':
      return 'text-green-500';
    case 'blue':
      return 'text-blue-500';
    default:
      return 'text-gray-500';
  }
};

export const getTeamBgColor = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'bg-red-500';
    case 'green':
      return 'bg-green-500';
    case 'blue':
      return 'bg-blue-500';
    default:
      return 'bg-gray-500';
  }
};

export const getTeamBorderColor = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'border-red-500';
    case 'green':
      return 'border-green-500';
    case 'blue':
      return 'border-blue-500';
    default:
      return 'border-gray-500';
  }
};

export const getTeamDisplayName = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'Red Dynasty';
    case 'green':
      return 'Green Vanguard';
    case 'blue':
      return 'Blue Legion';
    default:
      return 'Unknown Team';
  }
};

export const getTeamMotto = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'Wealth Through Aggression';
    case 'green':
      return 'Prosperity Through Innovation';
    case 'blue':
      return 'Power Through Knowledge';
    default:
      return 'No Team Motto';
  }
};

export const getTeamBenefit = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return '5% bonus to all spending power';
    case 'green':
      return '10% discount on all cosmetic purchases';
    case 'blue':
      return 'Exclusive access to special marketplace items';
    default:
      return 'No team benefits';
  }
};

export const getTeamAbsurdStat = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'Members have collectively thrown 342,567 virtual tomatoes';
    case 'green':
      return 'Has planted 45,678 digital trees that produce absolutely nothing';
    case 'blue':
      return 'Members spend an average of 5.3 hours daily staring at leaderboards';
    default:
      return 'No absurd stats available';
  }
};

export const getTeamHistoricalNote = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'Founded by Lord Cashington after a particularly heated bidding war';
    case 'green':
      return 'Established when Lady Emeralda outspent three dukes combined';
    case 'blue':
      return 'Formed when Count Sapphire purchased the entire eastern treasury';
    default:
      return 'No historical notes available';
  }
};

export const getTeamNFTJoke = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'We turn money into digital badges faster than you can say "depreciating asset"';
    case 'green':
      return 'Our NFTs are so exclusive, even we don't know what they do';
    case 'blue':
      return 'We've calculated the exact mathematical formula for FOMO';
    default:
      return 'No NFT jokes available';
  }
};

export const getTeamSecurityGuarantee = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'Your money is perfectly safe with us (terms and conditions apply)';
    case 'green':
      return 'Triple-encrypted with algorithms we made up this morning';
    case 'blue':
      return 'So secure, sometimes even we can't access your funds';
    default:
      return 'No security guarantees available';
  }
};

export const getTeamCryptoRoast = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'At least our digital currency is backed by real money you've wasted';
    case 'green':
      return 'Our blockchain has so many buzzwords, venture capitalists faint';
    case 'blue':
      return 'We've proven spending money on nothing can be intellectually stimulating';
    default:
      return 'No crypto roasts available';
  }
};

export const getAllTeams = (): UserTeam[] => {
  return ['red', 'green', 'blue'];
};
