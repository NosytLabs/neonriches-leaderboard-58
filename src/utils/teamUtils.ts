
import { TeamColor } from '@/types/mockery-types';

export const getTeamColor = (team: TeamColor): string => {
  switch (team) {
    case 'red': return 'text-team-red';
    case 'blue': return 'text-team-blue';
    case 'green': return 'text-team-green';
    case 'gold': return 'text-royal-gold';
    case 'purple': return 'text-royal-purple';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-600';
    case 'neutral': return 'text-white';
    case 'none': return 'text-gray-400';
    default: return 'text-white';
  }
};

export const getTeamName = (team: TeamColor): string => {
  switch (team) {
    case 'red': return 'Red Kingdom';
    case 'blue': return 'Blue Dynasty';
    case 'green': return 'Green Empire';
    case 'gold': return 'Golden Realm';
    case 'purple': return 'Purple Dominion';
    case 'silver': return 'Silver Alliance';
    case 'bronze': return 'Bronze Legion';
    case 'neutral': return 'Neutral';
    case 'none': return 'No Team';
    default: return 'Unknown Team';
  }
};

export const getTeamBackgroundClass = (team: TeamColor): string => {
  switch (team) {
    case 'red': return 'bg-team-red/20';
    case 'blue': return 'bg-team-blue/20';
    case 'green': return 'bg-team-green/20';
    case 'gold': return 'bg-royal-gold/20';
    case 'purple': return 'bg-royal-purple/20';
    case 'silver': return 'bg-gray-300/20';
    case 'bronze': return 'bg-amber-600/20';
    case 'neutral': return 'bg-white/10';
    case 'none': return 'bg-gray-400/10';
    default: return 'bg-white/10';
  }
};

export const getTeamBorderClass = (team: TeamColor): string => {
  switch (team) {
    case 'red': return 'border-team-red/30';
    case 'blue': return 'border-team-blue/30';
    case 'green': return 'border-team-green/30';
    case 'gold': return 'border-royal-gold/30';
    case 'purple': return 'border-royal-purple/30';
    case 'silver': return 'border-gray-300/30';
    case 'bronze': return 'border-amber-600/30';
    case 'neutral': return 'border-white/20';
    case 'none': return 'border-gray-400/20';
    default: return 'border-white/20';
  }
};
