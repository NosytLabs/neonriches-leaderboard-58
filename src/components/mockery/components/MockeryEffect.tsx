
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getMockeryDescription, getMockeryName, getMockeryActionIcon } from '@/utils/mockeryUtils';
import { MockeryAction } from '@/types/mockery';

interface MockeryEffectProps {
  username: string;
  action: MockeryAction;
  isActive: boolean;
  onComplete: () => void;
}

const MockeryEffect: React.FC<MockeryEffectProps> = ({ username, action, isActive, onComplete }) => {
  const [visible, setVisible] = useState(false);
  const Icon = getMockeryActionIcon(action);
  
  useEffect(() => {
    if (isActive) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive]);
  
  const handleAnimationComplete = () => {
    if (!visible) {
      onComplete();
    }
  };
  
  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {visible && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="bg-gray-900/90 border border-white/10 p-8 rounded-lg max-w-lg text-center"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mx-auto mb-4 w-20 h-20 flex items-center justify-center bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full"
            >
              <Icon size={36} className={`text-${action === 'tomatoes' ? 'red' : action === 'eggs' ? 'yellow' : 'white'}-500`} />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-bold mb-2 text-white"
            >
              {getMockeryName(action)}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-white/70 mb-4"
            >
              {username} has been subjected to {getMockeryName(action).toLowerCase()}!
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-white/50 text-sm italic"
            >
              {getMockeryDescription(action)}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MockeryEffect;
