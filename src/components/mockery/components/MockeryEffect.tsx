
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MockeryAction } from '@/types/mockery';
import { getMockeryActionIcon, getMockeryDescription } from '@/utils/mockeryUtils';

interface MockeryEffectProps {
  username: string;
  action: MockeryAction;
  isActive: boolean;
  onComplete: () => void;
}

const MockeryEffect: React.FC<MockeryEffectProps> = ({ 
  username, 
  action, 
  isActive, 
  onComplete 
}) => {
  const [showEffect, setShowEffect] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  
  useEffect(() => {
    if (isActive) {
      setShowEffect(true);
      setAnimationDone(false);
      
      const timer = setTimeout(() => {
        setAnimationDone(true);
      }, 2500);
      
      return () => clearTimeout(timer);
    } else {
      setShowEffect(false);
    }
  }, [isActive]);
  
  const handleClose = () => {
    setShowEffect(false);
    if (onComplete) {
      onComplete();
    }
  };
  
  if (!showEffect) return null;
  
  const getEffectAnimation = () => {
    switch(action) {
      case 'tomatoes':
        return 'mockery-tomatoes-animation';
      case 'eggs':
      case 'putridEggs':
        return 'mockery-eggs-animation';
      case 'dunce':
        return 'mockery-dunce-animation';
      case 'courtJester':
        return 'mockery-jester-animation';
      case 'stocks':
        return 'mockery-stocks-animation';
      case 'glitterBomb':
        return 'mockery-glitter-animation';
      case 'smokeBomb':
        return 'mockery-smoke-animation';
      case 'silence':
        return 'mockery-silence-animation';
      default:
        return 'mockery-default-animation';
    }
  };
  
  const effectIcon = getMockeryActionIcon(action);
  const effectDescription = getMockeryDescription(action, username);
  const animationClass = getEffectAnimation();
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
      <Button 
        variant="outline" 
        size="sm" 
        className="absolute top-4 right-4 glass-morphism"
        onClick={handleClose}
      >
        <X className="h-4 w-4" />
      </Button>
      
      <div className="text-center max-w-md">
        <div className={`text-6xl mb-6 ${animationClass}`}>
          {effectIcon}
        </div>
        
        <h2 className="text-2xl font-bold mb-2 royal-gradient">
          {username} has been mocked!
        </h2>
        
        <p className="text-white/70 mb-6">
          {effectDescription}
        </p>
        
        {animationDone && (
          <Button 
            className="bg-royal-gold text-black hover:bg-royal-gold/90"
            onClick={handleClose}
          >
            Dismiss
          </Button>
        )}
      </div>
    </div>
  );
};

export default MockeryEffect;
