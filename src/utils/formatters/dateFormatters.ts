
/**
 * Date formatting utility functions
 */

/**
 * Format a date to a readable string
 * @param dateStr Date string or Date object
 * @param style Date formatting style (default, short, medium, long, full)
 * @returns Formatted date string
 */
export const formatDate = (
  dateStr?: string | Date | null, 
  style: string = 'medium'
): string => {
  if (!dateStr) return 'N/A';
  
  const date = typeof dateStr === 'string' ? new Date(dateStr) : dateStr;
  
  const options: Intl.DateTimeFormatOptions = {};
  
  switch (style) {
    case 'short':
      options.year = 'numeric';
      options.month = 'numeric';
      options.day = 'numeric';
      break;
    case 'medium':
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
      break;
    case 'long':
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
      break;
    case 'full':
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
      options.weekday = 'long';
      break;
    default:
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
  }
  
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

/**
 * Format a date to relative time (e.g., "2 hours ago")
 * @param dateStr Date string or Date object
 * @returns Relative time string
 */
export const formatRelativeTime = (dateStr?: string | Date): string => {
  if (!dateStr) return 'N/A';
  
  const date = typeof dateStr === 'string' ? new Date(dateStr) : dateStr;
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
