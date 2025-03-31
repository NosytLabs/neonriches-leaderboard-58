
import { TeamColor } from '@/types/team';

/**
 * Get the CSS color class for a team
 */
export function getTeamColor(team: TeamColor): string {
  switch (team) {
    case 'red':
      return 'text-red-500 border-red-500';
    case 'blue':
      return 'text-blue-500 border-blue-500';
    case 'green':
      return 'text-green-500 border-green-500';
    case 'gold':
      return 'text-yellow-500 border-yellow-500';
    case 'purple':
      return 'text-purple-500 border-purple-500';
    case 'neutral':
      return 'text-gray-400 border-gray-400';
    case 'none':
    default:
      return 'text-gray-400 border-gray-400';
  }
}

/**
 * Get the CSS border color class for a team
 */
export function getTeamBorderColor(team: TeamColor): string {
  switch (team) {
    case 'red':
      return 'border-red-500';
    case 'blue':
      return 'border-blue-500';
    case 'green':
      return 'border-green-500';
    case 'gold':
      return 'border-yellow-500';
    case 'purple':
      return 'border-purple-500';
    case 'neutral':
      return 'border-gray-400';
    case 'none':
    default:
      return 'border-gray-400';
  }
}

/**
 * Get the display name for a team
 */
export function getTeamName(team: TeamColor): string {
  switch (team) {
    case 'red':
      return 'Red Dynasty';
    case 'blue':
      return 'Blue Monarchy';
    case 'green':
      return 'Green Kingdom';
    case 'gold':
      return 'Gold Empire';
    case 'purple':
      return 'Purple Realm';
    case 'neutral':
      return 'Neutral Territory';
    case 'none':
    default:
      return 'Unaffiliated';
  }
}

/**
 * Get motto for a team
 */
export function getTeamMotto(team: TeamColor): string {
  switch (team) {
    case 'red':
      return "Blood and Gold Above All";
    case 'blue':
      return "Honor Through Knowledge and Service";
    case 'green':
      return "Fortune Favors the Bold";
    case 'gold':
      return "Glory Through Golden Prosperity";
    case 'purple':
      return "Power Through Royal Bloodlines";
    case 'neutral':
      return "Balance in All Things";
    case 'none':
    default:
      return "Status Through Spending";
  }
}

/**
 * Get benefit description for a team
 */
export function getTeamBenefit(team: TeamColor): string {
  switch (team) {
    case 'red':
      return "10% bonus on all status gains";
    case 'blue':
      return "5% discount on all purchases";
    case 'green':
      return "Extra weekly rewards";
    case 'gold':
      return "Exclusive golden cosmetics";
    case 'purple':
      return "Royal protection from mockery";
    case 'neutral':
      return "Balanced benefits across all areas";
    case 'none':
    default:
      return "No special benefits";
  }
}

/**
 * Get security guarantee for a team
 */
export function getTeamSecurityGuarantee(team: TeamColor): string {
  switch (team) {
    case 'red':
      return "Protected by the Royal Guard";
    case 'blue':
      return "Secured by Naval Intelligence";
    case 'green':
      return "Guarded by Forest Sentinels";
    case 'gold':
      return "Defended by Treasury Knights";
    case 'purple':
      return "Shielded by Arcane Wards";
    case 'neutral':
      return "Balanced defenses on all fronts";
    case 'none':
    default:
      return "No special protection";
  }
}

/**
 * Safely converts any string to TeamColor type
 */
export function asTeamColor(team: string | TeamColor | null | undefined): TeamColor {
  if (!team) return 'none';
  
  // Check if the string is a valid TeamColor
  const validTeamColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
  if (validTeamColors.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  // Default to 'none' if not valid
  return 'none';
}

/**
 * Get the display name for a team
 */
export function getTeamDisplayName(team: string | TeamColor): string {
  return getTeamName(asTeamColor(team));
}

/**
 * Get the CSS color class for a team
 */
export function getTeamColorClass(team: string | TeamColor): string {
  return getTeamColor(asTeamColor(team));
}

/**
 * Get an absurd fact about a team
 */
export function getTeamAbsurdStat(team: TeamColor): string {
  switch (team) {
    case 'red':
      return "Members drink 30% more wine than other teams";
    case 'blue':
      return "Has collectively read over 1 million books";
    case 'green':
      return "Plants a virtual tree for every $100 spent";
    case 'gold':
      return "Members own 45% of all digital gold in existence";
    case 'purple':
      return "Can trace lineage back to digital royalty";
    case 'neutral':
      return "Perfectly balanced, as all things should be";
    case 'none':
    default:
      return "Spends more on status than on food";
  }
}

/**
 * Get a historical note about a team
 */
export function getTeamHistoricalNote(team: TeamColor): string {
  switch (team) {
    case 'red':
      return "Founded during the Great Digital War of '22";
    case 'blue':
      return "Established through a royal decree in the early days";
    case 'green':
      return "Formed as an alliance of eco-friendly spenders";
    case 'gold':
      return "Created by the merger of three wealthy houses";
    case 'purple':
      return "Descended from the original royal coders";
    case 'neutral':
      return "Arose as a balanced alternative to the extremes";
    case 'none':
    default:
      return "No historical significance";
  }
}

/**
 * Get an NFT-related joke about a team
 */
export function getTeamNFTJoke(team: TeamColor): string {
  switch (team) {
    case 'red':
      return "Their NFTs are so hot they keep setting wallets on fire";
    case 'blue':
      return "Their NFTs come with a free degree in art history";
    case 'green':
      return "Their NFTs actually grow if you water them";
    case 'gold':
      return "Their NFTs appreciate faster than their members' egos";
    case 'purple':
      return "Their NFTs come with digital servants included";
    case 'neutral':
      return "Their NFTs are both good and bad investments simultaneously";
    case 'none':
    default:
      return "What NFTs? They spent it all on status";
  }
}

/**
 * Get a crypto roast about a team
 */
export function getTeamCryptoRoast(team: TeamColor): string {
  switch (team) {
    case 'red':
      return "They think 'staking' means putting a flag on the blockchain";
    case 'blue':
      return "They have a white paper for everything, even their bathroom breaks";
    case 'green':
      return "They mine crypto with stationary bikes to be eco-friendly";
    case 'gold':
      return "They bought the dip so many times they're now out of chips";
    case 'purple':
      return "They don't HODL, they have servants to HODL for them";
    case 'neutral':
      return "They diversify so much their portfolio is just the market average";
    case 'none':
    default:
      return "They think a cold wallet is just a refrigerated leather pouch";
  }
}
