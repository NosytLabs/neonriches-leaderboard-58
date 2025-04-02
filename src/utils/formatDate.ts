
/**
 * Format a date string or timestamp
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
    
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date:', date);
    return 'Invalid date';
  }
  
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
}

export default formatDate;
