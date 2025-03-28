
import React from 'react';
import { ExtendedMockeryAction, getMockeryActionIcon } from './utils/mockeryUtils';
import { Egg, AlertCircle, Crown, Scroll, ShieldOff, MessageSquareOff, Theater } from 'lucide-react';
import MedievalIcon from '@/components/ui/medieval-icon';

interface MockeryActionIconProps {
  action: ExtendedMockeryAction;
  size?: number;
  className?: string;
}

const MockeryActionIcon: React.FC<MockeryActionIconProps> = ({ 
  action, 
  size = 16, 
  className = '' 
}) => {
  const iconType = getMockeryActionIcon(action);
  
  switch (iconType) {
    case 'tomato':
      return <MedievalIcon name="gem" size={size <= 16 ? "sm" : "md"} color="red" className={className} />;
    case 'egg':
      return <Egg size={size} className={`text-yellow-200 ${className}`} />;
    case 'stocks':
      return <MedievalIcon name="shield" size={size <= 16 ? "sm" : "md"} color="amber" className={className} />;
    case 'scroll':
      return <Scroll size={size} className={`text-white/80 ${className}`} />;
    case 'crown':
      return <Crown size={size} className={`text-royal-gold ${className}`} />;
    case 'shield-off':
      return <ShieldOff size={size} className={`text-red-500 ${className}`} />;
    case 'message-square-off':
      return <MessageSquareOff size={size} className={`text-blue-500 ${className}`} />;
    case 'drama':
      return <Theater size={size} className={`text-emerald-500 ${className}`} />;
    default:
      return <AlertCircle size={size} className={`text-white/70 ${className}`} />;
  }
};

export default MockeryActionIcon;
