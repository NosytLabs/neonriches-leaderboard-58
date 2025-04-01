
/**
 * Utility functions for formatting data in a consistent manner
 */

/**
 * Format a number with commas as thousands separators
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};

/**
 * Format a number as a percentage
 */
export const formatPercent = (num: number, decimals = 1): string => {
  return `${num.toFixed(decimals)}%`;
};

/**
 * Format a number as a dollar amount
 */
export const formatDollarAmount = (amount: number): string => {
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

/**
 * Currency formatter shorthand
 */
export const formatCurrency = (amount: number): string => {
  return `$${formatDollarAmount(amount)}`;
};

/**
 * Format a file size in bytes to a human-readable size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

/**
 * Format a rank with the appropriate suffix (1st, 2nd, 3rd, etc.)
 */
export const formatRankWithSuffix = (rank: number): string => {
  if (rank % 100 >= 11 && rank % 100 <= 13) {
    return `${rank}th`;
  }
  
  switch (rank % 10) {
    case 1: return `${rank}st`;
    case 2: return `${rank}nd`;
    case 3: return `${rank}rd`;
    default: return `${rank}th`;
  }
};

/**
 * Format a duration in milliseconds to a human-readable format
 */
export const formatDuration = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days}d ${hours % 24}h`;
  if (hours > 0) return `${hours}h ${minutes % 60}m`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
};

/**
 * Format a date to a relative time (e.g. "2 hours ago")
 */
export const formatTimeAgo = (date: string | Date): string => {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();
  
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 7) {
    return past.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } else if (days > 0) {
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else {
    return 'Just now';
  }
};
