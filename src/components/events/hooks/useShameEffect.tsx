
import React, { useState, useEffect } from 'react';
import { ShameAction } from '@/types/mockery';

export interface ShameEffectProps {
  username: string;
  action: ShameAction;
  isActive: boolean;
  onComplete: () => void;
}

export const ShameEffect: React.FC<ShameEffectProps> = ({
  username,
  action,
  isActive,
  onComplete
}) => {
  const [effectStep, setEffectStep] = useState(0);
  
  useEffect(() => {
    if (!isActive) return;
    
    // Create a sequence of animation steps
    const totalSteps = 5;
    let currentStep = 0;
    
    const animationInterval = setInterval(() => {
      currentStep++;
      setEffectStep(currentStep);
      
      if (currentStep >= totalSteps) {
        clearInterval(animationInterval);
        setTimeout(() => {
          onComplete();
          setEffectStep(0);
        }, 1000);
      }
    }, 800);
    
    return () => {
      clearInterval(animationInterval);
    };
  }, [isActive, onComplete]);
  
  if (!isActive) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative max-w-lg w-full bg-black/80 rounded-lg p-6 text-center">
        <h3 className="text-2xl font-bold mb-4 text-white">
          Shaming {username}
        </h3>
        
        <div className="mt-6 mb-8 relative h-40 flex items-center justify-center">
          {action === 'ridicule' && (
            <div className={`text-5xl transition-all duration-500 ${effectStep >= 1 ? 'scale-100' : 'scale-0'}`}>
              🗣️
            </div>
          )}
          
          {action === 'humiliate' && (
            <div className={`text-5xl transition-all duration-500 ${effectStep >= 1 ? 'scale-100' : 'scale-0'}`}>
              😳
            </div>
          )}
          
          {action === 'expose' && (
            <div className={`text-5xl transition-all duration-500 ${effectStep >= 1 ? 'scale-100' : 'scale-0'}`}>
              👁️
            </div>
          )}
          
          {action === 'mock' && (
            <div className={`text-5xl transition-all duration-500 ${effectStep >= 1 ? 'scale-100' : 'scale-0'}`}>
              🤡
            </div>
          )}
          
          {action === 'tomatoes' && (
            <div className={`text-5xl transition-all duration-500 ${effectStep >= 1 ? 'scale-100' : 'scale-0'}`}>
              🍅
            </div>
          )}
          
          {action === 'putridEggs' && (
            <div className={`text-5xl transition-all duration-500 ${effectStep >= 1 ? 'scale-100' : 'scale-0'}`}>
              🥚
            </div>
          )}
          
          {action === 'stocks' && (
            <div className={`text-5xl transition-all duration-500 ${effectStep >= 1 ? 'scale-100' : 'scale-0'}`}>
              🔒
            </div>
          )}
          
          {action === 'silence' && (
            <div className={`text-5xl transition-all duration-500 ${effectStep >= 1 ? 'scale-100' : 'scale-0'}`}>
              🤐
            </div>
          )}
          
          {action === 'courtJester' && (
            <div className={`text-5xl transition-all duration-500 ${effectStep >= 1 ? 'scale-100' : 'scale-0'}`}>
              🃏
            </div>
          )}
          
          {action === 'dunce' && (
            <div className={`text-5xl transition-all duration-500 ${effectStep >= 1 ? 'scale-100' : 'scale-0'}`}>
              🎯
            </div>
          )}
          
          {action === 'smokeBomb' && (
            <div className={`text-5xl transition-all duration-500 ${effectStep >= 1 ? 'scale-100' : 'scale-0'}`}>
              💨
            </div>
          )}
        </div>
        
        <div className="space-y-2 mt-4">
          <div className={`transition-opacity duration-500 ${effectStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            Preparing the {action}...
          </div>
          <div className={`transition-opacity duration-500 ${effectStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
            Applying the {action} to {username}...
          </div>
          <div className={`transition-opacity duration-500 ${effectStep >= 4 ? 'opacity-100' : 'opacity-0'}`}>
            Shaming complete! {username} has been subjected to {action}!
          </div>
        </div>
      </div>
    </div>
  );
};

export function useShameEffect() {
  const [showEffect, setShowEffect] = useState(false);
  const [effectData, setEffectData] = useState<{
    username: string;
    action: ShameAction;
  }>({
    username: '',
    action: 'mock'
  });
  
  const triggerEffect = (username: string, action: ShameAction) => {
    setEffectData({ username, action });
    setShowEffect(true);
  };
  
  const completeEffect = () => {
    setShowEffect(false);
  };
  
  return {
    showEffect,
    effectData,
    triggerEffect,
    completeEffect,
    ShameEffect
  };
}

export default useShameEffect;
