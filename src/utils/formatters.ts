
/**
 * Utility functions for formatting different types of data
 */

/**
 * Format a date to a human-readable string
 * @param date Date to format
 * @param options Formatting options
 * @returns Formatted date string
 */
export function formatDate(date: string | Date, options: Intl.DateTimeFormatOptions = { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
}): string {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Handle invalid dates
  if (isNaN(dateObj.getTime())) return 'Invalid Date';
  
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
}

/**
 * Format a dollar amount with currency symbol
 * @param amount Amount to format
 * @param options Formatting options
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: string = 'USD', minimumFractionDigits: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits: minimumFractionDigits
  }).format(amount);
}

/**
 * Format a dollar amount with currency symbol
 * @param amount Amount to format
 * @returns Formatted dollar string
 */
export function formatDollarAmount(amount: number): string {
  return formatCurrency(amount);
}

/**
 * Format a number with thousands separators
 * @param num Number to format
 * @param minimumFractionDigits Minimum fraction digits
 * @returns Formatted number string
 */
export function formatNumber(num: number, minimumFractionDigits: number = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits,
    maximumFractionDigits: 2
  }).format(num);
}

/**
 * Format a percentage value
 * @param value Value to format as percentage
 * @param decimals Number of decimal places
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value / 100);
}

/**
 * Format an address with optional line breaks
 * @param address Address components
 * @returns Formatted address string
 */
export function formatAddress(address: {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}, useLineBreaks: boolean = false): string {
  const parts = [
    address.street,
    address.city,
    [address.state, address.zipCode].filter(Boolean).join(' '),
    address.country
  ].filter(Boolean);
  
  return useLineBreaks ? parts.join('\n') : parts.join(', ');
}

/**
 * Format a historical value with percentage change
 * @param current Current value
 * @param previous Previous value
 * @returns Formatted historical value string
 */
export function formatHistoricalValue(current: number, previous: number): string {
  const percentChange = previous ? ((current - previous) / previous) * 100 : 0;
  const direction = percentChange >= 0 ? '↑' : '↓';
  
  return `${formatCurrency(current)} ${direction} ${Math.abs(percentChange).toFixed(1)}%`;
}

/**
 * Format a timestamp as a relative time string
 * @param date Date to format
 * @returns Relative time string
 */
export function formatTimeAgo(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  // Time intervals in seconds
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };
  
  let counter;
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    counter = Math.floor(seconds / secondsInUnit);
    if (counter > 0) {
      return `${counter} ${unit}${counter === 1 ? '' : 's'} ago`;
    }
  }
  
  return 'just now';
}

/**
 * Format file size with appropriate units
 * @param bytes Size in bytes
 * @returns Formatted file size string
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
