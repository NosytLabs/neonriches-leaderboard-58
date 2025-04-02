import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamService from '@/services/TeamService'; // Fixed import

describe('TeamService', () => {
  it('renders without crashing', () => {
    render(<div>Team Service Test</div>);
    const element = screen.getByText(/Team Service Test/i);
    expect(element).toBeInTheDocument();
  });
});
