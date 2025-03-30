
import { format, parse, differenceInDays, parseISO, isValid } from 'date-fns';

/**
 * Ensures a date is a Date object, converting from string if necessary
 */
export const ensureDate = (date: string | Date | undefined | null): Date | null => {
  if (!date) return null;
  if (date instanceof Date) return date;
  
  try {
    const dateObj = new Date(date);
    return isValid(dateObj) ? dateObj : null;
  } catch {
    return null;
  }
};

/**
 * Converts a date string to a Date object
 */
export const toDateObject = (dateString: string | undefined): Date | null => {
  if (!dateString) return null;
  
  try {
    const dateObj = parseISO(dateString);
    return isValid(dateObj) ? dateObj : null;
  } catch {
    return null;
  }
};

/**
 * Formats a date string according to the specified format
 */
export const formatDateString = (dateString: string | undefined, formatStr: string = 'PP'): string => {
  if (!dateString) return 'N/A';
  
  const dateObj = toDateObject(dateString);
  if (!dateObj) return 'Invalid date';
  
  return format(dateObj, formatStr);
};

/**
 * Checks if an event is currently active
 */
export const isEventActive = (startDate: string | Date, endDate: string | Date): boolean => {
  const now = new Date();
  const start = ensureDate(startDate);
  const end = ensureDate(endDate);
  
  if (!start || !end) return false;
  
  return start <= now && now <= end;
};

/**
 * Calculates the number of days until a specific date
 */
export const daysUntil = (date: string | Date): number => {
  const targetDate = ensureDate(date);
  if (!targetDate) return 0;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return Math.max(0, differenceInDays(targetDate, today));
};

/**
 * Formats a date relative to the current time (e.g., "3 days ago")
 */
export const formatRelativeTime = (date: string | Date | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = ensureDate(date);
  if (!dateObj) return 'Invalid date';
  
  const now = new Date();
  const diffTime = now.getTime() - dateObj.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
};

/**
 * Formats a date to a standard display format
 */
export const formatDate = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid date';
  
  return format(dateObj, 'MMM d, yyyy');
};
