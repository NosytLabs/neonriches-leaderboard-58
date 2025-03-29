
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Coins, ChevronsUp, Star, Sparkles } from 'lucide-react';
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
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, rotation: number, size: number, type: 'coin' | 'star' | 'sparkle'}>>([]);
  const [messages, setMessages] = useState<string[]>([]);
  
  // Collection of possible messages
  const possibleMessages = [
    "Your throne grows stronger!",
    "A royal contribution!",
    "The kingdom prospers!",
    "Your nobility rises!",
    "Power through wealth!",
    "The court recognizes your generosity!",
    "Riches beget status!",
    "Your royal coffers expand!",
    "Gold becomes glory!"
  ];
  
  // Create particle and message effects when active
  useEffect(() => {
    if (!isActive) return;
    
    // Pick 1-2 random messages based on amount
    const messageCount = amount > 100 ? 2 : 1;
    const selectedMessages = [];
    for (let i = 0; i < messageCount; i++) {
      const randomIndex = Math.floor(Math.random() * possibleMessages.length);
      selectedMessages.push(possibleMessages[randomIndex]);
    }
    setMessages(selectedMessages);
    
    // Create particles based on amount (max 30)
    const particleCount = Math.min(Math.max(5, Math.floor(amount / 5)), 30);
    const newParticles = Array.from({ length: particleCount }, (_, i) => {
      // Determine particle type - more special particles for higher amounts
      let type: 'coin' | 'star' | 'sparkle' = 'coin';
      const rand = Math.random();
      if (amount > 500) {
        // More stars and sparkles for big spenders
        type = rand < 0.5 ? 'coin' : rand < 0.8 ? 'star' : 'sparkle';
      } else if (amount > 100) {
        // Some stars for medium spenders
        type = rand < 0.7 ? 'coin' : rand < 0.9 ? 'star' : 'sparkle';
      } else {
        // Mostly coins for small spenders
        type = rand < 0.9 ? 'coin' : rand < 0.95 ? 'star' : 'sparkle';
      }
      
      return {
        id: i,
        x: Math.random() * 100, // random x position (%)
        y: Math.random() * -50, // start above viewport
        rotation: Math.random() * 360, // random rotation
        size: Math.random() * 0.5 + 0.5, // random size (0.5-1)
        type
      };
    });
    
    setParticles(newParticles);
    
    // Clean up effect after animation
    const timer = setTimeout(() => {
      setParticles([]);
      setMessages([]);
      if (onComplete) onComplete();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [isActive, amount, onComplete]);
  
  // Scale effect based on amount
  const getEffectScale = () => {
    if (amount < 50) return 'small';
    if (amount < 100) return 'medium';
    if (amount < 500) return 'large';
    return 'epic';
  };
  
  const effectScale = getEffectScale();
  
  // Get particle icon based on type
  const getParticleIcon = (type: 'coin' | 'star' | 'sparkle', size: number) => {
    switch (type) {
      case 'star':
        return <Star className="text-royal-gold" style={{ width: `${size * 24}px`, height: `${size * 24}px` }} />;
      case 'sparkle':
        return <Sparkles className="text-royal-gold" style={{ width: `${size * 24}px`, height: `${size * 24}px` }} />;
      case 'coin':
      default:
        return <Coins className="text-royal-gold" style={{ width: `${size * 24}px`, height: `${size * 24}px` }} />;
    }
  };

  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {/* Background effect */}
          <motion.div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Crown animation */}
          <motion.div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotate: 0,
              transition: { 
                type: "spring",
                stiffness: 260,
                damping: 20
              }
            }}
            exit={{ scale: 0, opacity: 0, rotate: 10 }}
          >
            <Crown 
              className={cn(
                "text-royal-gold filter drop-shadow-glow animate-pulse",
                effectScale === 'small' && "w-20 h-20",
                effectScale === 'medium' && "w-32 h-32",
                effectScale === 'large' && "w-48 h-48",
                effectScale === 'epic' && "w-56 h-56"
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
              "text-royal-gold font-extrabold drop-shadow-glow",
              effectScale === 'small' && "text-3xl",
              effectScale === 'medium' && "text-4xl",
              effectScale === 'large' && "text-5xl",
              effectScale === 'epic' && "text-6xl"
            )}>
              +${amount.toFixed(2)}
            </div>
            
            {/* Random messages */}
            {messages.map((message, index) => (
              <motion.div 
                key={index}
                className={cn(
                  "text-white/90 flex justify-center items-center gap-1 my-1",
                  effectScale === 'small' && "text-sm",
                  effectScale === 'medium' && "text-base",
                  effectScale === 'large' && "text-lg",
                  effectScale === 'epic' && "text-xl"
                )}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (index * 0.2) }}
              >
                <ChevronsUp className="h-4 w-4" />
                <span>{message}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Falling particles */}
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
                rotate: particle.rotation + (Math.random() > 0.5 ? 360 : -360),
                opacity: 0
              }}
              transition={{ 
                duration: 2 + Math.random() * 2,
                ease: "linear"
              }}
            >
              {getParticleIcon(particle.type, particle.size)}
            </motion.div>
          ))}
          
          {/* Radial glow effect for larger amounts */}
          {amount >= 100 && (
            <motion.div 
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(212,175,55,0.3) 0%, rgba(0,0,0,0) 70%)`,
                width: amount >= 500 ? '800px' : '600px',
                height: amount >= 500 ? '800px' : '600px',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.7 }}
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default RoyalDepositEffect;
