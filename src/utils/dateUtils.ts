
/**
 * Format a date into a human-readable string
 * @param dateStr Date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateStr: string | Date): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Check if an event is currently active based on start and end dates
 * @param startDate Start date of the event
 * @param endDate End date of the event
 * @returns Boolean indicating if the event is currently active
 */
export const isEventActive = (startDate: string | Date, endDate: string | Date): boolean => {
  try {
    const now = new Date();
    const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
    
    return start <= now && now <= end;
  } catch (error) {
    console.error('Error checking if event is active:', error);
    return false;
  }
};

/**
 * Format a date and time into a human-readable string
 * @param dateStr Date string to format
 * @returns Formatted date and time string
 */
export const formatDateTime = (dateStr: string | Date): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Calculate days until a given date
 * @param dateStr Target date
 * @returns Number of days until the target date
 */
export const daysUntil = (dateStr: string | Date): number => {
  const now = new Date();
  const targetDate = new Date(dateStr);
  
  // Reset time part for accurate day calculation
  now.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);
  
  const diffTime = targetDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

export default {
  formatDate,
  isEventActive,
  formatDateTime,
  daysUntil
};
