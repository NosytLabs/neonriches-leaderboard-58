
import { format, formatDistanceToNow, differenceInDays } from 'date-fns';

/**
 * Format a date to a readable string
 */
export const formatDate = (date: Date | string): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  return format(dateObj, 'MMM d, yyyy');
};

/**
 * Format a date as a relative time (e.g., "2 days ago")
 */
export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  return formatDistanceToNow(dateObj, { addSuffix: true });
};

/**
 * Get days difference between two dates
 */
export const getDaysDifference = (dateA: Date | string, dateB: Date | string = new Date()): number => {
  const dateObjA = dateA instanceof Date ? dateA : new Date(dateA);
  const dateObjB = dateB instanceof Date ? dateB : new Date(dateB);
  return Math.abs(differenceInDays(dateObjA, dateObjB));
};

/**
 * Format currency amount
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format timestamp for events
 */
export const formatEventTime = (date: Date | string): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  return format(dateObj, 'MMM d, yyyy h:mm a');
};
