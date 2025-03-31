// Re-export utility functions
import { cn } from '@/lib/utils';
import { 
  formatCurrency, 
  formatNumber, 
  formatPercent 
} from './formatters';

import { 
  formatDate,
  getRelativeTimeString,
  getDaysInMonth,
  isDateInPast,
  isDateInFuture,
  isDateToday
} from './dateUtils';

// Common UI utilities
export {
  cn,
  formatCurrency,
  formatNumber,
  formatPercent,
  formatDate,
  getRelativeTimeString,
  getDaysInMonth,
  isDateInPast,
  isDateInFuture,
  isDateToday
};

// Export any other type of utilities needed

export const capitalize = (string: string): string => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const truncate = (text: string, length: number): string => {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};

export const generateId = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Add any other common utility functions here
