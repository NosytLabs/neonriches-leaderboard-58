
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

interface EnhancedCrownEffectProps {
  isActive?: boolean;
  scale?: number;
  duration?: number;
  delay?: number;
  color?: string;
  effectType?: 'spin' | 'float' | 'pulse' | 'glow';
  effectIntensity?: 'low' | 'medium' | 'high';
  onComplete?: () => void;
  interactive?: boolean;
  className?: string;
}

const EnhancedCrownEffect: React.FC<EnhancedCrownEffectProps> = ({
  isActive = true,
  scale = 1,
  duration = 3,
  delay = 0,
  color = '#FFD700',
  effectType = 'spin',
  effectIntensity = 'medium',
  onComplete,
  interactive = false,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isAnimating, setIsAnimating] = useState(isActive);
  const effectContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsAnimating(isActive);
    if (!isActive && isComplete) {
      setIsComplete(false);
    }
  }, [isActive, isComplete]);
  
  const getEffectIntensityValue = () => {
    switch (effectIntensity) {
      case 'low': return 0.5;
      case 'medium': return 1;
      case 'high': return 1.5;
      default: return 1;
    }
  };
  
  const getEffectAnimation = () => {
    const intensity = getEffectIntensityValue();
    
    switch (effectType) {
      case 'spin':
        return {
          rotate: [0, 360],
          transition: {
            duration: duration * intensity,
            repeat: Infinity,
            ease: "linear",
            delay,
          }
        };
      case 'float':
        return {
          y: [0, -10 * intensity, 0],
          transition: {
            duration: duration * intensity,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }
        };
      case 'pulse':
        return {
          scale: [1, 1 + (0.2 * intensity), 1],
          transition: {
            duration: duration * intensity,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }
        };
      case 'glow':
        return {
          opacity: [0.7, 1, 0.7],
          filter: [
            'drop-shadow(0 0 2px ' + color + ')',
            'drop-shadow(0 0 ' + (8 * intensity) + 'px ' + color + ')',
            'drop-shadow(0 0 2px ' + color + ')',
          ],
          transition: {
            duration: duration * intensity,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }
        };
      default:
        return {};
    }
  };
  
  const getInteractiveAnimation = () => {
    if (!interactive) return {};
    
    switch (effectType) {
      case 'spin':
        return {
          rotate: isHovered ? [0, 180, 360] : [0, 0],
          transition: {
            duration: isHovered ? 1 : 0.3,
            ease: "easeOut",
          }
        };
      case 'float':
        return {
          y: isHovered ? -15 : 0,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          }
        };
      case 'pulse':
        return {
          scale: isHovered ? 1.3 : 1,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          }
        };
      case 'glow':
        return {
          filter: isHovered 
            ? 'drop-shadow(0 0 8px ' + color + ')'
            : 'drop-shadow(0 0 2px ' + color + ')',
          transition: {
            duration: 0.3,
            ease: "easeOut",
          }
        };
      default:
        return {};
    }
  };
  
  const handleAnimationComplete = () => {
    if (isActive && !isComplete) {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  };
  
  if (!isAnimating && !interactive) return null;
  
  return (
    <div 
      ref={effectContainerRef}
      className={`crown-effect-container ${className}`}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="crown-effect"
        animate={interactive ? getInteractiveAnimation() : getEffectAnimation()}
        onAnimationComplete={handleAnimationComplete}
        style={{
          color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `scale(${scale})`,
        }}
      >
        <Crown 
          size={24 * scale} 
          strokeWidth={2}
          color={color}
        />
      </motion.div>
    </div>
  );
};

export default EnhancedCrownEffect;
