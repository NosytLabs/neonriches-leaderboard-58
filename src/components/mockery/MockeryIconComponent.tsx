
import React from 'react';
import { 
  Egg, Flame, Crown, ThumbsDown, Skull, AlertTriangle, 
  CloudLightning, Shield, Heart, Music, Laugh, Feather
} from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';

interface MockeryIconProps {
  action: MockeryAction;
  size?: number;
  className?: string;
}

const MockeryIconComponent: React.FC<MockeryIconProps> = ({ 
  action, 
  size = 24,
  className = ''
}) => {
  const getIcon = () => {
    switch (action) {
      case 'tomato':
        return <Flame size={size} className={className} />;
      case 'egg':
      case 'putridEgg':
      case 'rotten_egg':
        return <Egg size={size} className={className} />;
      case 'crown':
        return <Crown size={size} className={className} />;
      case 'thumbs_down':
        return <ThumbsDown size={size} className={className} />;
      case 'mock':
        return <Feather size={size} className={className} />;
      case 'stocks':
      case 'jester':
      case 'courtJester':
        return <Music size={size} className={className} />;
      case 'silence':
        return <AlertTriangle size={size} className={className} />;
      case 'taunt':
        return <Feather size={size} className={className} />;
      case 'smokeBomb':
        return <CloudLightning size={size} className={className} />;
      case 'protection':
        return <Shield size={size} className={className} />;
      case 'shame':
        return <AlertTriangle size={size} className={className} />;
      case 'challenge':
      case 'joust':
      case 'duel':
        return <Shield size={size} className={className} />;
      case 'royal_decree':
        return <Crown size={size} className={className} />;
      case 'flame':
        return <Flame size={size} className={className} />;
      case 'heart':
        return <Heart size={size} className={className} />;
      case 'skull':
        return <Skull size={size} className={className} />;
      case 'laugh':
        return <Laugh size={size} className={className} />;
      default:
        return <Feather size={size} className={className} />;
    }
  };

  return getIcon();
};

export default MockeryIconComponent;
