
import { TeamColor, TeamType } from '@/types/mockery-types';

// Get the display name for a team
export function getTeamName(team: TeamColor | TeamType | string): string {
  const teamNames: Record<string, string> = {
    'red': 'Royal Order of Reckless Spending',
    'blue': 'Cobalt Credit Cartel',
    'green': 'Emerald Exchequer Cabaret',
    'gold': 'Golden Elite',
    'purple': 'Amethyst Alliance',
    'none': 'Unaffiliated',
    'neutral': 'Neutral'
  };
  
  return teamNames[team] || 'Unknown Team';
}

// Get the color class for a team
export function getTeamColor(team: TeamColor | TeamType | string): string {
  const colorClasses: Record<string, string> = {
    'red': 'text-red-500',
    'blue': 'text-blue-500',
    'green': 'text-emerald-500',
    'gold': 'text-yellow-500',
    'purple': 'text-purple-500',
    'none': 'text-gray-400',
    'neutral': 'text-white'
  };
  
  return colorClasses[team] || 'text-gray-400';
}

// Get team security guarantee (for humor)
export function getTeamSecurityGuarantee(team: TeamColor | TeamType | string): string {
  const guarantees: Record<string, string> = {
    'red': "We guarantee your data's security with the same care we apply to our spending habits: none whatsoever.",
    'blue': "Your financial information is secured with our patented 'Cross Your Fingers' encryption technology.",
    'green': "We keep your data safer than you keep your savings account.",
    'gold': "Our security is like our team name: purely decorative.",
    'purple': "Protected by royal decree and a very stern-looking emoji: 🧐",
    'none': "Security? What's that?",
    'neutral': "Neither secure nor insecure - perfectly balanced."
  };
  
  return guarantees[team] || "Security unclear. Much like our spending policies.";
}

// Get ridiculous team stat
export function getTeamAbsurdStat(team: TeamColor | TeamType | string): string {
  const stats: Record<string, string> = {
    'red': "Average member spends 3.7 times their monthly income on digital status symbols",
    'blue': "Collectively wasted enough money to fund a small space program",
    'green': "Team members have a 95% chance of checking their rank while on first dates",
    'gold': "Has spent more on virtual badges than on real food this quarter",
    'purple': "Members average 17 hours per day staring at the leaderboard",
    'none': "Has achieved perfect financial zen through refusing to participate",
    'neutral': "Statistically most likely to be secretly hoarding real wealth"
  };
  
  return stats[team] || "No statistics available - they spent the research budget";
}

// Get ridiculous historical note
export function getTeamHistoricalNote(team: TeamColor | TeamType | string): string {
  const notes: Record<string, string> = {
    'red': "Founded by a consortium of former lottery winners who missed the thrill of losing money quickly",
    'blue': "Originally a support group for people with expensive taste and limited impulse control",
    'green': "Started as a book club that somehow devolved into competitive spending",
    'gold': "Rumored to be bankrolled by a time-traveling aristocrat with too many dubloons",
    'purple': "Created when several members simultaneously had midlife crises",
    'none': "The Switzerland of SpendThrone - neutral in spending wars but secretly profiting",
    'neutral': "Maintains ancient scrolls documenting all historical spending regrets"
  };
  
  return notes[team] || "Historical records lost in a tragic spreadsheet accident";
}

// Get NFT joke
export function getTeamNFTJoke(team: TeamColor | TeamType | string): string {
  const jokes: Record<string, string> = {
    'red': "Team Red's NFT collection: just screenshots of their bank account declining transactions",
    'blue': "Team Blue mints NFTs of their credit card statements as performance art",
    'green': "Their NFT strategy: buy high, sell never, cry often",
    'gold': "Has an NFT of their team logo that cost more than the actual website",
    'purple': "Turned their collection of purchase receipts into an NFT series called 'Regrets'",
    'none': "The only team whose NFTs might actually appreciate in value (because they don't exist)",
    'neutral': "Secretly believes right-click-save is legitimate ownership"
  };
  
  return jokes[team] || "NFT collection currently experiencing technical difficulties";
}

// Get crypto roast
export function getTeamCryptoRoast(team: TeamColor | TeamType | string): string {
  const roasts: Record<string, string> = {
    'red': "Still waiting for their LUNA investment to recover",
    'blue': "Thinks 'cold storage' means keeping their laptop in the refrigerator",
    'green': "Has more crypto wallet passwords than actual crypto",
    'gold': "Their crypto strategy: buy mysterious coins from people who DM them",
    'purple': "Proudly announces every transaction in the team Slack channel",
    'none': "Still trying to figure out if Bitcoin is a physical coin",
    'neutral': "Secretly believes blockchain is just a fancy spreadsheet"
  };
  
  return roasts[team] || "Error 404: Crypto knowledge not found";
}
