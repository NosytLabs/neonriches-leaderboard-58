
import { TeamColor } from '@/types/mockery-types';

// Get the display name for a team
export const getTeamName = (team?: TeamColor): string => {
  if (!team) return 'Unaffiliated';
  
  const names: Record<TeamColor, string> = {
    'red': 'House Crimson',
    'blue': 'House Azure',
    'green': 'House Emerald',
    'gold': 'House Aureate',
    'purple': 'House Violet',
    'none': 'Unaffiliated',
    'neutral': 'Neutral'
  };
  
  return names[team] || 'Unaffiliated';
};

// Get CSS color class for a team
export const getTeamColor = (team?: TeamColor): string => {
  if (!team) return 'text-gray-400';
  
  const colors: Record<TeamColor, string> = {
    'red': 'text-red-500',
    'blue': 'text-blue-500',
    'green': 'text-green-500',
    'gold': 'text-yellow-400',
    'purple': 'text-purple-500',
    'none': 'text-gray-400',
    'neutral': 'text-gray-400'
  };
  
  return colors[team] || 'text-gray-400';
};

// Get border color class for a team
export const getTeamBorderColor = (team?: TeamColor): string => {
  if (!team) return 'border-gray-400';
  
  const borderColors: Record<TeamColor, string> = {
    'red': 'border-red-500',
    'blue': 'border-blue-500',
    'green': 'border-green-500',
    'gold': 'border-yellow-400',
    'purple': 'border-purple-500',
    'none': 'border-gray-400',
    'neutral': 'border-gray-400'
  };
  
  return borderColors[team] || 'border-gray-400';
};

// Get background color class for a team
export const getTeamBgColor = (team?: TeamColor): string => {
  if (!team) return 'bg-gray-400';
  
  const bgColors: Record<TeamColor, string> = {
    'red': 'bg-red-500',
    'blue': 'bg-blue-500',
    'green': 'bg-green-500',
    'gold': 'bg-yellow-400',
    'purple': 'bg-purple-500',
    'none': 'bg-gray-400',
    'neutral': 'bg-gray-400'
  };
  
  return bgColors[team] || 'bg-gray-400';
};

// Get team points cost factor (some teams pay more to join)
export const getTeamCostFactor = (team: TeamColor): number => {
  const factors: Record<TeamColor, number> = {
    'red': 1.0,
    'blue': 1.0,
    'green': 1.0,
    'gold': 1.5,
    'purple': 1.25,
    'none': 0,
    'neutral': 0
  };
  
  return factors[team] || 1.0;
};

// For backward compatibility
export const getTeamDisplayName = getTeamName;
export const getTeamColorClass = getTeamColor;
export const getTeamBorderColorClass = getTeamBorderColor;
export const getTeamBackgroundColorClass = getTeamBgColor;

// Additional team info getters (stubs to fix build errors)
export const getTeamMotto = (team: TeamColor): string => {
  const mottos: Record<TeamColor, string> = {
    'red': 'Blood and Honor',
    'blue': 'Wisdom and Loyalty',
    'green': 'Growth and Prosperity',
    'gold': 'Wealth and Power',
    'purple': 'Mystery and Magic',
    'none': 'Free Agent',
    'neutral': 'Balance in All Things'
  };
  
  return mottos[team] || '';
};

export const getTeamBenefit = (team: TeamColor): string => {
  const benefits: Record<TeamColor, string> = {
    'red': '+10% attack power',
    'blue': '+10% defensive capabilities',
    'green': '+10% resource generation',
    'gold': '+15% gold acquisition',
    'purple': '+10% magical abilities',
    'none': 'No team benefits',
    'neutral': 'Balanced attributes'
  };
  
  return benefits[team] || '';
};

export const getTeamSecurityGuarantee = (team: TeamColor): string => {
  const securities: Record<TeamColor, string> = {
    'red': 'Protected by the Crimson Guard',
    'blue': 'Defended by Azure Shields',
    'green': 'Shielded by Emerald Wardens',
    'gold': 'Secured by Golden Knights',
    'purple': 'Guarded by Violet Mages',
    'none': 'No special protection',
    'neutral': 'Universal protection'
  };
  
  return securities[team] || '';
};

export const getTeamAbsurdStat = (team: TeamColor): string => {
  const stats: Record<TeamColor, string> = {
    'red': 'Most chickens defeated in combat',
    'blue': 'Longest time spent underwater without breathing',
    'green': 'Most trees hugged in a single day',
    'gold': 'Highest pile of coins balanced on nose',
    'purple': 'Most successful illusionary pranks',
    'none': 'Most days spent undecided',
    'neutral': 'Perfect balance of all absurd stats'
  };
  
  return stats[team] || '';
};

export const getTeamHistoricalNote = (team: TeamColor): string => {
  const notes: Record<TeamColor, string> = {
    'red': 'Founded by a warrior who accidentally spilled wine on the king',
    'blue': 'Originated from a group of scholars who could not decide on dinner',
    'green': 'Created when a gardener outgrew the royal gardening competition',
    'gold': 'Started by a merchant who found a loophole in taxation',
    'purple': 'Established by a court magician who turned the prince into a frog',
    'none': 'The path of those who refuse to choose',
    'neutral': 'Always been there, watching, waiting, balancing'
  };
  
  return notes[team] || '';
};

export const getTeamNFTJoke = (team: TeamColor): string => {
  const jokes: Record<TeamColor, string> = {
    'red': 'Our NFTs are so hot they burst into flames',
    'blue': 'Our NFTs are waterproof (terms and conditions apply)',
    'green': 'Our NFTs are sustainably minted using recycled pixels',
    'gold': 'Our NFTs appreciate faster than your mortgage',
    'purple': 'Our NFTs may or may not exist depending on who\'s observing',
    'none': 'What\'s an NFT? Exactly.',
    'neutral': 'Our NFTs are perfectly balanced, as all things should be'
  };
  
  return jokes[team] || '';
};

export const getTeamCryptoRoast = (team: TeamColor): string => {
  const roasts: Record<TeamColor, string> = {
    'red': 'As stable as a sword balancing on its tip',
    'blue': 'Less volatile than the ocean, barely',
    'green': 'Grows organically at -20% per month',
    'gold': 'The only crypto with real inflation',
    'purple': 'Magically disappears from your wallet',
    'none': 'At least you\'re not losing anything',
    'neutral': 'Permanently stuck at exactly the same value'
  };
  
  return roasts[team] || '';
};
