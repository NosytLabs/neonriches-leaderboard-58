
import { Trophy, Zap, Award, Star, Crown, DollarSign } from 'lucide-react';
import React from 'react';
import { format, isValid, formatDistance } from 'date-fns';

/**
 * Format a date to a readable string
 */
export const formatDate = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid date';
  
  return format(dateObj, 'MMM d, yyyy');
};

/**
 * Format time portion of a date
 */
export const formatTime = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid time';
  
  return format(dateObj, 'h:mm a');
};

/**
 * Format a date and time together
 */
export const formatDateTime = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid date/time';
  
  return format(dateObj, 'MMM d, yyyy h:mm a');
};

/**
 * Format currency values (default USD)
 */
export const formatCurrency = (amount: number | undefined | null, currency: string = 'USD'): string => {
  if (amount === undefined || amount === null) return '$0.00';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format a dollar amount with simpler display (e.g., $1,234)
 */
export const formatDollarAmount = (amount: number): string => {
  return `$${amount.toLocaleString()}`;
};

/**
 * Format a number with commas
 */
export const formatNumber = (num: number | undefined | null): string => {
  if (num === undefined || num === null) return '0';
  return num.toLocaleString();
};

/**
 * Format a percentage value
 */
export const formatPercentage = (value: number, decimals = 1): string => {
  return `${value.toFixed(decimals)}%`;
};

/**
 * Format a time duration in seconds to a readable format
 */
export const formatDuration = (seconds: number): string => {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  return `${hours}h ${minutes}m`;
};

/**
 * Format a file size in bytes to a human readable format
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Format a Solana/Crypto address to a shortened version
 */
export const formatAddress = (address: string): string => {
  if (!address) return '';
  if (address.length <= 8) return address;
  
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};

/**
 * Format a historical value with inflation adjustment
 */
export const formatHistoricalValue = (value: number, year?: number): number | string => {
  if (year === undefined) return value.toLocaleString();
  
  const inflation = 0.03; // 3% average annual inflation
  const currentYear = new Date().getFullYear();
  const yearDiff = currentYear - year;
  return value * Math.pow(1 + inflation, yearDiff);
};

/**
 * Format a timestamp to "X time ago" format
 */
export const formatTimeAgo = (date: string | Date): string => {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
};

/**
 * Format a large number with appropriate suffix (K, M, B)
 */
export const formatLargeNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K';
  }
  return num.toString();
};

/**
 * Generate a truncated version of text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Convert snake_case or kebab-case to camelCase
 */
export const toCamelCase = (str: string): string => {
  return str.replace(/[-_]([a-z])/g, (_, letter) => letter.toUpperCase());
};

/**
 * Get icon for achievement based on type
 */
export const getAchievementIcon = (type: string): React.ReactNode => {
  switch (type.toLowerCase()) {
    case 'rank':
      return <Trophy className="h-5 w-5" />;
    case 'streak':
      return <Zap className="h-5 w-5" />;
    case 'milestone':
      return <Award className="h-5 w-5" />;
    case 'royal':
      return <Crown className="h-5 w-5" />;
    case 'deposit':
      return <DollarSign className="h-5 w-5" />;
    default:
      return <Star className="h-5 w-5" />;
  }
};

/**
 * Format a timespan into a readable duration string
 */
export const formatTimeSpan = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes}m ${seconds % 60}s`;
  }
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h ${minutes % 60}m`;
  }
  
  const days = Math.floor(hours / 24);
  return `${days}d ${hours % 24}h`;
};

/**
 * Get the time left until a date
 */
export const getTimeLeft = (endTime: string | Date) => {
  const endDate = typeof endTime === 'string' ? new Date(endTime) : endTime;
  const now = new Date();
  
  // If the end time is in the past, return zeros
  if (endDate <= now) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      total: 0,
      isComplete: true
    };
  }
  
  const total = endDate.getTime() - now.getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    days,
    hours,
    minutes,
    seconds,
    total,
    isComplete: false
  };
};

// Export all formatters in a default object for convenience
export default {
  formatDate,
  formatTime,
  formatDateTime,
  formatCurrency,
  formatDollarAmount,
  formatNumber,
  formatPercentage,
  formatDuration,
  formatFileSize,
  formatAddress,
  formatHistoricalValue,
  formatTimeAgo,
  formatLargeNumber,
  truncateText,
  toCamelCase,
  getAchievementIcon,
  formatTimeSpan,
  getTimeLeft
};
