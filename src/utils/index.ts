
/**
 * Main utilities export file
 * Only exports functions that actually exist
 */

// Export formatters
export { formatCurrency, formatNumber, formatDate } from './formatters';

// Export string utilities 
export { capitalizeFirstLetter, truncateString, generateUUID } from './stringUtils';

// Export number utilities
export { generateRandomInteger } from './numberUtils';

// Export shadcn utility
export { cn } from './shadcn';

// Export date utilities
export { 
  getRelativeTime,
  getDaysInMonth,
  isDateInPast,
  isDateInFuture,
  isDateToday
} from './dateUtils';

// Export array utilities
export {
  sortArrayByDate,
  filterArrayByDateRange,
  sortArrayByNumber,
  filterArrayByNumberRange,
  sortArrayByString,
  filterArrayByString,
  groupArrayByProperty,
  getRandomElementFromArray,
  shuffleArray,
  chunkArray
} from './arrayUtils';

// Export object utilities
export {
  omit,
  pick,
  deepClone,
  mergeObjects,
  isObjectEmpty,
  areObjectsEqual
} from './objectUtils';

// Export type utilities
export {
  safeNumberConversion,
  safeStringConversion,
  toTeamType,
  toUserTier,
  convertShameToMockery,
  convertMockeryToShame,
  createLeaderboardUser
} from './typeUtils';

// Export validation utilities
export {
  validateEmail,
  validatePassword,
  validateUsername
} from './validationUtils';

// Export browser utilities
export { isMobile, isTablet, isDesktop } from './deviceUtils';

// Export storage utilities
export {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
  clearLocalStorage
} from './storageUtils';

// Export default for convenience
import * as formatters from './formatters';
import * as stringUtils from './stringUtils';
import * as numberUtils from './numberUtils';
import * as dateUtils from './dateUtils';
import * as arrayUtils from './arrayUtils';
import * as objectUtils from './objectUtils';
import * as typeUtils from './typeUtils';

export default {
  ...formatters,
  ...stringUtils,
  ...numberUtils,
  ...dateUtils,
  ...arrayUtils,
  ...objectUtils,
  ...typeUtils
};
