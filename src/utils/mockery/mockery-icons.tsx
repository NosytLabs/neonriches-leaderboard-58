
import React from 'react';
import { 
  Egg, 
  MessageCircle, 
  Lock, 
  Crown, 
  ThumbsDown, 
  HelpCircle,
  Music,
  Zap,
  Award,
  Shield,
  Flame
} from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';
import { LucideIcon } from 'lucide-react';

// Custom tomato icon since Lucide doesn't have one
export const TomatoIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="14" r="8" />
    <path d="M12 6v4" />
    <path d="M8 4l2 2" />
    <path d="M16 4l-2 2" />
  </svg>
);

// Custom hat/dunce icon
export const HatIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 4l-9 6 9 6 9-6-9-6z" />
    <path d="M12 16v4" />
  </svg>
);

// Custom jester icon
export const JesterIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 10c0-4 4-8 8-8s8 4 8 8-4 4-4 4H8s-4 0-4-4z" />
    <path d="M9 16c0 1 .5 2 2 2s2-1 2-2" />
    <path d="M5 10c0-2 1-3 3-3s3 1 3 3" />
    <path d="M13 10c0-2 1-3 3-3s3 1 3 3" />
  </svg>
);

// Custom egg-rotten icon
export const RottenEggIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <ellipse cx="12" cy="14" rx="8" ry="10" />
    <path d="M10 4c0-1.5.5-2 2-2s2 .5 2 2" />
    <path d="M8 16l8-4" />
    <path d="M16 16l-8-4" />
  </svg>
);

// Custom troll icon
export const TrollIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M8 14l-4 4" />
    <path d="M16 14l4 4" />
    <path d="M8 8v2" />
    <path d="M16 8v2" />
    <path d="M9 12h6" />
  </svg>
);

// Map mockery actions to their respective icons
export const getMockeryIcon = (action: MockeryAction): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    tomatoes: TomatoIcon,
    eggs: Egg,
    putridEggs: RottenEggIcon,
    stocks: Lock,
    crown: Crown,
    jester: JesterIcon,
    dunce: HatIcon,
    troll: TrollIcon,
    protection: Shield,
    shame: ThumbsDown,
    challenge: Flame,
  };

  return iconMap[action] || HelpCircle;
};

// Get color for mockery action
export const getMockeryIconColor = (action: MockeryAction): string => {
  const colorMap: Record<string, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-300',
    putridEggs: 'text-green-400',
    stocks: 'text-gray-400',
    crown: 'text-yellow-500',
    jester: 'text-purple-400',
    dunce: 'text-orange-400',
    troll: 'text-teal-400',
    protection: 'text-blue-400',
    shame: 'text-red-400',
    challenge: 'text-amber-500',
  };

  return colorMap[action] || 'text-gray-400';
};

// For backward compatibility
export const getMockeryActionIcon = getMockeryIcon;
export const getMockeryActionIconColor = getMockeryIconColor;

export default getMockeryIcon;
