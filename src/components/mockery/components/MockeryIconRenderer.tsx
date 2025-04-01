
import React from 'react';
import { Egg, Lock, Target, Flame, Crown, User, Volume2, VolumeX, CloudFog, AlertCircle, Shield } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';
import TomatoIcon from '@/components/icons/TomatoIcon';

interface MockeryIconRendererProps {
  action: MockeryAction;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const MockeryIconRenderer: React.FC<MockeryIconRendererProps> = ({ 
  action, 
  size = 'md',
  className = '' 
}) => {
  const sizeMap = {
    'sm': 16,
    'md': 20,
    'lg': 24
  };
  
  const iconSize = sizeMap[size];
  
  switch (action) {
    case 'tomatoes':
      return <TomatoIcon size={iconSize} className={`text-red-500 ${className}`} />;
    case 'eggs':
      return <Egg size={iconSize} className={`text-amber-300 ${className}`} />;
    case 'stocks':
      return <Lock size={iconSize} className={`text-slate-400 ${className}`} />;
    case 'crown':
      return <Crown size={iconSize} className={`text-royal-gold ${className}`} />;
    case 'jester':
      return <User size={iconSize} className={`text-purple-400 ${className}`} />;
    case 'putridEggs':
      return <Egg size={iconSize} className={`text-green-400 ${className}`} />;
    case 'silence':
      return <VolumeX size={iconSize} className={`text-blue-400 ${className}`} />;
    case 'courtJester':
      return <User size={iconSize} className={`text-pink-400 ${className}`} />;
    case 'smokeBomb':
      return <CloudFog size={iconSize} className={`text-gray-400 ${className}`} />;
    case 'shame':
      return <AlertCircle size={iconSize} className={`text-red-400 ${className}`} />;
    case 'protection':
      return <Shield size={iconSize} className={`text-emerald-400 ${className}`} />;
    case 'taunt':
      return <Volume2 size={iconSize} className={`text-yellow-400 ${className}`} />;
    case 'mock':
      return <User size={iconSize} className={`text-teal-400 ${className}`} />;
    case 'challenge':
      return <Flame size={iconSize} className={`text-orange-400 ${className}`} />;
    case 'joust':
      return <Target size={iconSize} className={`text-indigo-400 ${className}`} />;
    case 'duel':
      return <Target size={iconSize} className={`text-red-600 ${className}`} />;
    default:
      return <Target size={iconSize} className={`text-gray-400 ${className}`} />;
  }
};

export default MockeryIconRenderer;
