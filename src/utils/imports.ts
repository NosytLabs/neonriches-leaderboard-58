
/**
 * This file provides alias exports to handle case-sensitivity issues in imports
 * and provides safe versions of commonly used imports that may have casing conflicts
 */

// Badge component export (handles badge.tsx vs Badge.tsx casing issues)
export { Badge } from '@/components/ui/Badge';

// Shell component export (handles shell.tsx vs Shell.tsx casing issues)
export { default as Shell } from '@/components/Shell';
export { default as UIShell } from '@/components/ui/Shell';

// Import teamService and re-export it with proper casing
import teamService from '@/services/teamService';
export { teamService };

// Utility function to safely get required exports from teamService to handle missing exports
export const getTeams = () => teamService.getAllTeams ? teamService.getAllTeams() : [];
export const getTeamById = (id: string) => teamService.getTeamById ? teamService.getTeamById(id) : null;
export const getTeamByColor = (color: string) => teamService.getTeamByColor ? teamService.getTeamByColor(color) : null;

// Re-export TeamColor type
export type { TeamColor } from '@/types/mockery-types';
export type { MockeryAction } from '@/types/mockery-types';
