
/**
 * Format time left until a given date
 */
export const formatTimeLeft = (endDate: Date): string => {
  const now = new Date();
  const diffTime = endDate.getTime() - now.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  
  if (diffDays > 0) {
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ${diffHours} hour${diffHours !== 1 ? 's' : ''}`;
  }
  
  if (diffHours > 0) {
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''}`;
  }
  
  if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''}`;
  }
  
  return 'Less than a minute';
};

/**
 * Format a date to a string representation
 */
export const formatDate = (date: string | Date | null | undefined, formatString: string = 'MMM d, yyyy'): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  try {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const day = dateObj.getDate();
    
    // Simple formatter for common patterns
    if (formatString === 'MMM d, yyyy') {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[month]} ${day}, ${year}`;
    }
    
    if (formatString === 'yyyy-MM-dd') {
      const monthStr = (month + 1).toString().padStart(2, '0');
      const dayStr = day.toString().padStart(2, '0');
      return `${year}-${monthStr}-${dayStr}`;
    }
    
    // Default fallback format
    return dateObj.toLocaleDateString();
  } catch (error) {
    return 'Invalid date';
  }
};

/**
 * Get relative time string (e.g., "2 days ago")
 */
export const getRelativeTimeString = (date: string | Date): string => {
  const now = new Date();
  const past = typeof date === 'string' ? new Date(date) : date;
  
  const diffTime = Math.abs(now.getTime() - past.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
  
  if (diffDays > 365) {
    return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) !== 1 ? 's' : ''} ago`;
  }
  
  if (diffDays > 30) {
    return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) !== 1 ? 's' : ''} ago`;
  }
  
  if (diffDays > 0) {
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  }
  
  if (diffHours > 0) {
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  }
  
  if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
  }
  
  return `${diffSeconds} second${diffSeconds !== 1 ? 's' : ''} ago`;
};

/**
 * Check if date is in the past
 */
export const isDateInPast = (date: string | Date): boolean => {
  const checkDate = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  return checkDate < now;
};

/**
 * Check if date is in the future
 */
export const isDateInFuture = (date: string | Date): boolean => {
  const checkDate = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  return checkDate > now;
};

/**
 * Check if date is today
 */
export const isDateToday = (date: string | Date): boolean => {
  const checkDate = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  
  return checkDate.getDate() === now.getDate() &&
    checkDate.getMonth() === now.getMonth() &&
    checkDate.getFullYear() === now.getFullYear();
};

/**
 * Get the number of days in a month
 */
export const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month + 1, 0).getDate();
};
