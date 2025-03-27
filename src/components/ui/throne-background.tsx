
import React, { useEffect, useRef } from 'react';

interface ThroneBackgroundProps {
  variant?: 'default' | 'purple' | 'gold' | 'blue';
  density?: 'low' | 'medium' | 'high';
  animate?: boolean;
  particles?: boolean;
}

const ThroneBackground = ({ 
  variant = 'default', 
  density = 'medium',
  animate = true,
  particles = false
}: ThroneBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const getColor = () => {
    switch (variant) {
      case 'purple': return 'royal-purple';
      case 'gold': return 'royal-gold';
      case 'blue': return 'royal-blue';
      default: return '';
    }
  };
  
  const getElementCount = () => {
    switch (density) {
      case 'low': return 3;
      case 'high': return 12;
      default: return 6;
    }
  };
  
  const color = getColor();
  const elements = getElementCount();
  
  useEffect(() => {
    if (particles && containerRef.current) {
      const container = containerRef.current;
      
      // Clear any existing particles
      const existingParticles = container.querySelectorAll('.royal-particle');
      existingParticles.forEach(particle => particle.remove());
      
      // Create new particles
      const particleCount = variant === 'default' ? 20 : 15;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('royal-particle');
        
        // Set particle color based on variant
        if (variant === 'purple') {
          particle.style.backgroundColor = 'rgba(176, 38, 255, 0.5)';
        } else if (variant === 'gold') {
          particle.style.backgroundColor = 'rgba(255, 215, 0, 0.5)';
        } else if (variant === 'blue') {
          particle.style.backgroundColor = 'rgba(30, 86, 160, 0.5)';
        }
        
        // Randomize particle properties
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.opacity = `${Math.random() * 0.6 + 0.2}`;
        
        // Randomize animation duration and delay
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
        
        container.appendChild(particle);
      }
    }
  }, [particles, variant]);
  
  const renderElements = () => {
    const backgroundElements = [];
    
    for (let i = 0; i < elements; i++) {
      const size = Math.floor(Math.random() * 250) + 150;
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      const delay = Math.floor(Math.random() * 5);
      const duration = 3 + Math.random() * 4;
      
      backgroundElements.push(
        <div 
          key={i}
          className={`absolute rounded-full ${color ? `bg-${color}/10` : 'bg-gradient-to-br from-royal-purple/10 via-royal-gold/10 to-royal-blue/10'} blur-[100px] ${animate ? 'animate-pulse-slow' : ''}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            opacity: Math.random() * 0.35 + 0.1
          }}
        />
      );
    }
    
    return backgroundElements;
  };
  
  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      {renderElements()}
      {particles && <div className="royal-particles"></div>}
      <div className="absolute inset-0 bg-background/30"></div>
    </div>
  );
};

export default ThroneBackground;
