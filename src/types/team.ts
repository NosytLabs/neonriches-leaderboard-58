
/**
 * Team types for the application
 */

// Define valid team colors
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

// TeamType is an alias of TeamColor for backward compatibility
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple';

// User tier types
export type UserTier = 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'elite' 
  | 'legendary' 
  | 'founder'
  | 'free'
  | 'pro'
  | 'vip'
  | 'standard'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'bronze';
