
import { format, parseISO, isValid } from 'date-fns';

/**
 * Format a date using date-fns format
 * @param date Date string, Date object or timestamp
 * @param formatString Format string for date-fns (default: 'MMM d, yyyy')
 * @returns Formatted date string
 */
export function formatDate(date: string | Date | number | undefined, formatString: string = 'MMM d, yyyy'): string {
  if (!date) return 'N/A';
  
  try {
    let parsedDate: Date;
    
    if (typeof date === 'string') {
      // Try to parse ISO string
      parsedDate = parseISO(date);
    } else if (date instanceof Date) {
      parsedDate = date;
    } else if (typeof date === 'number') {
      parsedDate = new Date(date);
    } else {
      return 'Invalid date';
    }
    
    // Check if date is valid
    if (!isValid(parsedDate)) {
      return 'Invalid date';
    }
    
    return format(parsedDate, formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
}

/**
 * Format a date as a relative time (e.g., "2 days ago")
 * @param date Date to format
 * @returns Relative time string
 */
export function formatRelativeTime(date: string | Date | number): string {
  if (!date) return 'N/A';
  
  try {
    let parsedDate: Date;
    
    if (typeof date === 'string') {
      parsedDate = parseISO(date);
    } else if (date instanceof Date) {
      parsedDate = date;
    } else if (typeof date === 'number') {
      parsedDate = new Date(date);
    } else {
      return 'Invalid date';
    }
    
    if (!isValid(parsedDate)) {
      return 'Invalid date';
    }
    
    const now = new Date();
    const diffMs = now.getTime() - parsedDate.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffSecs < 60) {
      return 'just now';
    } else if (diffMins < 60) {
      return `${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
    } else if (diffDays < 7) {
      return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
    } else {
      return formatDate(parsedDate);
    }
  } catch (error) {
    console.error('Error formatting relative time:', error);
    return 'Invalid date';
  }
}

/**
 * Format a date as time ago (e.g., "5 minutes ago")
 * Alias for formatRelativeTime for backwards compatibility
 */
export const formatTimeAgo = formatRelativeTime;

/**
 * Format date according to specified format
 */
export const formatDateWithFormat = (date: Date | string, format: string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  switch (format) {
    case 'YYYY-MM-DD':
      return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
    case 'MM/DD/YYYY':
      return `${String(dateObj.getMonth() + 1).padStart(2, '0')}/${String(dateObj.getDate()).padStart(2, '0')}/${dateObj.getFullYear()}`;
    case 'DD/MM/YYYY':
      return `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${dateObj.getFullYear()}`;
    case 'MMM DD, YYYY':
      return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    case 'MMMM DD, YYYY':
      return dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    default:
      return dateObj.toLocaleDateString();
  }
};

/**
 * Format a duration in seconds to a human-readable string
 */
export const formatDuration = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? 's' : ''}`;
  }
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (hours < 24) {
    if (remainingMinutes === 0) {
      return `${hours} hour${hours !== 1 ? 's' : ''}`;
    }
    return `${hours} hour${hours !== 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
  }
  
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;
  
  if (remainingHours === 0) {
    return `${days} day${days !== 1 ? 's' : ''}`;
  }
  return `${days} day${days !== 1 ? 's' : ''} ${remainingHours} hour${remainingHours !== 1 ? 's' : ''}`;
};
