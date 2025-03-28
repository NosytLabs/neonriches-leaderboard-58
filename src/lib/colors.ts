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

export const getSpendingTierLabel = (tier: string): string => {
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
    case 'pro':
      return 'Pro Tier';
    case 'royal':
      return 'Royal Tier';
    case 'free':
    default:
      return 'Free Tier';
  }
};

export const getSpendingTierBadgeClass = (tier: string): string => {
  switch (tier) {
    case 'crab':
      return 'bg-red-900/30 text-red-300 border-red-500/30';
    case 'octopus':
      return 'bg-purple-900/30 text-purple-300 border-purple-500/30';
    case 'fish':
      return 'bg-blue-900/30 text-blue-300 border-blue-500/30';
    case 'dolphin':
      return 'bg-cyan-900/30 text-cyan-300 border-cyan-500/30';
    case 'shark':
      return 'bg-emerald-900/30 text-emerald-300 border-emerald-500/30';
    case 'whale':
      return 'bg-amber-900/30 text-amber-300 border-amber-500/30';
    case 'pro':
      return 'bg-royal-navy/30 text-royal-navy-light border-royal-navy/30';
    case 'royal':
      return 'bg-royal-gold/30 text-royal-gold border-royal-gold/30';
    case 'free':
    default:
      return 'bg-gray-800/30 text-gray-300 border-gray-500/30';
  }
};
