
/**
 * Date formatting utilities
 */

/**
 * Format a date string to a readable format
 * @param dateString - ISO date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return 'N/A';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch (e) {
    return 'Invalid Date';
  }
};

/**
 * Format a timestamp to a relative time string (e.g., "2 hours ago")
 * @param timestamp - ISO date string or timestamp
 * @returns Relative time string
 */
export const formatTimeAgo = (timestamp: string | number): string => {
  if (!timestamp) return 'N/A';
  
  let date: Date;
  if (typeof timestamp === 'string') {
    date = new Date(timestamp);
  } else {
    date = new Date(timestamp);
  }
  
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  // Convert to seconds
  const seconds = Math.floor(diff / 1000);
  
  // Less than a minute
  if (seconds < 60) {
    return 'just now';
  }
  
  // Less than an hour
  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  }
  
  // Less than a day
  if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }
  
  // Less than a week
  if (seconds < 604800) {
    const days = Math.floor(seconds / 86400);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
  
  // Less than a month
  if (seconds < 2592000) {
    const weeks = Math.floor(seconds / 604800);
    return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  }
  
  // Less than a year
  if (seconds < 31536000) {
    const months = Math.floor(seconds / 2592000);
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  }
  
  // More than a year
  const years = Math.floor(seconds / 31536000);
  return `${years} year${years !== 1 ? 's' : ''} ago`;
};

/**
 * Format a date as a relative time (e.g. "2 days ago", "in 3 hours")
 */
export const formatRelativeTime = (date: string | Date): string => {
  const now = new Date();
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  
  // Invalid date
  if (isNaN(targetDate.getTime())) return 'Invalid date';
  
  const diffMs = targetDate.getTime() - now.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);
  
  if (diffSec < 0) {
    // Past
    if (diffSec > -60) return `${Math.abs(diffSec)} seconds ago`;
    if (diffMin > -60) return `${Math.abs(diffMin)} minutes ago`;
    if (diffHour > -24) return `${Math.abs(diffHour)} hours ago`;
    if (diffDay > -30) return `${Math.abs(diffDay)} days ago`;
    
    const diffMonth = Math.round(diffDay / 30);
    if (diffMonth > -12) return `${Math.abs(diffMonth)} months ago`;
    
    const diffYear = Math.round(diffDay / 365);
    return `${Math.abs(diffYear)} years ago`;
  } else {
    // Future
    if (diffSec < 60) return `in ${diffSec} seconds`;
    if (diffMin < 60) return `in ${diffMin} minutes`;
    if (diffHour < 24) return `in ${diffHour} hours`;
    if (diffDay < 30) return `in ${diffDay} days`;
    
    const diffMonth = Math.round(diffDay / 30);
    if (diffMonth < 12) return `in ${diffMonth} months`;
    
    const diffYear = Math.round(diffDay / 365);
    return `in ${diffYear} years`;
  }
};
