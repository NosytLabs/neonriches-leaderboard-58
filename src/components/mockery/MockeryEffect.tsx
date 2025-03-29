
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MockeryAction } from '@/types/mockery';
import { cn } from '@/lib/utils';

interface MockeryEffectProps {
  username: string;
  action: MockeryAction;
  isActive: boolean;
  onComplete?: () => void;
}

const MockeryEffect: React.FC<MockeryEffectProps> = ({
  username,
  action,
  isActive,
  onComplete
}) => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, rotation: number}>>([]);
  
  // Effect content based on mockery type
  const getEffectContent = () => {
    switch (action) {
      case 'tomatoes':
        return {
          emoji: '🍅',
          text: 'Splat!',
          color: 'text-red-500',
          className: 'tomato-effect'
        };
      case 'eggs':
        return {
          emoji: '🥚',
          text: 'Crack!',
          color: 'text-yellow-200',
          className: 'egg-effect'
        };
      case 'stocks':
        return {
          emoji: '🪓',
          text: 'Locked!',
          color: 'text-brown-500',
          className: 'stocks-effect'
        };
      case 'silence':
        return {
          emoji: '🤐',
          text: 'Silenced!',
          color: 'text-gray-400',
          className: 'silence-effect'
        };
      case 'courtJester':
        return {
          emoji: '🃏',
          text: 'Jester!',
          color: 'text-purple-400',
          className: 'jester-effect'
        };
      default:
        return {
          emoji: '😯',
          text: 'Mocked!',
          color: 'text-white',
          className: 'mock-effect'
        };
    }
  };
  
  const effectContent = getEffectContent();
  
  useEffect(() => {
    if (!isActive) return;
    
    // Create particles
    const particleCount = action === 'tomatoes' || action === 'eggs' ? 20 : 10;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
    }));
    
    setParticles(newParticles);
    
    // Clean up effect after animation
    const timer = setTimeout(() => {
      setParticles([]);
      if (onComplete) onComplete();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [isActive, action, onComplete]);
  
  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Main effect */}
          <motion.div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={cn("text-8xl mb-4", effectContent.className)}>
              {effectContent.emoji}
            </div>
            <div className={cn("text-4xl font-bold", effectContent.color)}>
              {effectContent.text}
            </div>
            <div className="text-xl text-white/80 mt-2">
              {username} has been mocked!
            </div>
          </motion.div>
          
          {/* Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute"
              initial={{ 
                left: `50%`,
                top: `50%`,
                rotate: 0,
                opacity: 0,
                scale: 0.5
              }}
              animate={{ 
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                rotate: particle.rotation,
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0
              }}
              transition={{ 
                duration: 1 + Math.random(),
                ease: "easeOut"
              }}
            >
              <div className="text-2xl">{effectContent.emoji}</div>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default MockeryEffect;
