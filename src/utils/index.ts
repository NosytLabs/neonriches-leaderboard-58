
// Re-export utility functions for easier imports

// Basic utilities
import { cn } from '@/lib/utils';

// Formatters
import { 
  formatNumber, 
  formatPercent, 
  formatDollarAmount, 
  formatFileSize, 
  formatRankWithSuffix, 
  formatDuration,
  formatTimeAgo
} from './formatters';

// Auth utilities
import { 
  parseUserRole, 
  getUserSettings, 
  getUserRank, 
  getVerifiedStatus,
  generateUsername
} from './authUtils';

// Data transformation
import { 
  sortByKey, 
  filterByValue, 
  groupByKey 
} from './dataUtils';

// Animation and effects
import { 
  applyAnimation, 
  removeAnimation, 
  getTransitionClass 
} from './animationUtils';

// Mockery utilities
import {
  getMockeryName,
  getMockeryDescription,
  getMockeryActionPrice,
  getMockeryTier,
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getDiscountedShamePrice,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getShameActionPrice,
  getMockeryCost
} from './mockeryUtils';

// Performance monitoring
import {
  markComponentRenderStart,
  markComponentRenderEnd,
  initPerformanceMonitoring
} from './performanceMonitoring';

// Resource loading
import {
  preloadCriticalAssets,
  preloadImage,
  addPreloadLink,
  addPreconnect,
  preloadAboveTheFoldImages
} from './resourcePreload';

// Export everything
export {
  // Basic utilities
  cn,

  // Formatters
  formatNumber,
  formatPercent,
  formatDollarAmount,
  formatFileSize,
  formatRankWithSuffix,
  formatDuration,
  formatTimeAgo,

  // Auth utilities
  parseUserRole,
  getUserSettings,
  getUserRank,
  getVerifiedStatus,
  generateUsername,

  // Data transformation
  sortByKey,
  filterByValue,
  groupByKey,

  // Animation and effects
  applyAnimation,
  removeAnimation,
  getTransitionClass,

  // Mockery utilities
  getMockeryName,
  getMockeryDescription,
  getMockeryActionPrice,
  getMockeryTier,
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getDiscountedShamePrice,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getShameActionPrice,
  getMockeryCost,

  // Performance monitoring
  markComponentRenderStart,
  markComponentRenderEnd,
  initPerformanceMonitoring,

  // Resource loading
  preloadCriticalAssets,
  preloadImage,
  addPreloadLink,
  addPreconnect,
  preloadAboveTheFoldImages
};
