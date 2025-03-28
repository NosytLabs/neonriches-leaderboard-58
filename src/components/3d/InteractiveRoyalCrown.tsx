
import React, { useState, useRef, useEffect } from 'react';
import { Crown, Sparkles } from 'lucide-react';
import useFloatingCoins from '@/hooks/use-floating-coins';
import useFloatingEffects from '@/hooks/use-floating-effects';

interface InteractiveRoyalCrownProps {
  onCrownClick?: () => void;
  showCoins?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  animated?: boolean;
}

// Enhanced interactive crown with improved 3D effects
const InteractiveRoyalCrown: React.FC<InteractiveRoyalCrownProps> = ({ 
  onCrownClick, 
  showCoins = false,
  size = 'medium',
  color = '#D4AF37',
  animated = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { createBurst } = useFloatingCoins();
  
  const { effects } = useFloatingEffects({
    containerRef,
    enabled: animated && isHovered,
    frequency: 0.5,
    density: 'medium',
    colors: ['#D4AF37', '#FFD700', '#FFC125', '#FFDF00'],
    sizes: [3, 5, 8]
  });
  
  // Track mouse movement for 3D effect
  useEffect(() => {
    if (!isHovered || !containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized position (-1 to 1)
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);
      
      // Apply rotation (limited range)
      setRotation({
        x: normalizedY * 15, // Tilt up/down
        y: normalizedX * 15  // Tilt left/right
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);
  
  const handleCrownClick = () => {
    setIsAnimating(true);
    onCrownClick?.();
    
    if (showCoins) {
      createBurst(30);
    }
    
    // Add click effect
    const element = containerRef.current;
    if (element) {
      element.classList.add('crown-click-effect');
      setTimeout(() => {
        element.classList.remove('crown-click-effect');
      }, 700);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };
  
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'h-16 w-16';
      case 'large':
        return 'h-32 w-32';
      case 'medium':
      default:
        return 'h-24 w-24';
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className={`relative flex items-center justify-center cursor-pointer transition-all duration-300 ${
        isHovered ? 'scale-110' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      onClick={handleCrownClick}
      style={{
        perspective: '1000px'
      }}
    >
      {/* Ambient glow */}
      <div className={`absolute inset-0 bg-royal-gold/20 rounded-full filter blur-xl animate-pulse-slow ${getSizeClass()}`}></div>
      
      {/* Gold dust particles */}
      {effects.map((effect) => (
        <div
          key={effect.id}
          className="absolute rounded-full floating-particle animate-float"
          style={{
            left: `${effect.x}px`,
            top: `${effect.y}px`,
            width: `${effect.size}px`,
            height: `${effect.size}px`,
            backgroundColor: effect.color,
            opacity: effect.opacity,
          }}
        />
      ))}
      
      {/* The crown with 3D rotation effect */}
      <div 
        className="transform transition-transform duration-200"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <Crown 
          className={`relative text-royal-gold animate-crown-glow z-10 drop-shadow-lg ${getSizeClass()}`} 
          style={{ color }}
        />
        
        {/* Sparkle effects */}
        <Sparkles 
          size={size === 'small' ? 10 : size === 'large' ? 24 : 16} 
          className="absolute top-0 right-0 text-white animate-sparkle" 
          style={{ animationDelay: '0.5s' }} 
        />
        <Sparkles 
          size={size === 'small' ? 8 : size === 'large' ? 20 : 12} 
          className="absolute bottom-1/4 left-0 text-royal-gold animate-sparkle" 
          style={{ animationDelay: '1.2s' }} 
        />
      </div>
      
      {/* Interactive hover effect */}
      {isHovered && (
        <div className="absolute inset-0 rounded-full border-2 border-royal-gold/50 animate-pulse-slow"></div>
      )}
    </div>
  );
};

export default InteractiveRoyalCrown;
