
/**
 * Consolidated formatters module
 * Re-exports all formatter utilities from their respective files
 */

// Currency formatters
export { 
  formatCurrency, 
  formatWithUnit, 
  formatCompactNumber, 
  formatDollarAmount 
} from './formatters/currencyFormatters';

// Number formatters
export const formatNumber = (value: number, decimalPlaces: number = 2): string => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '0';
  }
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  });
};

// Date formatters (re-export from dateFormatters)
export { 
  formatDate, 
  formatTime, 
  formatDateTime,
  formatRelativeTime,
  formatTimeAgo,
  formatRelativeTo,
  formatDuration,
  formatTimeSpan,
  getTimeLeft
} from './formatters/dateFormatters';

// String formatters
export { 
  truncateText, 
  toCamelCase, 
  formatFileSize, 
  formatAddress 
} from './formatters/stringFormatters';

// Percent formatter
export const formatPercent = (value: number, decimalPlaces: number = 1): string => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '0%';
  }
  return `${value.toLocaleString('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  })}%`;
};

// Rank formatter with suffix
export const formatRankWithSuffix = (rank: number): string => {
  if (typeof rank !== 'number' || isNaN(rank)) {
    return 'N/A';
  }
  
  const lastDigit = rank % 10;
  const lastTwoDigits = rank % 100;
  
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${rank}th`;
  }
  
  switch (lastDigit) {
    case 1: return `${rank}st`;
    case 2: return `${rank}nd`;
    case 3: return `${rank}rd`;
    default: return `${rank}th`;
  }
};

// Export a default object with all formatters
export default {
  formatCurrency,
  formatWithUnit,
  formatCompactNumber,
  formatDollarAmount,
  formatNumber,
  formatPercent,
  formatDate,
  formatRankWithSuffix,
  formatFileSize
};
