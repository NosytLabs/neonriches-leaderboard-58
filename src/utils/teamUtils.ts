
import { TeamColor, TeamType } from '@/types/team';

/**
 * Get the display name for a team
 * @param team The team color/id
 * @returns The human-readable team name
 */
export function getTeamName(team: TeamColor): string {
  const teamNames: Record<string, string> = {
    'red': 'Crimson Order',
    '#dc2626': 'Crimson Order',
    'blue': 'Azure Legion',
    '#2563eb': 'Azure Legion',
    'green': 'Emerald Dynasty',
    '#16a34a': 'Emerald Dynasty',
    'gold': 'Golden Empire',
    '#eab308': 'Golden Empire',
    'purple': 'Royal Court',
    '#9333ea': 'Royal Court',
    'none': 'Unaligned',
    '#6b7280': 'Unaligned',
    'neutral': 'Neutral'
  };

  return teamNames[team] || 'Neutral';
}

/**
 * Get the CSS color class for a team
 * @param team The team color/id
 * @returns CSS class for the team color
 */
export function getTeamColor(team: TeamColor): string {
  const colorClasses: Record<string, string> = {
    'red': 'text-red-600',
    '#dc2626': 'text-red-600',
    'blue': 'text-blue-600',
    '#2563eb': 'text-blue-600', 
    'green': 'text-green-600',
    '#16a34a': 'text-green-600',
    'gold': 'text-yellow-500',
    '#eab308': 'text-yellow-500',
    'purple': 'text-purple-600',
    '#9333ea': 'text-purple-600',
    'none': 'text-gray-400',
    '#6b7280': 'text-gray-400',
    'neutral': 'text-gray-400'
  };

  return colorClasses[team] || 'text-gray-400';
}

/**
 * Get the CSS border color class for a team
 * @param team The team color/id
 * @returns CSS class for the team border
 */
export function getTeamBorderColor(team: TeamColor): string {
  const borderClasses: Record<string, string> = {
    'red': 'border-red-600/70',
    '#dc2626': 'border-red-600/70',
    'blue': 'border-blue-600/70',
    '#2563eb': 'border-blue-600/70',
    'green': 'border-green-600/70',
    '#16a34a': 'border-green-600/70',
    'gold': 'border-yellow-500/70',
    '#eab308': 'border-yellow-500/70',
    'purple': 'border-purple-600/70',
    '#9333ea': 'border-purple-600/70',
    'none': 'border-gray-400/70',
    '#6b7280': 'border-gray-400/70',
    'neutral': 'border-gray-400/70'
  };

  return borderClasses[team] || 'border-gray-400/70';
}

/**
 * Get the raw color value for a team
 * @param team The team color/id
 * @returns HEX color code
 */
export function getTeamRawColor(team: TeamColor): string {
  const rawColors: Record<string, string> = {
    'red': '#dc2626',
    '#dc2626': '#dc2626',
    'blue': '#2563eb',
    '#2563eb': '#2563eb',
    'green': '#16a34a',
    '#16a34a': '#16a34a',
    'gold': '#eab308',
    '#eab308': '#eab308',
    'purple': '#9333ea',
    '#9333ea': '#9333ea',
    'none': '#6b7280',
    '#6b7280': '#6b7280',
    'neutral': '#6b7280'
  };

  return rawColors[team] || '#6b7280';
}

/**
 * Safely converts any string to TeamColor type
 * This provides a safeguard for when we receive team values as strings
 */
export function asTeamColor(team: string | TeamColor | null | undefined): TeamColor {
  if (!team) return 'none';
  
  // Check if the string is a valid TeamColor
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral',
    '#dc2626', '#2563eb', '#16a34a', '#eab308', '#9333ea', '#6b7280'
  ];
  
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
 * Get team motto from team data
 */
export function getTeamMotto(team: TeamColor): string {
  const mottos: Record<TeamColor, string> = {
    'red': "Victory through strength",
    '#dc2626': "Victory through strength",
    'blue': "Knowledge is power",
    '#2563eb': "Knowledge is power",
    'green': "Growth leads to prosperity",
    '#16a34a': "Growth leads to prosperity",
    'gold': "Wealth brings glory",
    '#eab308': "Wealth brings glory",
    'purple': "Rule with wisdom",
    '#9333ea': "Rule with wisdom",
    'none': "Free from allegiance",
    '#6b7280': "Free from allegiance",
    'neutral': "Balance in all things"
  };
  
  return mottos[team] || "Choose your path";
}

/**
 * Get team benefit description
 */
export function getTeamBenefit(team: TeamColor): string {
  const benefits: Record<TeamColor, string> = {
    'red': "10% bonus to all attack actions",
    '#dc2626': "10% bonus to all attack actions",
    'blue': "15% reduction in cooldown times",
    '#2563eb': "15% reduction in cooldown times",
    'green': "20% higher yield from all investments",
    '#16a34a': "20% higher yield from all investments",
    'gold': "5% rebate on all transactions",
    '#eab308': "5% rebate on all transactions",
    'purple': "Special access to royal privileges",
    '#9333ea': "Special access to royal privileges",
    'none': "No team-specific benefits",
    '#6b7280': "No team-specific benefits",
    'neutral': "Balanced benefits across all actions"
  };
  
  return benefits[team] || "Choose a team to unlock benefits";
}

/**
 * Get team security guarantee
 */
