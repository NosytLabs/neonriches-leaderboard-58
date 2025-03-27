
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroQuote from './HeroQuote';
import HeroStatusTag from './HeroStatusTag';
import HeroActionButtons from './HeroActionButtons';
import HeroFooter from './HeroFooter';
import HeroBackground from './HeroBackground';
import useFloatingCoins from '@/hooks/use-floating-coins';

interface HeroContentProps {
  title?: string;
  subtitle?: string;
  quote?: string;
  statusTag?: string;
  className?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({
  title,
  subtitle,
  quote,
  statusTag,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Setup floating coins effect
  useEffect(() => {
    if (containerRef.current) {
      const triggerFloatingCoins = () => {
        const containerEl = containerRef.current;
        if (containerEl) {
          useFloatingCoins({
            containerRef: { current: containerEl as HTMLElement },
            frequency: 0.2,
            duration: 3000,
            minDelay: 100,
            maxDelay: 2000
          });
        }
      };
      
      // Trigger once on mount
      triggerFloatingCoins();
      
      // Set up interval to periodically create new coins
      const interval = setInterval(triggerFloatingCoins, 5000);
      
      return () => clearInterval(interval);
    }
  }, []);
  
  return (
    <div className={`relative z-10 pt-32 pb-20 ${className}`} ref={containerRef}>
      {/* Background effects */}
      <HeroBackground />
      
      {/* Main content with animations */}
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {statusTag && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <HeroStatusTag>{statusTag}</HeroStatusTag>
            </motion.div>
          )}
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <HeroTitle>{title}</HeroTitle>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <HeroSubtitle text={subtitle} />
          </motion.div>
          
          {quote && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <HeroQuote text={quote} />
            </motion.div>
          )}
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <HeroActionButtons />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-32"
        >
          <HeroFooter />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
