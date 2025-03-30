
/**
 * Shared common types used across the application
 */

/**
 * Common types for working with arrays and collections
 */
export type KeysOfType<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

/**
 * Common color types
 */
export type MedievalColor = 'default' | 'bronze' | 'silver' | 'gold' | 'royal' | 'purple' | 'green' | 'red' | 'blue';

/**
 * Common size types
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
