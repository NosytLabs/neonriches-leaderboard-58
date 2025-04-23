
import React from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryActionIcon } from '@/utils/mockeryActionUtils';

interface MockeryEffectProps {
  action: MockeryAction;
  username: string;
}

const MockeryEffect: React.FC<MockeryEffectProps> = ({ action, username }) => {
  const IconComponent = getMockeryActionIcon(action);
  
  const getEffectText = () => {
    switch (action) {
      case 'tomatoes':
        return `${username} is being pelted with tomatoes!`;
      case 'eggs':
        return `${username} is being egged!`;
      case 'crown':
        return `${username}'s crown has been stolen!`;
      case 'stocks':
        return `${username} has been put in the stocks!`;
      case 'jester':
        return `${username} has been made the royal jester!`;
      case 'shame':
        return `${username} is being publicly shamed!`;
      case 'target':
        return `${username} has been marked as a target!`;
      default:
        return `${username} is being mocked!`;
    }
  };
  
  return (
    <div className="mockery-effect">
      <div className="flex items-center justify-center mb-4">
        <IconComponent size={48} className="text-royal-crimson animate-bounce" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{getEffectText()}</h3>
      <p className="text-white/70">Royal mockery is being displayed.</p>
    </div>
  );
};

export default MockeryEffect;
