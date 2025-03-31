
/**
 * Centralized formatting utility functions
 */

// Re-export all formatters from their respective files
export * from './dateFormatters';
export * from './currencyFormatters';
export * from './stringFormatters';
export * from './iconFormatters';

// Export as default for convenience
import * as dateFormatters from './dateFormatters';
import * as currencyFormatters from './currencyFormatters';
import * as stringFormatters from './stringFormatters';
import * as iconFormatters from './iconFormatters';

const formatters = {
  ...dateFormatters,
  ...currencyFormatters,
  ...stringFormatters,
  ...iconFormatters
};

export default formatters;
