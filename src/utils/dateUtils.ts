
/**
 * Utility functions for date handling
 */

/**
 * Parse a Date or string into a Date object
 */
export function parseDate(date: Date | string): Date {
  if (typeof date === 'string') {
    return new Date(date);
  }
  return date;
}

/**
 * Format a date as a human-readable string
 */
export function formatDate(date: Date | string, options: Intl.DateTimeFormatOptions = {}): string {
  const parsedDate = parseDate(date);
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
    ...options
  };
  
  return parsedDate.toLocaleDateString(undefined, defaultOptions);
}

/**
 * Calculate if a date is in the past
 */
export function isPastDate(date: Date | string): boolean {
  const parsedDate = parseDate(date);
  return parsedDate.getTime() < Date.now();
}

/**
 * Calculate if a date is in the future
 */
export function isFutureDate(date: Date | string): boolean {
  const parsedDate = parseDate(date);
  return parsedDate.getTime() > Date.now();
}

/**
 * Calculate if an event is currently active based on start and end dates
 */
export function isEventActive(startDate: Date | string, endDate: Date | string): boolean {
  const now = Date.now();
  const start = parseDate(startDate).getTime();
  const end = parseDate(endDate).getTime();
  
  return now >= start && now <= end;
}

/**
 * Calculate days until a date
 */
export function daysUntil(date: Date | string): number {
  const parsedDate = parseDate(date);
  const now = new Date();
  
  // Reset time components to compare just the dates
  now.setHours(0, 0, 0, 0);
  const targetDate = new Date(parsedDate);
  targetDate.setHours(0, 0, 0, 0);
  
  const diffTime = targetDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
