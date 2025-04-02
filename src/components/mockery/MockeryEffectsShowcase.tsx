
import React, { useState, useEffect } from 'react';
import { MockeryAction } from '@/types/mockery-types';
import MockeryEffect from './MockeryEffect';

interface MockeryEffectsShowcaseProps {
  username: string;
  action: MockeryAction;
  isActive?: boolean;
  onComplete?: () => void;
}

const MockeryEffectsShowcase: React.FC<MockeryEffectsShowcaseProps> = ({
  username,
  action,
  isActive = true,
  onComplete
}) => {
  const [showEffect, setShowEffect] = useState(isActive);
  
  useEffect(() => {
    setShowEffect(isActive);
    
    if (isActive) {
      const timer = setTimeout(() => {
        setShowEffect(false);
        if (onComplete) onComplete();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);
  
  if (!showEffect) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="bg-background p-6 rounded-lg shadow-xl text-center text-xl">
        <MockeryEffect action={action} username={username} />
      </div>
    </div>
  );
};

export default MockeryEffectsShowcase;
