
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';

// Pre-defined list of absurd facts instead of generating them
const ABSURD_FACTS = [
  "In 1784, a French nobleman spent his entire fortune building a golden throne that was never sat upon.",
  "The world's most expensive virtual hat sold for $18,000 in an online game.",
  "A Japanese billionaire bought a painting for $110 million just to hang it in his private jet.",
  "Emperor Caligula once declared war on Neptune and had his soldiers stab the sea.",
  "In medieval times, nobility would wear shoes so pointy they couldn't walk properly just to show they didn't need to work.",
  "A crypto investor once lost access to $250 million in Bitcoin because he forgot his password.",
  "A billionaire once commissioned a solid gold toilet for his private yacht.",
  "Ancient Egyptian pharaohs were buried with their wealth, including solid gold coffins.",
  "A tech CEO spent $30 million on a single party that lasted only 6 hours.",
  "During the Dutch tulip mania, a single tulip bulb could cost more than a house.",
  "King Louis XIV had 413 beds across his various palaces, most never slept in.",
  "The Sultan of Brunei owns more than 7,000 luxury cars that he never drives.",
  "A Wall Street executive once spent $15,000 on a single dessert covered in edible gold.",
  "Roman emperor Nero had a dining room with a ceiling that dropped rose petals on guests.",
  "A Silicon Valley mogul purchased a $90 million mansion that sits empty most of the year.",
  "An oil tycoon bought a $500,000 gold bathtub that he admitted to using only three times.",
  "In 2023, a tech billionaire spent $44 billion to buy a social media company primarily to change its name and logo.",
  "A Russian oligarch spent $35 million on a wedding for his daughter featuring Elton John and Mariah Carey as performers.",
  "A startup CEO once spent $7 million on office furniture for a company that went bankrupt 6 months later.",
  "MrBeast spent $3.5 million to recreate Willy Wonka's chocolate factory for a 30-minute YouTube video.",
  "A hedge fund manager paid $91.1 million for a 3-foot-tall stainless steel rabbit sculpture.",
  "A cryptocurrency founder bought a $4.3 million lunch with Warren Buffett, then canceled and apologized for 'excessive self-promotion'."
];

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
  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * ABSURD_FACTS.length);
    return ABSURD_FACTS[randomIndex];
  };
  
  const [fact, setFact] = useState<string>(getRandomFact());
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  const refreshFact = () => {
    setIsVisible(false);
    setTimeout(() => {
      setFact(getRandomFact());
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
                <Icon name="AlertCircle" className="text-royal-gold h-5 w-5" />
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
                  Absurd Wealth Fact
                </motion.h4>
                
                {variant !== 'tooltip' && (
                  <div className="flex space-x-2">
                    <button
                      onClick={refreshFact}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon name="RefreshCw" size={16} />
                    </button>
                    
                    {onClose && (
                      <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Icon name="X" size={16} />
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
