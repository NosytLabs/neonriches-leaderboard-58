
/**
 * Format a number as currency (dollars)
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};

/**
 * Format a dollar amount with dollar sign
 */
export const formatDollarAmount = (amount: number): string => {
  return `$${amount.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
};

/**
 * Format a date to a readable string
 */
export const formatDate = (date: Date | string): string => {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Format a historical value for display
 */
export const formatHistoricalValue = (value: number, year: number): string => {
  return `${formatCurrency(value)} (${year})`;
};

/**
 * Format a blockchain address by truncating the middle
 */
export const formatAddress = (address: string): string => {
  if (!address || address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

/**
 * Format a number with appropriate separators
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};

/**
 * Format a file size in bytes to a readable string
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

/**
 * Format a duration in seconds to a readable string
 */
export const formatDuration = (seconds: number): string => {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m${remainingSeconds > 0 ? ` ${remainingSeconds}s` : ''}`;
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
};

/**
 * Format a percentage value
 */
export const formatPercentage = (value: number, digits = 1): string => {
  return `${value.toFixed(digits)}%`;
};

// Re-export all formatters to match the expected imports
export { 
  formatCurrency,
  formatDollarAmount,
  formatDate,
  formatHistoricalValue,
  formatAddress,
  formatNumber,
  formatFileSize,
  formatDuration,
  formatPercentage
};
