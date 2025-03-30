
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MockeryAction } from '@/types/mockery';
import { renderMockeryIcon } from '@/utils/mockeryUtils';
import { getMockeryActionIcon } from '@/utils/mockery/mockery-icons';

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
  const [elements, setElements] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    if (!isActive) return;
    
    const count = action === 'tomatoes' || action === 'eggs' ? 20 : 10;
    const duration = 3000;
    const newElements = [];
    
    for (let i = 0; i < count; i++) {
      const delay = Math.random() * 1000;
      const xPosition = Math.random() * 100;
      const rotation = Math.random() * 360;
      const scale = 0.5 + Math.random() * 1;
      
      const iconName = getMockeryActionIcon(action);
      
      newElements.push(
        <motion.div
          key={`mockery-${action}-${i}`}
          initial={{ 
            opacity: 0, 
            y: -100, 
            x: `${xPosition}vw`,
            rotate: rotation,
            scale
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: ['0vh', '100vh'],
            rotate: [rotation, rotation + 360]
          }}
          transition={{ 
            duration: 3,
            delay: delay / 1000,
            times: [0, 0.1, 0.9, 1]
          }}
          className="fixed z-50 text-4xl pointer-events-none"
        >
          {renderMockeryIcon(iconName, "h-12 w-12")}
        </motion.div>
      );
    }
    
    setElements(newElements);
    
    // Clean up and trigger the completion callback
    const timer = setTimeout(() => {
      setElements([]);
      if (onComplete) onComplete();
    }, duration);
    
    return () => clearTimeout(timer);
  }, [isActive, action, username, onComplete]);
  
  if (!isActive) return null;
  
  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <motion.div 
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-2">{username} is being subjected to:</h2>
              <div className="text-4xl font-bold royal-gradient">
                {action.charAt(0).toUpperCase() + action.slice(1)}
              </div>
            </motion.div>
          </motion.div>
          {elements}
        </div>
      )}
    </AnimatePresence>
  );
};

export default MockeryEffect;
