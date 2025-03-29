
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BoostEffect } from '@/types/boostEffects';
import { Sparkles, Crown, Star, Zap } from 'lucide-react';

interface BoostEffectPreviewProps {
  boost: BoostEffect;
  isActive?: boolean;
}

const BoostEffectPreview: React.FC<BoostEffectPreviewProps> = ({ boost, isActive = true }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; color: string }>>([]);
  
  useEffect(() => {
    if (isActive && (boost.type === 'effect' || boost.type === 'animation')) {
      // Generate particles
      const newParticles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 6,
        delay: Math.random() * 3,
        color: boost.tier === 'royal' 
          ? '#D4AF37' 
          : boost.tier === 'premium' 
            ? '#9b87f5' 
            : '#ffffff'
      }));
      
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [boost, isActive]);
  
  const getBoostIcon = () => {
    switch (boost.type) {
      case 'appearance':
        return <Sparkles className="h-10 w-10 text-royal-gold" />;
      case 'visibility':
        return <Star className="h-10 w-10 text-royal-gold" />;
      case 'effect':
        return <Crown className="h-10 w-10 text-royal-gold" />;
      case 'animation':
        return <Zap className="h-10 w-10 text-royal-gold" />;
      default:
        return <Sparkles className="h-10 w-10 text-royal-gold" />;
    }
  };
  
  return (
    <div className="w-full aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
      
      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: [0, -20, -40],
            x: [0, particle.id % 2 === 0 ? 10 : -10, 0]
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Glow Effect for Premium and Royal tiers */}
      {(boost.tier === 'premium' || boost.tier === 'royal') && (
        <motion.div
          className={`absolute inset-0 rounded-full blur-xl ${
            boost.tier === 'royal' ? 'bg-royal-gold/20' : 'bg-royal-purple/20'
          }`}
          initial={{ scale: 0.8, opacity: 0.2 }}
          animate={{ 
            scale: [0.8, 1.1, 0.8],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {/* Central Icon with Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            rotate: boost.type === 'animation' ? 360 : 0
          }}
          transition={{
            duration: boost.type === 'animation' ? 20 : 0.5,
            repeat: boost.type === 'animation' ? Infinity : undefined,
            ease: boost.type === 'animation' ? "linear" : "easeOut"
          }}
        >
          {getBoostIcon()}
        </motion.div>
        
        {/* Label */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`
              inline-block px-2 py-1 rounded text-sm font-medium
              ${boost.tier === 'royal' ? 'bg-royal-gold/20 text-royal-gold' : ''}
              ${boost.tier === 'premium' ? 'bg-royal-purple/20 text-royal-purple' : ''}
              ${boost.tier === 'basic' ? 'bg-gray-700/50 text-gray-300' : ''}
            `}
          >
            {boost.tier.toUpperCase()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BoostEffectPreview;
