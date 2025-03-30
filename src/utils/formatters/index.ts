
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
  
  return `${formatCurrency(value)} (adjusted to ${formatCurrency(adjustedValue)} in ${currentYear})`;
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

// Create missing type definitions for decorations and buttons
export interface RoyalDecorationType {
  type: 'border' | 'corner' | 'divider' | 'crown' | 'shield' | 'scroll' | 'banner';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'gold' | 'silver' | 'bronze' | 'royal' | 'crimson' | 'emerald' | 'obsidian';
  animated?: boolean;
}

export interface RoyalButtonVariant {
  variant?: 'default' | 'royal' | 'gold' | 'crimson' | 'emerald' | 'obsidian' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

// Export LeaderboardUser as an alias for LeaderboardEntry
export type { LeaderboardEntry as LeaderboardUser } from '@/types/leaderboard';
