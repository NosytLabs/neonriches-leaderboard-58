
import { TeamColor, TeamData } from './mockery-types';

// Re-export TeamData from mockery-types
export type { TeamData };

// Re-export TeamColor for convenience
export type { TeamColor };

// For backwards compatibility
export type TeamType = TeamColor;
