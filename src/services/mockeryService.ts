
import { MockeryAction, MockeryEvent, MockeryTier } from '@/types/mockery';
import { UserProfile } from '@/types/user';
import {
  getMockeryCooldown,
  getMockeryCost,
  getMockeryDuration,
  getMockeryName,
  getMockeryDescription
} from '@/utils/mockeryUtils';

// Mock database for mockery events
let mockeryEvents: MockeryEvent[] = [
  {
    id: '1',
    action: 'shame',
    tier: 'basic',
    targetUserId: '2',
    appliedAt: new Date().toISOString(),
    duration: 3,
    expiresAt: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
    appliedById: '1',
    active: true,
    cost: 10
  },
  {
    id: '2',
    action: 'taunt',
    tier: 'premium',
    targetUserId: '3',
    appliedAt: new Date().toISOString(),
    duration: 6,
    expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(),
    appliedById: '1',
    active: true,
    cost: 30
  }
];

// Get all mockery events
export const fetchMockeryEvents = async (): Promise<MockeryEvent[]> => {
  return mockeryEvents;
};

// Get mockery events by target user ID
export const getMockeryEventsByTargetUser = async (userId: string): Promise<MockeryEvent[]> => {
  return mockeryEvents.filter(event => event.targetUserId === userId && event.active);
};

// Get mockery events by applied by user ID
export const getMockeryEventsByAppliedUser = async (userId: string): Promise<MockeryEvent[]> => {
  return mockeryEvents.filter(event => event.appliedById === userId);
};

// Apply mockery event
export const applyMockery = async (
  action: MockeryAction,
  tier: MockeryTier,
  targetUserId: string,
  appliedById: string
): Promise<MockeryEvent> => {
  // Calculate duration and cost
  const duration = getMockeryDuration(action, tier);
  const cost = getMockeryCost(action, tier);
  
  // Create new mockery event
  const newEvent: MockeryEvent = {
    id: (mockeryEvents.length + 1).toString(),
    action,
    tier,
    targetUserId,
    appliedAt: new Date().toISOString(),
    duration,
    expiresAt: new Date(Date.now() + duration * 60 * 60 * 1000).toISOString(),
    appliedById,
    active: true,
    cost
  };
  
  // Add to mock database
  mockeryEvents.push(newEvent);
  
  return newEvent;
};

// Check if user can apply mockery
export const canApplyMockery = async (
  action: MockeryAction,
  tier: MockeryTier,
  targetUserId: string,
  appliedById: string
): Promise<{ canApply: boolean; reason?: string }> => {
  // Check if target user is protected
  const targetEvents = await getMockeryEventsByTargetUser(targetUserId);
  const isProtected = targetEvents.some(event => event.action === 'protection' && event.active);
  
  if (isProtected) {
    return { canApply: false, reason: 'Target user is protected' };
  }
  
  // Check cooldown
  const appliedEvents = await getMockeryEventsByAppliedUser(appliedById);
  const cooldown = getMockeryCooldown(action, tier);
  
  const lastSameAction = appliedEvents
    .filter(event => event.action === action)
    .sort((a, b) => new Date(b.appliedAt).getTime() - new Date(a.appliedAt).getTime())[0];
  
  if (lastSameAction) {
    const timeSince = Date.now() - new Date(lastSameAction.appliedAt).getTime();
    const cooldownMs = cooldown * 1000;
    
    if (timeSince < cooldownMs) {
      return { 
        canApply: false, 
        reason: `Action on cooldown for ${Math.ceil((cooldownMs - timeSince) / 1000)} more seconds` 
      };
    }
  }
  
  return { canApply: true };
};

// Clear expired mockery events
export const clearExpiredMockeryEvents = async (): Promise<void> => {
  const now = new Date();
  
  mockeryEvents = mockeryEvents.map(event => {
    if (new Date(event.expiresAt) < now) {
      return { ...event, active: false };
    }
    return event;
  });
};

// Get active mockery events for user
export const getActiveMockeryEffects = async (userId: string): Promise<MockeryEvent[]> => {
  await clearExpiredMockeryEvents();
  
  return mockeryEvents.filter(
    event => event.targetUserId === userId && event.active
  );
};

// Check if user has specific active mockery
export const hasActiveMockery = async (
  userId: string, 
  action: MockeryAction
): Promise<boolean> => {
  const activeEffects = await getActiveMockeryEffects(userId);
  return activeEffects.some(effect => effect.action === action);
};

// Remove mockery event
export const removeMockery = async (eventId: string): Promise<boolean> => {
  const initialLength = mockeryEvents.length;
  mockeryEvents = mockeryEvents.filter(event => event.id !== eventId);
  
  return mockeryEvents.length < initialLength;
};

// Deactivate mockery event
export const deactivateMockery = async (eventId: string): Promise<boolean> => {
  const event = mockeryEvents.find(event => event.id === eventId);
  
  if (!event) {
    return false;
  }
  
  event.active = false;
  return true;
};
