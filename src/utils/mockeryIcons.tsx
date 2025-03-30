
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
  Award
} from 'lucide-react';

// Custom tomato icon since Lucide doesn't have one
const TomatoIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
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
const HatIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
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
const JesterIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
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
const RottenEggIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
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

// Custom no-speak icon
const NoSpeakIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
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
    <path d="M12 18h.01" />
    <path d="M8 18h.01" />
    <path d="M16 18h.01" />
    <path d="M3 3l18 18" />
    <path d="M18 7a6 6 0 0 0-8.1-3.5" />
    <path d="M4.9 10.5A6 6 0 0 0 12 17" />
  </svg>
);

// Renders the actual icon component based on name
export const renderMockeryIcon = (iconName: string, className: string = "h-4 w-4"): React.ReactNode => {
  switch (iconName) {
    case 'tomato':
      return <TomatoIcon className={className} />;
    case 'egg':
      return <Egg className={className} />;
    case 'lock':
      return <Lock className={className} />;
    case 'hat':
      return <HatIcon className={className} />;
    case 'jester':
      return <JesterIcon className={className} />;
    case 'crown':
      return <Crown className={className} />;
    case 'message':
      return <MessageCircle className={className} />;
    case 'thumbs-down':
      return <ThumbsDown className={className} />;
    case 'egg-rotten':
      return <RottenEggIcon className={className} />;
    case 'no-speak':
      return <NoSpeakIcon className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

export default renderMockeryIcon;
