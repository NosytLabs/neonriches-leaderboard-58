
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
