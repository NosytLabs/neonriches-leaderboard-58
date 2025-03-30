
// Re-export all formatters from the formatters.ts file
export {
  formatDate,
  formatTimeAgo,
  formatRelativeTime,
  formatCurrency,
  formatDollarAmount,
  getTeamColor,
} from '../formatters';

// Export missing formatter functions from dateUtils
export { formatDate as formatDateFromUtils, formatDateTime } from '../dateUtils';

// Add missing formatters
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const formatAddress = (address: string, start = 4, end = 4): string => {
  if (!address || address.length < (start + end + 3)) return address || '';
  return `${address.substring(0, start)}...${address.substring(address.length - end)}`;
};

export const formatPercentage = (value: number, decimalPlaces = 2): string => {
  return `${(value * 100).toFixed(decimalPlaces)}%`;
};

export const formatHistoricalValue = (value: number, year: number): string => {
  const currentYear = new Date().getFullYear();
  const yearDiff = currentYear - year;
  
  // Simple inflation adjustment (not accurate but for display purposes)
  const adjustedValue = value * Math.pow(1.03, yearDiff);
  
  return `${formatCurrency(adjustedValue)} (${formatCurrency(value)} in ${year})`;
};

export const getAchievementIcon = (type: string) => {
  // This is a simplified version - implement based on your needs
  switch (type) {
    case 'royal': return '👑';
    case 'rank': return '🏆';
    case 'milestone': return '🌟';
    case 'deposit': return '💰';
    case 'streak': return '🔥';
    default: return '🎯';
  }
};

// Export types as type only to fix isolatedModules issues
export type { RoyalDecorationType } from '../types/decorations';
export type { RoyalButtonVariant } from '../types/buttons';

// Export types related to leaderboard
export type { LeaderboardEntry as LeaderboardUser } from '@/types/leaderboard';
