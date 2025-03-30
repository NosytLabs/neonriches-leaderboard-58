
// Re-export all formatters from the formatters.ts file
export {
  formatDate,
  formatTimeAgo,
  formatRelativeTime,
  formatCurrency,
  formatDollarAmount,
  getTeamColor,
  formatFileSize,
  formatAddress,
  formatPercentage,
  formatHistoricalValue,
  getAchievementIcon
} from '../formatters';

// Export missing formatter functions from dateUtils
export { formatDate as formatDateFromUtils, formatDateTime, isEventActive, daysUntil } from '../dateUtils';

// Define types for royal decorations
export interface RoyalDecorationType {
  type: 'border' | 'corner' | 'divider' | 'crown' | 'shield' | 'scroll' | 'banner';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'gold' | 'silver' | 'bronze' | 'royal' | 'crimson' | 'emerald' | 'obsidian';
  animated?: boolean;
}

// Define types for royal buttons
export interface RoyalButtonVariant {
  variant?: 'default' | 'royal' | 'gold' | 'crimson' | 'emerald' | 'obsidian' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

// Export LeaderboardUser as an alias for LeaderboardEntry
export type { LeaderboardEntry as LeaderboardUser } from '@/types/leaderboard';
