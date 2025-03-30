
import { Trophy, Zap, Award, Star, Crown, DollarSign } from 'lucide-react';
import React from 'react';
import { format, isValid } from 'date-fns';

export const formatDate = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid date';
  
  return format(dateObj, 'MMM d, yyyy');
};

export const formatTime = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid time';
  
  return format(dateObj, 'h:mm a');
};

export const formatDateTime = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid date/time';
  
  return format(dateObj, 'MMM d, yyyy h:mm a');
};

export const getAchievementIcon = (type: string): React.ReactNode => {
  switch (type.toLowerCase()) {
    case 'rank':
      return <Trophy className="h-5 w-5" />;
    case 'streak':
      return <Zap className="h-5 w-5" />;
    case 'milestone':
      return <Award className="h-5 w-5" />;
    case 'royal':
      return <Crown className="h-5 w-5" />;
    case 'deposit':
      return <DollarSign className="h-5 w-5" />;
    default:
      return <Star className="h-5 w-5" />;
  }
};
