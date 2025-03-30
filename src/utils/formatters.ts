
/**
 * Utility functions for formatting data in various ways
 */

/**
 * Format a number as a dollar amount
 * @param amount - Number to format
 * @param options - Formatting options
 * @returns Formatted dollar amount as string
 */
export function formatCurrency(
  amount: number | undefined, 
  options?: { 
    maximumFractionDigits?: number;
    minimumFractionDigits?: number;
    notation?: 'standard' | 'compact';
  }
): string {
  if (amount === undefined) return '$0';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: options?.maximumFractionDigits ?? 0,
    minimumFractionDigits: options?.minimumFractionDigits ?? 0,
    notation: options?.notation
  }).format(amount);
}

/**
 * Format a date string to a localized format
 * @param dateString String representation of date
 * @param format Format style to use
 * @returns Formatted date string
 */
export function formatDate(
  dateString: string | Date,
  format: 'short' | 'medium' | 'long' | 'relative' = 'medium'
): string {
  const date = dateString instanceof Date ? dateString : new Date(dateString);
  
  if (format === 'relative') {
    // Calculate relative time (today, yesterday, etc)
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  }
  
  // Format according to specified format
  const options: Intl.DateTimeFormatOptions = 
    format === 'short' ? { month: 'numeric', day: 'numeric', year: '2-digit' } :
    format === 'long' ? { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' } :
    { month: 'short', day: 'numeric', year: 'numeric' };
  
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

/**
 * Format a wallet address by truncating the middle
 * @param address Full wallet address
 * @param start Number of characters to show at the start
 * @param end Number of characters to show at the end
 * @returns Shortened address
 */
export function formatAddress(address: string, start = 4, end = 4): string {
  if (!address) return '';
  if (address.length <= start + end) return address;
  
  return `${address.slice(0, start)}...${address.slice(address.length - end)}`;
}

/**
 * Format a file size in bytes to a human-readable size
 * @param bytes Size in bytes
 * @returns Human-readable file size
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
}

/**
 * Format a percentage
 * @param value Value to convert to percentage
 * @param decimals Number of decimal places
 * @returns Formatted percentage string
 */
export function formatPercent(value: number, decimals = 0): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Format a number with commas
 * @param num Number to format
 * @returns Formatted number as string
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}
