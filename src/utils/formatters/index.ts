
/**
 * Central export point for all formatter utilities
 */

export * from './dateFormatters';
export * from './numberFormatters';
export * from './stringFormatters';
export * from './currencyFormatters';
export * from './addressFormatters';
export * from './fileFormatters';

// Re-export specific formatters for backward compatibility
import { formatCurrency, formatDollarAmount, formatWithUnit, formatCompactNumber, formatPercent } from './currencyFormatters';
import { formatNumber } from './numberFormatters';
import { formatDate, formatTimeAgo, formatRelativeTime } from './dateFormatters';
import { formatFileSize } from './fileFormatters';

export {
  formatCurrency,
  formatDollarAmount,
  formatWithUnit,
  formatCompactNumber,
  formatPercent,
  formatNumber,
  formatDate,
  formatTimeAgo,
  formatRelativeTime,
  formatFileSize
};

export default {
  formatCurrency,
  formatDollarAmount,
  formatWithUnit,
  formatCompactNumber,
  formatPercent,
  formatNumber,
  formatDate,
  formatTimeAgo,
  formatRelativeTime,
  formatFileSize
};
