
// Re-export all formatters from individual files

// Number formatters
export { 
  formatNumber,
  formatPercent,
  formatCompact,
  formatOrdinal,
  formatSignedNumber
} from './numberFormatters';

// String formatters
export {
  truncateString,
  capitalizeFirstLetter,
  toTitleCase,
  stripHtmlTags,
  formatUsername,
  getInitials,
  formatDollarAmount
} from './stringFormatters';

// Format date
export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};

// Format currency
export const formatCurrency = (value: number | undefined, options = {}): string => {
  if (value === undefined || value === null) return '$0';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options
  }).format(value);
};
