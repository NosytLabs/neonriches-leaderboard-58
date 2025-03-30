
import { format, formatDistance, differenceInDays } from 'date-fns';

/**
 * Format a date to a human readable string
 */
export const formatDate = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, 'PPP');
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

/**
 * Format a date as a relative time (e.g. "2 days ago")
 */
export const formatRelativeTime = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return formatDistance(dateObj, new Date(), { addSuffix: true });
  } catch (error) {
    console.error('Error formatting relative time:', error);
    return 'Unknown time';
  }
};

/**
 * Calculate days until a future date
 */
export const daysUntil = (futureDate: string | Date): number => {
  try {
    const dateObj = typeof futureDate === 'string' ? new Date(futureDate) : futureDate;
    return Math.max(0, differenceInDays(dateObj, new Date()));
  } catch (error) {
    console.error('Error calculating days until:', error);
    return 0;
  }
};

/**
 * Check if a date is in the past
 */
export const isPastDate = (date: string | Date): boolean => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj < new Date();
  } catch (error) {
    console.error('Error checking if date is past:', error);
    return false;
  }
};

/**
 * Check if a date is in the future
 */
export const isFutureDate = (date: string | Date): boolean => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj > new Date();
  } catch (error) {
    console.error('Error checking if date is future:', error);
    return false;
  }
};

/**
 * Format a date as a time (e.g. "3:30 PM")
 */
export const formatTime = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, 'p');
  } catch (error) {
    console.error('Error formatting time:', error);
    return 'Invalid time';
  }
};

export default {
  formatDate,
  formatRelativeTime,
  daysUntil,
  isPastDate,
  isFutureDate,
  formatTime
};
