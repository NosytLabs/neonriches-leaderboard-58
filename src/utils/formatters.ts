
/**
 * Consolidated formatters module
 * Re-exports all formatter utilities from their respective files
 */

// Import all formatters from the index file
import formatters, {
  formatCurrency,
  formatWithUnit,
  formatCompactNumber,
  formatDollarAmount,
  formatNumber,
  formatPercent,
  formatDate,
  formatTime,
  formatDateTime,
  formatRelativeTime,
  formatTimeAgo,
  formatRelativeTo,
  formatDuration,
  formatTimeSpan,
  getTimeLeft,
  truncateText,
  toCamelCase,
  formatFileSize,
  formatAddress,
  formatRankWithSuffix
} from './formatters/index';

// Re-export all formatters
export {
  formatCurrency,
  formatWithUnit,
  formatCompactNumber,
  formatDollarAmount,
  formatNumber,
  formatPercent,
  formatDate,
  formatTime,
  formatDateTime,
  formatRelativeTime,
  formatTimeAgo,
  formatRelativeTo,
  formatDuration,
  formatTimeSpan,
  getTimeLeft,
  truncateText,
  toCamelCase,
  formatFileSize,
  formatAddress,
  formatRankWithSuffix
};

// Export default object with all formatters
export default formatters;
