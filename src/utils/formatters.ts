
/**
 * Formats a number as currency
 * @param amount - The amount to format
 * @param currency - The currency symbol (default: $)
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number | undefined): string => {
  if (amount === undefined) return '$0.00';
  return `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

/**
 * Formats a date string to a localized date
 * @param dateString - The date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

/**
 * Formats a number with commas for thousands
 * @param num - The number to format
 * @returns Formatted number string
 */
export const formatNumber = (num: number | undefined): string => {
  if (num === undefined) return '0';
  return num.toLocaleString();
};

/**
 * Formats a rank number
 * @param rank - The rank to format
 * @returns Formatted rank string
 */
export const formatRank = (rank: number | undefined): string => {
  if (rank === undefined) return '-';
  return `#${rank.toLocaleString()}`;
};

/**
 * Formats a file size in bytes to a human-readable format
 * @param bytes - The file size in bytes
 * @param decimals - Number of decimal places to show
 * @returns Formatted file size string
 */
export const formatFileSize = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
};

/**
 * Formats a duration in milliseconds to a human-readable format
 * @param ms - The duration in milliseconds
 * @returns Formatted duration string
 */
export const formatDuration = (ms: number): string => {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(1);
  return `${minutes}m ${seconds}s`;
};

/**
 * Formats a percentage value
 * @param value - The value to format as percentage
 * @param decimals - Number of decimal places
 * @returns Formatted percentage string
 */
export const formatPercentage = (value: number, decimals = 1): string => {
  return `${value.toFixed(decimals)}%`;
};

/**
 * Formats a wallet address by truncating the middle
 * @param address - The wallet address to format
 * @returns Truncated address string
 */
export const formatAddress = (address: string): string => {
  if (!address) return '';
  if (address.length <= 12) return address;
  
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

/**
 * Formats a historical value with an ancient unit
 * @param value - The value to format
 * @returns Formatted string with ancient unit
 */
export const formatHistoricalValue = (value: number): string => {
  const units = ['talents', 'sesterces', 'denarii', 'drachmas', 'solidi'];
  const unit = units[Math.floor(Math.random() * units.length)];
  
  return `${value.toLocaleString()} ${unit}`;
};

/**
 * Formats a dollar amount with appropriate scaling
 * @param amount - The amount to format
 * @returns Formatted dollar amount string
 */
export const formatDollarAmount = (amount: number): string => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}K`;
  } else {
    return `$${amount.toFixed(2)}`;
  }
};
