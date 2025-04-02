
import { describe, test, expect } from 'vitest';
import teamService from '../teamService';

// Tests for TeamService
describe('TeamService', () => {
  test('TeamService exists and provides required methods', () => {
    // Verify that teamService is defined
    expect(teamService).toBeDefined();
    
    // Verify the required methods exist
    expect(typeof teamService.getAllTeams).toBe('function');
    expect(typeof teamService.getTeamById).toBe('function');
    expect(typeof teamService.getTopTeam).toBe('function');
  });
});
