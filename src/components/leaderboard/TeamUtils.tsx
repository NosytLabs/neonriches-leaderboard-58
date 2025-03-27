
import React from 'react';
import { Crown, Award, Shield, Gem, Trophy, Medal } from 'lucide-react';

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

export const getTeamDescription = (team: string) => {
  switch (team) {
    case 'red': 
      return 'The Purple Dynasty values opulence and extravagance. Their coffers know no bounds.';
    case 'green': 
      return 'The Gold Dominion represents wealth and prosperity. Their generosity is matched only by their bank accounts.';
    case 'blue': 
      return 'The Azure Order stands for loyalty and dedication. Their financial commitment is unwavering.';
    default: 
      return 'Choose a royal affiliation to begin your ascent to power.';
  }
};

export const getTeamBadge = (team: string) => {
  switch (team) {
    case 'red': return <Gem size={18} className="text-royal-purple animate-pulse-slow" />;
    case 'green': return <Trophy size={18} className="text-royal-gold animate-pulse-slow" />;
    case 'blue': return <Medal size={18} className="text-royal-blue animate-pulse-slow" />;
    default: return null;
  }
};
