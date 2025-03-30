
/**
 * Convert a string date to a Date object or keep a Date object as is
 * @param date Date string or Date object
 * @returns Date object
 */
export const ensureDate = (date: string | Date | undefined | null): Date | null => {
  if (!date) return null;
  
  if (typeof date === 'string') {
    return new Date(date);
  }
  
  return date;
};

/**
 * Convert a string date to a Date object for React components
 * This function is useful for components that accept a Date prop
 * but receive a string from an API
 */
export const toDateObject = (dateString: string | Date | undefined | null): Date | undefined => {
  if (!dateString) return undefined;
  
  if (typeof dateString === 'string') {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date string: ${dateString}`);
      return undefined;
    }
    return date;
  }
  
  return dateString;
};

/**
 * Format a date string or Date object to a human-readable string
 */
export const formatDateString = (date: string | Date | undefined | null): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString();
};
