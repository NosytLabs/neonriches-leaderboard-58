
// Re-export from the main utils file for backwards compatibility
import { 
  formatRankNumber, 
  formatMoney, 
  formatCurrency, 
  formatTimeAgo 
} from '@/utils/leaderboardUtils';

export {
  formatRankNumber,
  formatMoney,
  formatCurrency,
  formatTimeAgo
};

// For backwards compatibility
export const getPositionChangeColor = (user: any) => {
  if (!user.previousRank) return 'text-white/60';
  if (user.previousRank > user.rank) return 'text-green-500'; // Moved up
  if (user.previousRank < user.rank) return 'text-red-500'; // Moved down
  return 'text-white/60'; // No change
};

export const getPositionChangeIcon = (user: any) => {
  if (!user.previousRank) return null;
  if (user.previousRank > user.rank) return 'up';
  if (user.previousRank < user.rank) return 'down';
  return null;
};

export const getTeamColor = (team: string | null | undefined) => {
  switch (team) {
    case 'red': return 'text-red-500';
    case 'green': return 'text-green-500';
    case 'blue': return 'text-blue-500';
    default: return 'text-white/60';
  }
};
