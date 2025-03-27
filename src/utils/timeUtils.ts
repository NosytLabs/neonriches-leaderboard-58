
/**
 * Utility functions for handling time and date calculations
 */

/**
 * Calculate time left from now to a target date
 * @param targetDate The target date to calculate time remaining to
 * @returns Object containing days, hours, minutes, seconds remaining
 */
export const getTimeLeft = (targetDate: Date) => {
  const difference = targetDate.getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

/**
 * Format a date to a human-readable string
 * @param date The date to format
 * @returns Formatted date string
 */
export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};
