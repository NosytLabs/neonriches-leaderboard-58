
import React from 'react';
import { Crown, Award, Shield, Gem, Trophy, Medal } from 'lucide-react';

export const getTeamColor = (team: string) => {
  switch (team) {
    case 'red': return 'royal-crimson';
    case 'green': return 'royal-gold';
    case 'blue': return 'royal-navy';
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
    case 'red': return 'Crimson Dynasty';
    case 'green': return 'Golden Empire';
    case 'blue': return 'Azure Legion';
    default: return '';
  }
};

export const getTeamDescription = (team: string) => {
  switch (team) {
    case 'red': 
      return 'The Crimson Dynasty values power and ambition. Their influence spreads like wildfire.';
    case 'green': 
      return 'The Golden Empire represents wealth and elegance. Their prosperity knows no limits.';
    case 'blue': 
      return 'The Azure Legion embodies loyalty and tradition. Their dedication is unwavering.';
    default: 
      return 'Choose a royal affiliation to begin your ascent to power.';
  }
};

export const getTeamBadge = (team: string) => {
  switch (team) {
    case 'red': return <Gem size={18} className="text-royal-crimson animate-pulse-slow" />;
    case 'green': return <Trophy size={18} className="text-royal-gold animate-pulse-slow" />;
    case 'blue': return <Medal size={18} className="text-royal-navy animate-pulse-slow" />;
    default: return null;
  }
};
