
import React from 'react';
import { Egg, Lock, Target, Flame } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';

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
      return <Flame size={iconSize} className={`text-red-500 ${className}`} />;
    case 'eggs':
      return <Egg size={iconSize} className={`text-amber-300 ${className}`} />;
    case 'stocks':
      return <Lock size={iconSize} className={`text-slate-400 ${className}`} />;
    case 'crown':
      return <Target size={iconSize} className={`text-royal-gold ${className}`} />;
    case 'jester':
      return <Target size={iconSize} className={`text-purple-400 ${className}`} />;
    case 'putridEggs':
      return <Egg size={iconSize} className={`text-green-400 ${className}`} />;
    case 'silence':
      return <Target size={iconSize} className={`text-blue-400 ${className}`} />;
    case 'courtJester':
      return <Target size={iconSize} className={`text-pink-400 ${className}`} />;
    case 'smokeBomb':
      return <Target size={iconSize} className={`text-gray-400 ${className}`} />;
    case 'shame':
      return <Target size={iconSize} className={`text-red-400 ${className}`} />;
    case 'protection':
      return <Target size={iconSize} className={`text-emerald-400 ${className}`} />;
    default:
      return <Target size={iconSize} className={`text-gray-400 ${className}`} />;
  }
};

export default MockeryIconRenderer;
