
import React from 'react';
import { MockeryAction, ExtendedMockeryAction } from '@/types/mockery-types';
import { 
  Target, 
  Shield, 
  Bomb, 
  Crown, 
  AlertCircle, 
  Feather, 
  Skull, 
  ThumbsDown,
  Ghost,
  Rat,
  Zap,
  UserX,
  Flame,
  Dragon
} from 'lucide-react';

interface MockeryIconRendererProps {
  action: MockeryAction | ExtendedMockeryAction;
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
      case 'target':
        return <Target size={size} />;
      
      case 'stocks':
      case 'dunce':
        return <AlertCircle size={size} />;
      
      case 'jester':
      case 'courtJester':
        return <Feather size={size} />;
      
      case 'smokeBomb':
      case 'glitterBomb':
        return <Bomb size={size} />;
      
      case 'protection':
      case 'immune':
      case 'knight':
      case 'rook':
        return <Shield size={size} />;
      
      case 'guillotine':
      case 'dungeons':
      case 'skeleton':
      case 'zombie':
        return <Skull size={size} />;
      
      case 'crown':
      case 'king':
      case 'queen':
      case 'bishop':
        return <Crown size={size} />;
      
      case 'ghost':
        return <Ghost size={size} />; 
      
      case 'rat':
        return <Rat size={size} />;
        
      case 'challenge':
        return <Zap size={size} />;
      
      case 'removal':
        return <UserX size={size} />;
        
      case 'witch':
      case 'demon':
      case 'roast':
        return <Flame size={size} />;
        
      case 'dragon':
      case 'monster':
        return <Dragon size={size} />;
      
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

export default React.memo(MockeryIconRenderer);
