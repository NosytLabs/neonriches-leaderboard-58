
/**
 * This file provides alias exports to handle case-sensitivity issues in imports
 * and provides safe versions of commonly used imports that may have casing conflicts
 */

// Badge component export (handles badge.tsx vs Badge.tsx casing issues)
// Use explicit path to avoid casing issues
import { Badge } from '@/components/ui/badge'; // Use lowercase to ensure compatibility

// Import Shell and UIShell with casing that works cross-platform
import ShellComponent from '@/components/Shell'; // Use correct case in import
import UIShellComponent from '@/components/ui/Shell'; // Use correct case in import

// Re-export with consistent names
export const Shell = ShellComponent;
export const UIShell = UIShellComponent;
export { Badge };

// Import teamService and re-export it with proper casing
import teamServiceModule from '@/services/TeamService'; // Use correct case in import

// Re-export the service
export const teamService = teamServiceModule;

// Utility function to safely get required exports from teamService to handle missing exports
export const getTeams = () => {
  if (teamService && typeof teamService.getAllTeams === 'function') {
    return teamService.getAllTeams();
  }
  return [];
};

export const getTeamById = (id: string) => {
  if (teamService && typeof teamService.getTeamById === 'function') {
    return teamService.getTeamById(id);
  }
  return null;
};

export const getTeamByColor = (color: string) => {
  if (teamService && typeof teamService.getTeamByColor === 'function') {
    return teamService.getTeamByColor(color);
  }
  return null;
};

// Re-export TeamColor type
export type { TeamColor } from '@/types/team';
export type { MockeryAction } from '@/types/mockery-types';
