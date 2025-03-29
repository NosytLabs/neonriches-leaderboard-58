
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/icon';

interface ThroneCoinsIconProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  onClick?: () => void;
}

const ThroneCoinsIcon: React.FC<ThroneCoinsIconProps> = ({ 
  className, 
  size = 'md', 
  animated = true,
  onClick
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  };

  return (
    <div 
      className={cn(
        'relative inline-flex items-center justify-center cursor-pointer', 
        sizeClasses[size], 
        animated && 'group',
        className
      )}
      onClick={onClick}
      aria-hidden="true"
    >
      {/* Base coin */}
      <motion.div
        className="absolute inset-0"
        initial={animated ? { scale: 0.9, opacity: 0 } : {}}
        animate={animated ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Icon 
          name="coin" 
          size="2xl" 
          color="#D4AF37"
          className={cn(
            "w-full h-full",
            animated && "group-hover:brightness-110 transition-all duration-300"
          )}
        />
      </motion.div>
      
      {/* Crown overlay */}
      <motion.div
        className="absolute"
        initial={animated ? { scale: 0.8, y: -2, opacity: 0 } : {}}
        animate={animated ? { scale: 1, y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ top: '25%', width: '50%', height: '30%' }}
      >
        <Icon 
          name="crown" 
          className={cn(
            "w-full h-full text-royal-gold",
            animated && "group-hover:brightness-125 transition-all duration-300"
          )}
        />
      </motion.div>
      
      {/* Dollar sign */}
      <motion.div
        className="absolute"
        initial={animated ? { opacity: 0, scale: 0.8 } : {}}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.3 }}
        style={{ bottom: '25%', width: '40%', height: '30%' }}
      >
        <Icon 
          name="dollar" 
          className={cn(
            "w-full h-full text-amber-800",
            animated && "group-hover:text-royal-gold transition-colors duration-300"
          )}
        />
      </motion.div>
      
      {/* Shine effect */}
      {animated && (
        <motion.div
          className="absolute w-1/4 h-1/4 bg-white/20 rounded-full"
          style={{ top: '20%', left: '20%' }}
          animate={{ 
            opacity: [0, 0.3, 0],
            x: [0, 10, 20],
            y: [0, 10, 20]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 3
          }}
        />
      )}
    </div>
  );
};

export default ThroneCoinsIcon;
