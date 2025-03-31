
import React, { useEffect, useState } from 'react';
import { MockeryAction } from '@/types/mockery';
import { motion, AnimatePresence } from 'framer-motion';
import { getMockeryName } from '@/utils/mockery';

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
  
  // Handle animation lifecycle
  useEffect(() => {
    if (isActive) {
      setShowEffect(true);
      
      // Auto-hide effect after animation completes
      const timer = setTimeout(() => {
        setShowEffect(false);
        
        // Notify parent when animation is completely done
        setTimeout(onComplete, 500);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);
  
  const getEffectClass = () => {
    const classes: Record<MockeryAction, string> = {
      tomatoes: 'bg-red-500/20',
      eggs: 'bg-yellow-500/20',
      crown: 'bg-amber-500/20',
      stocks: 'bg-gray-500/20',
      jester: 'bg-purple-500/20',
      shame: 'bg-red-800/20',
      protection: 'bg-green-500/20'
    };
    
    return classes[action] || 'bg-red-500/20';
  };
  
  return (
    <AnimatePresence>
      {showEffect && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`rounded-lg p-8 ${getEffectClass()} text-center max-w-md border shadow-lg`}
            initial={{ scale: 0.5, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.5, y: 100 }}
          >
            <h2 className="text-2xl font-bold mb-2">{getMockeryName(action)}!</h2>
            <p className="text-lg mb-4">
              {username} has been subjected to {getMockeryName(action).toLowerCase()}!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MockeryEffect;
