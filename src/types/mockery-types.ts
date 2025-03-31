
import { MockeryAction, MockeryTier, TeamColor, MockeryEvent, MockedUser, ShameEffectData, MockeryEffectData, NotificationSoundOptions, isValidMockeryAction, isValidMockeryTier } from './mockery';

// Re-export everything for backward compatibility
export type {
  MockeryAction,
  MockeryTier,
  TeamColor,
  MockeryEvent,
  MockedUser,
  ShameEffectData,
  MockeryEffectData,
  NotificationSoundOptions
};

// Also export ShameAction as an alias of MockeryAction
export type ShameAction = MockeryAction;

// Re-export the helper functions
export { isValidMockeryAction, isValidMockeryTier };
