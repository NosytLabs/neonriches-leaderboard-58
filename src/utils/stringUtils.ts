
/**
 * Convert a string to be safe for display
 */
export function safeToString(value: any): string {
  if (value === null || value === undefined) {
    return '';
  }
  
  if (typeof value === 'string') {
    return value;
  }
  
  try {
    return String(value);
  } catch (e) {
    console.error('Error converting value to string:', e);
    return '';
  }
}

export default safeToString;
