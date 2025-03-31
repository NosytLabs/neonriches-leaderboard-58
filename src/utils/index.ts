
// Re-export utility functions
import { cn } from '@/lib/utils';
import { 
  formatCurrency, 
  formatNumber, 
  formatPercent,
  formatDollarAmount,
  formatFileSize,
  formatRankWithSuffix,
  formatDuration
} from './formatters';

import { 
  formatDate,
  getRelativeTimeString,
  getDaysInMonth,
  isDateInPast,
  isDateInFuture,
  isDateToday
} from './dateUtils';

import {
  randomDelay,
  randomDuration,
  getAnimationClass,
  getAnimationStyle,
  getStaggeredDelays,
  getShameEffectClass
} from './animationUtils';

import {
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getMockeryName as getMockeryActionName,
  getMockeryName,
  getMockeryDescription,
  getMockeryCost as getMockeryActionPrice,
  getMockeryActionDescription,
  getMockeryActionTitle,
  getMockeryActionEffect
} from './mockeryUtils';

// Common UI utilities
export {
  cn,
  // Formatters
  formatCurrency,
  formatNumber,
  formatPercent,
  formatDollarAmount,
  formatFileSize,
  formatRankWithSuffix,
  formatDuration,
  
  // Date utilities
  formatDate,
  getRelativeTimeString,
  getDaysInMonth,
  isDateInPast,
  isDateInFuture,
  isDateToday,
  
  // Animation utilities
  randomDelay,
  randomDuration,
  getAnimationClass,
  getAnimationStyle,
  getStaggeredDelays,
  getShameEffectClass,
  
  // Mockery utilities
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getMockeryActionName,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionEffect
};

// Common string utilities
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
