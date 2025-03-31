
import { format, formatDistanceToNow, isToday, isYesterday, parseISO, differenceInDays, addDays, isBefore, isAfter, subDays } from 'date-fns';

/**
 * Format a date string into a human-readable format
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) {
    return 'N/A';
  }
  
  try {
    const date = new Date(dateString);
    
    if (isToday(date)) {
      return `Today at ${format(date, 'h:mm a')}`;
    }
    
    if (isYesterday(date)) {
      return `Yesterday at ${format(date, 'h:mm a')}`;
    }
    
    return format(date, 'MMM d, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

/**
 * Format a date with time
 */
export const formatDateTime = (dateString: string | Date): string => {
  if (!dateString) {
    return 'N/A';
  }
  
  try {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return format(date, 'MMM d, yyyy h:mm a');
  } catch (error) {
    console.error('Error formatting date time:', error);
    return 'Invalid date';
  }
};

/**
 * Get relative time (e.g., "5 minutes ago")
 */
export const getRelativeTimeString = (dateString: string): string => {
  if (!dateString) {
    return 'N/A';
  }
  
  try {
    const date = typeof dateString === 'string' ? parseISO(dateString) : new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    console.error('Error formatting relative time:', error);
    return 'Invalid date';
  }
};

/**
 * Get the number of days in a month
 */
export const getDaysInMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

/**
 * Check if a date is in the past
 */
export const isDateInPast = (date: string | Date): boolean => {
  const compareDate = new Date(date);
  const today = new Date();
  return isBefore(compareDate, today);
};

/**
 * Check if a date is in the future
 */
export const isDateInFuture = (date: string | Date): boolean => {
  const compareDate = new Date(date);
  const today = new Date();
  return isAfter(compareDate, today);
};

/**
 * Check if a date is today
 */
export const isDateToday = (date: string | Date): boolean => {
  const compareDate = new Date(date);
  return isToday(compareDate);
};

/**
 * Calculate date difference in days
 */
export const getDateDifferenceInDays = (startDate: string | Date, endDate: string | Date): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return differenceInDays(end, start);
};

/**
 * Add days to a date
 */
export const addDaysToDate = (date: string | Date, days: number): Date => {
  const baseDate = new Date(date);
  return addDays(baseDate, days);
};

/**
 * Subtract days from a date
 */
export const subtractDaysFromDate = (date: string | Date, days: number): Date => {
  const baseDate = new Date(date);
  return subDays(baseDate, days);
};

/**
 * Format a date range (e.g., "Jun 5 - Jun 10, 2023")
 */
export const formatDateRange = (startDate: string | Date, endDate: string | Date): string => {
  try {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth()) {
      return `${format(start, 'MMM d')} - ${format(end, 'd, yyyy')}`;
    } else if (start.getFullYear() === end.getFullYear()) {
      return `${format(start, 'MMM d')} - ${format(end, 'MMM d, yyyy')}`;
    } else {
      return `${format(start, 'MMM d, yyyy')} - ${format(end, 'MMM d, yyyy')}`;
    }
  } catch (error) {
    console.error('Error formatting date range:', error);
    return 'Invalid date range';
  }
};

/**
 * Export all date utility functions
 */
export default {
  formatDate,
  formatDateTime,
  getRelativeTimeString,
  getDaysInMonth,
  isDateInPast,
  isDateInFuture,
  isDateToday,
  getDateDifferenceInDays,
  addDaysToDate,
  subtractDaysFromDate,
  formatDateRange
};
