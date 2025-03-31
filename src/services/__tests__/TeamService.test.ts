
/**
 * @jest-environment jsdom
 */

import { TeamColor } from '@/types/team';
import teamService from '@/services/TeamService';

describe('TeamService', () => {
  // Test getting team by ID
  test('should get team data by ID', () => {
    const redTeam = teamService.getTeam('red');
    expect(redTeam).toBeDefined();
    expect(redTeam.name).toBe('Crimson Order');
    
    // Test getting a non-existent team should return default team
    const wrongTeam = teamService.getTeam('wrongTeam' as TeamColor);
    expect(wrongTeam).toBeDefined();
    expect(wrongTeam.name).toBe('Unaligned');
  });
  
  // Test getting team color
  test('should get team color', () => {
    expect(teamService.getTeamColor('red')).toBe('#dc2626');
    expect(teamService.getTeamColor('blue')).toBe('#2563eb');
  });
  
  // Test getting team name
  test('should get team name', () => {
    expect(teamService.getTeamName('red')).toBe('Crimson Order');
    expect(teamService.getTeamName('none')).toBe('Unaligned');
  });
  
  // Test getting team benefits
  test('should get team benefits', () => {
    const benefits = teamService.getTeamBenefit('green');
    expect(benefits).toBeInstanceOf(Array);
    expect(benefits.length).toBeGreaterThan(0);
  });
  
  // Test validation logic
  test('should validate all team data', () => {
    expect(teamService.validateTeamData()).toBe(true);
  });
  
  // Test getting all teams
  test('should get all teams', () => {
    const allTeams = teamService.getAllTeams();
    expect(allTeams).toBeInstanceOf(Array);
    expect(allTeams.length).toBe(7); // 7 defined teams
  });
  
  // Test getting team theme
  test('should get team theme', () => {
    const theme = teamService.getTeamTheme('gold');
    expect(theme).toBeDefined();
    expect(theme.primary).toBe('#eab308');
    expect(theme.text).toBeDefined();
    expect(theme.background).toBeDefined();
  });
});
