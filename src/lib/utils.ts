
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string to a more readable format
 * @param dateString The date string to format
 * @param options Formatting options
 * @returns Formatted date string
 */
export function formatDate(dateString: string, options: Intl.DateTimeFormatOptions = {}) {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  
  // Default formatting options
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options
  };
  
  return new Intl.DateTimeFormat('en-US', defaultOptions).format(date);
}

/**
 * Format a number with commas
 * @param num The number to format
 * @returns Formatted number string
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

/**
 * Calculate the time elapsed since a date
 * @param dateString The date to calculate from
 * @returns A human-readable string of time elapsed
 */
export function timeAgo(dateString: string): string {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  // Time units in seconds
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  
  if (seconds < minute) {
    return 'just now';
  } else if (seconds < hour) {
    const minutes = Math.floor(seconds / minute);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (seconds < day) {
    const hours = Math.floor(seconds / hour);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (seconds < week) {
    const days = Math.floor(seconds / day);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (seconds < month) {
    const weeks = Math.floor(seconds / week);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (seconds < year) {
    const months = Math.floor(seconds / month);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(seconds / year);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
}
