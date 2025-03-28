
/**
 * Formats a date using Intl.DateTimeFormat for consistency
 * @param date Date to format
 * @param options Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
): string => {
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
  
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};

/**
 * Formats a date in a relative way (e.g., "2 days ago")
 * @param date Date to format
 * @returns Relative time string
 */
export const formatRelativeTime = (date: Date | string | number): string => {
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
  
  const now = new Date();
  const diffMs = now.getTime() - dateObj.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffSecs < 60) {
    return 'just now';
  } else if (diffMins < 60) {
    return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  } else if (diffDays < 30) {
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  } else {
    return formatDate(dateObj, { month: 'short', day: 'numeric', year: 'numeric' });
  }
};

/**
 * Formats a date for display in the Royal Court
 * @param date Date to format
 * @returns Royal-style date string
 */
export const formatRoyalDate = (date: Date | string | number): string => {
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
  
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const year = dateObj.getFullYear();
  
  // Add ordinal suffix to day
  const suffix = getDaySuffix(day);
  
  return `the ${day}${suffix} of ${month}, Year of Our Realm ${year}`;
};

/**
 * Gets the ordinal suffix for a day of the month
 * @param day Day of the month (1-31)
 * @returns Ordinal suffix ('st', 'nd', 'rd', or 'th')
 */
export const getDaySuffix = (day: number): string => {
  if (day > 3 && day < 21) return 'th';
  
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

/**
 * Calculates the time difference between two dates in days
 * @param date1 First date 
 * @param date2 Second date (defaults to now)
 * @returns Number of days between dates
 */
export const getDaysBetween = (
  date1: Date | string | number,
  date2: Date | string | number = new Date()
): number => {
  const dateObj1 = typeof date1 === 'string' || typeof date1 === 'number' 
    ? new Date(date1) 
    : date1;
  
  const dateObj2 = typeof date2 === 'string' || typeof date2 === 'number' 
    ? new Date(date2) 
    : date2;
  
  // Set hours, minutes, seconds, and milliseconds to 0 to only compare dates
  dateObj1.setHours(0, 0, 0, 0);
  dateObj2.setHours(0, 0, 0, 0);
  
  // Calculate difference in days
  const diffMs = Math.abs(dateObj2.getTime() - dateObj1.getTime());
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
};
