
/**
 * Main index file for formatters
 * Re-exports all formatter utilities
 */

// Re-export all formatters from their respective files
export * from './currencyFormatters';
export * from './dateFormatters';
export * from './stringFormatters';
export * from './addressFormatters';
export * from './dollarFormatters';

// Create and export default object with all formatters
import { 
  formatCurrency, 
  formatWithUnit, 
  formatCompactNumber, 
  formatDollarAmount 
} from './currencyFormatters';

import {
  formatDate,
  formatTime,
  formatDateTime,
  formatRelativeTime,
  formatTimeAgo,
  formatRelativeTo,
  formatDuration,
  formatTimeSpan,
  getTimeLeft
} from './dateFormatters';

import {
  truncateText,
  toCamelCase,
  formatFileSize,
  formatAddress
} from './stringFormatters';

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
const formatters = {
  formatCurrency,
  formatWithUnit,
  formatCompactNumber,
  formatDollarAmount,
  formatNumber,
  formatPercent,
  formatDate,
  formatRankWithSuffix,
  formatFileSize,
  truncateText,
  toCamelCase,
  formatAddress,
  formatTime,
  formatDateTime,
  formatRelativeTime,
  formatTimeAgo,
  formatRelativeTo,
  formatDuration,
  formatTimeSpan,
  getTimeLeft
};

export default formatters;
