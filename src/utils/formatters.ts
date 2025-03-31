
// This file is maintained for backward compatibility
// Import and re-export all formatters from the new consolidated directory
export * from './formatters/index';

// Also export formatDate directly for backwards compatibility
export { formatDate } from './formatters/dateFormatters';

// Export the default object
export { default } from './formatters/index';
