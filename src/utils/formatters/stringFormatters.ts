
import { safeToString } from '../safeToString';

/**
 * Capitalize the first letter of each word in a string
 * @param str String to capitalize
 * @returns Capitalized string
 */
export function capitalizeWords(str: string): string {
  if (!str) return '';
  
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Truncate a string to a maximum length and append an ellipsis if needed
 * @param str String to truncate
 * @param maxLength Maximum length before truncating
 * @param ellipsis String to append when truncated (default: '...')
 * @returns Truncated string
 */
export function truncateString(str: string, maxLength: number, ellipsis: string = '...'): string {
  if (!str) return '';
  
  const safeStr = safeToString(str);
  
  if (safeStr.length <= maxLength) return safeStr;
  
  return `${safeStr.slice(0, maxLength)}${ellipsis}`;
}

/**
 * Convert a string to kebab-case (e.g., "Hello World" -> "hello-world")
 * @param str String to convert
 * @returns Kebab-case string
 */
export function toKebabCase(str: string): string {
  if (!str) return '';
  
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
}

/**
 * Convert a string to camelCase (e.g., "Hello World" -> "helloWorld")
 * @param str String to convert
 * @returns CamelCase string
 */
export function toCamelCase(str: string): string {
  if (!str) return '';
  
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');
}

/**
 * Create a URL-friendly slug from a string
 * @param str String to convert to a slug
 * @returns URL-friendly slug
 */
export function toSlug(str: string): string {
  if (!str) return '';
  
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-');     // Replace multiple hyphens with single hyphen
}

/**
 * Limit a string to a certain number of words
 * @param str String to limit
 * @param wordCount Maximum number of words
 * @param ellipsis String to append when truncated (default: '...')
 * @returns Limited string
 */
export function limitWords(str: string, wordCount: number, ellipsis: string = '...'): string {
  if (!str) return '';
  
  const words = str.split(/\s+/);
  if (words.length <= wordCount) return str;
  
  return words.slice(0, wordCount).join(' ') + ellipsis;
}
