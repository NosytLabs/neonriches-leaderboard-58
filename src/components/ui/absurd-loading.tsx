
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import ThroneCoinsIcon from '@/components/icons/ThroneCoinsIcon';

export interface AbsurdLoadingProps {
  className?: string;
  variant?: 'default' | 'royal' | 'spinner' | 'throwing-money' | 'ransacking';
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AbsurdLoading: React.FC<AbsurdLoadingProps> = ({
  className,
  variant = 'default',
  text = 'Loading...',
  size = 'md'
}) => {
  const containerClasses = {
    sm: 'h-12',
    md: 'h-24',
    lg: 'h-36'
  };
  
  const textClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
  
  // Random absurd loading texts
  const absurdLoadingTexts = [
    "Ransacking royal coffers...",
    "Counting your money...",
    "Polishing the throne...",
    "Bribing the leaderboard...",
    "Inflating your ego...",
    "Printing worthless titles...",
    "Validating your life choices...",
    "Calculating your poor financial decisions...",
    "Converting currency to clout...",
    "Minting digital regrets...",
    "Measuring your e-peen...",
    "Reassuring your bank account...",
    "Preparing meaningless statistics...",
    "Manifesting digital nobility...",
    "Generating artificial importance..."
  ];
  
  // Use provided text or pick a random absurd one
  const displayText = text === 'Loading...' ? 
    absurdLoadingTexts[Math.floor(Math.random() * absurdLoadingTexts.length)] : 
    text;
  
  // Royal crown loading animation
  if (variant === 'royal') {
    return (
      <div className={cn("flex flex-col items-center justify-center", containerClasses[size], className)}>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ 
            scale: [0.8, 1.1, 0.8],
            opacity: [0.5, 1, 0.5],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-3"
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M10,40 L32,20 L54,40 L44,50 L32,44 L20,50 Z" 
              fill="#0F0F1A"
              stroke="#D4AF37"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.path 
              d="M20,30 L32,10 L44,30" 
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.circle 
              cx="32" 
              cy="25" 
              r="4"
              fill="#D4AF37"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>
        <motion.p 
          className={cn("text-royal-gold", textClasses[size])}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {displayText}
        </motion.p>
      </div>
    );
  }
  
  // Money throwing animation
  if (variant === 'throwing-money') {
    return (
      <div className={cn("flex flex-col items-center justify-center", containerClasses[size], className)}>
        <div className="relative w-32 h-32">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0,
                opacity: 0,
                rotate: Math.random() * 360
              }}
              animate={{ 
                x: (Math.random() - 0.5) * 100, 
                y: (Math.random() - 0.5) * 100,
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: `${Math.random() * 720 - 360}deg`
              }}
              transition={{ 
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            >
              <ThroneCoinsIcon size="sm" />
            </motion.div>
          ))}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          >
            <ThroneCoinsIcon size="lg" animated />
          </motion.div>
        </div>
        <motion.p 
          className={cn("text-royal-gold mt-3", textClasses[size])}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {displayText}
        </motion.p>
      </div>
    );
  }
  
  // Ransacking animation (coin explosion)
  if (variant === 'ransacking') {
    return (
      <div className={cn("flex flex-col items-center justify-center", containerClasses[size], className)}>
        <div className="relative w-32 h-32 mb-4">
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-royal-gold rounded-lg"
            animate={{ 
              scale: [1, 1.2, 0],
              opacity: [1, 1, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          
          {/* Exploding coins */}
          {[...Array(20)].map((_, i) => {
            const angle = (i / 20) * 360;
            const radius = 50 + Math.random() * 30;
            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-royal-gold rounded-full"
                initial={{ 
                  x: 0, 
                  y: 0,
                  scale: 0
                }}
                animate={{ 
                  x: Math.cos(angle * Math.PI / 180) * radius,
                  y: Math.sin(angle * Math.PI / 180) * radius,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5 + (i * 0.05),
                  repeatDelay: 0.5
                }}
              />
            );
          })}
          
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-2xl font-bold"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            BOOM!
          </motion.div>
        </div>
        <motion.p 
          className={cn("text-royal-gold", textClasses[size])}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {displayText}
        </motion.p>
      </div>
    );
  }
  
  // Default spinner or "spinner" variant
  return (
    <div className={cn("flex flex-col items-center justify-center", containerClasses[size], className)}>
      <motion.div
        className="w-12 h-12 border-4 border-royal-gold rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.p 
        className={cn("text-royal-gold mt-3", textClasses[size])}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {displayText}
      </motion.p>
    </div>
  );
};

export default AbsurdLoading;
