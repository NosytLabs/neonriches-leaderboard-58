
import React, { useEffect, useState } from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { getActiveMockeryClass, getMockeryName } from '@/utils/mockery';
import { motion, AnimatePresence } from 'framer-motion';

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
  
  useEffect(() => {
    if (isActive) {
      setShowEffect(true);
      const timer = setTimeout(() => {
        setShowEffect(false);
        setTimeout(onComplete, 500); // Wait for exit animation to complete
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);
  
  // Get relevant styling classes based on action
  const effectClass = getActiveMockeryClass(action);
  const actionName = getMockeryName(action);
  
  return (
    <AnimatePresence>
      {showEffect && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <div className={`p-8 rounded-lg text-center ${effectClass}`}>
            <h2 className="text-2xl font-bold mb-4">{actionName} Applied!</h2>
            <p className="text-xl">{username} has been mocked!</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MockeryEffect;
