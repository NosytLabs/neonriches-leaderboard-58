
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

/**
 * Get remaining time until a future date
 */
export const getTimeLeft = (targetDate: Date | string) => {
  const target = targetDate instanceof Date ? targetDate : new Date(targetDate);
  const now = new Date();
  
  // If target date is in the past, return zeros
  if (target.getTime() < now.getTime()) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const diff = target.getTime() - now.getTime();
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
};
