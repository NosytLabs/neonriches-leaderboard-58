
/**
 * Utility functions for working with dates consistently
 */

// Convert any date format to a Date object
export const toDateObject = (date: string | Date | number): Date => {
  if (date instanceof Date) return date;
  if (typeof date === 'string') return new Date(date);
  if (typeof date === 'number') return new Date(date);
  return new Date();
};

// Ensure we have a date string
export const ensureDate = (date: string | Date | number | undefined): string => {
  if (!date) return new Date().toISOString();
  if (date instanceof Date) return date.toISOString();
  if (typeof date === 'string') return date;
  return new Date(date).toISOString();
};

// Format a date string consistently
export const formatDateString = (dateString: string | Date): string => {
  const date = toDateObject(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Determine if an event is active
export const isEventActive = (
  startDate: string | Date,
  endDate: string | Date
): boolean => {
  const now = new Date();
  const start = toDateObject(startDate);
  const end = toDateObject(endDate);
  
  return now >= start && now <= end;
};

// Calculate days until a date
export const daysUntil = (date: string | Date): number => {
  const targetDate = toDateObject(date);
  const now = new Date();
  
  const diffTime = targetDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Format relative time
export const formatRelativeTime = (dateString: string | Date): string => {
  const date = toDateObject(dateString);
  const now = new Date();
  
  const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffSeconds < 60) return `${diffSeconds} seconds ago`;
  if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)} minutes ago`;
  if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)} hours ago`;
  if (diffSeconds < 2592000) return `${Math.floor(diffSeconds / 86400)} days ago`;
  if (diffSeconds < 31536000) return `${Math.floor(diffSeconds / 2592000)} months ago`;
  return `${Math.floor(diffSeconds / 31536000)} years ago`;
};
