
/**
 * Format a date to a human-readable string
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date';
  
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
};

/**
 * Format a timestamp as time ago (e.g., "5 minutes ago")
 */
export const formatTimeAgo = (dateString: string): string => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date';
  
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (secondsAgo < 60) return `${secondsAgo} second${secondsAgo !== 1 ? 's' : ''} ago`;
  
  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  
  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  
  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 30) return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
  
  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) return `${monthsAgo} month${monthsAgo !== 1 ? 's' : ''} ago`;
  
  const yearsAgo = Math.floor(monthsAgo / 12);
  return `${yearsAgo} year${yearsAgo !== 1 ? 's' : ''} ago`;
};

/**
 * Format a date relative to now (today, yesterday, etc.)
 */
export const formatRelativeTime = (dateString: string): string => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date';
  
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  
  const isToday = 
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();
  
  const isYesterday = 
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();
  
  if (isToday) {
    return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  } else if (isYesterday) {
    return `Yesterday at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  } else {
    return formatDate(dateString);
  }
};
