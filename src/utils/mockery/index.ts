
// Export mockery utility functions
export * from './mockery-costs';
export * from './mockery-descriptions';
export * from './mockery-effects';
export * from './mockery-icons';
export * from './mockery-names';
export * from './mockery-tiers';
export * from './shame-discount-utils';

// Re-export for legacy compatibility
export {
  getMockeryActionPrice as getMockeryCost,
  getMockeryActionDescription as getMockeryDescription,
  getMockeryActionTitle as getMockeryName
} from './mockery-costs';
