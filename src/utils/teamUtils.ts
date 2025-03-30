
import { TeamType } from '@/types/user';

/**
 * Gets the color class associated with a team
 */
export const getTeamColor = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'text-royal-crimson';
    case 'green':
      return 'text-royal-gold';
    case 'blue':
      return 'text-royal-navy';
    default:
      return 'text-gray-500';
  }
};

/**
 * Gets the border color class for a team
 */
export const getTeamBorderColor = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'border-royal-crimson';
    case 'green':
      return 'border-royal-gold';
    case 'blue':
      return 'border-royal-navy';
    default:
      return 'border-gray-500';
  }
};

/**
 * Gets the name of a team
 */
export const getTeamName = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'Crimson Court';
    case 'green':
      return 'Golden Order';
    case 'blue':
      return 'Royal Navy';
    default:
      return 'Unaligned';
  }
};

/**
 * Gets the background color class for a team
 */
export const getTeamBackgroundColor = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'bg-royal-crimson/10';
    case 'green':
      return 'bg-royal-gold/10';
    case 'blue':
      return 'bg-royal-navy/10';
    default:
      return 'bg-gray-500/10';
  }
};

/**
 * Gets an historical note about the team
 */
export const getTeamHistoricalNote = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'The Crimson Court, known for their extravagant displays of wealth, originated from the first great spending boom of the realm.';
    case 'green':
      return 'The Golden Order traces its lineage to the founders of the kingdom, who established the first economic principles of nobility through spending.';
    case 'blue':
      return 'The Royal Navy commands respect through calculated contributions, preferring steady strategic investments over flashy expenditures.';
    default:
      return 'Those who remain unaligned often do so by choice, observing the spending wars from the sidelines.';
  }
};

/**
 * Gets the icon name for a team
 */
export const getTeamIcon = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'crown';
    case 'green':
      return 'coins';
    case 'blue':
      return 'anchor';
    default:
      return 'users';
  }
};

/**
 * Gets the team motto
 */
export const getTeamMotto = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'Glory through splendor';
    case 'green':
      return 'Wealth builds legacies';
    case 'blue':
      return 'Strategic spending prevails';
    default:
      return 'The neutral path';
  }
};

/**
 * Gets a benefit associated with the team
 */
export const getTeamBenefit = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return '10% bonus visibility on the leaderboard';
    case 'green':
      return '5% discount on all purchases';
    case 'blue':
      return 'Access to exclusive strategic tools';
    default:
      return 'Freedom from team obligations';
  }
};

/**
 * Gets an absurd statistic about the team
 */
export const getTeamAbsurdStat = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'Members have collectively spent enough to buy a small island nation';
    case 'green':
      return 'Has funded the planting of 10,000 money trees';
    case 'blue':
      return 'Spreadsheets created by members could circle the globe twice';
    default:
      return 'Has observed 500,000 spending decisions without participating';
  }
};

/**
 * Gets a joke about the team's NFT
 */
export const getTeamNFTJoke = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'Our NFTs are so exclusive, they refuse to be right-clicked';
    case 'green':
      return 'Our NFTs appreciate faster than our members' egos';
    case 'blue':
      return 'Our NFTs come with mathematical proofs of their worthlessness';
    default:
      return 'What's an NFT? We prefer actual art';
  }
};

/**
 * Gets a security guarantee for the team
 */
export const getTeamSecurityGuarantee = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'Protected by royal guards who definitely won't steal your jewels';
    case 'green':
      return 'Secured by expert accountants who've never lost a penny (that was reported)';
    case 'blue':
      return 'Defended by an armada of ships that exist only on paper';
    default:
      return 'No security needed when you have nothing to lose';
  }
};

/**
 * Gets a crypto roast for the team
 */
export const getTeamCryptoRoast = (team: TeamType): string => {
  switch (team) {
    case 'red':
      return 'We'd invest in luna NFTs if they looked fancy enough';
    case 'green':
      return 'We invented buy high, sell low before it was cool';
    case 'blue':
      return 'We have 17 whitepapers explaining why our losses are actually strategic';
    default:
      return 'We still use cash and sleep well at night';
  }
};

/**
 * Gets a title based on gender
 */
export const getGenderTitle = (gender: string): string => {
  switch (gender) {
    case 'king':
      return 'His Majesty';
    case 'queen':
      return 'Her Majesty';
    case 'jester':
      return 'The Honorable Fool';
    case 'noble':
      return 'Noble';
    case 'male':
      return 'Sir';
    case 'female':
      return 'Lady';
    default:
      return 'Noble';
  }
};

/**
 * Gets an emoji based on gender
 */
export const getGenderEmoji = (gender: string): string => {
  switch (gender) {
    case 'king':
      return '👑';
    case 'queen':
      return '👸';
    case 'jester':
      return '🃏';
    case 'noble':
      return '🏰';
    case 'male':
      return '👨';
    case 'female':
      return '👩';
    default:
      return '👤';
  }
};

/**
 * Gets initials from a user's name
 */
export const getInitials = (name: string): string => {
  if (!name) return '?';
  
  const parts = name.trim().split(' ');
  
  if (parts.length === 1) {
    return name.substring(0, 2).toUpperCase();
  }
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};
