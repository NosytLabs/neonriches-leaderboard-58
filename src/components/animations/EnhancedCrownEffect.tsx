
import React, { useEffect, useRef, useState } from 'react';
import { Crown } from 'lucide-react';

interface EnhancedCrownEffectProps {
  size?: number;
  className?: string;
  interactive?: boolean;
  opacity?: number;
}

const EnhancedCrownEffect: React.FC<EnhancedCrownEffectProps> = ({
  size = 100,
  className = '',
  interactive = true,
  opacity = 0.8
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<JSX.Element[]>([]);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [crownPosition, setCrownPosition] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const lastUpdateTimeRef = useRef<number>(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  
  // Initialize crown position
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCrownPosition({
        x: rect.width / 2,
        y: rect.height / 2
      });
    }
  }, []);
  
  // Handle mouse movement for interactive mode
  useEffect(() => {
    if (!interactive) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsMouseOver(true));
      container.addEventListener('mouseleave', () => setIsMouseOver(false));
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsMouseOver(true));
        container.removeEventListener('mouseleave', () => setIsMouseOver(false));
      }
    };
  }, [interactive]);
  
  // Crown movement animation
  useEffect(() => {
    if (!interactive) return;
    
    const animateCrown = (timestamp: number) => {
      // Limit updates to 60fps
      if (timestamp - lastUpdateTimeRef.current < 16) {
        animationFrameRef.current = requestAnimationFrame(animateCrown);
        return;
      }
      
      lastUpdateTimeRef.current = timestamp;
      
      if (isMouseOver && containerRef.current) {
        // Smooth follow with easing
        setCrownPosition(prev => ({
          x: prev.x + (mousePositionRef.current.x - prev.x) * 0.1,
          y: prev.y + (mousePositionRef.current.y - prev.y) * 0.1
        }));
      } else {
        // Return to center with bobbing motion
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (containerRect) {
          const centerX = containerRect.width / 2;
          const centerY = containerRect.height / 2;
          const time = timestamp / 1000;
          
          setCrownPosition({
            x: centerX + Math.sin(time) * 10,
            y: centerY + Math.cos(time * 0.8) * 5
          });
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animateCrown);
    };
    
    animationFrameRef.current = requestAnimationFrame(animateCrown);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactive, isMouseOver]);
  
  // Generate particles
  useEffect(() => {
    const particleCount = 15;
    const generateParticles = () => {
      const newParticles: JSX.Element[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        const particleSize = Math.random() * 4 + 2;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        
        newParticles.push(
          <div
            key={i}
            className="absolute bg-royal-gold rounded-full animate-particle"
            style={{
              width: `${particleSize}px`,
              height: `${particleSize}px`,
              left: `${startX}%`,
              top: `${startY}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              boxShadow: '0 0 4px var(--royal-gold)',
              filter: 'blur(1px)'
            }}
          />
        );
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    const intervalId = setInterval(generateParticles, 2000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        opacity
      }}
    >
      {/* Particle effect background */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {particles}
      </div>
      
      {/* Crown gradient bg */}
      <div 
        className="absolute rounded-full bg-gradient-radial from-royal-gold/30 to-transparent"
        style={{
          width: `${size * 0.8}px`,
          height: `${size * 0.8}px`,
          left: `${crownPosition.x - (size * 0.4)}px`,
          top: `${crownPosition.y - (size * 0.4)}px`,
          transition: 'left 0.1s, top 0.1s',
          filter: 'blur(8px)'
        }}
      />
      
      {/* Crown with glow */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${crownPosition.x}px`,
          top: `${crownPosition.y}px`,
          filter: 'drop-shadow(0 0 8px var(--royal-gold))'
        }}
      >
        <Crown 
          size={size * 0.4}
          className="text-royal-gold animate-float"
        />
      </div>
    </div>
  );
};

export default EnhancedCrownEffect;
