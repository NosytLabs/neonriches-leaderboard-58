
import React from 'react';
import { render, screen } from '@testing-library/react';
import teamService from '@/services/teamService'; // Fixed import casing

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
});
