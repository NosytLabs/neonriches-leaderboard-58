
import React from 'react';
import { Crown, Award, Shield } from 'lucide-react';

export const getTeamColor = (team: string) => {
  switch (team) {
    case 'red': return 'royal-purple';
    case 'green': return 'royal-gold';
    case 'blue': return 'royal-blue';
    default: return 'white';
  }
};

export const getTeamIcon = (team: string) => {
  switch (team) {
    case 'red': return <Crown size={14} className="mr-1.5" />;
    case 'green': return <Award size={14} className="mr-1.5" />;
    case 'blue': return <Shield size={14} className="mr-1.5" />;
    default: return null;
  }
};

export const getTeamName = (team: string) => {
  switch (team) {
    case 'red': return 'Purple Dynasty';
    case 'green': return 'Gold Dominion';
    case 'blue': return 'Azure Order';
    default: return '';
  }
};
