
/**
 * This file provides alias exports to handle case-sensitivity issues in imports
 * and provides safe versions of commonly used imports that may have casing conflicts
 */

// Badge component export (handles badge.tsx vs Badge.tsx casing issues)
// Use explicit path to avoid casing issues
export { Badge } from '@/components/ui/Badge';

// Import Shell and UIShell with casing that works cross-platform
import ShellComponent from '@/components/Shell';
import UIShellComponent from '@/components/ui/Shell';

// Re-export with consistent names
export const Shell = ShellComponent;
export const UIShell = UIShellComponent;

// Import teamService and re-export it with proper casing
import teamServiceModule from '@/services/TeamService';

// Re-export the service
export const teamService = teamServiceModule;

// Utility function to safely get required exports from teamService to handle missing exports
export const getTeams = () => teamService.getAllTeams ? teamService.getAllTeams() : [];
export const getTeamById = (id: string) => teamService.getTeamById ? teamService.getTeamById(id) : null;
export const getTeamByColor = (color: string) => teamService.getTeamByColor ? teamService.getTeamByColor(color) : null;

// Re-export TeamColor type
export type { TeamColor } from '@/types/mockery-types';
export type { MockeryAction } from '@/types/mockery-types';
