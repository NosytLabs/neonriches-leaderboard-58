
import { format, formatDistanceToNow, isToday, isYesterday, parseISO } from 'date-fns';

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

export const getDaysInMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const isDateInPast = (date: string | Date): boolean => {
  const compareDate = new Date(date);
  const today = new Date();
  return compareDate < today;
};

export const isDateInFuture = (date: string | Date): boolean => {
  const compareDate = new Date(date);
  const today = new Date();
  return compareDate > today;
};

export const isDateToday = (date: string | Date): boolean => {
  const compareDate = new Date(date);
  return isToday(compareDate);
};

export default {
  formatDate,
  getRelativeTimeString,
  getDaysInMonth,
  isDateInPast,
  isDateInFuture,
  isDateToday
};
