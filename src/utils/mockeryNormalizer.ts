
import { MockeryAction } from '@/types/mockery-types';

// Helper function for normalizing mockery action strings to match our type definition
export const normalizeMockeryAction = (action: string): string => {
  if (!action) return 'mock';
  
  // Normalize common action name variations
  switch (action.toLowerCase()) {
    case 'tomatoe': 
    case 'tomatoes': return 'tomato';
    case 'eggs': return 'egg';
    case 'rotten egg': 
    case 'rotten-egg': 
    case 'rottenegg': return 'putridEgg';
    case 'putrid egg': 
    case 'putrid-egg': return 'putridEgg';
    case 'crown flip': 
    case 'topple': 
    case 'topplecrown': return 'crown';
    case 'thumbs down': 
    case 'thumbs-down': 
    case 'thumbsdown': return 'thumbsDown';
    case 'court jester': 
    case 'court-jester': return 'courtJester';
    case 'silence user': 
    case 'royal silence': return 'silence';
    case 'smoke': 
    case 'smoke bomb': 
    case 'smokebomb': return 'smokeBomb';
    case 'protect': 
    case 'royal protection': return 'protection';
    default: return action;
  }
};

// Helper to safely cast string to MockeryAction
export const ensureMockeryAction = (action: string): MockeryAction => {
  const normalized = normalizeMockeryAction(action);
  return normalized as MockeryAction;
};
