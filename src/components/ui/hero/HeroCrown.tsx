
import React, { useState, useEffect, useRef } from 'react';
import { Crown, Sparkles, Star } from 'lucide-react';

interface HeroCrownProps {
  onClick: () => void;
  className?: string;
  animated?: boolean;
}

const HeroCrown = ({ onClick, className = '', animated = true }: HeroCrownProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const crownRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Array<{ id: number, x: number, y: number, size: number, delay: number }>>([]);
  
  // Generate decorative stars
  useEffect(() => {
    if (!animated) return;
    
    const newStars = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 200 - 100, // -100 to 100
      y: Math.random() * 200 - 100, // -100 to 100
      size: 3 + Math.random() * 12,
      delay: Math.random() * 2
    }));
    
    setStars(newStars);
  }, [animated]);
  
  // 3D rotation effect on mouse move
  useEffect(() => {
    if (!animated || !crownRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = crownRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      
      // Calculate rotation (max 15 degrees)
      const rotX = (distY / (window.innerHeight / 2)) * 10;
      const rotY = -(distX / (window.innerWidth / 2)) * 10;
      
      setRotation({ x: rotX, y: rotY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [animated]);
  
  return (
    <div 
      ref={crownRef}
      className={`relative mb-10 cursor-pointer transition-transform duration-500 hover:scale-125 ${className}`}
      onClick={onClick}
      style={{ perspective: '1000px' }}
    >
      {/* Ambient glow background */}
      <div className="absolute -inset-16 bg-gradient-to-r from-royal-gold/20 via-royal-gold/30 to-royal-gold/20 blur-2xl rounded-full animate-pulse-slow"></div>
      
      {/* Crown with 3D rotation effect */}
      <div 
        className="relative transition-transform duration-200"
        style={{ 
          transform: animated ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : 'none',
          transformStyle: 'preserve-3d'
        }}
      >
        <Crown 
          size={animated ? 140 : 120} 
          className="text-royal-gold animate-crown-glow drop-shadow-xl" 
          style={{ filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))' }}
        />
        
        {/* Crown jewels */}
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse"
          style={{ 
            boxShadow: '0 0 10px 2px rgba(220, 38, 38, 0.7)',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(5px)'
          }}
        />
        
        <div 
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"
          style={{ 
            boxShadow: '0 0 8px 2px rgba(59, 130, 246, 0.7)',
            animationDelay: '0.5s',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(5px)'
          }}
        />
        
        <div 
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse"
          style={{ 
            boxShadow: '0 0 8px 2px rgba(34, 197, 94, 0.7)',
            animationDelay: '1s',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(5px)'
          }}
        />
      </div>
      
      {/* Decorative elements */}
      <Sparkles 
        size={30} 
        className="absolute -top-4 -right-4 text-royal-gold animate-sparkle" 
        style={{ animationDelay: '0.5s' }} 
      />
      <Sparkles 
        size={30} 
        className="absolute -bottom-4 -left-4 text-royal-gold animate-sparkle" 
        style={{ animationDelay: '1s' }} 
      />
      <Sparkles 
        size={20} 
        className="absolute top-1/4 -left-8 text-royal-gold animate-sparkle" 
        style={{ animationDelay: '1.5s' }} 
      />
      <Sparkles 
        size={20} 
        className="absolute bottom-1/4 -right-8 text-royal-gold animate-sparkle" 
        style={{ animationDelay: '2s' }} 
      />
      
      {/* Animated stars in background */}
      {animated && stars.map(star => (
        <Star 
          key={star.id}
          size={star.size}
          className="absolute text-royal-gold/60 animate-pulse-slow"
          style={{
            top: `calc(50% + ${star.y}px)`,
            left: `calc(50% + ${star.x}px)`,
            animationDelay: `${star.delay}s`,
            opacity: 0.7,
            transform: `rotate(${star.id * 30}deg)`,
            filter: 'drop-shadow(0 0 2px rgba(255, 215, 0, 0.3))'
          }}
        />
      ))}
    </div>
  );
};

export default HeroCrown;
