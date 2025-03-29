
import React, { useEffect, useState } from 'react';
import { MockeryAction } from '@/types/mockery';
import { motion, AnimatePresence } from 'framer-motion';
import { getMockeryActionIcon } from '../utils/mockeryUtils';
import { Egg, Skull, Crown, UserCheck } from 'lucide-react';

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
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; rotation: number; scale: number }>>([]);
  
  // Calculate positions for animation elements
  useEffect(() => {
    if (isActive) {
      const newElements = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 1.5
      }));
      
      setElements(newElements);
      
      // Auto-complete after animation duration
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);
  
  if (!isActive) return null;
  
  const getIcon = () => {
    switch (action) {
      case 'eggs':
        return Egg;
      case 'stocks':
        return Skull;
      case 'courtJester':
        return Crown;
      case 'silence':
        return UserCheck;
      case 'tomatoes':
      default:
        return UserCheck;
    }
  };
  
  const Icon = getIcon();
  
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="p-6 text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-white">
              {username} has been subjected to {action}!
            </h2>
            
            <div className="relative w-64 h-64 mx-auto">
              {elements.map((el) => (
                <motion.div
                  key={el.id}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 0,
                    rotate: 0,
                    scale: 0.5
                  }}
                  animate={{ 
                    x: `${el.x - 50}vw`, 
                    y: `${el.y - 50}vh`, 
                    opacity: [0, 1, 0],
                    rotate: el.rotation,
                    scale: el.scale
                  }}
                  transition={{
                    duration: 2,
                    delay: el.id * 0.05,
                    ease: "easeOut"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <Icon className="w-8 h-8 text-royal-crimson" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MockeryEffect;
