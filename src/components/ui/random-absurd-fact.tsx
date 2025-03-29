
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { generateRandomAbsurdFact } from '@/utils/absurdityGenerator';
import { Icon } from '@/components/ui/icon';

interface RandomAbsurdFactProps {
  className?: string;
  variant?: 'default' | 'toast' | 'banner' | 'tooltip';
  refreshInterval?: number | null; // in ms, null for no auto-refresh
  onClose?: () => void;
}

const RandomAbsurdFact: React.FC<RandomAbsurdFactProps> = ({
  className,
  variant = 'default',
  refreshInterval = null,
  onClose
}) => {
  const [fact, setFact] = useState<string>(generateRandomAbsurdFact());
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  const refreshFact = () => {
    setIsVisible(false);
    setTimeout(() => {
      setFact(generateRandomAbsurdFact());
      setIsVisible(true);
    }, 500);
  };
  
  useEffect(() => {
    if (refreshInterval !== null) {
      const interval = setInterval(refreshFact, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);
  
  // Variants for different displays
  const getContainerStyles = () => {
    switch (variant) {
      case 'toast':
        return "fixed bottom-4 right-4 max-w-md p-4 bg-black/80 border border-royal-gold/30 rounded-lg shadow-xl";
      case 'banner':
        return "w-full py-3 px-4 bg-gradient-to-r from-gray-900 to-black border-y border-royal-gold/20";
      case 'tooltip':
        return "p-3 bg-black border border-royal-gold/40 rounded-md shadow-lg max-w-xs";
      default:
        return "p-4 bg-black/60 border border-royal-gold/20 rounded-lg";
    }
  };
  
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className={cn(getContainerStyles(), className)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Icon name="Info" className="text-royal-gold h-5 w-5" />
              </motion.div>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <motion.h4 
                  className="text-royal-gold text-sm font-medium mb-1"
                  animate={{ 
                    color: ['#D4AF37', '#FFD700', '#D4AF37'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Absurd Throne Fact
                </motion.h4>
                
                {variant !== 'tooltip' && (
                  <div className="flex space-x-2">
                    <button
                      onClick={refreshFact}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon name="RefreshCw" size="sm" />
                    </button>
                    
                    {onClose && (
                      <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Icon name="X" size="sm" />
                      </button>
                    )}
                  </div>
                )}
              </div>
              
              <motion.p 
                className="text-gray-300 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {fact}
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RandomAbsurdFact;
