
/**
 * Format a timespan into a readable duration string
 * @param seconds Number of seconds
 * @returns Formatted duration string
 */
export const formatDuration = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes}m ${seconds % 60}s`;
  }
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h ${minutes % 60}m`;
  }
  
  const days = Math.floor(hours / 24);
  return `${days}d ${hours % 24}h`;
};

/**
 * Parse a date string or Date object to a Date
 * @param date Date string or Date object
 * @returns Parsed Date object
 */
export const parseDate = (date: string | Date): Date => {
  return typeof date === 'string' ? new Date(date) : date;
};

/**
 * Format a date as a time ago string (e.g. "3 days ago")
 * @param timestamp The timestamp to format
 * @returns Formatted time ago string
 */
export const formatTimeFromNow = (timestamp: string | Date): string => {
  const date = parseDate(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  
  if (diffSeconds < 60) {
    return `${diffSeconds} seconds ago`;
  }
  
  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes === 1 ? '' : 's'} ago`;
  }
  
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
  }
  
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) {
    return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
  }
  
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths === 1 ? '' : 's'} ago`;
  }
  
  const diffYears = Math.floor(diffMonths / 12);
  return `${diffYears} year${diffYears === 1 ? '' : 's'} ago`;
};

/**
 * Get the time left until a date
 * @param endTime End time as string or Date
 * @returns Object with days, hours, minutes, seconds left
 */
export const getTimeLeft = (endTime: string | Date) => {
  const endDate = parseDate(endTime);
  const now = new Date();
  
  // If the end time is in the past, return zeros
  if (endDate <= now) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      total: 0,
      isComplete: true
    };
  }
  
  const total = endDate.getTime() - now.getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    days,
    hours,
    minutes,
    seconds,
    total,
    isComplete: false
  };
};

/**
 * Format a date for structured data (Schema.org)
 * @param date Date to format
 * @returns ISO formatted date string
 */
export const formatDateForSchema = (date: string | Date): string => {
  return parseDate(date).toISOString();
};

export default {
  formatDuration,
  formatTimeFromNow,
  parseDate,
  getTimeLeft,
  formatDateForSchema
};
