
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Coins, ChevronsUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoyalDepositEffectProps {
  amount: number;
  isActive: boolean;
  onComplete?: () => void;
}

const RoyalDepositEffect: React.FC<RoyalDepositEffectProps> = ({
  amount,
  isActive,
  onComplete
}) => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, rotation: number}>>([]);
  
  // Create coin shower effect when active
  useEffect(() => {
    if (!isActive) return;
    
    // Create particles based on amount (max 20)
    const particleCount = Math.min(Math.max(5, Math.floor(amount / 10)), 20);
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // random x position (%)
      y: Math.random() * -50, // start above viewport
      rotation: Math.random() * 360, // random rotation
    }));
    
    setParticles(newParticles);
    
    // Clean up effect after animation
    const timer = setTimeout(() => {
      setParticles([]);
      if (onComplete) onComplete();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [isActive, amount, onComplete]);
  
  // Scale effect based on amount
  const getEffectScale = () => {
    if (amount < 50) return 'small';
    if (amount < 100) return 'medium';
    return 'large';
  };
  
  const effectScale = getEffectScale();

  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {/* Crown animation */}
          <motion.div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Crown 
              className={cn(
                "text-royal-gold",
                effectScale === 'small' && "w-20 h-20",
                effectScale === 'medium' && "w-32 h-32",
                effectScale === 'large' && "w-48 h-48"
              )} 
            />
          </motion.div>
          
          {/* Text effect */}
          <motion.div
            className="absolute left-1/2 top-[60%] transform -translate-x-1/2 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className={cn(
              "text-royal-gold font-extrabold",
              effectScale === 'small' && "text-3xl",
              effectScale === 'medium' && "text-4xl",
              effectScale === 'large' && "text-5xl"
            )}>
              +${amount.toFixed(2)}
            </div>
            <div className={cn(
              "text-white/80 flex justify-center items-center gap-1",
              effectScale === 'small' && "text-sm",
              effectScale === 'medium' && "text-base",
              effectScale === 'large' && "text-lg"
            )}>
              <ChevronsUp className="h-4 w-4" />
              <span>Your throne grows stronger!</span>
            </div>
          </motion.div>
          
          {/* Falling coins */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute"
              initial={{ 
                left: `${particle.x}%`,
                top: `-50px`,
                rotate: particle.rotation,
                opacity: 1
              }}
              animate={{ 
                top: `${window.innerHeight + 100}px`,
                opacity: 0
              }}
              transition={{ 
                duration: 2 + Math.random() * 2,
                ease: "linear"
              }}
            >
              <Coins className="text-royal-gold w-8 h-8" />
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default RoyalDepositEffect;
