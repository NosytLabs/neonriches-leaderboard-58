
import { format, formatDistanceToNow } from 'date-fns';

/**
 * Format a date to a readable string
 */
export const formatDate = (date: string | Date): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'MMM d, yyyy');
};

/**
 * Format a date with time
 */
export const formatDateTime = (date: string | Date): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'MMM d, yyyy h:mm a');
};

/**
 * Format time only
 */
export const formatTime = (date: string | Date): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'h:mm a');
};

/**
 * Format a date as a relative time (e.g. "2 days ago")
 */
export const formatTimeAgo = (date: string | Date): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true });
};

/**
 * Format relative time between two dates
 */
export const formatRelativeTime = (start: Date | string, end: Date | string): string => {
  const startDate = typeof start === 'string' ? new Date(start) : start;
  const endDate = typeof end === 'string' ? new Date(end) : end;
  
  // Calculate time difference in milliseconds
  const diff = endDate.getTime() - startDate.getTime();
  
  // Convert to days
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''}`;
  }
  
  // Convert to hours
  const hours = Math.floor(diff / (1000 * 60 * 60));
  
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  }
  
  // Convert to minutes
  const minutes = Math.floor(diff / (1000 * 60));
  
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }
  
  // Convert to seconds
  const seconds = Math.floor(diff / 1000);
  
  return `${seconds} second${seconds !== 1 ? 's' : ''}`;
};

/**
 * Check if a date is in the past
 */
export const isPastDate = (date: string | Date): boolean => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj < new Date();
};

/**
 * Calculate days remaining until a date
 */
export const daysUntil = (date: string | Date): number => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffTime = dateObj.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Calculate days elapsed since a date
 */
export const daysSince = (date: string | Date): number => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffTime = now.getTime() - dateObj.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Check if an event is active based on start and end dates
 */
export const isEventActive = (startDate: string | Date, endDate: string | Date): boolean => {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
  const now = new Date();
  
  return start <= now && now <= end;
};

/**
 * Format a date range (start to end)
 */
export const formatDateRange = (startDate: string | Date, endDate: string | Date): string => {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
  
  return `${format(start, 'MMM d, yyyy')} - ${format(end, 'MMM d, yyyy')}`;
};

/**
 * Check if two date ranges overlap
 */
export const doDateRangesOverlap = (
  startA: string | Date, 
  endA: string | Date, 
  startB: string | Date, 
  endB: string | Date
): boolean => {
  const a1 = typeof startA === 'string' ? new Date(startA) : startA;
  const a2 = typeof endA === 'string' ? new Date(endA) : endA;
  const b1 = typeof startB === 'string' ? new Date(startB) : startB;
  const b2 = typeof endB === 'string' ? new Date(endB) : endB;
  
  return (a1 <= b2) && (b1 <= a2);
};
