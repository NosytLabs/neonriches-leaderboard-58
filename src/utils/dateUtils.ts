
// Utility functions for date handling

// Format a date to a specific format
export const formatDate = (date: string | Date, format = 'MMM DD, YYYY') => {
  if (!date) return '';
  
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  
  // Add leading zeros
  const monthStr = month < 10 ? `0${month}` : `${month}`;
  const dayStr = day < 10 ? `0${day}` : `${day}`;
  
  // Simple format replacements
  return format
    .replace('YYYY', `${year}`)
    .replace('MM', monthStr)
    .replace('DD', dayStr)
    .replace('MMM', new Date(date).toLocaleString('default', { month: 'short' }));
};

// Format a date and time
export const formatDateTime = (date: string | Date) => {
  if (!date) return '';
  
  const d = new Date(date);
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Check if an event is currently active
export const isEventActive = (
  startDate: string | Date, 
  endDate: string | Date
): boolean => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return now >= start && now <= end;
};

// Get number of days until a date
export const daysUntil = (date: string | Date): number => {
  const now = new Date();
  const target = new Date(date);
  
  // Reset time to start of day
  now.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  
  const diff = target.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};