export function getTeamSecurityGuarantee(team: TeamColor): string {
  const guarantees: Record<TeamColor, string> = {
    'red': "Protected by the might of our armies",
    '#dc2626': "Protected by the might of our armies",
    'blue': "Safeguarded by advanced magical wards",
    '#2563eb': "Safeguarded by advanced magical wards",
    'green': "Natural defenses and organic protection",
    '#16a34a': "Natural defenses and organic protection",
    'gold': "The best mercenaries money can buy",
    '#eab308': "The best mercenaries money can buy",
    'purple': "Royal guard protection at all times",
    '#9333ea': "Royal guard protection at all times",
    'none': "You're on your own (but free!)",
    '#6b7280': "You're on your own (but free!)",
    'neutral': "Balanced defensive capabilities"
  };
  
  return guarantees[team] || "Select a team for protection";
}

/**
 * Get team absurd stat
 */
export function getTeamAbsurdStat(team: TeamColor): string {
  const stats: Record<TeamColor, string> = {
    'red': "Can defeat 10,000 enemies with a single war cry",
    '#dc2626': "Can defeat 10,000 enemies with a single war cry",
    'blue': "Libraries contain 4.2 million spellbooks",
    '#2563eb': "Libraries contain 4.2 million spellbooks",
    'green': "Trees grow 500% faster in our territories",
    '#16a34a': "Trees grow 500% faster in our territories",
    'gold': "Treasury contains more gold than 17 other kingdoms combined",
    '#eab308': "Treasury contains more gold than 17 other kingdoms combined",
    'purple': "Royal bloodline traces back to ancient celestial beings",
    '#9333ea': "Royal bloodline traces back to ancient celestial beings",
    'none': "100% free of team bureaucracy",
    '#6b7280': "100% free of team bureaucracy",
    'neutral': "Perfectly balanced in all metrics (supposedly)"
  };
  
  return stats[team] || "Stats loading...";
}

/**
 * Get team historical note
 */
export function getTeamHistoricalNote(team: TeamColor): string {
  const notes: Record<TeamColor, string> = {
    'red': "Founded by the legendary warrior Crimson Blade in the First Age",
    '#dc2626': "Founded by the legendary warrior Crimson Blade in the First Age",
    'blue': "Established by the Archmage Council during the Great Enlightenment",
    '#2563eb': "Established by the Archmage Council during the Great Enlightenment",
    'green': "Grew from humble farming communities into a mighty federation",
    '#16a34a': "Grew from humble farming communities into a mighty federation",
    'gold': "Built on ancient trading routes that connected distant realms",
    '#eab308': "Built on ancient trading routes that connected distant realms",
    'purple': "Ruled by the same dynasty for over 1,000 years",
    '#9333ea': "Ruled by the same dynasty for over 1,000 years",
    'none': "A recent refuge for those seeking independence",
    '#6b7280': "A recent refuge for those seeking independence",
    'neutral': "Historically maintains peace between warring factions"
  };
  
  return notes[team] || "History yet to be written";
}

/**
 * Get team NFT joke
 */
export function getTeamNFTJoke(team: TeamColor): string {
  const jokes: Record<TeamColor, string> = {
    'red': "Our NFTs actually fight your battles for you",
    '#dc2626': "Our NFTs actually fight your battles for you",
    'blue': "NFTs infused with real magical properties (terms apply)",
    '#2563eb': "NFTs infused with real magical properties (terms apply)",
    'green': "Eco-friendly NFTs that plant virtual trees",
    '#16a34a': "Eco-friendly NFTs that plant virtual trees",
    'gold': "NFTs backed by real gold (metaphorically speaking)",
    '#eab308': "NFTs backed by real gold (metaphorically speaking)",
    'purple': "Royal decree: Our NFTs have inherent nobility",
    '#9333ea': "Royal decree: Our NFTs have inherent nobility",
    'none': "Not Falling for This NFTs",
    '#6b7280': "Not Falling for This NFTs",
    'neutral': "NFTs that somehow exist in all chains simultaneously"
  };
  
  return jokes[team] || "Join to unlock exclusive NFT opportunities";
}

/**
 * Get team crypto roast
 */
export function getTeamCryptoRoast(team: TeamColor): string {
  const roasts: Record<TeamColor, string> = {
    'red': "Other chains claim to be fast, but have you seen our warriors' attack speed?",
    '#dc2626': "Other chains claim to be fast, but have you seen our warriors' attack speed?",
    'blue': "While they're still figuring out consensus, we've already reached enlightenment",
    '#2563eb': "While they're still figuring out consensus, we've already reached enlightenment",
    'green': "Their chains die in bear markets, our ecosystem thrives in all seasons",
    '#16a34a': "Their chains die in bear markets, our ecosystem thrives in all seasons",
    'gold': "They call it decentralization, we call it disorganized banking",
    '#eab308': "They call it decentralization, we call it disorganized banking",
    'purple': "The only royal blockchain with actual royalty",
    '#9333ea': "The only royal blockchain with actual royalty",
    'none': "We don't need a blockchain, we have actual chains",
    '#6b7280': "We don't need a blockchain, we have actual chains",
    'neutral': "Blockchains fight for supremacy while we maintain perfect balance"
  };
  
  return roasts[team] || "Choose a team to unlock savage crypto roasts";
}

export default {
  getTeamName,
  getTeamColor,
  getTeamBorderColor,
  getTeamRawColor,
  asTeamColor,
  getTeamDisplayName,
  getTeamColorClass,
  getTeamMotto,
  getTeamBenefit,
  getTeamSecurityGuarantee,
  getTeamAbsurdStat,
  getTeamHistoricalNote,
  getTeamNFTJoke,
  getTeamCryptoRoast
};
