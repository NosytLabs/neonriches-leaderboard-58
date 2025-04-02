
import React from 'react';
import { render, screen } from '@testing-library/react';
import teamService from '@/services/teamService';
import { TeamColor } from '@/types/mockery-types';

describe('TeamService', () => {
  it('renders without crashing', () => {
    render(<div>Team Service Test</div>);
    const element = screen.getByText(/Team Service Test/i);
    expect(element).toBeInTheDocument();
  });
  
  it('gets team color correctly', () => {
    const redColor = teamService.getTeamColor('red');
    expect(redColor).toBe('text-red-500');
  });
  
  it('gets team name correctly', () => {
    const blueName = teamService.getTeamName('blue');
    expect(blueName).toBe('Blue Team');
  });

  it('gets team motto correctly', () => {
    const greenMotto = teamService.getTeamMotto('green');
    expect(greenMotto).toBe('Growth and Prosperity!');
  });

  it('gets team benefits correctly', () => {
    const benefits = teamService.getTeamBenefits('purple');
    expect(benefits).toContain('Team profile badge');
    expect(benefits).toContain('Purple-themed profile items');
  });

  it('returns default values for unknown teams', () => {
    const unknownTeamColor = teamService.getTeamColor('unknown' as TeamColor);
    const unknownTeamName = teamService.getTeamName('unknown' as TeamColor);
    
    expect(unknownTeamColor).toBe('text-gray-400');
    expect(unknownTeamName).toBe('Unknown Team');
  });
});
