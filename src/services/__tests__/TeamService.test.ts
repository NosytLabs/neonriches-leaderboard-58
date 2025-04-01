
import { describe, it, expect, vi } from 'vitest';
import { getTeams, getTeamById, getTeamByColor } from '@/services/TeamService';

describe('TeamService', () => {
  it('should return a list of teams', async () => {
    const teams = await getTeams();
    expect(teams.length).toBeGreaterThan(0);
    expect(teams[0]).toHaveProperty('id');
    expect(teams[0]).toHaveProperty('name');
    expect(teams[0]).toHaveProperty('color');
  });

  it('should return a team by id', async () => {
    const team = await getTeamById('1');
    expect(team).not.toBeNull();
    expect(team?.id).toBe('1');
  });

  it('should return a team by color', async () => {
    const team = await getTeamByColor('red');
    expect(team).not.toBeNull();
    expect(team?.color).toBe('red');
  });
});
