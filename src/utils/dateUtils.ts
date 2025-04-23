
/**
 * Format a date to a readable format
 * @param dateString ISO date string or Date object
 * @returns Formatted date string
 */
export const formatDate = (dateString?: string | Date): string => {
  if (!dateString) return 'N/A';
  
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Get the number of days until the next specific day of the week
 * @param targetDay Day of week (0 = Sunday, 1 = Monday, etc.)
 * @returns Number of days
 */
export const getDaysUntil = (targetDay: number): number => {
  const today = new Date();
  const currentDay = today.getDay();
  
  // Calculate days until target day
  let daysUntil = targetDay - currentDay;
  
  // If target day is earlier in the week, add 7 to get to next week
  if (daysUntil <= 0) {
    daysUntil += 7;
  }
  
  return daysUntil;
};

/**
 * Get the number of days until next Monday
 * @returns Number of days until next Monday
 */
export const getDaysUntilNextMonday = (): number => {
  return getDaysUntil(1); // 1 = Monday
};

/**
 * Format relative time (e.g., "2 days ago", "just now")
 * @param dateString ISO date string or Date object
 * @returns Formatted relative time string
 */
export const formatRelativeTime = (dateString?: string | Date): string => {
  if (!dateString) return 'N/A';
  
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }
  
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'just now';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} ${diffInMonths === 1 ? 'month' : 'months'} ago`;
  }
  
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} ${diffInYears === 1 ? 'year' : 'years'} ago`;
};
