
/**
 * Date utility functions for the SpendThrone app
 */

/**
 * Format a date as a string representation
 */
export const formatDate = (date: string | Date | null | undefined, formatString: string = 'MMM d, yyyy'): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) return 'Invalid date';
  
  // Simple formatter implementation
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDate();
  
  // Array of month names
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthNamesLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  let result = formatString;
  
  // Replace tokens with actual values
  result = result.replace('yyyy', year.toString());
  result = result.replace('MM', (month + 1).toString().padStart(2, '0'));
  result = result.replace('M', (month + 1).toString());
  result = result.replace('MMMM', monthNamesLong[month]);
  result = result.replace('MMM', monthNames[month]);
  result = result.replace('dd', day.toString().padStart(2, '0'));
  result = result.replace('d', day.toString());
  
  return result;
};

/**
 * Format a date to a relative time string (e.g., "2 days ago")
 */
export const getRelativeTimeString = (date: string | Date): string => {
  const targetDate = new Date(date);
  const now = new Date();
  
  const diffMs = now.getTime() - targetDate.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffSecs < 60) {
    return 'just now';
  } else if (diffMins < 60) {
    return `${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
  } else if (diffDays < 7) {
    return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
  } else if (diffWeeks < 4) {
    return `${diffWeeks} ${diffWeeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (diffMonths < 12) {
    return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
  } else {
    return `${diffYears} ${diffYears === 1 ? 'year' : 'years'} ago`;
  }
};

/**
 * Get the number of days in a month
 */
export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

/**
 * Check if a date is today
 */
export const isDateToday = (date: string | Date): boolean => {
  const targetDate = new Date(date);
  const today = new Date();
  
  return (
    targetDate.getDate() === today.getDate() &&
    targetDate.getMonth() === today.getMonth() &&
    targetDate.getFullYear() === today.getFullYear()
  );
};

/**
 * Check if a date is in the past
 */
export const isDateInPast = (date: string | Date): boolean => {
  const targetDate = new Date(date);
  const now = new Date();
  return targetDate.getTime() < now.getTime();
};

/**
 * Check if a date is in the future
 */
export const isDateInFuture = (date: string | Date): boolean => {
  const targetDate = new Date(date);
  const now = new Date();
  return targetDate.getTime() > now.getTime();
};

// Export all utility functions
export default {
  formatDate,
  getRelativeTimeString,
  getDaysInMonth,
  isDateToday,
  isDateInPast,
  isDateInFuture,
};
