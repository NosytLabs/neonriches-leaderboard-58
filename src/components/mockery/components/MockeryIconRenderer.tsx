
import React from 'react';
import { 
  Crown, 
  Egg, 
  AlertCircle, 
  ShieldCheck, 
  UserX, 
  CloudOff, 
  Award,
  MessageCircle,
  Laugh,
  Swords,
  Flag,
  Shield
} from 'lucide-react';
import { MockeryAction } from '@/types/mockery';

interface MockeryIconRendererProps {
  action: MockeryAction;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Component to render the appropriate icon for each mockery action
 */
const MockeryIconRenderer: React.FC<MockeryIconRendererProps> = ({ 
  action, 
  size = 'md', 
  className = '' 
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'h-4 w-4';
      case 'lg': return 'h-6 w-6';
      case 'md':
      default: return 'h-5 w-5';
    }
  };
  
  const iconClass = `${getSizeClass()} ${className}`;
  
  switch (action) {
    case 'tomatoes':
      return <AlertCircle className={`${iconClass} text-red-500`} />;
    case 'eggs':
      return <Egg className={`${iconClass} text-yellow-500`} />;
    case 'putridEggs':
      return <Egg className={`${iconClass} text-green-500`} />;
    case 'crown':
      return <Crown className={`${iconClass} text-royal-gold`} />;
    case 'stocks':
      return <Award className={`${iconClass} text-amber-600`} />;
    case 'jester':
      return <Award className={`${iconClass} text-purple-500`} />;
    case 'shame':
      return <UserX className={`${iconClass} text-royal-crimson`} />;
    case 'silence':
      return <UserX className={`${iconClass} text-gray-400`} />;
    case 'courtJester':
      return <Award className={`${iconClass} text-indigo-400`} />;
    case 'smokeBomb':
      return <CloudOff className={`${iconClass} text-gray-600`} />;
    case 'protection':
      return <ShieldCheck className={`${iconClass} text-green-400`} />;
    case 'taunt':
      return <MessageCircle className={`${iconClass} text-orange-500`} />;
    case 'mock':
      return <Laugh className={`${iconClass} text-blue-500`} />;
    case 'challenge':
      return <Flag className={`${iconClass} text-teal-500`} />;
    case 'joust':
      return <Swords className={`${iconClass} text-indigo-600`} />;
    case 'duel':
      return <Shield className={`${iconClass} text-red-600`} />;
    default:
      return <AlertCircle className={`${iconClass} text-gray-400`} />;
  }
};

export default MockeryIconRenderer;
