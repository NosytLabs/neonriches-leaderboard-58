
import { TeamColor } from '@/types/team';

/**
 * Converts a string to a valid TeamColor
 * @param value String value to convert
 * @returns Valid TeamColor value
 */
export const toTeamColor = (value: string | null | undefined): TeamColor | null => {
  if (!value) return null;
  
  const normalizedValue = value.toLowerCase().trim();
  
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze'
  ];
  
  if (validTeamColors.includes(normalizedValue as TeamColor)) {
    return normalizedValue as TeamColor;
  }
  
  // Handle legacy or alternative names
  switch (normalizedValue) {
    case 'crimson': return 'red';
    case 'azure': return 'blue';
    case 'emerald': return 'green';
    case 'golden': return 'gold';
    case 'violet': return 'purple';
    case 'unaffiliated': return 'none';
    case 'balanced': return 'neutral';
    case 'sterling': return 'silver';
    case 'bronze': return 'bronze';
    default: return 'none';
  }
};

/**
 * Safely converts a value to a valid TeamColor or returns a default
 * @param value Value to convert
 * @param defaultValue Default value to use if conversion fails
 * @returns Valid TeamColor
 */
export const safeTeamColor = (value: any, defaultValue: TeamColor = 'none'): TeamColor => {
  const converted = toTeamColor(value?.toString());
  return converted || defaultValue;
};

/**
 * Checks if a value is a valid TeamColor
 * @param value Value to check
 * @returns Boolean indicating if value is a valid TeamColor
 */
export const isTeamColor = (value: any): value is TeamColor => {
  if (typeof value !== 'string') return false;
  
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze'
  ];
  
  return validTeamColors.includes(value as TeamColor);
};

/**
 * Ensures that an ID is always a string
 * @param id ID that might be a number or string
 * @returns String ID
 */
export const ensureStringId = (id: string | number): string => {
  return id.toString();
};

/**
 * Converts a string to CamelCase
 * @param str Input string
 * @returns Camel cased string
 */
export const toCamelCase = (str: string): string => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');
};

/**
 * Converts a string to PascalCase
 * @param str Input string
 * @returns Pascal cased string
 */
export const toPascalCase = (str: string): string => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replace(/\s+/g, '');
};

/**
 * Converts a string to kebab-case
 * @param str Input string
 * @returns Kebab cased string
 */
export const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
};

/**
 * Converts a string to snake_case
 * @param str Input string
 * @returns Snake cased string
 */
export const toSnakeCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/\s+/g, '_')
    .toLowerCase();
};
