
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as currency
 * @param value Number to format
 * @param currency Currency symbol
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, currency: string = '$'): string {
  return `${currency}${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
}

/**
 * Formats a number with commas
 * @param value Number to format
 * @returns Formatted number string
 */
export function formatNumber(value: number): string {
  return value.toLocaleString('en-US');
}

/**
 * Formats a date string in a readable format
 * @param dateString Date string
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Formats a file size in bytes to a human-readable format
 * @param bytes Size in bytes
 * @returns Formatted size string
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Truncates text to a specified length
 * @param text Text to truncate
 * @param maxLength Maximum length
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}
