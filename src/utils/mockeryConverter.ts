
import { MockeryAction } from '@/types/mockery-types';

/**
 * Convert legacy mockery action names to the new format
 * This helps with backward compatibility for older code
 */
export const convertLegacyMockeryAction = (action: string): MockeryAction => {
  const legacyMap: Record<string, MockeryAction> = {
    'tomatoes': 'tomato',
    'eggs': 'egg',
    'putridEggs': 'putridEgg'
  };
  
  // Handle both string and case comparison
  const normalizedAction = action.toLowerCase();
  
  if (normalizedAction in legacyMap) {
    return legacyMap[normalizedAction];
  }
  
  return action as MockeryAction;
};

/**
 * Updates all occurrences of legacy mockery actions in a string
 */
export const updateLegacyMockeryStrings = (source: string): string => {
  let result = source;
  
  // Replace all occurrences of the legacy action strings
  result = result.replace(/tomatoes/g, 'tomato');
  result = result.replace(/eggs/g, 'egg');
  result = result.replace(/putridEggs/g, 'putridEgg');
  
  return result;
};

/**
 * Updates an object that uses legacy mockery actions as keys
 */
export const convertLegacyMockeryObject = <T>(obj: Record<string, T>): Record<MockeryAction, T> => {
  const result: Partial<Record<MockeryAction, T>> = {};
  
  for (const key in obj) {
    const newKey = convertLegacyMockeryAction(key);
    result[newKey] = obj[key];
  }
  
  return result as Record<MockeryAction, T>;
};

export default {
  convertLegacyMockeryAction,
  convertLegacyMockeryObject,
  updateLegacyMockeryStrings
};
