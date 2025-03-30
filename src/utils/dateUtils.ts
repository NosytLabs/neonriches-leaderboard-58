
import { format, differenceInDays, isValid, parseISO } from 'date-fns';

/**
 * Convert a string date to a Date object or keep a Date object as is
 * @param date Date string or Date object
 * @returns Date object
 */
export const ensureDate = (date: string | Date | undefined | null): Date | null => {
  if (!date) return null;
  
  if (typeof date === 'string') {
    return new Date(date);
  }
  
  return date;
};

/**
 * Format a date to a readable string
 * @param date Date to format
 * @param formatString Format string to use
 * @returns Formatted date string
 */
export const formatDate = (date: string | Date | undefined | null): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid date';
  
  return format(dateObj, 'MMM d, yyyy');
};

/**
 * Convert a string date to a Date object for React components
 * This function is useful for components that accept a Date prop
 * but receive a string from an API
 */
export const toDateObject = (dateString: string | Date | undefined | null): Date | undefined => {
  if (!dateString) return undefined;
  
  if (typeof dateString === 'string') {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date string: ${dateString}`);
      return undefined;
    }
    return date;
  }
  
  return dateString;
};

/**
 * Format a date string or Date object to a human-readable string
 */
export const formatDateString = (date: string | Date | undefined | null): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString();
};

/**
 * Check if an event is currently active based on its start and end dates
 */
export const isEventActive = (startDate: string | Date, endDate: string | Date): boolean => {
  const now = new Date();
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
  
  return now >= start && now <= end;
};

/**
 * Calculate number of days until a date
 */
export const daysUntil = (date: string | Date): number => {
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  
  // If the date is in the past, return 0
  if (targetDate < now) return 0;
  
  return differenceInDays(targetDate, now);
};

/**
 * Format a date as relative time (e.g., "2 days ago")
 */
export const formatRelativeTime = (date: string | Date): string => {
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  
  const diffInSeconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
  }
  
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
};
