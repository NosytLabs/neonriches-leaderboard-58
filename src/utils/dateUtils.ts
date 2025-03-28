
/**
 * Format a date string or Date object to a human-readable format
 * @param date Date string or object
 * @param format The format to use
 * @returns Formatted date string
 */
export const formatDate = (date: string | Date, format: 'short' | 'medium' | 'long' = 'medium'): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: format === 'short' ? 'short' : 'long',
    day: 'numeric',
  };
  
  if (format === 'long') {
    options.hour = '2-digit';
    options.minute = '2-digit';
  }
  
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};

/**
 * Checks if an event is currently active
 * @param startDate Start date of the event
 * @param endDate End date of the event
 * @returns Whether the event is active
 */
export const isEventActive = (startDate: string | Date, endDate: string | Date): boolean => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return now >= start && now <= end;
};

/**
 * Calculate days until a specific date
 * @param targetDate Target date
 * @returns Number of days until the target date
 */
export const daysUntil = (targetDate: string | Date): number => {
  const now = new Date();
  const target = new Date(targetDate);
  const diffTime = Math.abs(target.getTime() - now.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

/**
 * Get the date of the next Monday
 * @returns Date object for the next Monday
 */
export const getNextMondayDate = (): Date => {
  const date = new Date();
  const day = date.getDay();
  const daysUntilNextMonday = day === 0 ? 1 : 8 - day;
  
  date.setDate(date.getDate() + daysUntilNextMonday);
  date.setHours(0, 0, 0, 0);
  
  return date;
};

/**
 * Get days until the end of the current month
 * @returns Number of days until end of month
 */
export const getDaysUntilEndOfMonth = (): number => {
  const today = new Date();
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const diffTime = Math.abs(lastDay.getTime() - today.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

export default {
  formatDate,
  isEventActive,
  daysUntil,
  getNextMondayDate,
  getDaysUntilEndOfMonth
};
