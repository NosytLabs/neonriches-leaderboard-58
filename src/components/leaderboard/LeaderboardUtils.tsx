
import { UserProfile } from '@/types/user';

export const getPositionChangeColor = (user: UserProfile) => {
  if (!user.previousRank) return 'text-white/60';
  if (user.previousRank > user.rank) return 'text-green-500'; // Moved up
  if (user.previousRank < user.rank) return 'text-red-500'; // Moved down
  return 'text-white/60'; // No change
};

export const getPositionChangeIcon = (user: UserProfile) => {
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

export const formatRankNumber = (rank: number) => {
  return rank?.toLocaleString() || '-';
};

export const formatMoney = (amount: number | undefined) => {
  if (amount === undefined) return '$0.00';
  return `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const formatDate = (dateString: string) => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
