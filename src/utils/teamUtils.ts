
import { UserTeam, UserGender } from '@/types/user';

export const getTeamColor = (team: UserTeam | string | undefined): string => {
  if (!team) return 'text-white/70';
  
  switch (team) {
    case 'red': return 'text-team-red';
    case 'green': return 'text-team-green';
    case 'blue': return 'text-team-blue';
    default: return 'text-white/70';
  }
};

export const getTeamBorderColor = (team: UserTeam | string | undefined): string => {
  if (!team) return 'border-white/10';
  
  switch (team) {
    case 'red': return 'border-team-red/50';
    case 'green': return 'border-team-green/50';
    case 'blue': return 'border-team-blue/50';
    default: return 'border-white/10';
  }
};

export const getTeamName = (team: UserTeam | string | undefined): string => {
  if (!team) return 'Unaffiliated Cheapskate';
  
  switch (team) {
    case 'red': return 'Royal Order of Reckless Spending';
    case 'green': return 'Emerald Exchequer Cabaret';
    case 'blue': return 'Cobalt Credit Cartel';
    default: return 'Unaffiliated';
  }
};

export const getTeamShortName = (team: UserTeam | string | undefined): string => {
  if (!team) return 'None';
  
  switch (team) {
    case 'red': return 'RORS';
    case 'green': return 'EEC';
    case 'blue': return 'CCC';
    default: return 'None';
  }
};

export const getTeamMotto = (team: UserTeam | string | undefined): string => {
  if (!team) return 'Too Frugal to Care';
  
  switch (team) {
    case 'red': return 'Buy First, Think Never';
    case 'green': return 'Wealth So Strategic, It\'s Almost Pathetic';
    case 'blue': return 'Patience in Spending, Unbridled in Pretending';
    default: return 'Too Frugal to Care';
  }
};

export const getTeamBenefit = (team: UserTeam | string | undefined): string[] => {
  if (!team) return ['Freedom from financial regret', 'Ability to laugh at big spenders', 'Extra money in your actual bank account'];
  
  switch (team) {
    case 'red':
      return [
        'Exclusive "Just Like NFTs But Less Useless" club membership',
        'Certificate of Self-Deception (backed by blockchain of regret)',
        'Algorithms to justify spending to concerned family members'
      ];
    case 'green':
      return [
        'Access to "Pretend Investment Portfolio" looking impressive but doing nothing',
        'Digital trophy case for non-existent achievements',
        'Spreadsheets making any purchase look like a sound decision'
      ];
    case 'blue':
      return [
        'Membership to "I Bought JPEGs Before It Was Cool" club',
        'Tools to convince yourself you\'re not just buying bragging rights',
        'FOMO generation algorithms for maximum spending anxiety'
      ];
    default:
      return ['No perks, no problems'];
  }
};

export const getGenderTitle = (gender: UserGender | undefined): string => {
  if (!gender) return 'Noble';
  
  switch (gender) {
    case 'king': return 'King';
    case 'queen': return 'Queen';
    case 'jester': return 'Jester';
    case 'noble': return 'Noble';
    case 'neutral': return 'Sovereign';
    default: return 'Noble';
  }
};

export const getGenderEmoji = (gender: UserGender | undefined): string => {
  if (!gender) return '👑';
  
  switch (gender) {
    case 'king': return '👑';
    case 'queen': return '👸';
    case 'jester': return '🃏';
    case 'noble': return '⚜️';
    case 'neutral': return '🏅';
    default: return '👑';
  }
};

export const getInitials = (displayName: string | undefined, username: string): string => {
  if (!displayName) return username.substring(0, 2).toUpperCase();
  
  const parts = displayName.split(' ');
  if (parts.length === 1) return displayName.substring(0, 2).toUpperCase();
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

export const getTeamAbsurdStat = (team: UserTeam | string | undefined): string => {
  if (!team) return 'Has saved approximately $0 by not participating in our financial folly';
  
  switch (team) {
    case 'red':
      return 'Members collectively spent enough to buy 47 actual castles, but opted for digital status instead';
    case 'green':
      return 'Has a Discord channel where members pretend their NFTs will "definitely go up in value one day"';
    case 'blue':
      return 'Makes PowerPoints explaining to partners why spending here is "smarter than crypto"';
    default:
      return 'No statistics available, much like their contributions';
  }
};

export const getTeamHistoricalNote = (team: UserTeam | string | undefined): string => {
  if (!team) return 'History forgets those who refuse to part with their money';
  
  switch (team) {
    case 'red':
      return 'Founded by a crypto enthusiast who said "I spent $300K on ape JPEGs, so this actually seems sensible"';
    case 'green':
      return 'Created by an ex-hedge fund manager who realized separating people from money is easier without pretending it\'s an investment';
    case 'blue':
      return 'Established by tech executives who wanted crypto\'s social status without blockchain\'s complexity';
    default:
      return 'No recorded history of significance';
  }
};

export const getTeamNFTJoke = (team: UserTeam | string | undefined): string => {
  if (!team) return 'Too sensible to buy pictures of rocks for the price of a car';
  
  switch (team) {
    case 'red':
      return 'The only group to mint an NFT of their transaction receipts from this site (and pay for that too)';
    case 'green':
      return 'Hosts weekly "Right-Click Save" galleries featuring overpriced NFTs they didn\'t buy';
    case 'blue':
      return 'Has a vault of "blue-chip NFTs" now worth 1/100th of what they paid';
    default:
      return 'No NFT jokes available - they\'re too expensive';
  }
};

export const getTeamSecurityGuarantee = (team: UserTeam | string | undefined): string => {
  if (!team) return 'Protected by not providing any personal data beyond what\'s necessary';
  
  switch (team) {
    case 'red':
      return 'Your data is protected by industry-standard encryption and robust security protocols. We just like to describe it as a digital fortress with encryption moats and authentication drawbridges.';
    case 'green':
      return 'We implement comprehensive security measures to safeguard your information. Though we joke about medieval protections, we use modern cybersecurity practices.';
    case 'blue':
      return 'Your personal information is secured with the same level of protection we\'d want for our own data - multiple layers of modern security that are decidedly more effective than castle defenses.';
    default:
      return 'Your data is protected by our comprehensive security protocols.';
  }
};

export const getTeamCryptoRoast = (team: UserTeam | string | undefined): string => {
  if (!team) return 'Smart enough to keep their crypto wallet disconnected from our site';
  
  switch (team) {
    case 'red':
      return 'Brags about "buying the dip" while their portfolio looks like a medieval plague death chart';
    case 'green':
      return 'Still holding a coin endorsed by a celebrity who can\'t spell "blockchain"';
    case 'blue':
      return 'Has uttered "this is good for Bitcoin" while watching their savings evaporate';
    default:
      return 'No crypto jokes available - they\'re stuck in a failed smart contract';
  }
};
