
import { formatDistance, format, formatRelative, subDays } from 'date-fns';

/**
 * Format a date string to a readable format
 * @param dateString ISO date string
 * @param formatStr Format string
 * @returns Formatted date string
 */
export const formatDate = (dateString: string, formatStr: string = 'MMM dd, yyyy'): string => {
  try {
    const date = new Date(dateString);
    return format(date, formatStr);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

/**
 * Get relative time from now (e.g. "2 days ago", "3 hours ago")
 * @param dateString ISO date string
 * @returns Relative time string
 */
export const getRelativeTime = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    return formatDistance(date, now, { addSuffix: true });
  } catch (error) {
    console.error('Error getting relative time:', error);
    return 'Unknown time';
  }
};

/**
 * Alias for getRelativeTime for backward compatibility
 */
export const getRelativeTimeString = getRelativeTime;

/**
 * Format a date relative to the current date
 * @param dateString ISO date string
 * @returns Relative date format
 */
export const getRelativeDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    return formatRelative(date, now);
  } catch (error) {
    console.error('Error getting relative date:', error);
    return 'Unknown date';
  }
};

/**
 * Get a date in the past
 * @param days Number of days in the past
 * @returns Date object
 */
export const getPastDate = (days: number): Date => {
  return subDays(new Date(), days);
};

/**
 * Check if a date is in the past
 * @param dateString ISO date string
 * @returns Boolean indicating if date is in the past
 */
export const isDateInPast = (dateString: string): boolean => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    return date < now;
  } catch (error) {
    console.error('Error checking if date is in past:', error);
    return false;
  }
};

/**
 * Check if a date is in the future
 * @param dateString ISO date string
 * @returns Boolean indicating if date is in the future
 */
export const isDateInFuture = (dateString: string): boolean => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    return date > now;
  } catch (error) {
    console.error('Error checking if date is in future:', error);
    return false;
  }
};

/**
 * Get the difference in days between two dates
 * @param date1 ISO date string
 * @param date2 ISO date string (defaults to now)
 * @returns Number of days difference
 */
export const getDaysDifference = (date1: string, date2?: string): number => {
  try {
    const firstDate = new Date(date1);
    const secondDate = date2 ? new Date(date2) : new Date();
    const diffTime = Math.abs(secondDate.getTime() - firstDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  } catch (error) {
    console.error('Error calculating days difference:', error);
    return 0;
  }
};
