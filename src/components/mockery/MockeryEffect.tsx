import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MockeryAction } from '@/types/mockery';
import { cn } from '@/lib/utils';
import { getMockeryDescription } from '@/utils/mockeryUtils';

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
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, rotation: number, velocity: number, delay: number}>>([]);
  const [showImpactEffect, setShowImpactEffect] = useState(false);
  
  const getEffectContent = () => {
    switch (action) {
      case 'tomatoes':
        return {
          emoji: '🍅',
          text: 'Splat!',
          color: 'text-red-500',
          className: 'tomato-effect',
          sound: 'splat',
          impact: 'splatter'
        };
      case 'putridEggs': // Renamed from eggs
        return {
          emoji: '🥚',
          text: 'Crack!',
          color: 'text-yellow-200',
          className: 'putrid-egg-effect',
          sound: 'crack',
          impact: 'shell-fragments'
        };
      case 'stocks':
        return {
          emoji: '🪓',
          text: 'Locked!',
          color: 'text-brown-500',
          className: 'stocks-effect',
          sound: 'wood',
          impact: 'wood-fragments'
        };
      case 'silence':
        return {
          emoji: '🤐',
          text: 'Silenced!',
          color: 'text-gray-400',
          className: 'silence-effect',
          sound: 'mute',
          impact: 'muted'
        };
      case 'courtJester':
        return {
          emoji: '🃏',
          text: 'Jester!',
          color: 'text-purple-400',
          className: 'jester-effect',
          sound: 'jingle',
          impact: 'confetti'
        };
      case 'smokeBomb': // New smoke bomb effect
        return {
          emoji: '💨',
          text: 'Smoke Bomb!',
          color: 'text-gray-300',
          className: 'smoke-bomb-effect',
          sound: 'explosion',
          impact: 'smoke'
        };
      default:
        return {
          emoji: '😯',
          text: 'Mocked!',
          color: 'text-white',
          className: 'mock-effect',
          sound: 'general',
          impact: 'default'
        };
    }
  };
  
  const effectContent = getEffectContent();
  
  useEffect(() => {
    if (!isActive) return;
    
    let particleCount = 20;
    let particleType = 'standard';
    
    switch (action) {
      case 'tomatoes':
        particleCount = 25;
        particleType = 'tomato';
        break;
      case 'putridEggs': // Renamed from eggs
        particleCount = 15;
        particleType = 'egg';
        break;
      case 'smokeBomb': // New smoke bomb effect
        particleCount = 40;
        particleType = 'smoke';
        break;
      case 'courtJester':
        particleCount = 30;
        particleType = 'confetti';
        break;
      default:
        particleCount = 20;
        particleType = 'standard';
    }
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: action === 'silence' ? 50 + (Math.random() * 30 - 15) : Math.random() * 100,
      y: action === 'silence' ? 50 + (Math.random() * 30 - 15) : Math.random() * 100,
      rotation: Math.random() * 360,
      velocity: 1 + Math.random() * 2,
      delay: Math.random() * 0.5
    }));
    
    setParticles(newParticles);
    
    setTimeout(() => {
      setShowImpactEffect(true);
      
      if (typeof window !== 'undefined' && 'AudioContext' in window) {
        try {
          console.log(`Playing ${effectContent.sound} sound effect`);
        } catch (error) {
          console.error('Error playing sound effect:', error);
        }
      }
    }, 500);
    
    const timer = setTimeout(() => {
      setParticles([]);
      setShowImpactEffect(false);
      if (onComplete) onComplete();
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [isActive, action, onComplete, effectContent.sound]);
  
  if (isActive && action === 'smokeBomb') {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden perspective">
          <motion.div 
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          <motion.div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ scale: 0.5, opacity: 0, rotateX: -20 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 1.5, opacity: 0, rotateX: 20 }}
            transition={{ duration: 0.5, type: "spring", damping: 15 }}
          >
            <div className="text-8xl mb-4">
              💣 💨
            </div>
            <div className="text-4xl font-bold text-gray-300">
              Smoke Bomb!
            </div>
            <motion.div 
              className="text-xl text-white/80 mt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {username}'s profile is engulfed in smoke!
            </motion.div>
            <motion.div 
              className="text-sm text-white/60 mt-4 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {getMockeryDescription(action)}
            </motion.div>
          </motion.div>
          
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute"
              initial={{ 
                left: '50%',
                top: '50%',
                scale: 0.5,
                opacity: 0
              }}
              animate={{ 
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                scale: 1 + Math.random(),
                opacity: [0, 0.8, 0.4, 0],
                rotate: particle.rotation * 2
              }}
              transition={{ 
                duration: 2 / particle.velocity,
                ease: "easeOut",
                delay: particle.delay,
                times: [0, 0.2, 0.8, 1]
              }}
            >
              <div className="text-4xl transform blur-sm text-gray-300">
                💨
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            animate={{ 
              x: [0, -10, 10, -10, 10, 0],
              y: [0, 10, -10, 10, -10, 0]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeInOut"
            }}
          />
        </div>
      </AnimatePresence>
    );
  }
  
  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden perspective">
          <motion.div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          <motion.div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ scale: 0.5, opacity: 0, rotateX: -20 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 1.5, opacity: 0, rotateX: 20 }}
            transition={{ duration: 0.5, type: "spring", damping: 15 }}
          >
            <div className={cn("text-8xl mb-4", effectContent.className)}>
              {effectContent.emoji}
            </div>
            <div className={cn("text-4xl font-bold", effectContent.color)}>
              {effectContent.text}
            </div>
            <motion.div 
              className="text-xl text-white/80 mt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {username} has been mocked!
            </motion.div>
            <motion.div 
              className="text-sm text-white/60 mt-4 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {getMockeryDescription(action)}
            </motion.div>
          </motion.div>
          
          {showImpactEffect && (
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`impact-${effectContent.impact} w-40 h-40 rounded-full flex items-center justify-center`}>
                {action === 'tomatoes' && (
                  <div className="w-full h-full bg-red-500/30 rounded-full" 
                    style={{
                      boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)',
                      backgroundImage: 'radial-gradient(circle, rgba(239,68,68,0.6) 0%, rgba(239,68,68,0) 70%)'
                    }}
                  />
                )}
                {action === 'putridEggs' && (
                  <div className="w-full h-full bg-yellow-200/30 rounded-full"
                    style={{
                      boxShadow: '0 0 30px rgba(254, 240, 138, 0.5)',
                      backgroundImage: 'radial-gradient(circle, rgba(254,240,138,0.6) 0%, rgba(254,240,138,0) 70%)'
                    }}
                  />
                )}
                {action === 'courtJester' && (
                  <div className="w-full h-full bg-purple-500/30 rounded-full"
                    style={{
                      boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                      backgroundImage: 'radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(168,85,247,0) 70%)'
                    }}
                  />
                )}
              </div>
            </motion.div>
          )}
          
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute"
              initial={{ 
                left: action === 'tomatoes' || action === 'putridEggs' ? '50%' : `${particle.x}%`,
                top: action === 'tomatoes' || action === 'putridEggs' ? '0%' : `${particle.y}%`,
                rotate: 0,
                opacity: 0,
                scale: 0.5
              }}
              animate={{ 
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                rotate: particle.rotation,
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.8]
              }}
              transition={{ 
                duration: 1.5 / particle.velocity,
                ease: "easeOut",
                delay: particle.delay,
                times: [0, 0.1, 0.8, 1]
              }}
            >
              <div className="text-2xl transform transition-transform hover:scale-110">
                {effectContent.emoji}
              </div>
            </motion.div>
          ))}
          
          {(action === 'tomatoes' || action === 'putridEggs' || action === 'stocks') && (
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              animate={{ 
                x: [0, -5, 5, -5, 5, 0],
                y: [0, 5, -5, 5, -5, 0]
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                ease: "easeInOut"
              }}
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default MockeryEffect;
