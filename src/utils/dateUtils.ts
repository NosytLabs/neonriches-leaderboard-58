
/**
 * Format a date string into a readable format
 */
export const formatDate = (dateString: string, options?: Intl.DateTimeFormatOptions): string => {
  const date = new Date(dateString);
  const defaultOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  
  return new Intl.DateTimeFormat('en-US', options || defaultOptions).format(date);
};

/**
 * Get the week number for a given date
 */
export const getWeekNumber = (date: Date): number => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

/**
 * Get days remaining until next Monday
 */
export const getDaysUntilNextMonday = (): number => {
  const today = new Date();
  const day = today.getDay(); // 0 is Sunday, 1 is Monday
  const daysUntilMonday = day === 0 ? 1 : day === 1 ? 7 : 8 - day;
  return daysUntilMonday;
};

/**
 * Get next Monday date as string
 */
export const getNextMondayDate = (): string => {
  const today = new Date();
  const day = today.getDay(); // 0 is Sunday, 1 is Monday
  const daysUntilNextMonday = day === 1 ? 7 : (8 - day) % 7; // If today is Monday, get next Monday
  
  const nextMonday = new Date(today);
  nextMonday.setDate(today.getDate() + daysUntilNextMonday);
  nextMonday.setHours(0, 0, 0, 0);
  
  return nextMonday.toISOString();
};

/**
 * Get the number of days in a month
 */
export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

/**
 * Get the number of days until the end of the month
 */
export const getDaysUntilEndOfMonth = (): number => {
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  return lastDayOfMonth.getDate() - today.getDate();
};

/**
 * Format seconds into a readable time string (e.g., "2d 5h 30m")
 */
export const formatTimeRemaining = (totalSeconds: number): string => {
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  
  if (days > 0) {
    return `${days}d ${hours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

/**
 * Check if an event is currently active
 */
export const isEventActive = (startDate: string, endDate: string): boolean => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return now >= start && now <= end;
};

/**
 * Get the number of days until a target date
 */
export const daysUntil = (targetDate: string): number => {
  const target = new Date(targetDate);
  const today = new Date();
  
  // Reset time portion for accurate day calculation
  target.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  
  const diffTime = target.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return Math.max(0, diffDays);
};

/**
 * Parse a date string or Date object into a Date object
 */
export const parseDate = (date: Date | string): Date => {
  return typeof date === 'string' ? new Date(date) : date;
};
