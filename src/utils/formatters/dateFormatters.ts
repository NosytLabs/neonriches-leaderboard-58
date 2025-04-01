
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
