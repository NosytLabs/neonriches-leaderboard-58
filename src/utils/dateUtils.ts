
/**
 * Parse a date string or Date object to a Date object
 * @param date Date string or Date object
 * @returns Date object
 */
export const parseDate = (date: string | Date): Date => {
  if (date instanceof Date) {
    return date;
  }
  return new Date(date);
};

/**
 * Format a date in a readable format
 * @param date Date to format
 * @returns Formatted date string
 */
export const formatDate = (date: string | Date): string => {
  const parsedDate = parseDate(date);
  return parsedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Get the number of days until a specific date
 * @param targetDate The target date
 * @returns Number of days until the date
 */
export const daysUntil = (targetDate: string | Date): number => {
  const now = new Date();
  const target = parseDate(targetDate);
  
  // Reset time components for accurate day calculation
  now.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  
  const diffTime = target.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

/**
 * Determine if an event is currently active
 * @param startDate Event start date
 * @param endDate Event end date
 * @returns Boolean indicating if the event is active
 */
export const isEventActive = (startDate: string | Date, endDate: string | Date): boolean => {
  const now = new Date();
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  
  return now >= start && now <= end;
};

/**
 * Get the next Monday's date
 * @returns Date object for next Monday
 */
export const getNextMondayDate = (): Date => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  // Calculate days until next Monday (if today is Monday, go to next week)
  const daysUntilNextMonday = dayOfWeek === 1 ? 7 : (8 - dayOfWeek) % 7;
  
  const nextMonday = new Date(now);
  nextMonday.setDate(now.getDate() + daysUntilNextMonday);
  nextMonday.setHours(0, 0, 0, 0);
  
  return nextMonday;
};

/**
 * Calculate the number of days until the end of the current month
 * @returns Number of days until the end of the month
 */
export const getDaysUntilEndOfMonth = (): number => {
  const now = new Date();
  const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  
  // Reset time components for accurate day calculation
  now.setHours(0, 0, 0, 0);
  
  const diffTime = lastDayOfMonth.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

export default {
  parseDate,
  formatDate,
  daysUntil,
  isEventActive,
  getNextMondayDate,
  getDaysUntilEndOfMonth
};
