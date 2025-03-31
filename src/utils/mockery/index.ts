
// Export mockery related utilities
export * from './mockery-actions';
export * from './mockery-tiers';
export * from './mockery-costs';
export * from './mockery-durations';
export * from './mockery-icons';

// Import specific icons we need instead of Tomato which doesn't exist
import { AlertCircle, ThumbsDown, Egg } from 'lucide-react';

// Create a mapping of action names to icon components
export const mockeryIcons = {
  tomatoes: ThumbsDown,
  eggs: Egg,
  putridEggs: AlertCircle,
  // Add other icons as needed
};

// Export default
import getMockeryActionIcon from './mockery-icons';
export default getMockeryActionIcon;
