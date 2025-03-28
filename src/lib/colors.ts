
import { UserTier } from '@/types/user';

export const getTeamColor = (team: string | null): string => {
  switch (team?.toLowerCase()) {
    case 'red':
      return 'text-royal-crimson';
    case 'green':
      return 'text-royal-gold';
    case 'blue':
      return 'text-royal-navy';
    default:
      return 'text-white';
  }
};

export const getTeamColors = (team: string | null): { text: string; border: string; bg: string } => {
  switch (team?.toLowerCase()) {
    case 'red':
      return {
        text: 'text-royal-crimson',
        border: 'border-royal-crimson/50',
        bg: 'bg-royal-crimson/20'
      };
    case 'green':
      return {
        text: 'text-royal-gold',
        border: 'border-royal-gold/50',
        bg: 'bg-royal-gold/20'
      };
    case 'blue':
      return {
        text: 'text-royal-navy',
        border: 'border-royal-navy/50',
        bg: 'bg-royal-navy/20'
      };
    default:
      return {
        text: 'text-white',
        border: 'border-white/20',
        bg: 'bg-white/5'
      };
  }
};

export const getTeamTextColorClass = (team: string | null): string => {
  switch (team?.toLowerCase()) {
    case 'red':
      return 'text-royal-crimson';
    case 'green':
      return 'text-royal-gold';
    case 'blue':
      return 'text-royal-navy';
    default:
      return 'text-white';
  }
};

export const getTeamColorHex = (team: string | null): string => {
  switch (team?.toLowerCase()) {
    case 'red':
      return '#C70039';
    case 'green':
      return '#D4AF37';
    case 'blue':
      return '#0A2463';
    default:
      return '#FFFFFF';
  }
};

export const getTeamBgColorClass = (team: string | null): string => {
  switch (team?.toLowerCase()) {
    case 'red':
      return 'bg-royal-crimson/20';
    case 'green':
      return 'bg-royal-gold/20';
    case 'blue':
      return 'bg-royal-navy/20';
    default:
      return 'bg-white/10';
  }
};

export const getRankTextColorClass = (rank: number): string => {
  if (rank === 1) return 'text-royal-gold';
  if (rank === 2) return 'text-gray-300';
  if (rank === 3) return 'text-amber-700';
  return 'text-white';
};

export const getRankBadgeClass = (rank: number): string => {
  if (rank === 1) return 'bg-royal-gold/20 border-royal-gold/40';
  if (rank === 2) return 'bg-gray-300/20 border-gray-300/40';
  if (rank === 3) return 'bg-amber-700/20 border-amber-700/40';
  if (rank <= 10) return 'bg-purple-500/20 border-purple-500/40';
  if (rank <= 25) return 'bg-blue-500/20 border-blue-500/40';
  return 'bg-white/10 border-white/20';
};

export const getSpendingTierLabel = (tier: UserTier): string => {
  switch (tier) {
    case 'crab':
      return 'Crab Tier';
    case 'octopus':
      return 'Octopus Tier';
    case 'fish':
      return 'Fish Tier';
    case 'dolphin':
      return 'Dolphin Tier';
    case 'shark':
      return 'Shark Tier';
    case 'whale':
      return 'Whale Tier';
    default:
      return 'Commoner';
  }
};

export const getSpendingTierBadgeClass = (tier: UserTier): string => {
  switch (tier) {
    case 'crab':
      return 'bg-green-500/20 border-green-500/40 text-green-500';
    case 'octopus':
      return 'bg-indigo-500/20 border-indigo-500/40 text-indigo-500';
    case 'fish':
      return 'bg-cyan-500/20 border-cyan-500/40 text-cyan-500';
    case 'dolphin':
      return 'bg-blue-500/20 border-blue-500/40 text-blue-500';
    case 'shark':
      return 'bg-purple-500/20 border-purple-500/40 text-purple-500';
    case 'whale':
      return 'bg-royal-gold/20 border-royal-gold/40 text-royal-gold';
    default:
      return 'bg-gray-500/20 border-gray-500/40 text-gray-500';
  }
};
