
/**
 * Format a date as a time ago string (e.g. "3 days ago")
 * Optimized for SEO with appropriate time element usage
 * 
 * @param date The date to format
 * @returns Formatted time ago string
 */
export const formatTimeAgo = (date: string | Date): string => {
  const now = new Date();
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  
  // Invalid date check
  if (isNaN(parsedDate.getTime())) {
    return 'Invalid date';
  }
  
  const seconds = Math.floor((now.getTime() - parsedDate.getTime()) / 1000);
  
  // Less than a minute
  if (seconds < 60) {
    return 'just now';
  }
  
  // Less than an hour
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  }
  
  // Less than a day
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  }
  
  // Less than a week
  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  }
  
  // Less than a month (approximately)
  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  }
  
  // Less than a year
  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  }
  
  // A year or more
  const years = Math.floor(days / 365);
  return `${years} ${years === 1 ? 'year' : 'years'} ago`;
};

/**
 * Format a date with time element for better SEO 
 * This returns a JSX element with proper datetime attribute
 */
export const formatTimeElement = (date: string | Date, formatString?: string): {
  dateTime: string;
  formattedDate: string;
} => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  
  // ISO string for datetime attribute
  const dateTime = parsedDate.toISOString();
  
  // Human-readable format
  let formattedDate = formatTimeAgo(parsedDate);
  
  if (formatString) {
    try {
      formattedDate = new Intl.DateTimeFormat('en-US', JSON.parse(formatString)).format(parsedDate);
    } catch (error) {
      console.error('Invalid date format string:', error);
    }
  }
  
  return { dateTime, formattedDate };
};

export default formatTimeAgo;
