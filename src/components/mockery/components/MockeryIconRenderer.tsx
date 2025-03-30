
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { Target, Shield, Bomb, Crown, AlertCircle, Feather, Skull, ThumbsDown } from 'lucide-react';

interface MockeryIconRendererProps {
  action: MockeryAction;
  size?: number;
  className?: string;
}

const MockeryIconRenderer: React.FC<MockeryIconRendererProps> = ({ 
  action, 
  size = 16, 
  className 
}) => {
  // Render icon directly based on action
  const renderIcon = () => {
    switch (action) {
      case 'tomatoes':
      case 'eggs':
      case 'putridEggs':
        return <Target size={size} />;
      case 'stocks':
      case 'dunce':
      case 'silence':
        return <AlertCircle size={size} />;
      case 'courtJester':
      case 'jest':
        return <Feather size={size} />;
      case 'smokeBomb':
      case 'glitterBomb':
        return <Bomb size={size} />;
      case 'protection':
      case 'immune':
        return <Shield size={size} />;
      case 'guillotine':
      case 'dungeons':
        return <Skull size={size} />;
      case 'crown':
      case 'target':
      case 'challenge':
        return <Crown size={size} />;
      default:
        return <ThumbsDown size={size} />;
    }
  };
  
  return (
    <div className={className}>
      {renderIcon()}
    </div>
  );
};

export default MockeryIconRenderer;
