
/**
 * Convert a value to a safe string representation
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

/**
 * Get initials from a name string
 */
export function getInitials(name: string): string {
  if (!name) return '';
  
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

export default safeToString;
