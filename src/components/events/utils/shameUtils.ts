
/**
 * Checks if the current month is a Fire Sale month
 * @returns true if current month is a Fire Sale month
 */
export const isFireSaleMonth = (): boolean => {
  const currentMonth = new Date().getMonth() + 1; // JavaScript months are 0-indexed
  
  // Fire sales happen in January, April, July, and October
  return [1, 4, 7, 10].includes(currentMonth);
};

/**
 * Gets the current Fire Sale discount percentage
 * @returns Discount percentage (0-100)
 */
export const getFireSaleDiscountPercentage = (): number => {
  if (!isFireSaleMonth()) {
    return 0;
  }
  
  // Different discount rates for different days of the month
  const currentDay = new Date().getDate();
  
  if (currentDay <= 7) {
    return 15; // 15% off in the first week
  } else if (currentDay <= 14) {
    return 10; // 10% off in the second week
  } else if (currentDay <= 21) {
    return 7; // 7% off in the third week
  } else {
    return 5; // 5% off in the last week
  }
};

/**
 * Calculates the discounted price
 * @param originalPrice The original price
 * @returns The discounted price
 */
export const getFireSalePrice = (originalPrice: number): number => {
  const discountPercentage = getFireSaleDiscountPercentage();
  if (discountPercentage === 0) {
    return originalPrice;
  }
  
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
};

/**
 * Returns the end date of the current Fire Sale
 * @returns Date string of the end of the Fire Sale
 */
export const getFireSaleEndDate = (): string => {
  if (!isFireSaleMonth()) {
    return '';
  }
  
  const now = new Date();
  const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  
  return lastDayOfMonth.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Returns the time remaining in the current Fire Sale
 * @returns Object containing days, hours, minutes
 */
export const getFireSaleTimeRemaining = (): { days: number, hours: number, minutes: number } => {
  if (!isFireSaleMonth()) {
    return { days: 0, hours: 0, minutes: 0 };
  }
  
  const now = new Date();
  const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  
  const diffMs = lastDayOfMonth.getTime() - now.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  return {
    days: diffDays,
    hours: diffHours,
    minutes: diffMinutes
  };
};
