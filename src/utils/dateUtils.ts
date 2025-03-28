
/**
 * Parse a date string into a Date object
 * @param dateString The date string to parse
 * @returns Date object
 */
export const parseDate = (dateString: string): Date => {
  try {
    return new Date(dateString);
  } catch (e) {
    return new Date();
  }
};

/**
 * Check if an event is currently active
 * @param startDate The event start date
 * @param endDate The event end date
 * @returns Boolean indicating if the event is active
 */
export const isEventActive = (startDate: string, endDate: string): boolean => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return now >= start && now <= end;
};

/**
 * Calculate days until the end of the month
 * @returns Number of days until the end of the month
 */
export const getDaysUntilEndOfMonth = (): number => {
  const now = new Date();
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const diff = lastDay.getDate() - now.getDate();
  return diff + 1; // +1 to include current day
};

/**
 * Get the next Monday's date
 * @returns Date of the next Monday
 */
export const getNextMondayDate = (): Date => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const daysUntilMonday = day === 0 ? 1 : 8 - day;
  
  const nextMonday = new Date(now);
  nextMonday.setDate(now.getDate() + daysUntilMonday);
  return nextMonday;
};

/**
 * Calculate days until a given date
 * @param targetDate The target date to calculate days until
 * @returns Number of days until the target date
 */
export const daysUntil = (targetDate: string | Date): number => {
  const now = new Date();
  const target = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
  
  // Reset hours to compare just the days
  now.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  
  const diffTime = target.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays > 0 ? diffDays : 0;
};

export default {
  parseDate,
  isEventActive,
  getDaysUntilEndOfMonth,
  getNextMondayDate,
  daysUntil
};
