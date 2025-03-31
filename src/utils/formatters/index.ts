
/**
 * Centralized formatting utility functions
 */

// Currency formatting
export const formatCurrency = (amount: number | undefined, options?: Intl.NumberFormatOptions): string => {
  if (amount === undefined || amount === null) return '$0.00';
  
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };
  
  return new Intl.NumberFormat('en-US', options || defaultOptions).format(amount);
};

// Number formatting with thousands separators
export const formatNumber = (value: number | undefined, options?: Intl.NumberFormatOptions): string => {
  if (value === undefined || value === null) return '0';
  
  const defaultOptions: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };
  
  return new Intl.NumberFormat('en-US', options || defaultOptions).format(value);
};

// Date formatting with configurable format
export const formatDate = (date: string | Date | undefined, format: string = 'MMM d, yyyy'): string => {
  if (!date) return '';
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    if (isNaN(dateObj.getTime())) {
      return 'Invalid date';
    }
    
    // Simple format tokens
    const tokens = {
      yyyy: dateObj.getFullYear(),
      MM: String(dateObj.getMonth() + 1).padStart(2, '0'),
      M: dateObj.getMonth() + 1,
      dd: String(dateObj.getDate()).padStart(2, '0'),
      d: dateObj.getDate(),
      HH: String(dateObj.getHours()).padStart(2, '0'),
      H: dateObj.getHours(),
      mm: String(dateObj.getMinutes()).padStart(2, '0'),
      m: dateObj.getMinutes(),
      ss: String(dateObj.getSeconds()).padStart(2, '0'),
      s: dateObj.getSeconds()
    };
    
    // Month names
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const fullMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Replace month name tokens
    let result = format.replace('MMM', monthNames[dateObj.getMonth()]);
    result = result.replace('MMMM', fullMonthNames[dateObj.getMonth()]);
    
    // Replace other tokens
    Object.entries(tokens).forEach(([token, value]) => {
      result = result.replace(token, String(value));
    });
    
    return result;
  } catch (error) {
    console.error('Error formatting date:', error);
    return String(date);
  }
};

// Format relative time (e.g., "5 minutes ago")
export const formatRelativeTime = (date: Date | string): string => {
  const now = new Date();
  const pastDate = typeof date === 'string' ? new Date(date) : date;
  const secondsAgo = Math.floor((now.getTime() - pastDate.getTime()) / 1000);
  
  if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
  
  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  
  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  
  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 30) return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
  
  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) return `${monthsAgo} month${monthsAgo !== 1 ? 's' : ''} ago`;
  
  const yearsAgo = Math.floor(monthsAgo / 12);
  return `${yearsAgo} year${yearsAgo !== 1 ? 's' : ''} ago`;
};

// Format a number as a currency with a plus or minus sign
export const formatCurrencyWithSign = (amount: number): string => {
  const formatted = formatCurrency(Math.abs(amount));
  return amount >= 0 ? `+${formatted}` : `-${formatted}`;
};

// Format a percentage
export const formatPercent = (value: number, decimals: number = 2): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

// Export as default for convenience
export default {
  formatCurrency,
  formatNumber,
  formatDate,
  formatRelativeTime,
  formatCurrencyWithSign,
  formatPercent
};
