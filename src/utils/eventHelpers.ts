
/**
 * Checks if the current month is a fire sale month (May or December)
 */
export const isFireSaleMonth = (): boolean => {
  const now = new Date();
  const month = now.getMonth(); // 0-based (0 = January)
  return month === 4 || month === 11; // May or December
};

/**
 * Gets the discount percentage for the current fire sale
 */
export const getFireSaleDiscountPercentage = (): number => {
  const now = new Date();
  const month = now.getMonth();
  return month === 4 ? 15 : 25; // 15% in May, 25% in December
};

/**
 * Gets the number of days until the next event
 */
export const getDaysUntilNextEvent = (): number => {
  // This would normally be calculated based on your event schedule
  return Math.floor(Math.random() * 14) + 1; // Random number between 1-14 for demo
};

/**
 * Format a date range for display
 */
export const formatDateRange = (startDate: Date, endDate: Date): string => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
};

/**
 * Calculate remaining time for an event
 */
export const getRemainingTime = (endDate: Date): string => {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();
  
  // Convert to days
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days < 0) return 'Ended';
  if (days === 0) return 'Ends today';
  if (days === 1) return '1 day remaining';
  return `${days} days remaining`;
};
