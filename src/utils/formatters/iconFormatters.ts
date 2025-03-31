
/**
 * Icon formatting utilities
 */
import React from 'react';
import { Trophy, Zap, Award, Star, Crown, DollarSign } from 'lucide-react';

/**
 * Get icon for achievement based on type
 */
export const getAchievementIcon = (type: string): React.ReactNode => {
  switch (type.toLowerCase()) {
    case 'rank':
      return React.createElement(Trophy, { className: "h-5 w-5" });
    case 'streak':
      return React.createElement(Zap, { className: "h-5 w-5" });
    case 'milestone':
      return React.createElement(Award, { className: "h-5 w-5" });
    case 'royal':
      return React.createElement(Crown, { className: "h-5 w-5" });
    case 'deposit':
      return React.createElement(DollarSign, { className: "h-5 w-5" });
    default:
      return React.createElement(Star, { className: "h-5 w-5" });
  }
};
