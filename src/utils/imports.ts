
/**
 * This file provides alias exports to handle case-sensitivity issues in imports
 * and provides safe versions of commonly used imports that may have casing conflicts
 */

// Badge component export (handles badge.tsx vs Badge.tsx casing issues)
export { Badge } from '@/components/ui/badge';

// Shell component export (handles shell.tsx vs Shell.tsx casing issues)
export { default as Shell } from '@/components/Shell';
export { default as UIShell } from '@/components/ui/Shell';

// Re-export TeamService to handle casing issues
export { default as teamService } from '@/services/teamService';

// Utility function to safely get required exports from teamService to handle missing exports
export const getTeams = teamService.getAllTeams || (() => []);
export const getTeamById = (id: string) => teamService.getTeamById?.(id) || null;
export const getTeamByColor = (color: string) => teamService.getTeamByColor?.(color) || null;
