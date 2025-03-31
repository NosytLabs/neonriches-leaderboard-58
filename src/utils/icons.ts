
/**
 * Central icon imports file to ensure consistent icon usage across the application
 */
import {
  AlertCircle,
  ShieldAlert,
  User,
  Crown,
  Shield,
  UserX,
  MessageSquare,
  Ban,
  UserRoundX,
  Skull,
  Feather,
  Angry,
  Flame,
  Swords,
  LinkIcon,
  Crosshair,
  Lightbulb,
  Unplug,
  Cloud,
  Sparkles,
  Scissors,
  Maximize2,
  Egg,
  Hammer,
  Bell,
  TrendingDown,
  ThumbsDown,
  HeartCrack,
  Bomb,
  Ghost,
  Rat,
  ZapOff,
  Trophy,
  Volume2,
  VolumeX
} from 'lucide-react';
import React from 'react';

// Create a custom Tomato icon since it's not available in lucide-react
const Tomato: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="13" r="8" />
      <path d="M12 3v3" />
      <path d="M9 5c-1 0-3 1.5-3 3" />
      <path d="M15 5c1 0 3 1.5 3 3" />
    </svg>
  );
};

export {
  AlertCircle,
  ShieldAlert,
  User,
  Crown,
  Shield,
  UserX,
  MessageSquare,
  Ban,
  UserRoundX,
  Skull,
  Feather,
  Angry,
  Flame,
  Swords,
  LinkIcon,
  Crosshair,
  Lightbulb,
  Unplug,
  Cloud,
  Sparkles,
  Scissors,
  Maximize2,
  Egg,
  Hammer,
  Bell,
  TrendingDown,
  ThumbsDown,
  HeartCrack,
  Bomb,
  Ghost,
  Rat,
  ZapOff,
  Trophy,
  Tomato,
  Volume2,
  VolumeX
};
